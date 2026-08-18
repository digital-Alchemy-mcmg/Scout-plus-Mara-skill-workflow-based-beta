# LOGC-01: Prohibitions & Deterministic Validation Rules

## Global Prohibitions

- **NO_TITLE_EVIDENCE** — bestowed job titles are not operational evidence.
- **NO_FLUFF_ADMISSION** — marketing fluff does not enter Demand Primitives.
- **NO_KEYWORD_MATCH** — classification reasoning must be contextual; model classification is not self-validation.
- **NO_WRITE_BACK** — MARA traversal cannot mutate Candidate Core or evidence.
- **NO_SEVERED_PROVENANCE** — every primitive, binding, and artifact trace must resolve to source-backed identifiers.
- **NO_UNSUPPORTED_NEGATIVE** — unsupported evidence cannot become Floor/adverse evidence.
- **NO_EXHAUST_CONFLATION** — SCOUT Exhaust and MARA Exhaust remain separate.
- **NO_FABRICATED_BRIDGE** — rendering cannot invent unsupported candidate claims.
- **NO_STALE_DOWNSTREAM_STATE** — changed/failed upstream execution invalidates downstream state.
- **NO_RENDERER_BYPASS** — Artifact Model cannot access raw candidate/query inputs outside Frozen Snapshot.

## Candidate Ontology Validation

Deterministic validation must enforce:

- Candidate Core exists and owns identity/biographical subject information;
- Evidence Registry contains only the five legal evidence domains;
- `IDENTITY` is rejected as evidence;
- evidence IDs, proposition IDs, source lineage, and provenance are present;
- extraction confidence and authority ceiling are independently represented;
- evidence-domain difference alone does not establish independence.

## Classification Validation

NAICS/O*NET model output must carry explicit `UNVERIFIED`, `VALIDATED`, or `REJECTED` state. A model-proposed `HOT_MATCH` remains `UNVERIFIED` unless an actual reference validator supplies validation evidence.

## Binding Validation

Every bound demand ID and evidence ID must exist. Missing references fail closed.

A `FLOOR` placement passes `NO_UNSUPPORTED_NEGATIVE` only when the bound evidence explicitly carries contradiction/adverse state. The rule does not require Floor count to be zero.

## Snapshot Validation

Before Stage 6 passes:

- renderer context must be self-contained;
- every bound reference must resolve inside the frozen boundary;
- geometric Floor and projection sufficiency must be separately represented;
- the canonical hash must cover the materially relevant payload;
- the governing schema version and boundary identity must be present.

## Artifact Validation

Artifact generation receives Frozen Snapshot only.

Every artifact traceability link must resolve to a bound atom, Demand Primitive, and Evidence Packet inside the Frozen Snapshot. Any missing identifier blocks rendering; no fallback object is permitted.

## Compliance Reporting

Audit UI must derive pass/fail from runtime checks. It must not hardcode success, render every rule as passed, or claim 100% compliance when checks fail.
