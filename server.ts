import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import crypto from 'crypto';
import type { TargetResolvedArtifact } from './src/types';

// Initialize lazy Gemini client
let genAiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!genAiClient) {
    genAiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return genAiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // Health check endpoint
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({
      status: 'ok',
      system: 'MARA + SCOUT Query-Resolved Candidate Projection Pipeline',
      version: '2026.08.10-F',
      hasApiKey: !!process.env.GEMINI_API_KEY,
    });
  });

  // SCOUT Decompose API (Stages 1-3)
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
          error: 'GEMINI_API_KEY not configured. Falling back to local execution engine.',
          useLocalFallback: true,
        });
        return;
      }

      const prompt = `You are SCOUT (Target Compiler), the first machine in the MARA+SCOUT Governed Translation Pipeline (Spec 2026.08.10-F).
Deconstruct the provided raw job posting into canonical Demand Primitives, Comprehension Diagnostics, Negative Space assertions, and SCOUT Exhaust.

CRITICAL GOVERNING PROHIBITIONS (LOGC-01):
1. NO_TITLE_EVIDENCE: The bestowed job title must NEVER appear as operational action or object evidence.
2. NO_FLUFF_ADMISSION: Eliminate marketing fluff ("rockstar", "dynamic", "fast-paced", "years of experience"). Put these in scoutExhaust!
3. BOX_BEFORE_LENS: Deconstruct actual operational duties (actions, objects, mechanisms, effects) before assigning NAICS/ONET.
4. REVERSIBLE_DECOMPOSITION: Every Demand Primitive must contain actor, action, object, relationship (AUTHORITY, COORDINATION, SUPPORT), mechanism, effect, demand_type (TRAIT, SKILL, ABILITY, KNOWLEDGE), and source provenance.
5. HOT_MATCH_ONLY: NAICS (6-digit) and O*NET/SOC (8-digit) must reflect the true economic neighborhood.

RAW JOB POSTING:
"""
${jobPostingText}
"""

Return the output formatted strictly according to the JSON schema.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              targetTitleProvenance: { type: Type.STRING },
              corePurpose: { type: Type.STRING, description: '1-2 sentence existential output purpose' },
              coreMetaphor: { type: Type.STRING, description: 'Role operational metaphor e.g. Control Tower' },
              naicsAnchor: {
                type: Type.OBJECT,
                properties: {
                  code: { type: Type.STRING },
                  title: { type: Type.STRING },
                  rationale: { type: Type.STRING },
                  matchType: { type: Type.STRING, enum: ['HOT_MATCH', 'COLD_MATCH'] },
                  system: { type: Type.STRING },
                },
                required: ['code', 'title', 'rationale', 'matchType', 'system'],
              },
              onetAnchor: {
                type: Type.OBJECT,
                properties: {
                  code: { type: Type.STRING },
                  title: { type: Type.STRING },
                  rationale: { type: Type.STRING },
                  matchType: { type: Type.STRING, enum: ['HOT_MATCH', 'COLD_MATCH'] },
                  system: { type: Type.STRING },
                },
                required: ['code', 'title', 'rationale', 'matchType', 'system'],
              },
              demandPrimitives: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    actor: { type: Type.STRING },
                    action: { type: Type.STRING },
                    object: { type: Type.STRING },
                    relationship: { type: Type.STRING, enum: ['AUTHORITY', 'COORDINATION', 'SUPPORT'] },
                    mechanism: { type: Type.STRING },
                    effect: { type: Type.STRING },
                    demand_type: { type: Type.STRING, enum: ['TRAIT', 'SKILL', 'ABILITY', 'KNOWLEDGE'] },
                    provenance: { type: Type.STRING },
                    isCritical: { type: Type.BOOLEAN },
                  },
                  required: ['id', 'actor', 'action', 'object', 'relationship', 'mechanism', 'effect', 'demand_type', 'provenance'],
                },
              },
              negativeSpace: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    assertion: { type: Type.STRING },
                    reason: { type: Type.STRING },
                  },
                  required: ['id', 'assertion', 'reason'],
                },
              },
              activeReceptors: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              scoutExhaust: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    text: { type: Type.STRING },
                    reason: { type: Type.STRING, enum: ['MARKETING_FLUFF', 'BESTOWED_TITLE', 'STATIC_CREDENTIAL_FILTER', 'NON_OPERATIONAL'] },
                    originalLocation: { type: Type.STRING },
                  },
                  required: ['id', 'text', 'reason', 'originalLocation'],
                },
              },
            },
            required: [
              'targetTitleProvenance',
              'corePurpose',
              'coreMetaphor',
              'naicsAnchor',
              'onetAnchor',
              'demandPrimitives',
              'negativeSpace',
              'activeReceptors',
              'scoutExhaust',
            ],
          },
        },
      });

      const parsed = JSON.parse(response.text || '{}');
      parsed.timestamp = new Date().toISOString();
      res.json(parsed);
    } catch (err: any) {
      console.error('Error in /api/gemini/scout-decompose:', err);
      res.status(500).json({ error: err.message || 'Failed to decompose target posting.', useLocalFallback: true });
    }
  });

  // MARA Traversal & Binding API (Stages 4-6)
  app.post('/api/gemini/mara-bind', async (req: Request, res: Response) => {
    try {
      const { queryBundle, candidateDNA } = req.body;
      if (!queryBundle || !candidateDNA) {
        res.status(400).json({ error: 'queryBundle and candidateDNA are required.' });
        return;
      }

      const ai = getGeminiClient();
      if (!ai) {
        res.status(503).json({
          error: 'GEMINI_API_KEY not configured. Falling back to local execution engine.',
          useLocalFallback: true,
        });
        return;
      }

      const prompt = `You are MARA (Evidence Binding & Projection Engine), the second machine in the MARA+SCOUT Pipeline (Spec 2026.08.10-F).
