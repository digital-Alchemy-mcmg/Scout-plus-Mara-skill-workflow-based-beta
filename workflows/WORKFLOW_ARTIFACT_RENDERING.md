# WORK-03: Artifact Rendering Workflow

The Artifact Model is a renderer/compressor, not a discovery engine.

## Stage 7 Input Boundary

The Artifact Model accepts exactly:

- Frozen Snapshot;
- requested artifact type.

It must not receive raw Candidate Spatial DNA, raw candidate evidence outside the snapshot, raw job posting, or raw Query Bundle.

## Pre-render Validation

Before model generation:

1. recompute the canonical snapshot material hash;
2. require equality with `freezeHash`;
3. require renderer context and boundary identity;
4. require every bound demand/evidence ID to resolve inside the snapshot;
5. require deterministic snapshot checks to pass.

Failure blocks rendering.

## Rendering

The model may synthesize only from renderer-approved bound material contained in the snapshot.

MARA Exhaust may be used only where the requested artifact explicitly calls for gap-oriented output. It cannot be bridged into candidate capability claims.

## Traceability

Every returned artifact trace must resolve simultaneously to:

- a bound atom;
- a Demand Primitive inside snapshot renderer context;
- an Evidence Packet inside snapshot renderer context.

Missing references fail closed. The runtime must never substitute a first item, synthetic packet, default source, guessed authority, or other replacement provenance.

## Exit

The emitted artifact carries the exact snapshot `freezeHash`. A stale artifact whose hash no longer matches the current snapshot is invalid.
