# Implementation Handoff

## Target

This is the implementation PR for the MARA + SCOUT architecture repair.

The base branch is `fix/mara-scout-architecture-contracts`. Do not target `main`.

## Required reading

Read these files from the base branch before changing implementation:

- `architecture/PR_MARA_SCOUT_ARCHITECTURE_REPAIR.md`
- `architecture/REPAIR_EXECUTION_PROTOCOL.md`

## Operating rule

Implement the repair specification on this branch. Do not create a competing repair branch or redesign the system.

Preserve the protected architecture. Treat explicitly unresolved architectural decisions as protected boundaries. If a required implementation depends on one, document the dependency rather than guessing.

## Implementation objective

Bring the existing repository into runtime conformance with its architecture. Correct the identified ontology, authority, provenance, snapshot, validation, gate, workflow, candidate-input, failure-state, and rendering-boundary defects.

Deterministic invariants belong in contracts, schemas, workflows, runtime validation, and tests wherever practical. Do not rely on model prompts to self-certify deterministic invariants.

## Completion

Do not report completion because files changed or a build passes. The relevant architectural invariants must be implemented and demonstrated by tests. Update this PR with unresolved dependencies and validation results.