# WORK-02: MARA Binding Workflow

MARA operationalizes Stages 4-6 as read-only traversal of canonical Candidate Core + five-domain evidence.

## Stage 4 — Query Acceptance

MARA accepts only a Query Bundle that passed SCOUT readiness and a candidate substrate normalized to:

- first-class Candidate Core;
- five legal evidence domains;
- no `IDENTITY` evidence domain.

The repair does not decide receptor ownership/count.

## Stage 5 — Binding

For each binding hypothesis:

- demand ID must resolve;
- evidence ID must resolve;
- proposition identity and source lineage are preserved;
- extraction confidence is not treated as authority;
- authority ceiling remains distinct from candidate relationship;
- evidence-domain difference does not imply independence;
- corroborating evidence IDs must independently resolve;
- unsupported evidence cannot become Floor;
- Floor requires explicit contradiction/adverse state.

Any unresolvable identifier fails closed.

## Stage 6 — MARA Exhaust and Freeze

Non-binding demand is preserved with its explicit reason (`unsupported`, `non_demonstrated`, `contradicted`, `insufficient_authority`) and is not automatically labeled a generalized candidate deficiency.

The Frozen Snapshot must be self-contained for the renderer and include only downstream-approved candidate, demand, evidence, exhaust, geometry, lineage/corroboration, boundary identity, and execution state.

The freeze hash is computed over canonical serialization of the materially relevant snapshot payload.

## Projection Sufficiency

Geometric Floor and projection sufficiency are separate. No sufficiency threshold is invented by this repair; unresolved policy is represented as unresolved.

## Exit

Stage 6 passes only after deterministic snapshot validation succeeds.
