# MARA Assembly-Line Pin Architecture
**Synchronization date:** 2026-08-18  
**Status:** Synchronization-ready architecture clarification  
**Scope:** From SCOUT completion through final artifact acceptance

## Governing principle
**Before freeze, truth may still be governed. After freeze, truth may only be expressed.**

The freeze is the boundary between MARA truth governance and Artifact Model expression. Any USER_OVERRIDE required to resolve a mandatory condition must occur before the freeze. After the freeze, no downstream process may alter candidate truth, chronology/accountability, evidentiary authority, provenance, contradictions, limitations, observed/inferred lineage, or USER_OVERRIDE provenance.

## Pin registry

### PIN-00 — SCOUT Completion / Handoff
**Authority:** SCOUT  
**Operation:** Deliver decomposed destination, intent, demand primitives, classifications, and target context to MARA.  
**Output:** SCOUT Target Payload.

### PIN-01 — MARA Intake & Initialization
**Authority:** MARA  
**Operation:** Bind the SCOUT payload to candidate context and initialize the governed run.  
**Output:** MARA Run Context.

### PIN-02 — Evidence Acquisition
**Authority:** MARA  
**Operation:** Retrieve candidate evidence from admitted sources by domain.  
**Output:** Candidate Evidence Corpus.

### PIN-03 — Evidence Admission
**Authority:** MARA  
**Operation:** Classify evidence, preserve provenance, apply admission rules, domain boundaries, evidence classes, and authority ceilings.  
**Output:** Admitted Evidence Set.

### PIN-04 — Evidence Atomization & Candidate Coordinates
**Authority:** MARA  
**Operation:** Decompose admitted source material into atomic propositions and establish candidate coordinates only where the evidence permits them. One atom remains one proposition.  
**Output:** Evidence Atoms + Candidate Coordinates.

### PIN-05 — Authority / Corroboration / Independence Resolution
**Authority:** MARA  
**Operation:** Resolve evidence authority, recurrence, independence, corroboration, evidence-class ceilings, and permitted relationship strength. Repetition does not automatically equal independent corroboration.  
**Output:** Coordinate Authority State.

### PIN-06 — Contradiction & Limitation Resolution
**Authority:** MARA  
**Operation:** Preserve or resolve contradictions, limitations, incomplete states, uncertainty, and governed non-resolution without erasing adverse or conflicting evidence.  
**Output:** Contradiction / Limitation State.

### PIN-07 — Chronology Construction
**Authority:** MARA  
**Operation:** Assemble the candidate timeline from legitimate temporal anchors across employment, education, projects, business activity, declared gaps, and other supported sources.  
**Output:** Candidate Chronology.

### PIN-08 — Six-Year Chronology Accountability Examination
**Authority:** MARA  
**Operation:** Test the recent six-year accountability window. Every material interval must be accounted for by supported activity, a declared gap, or another legitimate temporal anchor. A declared gap is a valid accounted-for chronology state and does not imply uninterrupted employment.  
**Output:** Chronology / Accountability State.

**Chronology / Accountability State minimum contract:**
- six-year accountability window;
- supported temporal anchors;
- declared gaps;
- unresolved material intervals, if any;
- temporal provenance;
- overlap state;
- chronology validation result.

### PIN-09 — Mandatory Condition Check
**Authority:** MARA  
**Operation:** Determine whether any unresolved chronology or other mandatory artifact-input condition remains. If a mandatory condition remains unresolved, MARA halts rather than passing the defect downstream.  
**Output:** PASS or HALT Condition.

### PIN-10 — USER_OVERRIDE Resolution
**Authority:** MARA  
**Operation:** If required, accept explicit user operational authority to resolve a mandatory condition that cannot lawfully be completed from admitted evidence alone. USER_OVERRIDE remains operational authority only and does not become evidence, corroboration, or increased evidentiary authority.  
**Output:** USER_OVERRIDE Record + Corrected Operational State.

### PIN-11 — Post-Override Revalidation
**Authority:** MARA  
**Operation:** Rerun the affected chronology/accountability or mandatory-condition checks after an override. No freeze is permitted until the affected condition passes.  
**Output:** Revalidated Governed State.

### PIN-12 — Derived Evidence Pack Assembly
**Authority:** MARA  
**Operation:** Assemble the destination demand, selected candidate coordinates, supporting evidence atoms, provenance, evidence classes, authority state, independence/corroboration state, contradictions/limitations, observed/inferred lineage, USER_OVERRIDE provenance where applicable, and maximum permitted semantic relationship.  
**Output:** Derived Evidence Pack.

### PIN-13 — Derived Evidence Pack Clearance
**Authority:** MARA  
**Operation:** Validate the Derived Evidence Pack for completeness, internal consistency, chronology/accountability clearance, provenance, authority boundaries, lineage, unresolved blockers, and mandatory-condition compliance.  
**Output:** Cleared Derived Evidence Pack.

## PIN-FRZ — Governed Artifact-Input Freeze
**Authority:** Boundary event  
**Operation:** Lock the governed artifact input.

**Locked state includes:**
- candidate truth;
- chronology/accountability;
- evidentiary authority;
- provenance;
- contradictions and limitations;
- observed/inferred lineage;
- USER_OVERRIDE provenance and accounting;
- maximum semantic relationships downstream expression may represent.

**Invariant:** No downstream process may alter the engine. Upstream governance is closed for this artifact state.

---

## Post-freeze Artifact Model pins

