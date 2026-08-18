# MARA / MARA++ — Synchronized Canon Checkpoint and Development Freeze

**State date:** 2026-08-17
**Repository:** digital-Alchemy-mcmg/Scout-plus-Mara-skill-workflow-based-beta
**Authority state:** CANONICAL SYNCHRONIZATION CHECKPOINT
**Freeze state:** FROZEN AGAINST ADDITIVE ARCHITECTURAL CHANGE UNTIL NEXT FULL SYNCHRONIZATION

## 1. Purpose

This document establishes the synchronized MARA/MARA++ working canon at the current project checkpoint. It bundles the repository state, the synchronized project architecture, the three-container completion assessment, and the development boundaries established through the current synchronization pass.

This checkpoint governs subsequent implementation work. Work may complete, test, harden, validate, and implement what is already represented here. New architectural concepts, new domains, new evidence classes, new projection stages, or other additive structural changes are not admitted into working canon until the next explicit full synchronization pass.

This freeze does not prohibit bug fixes, implementation of already-defined behavior, tests, validation, terminology corrections that preserve meaning, or resolution of contradictions against this checkpoint. It prohibits silent architectural expansion.

## 2. Repository and Branch Authority

Canonical repository:
https://github.com/digital-Alchemy-mcmg/Scout-plus-Mara-skill-workflow-based-beta

The repository represents the integrated SCOUT → MARA → Artifact Model system.

Current branch interpretation at this checkpoint:
- `main` is the active synchronized build lineage and contains the changes accepted through PR #2.
- PR #2 is the accepted/merged implementation lineage for continued development.
- PR #1 remains isolated and unresolved and is not treated as controlling `main` state.
- `build/mara-scout-synchronized-pr1` preserves the separated PR #1-related synchronized build state for later diagnosis without blocking continued development.

Repository structure already physically separates architecture, contracts, logic, schemas, workflows, runtime/server code, and application code. The system is therefore treated as an implemented build under development rather than a documentation-only architecture.

## 3. Controlling Three-Container Architecture

The synchronized system is divided into three distinct containers with controlled handoffs.

### Container 1 — SCOUT: Destination Decomposition

**Estimated architectural/build readiness: 85%**

SCOUT owns destination comprehension and decomposition. It does not construct candidate truth.

Substantially established:
- job-post intake and decomposition;
- explicit and implicit demand extraction;
- NAICS and O*NET classification as comprehension diagnostics rather than decorative metadata;
- demand primitives and target compilation;
- SCOUT-to-MARA handoff concept;
- separation of SCOUT exhaust from MARA exhaust;
- destination isolation from candidate-state construction until the authorized projection stage.

Remaining within the frozen architecture:
- harden decomposition accuracy against ambiguous and malformed postings;
- complete deterministic validation and failure handling;
- normalize remaining primitive schemas;
- regression testing across diverse postings;
- productionize intake/connectors.

These are implementation and validation tasks, not invitations to redesign SCOUT.

### Container 2 — MARA: Spatial Candidate DNA, Evidence, Coherence and Binding

**Estimated architectural/build readiness: 70%**

MARA owns candidate truth-state construction, evidence governance, Spatial Candidate DNA, coherence, query-resolved binding, and the governed evidence exhaust passed downstream.

Substantially established:
- immutable Candidate Core = Identity & Biographical Information;
- Candidate Core is not an evidence domain or plane;
- fixed Ceiling and Floor geometry;
- absence of evidence is not negative evidence;
- five candidate evidence domains surrounding the Core:
  1. Creative Works & Projects;
  2. Education & Technical Competency;
  3. Work History;
  4. Psychometric & Cognitive;
  5. References / Publications / Testimony / Observed & Inferred Behavior;
- Creative Works & Projects operating module established for production use;
- Education & Technical Competency operating module established for production use;
- candidate-centered, Core-outward extraction direction;
- evidence atoms and provenance preservation;
- one atom / one domain placement discipline;
- no gap-bridging or destination-driven rewriting of evidence;
- candidate coordinate distinguished from supporting evidence;
- extraction/placement confidence distinguished from evidentiary authority;
- evidence-class authority ceilings;
- low-authority evidence persists rather than being erased merely for weakness;
- source independence governs corroborative value;
- repetition alone is not independent corroboration;
- contradictions and limitations are preserved;
- candidate evidence is constructed before destination projection;
- evidence admission closes at candidate freeze;
- query-resolved traversal/binding operates against frozen candidate state;
- downstream operations may traverse, bind, rank, contextualize and project admitted evidence but may not manufacture new candidate evidence for a destination;
- derivative evidence packs are the intended governed MARA exhaust for downstream artifact construction;
- observed/inferred propositions must preserve lineage to originating evidence and cannot recursively corroborate themselves;
- linguistic projection is bounded by the evidenced candidate relationship; semantic variation may occur only inside a provenance-safe semantic neighborhood and may not inflate the underlying relationship.

