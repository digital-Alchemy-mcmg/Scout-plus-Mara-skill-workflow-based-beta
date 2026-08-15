import type {
  CandidateSpatialDNA,
  QueryBundle,
  FrozenSnapshot,
  TargetResolvedArtifact,
  EvidencePacket,
} from '../types';

export interface SampleCase {
  id: string;
  title: string;
  tagline: string;
  industry: string;
  rawJobPosting: string;
  candidateDNA: CandidateSpatialDNA;
  precomputedQueryBundle: QueryBundle;
  precomputedFrozenSnapshot: FrozenSnapshot;
  precomputedArtifact: TargetResolvedArtifact;
}

const elenaWork: EvidencePacket = {
  evidence_id: 'EV-WH-01',
  domain: 'WORK_HISTORY',
  governing_verb: 'Orchestrated',
  entity: 'Global sample tracking pipeline spanning four Tier-1 factories in Vietnam and Taiwan',
  propositionId: 'PROP-ELENA-SAMPLE-PIPELINE',
  candidateRelationship: 'DIRECT',
  sourceClass: 'CANDIDATE_SUPPLIED_HISTORY',
  authorityCeiling: 0.8,
  extractionConfidence: 0.98,
  authorityVerified: false,
  sourceLineageId: 'LINEAGE-VELOCE-CAREER-SUMMARY',
  independence: 'DEPENDENT',
  corroborationState: 'CORROBORATED',
  contradictionState: 'NONE',
  convergesWithEvidenceIds: ['EV-CW-01', 'EV-TES-01'],
  provenance: { source: 'Veloce_Career_Summary.pdf', section: 'Experience: Operations Lead' },
  attributes: { unitVolume: '45,000 seasonal samples/yr', onTimeRate: '97.4%' },
};

const elenaCreative: EvidencePacket = {
  evidence_id: 'EV-CW-01',
  domain: 'CREATIVE_WORKS',
  governing_verb: 'Architected',
  entity: 'Automated Sample Status Web Portal connecting overseas factories with US R&D design benches',
  propositionId: 'PROP-ELENA-SAMPLE-PORTAL',
  candidateRelationship: 'DIRECT',
  sourceClass: 'CANDIDATE_SUPPLIED_HISTORY',
  authorityCeiling: 0.8,
  extractionConfidence: 0.91,
  authorityVerified: false,
  sourceLineageId: 'LINEAGE-VELOCE-TOOLING-PORTFOLIO',
  independence: 'DEPENDENT',
  corroborationState: 'CONVERGENT',
  contradictionState: 'NONE',
  convergesWithEvidenceIds: ['EV-WH-01', 'EV-TES-01'],
  provenance: { source: 'Internal_Ops_Tooling_Portfolio.pdf', section: 'Software Implementations' },
  attributes: { dailyActiveUsers: 85, latencyReductionHours: 48 },
};

const elenaEducation: EvidencePacket = {
  evidence_id: 'EV-EDU-01',
  domain: 'EDUCATION_COMPETENCY',
  governing_verb: 'Completed',
  entity: 'B.S. in Supply Chain Management & Industrial Engineering, University of Washington',
  propositionId: 'PROP-ELENA-UW-DEGREE',
  candidateRelationship: 'DIRECT',
  sourceClass: 'DOCUMENTARY_RECORD',
  authorityCeiling: 1,
  extractionConfidence: 1,
  authorityVerified: true,
  sourceLineageId: 'LINEAGE-UW-TRANSCRIPT',
  independence: 'INDEPENDENT',
  corroborationState: 'NONE',
  contradictionState: 'NONE',
  convergesWithEvidenceIds: [],
  provenance: { source: 'Academic_Transcript_UW.pdf', section: 'Degree Award' },
  attributes: { honors: 'Magna Cum Laude', graduationYear: 2018 },
};

const elenaPsychometric: EvidencePacket = {
  evidence_id: 'EV-PSY-01',
  domain: 'PSYCHOMETRICS',
  governing_verb: 'Demonstrated',
  entity: 'High cognitive ambiguity tolerance and methodical operational triage under supply shocks',
  propositionId: 'PROP-ELENA-AMBIGUITY-TOLERANCE',
  candidateRelationship: 'OBSERVED',
  sourceClass: 'PSYCHOMETRIC_INSTRUMENT',
  authorityCeiling: 0.7,
  extractionConfidence: 0.88,
  authorityVerified: true,
  sourceLineageId: 'LINEAGE-HOGAN-ASSESSMENT',
  independence: 'INDEPENDENT',
  corroborationState: 'NONE',
  contradictionState: 'NONE',
  convergesWithEvidenceIds: [],
  provenance: { source: 'Leadership_Assessment_Hogan.pdf', section: 'Stress Profile' },
  attributes: { composureIndex: '94th percentile', executionFocus: 'High' },
};