### PIN-14 — Semantic-Safe Neighborhood Resolution
**Authority:** Artifact Model  
**Operation:** Determine the permitted semantic expression neighborhood for each frozen candidate relationship.  
**Output:** Semantic Expression Envelopes.

### PIN-15 — Verb-Family Resolution
**Authority:** Artifact Model  
**Operation:** Resolve the permitted verb family and maximum linguistic relationship strength for each frozen relationship. Stronger verbs may not be introduced beyond the frozen semantic ceiling.  
**Output:** Authorized Verb / Relationship Families.

### PIN-16 — Machine-to-Human Prose Normalization
**Authority:** Artifact Model  
**Operation:** Translate provenance/evidence-oriented machine prose into normal human-facing language without changing meaning or semantic strength. This includes grammar, punctuation, capitalization, syntax, parallel construction, separator normalization, de-jargonization, removal of internal ontology terminology, and natural professional phrasing.  
**Output:** Human-Normalized Evidence Units.

### PIN-17 — Human-Ready Blurb Generation
**Authority:** Artifact Model  
**Operation:** Produce final human-facing blurbs from the authorized normalized language.  
**Output:** Human-Ready Blurb Set.

### PIN-18 — Payload Measurement
**Authority:** Artifact Model  
**Operation:** Measure the actual human-ready renderable payload after normalization and before geometry.

**Minimum measurements:**
- total character count;
- non-whitespace character count;
- blurb count;
- section count;
- characters by section;
- blurb lengths;
- longest strings;
- wrapping-sensitive strings;
- employment-record count;
- chronology/accountability object count;
- subordinate/deep-content volume;
- destination-specific capacity metrics;
- any Surface Registry metrics required for selection.

**Output:** Artifact Capacity Profile.

### PIN-19 — Story Arrangement & Structure
**Authority:** Artifact Model  
**Operation:** Arrange authorized blurbs into a coherent recipient-facing story using ordering, grouping, prominence, section assignment, omission where lawful, and progressive disclosure. Arrangement may change presentation, not meaning.  
**Output:** Artifact Narrative Structure.

### PIN-20 — Artifact Surface Selection & Capacity Matching
**Authority:** Artifact Model  
**Operation:** Compare the measured human-ready payload against valid surfaces using capacity, Comfortable Character Capacity, topology, destination requirements, PDF fitness, wrap slack, and other Surface Registry constraints.  
**Output:** Selected Surface(s).

### PIN-21 — Geometry Allocation
**Authority:** Artifact Model  
**Operation:** Place authorized content into selected containers and geometry without weakening, strengthening, or rewriting candidate truth to rescue layout.  
**Output:** Populated Geometry.

### PIN-22 — Render
**Authority:** Artifact Model  
**Operation:** Generate the artifact expression, including PDF, HTML, email, or other destination-valid format.  
**Output:** Rendered Artifact.

### PIN-23 — Cross-Surface Validation
**Authority:** Artifact Model  
**Operation:** Compare rendered surfaces against the frozen artifact input and human-ready blurbs. Validate chronology, agency, semantic authority, verb-family compliance, content parity, wrapping, responsive behavior, export behavior, and destination-specific requirements.  
**Output:** Validated Render Set.

### PIN-24 — Final Acceptance / Sanity Pass
**Authority:** Artifact Model  
**Operation:** Cold-read the artifact as an actual recipient. Confirm that it is coherent, sendable, humanly understandable, and mechanically traceable to the frozen state. Reject artifacts that are technically valid but narratively or linguistically wrong.  
**Output:** Accepted Artifact.

## Runner contract
Each pin may be implemented as a single hand-to-hand runner.

**Runner receives:**
- prior pin state;
- governing canon;
- immutable run identifier;
- provenance/state receipt from the previous pin.

**Runner performs:**
- exactly one pin operation;
- no upstream reinterpretation outside its authority;
- no downstream work early.

**Runner emits:**
- the pin-defined output state;
- validation status;
- provenance/state receipt;
- unresolved blocker state, if any;
- next-pin handoff package.

A test chain may therefore execute:

`PIN-00 → PIN-01 → ... → PIN-13 → PIN-FRZ → PIN-14 → ... → PIN-24`

Each pin is independently addressable for inspection, regression testing, rerun, fault isolation, and state comparison.

## Synchronization clarifications established by the résumé pilot
1. The six-year chronology examination is pre-freeze and recognizes declared gaps as valid accounted-for states.
2. Mandatory-condition detection precedes USER_OVERRIDE.
3. USER_OVERRIDE, when necessary, occurs before freeze and must be followed by revalidation.
4. The Derived Evidence Pack is cleared before the freeze.
5. The freeze locks truth and authority; post-freeze stages govern expression only.
6. Semantic-safe neighborhoods and verb-family constraints belong immediately post-freeze.
7. Machine-to-human prose normalization is an explicit Artifact Model operation and must remove provenance/system prose from human-facing artifacts without changing semantic strength.
8. Human-ready blurbs are measured after normalization.
9. Surface capacity selection uses the normalized human-ready payload rather than machine/provenance prose.
10. Story arrangement occurs after normalization and measurement and may rearrange presentation but not meaning.
11. Geometry never chooses verbs and may not rewrite content to force fit.
12. Final acceptance includes both provenance correctness and a cold-read human coherence test.

## Core invariant
**Before freeze: truth can still be governed. After freeze: truth can only be expressed.**