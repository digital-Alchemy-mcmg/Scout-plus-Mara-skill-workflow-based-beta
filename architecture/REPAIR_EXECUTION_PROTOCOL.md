# Repair Execution Protocol

This file defines how an implementation agent should execute `PR_MARA_SCOUT_ARCHITECTURE_REPAIR.md`.

## Authority order

1. Current repository state and contracts.
2. `architecture/PR_MARA_SCOUT_ARCHITECTURE_REPAIR.md`.
3. Existing implementation and tests.
4. Unresolved architectural decisions explicitly listed in the repair specification.

Do not treat a model-generated implementation suggestion as authority over the repository contract.

## Execution behavior

Inspect the repository before modifying it.

Implement the repair specification in the active repair branch/PR rather than creating a competing redesign.

For each correction:

1. Locate the affected contract, schema, workflow, runtime path, UI surface, and tests.
2. Determine the smallest coherent implementation that enforces the stated invariant.
3. Update dependent documentation and manifests when the repository structure changes.
4. Add or update deterministic tests for the invariant.
5. Run the available build, type, and test checks.
6. Record unresolved dependencies instead of guessing.

## State integrity rules

Never leave downstream state valid-looking when an upstream stage fails or its source input changes.

Never fabricate provenance.

Never silently substitute stale candidate, demand, decomposition, binding, or artifact state.

Never allow UI navigation to substitute for an execution gate.

Never allow an LLM response to self-certify a deterministic invariant that the runtime can validate.

## Completion condition

Do not report the repair as complete merely because files changed or the build succeeds.

The implementation is complete only when the stated architectural invariants are enforced and the relevant tests demonstrate them.

If an invariant cannot be implemented without resolving a protected architectural question, stop at that boundary, document the dependency in the PR, and leave the unresolved decision intact.