const elenaTestimony: EvidencePacket = {
  evidence_id: 'EV-TES-01',
  domain: 'TESTIMONY_BEHAVIOR',
  governing_verb: 'Commended',
  entity: 'VP of Sourcing described Elena as the control tower preventing sample bottlenecks',
  propositionId: 'PROP-ELENA-CONTROL-TOWER',
  candidateRelationship: 'OBSERVED',
  sourceClass: 'INDEPENDENT_REFERENCE',
  authorityCeiling: 0.9,
  extractionConfidence: 0.96,
  authorityVerified: true,
  sourceLineageId: 'LINEAGE-VELOCE-VP-REFERENCE',
  independence: 'INDEPENDENT',
  corroborationState: 'CONVERGENT',
  contradictionState: 'NONE',
  convergesWithEvidenceIds: ['EV-WH-01', 'EV-CW-01'],
  provenance: { source: 'Executive_Recommendation_Letter.pdf', section: 'Direct Quote' },
  attributes: { recommender: 'VP Global Sourcing, Veloce' },
};

const elenaCandidate: CandidateSpatialDNA = {
  candidateId: 'cand-elena-rostova-01',
  name: 'Elena Rostova',
  currentRoleProvenance: 'Operations Director, Veloce Technical Outerwear',
  location: 'Seattle, WA',
  candidateCore: {
    candidateId: 'cand-elena-rostova-01',
    name: 'Elena Rostova',
    location: 'Seattle, WA',
    currentRoleProvenance: 'Operations Director, Veloce Technical Outerwear',
    biographical: { availability: 'Immediate', workAuthorization: 'US Citizen' },
  },
  evidenceRegistry: {
    WORK_HISTORY: [elenaWork],
    EDUCATION_COMPETENCY: [elenaEducation],
    CREATIVE_WORKS: [elenaCreative],
    PSYCHOMETRICS: [elenaPsychometric],
    TESTIMONY_BEHAVIOR: [elenaTestimony],
  },
};

const elenaQuery: QueryBundle = {
  targetTitleProvenance: 'Senior Operations Manager - Global Samples & Production',
  corePurpose: 'Guarantees sample velocity and manufacturing milestone adherence from prototype sign-off through factory handoff.',
  coreMetaphor: 'Control Tower & Operational Dispatcher',
  naicsAnchor: {
    code: '315220',
    title: "Men's and Boys' Cut and Sew Apparel Manufacturing",
    rationale: 'Model classification based on technical garment production and sample-flow duties.',
    matchType: 'HOT_MATCH',
    system: 'NAICS',
    validationStatus: 'UNVERIFIED',
  },
  onetAnchor: {
    code: '11-1021.00',
    title: 'General and Operations Managers',
    rationale: 'Model classification based on vendor coordination and multi-team operational responsibility.',
    matchType: 'HOT_MATCH',
    system: 'ONET_SOC',
    validationStatus: 'UNVERIFIED',
  },
  demandPrimitives: [
    {
      id: 'DP-01',
      actor: 'Incumbent',
      action: 'Maintains visibility',
      object: 'Sample inventory and global vendor production pipelines',
      relationship: 'COORDINATION',
      mechanism: 'Digital tracking systems and vendor milestone check-ins',
      effect: 'Prototype assets arrive without scheduling slip',
      demand_type: 'ABILITY',
      provenance: 'Duties paragraph 1',
      isCritical: true,
    },
  ],
  negativeSpace: [
    {
      id: 'NS-01',
      assertion: 'NOT a Creative Garment Fashion Designer',
      reason: 'The source duties are operational rather than aesthetic design authority.',
      sourceText: 'Operational duty distribution',
    },
  ],
  activeReceptors: ['WORK_HISTORY', 'CREATIVE_WORKS', 'TESTIMONY_BEHAVIOR', 'EDUCATION_COMPETENCY'],
  scoutExhaust: [
    {
      id: 'SE-01',
      text: 'rockstar Senior Operations Manager who thrives in a fast-paced environment',
      reason: 'MARKETING_FLUFF',
      originalLocation: 'About Us',
    },
  ],
  timestamp: '2026-08-14T20:30:00Z',
};

