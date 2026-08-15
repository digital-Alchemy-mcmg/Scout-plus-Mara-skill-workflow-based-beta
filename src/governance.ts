import type {
  CandidateCore,
  CandidateSpatialDNA,
  CanonicalCandidateSpatialDNA,
  EvidenceDomain,
  EvidencePacket,
  LegacyEvidencePacket,
  QueryBundle,
  FrozenSnapshot,
  ValidationCheckResult,
  ExecutionGateState,
  GateResult,
  ClassificationValidationStatus,
} from './types';

export const GOVERNING_SCHEMA_VERSION = '2026.08.15-repair-1';

export const EVIDENCE_DOMAINS: EvidenceDomain[] = [
  'WORK_HISTORY',
  'EDUCATION_COMPETENCY',
  'CREATIVE_WORKS',
  'PSYCHOMETRICS',
  'TESTIMONY_BEHAVIOR',
];

const domainSet = new Set<string>(EVIDENCE_DOMAINS);

export function isEvidenceDomain(value: string): value is EvidenceDomain {
  return domainSet.has(value);
}

function clamp01(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(1, value));
}

function inferCandidateRelationship(authority?: LegacyEvidencePacket['authority']): EvidencePacket['candidateRelationship'] {
  if (authority === 'DIRECT') return 'DIRECT';
  if (authority === 'CONTRIBUTORY') return 'CONTRIBUTORY';
  if (authority === 'STATIONARY') return 'OBSERVED';
  return 'UNKNOWN';
}

export function normalizeCandidateDNA(input: CandidateSpatialDNA): CanonicalCandidateSpatialDNA {
  const core: CandidateCore = input.candidateCore || {
    candidateId: input.candidateId,
    name: input.name,
    location: input.location,
    currentRoleProvenance: input.currentRoleProvenance,
    biographical: {},
  };

  const registry = Object.fromEntries(EVIDENCE_DOMAINS.map((domain) => [domain, []])) as Record<EvidenceDomain, EvidencePacket[]>;

  for (const [domainKey, packets] of Object.entries(input.evidenceRegistry || {})) {
    if (domainKey === 'IDENTITY') continue; // Candidate Core is not evidence.
    if (!isEvidenceDomain(domainKey)) continue;

    for (const raw of packets || []) {
      if (!isEvidenceDomain(raw.domain)) continue;
      const modern = raw as Partial<EvidencePacket> & LegacyEvidencePacket;
      const packet: EvidencePacket = {
        evidence_id: modern.evidence_id,
        domain: raw.domain,
        governing_verb: modern.governing_verb,
        entity: modern.entity,
        propositionId: modern.propositionId || `PROP:${modern.evidence_id}`,
        candidateRelationship: modern.candidateRelationship || inferCandidateRelationship(modern.authority),
        sourceClass: modern.sourceClass || 'UNSPECIFIED',
        authorityCeiling: clamp01(modern.authorityCeiling ?? 0),
        extractionConfidence: clamp01(modern.extractionConfidence ?? modern.confidence ?? 0),
        authorityVerified: modern.authorityVerified ?? false,
        sourceLineageId: modern.sourceLineageId || `LINEAGE:${modern.provenance.source}`,
        independence: modern.independence || 'UNKNOWN',
        corroborationState: modern.corroborationState || 'NONE',
        contradictionState: modern.contradictionState || 'NONE',
        convergesWithEvidenceIds: modern.convergesWithEvidenceIds || [],
        provenance: modern.provenance,
        timestamp: modern.timestamp,
        attributes: modern.attributes || {},
      };
      registry[domainKey].push(packet);
    }
  }

  return { candidateCore: core, evidenceRegistry: registry };
}

