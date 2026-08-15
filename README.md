# MARA + SCOUT: Query-Resolved Candidate Projection Pipeline

MARA/SCOUT is a governed translation architecture that projects immutable candidate evidence against deconstructed target demand. It does not directly match a job posting to a résumé.

## Protected Three-Machine Architecture

1. **SCOUT (Target Compiler)** — converts raw target postings into reversible Demand Primitives, Negative Space, classification hypotheses, and SCOUT Exhaust.
2. **MARA (Binding Engine)** — performs read-only traversal of canonical Candidate Core + five-domain evidence against validated target demand.
3. **Artifact Model (Renderer)** — consumes only a validated Frozen Snapshot and renders a target-resolved artifact.

## Corrected Candidate Ontology

Candidate Core contains immutable identity and biographical subject information. Candidate Core is not an evidence domain.

The Evidence Registry contains five domains:

- Work History
- Education & Technical Competency
- Creative Works & Projects
- Psychometric & Cognitive
- References / Publications / Testimony / Observed Behavior

## Seven Executable Gates

1. Intake & Filtration
2. Reversible Decomposition
3. Classification Validation
4. Query Acceptance
5. Binding
6. Exhaust Formation & Freeze
7. Artifact Projection

Stage navigation does not satisfy a gate. Failed or changed upstream state invalidates downstream state.

## Governance

Deterministic runtime checks enforce what can be checked mechanically: schema legality, identifiers, provenance, authority separation, classification validation state, gate order, unsupported-negative protection, snapshot boundary integrity, and renderer traceability.

LLM reasoning remains responsible for decomposition, interpretation, classification hypotheses, and binding hypotheses inside those constraints.

## Frozen Snapshot Contract

The Artifact Model receives the Frozen Snapshot only. Missing evidence/demand identifiers fail closed; no synthetic provenance or first-item fallback is allowed. The freeze hash covers canonical serialization of the materially relevant snapshot payload.

## Classification

A model may propose a `HOT_MATCH`, but that proposal remains `UNVERIFIED` until an actual external reference-validation mechanism validates it. This repository does not fabricate NAICS/O*NET reference verification.

## Workflows

- `workflows/WORKFLOW_SCOUT_DECOMPOSITION.md`
- `workflows/WORKFLOW_MARA_BINDING.md`
- `workflows/WORKFLOW_ARTIFACT_RENDERING.md`

## Validation

Run:

- `npm test`
- `npm run validate:architecture`
- `npm run lint`
- `npm run build`

A build alone does not establish architecture compliance.

## Repair Work Order

The active architecture repair is governed by:

- `architecture/PR_MARA_SCOUT_ARCHITECTURE_REPAIR.md`
- `architecture/REPAIR_EXECUTION_PROTOCOL.md`
- `architecture/IMPLEMENTATION_HANDOFF.md` on the implementation branch.

Protected unresolved decisions are documented there and must not be guessed during implementation.