const elenaSnapshot: FrozenSnapshot = {
  schemaVersion: '2026.08.15-repair-1',
  freezeHash: 'fixture-elena-requires-runtime-rehash',
  freezeTimestamp: '2026-08-14T20:30:15Z',
  candidateId: 'cand-elena-rostova-01',
  targetRoleIdentifier: 'Senior Operations & Production Manager (Apex)',
  activeWalls: ['WORK_HISTORY', 'CREATIVE_WORKS', 'TESTIMONY_BEHAVIOR', 'EDUCATION_COMPETENCY'],
  boundAtoms: [
    {
      demandId: 'DP-01',
      evidenceId: 'EV-WH-01',
      semanticBand: 'CEILING',
      score: 0.98,
      rationale: 'Candidate history supports global sample-pipeline coordination.',
      bandOffset: 0.95,
      propositionId: 'PROP-ELENA-SAMPLE-PIPELINE',
      sourceLineageIds: ['LINEAGE-VELOCE-CAREER-SUMMARY'],
      corroboratingEvidenceIds: ['EV-CW-01', 'EV-TES-01'],
      independence: 'DEPENDENT',
      corroborationState: 'CORROBORATED',
      contradictionState: 'NONE',
    },
  ],
  maraExhaust: [],
  projectionCenter: { x: 0.88, y: 0.92, z: 0.85 },
  geometricState: {
    ceilingCount: 1,
    aboveBaselineCount: 0,
    baselineCount: 0,
    belowBaselineCount: 0,
    floorCount: 0,
    alignmentRatio: 1,
  },
  projectionSufficiency: {
    satisfied: null,
    reasons: ['Protected YELLOW decision: no projection-sufficiency threshold is asserted by this fixture.'],
  },
  renderContext: {
    candidate: { candidateId: 'cand-elena-rostova-01', name: 'Elena Rostova', location: 'Seattle, WA' },
    target: { targetRoleIdentifier: 'Senior Operations & Production Manager (Apex)', purpose: elenaQuery.corePurpose },
    demands: elenaQuery.demandPrimitives,
    evidence: [elenaWork, elenaCreative, elenaTestimony, elenaEducation],
  },
  boundaryIdentity: {
    queryTimestamp: elenaQuery.timestamp,
    candidateId: 'cand-elena-rostova-01',
    schemaVersion: '2026.08.15-repair-1',
  },
  isBlocked: false,
};

const elenaArtifact: TargetResolvedArtifact = {
  id: 'art-elena-01',
  type: 'TARGET_RESOLVED_RESUME',
  title: 'Target-Resolved Executive Operations Portfolio: Elena Rostova',
  candidateName: 'Elena Rostova',
  targetRole: 'Senior Operations & Production Manager',
  content: 'Orchestrated global sample tracking across four Tier-1 facilities [EV-WH-01].',
  sections: [
    {
      heading: 'Target-Bound Operational Capabilities',
      content: ['Orchestrated global sample tracking across four Tier-1 facilities [EV-WH-01].'],
    },
  ],
  traceabilityLinks: [
    {
      artifactSentenceIndex: 0,
      sentenceText: 'Orchestrated global sample tracking across four Tier-1 facilities [EV-WH-01].',
      boundAtom: elenaSnapshot.boundAtoms[0],
      evidencePacket: elenaWork,
      demandPrimitive: elenaQuery.demandPrimitives[0],
    },
  ],
  generatedAt: '2026-08-14T20:30:20Z',
  freezeHash: elenaSnapshot.freezeHash,
};

const marcusWork: EvidencePacket = {
  evidence_id: 'EV-SYS-WH-01',
  domain: 'WORK_HISTORY',
  governing_verb: 'Authored',
  entity: 'Production Raft consensus engine in Rust supporting 1.2M writes/sec',
  propositionId: 'PROP-MARCUS-RAFT-ENGINE',
  candidateRelationship: 'DIRECT',
  sourceClass: 'DOCUMENTARY_RECORD',
  authorityCeiling: 1,
  extractionConfidence: 0.99,
  authorityVerified: true,
  sourceLineageId: 'LINEAGE-HYPERMESH-TECH-REPORT',
  independence: 'INDEPENDENT',
  corroborationState: 'CONVERGENT',
  contradictionState: 'NONE',
  convergesWithEvidenceIds: ['EV-SYS-CW-01', 'EV-SYS-TES-01'],
  provenance: { source: 'HyperMesh_Tech_Report.pdf', section: 'Core Engine Architecture' },
  attributes: { language: 'Rust', throughput: '1.2M writes/sec', zeroLoss: true },
};

