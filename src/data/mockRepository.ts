import { RepoDoc } from '../types';

export const REPOSITORY_DOCS: RepoDoc[] = [
  {
    id: 'ROOT-01',
    path: '/README.md',
    name: 'README.md',
    category: 'root',
    role: 'Entry Point & System Identity',
    summary: 'Executive overview of the Three-Machine, Seven-Stage Governed Translation Architecture.',
    dependencies: ['ARCH-01', 'CONT-01', 'LOGC-01'],
    content: `# MARA + SCOUT: Query-Resolved Candidate Projection Pipeline

## 1. System Identity
MARA/SCOUT is a **Governed Translation Architecture** designed to project immutable candidate evidence against a deconstructed target demand structure. 

Unlike traditional matching systems, MARA/SCOUT rejects direct "keyword" comparison. It decomposes both sides of the labor market—the Job Posting and the Candidate History—into canonical primitives before reasoning over the relationship.

## 2. Core Philosophy
- **Read First, Represent Second:** Do not match artifacts; bind primitives.
- **Box Before Lens:** Understand the operational reality before labeling it.
- **Identity is Immutable:** Projections are temporary and query-relative; they never rewrite who the candidate is.
- **Traceability Contract:** Every word in an output must be reversible to a source evidence packet.

## 3. The Three-Machine Architecture
1. **SCOUT (Target Compiler):** Ingests raw job postings and produces **Demand Primitives**.
2. **MARA (Binding Engine):** Interrogates the candidate's **Spatial DNA** substrate to find "Binds."
3. **ARTIFACT MODEL (Renderer):** Compresses the **Frozen Snapshot** into a target-resolved artifact (e.g., a resume).

## 4. The 7-Stage Pipeline
1. **Intake & Filtration:** Strip fluff.
2. **Decomposition:** Break into atomic molecules.
3. **Classification:** Verify the NAICS/O*NET neighborhood.
4. **Query Insertion:** Formulate the "Receptor Set."
5. **Binding:** Traverse the DNA.
6. **Exhaust Formation:** Map the gaps.
7. **Projection:** Render the final artifact.

## 5. Repository Map

### /architecture
- \`ARCH_SYSTEM_ONTOLOGY.md\`: The axioms, definitions, and "Existential Why."

### /contracts
- \`PIPELINE_STAGES.md\`: The sequence of the 7 Gates.
- \`HANDOFF_SPECIFICATIONS.md\`: Data payloads between machines.

### /schemas
- \`SCHEMA_DEMAND_PRIMITIVES.md\`: The structure of a Job Demand.
- \`SCHEMA_SPATIAL_DNA.md\`: The structure of Candidate Evidence.

### /logic
- \`PROHIBITIONS_VALIDATION.md\`: The governing laws (No title bias, No fluff).

### /workflows
- \`WORK_01\`: How to run SCOUT.
- \`WORK_02\`: How to run MARA.
- \`WORK_03\`: How to render artifacts.

## 6. How to Use This Repository
1. **To Implement:** Start with \`PIPELINE_STAGES.md\` to understand the flow, then follow the \`WORK_XX\` files in order.
2. **To Audit:** Use \`PROHIBITIONS_VALIDATION.md\` as a checklist against any system output.
3. **To Extend:** Ensure any new schemas follow the **Provenance Invariance** rules in \`ARCH_SYSTEM_ONTOLOGY.md\`.

## 7. Governing Statement
> *"Irrelevant data is not admitted. Absence is not negative. Identity is immutable. Projection is temporary. Every claim must be traceable."*
`
  },
  {
    id: 'ROOT-02',
    path: '/REPOSITORY_MANIFEST.md',
    name: 'REPOSITORY_MANIFEST.md',
    category: 'root',
    role: 'Root Index & Dependency Map',
    summary: 'Central registry tracking all active files, machine mappings, and maintenance rules.',
    dependencies: ['ARCH-01'],
    content: `# MARA/SCOUT Repository Manifest

## 1. System Overview
**System Name:** MARA + SCOUT Query-Resolved Candidate Projection Pipeline
**Architecture Type:** Three-Machine Governed Translation Pipeline
**Primary Logic:** Read First → Represent Second → Bind Third → Project Fourth

## 2. Machine Definitions
The repository is organized around three distinct architectural machines:
- **SCOUT (Target Compiler):** Decomposes source job postings into demand primitives.
- **MARA (Evidence Binding / Projection Engine):** Interrogates immutable candidate evidence via query-relative traversal.
- **ARTIFACT MODEL (Projection Renderer):** Compresses frozen snapshots into target-resolved artifacts.

## 3. Repository Directory Structure

| Directory | Content Type | Responsibility |
| :--- | :--- | :--- |
| \`/architecture\` | Foundational | Core ontology, Three-Machine definitions, and fundamental principles. |
| \`/contracts\` | Interface | Seven-stage pipeline definitions and inter-machine handoff specs. |
| \`/schemas\` | Structural | Definitions for Demand Primitives, Evidence Packets, and Trait Clusters. |
| \`/logic\` | Governance | Prohibitions, validation rules, and "Golden Rules." |
| \`/workflows\` | Process | Specific step-by-step logic for decomposition and traversal. |

## 4. File Registry

| File ID | Name | Role | Status |
| :--- | :--- | :--- | :--- |
| \`ROOT-01\` | \`README.md\` | Entry Point & Overview | Active |
| \`ARCH-01\` | \`ARCH_SYSTEM_ONTOLOGY.md\` | Core Definitions & Principles | Active |
| \`CONT-01\` | \`PIPELINE_STAGES.md\` | 7-Stage Contract | Active |
| \`INTF-01\` | \`HANDOFF_SPECIFICATIONS.md\` | Inter-Machine Specs | Active |
| \`SCHM-01\` | \`SCHEMA_DEMAND_PRIMITIVES.md\` | SCOUT Output Structure | Active |
| \`SCHM-02\` | \`SCHEMA_SPATIAL_DNA.md\` | MARA Evidence Structure | Active |
| \`LOGC-01\` | \`PROHIBITIONS_VALIDATION.md\` | Governing Laws & Checklist | Active |
| \`WORK-01\` | \`WORKFLOW_SCOUT_DECOMPOSITION.md\` | SCOUT Logic | Active |
| \`WORK-02\` | \`WORKFLOW_MARA_BINDING.md\` | MARA Logic | Active |
| \`WORK-03\` | \`WORKFLOW_ARTIFACT_RENDERING.md\` | Rendering Logic | Active |

## 5. Maintenance Rules
- **Canonical Terminology:** All files must use terms like "Demand Primitive," "Spatial DNA," "Exhaust," and "Box Before Lens."
- **Traceability:** Every schema or logic gate must be traceable to the source materials.
- **Dependency Order:** Files must be updated in order of architectural dependency (Architecture → Schemas → Logic → Workflows).
`
  },
  {
    id: 'ARCH-01',
    path: '/architecture/ARCH_SYSTEM_ONTOLOGY.md',
    name: 'ARCH_SYSTEM_ONTOLOGY.md',
    category: 'architecture',
    role: 'System Ontology & Axioms',
    summary: 'Governed translation philosophy, Three-Machine taxonomy, categories of matter, and fundamental axioms.',
    dependencies: [],
    content: `# ARCH-01: System Ontology

## 1. Core Philosophy: Governed Translation
The system is not a matching engine; it is a **Controlled Translation Pipeline**. It rejects direct "artifact-to-artifact" comparison (Job Posting ↔ Resume). Instead, it decomposes human-authored artifacts into governed primitives before reasoning.

### The Golden Sequence
1. **Read First:** Ingest raw material while preserving source provenance.
2. **Represent Second:** Decompose into canonical primitives (Job Demand / Candidate Evidence).
3. **Bind Third:** Determine relationship through query-relative traversal.
4. **Project Fourth:** Render target-resolved artifacts from frozen snapshots.

## 2. The Three-Machine Architecture

| Machine | Responsibility | Inputs | Outputs |
| :--- | :--- | :--- | :--- |
| **SCOUT** | Target Compiler | Raw Job Posting | Admissible Demand Primitives |
| **MARA** | Binding/Projection Engine | Demand Primitives + Candidate DNA | Frozen Projection Snapshot |
| **ARTIFACT MODEL**| Projection Renderer | Frozen Snapshot | Target-Resolved Artifact (e.g., Resume) |

## 3. Categories of Matter
Matter is classified by its pertinence and relationship to the Target Query.

| Category | Definition | Repository Fate |
| :--- | :--- | :--- |
| **Admitted & Binding** | Legitimate demand supported by candidate evidence. | Included in Projection Artifact. |
| **Admitted & Non-Binding**| Legitimate demand *unsupported* by candidate evidence. | Results in **MARA Exhaust** (Gap Analysis). |
| **Not Admitted** | Irrelevant noise (Marketing fluff, titles, fluff). | Results in **SCOUT Exhaust** (Discarded). |

## 4. Fundamental Axioms
- **"Box Before Lens":** Reconstruct the operational reality of a role before applying classification (NAICS/O*NET).
- **Provenance Invariance:** No primitive exists without a traceable link to the source artifact.
- **Candidate Immutability:** MARA traversal is read-only. Projections are temporary and query-relative; they never rewrite the candidate's core identity.
- **Absence ≠ Negativity:** The lack of evidence for a capability (Unsupported) is not the same as evidence of a failure (Contradicted).

## 5. Canonical Terminology
- **Demand Primitive:** The smallest unit of job-side requirement (Actor + Action + Object + Relationship + Mechanism + Effect).
- **Spatial DNA:** The structured, multi-plane evidence substrate representing the candidate.
- **Exhaust:** Material that "falls out" of the pipeline, either due to irrelevance (Scout) or lack of evidence (MARA).
- **Hot Match:** A context-driven classification (e.g., NAICS) validated by functional evidence, rather than a keyword "Cold Match."
`
  },
  {
    id: 'CONT-01',
    path: '/contracts/PIPELINE_STAGES.md',
    name: 'PIPELINE_STAGES.md',
    category: 'contracts',
    role: 'Seven-Stage Pipeline Contract',
    summary: 'The sequential 7 gates from Intake Filtration to Artifact Projection, defining exit gates and exhaust generation.',
    dependencies: ['ARCH-01'],
    content: `# CONT-01: Pipeline Stages (The Seven Gates)

This document defines the contractual sequence of operations. Every execution must pass these gates in order.

## 1. Pipeline Overview
The system moves matter through seven stages, transitioning responsibility between the three machines (SCOUT → MARA → Artifact Model).

| Stage | Name | Machine | Primary Operation |
| :--- | :--- | :--- | :--- |
| **1** | **Intake & Filtration** | SCOUT | Separation of pertinent data from noise. |
| **2** | **Decomposition** | SCOUT | Atomic breakdown into Demand Primitives. |
| **3** | **Classification** | SCOUT | NAICS/O*NET hot-match diagnostics. |
| **4** | **Query Insertion** | MARA | Formulation of demand as a receptor set. |
| **5** | **Binding** | MARA | Traversal of Candidate DNA vs. Demand. |
| **6** | **Exhaust Formation** | MARA | Analysis of unsupported/contradicted demand. |
| **7** | **Projection** | ARTIFACT | Rendering of frozen snapshot to final form. |

## 2. Stage Details & Gates

### Stage 1: Intake & Filtration
- **Action:** Apply the "Admission Rule." Reject marketing fluff, job titles as evidence, and hiring filters.
- **Exit Gate:** All admitted material must have functional/operational consequence.
- **Exhaust:** Generates **SCOUT Exhaust** (Discarded noise).

### Stage 2: Decomposition
- **Action:** Break admitted text into "Demand Molecules" (Actor, Action, Object, etc.).
- **Exit Gate:** Every explicit operational verb must be represented. (Omission Control).

### Stage 3: Classification (Comprehension Diagnostic)
- **Action:** Resolve NAICS and O*NET/SOC codes.
- **Exit Gate:** Verification that the system understands the "economic neighborhood." Cold matches must be rejected.

### Stage 4: Query Insertion
- **Action:** The Target Compiler (SCOUT) hands the Demand Primitives to MARA. MARA selects the 4 active semantic walls for the projection box.
- **Exit Gate:** The query bundle must be relational (Person x Attribute).

### Stage 5: Binding (Traversal)
- **Action:** MARA traverses the immutable candidate substrate.
- **Exit Gate:** Determination of relationship: Supported, Contradicted, or Unsupported.

### Stage 6: Exhaust Formation
- **Action:** Isolate the residue of the legitimate query that did not bind.
- **Exit Gate:** Reasons for non-binding (e.g., \`unsupported\`, \`adverse\`) must be preserved.
- **Exhaust:** Generates **MARA Exhaust** (Candidate gaps).

### Stage 7: Projection
- **Action:** Freeze the evidence boundary. Render the snapshot into a human artifact.
- **Exit Gate:** Traceability—every sentence must link back to source evidence.

## 3. The Dual Exhaust Rule
The pipeline produces two distinct types of "waste" matter that must never be conflated:
1. **SCOUT Exhaust (Stage 1):** Irrelevant source material. It is not a candidate deficiency.
2. **MARA Exhaust (Stage 6):** Valid job requirements not met by the candidate. This *is* a candidate deficiency/gap.
`
  },
  {
    id: 'INTF-01',
    path: '/contracts/HANDOFF_SPECIFICATIONS.md',
    name: 'HANDOFF_SPECIFICATIONS.md',
    category: 'contracts',
    role: 'Inter-Machine Handoff Interfaces',
    summary: 'Specifications for Interface A (SCOUT -> MARA Query Bundle) and Interface B (MARA -> Artifact Model Frozen Snapshot).',
    dependencies: ['SCHM-01', 'SCHM-02'],
    content: `# INTF-01: Handoff Specifications

This document defines the contractual data payloads transferred between machines at specific pipeline stages.

## 1. Interface A: SCOUT → MARA (The Query Bundle)
**Trigger:** Completion of Stage 3 (Classification).
**Machine State:** \`mara_ready: TRUE\`

The Query Bundle converts job-side decomposition into a relational "receptor set" for MARA to traverse.

| Component | Content |
| :--- | :--- |
| **Target Identity** | NAICS/ONET codes, Hot-Match rationale, and Role Metadata (Provenance only). |
| **Demand Set** | An array of \`SCHM-01\` Demand Primitives. |
| **Active Receptors**| The 4 semantic walls selected by SCOUT for the projection box. |
| **Negative Space** | Explicit exclusions (e.g., "NOT a designer") to bound the query. |
| **Scout Exhaust** | (Metadata) Reference to discarded fluff to ensure it does not re-enter the query. |

## 2. Interface B: MARA → ARTIFACT MODEL (The Frozen Snapshot)
**Trigger:** Completion of Stage 6 (Exhaust Formation).
**Machine State:** \`projection_blocked: FALSE\`

The Frozen Snapshot is an immutable representation of the candidate/target relationship. It is the *only* data source allowed for artifact generation.

| Component | Content |
| :--- | :--- |
| **Freeze Record** | Timestamp and immutable hash of the evidence boundary. No data may be added post-freeze. |
| **Bound Atoms** | Mapping of specific \`SCHM-01\` Demand Primitives to specific \`SCHM-02\` Evidence Packets. |
| **Corroboration Map**| Analysis of whether evidence is Convergent (reinforcing) or Independent (distinct). |
| **MARA Exhaust** | Legitimate demands that failed to bind, including the specific reason (e.g., \`unsupported\`, \`contradicted\`). |
| **Projection Center**| The "Candidate/Query Center" defining the focal point of the snapshot. |
| **Geometric State** | The location of all bound evidence relative to the Ceiling, Baseline, and Floor. |

## 3. Machine State Indicators (Handoff Flags)
Handoffs are governed by these binary states:

- \`mara_ready\`: Set to \`TRUE\` only if NAICS/ONET Hot-Match is validated and Demand Molecules satisfy the reversible decomposition contract.
- \`projection_blocked\`: Set to \`TRUE\` if critical "Floor" evidence (Adverse/Contradictory) is detected, or if the "Floor" of alignment (Critical atoms) is not met.
- \`discovery_rule_satisfied\`: Set to \`TRUE\` if the O*NET/NAICS resolution was exposed immediately post-decomposition.

## 4. Integrity Assertion
> *"The Artifact Model shall not access the raw candidate substrate or the raw job posting. It is contractually limited to the Frozen Snapshot provided by Interface B."*
`
  },
  {
    id: 'SCHM-01',
    path: '/schemas/SCHEMA_DEMAND_PRIMITIVES.md',
    name: 'SCHEMA_DEMAND_PRIMITIVES.md',
    category: 'schemas',
    role: 'Demand Primitives & Target Structure',
    summary: 'Schema definition for Demand Molecules (Actor, Action, Object, Mechanism, Effect), Negative Space, and Diagnostic Anchors.',
    dependencies: ['ARCH-01'],
    content: `# SCHM-01: Schema - Demand Primitives

## 1. The Demand Molecule
The "Demand Molecule" is the fundamental unit of target-side representation. It ensures reversible decomposition (Read First, Represent Second).

| Attribute | Type | Description |
| :--- | :--- | :--- |
| \`id\` | UUID | Unique identifier for the primitive. |
| \`actor\` | String | Who performs the action (usually "Incumbent"). |
| \`action\` | String | The governing verb (e.g., "coordinates," "builds"). |
| \`object\` | String | The entity acted upon (e.g., "sample inventory"). |
| \`relationship\`| Enum | Relationship type: \`AUTHORITY\`, \`COORDINATION\`, \`SUPPORT\`. |
| \`mechanism\` | String | How the action is performed (the "process"). |
| \`effect\` | String | The expected operational output or outcome. |
| \`demand_type\` | Enum | \`TRAIT\`, \`SKILL\`, \`ABILITY\`, \`KNOWLEDGE\`. |
| \`provenance\` | String | Source text span / pointer to raw job posting. |
| \`neighbor_ids\`| Array | Links to other primitives that constrain this one. |

## 2. Negative Space Assertion
Used to define what the role is **not**, preventing role drift.

- **Schema:** \`{ "type": "NEGATIVE_SPACE", "assertion": "NOT X", "reason": "Y" }\`
- **Example:** \`NOT a people manager\` | **Reason:** Functional duties focus solely on process, zero direct reports mentioned.

## 3. Classification Anchors (The Diagnostic Wrapper)
Every set of Demand Primitives must be wrapped in a Diagnostic Anchor to prove SCOUT's comprehension.

| Anchor | Value | Rationale | Match Type |
| :--- | :--- | :--- | :--- |
| **NAICS** | 6-digit code | Why this industry? | \`HOT_MATCH\` |
| **O*NET/SOC** | 8-digit code | Why this occupation? | \`HOT_MATCH\` |

## 4. Constraint Rules
1. **Title Exclusion:** The bestowed job title (e.g., "Director of Fun") is recorded in metadata but **must not** appear in the \`action\` or \`object\` fields.
2. **Neutrality:** Traits must be neutral descriptors (e.g., "Persistent" instead of "Stubborn").
3. **Lossless Decomposition:** The \`mechanism\` and \`effect\` fields must prevent the semantic collapse of a duty into a generic keyword.
`
  },
  {
    id: 'SCHM-02',
    path: '/schemas/SCHEMA_SPATIAL_DNA.md',
    name: 'SCHEMA_SPATIAL_DNA.md',
    category: 'schemas',
    role: 'Candidate Spatial Evidence Substrate',
    summary: 'The Six-Domain Registry, Evidence Packets structure, Semantic Bands scale, and Spatial Cube Geometry.',
    dependencies: ['ARCH-01'],
    content: `# SCHM-02: Schema - Spatial Candidate DNA

## 1. The Evidence Registry (The Six Domains)
All candidate evidence must be categorized into one of the following six closed domains. These are storage buckets, not projection faces.

1. **Identity:** Bounded entity data (Location, contact, core roles).
2. **Work History:** Professional tenure and organizational contributions.
3. **Education & Technical Competency:** Academic and technical certifications/knowledge.
4. **Creative Works & Projects:** Artifacts built, systems designed, products launched.
5. **Psychometric & Cognitive Profile:** Behavioral tendencies and cognitive evidence.
6. **Testimony & Observed Behavior:** References, publications, and third-party witness.

## 2. The Evidence Packet (The Atomic Unit)
Evidence is stored in immutable packets.

| Field | Type | Description |
| :--- | :--- | :--- |
| \`evidence_id\` | UUID | Unique identifier for the evidence object. |
| \`domain\` | Enum | One of the 6 Domains above. |
| \`governing_verb\`| String | The action the candidate performed (e.g., "Led," "Optimized"). |
| \`entity\` | String | The object of the action (e.g., "15-person team," "ERP migration"). |
| \`provenance\` | Object | Link to source (resume, LinkedIn, GitHub, transcript). |
| \`confidence\` | Float | Extraction quality score (0.0 - 1.0). |
| \`authority\` | Enum | \`DIRECT\` (built it), \`CONTRIBUTORY\` (helped), \`STATIONARY\` (witnessed). |
| \`timestamp\` | Date | When the evidence was created/recorded. |

## 3. Projection Geometry (The Cube)
When a query is initiated, MARA constructs a temporary projection box using the "Box Before Lens" rule.

- **Invariant References:**
    - **Origin:** The Candidate (Absolute Zero).
    - **Ceiling:** Maximum positive alignment/demonstration.
    - **Floor:** Actual adverse or contradictory evidence (Failure/Misconduct).
- **Active Variables:**
    - **Semantic Walls:** MARA selects **4 active walls** from the 6-domain registry based on the specific Target Query.

## 4. Semantic Bands (The Measuring Grammar)
Each wall measures distance from the Origin using a governed scale:

| Band | Meaning |
| :--- | :--- |
| **Ceiling** | Ideal demonstration of the demand. |
| **Above Baseline**| Strong evidence exceeding neutral requirements. |
| **Baseline** | Neutral/Presence; evidence exists but does not differentiate. |
| **Below Baseline**| Weak demonstration or insufficient authority. |
| **Floor** | Active contradiction or failure. |

**Crucial Rule:** Absence of evidence (Unsupported) keeps an item at the Baseline/Unresolved state. It does **not** move an item to the Floor.
`
  },
  {
    id: 'LOGC-01',
    path: '/logic/PROHIBITIONS_VALIDATION.md',
    name: 'PROHIBITIONS_VALIDATION.md',
    category: 'logic',
    role: 'Governing Constraints & Validation Checklist',
    summary: 'Global negative constraints (No Title Bias, No Fluff, No Write-Back) and release validation gates.',
    dependencies: ['ARCH-01', 'CONT-01'],
    content: `# LOGC-01: Prohibitions & Validation Rules

## 1. Global Prohibitions (The "Do Not" List)
These rules apply across all machines and stages. Violation constitutes a system failure.

| Prohibition | Description |
| :--- | :--- |
| **NO_TITLE_EVIDENCE** | Job titles (bestowed or claimed) must not be used as evidence of function. |
| **NO_FLUFF_ADMISSION** | Marketing fluff ("rockstar," "dynamic") must never enter the Demand Primitive. |
| **NO_KEYWORD_MATCH** | Classification (NAICS/ONET) must be contextual (Hot Match), not keyword-driven. |
| **NO_WRITE_BACK** | MARA traversal is read-only. It cannot modify the candidate's immutable DNA. |
| **NO_SEVERED_PROVENANCE**| No primitive or evidence packet may exist without a link to its source. |
| **NO_UNSUPPORTED_NEG** | Absence of evidence is **not** negative evidence. Do not move to "Floor" without contradiction. |
| **NO_EXHAUST_CONFLATION**| Never merge SCOUT Exhaust (Irrelevance) with MARA Exhaust (Candidate Gaps). |
| **NO_FABRICATED_BRIDGE** | Artifacts must not invent links between unsupported demands and candidate history. |

## 2. Machine-Specific Logic Rules

### SCOUT (Target Compiler)
- **Box Before Lens:** You must define the operational "Box" (actions/objects) before applying the "Lens" (industry labels).
- **Reversible Decomposition:** Primitives must be detailed enough to reconstruct the original duty.
- **Omission Control:** Every material operational verb in the source must be accounted for.

### MARA (Binding Engine)
- **Absolute Zero:** All evaluations are relative to the Candidate Origin.
- **Read First, Represent Second:** Do not query until the Demand Primitive is structurally complete.
- **Invariant Geometry:** Ceiling and Floor are fixed directions; they do not change based on candidate quality.
- **Corroboration Logic:** Distinguish between *Convergent Corroboration* (multiple planes proving one thing) and *Independent Instantiation* (separate facts).

### ARTIFACT MODEL (Renderer)
- **Snapshot Constraint:** Artifacts can only use evidence contained within the **Frozen Projection**.
- **Traceability Contract:** Every sentence in the final artifact must be reversible back to a source evidence packet.

## 3. Validation Checklist (The Quality Gate)
Before a "Target-Resolved Artifact" is released, it must satisfy these checks:
1. [ ] Was the job title excluded from the query logic?
2. [ ] Is every claim in the artifact backed by a bound evidence packet?
3. [ ] Does the NAICS code represent the *economic activity* rather than just a keyword?
4. [ ] Is "MARA Exhaust" clearly identified as a gap rather than fluff?
5. [ ] Did the traversal maintain the "Candidate Immutability" rule?
6. [ ] Are the Ceiling/Floor boundaries used correctly as diagnostic limits?

## 4. Governing Axiom
> *"Irrelevant data is not admitted. Absence is not negative. Identity is immutable. Projection is temporary."*
`
  },
  {
    id: 'WORK-01',
    path: '/workflows/WORKFLOW_SCOUT_DECOMPOSITION.md',
    name: 'WORKFLOW_SCOUT_DECOMPOSITION.md',
    category: 'workflows',
    role: 'SCOUT Decomposition Workflow',
    summary: 'Operational steps for Stage 1-3: intake filtration, core purpose extraction, trait matrix, negative space, and diagnostic checks.',
    dependencies: ['SCHM-01', 'LOGC-01'],
    content: `# WORK-01: Workflow - SCOUT Decomposition

## 1. Overview
The SCOUT workflow is a 7-step process designed to extract the functional "Existential Why" of a role while discarding recruitment marketing noise.

## 2. Operational Steps

### Step 1: Ingestion & De-Commoditization (Stage 1)
- **Action:** Extract all governing verbs.
- **Filter:** Apply the \`LOGC-01\` Admission Rule.
    - **Discard:** "fast-paced," "rockstar," "dynamic," "years of experience," and the bestowed Job Title.
    - **Keep:** Physical, digital, relational, or authority-bearing actions (e.g., "coordinates," "builds," "reconciles").
- **Output:** Cleaned Atomic Verb Set.

### Step 2: Core Purpose Extraction
- **Action:** Identify the "Breakdown Scenario." Ask: *If this role vanished, what operational failure occurs?*
- **Output:** 1–2 sentence statement focusing on **outputs** (e.g., "Ensures sample flow accuracy") rather than **inputs** (e.g., "Tracks samples").

### Step 3: Behavioral Profiling & Metaphor
- **Action:** Convert tasks into observable behaviors.
    - *Example:* "Prioritize requests" → "Handles by business criticality, not who asks loudest."
- **Metaphor:** Identify the core role metaphor (e.g., "Control Tower," "Hub," "Mediator").

### Step 4: Inductive Trait Matrix Construction
- **Action:** Group verbs into clusters.
- **Rule:** If a verb does not fit an existing cluster, **create a new one**. Do not force-fit (prevents Omission Bias).
- **Structure:** For each cluster, define the Trait (neutral), Skill (learned), and Ability (applied outcome).

### Step 5: Negative Space Definition
- **Action:** Define what the role is **NOT**.
- **Source:** Contrast against the Core Purpose and Title Misconceptions.
- **Output:** Explicit "NOT X" assertions (e.g., "NOT a people manager," "NOT a strategist").

### Step 6: Classification Logic (The Diagnostic)
- **Action:** Resolve NAICS (Industry) and O*NET/SOC (Occupation).
- **Verification:** Perform the "Cold Match Test."
    - *Test:* If NAICS is "Retail," but the role has no interaction with POS or customers, **reject** and find the "Hot Match" (e.g., "Apparel Manufacturing").
- **Output:** Validated Diagnostic Anchors.

### Step 7: SBS Validation (QA)
- **Action:** Compare the output side-by-side with alternative interpretations.
- **Audit:** Ensure no material operational verb from the raw source was omitted.
`
  },
  {
    id: 'WORK-02',
    path: '/workflows/WORKFLOW_MARA_BINDING.md',
    name: 'WORKFLOW_MARA_BINDING.md',
    category: 'workflows',
    role: 'MARA Binding & Traversal Workflow',
    summary: 'Operational steps for Stage 4-6: query insertion, candidate DNA traversal, corroboration mapping, exhaust isolation, and boundary freeze.',
    dependencies: ['SCHM-02', 'INTF-01'],
    content: `# WORK-02: Workflow - MARA Binding & Projection

## 1. Overview
MARA is a read-only interrogation engine. It does not search for keywords; it tests the "Bind" between structured job demands and immutable candidate evidence.

## 2. Operational Steps

### Step 1: Query Insertion (Stage 4)
- **Action:** Accept the \`INTF-01\` Query Bundle from SCOUT.
- **Receptor Setup:**
    - Attach receptors to the **Candidate Origin** (Absolute Zero).
    - Activate the **4 Semantic Walls** defined in the Query Bundle.
    - Set the **Evidence Boundary** (Confidence/Authority threshold).

### Step 2: Traversal (Stage 5)
- **Action:** Traverse the Candidate DNA substrate through the active semantic walls.
- **Logic:** For each Demand Primitive, query the Evidence Registry.
- **Evaluation:** Measure the "distance" from Origin to Ceiling/Floor.
    - **Aligns:** Evidence supports the action/object/mechanism.
    - **Contradicts:** Evidence proves the candidate cannot or did not perform the demand.
    - **Absence:** No evidence found (Result: \`unsupported\`).

### Step 3: Corroboration & Counterposition
- **Convergent Corroboration:** Identify if multiple planes (e.g., Work History + Projects + Testimony) independently support the same proposition.
- **Independent Instantiation:** Determine if evidence objects represent distinct facts that should not be collapsed.
- **Counterposition:** Test the "Governing Verb" (e.g., *Built* vs. *Maintained*) to ensure the authority level matches the demand.

### Step 4: Exhaust Formation (Stage 6)
- **Action:** Collect all legitimate target demands that failed to bind.
- **Categorization:** Assign a reason to each exhaust atom:
    - \`unsupported\`: No evidence found.
    - \`non_demonstrated\`: Query requires history; none present.
    - \`contradicted\`: Adverse evidence found.
    - \`insufficient_authority\`: Evidence exists but at a lower authority than demanded.
- **Output:** **MARA Exhaust Map**.

### Step 5: The "Freeze" & Snapshot
- **Action:** Once traversal is complete, trigger the **Evidence Boundary Freeze**.
- **Constraint:** No new candidate evidence may enter the reasoning cycle.
- **Result:** Generate the **Frozen Snapshot**. This is a query-resolved representation of the candidate as viewed *only* through this specific target lens.
`
  },
  {
    id: 'WORK-03',
    path: '/workflows/WORKFLOW_ARTIFACT_RENDERING.md',
    name: 'WORKFLOW_ARTIFACT_RENDERING.md',
    category: 'workflows',
    role: 'Artifact Model Rendering Workflow',
    summary: 'Operational steps for Stage 7: frozen snapshot consumption, non-hallucinatory compression, and sentence-level traceability audit.',
    dependencies: ['INTF-01', 'LOGC-01'],
    content: `# WORK-03: Workflow - Artifact Model Rendering

## 1. Overview
The Artifact Model is a **Compressor**, not a Discovery Engine. Its task is to render the query-resolved relationship into human-readable formats using *only* the data contained within the Frozen Snapshot.

## 2. Operational Steps

### Step 1: Receipt of Frozen Snapshot (Stage 7 Start)
- **Action:** Accept Interface B from MARA.
- **Verification:** Confirm the \`freeze_hash\` is valid and the \`projection_blocked\` flag is \`FALSE\`.
- **Restriction:** The Renderer is contractually forbidden from accessing the raw candidate DNA substrate or the raw job posting.

### Step 2: Selection of Pertinent Evidence
- **Action:** Filter the Snapshot for "Admitted & Binding" matter.
- **Rule:** Only candidate evidence that has successfully "bound" to a Target Demand Primitive is eligible for inclusion in the final artifact.
- **Exclusion:**
    - Do NOT include SCOUT Exhaust (Discarded fluff).
    - Do NOT include MARA Exhaust (Gaps) in public-facing artifacts like resumes (unless specifically requested for internal risk briefs).

### Step 3: Compression & Synthesis
- **Action:** Render the bound evidence into the required format (Resume, LinkedIn, etc.).
- **Voice:** Maintain a factual, evidence-based tone.
- **Narrative Rule:** Every sentence must be a synthetic representation of one or more "Bound Atoms."
- **Constraint:** Do not "bridge" gaps. If a demand was unsupported in MARA, do not invent experience to cover it.

### Step 4: The Traceability Audit
- **Action:** Map every rendered sentence back to its source provenance.
- **Structure:**
    - \`Rendered Sentence\` → \`Snapshot Bound Atom\` → \`Evidence Packet ID\` → \`Source Span\`.
- **Validation:** If a sentence cannot be traced back to the Frozen Snapshot, it must be deleted.

### Step 5: Artifact Emission
- **Action:** Generate the final target-resolved document.
- **Metadata:** Attach the "Comprehension Diagnostics" (NAICS/O*NET) and "Core Purpose" to ensure the reader understands the lens through which this artifact was projected.
`
  }
];
