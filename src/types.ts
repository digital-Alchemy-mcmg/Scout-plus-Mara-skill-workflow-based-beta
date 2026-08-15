/**
 * MARA + SCOUT Query-Resolved Candidate Projection Pipeline
 * Architecture Types - Version 2026.08.10-F
 */

export type MachineType = 'SCOUT' | 'MARA' | 'ARTIFACT';

export type PipelineStageNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface PipelineStageInfo {
  stage: PipelineStageNumber;
  name: string;
  machine: MachineType;
  primaryOperation: string;
  exitGate: string;
  exhaustType?: 'SCOUT_EXHAUST' | 'MARA_EXHAUST' | 'NONE';
}

// ----------------------------------------------------
// SCHM-01: Demand Primitives & SCOUT Types
// ----------------------------------------------------
export type DemandRelationship = 'AUTHORITY' | 'COORDINATION' | 'SUPPORT';
export type DemandType = 'TRAIT' | 'SKILL' | 'ABILITY' | 'KNOWLEDGE';
export type MatchType = 'HOT_MATCH' | 'COLD_MATCH';

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
  activeReceptors: EvidenceDomain[];
  scoutExhaust: ScoutExhaustItem[];
  timestamp: string;
}

// ----------------------------------------------------
// SCHM-02: Spatial DNA & MARA Candidate Evidence Types
// ----------------------------------------------------
export type EvidenceDomain =
  | 'IDENTITY'
  | 'WORK_HISTORY'
  | 'EDUCATION_COMPETENCY'
  | 'CREATIVE_WORKS'
  | 'PSYCHOMETRICS'
  | 'TESTIMONY_BEHAVIOR';

export type AuthorityLevel = 'DIRECT' | 'CONTRIBUTORY' | 'STATIONARY';

export interface EvidencePacket {
  evidence_id: string;
  domain: EvidenceDomain;
  governing_verb: string;
  entity: string;
  authority: AuthorityLevel;
  provenance: {
    source: string;
    section: string;
    rawQuote?: string;
  };
  confidence: number; // 0.0 to 1.0
  timestamp?: string;
  attributes: Record<string, string | number | boolean | string[]>;
}

export interface CandidateSpatialDNA {
  candidateId: string;
  name: string;
  currentRoleProvenance: string;
  location: string;
  evidenceRegistry: Record<EvidenceDomain, EvidencePacket[]>;
}

// ----------------------------------------------------
// MARA Traversal, Binding, and Spatial Geometry Types
// ----------------------------------------------------
export type SemanticBand =
  | 'CEILING'
  | 'ABOVE_BASELINE'
  | 'BASELINE'
  | 'BELOW_BASELINE'
  | 'FLOOR';

export type BindingStatus = 'SUPPORTED' | 'CONTRADICTED' | 'UNSUPPORTED';

export type CorroborationType = 'CONVERGENT' | 'INDEPENDENT';

export interface BoundAtom {
  demandId: string;
  evidenceId: string;
  semanticBand: SemanticBand;
  score: number; // -1.0 (Floor) to 1.0 (Ceiling)
  corroborationType: CorroborationType;
  corroboratingEvidenceIds?: string[];
  rationale: string;
  bandOffset: number; // distance from origin (0 to 1)
}

export type MaraExhaustReason =
  | 'unsupported'
  | 'non_demonstrated'
  | 'contradicted'
  | 'insufficient_authority';

export interface MaraExhaustItem {
  id: string;
  demandPrimitive: DemandPrimitive;
  reason: MaraExhaustReason;
  detailedAnalysis: string;
  severity: 'CRITICAL_GAP' | 'SECONDARY_GAP' | 'NEUTRAL_ABSENCE';
}

export interface FrozenSnapshot {
  freezeHash: string;
  freezeTimestamp: string;
  candidateId: string;
  targetRoleIdentifier: string;
  activeWalls: EvidenceDomain[];
  boundAtoms: BoundAtom[];
  maraExhaust: MaraExhaustItem[];
  projectionCenter: {
    x: number;
    y: number;
    z: number;
  };
  geometricState: {
    ceilingCount: number;
    aboveBaselineCount: number;
    baselineCount: number;
    belowBaselineCount: number;
    floorCount: number;
    alignmentRatio: number;
  };
  isBlocked: boolean;
  blockReason?: string;
}

// ----------------------------------------------------
// ARTIFACT MODEL: Rendered Output Types
// ----------------------------------------------------
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
  sections: Array<{
    heading: string;
    content: string[];
  }>;
  traceabilityLinks: TraceabilityLink[];
  generatedAt: string;
  freezeHash: string;
}

// ----------------------------------------------------
// Repository Markdown Documents
// ----------------------------------------------------
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

// ----------------------------------------------------
// Telemetry & Validation
// ----------------------------------------------------
export interface ValidationCheckResult {
  ruleId: string;
  name: string;
  passed: boolean;
  details: string;
  severity: 'ERROR' | 'WARNING';
}