const marcusEducation: EvidencePacket = {
  evidence_id: 'EV-SYS-EDU-01',
  domain: 'EDUCATION_COMPETENCY',
  governing_verb: 'Completed',
  entity: 'M.S. in Computer Science, Distributed Systems focus, Carnegie Mellon University',
  propositionId: 'PROP-MARCUS-CMU-MS',
  candidateRelationship: 'DIRECT',
  sourceClass: 'DOCUMENTARY_RECORD',
  authorityCeiling: 1,
  extractionConfidence: 1,
  authorityVerified: true,
  sourceLineageId: 'LINEAGE-CMU-DIPLOMA',
  independence: 'INDEPENDENT',
  corroborationState: 'NONE',
  contradictionState: 'NONE',
  convergesWithEvidenceIds: [],
  provenance: { source: 'CMU_Diploma.pdf', section: 'Master Degree' },
  attributes: { thesis: 'Deterministic Fault Injection in Consensus Protocols' },
};

const marcusCreative: EvidencePacket = {
  evidence_id: 'EV-SYS-CW-01',
  domain: 'CREATIVE_WORKS',
  governing_verb: 'Published',
  entity: 'Open-source Rust crate for lightweight TLA+ model-checking state assertions',
  propositionId: 'PROP-MARCUS-TLA-CRATE',
  candidateRelationship: 'DIRECT',
  sourceClass: 'PUBLICATION',
  authorityCeiling: 1,
  extractionConfidence: 0.97,
  authorityVerified: true,
  sourceLineageId: 'LINEAGE-MARCUS-GITHUB-REPO',
  independence: 'INDEPENDENT',
  corroborationState: 'CONVERGENT',
  contradictionState: 'NONE',
  convergesWithEvidenceIds: ['EV-SYS-WH-01'],
  provenance: { source: 'GitHub_Repository.json', section: 'Open Source' },
  attributes: { stars: 1420 },
};

const marcusPsychometric: EvidencePacket = {
  evidence_id: 'EV-SYS-PSY-01',
  domain: 'PSYCHOMETRICS',
  governing_verb: 'Demonstrated',
  entity: 'Rigorous empirical skepticism and formal verification mindset',
  propositionId: 'PROP-MARCUS-VERIFICATION-MINDSET',
  candidateRelationship: 'OBSERVED',
  sourceClass: 'OBSERVED_BEHAVIOR',
  authorityCeiling: 0.8,
  extractionConfidence: 0.91,
  authorityVerified: true,
  sourceLineageId: 'LINEAGE-PEER-REVIEW-ASSESSMENTS',
  independence: 'INDEPENDENT',
  corroborationState: 'NONE',
  contradictionState: 'NONE',
  convergesWithEvidenceIds: [],
  provenance: { source: 'Peer_Review_Assessments.pdf', section: 'Cognitive Style' },
  attributes: { methodology: 'Formal invariants' },
};

const marcusTestimony: EvidencePacket = {
  evidence_id: 'EV-SYS-TES-01',
  domain: 'TESTIMONY_BEHAVIOR',
  governing_verb: 'Validated',
  entity: 'CTO states Marcus catches distributed concurrency flaws during design phases',
  propositionId: 'PROP-MARCUS-CONCURRENCY-DIAGNOSIS',
  candidateRelationship: 'OBSERVED',
  sourceClass: 'INDEPENDENT_REFERENCE',
  authorityCeiling: 0.9,
  extractionConfidence: 0.97,
  authorityVerified: true,
  sourceLineageId: 'LINEAGE-HYPERMESH-CTO-REFERENCE',
  independence: 'INDEPENDENT',
  corroborationState: 'CONVERGENT',
  contradictionState: 'NONE',
  convergesWithEvidenceIds: ['EV-SYS-WH-01'],
  provenance: { source: 'CTO_Reference_Note.pdf', section: 'Evaluation' },
  attributes: { evaluator: 'CTO, HyperMesh Systems' },
};

