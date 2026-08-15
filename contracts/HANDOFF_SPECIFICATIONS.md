# INTF-01: Handoff Specifications

This document defines contractual payload boundaries between SCOUT, MARA, and the Artifact Model.

## Interface A: SCOUT → MARA

SCOUT produces a Query Bundle containing:

- target metadata and provenance;
- Demand Primitives;
- Negative Space;
- SCOUT Exhaust references;
- model-proposed NAICS/O*NET anchors;
- explicit classification validation state;
- execution-gate state.

A model-proposed `HOT_MATCH` is not independently validated merely because the model labels it that way. Without an external reference-validation mechanism, the anchor remains `UNVERIFIED` and MARA readiness does not pass.

The repair intentionally does not decide the protected unresolved question of whether SCOUT or MARA owns receptor selection, or whether four active receptors remain four.

## Interface B: MARA → Artifact Model

The Frozen Snapshot is the only data source the Artifact Model may consume.

It must contain all downstream-approved material required for rendering, including:

- governing schema version;
- candidate/target boundary identity;
- bound atoms;
- MARA Exhaust;
- geometric state;
- separate projection-sufficiency state;
- renderer-approved candidate display data;
- renderer-approved Demand Primitives;
- renderer-approved Evidence Packets;
- execution-gate state;
- canonical freeze hash.

The Artifact Model must not receive raw Candidate Spatial DNA, raw candidate evidence outside the snapshot, the raw job posting, or the raw Query Bundle.

## Provenance Rule

Every binding and every artifact traceability link must resolve to an exact identifier inside the permitted payload. Missing identifiers fail closed.

Forbidden fallbacks include:

- substituting the first bound atom;
- substituting the first Demand Primitive;
- synthesizing an Evidence Packet;
- inventing source provenance;
- guessing authority or evidence class.

## Freeze Integrity

The freeze hash must be computed from canonical serialization of the materially relevant snapshot payload, excluding only the hash field itself and non-material transport metadata.

Material state includes bindings, exhaust, boundary identity, target/query identity, geometry, renderer context, lineage/corroboration state, execution state, and governing schema version.

## Gate State

Handoffs are controlled by executable gate state, not by UI navigation.

- SCOUT stages 1-3 must pass before MARA handoff.
- MARA output must pass deterministic validation before the snapshot is considered frozen.
- Artifact rendering must verify snapshot integrity and traceability before generation.

## Floor vs Projection Sufficiency

Geometric Floor represents supported adverse/contradictory evidence only.

Projection sufficiency is a separate policy concept. The exact threshold remains unresolved and is represented explicitly as unresolved rather than being silently folded into Floor.
