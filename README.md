# MARA + SCOUT: Query-Resolved Candidate Projection Pipeline

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
- `ARCH_SYSTEM_ONTOLOGY.md`: The axioms, definitions, and "Existential Why."

### /contracts
- `PIPELINE_STAGES.md`: The sequence of the 7 Gates.
- `HANDOFF_SPECIFICATIONS.md`: Data payloads between machines.

### /schemas
- `SCHEMA_DEMAND_PRIMITIVES.md`: The structure of a Job Demand.
- `SCHEMA_SPATIAL_DNA.md`: The structure of Candidate Evidence.

### /logic
- `PROHIBITIONS_VALIDATION.md`: The governing laws (No title bias, No fluff).

### /workflows
- `WORK_01`: How to run SCOUT.
- `WORK_02`: How to run MARA.
- `WORK_03`: How to render artifacts.

## 6. How to Use This Repository
1. **To Implement:** Start with `PIPELINE_STAGES.md` to understand the flow, then follow the `WORK_XX` files in order.
2. **To Audit:** Use `PROHIBITIONS_VALIDATION.md` as a checklist against any system output.
3. **To Extend:** Ensure any new schemas follow the **Provenance Invariance** rules in `ARCH_SYSTEM_ONTOLOGY.md`.

## 7. Governing Statement
> *"Irrelevant data is not admitted. Absence is not negative. Identity is immutable. Projection is temporary. Every claim must be traceable."*