const marcusCandidate: CandidateSpatialDNA = {
  candidateId: 'cand-marcus-vance-02',
  name: 'Marcus Vance',
  currentRoleProvenance: 'Principal Systems Architect, HyperMesh DB',
  location: 'Austin, TX',
  candidateCore: {
    candidateId: 'cand-marcus-vance-02',
    name: 'Marcus Vance',
    location: 'Austin, TX',
    currentRoleProvenance: 'Principal Systems Architect, HyperMesh DB',
    biographical: { availability: '2 weeks', workMode: 'Remote' },
  },
  evidenceRegistry: {
    WORK_HISTORY: [marcusWork],
    EDUCATION_COMPETENCY: [marcusEducation],
    CREATIVE_WORKS: [marcusCreative],
    PSYCHOMETRICS: [marcusPsychometric],
    TESTIMONY_BEHAVIOR: [marcusTestimony],
  },
};

const marcusQuery: QueryBundle = {
  targetTitleProvenance: 'Staff Distributed Systems Engineer - Core Storage',
  corePurpose: 'Guarantees linearizable state storage and cluster stability across hardware and network faults.',
  coreMetaphor: 'Consensus Architect & State Machine Invariant Guardian',
  naicsAnchor: {
    code: '541511',
    title: 'Custom Computer Programming Services',
    rationale: 'Model classification based on low-level distributed systems runtime development.',
    matchType: 'HOT_MATCH',
    system: 'NAICS',
    validationStatus: 'UNVERIFIED',
  },
  onetAnchor: {
    code: '15-1252.00',
    title: 'Software Developers',
    rationale: 'Model classification based on core systems and protocol-concurrency engineering.',
    matchType: 'HOT_MATCH',
    system: 'ONET_SOC',
    validationStatus: 'UNVERIFIED',
  },
  demandPrimitives: [
    {
      id: 'DP-SYS-01',
      actor: 'Incumbent',
      action: 'Implements consensus state machines',
      object: 'Zero-loss replication protocol engines in Rust',
      relationship: 'AUTHORITY',
      mechanism: 'Raft/Paxos implementation and formal verification',
      effect: 'Guarantees linearizability and zero data loss under network partitions',
      demand_type: 'ABILITY',
      provenance: 'Duties paragraph 1',
      isCritical: true,
    },
  ],
  negativeSpace: [
    {
      id: 'NS-SYS-01',
      assertion: 'NOT a Frontend/Fullstack Web Developer',
      reason: 'The duties concern low-level storage and consensus protocols rather than presentation-layer work.',
      sourceText: 'Scope isolation from web layer',
    },
  ],
  activeReceptors: ['WORK_HISTORY', 'EDUCATION_COMPETENCY', 'CREATIVE_WORKS', 'TESTIMONY_BEHAVIOR'],
  scoutExhaust: [
    {
      id: 'SE-SYS-01',
      text: '10x coding ninja and visionary systems rockstar',
      reason: 'MARKETING_FLUFF',
      originalLocation: 'Intro paragraph',
    },
  ],
  timestamp: '2026-08-14T20:30:00Z',
};

