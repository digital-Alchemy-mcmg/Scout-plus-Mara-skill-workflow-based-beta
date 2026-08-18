/**
 * MARA + SCOUT Query-Resolved Candidate Projection Pipeline
 * Architecture Types - repair branch
 */

export type MachineType = 'SCOUT' | 'MARA' | 'ARTIFACT';
export type PipelineStageNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type GateStatus = 'PENDING' | 'PASSED' | 'BLOCKED';

export interface PipelineStageInfo {
  stage: PipelineStageNumber;
  name: string;
  machine: MachineType;
  primaryOperation: string;
  exitGate: string;
  exhaustType?: 'SCOUT_EXHAUST' | 'MARA_EXHAUST' | 'NONE';
}

export interface GateResult {
  stage: PipelineStageNumber;
  status: GateStatus;
  reasons: string[];
}

export interface ExecutionGateState {
  gates: Partial<Record<PipelineStageNumber, GateResult>>;
  highestPassedStage: number;
}

export type DemandRelationship = 'AUTHORITY' | 'COORDINATION' | 'SUPPORT';
export type DemandType = 'TRAIT' | 'SKILL' | 'ABILITY' | 'KNOWLEDGE';
export type MatchType = 'HOT_MATCH' | 'COLD_MATCH';
export type ClassificationValidationStatus = 'UNVERIFIED' | 'VALIDATED' | 'REJECTED';

export interface DemandPrimitive {
  id: string;
  actor: string;
  action: string;
  object: string;
  relationship: DemandRelationship;
  mechanism: string;
  effect: string;
  demand_type: DemandType;
  provenance: string;
  neighbor_ids?: string[];
  isCritical?: boolean;
}

export interface NegativeSpaceAssertion {
  id: string;
  assertion: string;
  reason: string;
  sourceText?: string;
}

export interface ClassificationAnchor {
  code: string;
  title: string;
  rationale: string;
  matchType: MatchType;
  system: 'NAICS' | 'ONET_SOC';
  validationStatus?: ClassificationValidationStatus;
  validationSource?: string;
}

export interface ScoutExhaustItem {
  id: string;
  text: string;
  reason: 'MARKETING_FLUFF' | 'BESTOWED_TITLE' | 'STATIC_CREDENTIAL_FILTER' | 'NON_OPERATIONAL';
  originalLocation: string;
}

export interface QueryBundle {
  targetTitleProvenance: string;
  corePurpose: string;
  coreMetaphor: string;
  naicsAnchor: ClassificationAnchor;
  onetAnchor: ClassificationAnchor;
  demandPrimitives: DemandPrimitive[];
  negativeSpace: NegativeSpaceAssertion[];
  /** Protected YELLOW decision: receptor ownership/count is intentionally not changed by this repair. */
  activeReceptors: EvidenceDomain[];
  scoutExhaust: ScoutExhaustItem[];
  timestamp: string;
  executionState?: ExecutionGateState;
}

export type EvidenceDomain =
  | 'WORK_HISTORY'
  | 'EDUCATION_COMPETENCY'
  | 'CREATIVE_WORKS'
  | 'PSYCHOMETRICS'
  | 'TESTIMONY_BEHAVIOR';

export interface CandidateCore {
  candidateId: string;
  name: string;
  location?: string;
  currentRoleProvenance?: string;
  biographical: Record<string, string | number | boolean | null>;
}

export type CandidateRelationship = 'DIRECT' | 'CONTRIBUTORY' | 'OBSERVED' | 'STATED' | 'UNKNOWN';
export type EvidenceSourceClass =
  | 'CANDIDATE_SELF_REPORT'
  | 'CANDIDATE_SUPPLIED_HISTORY'
  | 'INDEPENDENT_REFERENCE'
  | 'DOCUMENTARY_RECORD'
  | 'PSYCHOMETRIC_INSTRUMENT'
  | 'OBSERVED_BEHAVIOR'
  | 'PUBLICATION'
  | 'UNSPECIFIED';
export type EvidenceIndependence = 'INDEPENDENT' | 'DEPENDENT' | 'UNKNOWN';
export type CorroborationState = 'NONE' | 'CORROBORATED' | 'CONVERGENT';
export type ContradictionState = 'NONE' | 'CONTRADICTED';
export type CorroborationType = 'CONVERGENT' | 'INDEPENDENT'; // legacy display label only; not evidence authority

export interface EvidencePacket {
  evidence_id: string;
  domain: EvidenceDomain;
  governing_verb: string;
  entity: string;
  propositionId: string;
  candidateRelationship: CandidateRelationship;
  sourceClass: EvidenceSourceClass;
  authorityCeiling: number;
  extractionConfidence: number;
  authorityVerified: boolean;
  sourceLineageId: string;
  independence: EvidenceIndependence;
  corroborationState: CorroborationState;
  contradictionState: ContradictionState;
  convergesWithEvidenceIds: string[];
  provenance: { source: string; section: string; rawQuote?: string };
  timestamp?: string;
  attributes: Record<string, string | number | boolean | string[]>;
}