export function canonicalStringify(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonicalStringify).join(',')}]`;
  const obj = value as Record<string, unknown>;
  return `{${Object.keys(obj)
    .sort()
    .map((key) => `${JSON.stringify(key)}:${canonicalStringify(obj[key])}`)
    .join(',')}}`;
}

export function classificationStatus(bundle: QueryBundle): ClassificationValidationStatus {
  const statuses = [bundle.naicsAnchor.validationStatus || 'UNVERIFIED', bundle.onetAnchor.validationStatus || 'UNVERIFIED'];
  if (statuses.includes('REJECTED')) return 'REJECTED';
  if (statuses.every((status) => status === 'VALIDATED')) return 'VALIDATED';
  return 'UNVERIFIED';
}

function gate(stage: GateResult['stage'], status: GateResult['status'], reasons: string[] = []): GateResult {
  return { stage, status, reasons };
}

export function evaluateScoutGates(bundle: QueryBundle): ExecutionGateState {
  const gates: ExecutionGateState['gates'] = {};
  const primitives = bundle.demandPrimitives || [];
  const stage1Ok = Array.isArray(bundle.scoutExhaust) && !!bundle.targetTitleProvenance;
  gates[1] = gate(1, stage1Ok ? 'PASSED' : 'BLOCKED', stage1Ok ? [] : ['SCOUT intake output is incomplete.']);

  const reversible = primitives.length > 0 && primitives.every((p) =>
    !!p.id && !!p.actor && !!p.action && !!p.object && !!p.relationship && !!p.mechanism && !!p.effect && !!p.demand_type && !!p.provenance
  );
  const uniqueIds = new Set(primitives.map((p) => p.id)).size === primitives.length;
  gates[2] = gate(2, reversible && uniqueIds ? 'PASSED' : 'BLOCKED', [
    ...(reversible ? [] : ['Demand decomposition is incomplete or provenance is missing.']),
    ...(uniqueIds ? [] : ['Demand primitive IDs are not unique.']),
  ]);

  const status = classificationStatus(bundle);
  gates[3] = gate(
    3,
    status === 'VALIDATED' ? 'PASSED' : 'BLOCKED',
    status === 'UNVERIFIED'
      ? ['NAICS/O*NET remain model classifications; no independent reference validation is attached.']
      : status === 'REJECTED'
        ? ['At least one classification anchor was rejected by validation.']
        : []
  );

  let highestPassedStage = 0;
  for (const stage of [1, 2, 3] as const) {
    if (gates[stage]?.status === 'PASSED' && highestPassedStage === stage - 1) highestPassedStage = stage;
    else break;
  }
  return { gates, highestPassedStage };
}

export function validateCandidateDNA(candidate: CanonicalCandidateSpatialDNA): ValidationCheckResult[] {
  const results: ValidationCheckResult[] = [];
  results.push({
    ruleId: 'CANDIDATE_CORE_FIRST_CLASS',
    name: 'Candidate Core is first-class',
    passed: !!candidate.candidateCore?.candidateId && !!candidate.candidateCore?.name,
    details: 'Identity/biographical subject information is held by Candidate Core.',
    severity: 'ERROR',
  });
  results.push({
    ruleId: 'FIVE_DOMAIN_REGISTRY',
    name: 'Evidence registry uses five domains',
    passed: Object.keys(candidate.evidenceRegistry).every(isEvidenceDomain) && !('IDENTITY' in candidate.evidenceRegistry),
    details: 'IDENTITY is not a legal evidence domain.',
    severity: 'ERROR',
  });

  const packets = Object.values(candidate.evidenceRegistry).flat();
  results.push({
    ruleId: 'EVIDENCE_PROVENANCE',
    name: 'Evidence provenance is complete',
    passed: packets.every((p) => !!p.evidence_id && !!p.provenance?.source && !!p.provenance?.section && !!p.sourceLineageId && !!p.propositionId),
    details: 'Every evidence packet carries proposition identity, source lineage, and source provenance.',
    severity: 'ERROR',
  });
  results.push({
    ruleId: 'AUTHORITY_SEPARATION',
    name: 'Extraction confidence is separate from authority',
    passed: packets.every((p) => p.extractionConfidence >= 0 && p.extractionConfidence <= 1 && p.authorityCeiling >= 0 && p.authorityCeiling <= 1),
    details: 'Extraction confidence and evidentiary authority ceiling are stored independently.',
    severity: 'ERROR',
  });
  return results;
}

export function validateQueryBundle(bundle: QueryBundle): ValidationCheckResult[] {
  const gates = evaluateScoutGates(bundle);
  return [
    {
      ruleId: 'REVERSIBLE_DECOMPOSITION',
      name: 'Reversible demand decomposition',
      passed: gates.gates[2]?.status === 'PASSED',
      details: gates.gates[2]?.reasons.join(' ') || 'All required demand fields and provenance are present.',
      severity: 'ERROR',
    },
    {
      ruleId: 'CLASSIFICATION_VALIDATION_STATE',
      name: 'Classification validation is externally distinguishable',
      passed: !!bundle.naicsAnchor.validationStatus && !!bundle.onetAnchor.validationStatus,
      details: `NAICS=${bundle.naicsAnchor.validationStatus || 'UNVERIFIED'}, O*NET=${bundle.onetAnchor.validationStatus || 'UNVERIFIED'}.`,
      severity: 'ERROR',
    },
    {
      ruleId: 'MARA_READY',
      name: 'MARA readiness gate',
      passed: gates.gates[3]?.status === 'PASSED',
      details: gates.gates[3]?.reasons.join(' ') || 'SCOUT stages 1-3 passed.',
      severity: 'ERROR',
    },
  ];
}

export function snapshotMaterial(snapshot: FrozenSnapshot): Record<string, unknown> {
  return {
    schemaVersion: snapshot.schemaVersion,
    candidateId: snapshot.candidateId,
    targetRoleIdentifier: snapshot.targetRoleIdentifier,
    activeWalls: snapshot.activeWalls,
    boundAtoms: snapshot.boundAtoms,
    maraExhaust: snapshot.maraExhaust,
    projectionCenter: snapshot.projectionCenter,
    geometricState: snapshot.geometricState,
    projectionSufficiency: snapshot.projectionSufficiency,
    renderContext: snapshot.renderContext,
    boundaryIdentity: snapshot.boundaryIdentity,
    executionState: snapshot.executionState,
    isBlocked: snapshot.isBlocked,
    blockReason: snapshot.blockReason,
  };
}

export function validateFrozenSnapshot(snapshot: FrozenSnapshot): ValidationCheckResult[] {
  const evidence = snapshot.renderContext?.evidence || [];
  const evidenceIds = new Set(evidence.map((item) => item.evidence_id));
  const demandIds = new Set((snapshot.renderContext?.demands || []).map((item) => item.id));
  const linksClosed = snapshot.boundAtoms.every((atom) => evidenceIds.has(atom.evidenceId) && demandIds.has(atom.demandId));
  const unsupportedFloor = snapshot.boundAtoms.some((atom) => atom.semanticBand === 'FLOOR' && atom.contradictionState !== 'CONTRADICTED');

  return [
    {
      ruleId: 'SNAPSHOT_RENDER_BOUNDARY',
      name: 'Frozen Snapshot is renderer self-contained',
      passed: !!snapshot.renderContext && !!snapshot.boundaryIdentity,
      details: 'Renderer-approved candidate, target, demand, and evidence material is contained in the snapshot.',
      severity: 'ERROR',
    },
    {
      ruleId: 'PROVENANCE_FAIL_CLOSED',
      name: 'All bound IDs resolve inside the frozen boundary',
      passed: linksClosed,
      details: linksClosed ? 'Every bound demand/evidence reference resolves.' : 'At least one bound reference is missing; rendering must fail closed.',
      severity: 'ERROR',
    },
    {
      ruleId: 'NO_UNSUPPORTED_NEGATIVE',
      name: 'Floor requires explicit contradiction',
      passed: !unsupportedFloor,
      details: unsupportedFloor ? 'A Floor placement lacks explicit contradiction state.' : 'Floor is not inferred merely from absence.',
      severity: 'ERROR',
    },
    {
      ruleId: 'FLOOR_VS_SUFFICIENCY',
      name: 'Geometric Floor and projection sufficiency are separate',
      passed: !!snapshot.projectionSufficiency,
      details: 'Projection sufficiency is represented independently from geometric adverse evidence.',
      severity: 'ERROR',
    },
  ];
}

export function allChecksPassed(checks: ValidationCheckResult[]): boolean {
  return checks.filter((c) => c.severity === 'ERROR').every((c) => c.passed);
}
