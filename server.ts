import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import crypto from 'crypto';
import type {
  ArtifactType,
  BoundAtom,
  CandidateSpatialDNA,
  CanonicalCandidateSpatialDNA,
  DemandPrimitive,
  EvidencePacket,
  FrozenSnapshot,
  MaraExhaustItem,
  QueryBundle,
  TargetResolvedArtifact,
} from './src/types';
import {
  GOVERNING_SCHEMA_VERSION,
  allChecksPassed,
  canonicalStringify,
  evaluateScoutGates,
  normalizeCandidateDNA,
  snapshotMaterial,
  validateCandidateDNA,
  validateFrozenSnapshot,
  validateQueryBundle,
} from './src/governance';

let genAiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  if (!genAiClient) {
    genAiClient = new GoogleGenAI({ apiKey, httpOptions: { headers: { 'User-Agent': 'aistudio-build' } } });
  }
  return genAiClient;
}

function sha256(value: unknown): string {
  return crypto.createHash('sha256').update(canonicalStringify(value)).digest('hex');
}

function allEvidence(candidate: CanonicalCandidateSpatialDNA): EvidencePacket[] {
  return Object.values(candidate.evidenceRegistry).flat();
}

function findEvidence(candidate: CanonicalCandidateSpatialDNA, evidenceId: string): EvidencePacket | undefined {
  return allEvidence(candidate).find((packet) => packet.evidence_id === evidenceId);
}

function findDemand(bundle: QueryBundle, demandId: string): DemandPrimitive | undefined {
  return bundle.demandPrimitives.find((demand) => demand.id === demandId);
}

function buildExecutionState(stage6Passed: boolean, queryBundle: QueryBundle) {
  const scout = queryBundle.executionState || evaluateScoutGates(queryBundle);
  return {
    gates: {
      ...scout.gates,
      4: { stage: 4 as const, status: 'PASSED' as const, reasons: [] },
      5: { stage: 5 as const, status: 'PASSED' as const, reasons: [] },
      6: {
        stage: 6 as const,
        status: stage6Passed ? ('PASSED' as const) : ('BLOCKED' as const),
        reasons: stage6Passed ? [] : ['Frozen snapshot failed deterministic validation.'],
      },
    },
    highestPassedStage: stage6Passed ? 6 : 5,
  };
}

