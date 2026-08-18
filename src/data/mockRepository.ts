import type { RepoDoc } from '../types';

export const REPOSITORY_DOCS: RepoDoc[] = [
  {
    id: 'ROOT-01',
    path: '/README.md',
    name: 'README.md',
    category: 'root',
    role: 'Entry Point & System Identity',
    summary: 'Three-machine governed translation architecture and repair-state overview.',
    dependencies: ['ARCH-01', 'CONT-01', 'LOGC-01'],
    content: `# MARA + SCOUT: Query-Resolved Candidate Projection Pipeline

SCOUT compiles target demand, MARA performs read-only traversal of canonical Spatial Candidate DNA, and the Artifact Model renders only from a Frozen Snapshot.

Protected architecture remains SCOUT → MARA → Artifact Model, Demand Primitives, Negative Space, Dual Exhaust, immutable traversal, Frozen Snapshot, traceability, and the interactive inspector.

Canonical candidate representation is Candidate Core plus a five-domain Evidence Registry: Work History; Education / Competency; Creative Works; Psychometrics; Testimony / Behavior.

Identity and biographical subject information belong to Candidate Core, not to an evidence domain.`,
  },
  {
    id: 'ROOT-02',
    path: '/REPOSITORY_MANIFEST.md',
    name: 'REPOSITORY_MANIFEST.md',
    category: 'root',
    role: 'Root Index & Dependency Map',
    summary: 'Active architecture, contracts, schemas, logic, workflow, runtime, and validation files.',
    dependencies: ['ARCH-01'],
    content: `# MARA/SCOUT Repository Manifest

Implementation is governed through architecture → schemas → contracts/logic → workflows → runtime/UI/tests.

Active workflow files are WORKFLOW_SCOUT_DECOMPOSITION.md, WORKFLOW_MARA_BINDING.md, and WORKFLOW_ARTIFACT_RENDERING.md. Deterministic runtime validation lives in src/governance.ts and scripts/validate-architecture.mjs.`,
  },
  {
    id: 'ARCH-01',
    path: '/architecture/ARCH_SYSTEM_ONTOLOGY.md',
    name: 'ARCH_SYSTEM_ONTOLOGY.md',
    category: 'architecture',
    role: 'System Ontology & Axioms',
    summary: 'Governed translation philosophy and three-machine separation.',
    dependencies: [],
    content: `# ARCH-01: System Ontology

Read First → Represent Second → Bind Third → Project Fourth.

Candidate identity remains immutable. Projection is temporary and query-relative. Absence of candidate evidence is not adverse evidence. Every admitted primitive and evidence object preserves source provenance.`,
  },
  {
    id: 'CONT-01',
    path: '/contracts/PIPELINE_STAGES.md',
    name: 'PIPELINE_STAGES.md',
    category: 'contracts',
    role: 'Seven Executable Gates',
    summary: 'Seven ordered execution gates from SCOUT intake through artifact projection.',
    dependencies: ['ARCH-01', 'INTF-01', 'LOGC-01'],
    content: `# CONT-01: Seven Executable Gates

Stages are execution gates, not presentation tabs. SCOUT stages 1–3 must pass before MARA handoff. MARA binding references must resolve to admitted demand/evidence IDs. Stage 6 freezes a self-contained snapshot. Stage 7 renders only from that snapshot.

Model-proposed classification is not independently validated until an external reference mechanism verifies it.`,
  },
  {
    id: 'INTF-01',
    path: '/contracts/HANDOFF_SPECIFICATIONS.md',
    name: 'HANDOFF_SPECIFICATIONS.md',
    category: 'contracts',
    role: 'Inter-Machine Handoff Interfaces',
    summary: 'Query Bundle and Frozen Snapshot boundaries with fail-closed provenance.',
    dependencies: ['SCHM-01', 'SCHM-02'],
    content: `# INTF-01: Handoff Specifications

SCOUT → MARA carries Demand Primitives, Negative Space, SCOUT Exhaust, classification hypotheses/validation state, and gate state.

MARA → Artifact carries one self-contained Frozen Snapshot. The Artifact Model must not directly access raw Candidate Spatial DNA, raw candidate evidence, the raw job posting, or the raw Query Bundle.

Missing identifiers fail closed; no synthetic evidence or first-item fallback is permitted.`,
  },
  {
    id: 'SCHM-01',
    path: '/schemas/SCHEMA_DEMAND_PRIMITIVES.md',
    name: 'SCHEMA_DEMAND_PRIMITIVES.md',
    category: 'schemas',
    role: 'SCOUT Demand Primitive Structure',
    summary: 'Reversible target-side Actor + Action + Object + Relationship + Mechanism + Effect representation.',
    dependencies: ['ARCH-01'],
    content: `# SCHM-01: Demand Primitives

A Demand Primitive preserves actor, action, object, relationship, mechanism, effect, demand type, and source provenance. Negative Space remains distinct. Job titles and recruitment fluff cannot become operational evidence.`,
  },
  {
    id: 'SCHM-02',
    path: '/schemas/SCHEMA_SPATIAL_DNA.md',
    name: 'SCHEMA_SPATIAL_DNA.md',
    category: 'schemas',
    role: 'Canonical Candidate Core & Evidence Structure',
    summary: 'First-class Candidate Core, five-domain Evidence Registry, separated authority/confidence, and provenance lineage.',
    dependencies: ['ARCH-01'],
    content: `# SCHM-02: Spatial Candidate DNA

Candidate Core owns identity and biographical subject information.

The Evidence Registry has five domains only: WORK_HISTORY, EDUCATION_COMPETENCY, CREATIVE_WORKS, PSYCHOMETRICS, TESTIMONY_BEHAVIOR.

Evidence packets keep extractionConfidence separate from authorityCeiling and sourceClass, and preserve proposition identity, source lineage, independence, corroboration, contradiction, convergence, candidate relationship, and provenance.`,
  },
  {
    id: 'LOGC-01',
    path: '/logic/PROHIBITIONS_VALIDATION.md',
    name: 'PROHIBITIONS_VALIDATION.md',
    category: 'logic',
    role: 'Deterministic Governance & Prohibitions',
    summary: 'Fail-closed provenance, immutable traversal, classification-state separation, and causal Floor validation.',
    dependencies: ['SCHM-01', 'SCHM-02', 'INTF-01'],
    content: `# LOGC-01: Prohibitions & Validation

No title evidence. No fluff admission. No write-back. No severed provenance. No unsupported negative. No exhaust conflation. No fabricated bridge.

Where an invariant is deterministic, runtime validation—not the LLM—enforces it. Floor requires explicit contradictory/adverse evidence; absence alone cannot create Floor.`,
  },
  {
    id: 'WORK-01',
    path: '/workflows/WORKFLOW_SCOUT_DECOMPOSITION.md',
    name: 'WORKFLOW_SCOUT_DECOMPOSITION.md',
    category: 'workflows',
    role: 'SCOUT Operational Workflow',
    summary: 'Operationalizes target decomposition without self-certifying classification.',
    dependencies: ['SCHM-01', 'LOGC-01', 'INTF-01'],
    content: `# WORK-01: SCOUT Decomposition

Ingest and filter source matter, produce reversible Demand Primitives and Negative Space, expose NAICS/O*NET model hypotheses, and attach explicit validation state. MARA handoff remains blocked while required classifications are unverified.`,
  },
  {
    id: 'WORK-02',
    path: '/workflows/WORKFLOW_MARA_BINDING.md',
    name: 'WORKFLOW_MARA_BINDING.md',
    category: 'workflows',
    role: 'MARA Binding Workflow',
    summary: 'Read-only traversal, fail-closed binding, richer evidence metadata, MARA Exhaust, and freeze creation.',
    dependencies: ['SCHM-02', 'INTF-01', 'LOGC-01'],
    content: `# WORK-02: MARA Binding

Accept only a gate-valid Query Bundle and canonical Candidate Core/five-domain substrate. Binding hypotheses reference exact evidence and demand IDs. Corroboration cannot be inferred merely from domain difference. Non-binds preserve explicit reason states. Freeze produces a renderer-self-contained snapshot.`,
  },
  {
    id: 'WORK-03',
    path: '/workflows/WORKFLOW_ARTIFACT_RENDERING.md',
    name: 'WORKFLOW_ARTIFACT_RENDERING.md',
    category: 'workflows',
    role: 'Artifact Rendering Workflow',
    summary: 'Snapshot-only renderer with verified traceability.',
    dependencies: ['INTF-01', 'LOGC-01'],
    content: `# WORK-03: Artifact Rendering

The Artifact Model receives only the Frozen Snapshot and requested artifact type. Every rendered sentence must resolve through snapshot-bound demand and evidence identifiers. Missing provenance blocks rendering; no discovery or synthetic fallback is permitted.`,
  },
];