You perform read-only traversal of the Candidate's Immutable Spatial Evidence Substrate against the SCOUT Query Bundle.

GOVERNING RULES:
1. NO_WRITE_BACK: You cannot alter candidate facts.
2. ABSENCE IS NOT NEGATIVE: An unsupported demand yields MARA Exhaust with reason 'unsupported' or 'non_demonstrated', NOT 'FLOOR' or adverse score unless active contradiction exists.
3. SEMANTIC BANDS:
   - CEILING: Ideal demonstration exceeding base requirement
   - ABOVE_BASELINE: Strong corroboration
   - BASELINE: Presence
   - BELOW_BASELINE: Weak authority
   - FLOOR: Contradiction/failure
4. CORROBORATION: Mark CONVERGENT when multiple domains back one claim, INDEPENDENT for isolated facts.
5. MARA EXHAUST: Every demand that fails to bind must be listed with its reason (unsupported, non_demonstrated, contradicted, insufficient_authority).

QUERY BUNDLE:
${JSON.stringify(queryBundle, null, 2)}

CANDIDATE SPATIAL DNA:
${JSON.stringify(candidateDNA, null, 2)}

Produce the Binding Matrix and MARA Exhaust.`;

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
                    demandId: { type: Type.STRING },
                    evidenceId: { type: Type.STRING },
                    semanticBand: {
                      type: Type.STRING,
                      enum: ['CEILING', 'ABOVE_BASELINE', 'BASELINE', 'BELOW_BASELINE', 'FLOOR'],
                    },
                    score: { type: Type.NUMBER },
                    corroborationType: { type: Type.STRING, enum: ['CONVERGENT', 'INDEPENDENT'] },
                    corroboratingEvidenceIds: { type: Type.ARRAY, items: { type: Type.STRING } },
                    rationale: { type: Type.STRING },
                    bandOffset: { type: Type.NUMBER },
                  },
                  required: ['demandId', 'evidenceId', 'semanticBand', 'score', 'corroborationType', 'rationale', 'bandOffset'],
                },
              },
              maraExhaust: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    demandId: { type: Type.STRING },
                    reason: {
                      type: Type.STRING,
                      enum: ['unsupported', 'non_demonstrated', 'contradicted', 'insufficient_authority'],
                    },
                    detailedAnalysis: { type: Type.STRING },
                    severity: { type: Type.STRING, enum: ['CRITICAL_GAP', 'SECONDARY_GAP', 'NEUTRAL_ABSENCE'] },
                  },
                  required: ['id', 'demandId', 'reason', 'detailedAnalysis', 'severity'],
                },
              },
              projectionCenter: {
                type: Type.OBJECT,
                properties: {
                  x: { type: Type.NUMBER },
                  y: { type: Type.NUMBER },
                  z: { type: Type.NUMBER },
                },
                required: ['x', 'y', 'z'],
              },
              isBlocked: { type: Type.BOOLEAN },
              blockReason: { type: Type.STRING },
            },
            required: ['boundAtoms', 'maraExhaust', 'projectionCenter', 'isBlocked'],
          },
        },
      });

      const parsed = JSON.parse(response.text || '{}');
      const freezeTimestamp = new Date().toISOString();
      const freezeHash = '0x' + crypto.createHash('sha256').update(JSON.stringify(parsed.boundAtoms) + freezeTimestamp).digest('hex').substring(0, 40);

      // Re-hydrate full DemandPrimitive inside maraExhaust if needed
      const maraExhaustHydrated = parsed.maraExhaust.map((mex: any) => {
        const dp = queryBundle.demandPrimitives.find((p: any) => p.id === mex.demandId) || {
          id: mex.demandId,
          actor: 'Incumbent',
          action: 'Requirement',
          object: 'Duty',
          relationship: 'COORDINATION',
          mechanism: 'Process',
          effect: 'Outcome',
          demand_type: 'SKILL',
          provenance: 'Source',
        };
        return {
          id: mex.id || `MEX-${mex.demandId}`,
          demandPrimitive: dp,
          reason: mex.reason,
          detailedAnalysis: mex.detailedAnalysis,
          severity: mex.severity,
        };
      });

      const ceilingCount = parsed.boundAtoms.filter((b: any) => b.semanticBand === 'CEILING').length;
      const aboveBaselineCount = parsed.boundAtoms.filter((b: any) => b.semanticBand === 'ABOVE_BASELINE').length;
      const baselineCount = parsed.boundAtoms.filter((b: any) => b.semanticBand === 'BASELINE').length;
      const belowBaselineCount = parsed.boundAtoms.filter((b: any) => b.semanticBand === 'BELOW_BASELINE').length;
      const floorCount = parsed.boundAtoms.filter((b: any) => b.semanticBand === 'FLOOR').length;

      const totalDemands = queryBundle.demandPrimitives?.length || 1;
      const alignmentRatio = (ceilingCount + aboveBaselineCount + baselineCount) / totalDemands;

      const frozenSnapshot = {
        freezeHash,
        freezeTimestamp,
        candidateId: candidateDNA.candidateId,
        targetRoleIdentifier: queryBundle.targetTitleProvenance,
        activeWalls: queryBundle.activeReceptors || ['WORK_HISTORY', 'CREATIVE_WORKS', 'TESTIMONY_BEHAVIOR', 'EDUCATION_COMPETENCY'],
        boundAtoms: parsed.boundAtoms,
        maraExhaust: maraExhaustHydrated,
        projectionCenter: parsed.projectionCenter,
        geometricState: {
          ceilingCount,
          aboveBaselineCount,
          baselineCount,
          belowBaselineCount,
          floorCount,
          alignmentRatio,
        },
        isBlocked: parsed.isBlocked || false,
        blockReason: parsed.blockReason,
      };

      res.json(frozenSnapshot);
    } catch (err: any) {
      console.error('Error in /api/gemini/mara-bind:', err);
      res.status(500).json({ error: err.message || 'Failed to bind candidate evidence.', useLocalFallback: true });
    }
  });

  // ARTIFACT MODEL Render API (Stage 7)
  app.post('/api/gemini/artifact-render', async (req: Request, res: Response) => {
    try {
      const { frozenSnapshot, candidateDNA, queryBundle, artifactType } = req.body;
      if (!frozenSnapshot || !candidateDNA || !queryBundle) {
        res.status(400).json({ error: 'frozenSnapshot, candidateDNA, and queryBundle are required.' });
        return;
      }

      const ai = getGeminiClient();
      if (!ai) {
        res.status(503).json({
          error: 'GEMINI_API_KEY not configured. Falling back to local execution engine.',
          useLocalFallback: true,
        });
        return;
      }

      const prompt = `You are ARTIFACT MODEL (Projection Renderer), the third machine in the MARA+SCOUT Pipeline (Spec 2026.08.10-F).