Remaining within the frozen architecture:
- formal Work History operating module;
- formal Psychometric & Cognitive operating module;
- formal References / Publications / Testimony / Observed & Inferred Behavior operating module;
- executable cross-domain coherence rules;
- inference-lineage implementation;
- recurrence versus independent-corroboration handling;
- coordinate authority accumulation mechanics;
- contradiction handling mechanics;
- candidate-freeze implementation;
- derivative evidence-pack schema and contract;
- provenance-bounded semantic-neighborhood implementation.

MARA is the current critical path. These remaining items complete mechanisms already admitted by this checkpoint; they do not authorize additional evidence domains or replacement geometry.

## 4. Container 3 — Artifact Model: Projection, Rendering and Export

**Estimated architectural/build readiness: 45%**

The Artifact Model is downstream of MARA. It does not independently rediscover candidate truth from the raw candidate corpus and cannot create new candidate evidence.

Substantially established:
- Artifact Model is a separate downstream machine/container;
- it consumes governed MARA exhaust rather than rebuilding Spatial Candidate DNA;
- output is destination-specific projection rather than mutation of the candidate;
- resume/artifact generation exists in the build;
- language must remain calibrated to the evidenced relationship;
- limiting language such as co-created, helped, familiar with, used, implemented, designed, and related relationship states cannot be silently upgraded;
- artifact requirements may not reach backward and contaminate candidate-state construction.

Remaining within the frozen architecture:
- consume the completed derivative evidence-pack contract;
- semantic-envelope / verb-family implementation;
- prominence and ranking rules;
- artifact-specific composition;
- resume structure selection;
- contradiction and uncertainty rendering rules;
- epistemic-overreach linting;
- formatting/export pipeline hardening;
- additional artifact renderers already justified by the architecture;
- production validation.

Artifact Model completion intentionally follows MARA because the renderer must not define what MARA is authorized to claim.

## 5. Integrated Completion Assessment

At this synchronization checkpoint:

- SCOUT: approximately 85%
- MARA: approximately 70%
- Artifact Model: approximately 45%
- Integrated architecture/build readiness: approximately 65–70%

These percentages are architecture/build-readiness estimates. They are not code coverage, test coverage, or production-SLA measurements.

The remaining work is asymmetrical. SCOUT is primarily in hardening/validation. MARA requires completion of already-defined evidence and coherence mechanisms. Artifact Model is deliberately less complete because its authoritative input contract depends on MARA's derivative evidence-pack machinery.

## 6. Authorized Development Sequence Under Freeze

The current highest-leverage implementation sequence is:

1. complete Work History;
2. complete Psychometric & Cognitive;
3. complete References / Publications / Testimony / Observed & Inferred Behavior;
4. formalize cross-domain coherence and corroboration;
5. implement governed inference lineage and coordinate authority;
6. implement candidate freeze;
7. formalize and implement derivative evidence packs;
8. implement provenance-bounded semantic projection / verb families;
9. complete Artifact Model composition, linting and export;
10. harden SCOUT and run end-to-end regression validation across the three-container pipeline.

This sequence is execution guidance within the synchronized architecture, not permission to add new architecture.

## 7. Synchronization Rule

This document is the working synchronization authority for the project state represented here. Earlier material remains usable only where it does not conflict with this checkpoint or with a later explicitly promoted synchronization checkpoint.

During the freeze:
- do not add new MARA domains;
- do not move Identity & Biographical Information out of Candidate Core;
- do not treat Core as a plane/domain;
- do not treat missing evidence as Floor/negative evidence;
- do not collapse SCOUT, MARA and Artifact Model into one reasoning stage;
- do not allow destination requirements to alter frozen candidate evidence;
- do not allow the Artifact Model to independently manufacture candidate truth;
- do not convert repetition into independent corroboration without source independence;
- do not allow inferred evidence to recursively corroborate its own originating evidence;
- do not silently expand authority ceilings or claim scope;
- do not add architectural features merely because they appear useful during implementation.

If implementation exposes a genuine architectural conflict or missing requirement, record and surface it as a synchronization issue. Do not silently solve it by modifying canon. The issue waits for explicit adjudication or the next full synchronization pass.

## 8. Development-State Synchronization Method

Long model-development sessions may be serialized and treated as development branches for cross-model reconciliation. AI Studio, Claude and GPT development states may be brought into the project's convergence process, compared against the current working canon, and reconciled. Convergence is supporting evidence, not automatic canon. Conflicts are surfaced for human adjudication.

This process is a development/governance mechanism and does not alter Spatial Candidate DNA's evidentiary architecture.

## 9. Freeze Declaration

Effective with this checkpoint, the MARA/MARA++ architecture represented above is frozen against additive architectural change until the next explicit full synchronization.

Implementation proceeds against this state. New discoveries that would change architecture are captured as pending synchronization questions rather than inserted directly into working canon.