const marcusSnapshot: FrozenSnapshot = {
  schemaVersion: '2026.08.15-repair-1',
  freezeHash: 'fixture-marcus-requires-runtime-rehash',
  freezeTimestamp: '2026-08-14T20:30:15Z',
  candidateId: 'cand-marcus-vance-02',
  targetRoleIdentifier: 'Staff Distributed Systems Engineer (ChronoScale)',
  activeWalls: ['WORK_HISTORY', 'EDUCATION_COMPETENCY', 'CREATIVE_WORKS', 'TESTIMONY_BEHAVIOR'],
  boundAtoms: [
    {
      demandId: 'DP-SYS-01',
      evidenceId: 'EV-SYS-WH-01',
      semanticBand: 'CEILING',
      score: 0.99,
      rationale: 'Documented production Raft-engine implementation supports the demand.',
      bandOffset: 0.98,
      propositionId: 'PROP-MARCUS-RAFT-ENGINE',
      sourceLineageIds: ['LINEAGE-HYPERMESH-TECH-REPORT'],
      corroboratingEvidenceIds: ['EV-SYS-CW-01', 'EV-SYS-TES-01'],
      independence: 'INDEPENDENT',
      corroborationState: 'CONVERGENT',
      contradictionState: 'NONE',
    },
  ],
  maraExhaust: [],
  projectionCenter: { x: 0.95, y: 0.96, z: 0.93 },
  geometricState: {
    ceilingCount: 1,
    aboveBaselineCount: 0,
    baselineCount: 0,
    belowBaselineCount: 0,
    floorCount: 0,
    alignmentRatio: 1,
  },
  projectionSufficiency: {
    satisfied: null,
    reasons: ['Protected YELLOW decision: no projection-sufficiency threshold is asserted by this fixture.'],
  },
  renderContext: {
    candidate: { candidateId: 'cand-marcus-vance-02', name: 'Marcus Vance', location: 'Austin, TX' },
    target: { targetRoleIdentifier: 'Staff Distributed Systems Engineer (ChronoScale)', purpose: marcusQuery.corePurpose },
    demands: marcusQuery.demandPrimitives,
    evidence: [marcusWork, marcusEducation, marcusCreative, marcusTestimony],
  },
  boundaryIdentity: {
    queryTimestamp: marcusQuery.timestamp,
    candidateId: 'cand-marcus-vance-02',
    schemaVersion: '2026.08.15-repair-1',
  },
  isBlocked: false,
};

const marcusArtifact: TargetResolvedArtifact = {
  id: 'art-marcus-01',
  type: 'TARGET_RESOLVED_RESUME',
  title: 'Target-Resolved Technical Portfolio: Marcus Vance',
  candidateName: 'Marcus Vance',
  targetRole: 'Staff Distributed Systems Engineer',
  content: 'Authored a production Raft consensus engine in Rust supporting 1.2M writes/sec [EV-SYS-WH-01].',
  sections: [
    {
      heading: 'Core Distributed Systems Capabilities',
      content: ['Authored a production Raft consensus engine in Rust supporting 1.2M writes/sec [EV-SYS-WH-01].'],
    },
  ],
  traceabilityLinks: [
    {
      artifactSentenceIndex: 0,
      sentenceText: 'Authored a production Raft consensus engine in Rust supporting 1.2M writes/sec [EV-SYS-WH-01].',
      boundAtom: marcusSnapshot.boundAtoms[0],
      evidencePacket: marcusWork,
      demandPrimitive: marcusQuery.demandPrimitives[0],
    },
  ],
  generatedAt: '2026-08-14T20:30:20Z',
  freezeHash: marcusSnapshot.freezeHash,
};

export const SAMPLE_CASES: SampleCase[] = [
  {
    id: 'case-ops-manager',
    title: 'Senior Operations & Production Manager',
    tagline: 'Apparel & Technical Footwear Supply Chain',
    industry: 'Apparel Manufacturing & Global Distribution',
    rawJobPosting: `SENIOR OPERATIONS MANAGER - GLOBAL SAMPLES & PRODUCTION
Company: Apex Performance Labs

- Maintains real-time visibility across physical sample inventory and global vendor production pipelines.
- Coordinates critical-path shipment milestones between overseas manufacturing facilities and domestic testing labs.
- Resolves logistical exceptions and material bottlenecks.
- Enforces quality assurance acceptance criteria across pre-production garment batches.`,
    candidateDNA: elenaCandidate,
    precomputedQueryBundle: elenaQuery,
    precomputedFrozenSnapshot: elenaSnapshot,
    precomputedArtifact: elenaArtifact,
  },
  {
    id: 'case-systems-eng',
    title: 'Staff Distributed Systems Engineer',
    tagline: 'High-Throughput Storage & Consensus Engine',
    industry: 'Cloud Infrastructure & Core Storage Systems',
    rawJobPosting: `STAFF DISTRIBUTED SYSTEMS ENGINEER - CORE STORAGE
Company: ChronoScale Infrastructure

- Designs and implements zero-loss consensus state machines using Raft/Paxos variations in Rust.
- Optimizes disk I/O write paths and LSM-tree compaction algorithms.
- Debugs asynchronous race conditions and split-brain cluster partitions.
- Implements deterministic chaos testing harnesses.`,
    candidateDNA: marcusCandidate,
    precomputedQueryBundle: marcusQuery,
    precomputedFrozenSnapshot: marcusSnapshot,
    precomputedArtifact: marcusArtifact,
  },
];
