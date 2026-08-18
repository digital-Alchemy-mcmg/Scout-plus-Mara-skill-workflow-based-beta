# MARA + SCOUT Architecture Repair Specification

## Purpose

Bring the MARA + SCOUT repository forward from its current architecture snapshot without rebuilding the system or silently changing unresolved architecture.

The repository already contains a coherent SCOUT → MARA → Artifact Model architecture. This repair moves implementation toward enforcing that architecture rather than relying primarily on model prompts to obey it.

## Protected architecture

Preserve the existing:

- SCOUT → MARA → Artifact Model separation
- Demand Primitive decomposition
- Negative Space representation
- Dual Exhaust separation
- Immutable candidate traversal
- Frozen Snapshot concept
- Traceability requirements
- Architecture / Contracts / Schemas / Logic / Workflows repository separation
- Interactive inspector UI

## Unresolved architectural decisions — DO NOT GUESS

1. Whether the four active semantic walls remain four under the corrected five-domain ontology.
2. Whether the current Semantic Band model remains part of the architecture.
3. Exact semantics of MARA Exhaust beyond unsupported by available evidence.
4. Whether SCOUT or MARA owns receptor selection.
5. Formal location of Spatial DNA population.
6. Whether this repository is the current development target or an August-10 reference specimen.

If implementation depends on one of these decisions, surface the dependency rather than inventing a resolution.

## Required corrections

### 1. Candidate Core / Evidence Domain ontology

Candidate Core must be first-class. Identity / biographical subject information belongs to Candidate Core, not to the Evidence Registry.

Evidence Registry contains five evidence domains:

- Work History
- Education / Competency
- Creative Works
- Psychometrics
- Testimony / Behavior

Remove the ontology collision between Candidate Core and the evidence registry across types, schemas, prompts, UI selectors, sample data, validation, serialization, and documentation.

### 2. Evidence confidence vs authority

Separate extraction confidence from evidence/source class and authority ceiling. High extraction confidence must not imply high evidentiary authority.

Preserve provenance, candidate relationship, proposition identity, source lineage, evidentiary independence, corroboration state, contradiction state, and convergence state as distinct concepts where applicable.

### 3. Corroboration

Do not treat `CONVERGENT | INDEPENDENT` as sufficient by itself. Distinguish proposition identity, source lineage, evidentiary independence, corroboration, contradiction, and convergence. Different domains do not automatically establish independent evidence.

### 4. Frozen Snapshot boundary

Artifact Model must consume only the downstream-approved Frozen Snapshot. It must not directly access raw Candidate Spatial DNA, raw candidate evidence, raw job posting, or raw query bundle.

The Frozen Snapshot must contain everything the renderer is contractually permitted to use.

### 5. Provenance must fail closed

Remove any behavior that fabricates replacement evidence when provenance lookup fails. Missing evidence IDs must fail closed. Never substitute the first available evidence packet, first bound atom, synthetic evidence, default provenance, guessed authority, or guessed source.

### 6. Snapshot integrity

The freeze hash must be based on canonical serialization of the complete materially relevant Frozen Snapshot payload, including applicable bindings, exhaust, boundary identity, projection state, target/query identity, geometry, lineage, corroboration state, and governing schema version. Timestamp alone is not sufficient.

### 7. HOT_MATCH validation

Separate model classification from validated classification. A model must not self-certify `HOT_MATCH` as independently verified without an actual reference-validation mechanism. If no reference layer exists, preserve the classification as unverified.

### 8. Seven-stage execution gates

The seven stages must become executable gates rather than UI-only visualization. Enforce stage ordering, prerequisites, provenance completeness, demand accounting, classification validation state, MARA readiness, reversible decomposition, and handoff validity. UI navigation must not bypass execution gates.

### 9. Deterministic validator

Replace hardcoded audit success values with actual validation. Validate schema conformity, enums, identifiers, provenance, immutability, dual exhaust, freeze integrity, post-freeze mutation, evidence-domain legality, authority constraints, corroboration, rendering boundary, MARA readiness, and gate ordering. Compliance percentage must reflect actual results.

### 10. NO_UNSUPPORTED_NEGATIVE

Do not equate `NO_UNSUPPORTED_NEGATIVE` with zero Floor evidence. Validate whether Floor/adverse evidence is legitimately supported, classified, authoritative enough, and not inferred merely from absence.

### 11. MARA Exhaust semantics

Do not collapse every MARA non-bind into candidate deficiency. Preserve distinctions such as unsupported, contradicted, authority-limited, and other explicitly defined non-bind states. Absence is not negativity.

### 12. Geometric Floor vs projection sufficiency

Separate actual adverse/contradictory evidence (geometric Floor) from the minimum evidence/binding requirement necessary to permit projection (projection sufficiency gate). Do not use the same Floor concept for both.

### 13. Custom candidate input

Candidate input must actually populate the candidate substrate used by execution, or the unsupported path must be explicitly disabled. Never accept a new candidate while silently executing against a previous candidate's substrate.

### 14. Failure handling

Remove any claim of a local fallback unless a real deterministic local fallback exists. On failed SCOUT/MARA execution, invalidate affected downstream state rather than pairing new input with stale decomposition, MARA state, or artifacts.

### 15. Workflow layer

Create the referenced workflow layer. Workflows must operationalize existing contracts and schemas rather than duplicating the entire architecture into prompts or workflow documents.

Expected workflow areas:

- SCOUT decomposition
- MARA binding
- Artifact rendering

## Deterministic governance principle

Where a rule can be checked deterministically, enforce it outside the model wherever practical.

LLM reasoning should handle decomposition, interpretation, binding hypotheses, and classification reasoning. Runtime validation should enforce schemas, identifiers, provenance, authority, corroboration constraints, freeze integrity, rendering permissions, and gate state.

## Required deliverables

- Corrected Candidate Core / five-domain ontology.
- Independent confidence and authority model.
- Stronger corroboration model.
- Genuine Frozen Snapshot boundary.
- No fabricated provenance.
- Canonical full-payload snapshot hashing.
- Explicit model-vs-validated classification state.
- Executable seven-stage gate state.
- Deterministic validation layer.
- Correct NO_UNSUPPORTED_NEGATIVE behavior.
- Correct MARA Exhaust semantics.
- Separate geometric Floor and projection sufficiency.
- Correct custom candidate handling.
- Correct failure-state invalidation.
- Actual workflow layer.
- Updated repository documentation and manifest.
- Tests covering corrected invariants.

## Non-goals

Do not:

- rebuild MARA/SCOUT from scratch;
- redesign the UI merely for appearance;
- replace the three-machine architecture;
- remove the interactive inspector;
- invent unresolved ontology decisions;
- fabricate NAICS/O*NET reference data;
- make the LLM responsible for deterministic validation;
- convert every architectural rule into hardcoded application logic while discarding the contract layer.

## Acceptance criteria

A correction is complete only when implementation, affected contracts/schemas/workflows, and tests agree.

Existing valid behavior must remain intact for SCOUT decomposition, Demand Primitive creation, Negative Space, dual exhaust, immutable MARA traversal, Frozen Snapshot behavior, downstream artifact projection, and interactive inspection.

The objective is not to make the repository look newer. The objective is to make implementation obey the architecture it already claims to represent.
