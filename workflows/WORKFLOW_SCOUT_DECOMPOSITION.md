# WORK-01: SCOUT Decomposition Workflow

SCOUT operationalizes Stages 1-3. It does not certify its own classification output.

## Stage 1 — Intake & Filtration

- preserve raw source provenance;
- separate operational matter from SCOUT Exhaust;
- keep Negative Space distinct from positive demand;
- do not use bestowed title as functional evidence.

## Stage 2 — Reversible Decomposition

Each admitted demand becomes a uniquely identified Demand Primitive with:

- actor;
- action;
- object;
- relationship;
- mechanism;
- effect;
- demand type;
- source provenance.

Stage 2 fails if required fields or provenance are missing, or IDs collide.

## Stage 3 — Classification Diagnostic

NAICS/O*NET reasoning occurs after operational decomposition.

The model may propose `HOT_MATCH` or `COLD_MATCH`, but the proposal must separately carry `validationStatus`.

Without an actual external reference-validation mechanism, classification remains `UNVERIFIED`. SCOUT must not self-promote it to `VALIDATED`.

## MARA Readiness

MARA handoff requires executable Stage 1-3 gates to pass. UI navigation cannot substitute for gate state.

## Protected Boundary

This workflow does not decide whether SCOUT or MARA owns receptor selection or whether four active receptors remain four under the five-domain ontology.