/**
 * Runtime candidate substrate. Candidate Core is mandatory and the Evidence Registry is closed to five domains.
 * The top-level identifiers are retained as transport/display mirrors only; they are not an evidence domain.
 */
export interface CandidateSpatialDNA {
  candidateId: string;
  name: string;
  currentRoleProvenance: string;
  location: string;
  candidateCore: CandidateCore;
  evidenceRegistry: Record<EvidenceDomain, EvidencePacket[]>;
}

export interface CanonicalCandidateSpatialDNA {
  candidateCore: CandidateCore;
  evidenceRegistry: Record<EvidenceDomain, EvidencePacket[]>;
}

/** Protected YELLOW decision: semantic bands are retained, not re-decided by this repair. */
export type SemanticBand = 'CEILING' | 'ABOVE_BASELINE' | 'BASELINE' | 'BELOW_BASELINE' | 'FLOOR';
export type BindingStatus = 'SUPPORTED' | 'CONTRADICTED' | 'UNSUPPORTED';

export interface BoundAtom {
  demandId: string;
  evidenceId: string;
  semanticBand: SemanticBand;
  score: number;
  rationale: string;
  bandOffset: number;
  propositionId?: string;
  sourceLineageIds?: string[];
  corroboratingEvidenceIds?: string[];
  independence?: EvidenceIndependence;
  corroborationState?: CorroborationState;
  contradictionState?: ContradictionState;
  /** Deprecated display compatibility only; deterministic validation must not infer independence from it. */
  corroborationType?: CorroborationType;
}

export type MaraExhaustReason = 'unsupported' | 'non_demonstrated' | 'contradicted' | 'insufficient_authority';

export interface MaraExhaustItem {
  id: string;
  demandPrimitive: DemandPrimitive;
  reason: MaraExhaustReason;
  detailedAnalysis: string;
  severity: 'CRITICAL_GAP' | 'SECONDARY_GAP' | 'NEUTRAL_ABSENCE';
}

export interface FrozenRenderContext {
  candidate: { candidateId: string; name: string; location?: string };
  target: { targetRoleIdentifier: string; purpose: string };
  demands: DemandPrimitive[];
  evidence: EvidencePacket[];
}

export interface FrozenSnapshot {
  schemaVersion?: string;
  freezeHash: string;
  freezeTimestamp: string;
  candidateId: string;
  targetRoleIdentifier: string;
  activeWalls: EvidenceDomain[];
  boundAtoms: BoundAtom[];
  maraExhaust: MaraExhaustItem[];
  projectionCenter: { x: number; y: number; z: number };
  geometricState: {
    ceilingCount: number;
    aboveBaselineCount: number;
    baselineCount: number;
    belowBaselineCount: number;
    floorCount: number;
    alignmentRatio: number;
  };
  /** Separate from geometric Floor. null means the policy threshold is intentionally unresolved. */
  projectionSufficiency?: { satisfied: boolean | null; reasons: string[] };
  renderContext?: FrozenRenderContext;
  boundaryIdentity?: { queryTimestamp: string; candidateId: string; schemaVersion: string };
  executionState?: ExecutionGateState;
  isBlocked: boolean;
  blockReason?: string;
}

export type ArtifactType =
  | 'TARGET_RESOLVED_RESUME'
  | 'RECRUITER_SUMMARY_BRIEF'
  | 'INTERVIEW_PREP_GAP_BRIEF'
  | 'COVER_LETTER';

export interface TraceabilityLink {
  artifactSentenceIndex: number;
  sentenceText: string;
  boundAtom: BoundAtom;
  evidencePacket: EvidencePacket;
  demandPrimitive: DemandPrimitive;
}

export interface TargetResolvedArtifact {
  id: string;
  type: ArtifactType;
  title: string;
  candidateName: string;
  targetRole: string;
  content: string;
  sections: Array<{ heading: string; content: string[] }>;
  traceabilityLinks: TraceabilityLink[];
  generatedAt: string;
  freezeHash: string;
}

export interface RepoDoc {
  id: string;
  path: string;
  name: string;
  category: 'architecture' | 'contracts' | 'schemas' | 'logic' | 'workflows' | 'root';
  role: string;
  summary: string;
  content: string;
  dependencies: string[];
}

export interface ValidationCheckResult {
  ruleId: string;
  name: string;
  passed: boolean;
  details: string;
  severity: 'ERROR' | 'WARNING';
}
