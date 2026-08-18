# Implementation Handoff

This branch is the implementation child of `fix/mara-scout-architecture-contracts`.

Do not target `main` for this repair. The active repair work must land back into the fixer branch first.

Read:

- `architecture/PR_MARA_SCOUT_ARCHITECTURE_REPAIR.md`
- `architecture/REPAIR_EXECUTION_PROTOCOL.md`

Implement the repair specification against the existing architecture. Preserve protected architecture and do not guess at unresolved decisions. Use deterministic contracts, schemas, workflows, runtime validation, and tests for deterministic invariants. Do not create a competing redesign.

The PR is complete only when the required invariants are implemented and demonstrated by tests. Record unresolved dependencies and validation results in the PR.