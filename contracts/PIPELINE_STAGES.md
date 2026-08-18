# CONT-01: Pipeline Stages — Seven Executable Gates

The system preserves the seven-stage SCOUT → MARA → Artifact Model sequence. Stages are execution gates, not presentation tabs.

| Stage | Machine | Gate |
|---|---|---|
| 1. Intake & Filtration | SCOUT | Source accepted; SCOUT Exhaust separated from admitted operational matter. |
| 2. Decomposition | SCOUT | Demand Primitives are reversible, uniquely identified, and provenance-complete. |
| 3. Classification | SCOUT | NAICS/O*NET classification has an explicit validation state; MARA readiness requires validated anchors. |
| 4. Query Insertion | MARA | Valid Query Bundle and canonical Candidate Core/five-domain substrate accepted. |
| 5. Binding | MARA | Every binding references existing demand/evidence IDs; no fabricated provenance; unsupported is not negative. |
| 6. Exhaust & Freeze | MARA | MARA Exhaust states preserved; snapshot boundary is self-contained and integrity-valid. |
| 7. Projection | ARTIFACT | Renderer consumes only the Frozen Snapshot and all artifact traceability resolves within it. |

## Gate Ordering

A later stage cannot be made valid by navigating to it. The UI may inspect a blocked gate, but it may not use navigation to satisfy prerequisites.

If an upstream source changes or a stage fails, downstream binding/snapshot/artifact state must be invalidated.

## Stage 3 Validation

Model classification and external validation are distinct. `HOT_MATCH` is a model hypothesis until an actual validation source verifies it. No reference layer is fabricated by this repair.

## Stage 5 Negative Evidence Rule

`FLOOR` requires explicit contradictory/adverse evidence. Unsupported or missing evidence cannot create a Floor placement.

## Stage 6 MARA Exhaust

MARA Exhaust is the residue of legitimate demand that did not bind under the current evidence boundary. It preserves reasons such as:

- `unsupported`
- `non_demonstrated`
- `contradicted`
- `insufficient_authority`

A non-bind is not automatically a generalized candidate deficiency.

## Protected Unresolved Decisions

This repair does not decide:

- whether four active semantic walls remain four;
- whether Semantic Bands remain long-term architecture;
- exact receptor-selection ownership;
- any formal projection-sufficiency threshold.

Those dependencies remain explicit rather than being guessed.
