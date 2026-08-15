# MARA/SCOUT Repository Manifest

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
| `/architecture` | Foundational | Core ontology, Three-Machine definitions, and fundamental principles. |
| `/contracts` | Interface | Seven-stage pipeline definitions and inter-machine handoff specs. |
| `/schemas` | Structural | Definitions for Demand Primitives, Evidence Packets, and Trait Clusters. |
| `/logic` | Governance | Prohibitions, validation rules, and "Golden Rules." |
| `/workflows` | Process | Specific step-by-step logic for decomposition and traversal. |

## 4. File Registry

| File ID | Name | Role | Status |
| :--- | :--- | :--- | :--- |
| `ROOT-01` | `README.md` | Entry Point & Overview | Active |
| `ARCH-01` | `ARCH_SYSTEM_ONTOLOGY.md` | Core Definitions & Principles | Active |
| `CONT-01` | `PIPELINE_STAGES.md` | 7-Stage Contract | Active |
| `INTF-01` | `HANDOFF_SPECIFICATIONS.md` | Inter-Machine Specs | Active |
| `SCHM-01` | `SCHEMA_DEMAND_PRIMITIVES.md` | SCOUT Output Structure | Active |
| `SCHM-02` | `SCHEMA_SPATIAL_DNA.md` | MARA Evidence Structure | Active |
| `LOGC-01` | `PROHIBITIONS_VALIDATION.md` | Governing Laws & Checklist | Active |
| `WORK-01` | `WORKFLOW_SCOUT_DECOMPOSITION.md` | SCOUT Logic | Active |
| `WORK-02` | `WORKFLOW_MARA_BINDING.md` | MARA Logic | Active |
| `WORK-03` | `WORKFLOW_ARTIFACT_RENDERING.md` | Rendering Logic | Active |

## 5. Maintenance Rules
- **Canonical Terminology:** All files must use terms like "Demand Primitive," "Spatial DNA," "Exhaust," and "Box Before Lens."
- **Traceability:** Every schema or logic gate must be traceable to the source materials.
- **Dependency Order:** Files must be updated in order of architectural dependency (Architecture → Schemas → Logic → Workflows).