async function startServer() {
  const app = express();
  const PORT = 3000;
  app.use(express.json({ limit: '10mb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      system: 'MARA + SCOUT Query-Resolved Candidate Projection Pipeline',
      version: GOVERNING_SCHEMA_VERSION,
      hasApiKey: !!process.env.GEMINI_API_KEY,
    });
  });

  // SCOUT Stages 1-3. Model classification is always marked UNVERIFIED until an external reference validator says otherwise.
  app.post('/api/gemini/scout-decompose', async (req: Request, res: Response) => {
    try {
      const { jobPostingText } = req.body;
      if (!jobPostingText || typeof jobPostingText !== 'string') {
        res.status(400).json({ error: 'jobPostingText is required.' });
        return;
      }

      const ai = getGeminiClient();
      if (!ai) {
        res.status(503).json({
          error: 'GEMINI_API_KEY not configured. No local fallback is implemented.',
          invalidatesDownstream: true,
        });
        return;
      }

      const prompt = `You are SCOUT (Target Compiler), the first machine in the MARA+SCOUT Governed Translation Pipeline.
Deconstruct the raw job posting into reversible Demand Primitives, Negative Space assertions, SCOUT Exhaust, and model-proposed NAICS/O*NET classification anchors.

GOVERNING RULES:
- Do not use bestowed job title as operational evidence.
- Divert marketing fluff and non-operational matter to SCOUT Exhaust.
- Box before lens: reason over operational duties before classification.
- Every Demand Primitive must preserve actor, action, object, relationship, mechanism, effect, demand_type, and source provenance.
- Classification is a MODEL PROPOSAL only. Do not claim external verification.

RAW JOB POSTING:\n\"\"\"\n${jobPostingText}\n\"\"\"\n
Return JSON only.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              targetTitleProvenance: { type: Type.STRING },
              corePurpose: { type: Type.STRING },
              coreMetaphor: { type: Type.STRING },
              naicsAnchor: {
                type: Type.OBJECT,
                properties: {
                  code: { type: Type.STRING }, title: { type: Type.STRING }, rationale: { type: Type.STRING },
                  matchType: { type: Type.STRING, enum: ['HOT_MATCH', 'COLD_MATCH'] }, system: { type: Type.STRING },
                },
                required: ['code', 'title', 'rationale', 'matchType', 'system'],
              },
              onetAnchor: {
                type: Type.OBJECT,
                properties: {
                  code: { type: Type.STRING }, title: { type: Type.STRING }, rationale: { type: Type.STRING },
                  matchType: { type: Type.STRING, enum: ['HOT_MATCH', 'COLD_MATCH'] }, system: { type: Type.STRING },
                },
                required: ['code', 'title', 'rationale', 'matchType', 'system'],
              },
              demandPrimitives: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING }, actor: { type: Type.STRING }, action: { type: Type.STRING }, object: { type: Type.STRING },
                    relationship: { type: Type.STRING, enum: ['AUTHORITY', 'COORDINATION', 'SUPPORT'] },
                    mechanism: { type: Type.STRING }, effect: { type: Type.STRING },
                    demand_type: { type: Type.STRING, enum: ['TRAIT', 'SKILL', 'ABILITY', 'KNOWLEDGE'] },
                    provenance: { type: Type.STRING }, isCritical: { type: Type.BOOLEAN },
                  },
                  required: ['id', 'actor', 'action', 'object', 'relationship', 'mechanism', 'effect', 'demand_type', 'provenance'],
                },
              },
              negativeSpace: {
                type: Type.ARRAY,
                items: { type: Type.OBJECT, properties: { id: { type: Type.STRING }, assertion: { type: Type.STRING }, reason: { type: Type.STRING } }, required: ['id', 'assertion', 'reason'] },
              },
              activeReceptors: { type: Type.ARRAY, items: { type: Type.STRING } },
              scoutExhaust: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING }, text: { type: Type.STRING },
                    reason: { type: Type.STRING, enum: ['MARKETING_FLUFF', 'BESTOWED_TITLE', 'STATIC_CREDENTIAL_FILTER', 'NON_OPERATIONAL'] },
                    originalLocation: { type: Type.STRING },
                  },
                  required: ['id', 'text', 'reason', 'originalLocation'],
                },
              },
            },
            required: ['targetTitleProvenance', 'corePurpose', 'coreMetaphor', 'naicsAnchor', 'onetAnchor', 'demandPrimitives', 'negativeSpace', 'activeReceptors', 'scoutExhaust'],
          },
        },
      });

      const parsed = JSON.parse(response.text || '{}') as QueryBundle;
      parsed.timestamp = new Date().toISOString();
      parsed.naicsAnchor.validationStatus = 'UNVERIFIED';
      parsed.onetAnchor.validationStatus = 'UNVERIFIED';
      delete parsed.naicsAnchor.validationSource;
      delete parsed.onetAnchor.validationSource;
      parsed.executionState = evaluateScoutGates(parsed);
      res.json(parsed);
    } catch (err: any) {
      console.error('Error in /api/gemini/scout-decompose:', err);
      res.status(500).json({ error: err.message || 'Failed to decompose target posting.', invalidatesDownstream: true });
    }
  });

  // MARA Stages 4-6. Requires SCOUT validation gate and canonical five-domain candidate substrate.
  app.post('/api/gemini/mara-bind', async (req: Request, res: Response) => {
    try {
      const { queryBundle, candidateDNA } = req.body as { queryBundle?: QueryBundle; candidateDNA?: CandidateSpatialDNA };
      if (!queryBundle || !candidateDNA) {
        res.status(400).json({ error: 'queryBundle and candidateDNA are required.' });
        return;
      }

      const canonicalCandidate = normalizeCandidateDNA(candidateDNA);
      const candidateChecks = validateCandidateDNA(canonicalCandidate);
      const queryChecks = validateQueryBundle(queryBundle);
      if (!allChecksPassed([...candidateChecks, ...queryChecks])) {
        res.status(422).json({
          error: 'MARA gate blocked by deterministic architecture validation.',
          checks: [...candidateChecks, ...queryChecks],
          invalidatesDownstream: true,
        });
        return;
      }

      const ai = getGeminiClient();
      if (!ai) {
        res.status(503).json({ error: 'GEMINI_API_KEY not configured. No local fallback is implemented.', invalidatesDownstream: true });
        return;
      }

      const prompt = `You are MARA (Evidence Binding & Projection Engine).
Perform read-only traversal of the canonical five-domain candidate evidence registry against the validated SCOUT query bundle.

RULES:
- Never write back to Candidate Core or evidence.
- Absence is not negative evidence.
- Preserve unsupported, contradicted, non-demonstrated, and insufficient-authority as distinct non-bind states.
- Do not infer evidence independence from different domains. Use proposition identity and source lineage supplied in the evidence packet.
- A FLOOR placement requires explicit contradictory evidence; unsupported evidence cannot become FLOOR.
- Semantic Band behavior is preserved by this repair and is not being redesigned.

QUERY BUNDLE:\n${JSON.stringify(queryBundle, null, 2)}\n
CANONICAL CANDIDATE SPATIAL DNA:\n${JSON.stringify(canonicalCandidate, null, 2)}\n
Return binding candidates and MARA exhaust. Reference only existing demand IDs and evidence IDs.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              boundAtoms: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    demandId: { type: Type.STRING }, evidenceId: { type: Type.STRING },
                    semanticBand: { type: Type.STRING, enum: ['CEILING', 'ABOVE_BASELINE', 'BASELINE', 'BELOW_BASELINE', 'FLOOR'] },
                    score: { type: Type.NUMBER }, rationale: { type: Type.STRING }, bandOffset: { type: Type.NUMBER },
                    corroboratingEvidenceIds: { type: Type.ARRAY, items: { type: Type.STRING } },
                  },
                  required: ['demandId', 'evidenceId', 'semanticBand', 'score', 'rationale', 'bandOffset'],
                },
              },
              maraExhaust: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING }, demandId: { type: Type.STRING },
                    reason: { type: Type.STRING, enum: ['unsupported', 'non_demonstrated', 'contradicted', 'insufficient_authority'] },
                    detailedAnalysis: { type: Type.STRING },
                    severity: { type: Type.STRING, enum: ['CRITICAL_GAP', 'SECONDARY_GAP', 'NEUTRAL_ABSENCE'] },
                  },
                  required: ['id', 'demandId', 'reason', 'detailedAnalysis', 'severity'],
                },
              },
              projectionCenter: {
                type: Type.OBJECT,
                properties: { x: { type: Type.NUMBER }, y: { type: Type.NUMBER }, z: { type: Type.NUMBER } },
                required: ['x', 'y', 'z'],
              },
            },
            required: ['boundAtoms', 'maraExhaust', 'projectionCenter'],
          },
        },
      });

      const parsed = JSON.parse(response.text || '{}') as { boundAtoms: BoundAtom[]; maraExhaust: Array<Omit<MaraExhaustItem, 'demandPrimitive'> & { demandId: string }>; projectionCenter: { x: number; y: number; z: number } };

      // Fail closed: every model reference must resolve to source-approved material.
      const hydratedBoundAtoms: BoundAtom[] = parsed.boundAtoms.map((atom) => {
        const evidence = findEvidence(canonicalCandidate, atom.evidenceId);
        const demand = findDemand(queryBundle, atom.demandId);
        if (!evidence || !demand) throw new Error(`Unresolvable binding reference demand=${atom.demandId} evidence=${atom.evidenceId}`);
        const corroborating = (atom.corroboratingEvidenceIds || []).map((id) => {
          const found = findEvidence(canonicalCandidate, id);
          if (!found) throw new Error(`Unresolvable corroborating evidence reference ${id}`);
          return found;
        });
        if (atom.semanticBand === 'FLOOR' && evidence.contradictionState !== 'CONTRADICTED') {
          throw new Error(`Floor placement requires explicitly contradicted evidence: ${atom.evidenceId}`);
        }
        return {
          ...atom,
          propositionId: evidence.propositionId,
          sourceLineageIds: [evidence.sourceLineageId, ...corroborating.map((item) => item.sourceLineageId)],
          independence: evidence.independence,
          corroborationState: evidence.corroborationState,
          contradictionState: evidence.contradictionState,
        };
      });

      const maraExhaust: MaraExhaustItem[] = parsed.maraExhaust.map((item) => {
        const demand = findDemand(queryBundle, item.demandId);
        if (!demand) throw new Error(`Unresolvable MARA exhaust demand reference ${item.demandId}`);
        return {
          id: item.id || `MEX-${item.demandId}`,
          demandPrimitive: demand,
          reason: item.reason,
          detailedAnalysis: item.detailedAnalysis,
          severity: item.severity,
        };
      });

      const evidenceIds = new Set(hydratedBoundAtoms.flatMap((atom) => [atom.evidenceId, ...(atom.corroboratingEvidenceIds || [])]));
      const renderEvidence = [...evidenceIds].map((id) => {
        const evidence = findEvidence(canonicalCandidate, id);
        if (!evidence) throw new Error(`Frozen render boundary cannot resolve evidence ${id}`);
        return evidence;
      });
      const demandIds = new Set([...hydratedBoundAtoms.map((atom) => atom.demandId), ...maraExhaust.map((item) => item.demandPrimitive.id)]);
      const renderDemands = [...demandIds].map((id) => {
        const demand = findDemand(queryBundle, id);
        if (!demand) throw new Error(`Frozen render boundary cannot resolve demand ${id}`);
        return demand;
      });

      const ceilingCount = hydratedBoundAtoms.filter((b) => b.semanticBand === 'CEILING').length;
      const aboveBaselineCount = hydratedBoundAtoms.filter((b) => b.semanticBand === 'ABOVE_BASELINE').length;
      const baselineCount = hydratedBoundAtoms.filter((b) => b.semanticBand === 'BASELINE').length;
      const belowBaselineCount = hydratedBoundAtoms.filter((b) => b.semanticBand === 'BELOW_BASELINE').length;
      const floorCount = hydratedBoundAtoms.filter((b) => b.semanticBand === 'FLOOR').length;
      const totalDemands = queryBundle.demandPrimitives.length || 1;

      const freezeTimestamp = new Date().toISOString();
      const snapshotBase: FrozenSnapshot = {
        schemaVersion: GOVERNING_SCHEMA_VERSION,
        freezeHash: '',
        freezeTimestamp,
        candidateId: canonicalCandidate.candidateCore.candidateId,
        targetRoleIdentifier: queryBundle.targetTitleProvenance,
        activeWalls: queryBundle.activeReceptors,
        boundAtoms: hydratedBoundAtoms,
        maraExhaust,
        projectionCenter: parsed.projectionCenter,
        geometricState: {
          ceilingCount, aboveBaselineCount, baselineCount, belowBaselineCount, floorCount,
          alignmentRatio: (ceilingCount + aboveBaselineCount + baselineCount) / totalDemands,
        },
        projectionSufficiency: {
          satisfied: null,
          reasons: ['Protected YELLOW decision: no minimum projection-sufficiency threshold is defined by this repair.'],
        },
        renderContext: {
          candidate: {
            candidateId: canonicalCandidate.candidateCore.candidateId,
            name: canonicalCandidate.candidateCore.name,
            location: canonicalCandidate.candidateCore.location,
          },
          target: { targetRoleIdentifier: queryBundle.targetTitleProvenance, purpose: queryBundle.corePurpose },
          demands: renderDemands,
          evidence: renderEvidence,
        },
        boundaryIdentity: {
          queryTimestamp: queryBundle.timestamp,
          candidateId: canonicalCandidate.candidateCore.candidateId,
          schemaVersion: GOVERNING_SCHEMA_VERSION,
        },
        isBlocked: false,
      };

      snapshotBase.executionState = buildExecutionState(true, queryBundle);
      snapshotBase.freezeHash = sha256(snapshotMaterial(snapshotBase));
      const snapshotChecks = validateFrozenSnapshot(snapshotBase);
      if (!allChecksPassed(snapshotChecks)) {
        res.status(422).json({ error: 'Frozen snapshot failed deterministic validation.', checks: snapshotChecks, invalidatesDownstream: true });
        return;
      }

      res.json(snapshotBase);
    } catch (err: any) {
      console.error('Error in /api/gemini/mara-bind:', err);
      res.status(422).json({ error: err.message || 'Failed to bind candidate evidence.', invalidatesDownstream: true });
    }
  });

  // ARTIFACT Stage 7. Contractually limited to the Frozen Snapshot.
  app.post('/api/gemini/artifact-render', async (req: Request, res: Response) => {
    try {
      const { frozenSnapshot, artifactType } = req.body as { frozenSnapshot?: FrozenSnapshot; artifactType?: ArtifactType };
      if (!frozenSnapshot) {
        res.status(400).json({ error: 'frozenSnapshot is required.' });
        return;
      }

      const checks = validateFrozenSnapshot(frozenSnapshot);
      const expectedHash = sha256(snapshotMaterial(frozenSnapshot));
      checks.push({
        ruleId: 'FREEZE_INTEGRITY', name: 'Frozen Snapshot hash covers material payload',
        passed: expectedHash === frozenSnapshot.freezeHash,
        details: expectedHash === frozenSnapshot.freezeHash ? 'Freeze hash matches canonical material payload.' : 'Frozen payload changed after hashing.',
        severity: 'ERROR',
      });
      if (!allChecksPassed(checks)) {
        res.status(422).json({ error: 'Artifact rendering blocked by snapshot validation.', checks });
        return;
      }

      const ai = getGeminiClient();
      if (!ai) {
        res.status(503).json({ error: 'GEMINI_API_KEY not configured. No local fallback is implemented.' });
        return;
      }

      const prompt = `You are ARTIFACT MODEL, the third machine in the MARA+SCOUT pipeline.
Render a target-resolved ${artifactType || 'TARGET_RESOLVED_RESUME'} using ONLY the Frozen Snapshot below.
Do not infer or discover candidate evidence outside this payload. Every capability sentence must cite an evidence ID that exists inside renderContext.evidence. Unsupported MARA Exhaust may inform omission or gap-oriented artifacts but must not be bridged into candidate claims.

FROZEN SNAPSHOT:\n${JSON.stringify(frozenSnapshot, null, 2)}\n
Return JSON only.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING }, content: { type: Type.STRING },
              sections: {
                type: Type.ARRAY,
                items: { type: Type.OBJECT, properties: { heading: { type: Type.STRING }, content: { type: Type.ARRAY, items: { type: Type.STRING } } }, required: ['heading', 'content'] },
              },
              traceabilityLinks: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    artifactSentenceIndex: { type: Type.NUMBER }, sentenceText: { type: Type.STRING }, demandId: { type: Type.STRING }, evidenceId: { type: Type.STRING },
                  },
                  required: ['artifactSentenceIndex', 'sentenceText', 'demandId', 'evidenceId'],
                },
              },
            },
            required: ['title', 'content', 'sections', 'traceabilityLinks'],
          },
        },
      });

      const parsed = JSON.parse(response.text || '{}');
      const context = frozenSnapshot.renderContext!;
      const traceabilityLinks = parsed.traceabilityLinks.map((link: any) => {
        const boundAtom = frozenSnapshot.boundAtoms.find((b) => b.demandId === link.demandId && b.evidenceId === link.evidenceId);
        const demandPrimitive = context.demands.find((d) => d.id === link.demandId);
        const evidencePacket = context.evidence.find((e) => e.evidence_id === link.evidenceId);
        if (!boundAtom || !demandPrimitive || !evidencePacket) {
          throw new Error(`Artifact traceability reference is outside frozen boundary demand=${link.demandId} evidence=${link.evidenceId}`);
        }
        return { artifactSentenceIndex: link.artifactSentenceIndex, sentenceText: link.sentenceText, boundAtom, evidencePacket, demandPrimitive };
      });

      const artifact: TargetResolvedArtifact = {
        id: `ART-${Date.now()}`,
        type: artifactType || 'TARGET_RESOLVED_RESUME',
        title: parsed.title,
        candidateName: context.candidate.name,
        targetRole: context.target.targetRoleIdentifier,
        content: parsed.content,
        sections: parsed.sections,
        traceabilityLinks,
        generatedAt: new Date().toISOString(),
        freezeHash: frozenSnapshot.freezeHash,
      };
      res.json(artifact);
    } catch (err: any) {
      console.error('Error in /api/gemini/artifact-render:', err);
      res.status(422).json({ error: err.message || 'Failed to render target-resolved artifact.' });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({ server: { middlewareMode: true }, appType: 'spa' });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => res.sendFile(path.join(distPath, 'index.html')));
  }

  app.listen(PORT, '0.0.0.0', () => console.log(`MARA/SCOUT Projection Server running at http://0.0.0.0:${PORT}`));
}

startServer();