Render a Target-Resolved ${artifactType || 'TARGET_RESOLVED_RESUME'} based ONLY on the Frozen Projection Snapshot.

CRITICAL RULES:
1. TRACEABILITY CONTRACT: Every single capability sentence must be traceable to a specific Bound Atom and Evidence Packet ID. Include the [EV-XXX] citation at the end of each bullet point!
2. NO DISCOVERY: Do not invent candidate experiences not in the frozen snapshot.
3. NO FLUFF: Use clean, factual operational language.

FROZEN SNAPSHOT:
${JSON.stringify(frozenSnapshot, null, 2)}

QUERY BUNDLE:
${JSON.stringify(queryBundle, null, 2)}

CANDIDATE IDENTITY:
Name: ${candidateDNA.name}
Location: ${candidateDNA.location}

Return the rendered document with section breakdowns and sentence-level traceability links.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              content: { type: Type.STRING },
              sections: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    heading: { type: Type.STRING },
                    content: { type: Type.ARRAY, items: { type: Type.STRING } },
                  },
                  required: ['heading', 'content'],
                },
              },
              traceabilityLinks: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    artifactSentenceIndex: { type: Type.NUMBER },
                    sentenceText: { type: Type.STRING },
                    demandId: { type: Type.STRING },
                    evidenceId: { type: Type.STRING },
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

      // Hydrate links with actual objects
      const fullTraceabilityLinks = parsed.traceabilityLinks.map((link: any) => {
        const boundAtom = frozenSnapshot.boundAtoms.find((b: any) => b.demandId === link.demandId) || frozenSnapshot.boundAtoms[0];
        const demandPrimitive = queryBundle.demandPrimitives.find((d: any) => d.id === link.demandId) || queryBundle.demandPrimitives[0];
        
        let evidencePacket: any = null;
        Object.values(candidateDNA.evidenceRegistry).forEach((list: any) => {
          const found = list.find((e: any) => e.evidence_id === link.evidenceId);
          if (found) evidencePacket = found;
        });

        return {
          artifactSentenceIndex: link.artifactSentenceIndex,
          sentenceText: link.sentenceText,
          boundAtom,
          evidencePacket: evidencePacket || {
            evidence_id: link.evidenceId,
            domain: 'WORK_HISTORY',
            governing_verb: 'Executed',
            entity: 'Target capability',
            authority: 'DIRECT',
            provenance: { source: 'Candidate Record', section: 'History' },
            confidence: 0.95,
            attributes: {},
          },
          demandPrimitive,
        };
      });

      const artifact: TargetResolvedArtifact = {
        id: `ART-${Date.now()}`,
        type: artifactType || 'TARGET_RESOLVED_RESUME',
        title: parsed.title,
        candidateName: candidateDNA.name,
        targetRole: queryBundle.targetTitleProvenance,
        content: parsed.content,
        sections: parsed.sections,
        traceabilityLinks: fullTraceabilityLinks,
        generatedAt: new Date().toISOString(),
        freezeHash: frozenSnapshot.freezeHash,
      };

      res.json(artifact);
    } catch (err: any) {
      console.error('Error in /api/gemini/artifact-render:', err);
      res.status(500).json({ error: err.message || 'Failed to render target-resolved artifact.', useLocalFallback: true });
    }
  });

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`MARA/SCOUT Projection Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
