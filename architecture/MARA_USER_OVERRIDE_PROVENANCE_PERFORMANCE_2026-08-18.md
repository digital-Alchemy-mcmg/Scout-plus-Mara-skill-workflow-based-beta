# MARA User Override — Provenance & Performance Receipt Specification

**Status:** Governing  
**Date:** 2026-08-18  
**Scope:** User Override mechanism only  
**Explicit Exclusion:** This specification does not govern artifact surface geometry, surface selection, slot selection, rendering capacity, résumé design, HTML design, or PDF geometry.

## 1. WHY — The Problem User Overrides Solve

### 1.1 Why MARA Halts

MARA halts when it reaches an unresolved **mandatory artifact requirement** that cannot be legally resolved from admitted evidence.

That halt is correct system behavior.

MARA must refuse to:

- fabricate;
- infer past an evidence boundary;
- silently reconstruct uncertain information;
- promote unsupported information merely because an artifact requires completion;
- reinterpret destination necessity as candidate evidence.

A halt does not lower MARA's evidence standard.

A halt creates a handoff.

It does not create permission to infer.

### 1.2 Why the Override Exists

When MARA halts, the user may supply or promote information that MARA is not authorized to derive from admitted evidence.

Once explicitly supplied to resolve the halt, that information becomes authoritative for continued artifact construction under:

`USER_OVERRIDE`

This authority is **operational, not evidentiary**.

The override:

- does not become MARA-derived evidence;
- does not become independently verified evidence;
- does not retroactively strengthen upstream evidence;
- does not corroborate upstream evidence merely by being supplied;
- does not alter the original authority class of upstream evidence;
- does not erase the evidence boundary that caused the halt.

The override creates a new, explicitly attributable authority event that permits downstream construction to resume.

Once admitted as `USER_OVERRIDE`, MARA may traverse, bind, connect, and render against the supplied information as authoritative for the affected artifact requirement.

The information must remain permanently distinguishable from independently established evidence.

### 1.3 Why It Must Be Measured

A User Override is neither automatically a MARA failure nor cheating.

It is an **observable dependency**.

Without measurement:

- claims such as “MARA generated 90% of this résumé” are meaningless;
- a DNA gap cannot be distinguished from a MARA traversal or reasoning deficiency;
- human intervention becomes invisible;
- upstream extraction quality cannot be evaluated accurately;
- MARA may receive false credit for work enabled by user intervention;
- a legitimate refusal to fabricate may incorrectly appear to be system failure.

With measurement:

- the exact intervention point is inspectable;
- the authority source is known;
- literal user input is measured;
- downstream artifact construction unlocked by the override is measured;
- autonomous MARA work remains distinguishable from user-assisted completion;
- recurring intervention patterns can be used to improve Spatial Candidate DNA.

### 1.4 Primary Example — Chronology

Chronological work history exposed this mechanism first.

A completed résumé may require usable chronology, while MARA may legitimately be unable to determine that chronology from admitted evidence.

MARA must not invent chronology merely because the résumé requires it.

The correct sequence is:

1. MARA halts.
2. The unresolved chronology is surfaced.
3. The user supplies or promotes the missing information.
4. The information is recorded as `USER_OVERRIDE`.
5. MARA resumes traversal using that operational authority.
6. The artifact becomes coherent.
7. Provenance remains honest.

This mechanism is not limited to chronology.

It applies to any unresolved **mandatory artifact requirement** that MARA cannot legally resolve from admitted evidence.

## 2. AUTHORITY MODEL

### 2.1 Authority Class

Every User Override must carry:

`USER_OVERRIDE`

### 2.2 Authority Type

`USER_OVERRIDE` provides:

**Operational authority for downstream artifact construction.**

It does not provide:

**Independent evidentiary authority.**

### 2.3 Governing Distinction

A User Override answers:

> What information is MARA now authorized to use to complete this artifact?

It does not answer:

> What has MARA independently established as true from admitted evidence?

Those questions remain separate throughout the artifact lifecycle.

### 2.4 Downstream Behavior

After an override is admitted, MARA must not continue treating the resolved requirement as unresolved merely because the authority came from the user.

MARA may use the override normally for:

- traversal;
- artifact binding;
- chronology assembly;
- section construction;
- evidence placement;
- rendering;
- consistency checks;
- downstream dependency resolution.

Any downstream object materially dependent upon the override must remain traceable to the override event.

## 3. HALT AND HANDOFF PROTOCOL

A User Override event begins only after MARA reaches a legitimate unresolved mandatory requirement.

The canonical sequence is:

1. MARA traverses admitted evidence normally.
2. MARA reaches a mandatory artifact requirement it cannot legally resolve.
3. MARA stops at the evidentiary boundary.
4. MARA records the halt state.
5. MARA identifies the unresolved requirement.
6. MARA requests user resolution.
7. The user supplies or promotes information.
8. MARA records a `USER_OVERRIDE` authority event.
9. MARA resumes traversal.
10. MARA propagates the newly authorized information through the remaining artifact construction process.
11. MARA records the resulting propagation.
12. The completed artifact receipt preserves both autonomous and override-attributable work.

MARA must never interpret the existence of this protocol as permission to halt unnecessarily.

The halt must arise from a real mandatory requirement and a real evidence boundary.

## 4. CANONICAL MEASUREMENT SURFACE

### 4.1 Requirement

All User Override accounting must occur against one stable canonical MARA working representation.

The same representation must be used for:

- halt baselines;
- user-supplied line counts;
- propagation measurement;
- completed artifact line counts;
- cumulative override percentages.

### 4.2 Canonical Measurement Rule

The measurement surface is the **pre-render artifact construction representation** used by MARA immediately before destination-specific rendering.

It is the resolved logical artifact representation from which PDF, HTML, text-native, or other delivery surfaces are produced.

It is not a rendered surface.

### 4.3 Explicit Exclusions

The following must never determine User Override percentages:

- PDF line wrapping;
- HTML responsive wrapping;
- browser viewport width;
- print stylesheet behavior;
- typography changes;
- container width;
- surface geometry;
- visual card boundaries;
- pagination;
- destination-specific reflow;
- font substitution.

A candidate rendered into multiple résumé surfaces must retain the same provenance accounting.

Artifact geometry may change appearance.

It must not change attribution.

## 5. COUNTABLE LINE DEFINITION

A **countable line** is any line in the canonical measurement surface containing at least one non-whitespace character.

### Count

- text lines;
- evidence lines;
- chronology lines;
- headings containing characters;
- structured fields containing characters;
- user-supplied lines containing characters.

### Do Not Count

- blank lines;
- lines containing only spaces;
- lines containing only tabs;
- other whitespace-only lines.

This definition is mechanical.

No semantic interpretation is required to determine whether a line counts.

## 6. SINGLE OVERRIDE MEASUREMENT PROTOCOL

### 6.1 Halt Baseline

At the halt point MARA records:

`H`

Where:

`H = total countable lines in the canonical artifact representation at the halt`

### 6.2 Completed Artifact

After User Override and completed traversal MARA records:

`F`

Where:

`F = total countable lines in the completed canonical artifact representation`

### 6.3 Canonical Formula

```text
H = countable lines at halt
F = countable lines in completed artifact

Override-attributable expansion = F - H

User-override-attributable percentage =
((F - H) / F) × 100
```

### 6.4 Critical Distinction

Override-attributable expansion is **not** assumed to equal the number of lines the user physically supplied.

A small user intervention may unlock a much larger amount of legitimate MARA traversal and artifact construction.

Therefore literal user input and downstream propagation must remain separate measurements.

## 7. TWO DISTINCT USER-INTERVENTION METRICS

### Metric A — User-Supplied Lines

Measures the literal number of non-whitespace lines introduced directly by the user during an override event.

### Metric B — Override Propagation

Measures the artifact growth causally unlocked by the User Override.

These metrics must never be collapsed into one number.

## 8. MULTIPLE OVERRIDE EVENTS

A single artifact may halt more than once.

Each override receives a unique event identifier such as `UO-001`, `UO-002`, `UO-003`.

Every override event records:

- Event ID
- Authority Class
- Authority Type
- Halt baseline
- Halt reason
- Mandatory requirement affected
- User-supplied line count
- Resolution supplied
- Propagation start
- Propagation end
- Propagation delta
- Downstream objects materially dependent upon the override
- Timestamp or sequence position

## 9. PROPAGATION INTERVAL RULE

Multiple override events require non-overlapping attribution.

> Propagation intervals must not overlap.

A downstream line may be attributed to only one override event for percentage accounting.

Independent MARA work between intervention intervals is not attributed to either override.

## 10. CUMULATIVE OVERRIDE ACCOUNTING

For multiple override events:

```text
Cumulative override-attributable expansion =
P1 + P2 + ... + Pn

Cumulative override-attributable percentage =
(Cumulative override-attributable expansion / F) × 100
```

This supersedes subtracting the first halt baseline from the completed artifact when multiple override events exist.

## 11. DIAGNOSTIC TELEMETRY FOR SPATIAL CANDIDATE DNA

If a mandatory artifact requirement repeatedly requires User Overrides, MARA is not improved by teaching it to infer harder past an evidence boundary.

The upstream evidence system must be examined.

Better admitted evidence should naturally produce:

- fewer halts;
- fewer override events;
- lower user-supplied line counts;
- lower propagation dependency;
- lower override-attributable percentages.

MARA must not infer harder to suppress override statistics, hide override events, classify overrides as autonomous MARA resolution, retroactively alter provenance, or lower its evidence standard to improve apparent completion rates.

## 12. ENDING PROVENANCE & PERFORMANCE RECEIPT

Every completed artifact governed by this mechanism must carry an inspectable provenance and performance receipt.

### Evidence-Level Metadata

- total atomic evidence blurbs used;
- count per Spatial Candidate DNA domain;
- evidence hashes;
- Derived Evidence Pack hash.

### Override-Level Metadata

- override event count;
- ordered override event records;
- cumulative user-supplied lines;
- cumulative downstream lines unlocked;
- cumulative override-attributable percentage;
- authority class `USER_OVERRIDE`;
- authority type operational, not evidentiary.

### Artifact-Level Metadata

- canonical measurement surface identifier;
- final countable-line total (`F`);
- MARA autonomous portion;
- User-Override-attributable portion.

## 13. PER-EVENT OVERRIDE RECORD

Each User Override event must preserve:

- Event ID
- Authority Class: `USER_OVERRIDE`
- Authority Type: operational, not evidentiary
- Halt baseline
- Halt reason
- Affected requirement
- User-supplied lines
- Resolution supplied
- Propagation start
- Propagation end
- Propagation delta
- Dependent objects
- Timestamp / sequence position

## 14. WHAT THE RECEIPT PROVES

The receipt proves what admitted evidence was used, where MARA reached an evidentiary boundary, why MARA halted, where human operational authority entered, what the user supplied, what downstream construction became possible, how much depended on intervention, how much remained autonomous MARA work, and that legitimate refusal to fabricate was preserved rather than punished.

## 15. MARA PERFORMANCE INTERPRETATION

A higher override percentage does not automatically mean MARA performed badly. A lower override percentage does not automatically mean MARA performed well. The metric measures dependency.

Correct behavior means MARA encounters a real evidence boundary, refuses unsupported inference, halts correctly, requests user authority, records the override, resumes correctly, propagates only from authorized information, and preserves provenance.

Incorrect behavior includes halting despite sufficient evidence, failing to traverse authorized evidence, repeatedly requesting information already present in Spatial Candidate DNA, fabricating instead of halting, or losing attribution boundaries.

## 16. GOVERNING CONSTRAINTS

1. `USER_OVERRIDE` provides operational authority only; it never becomes MARA-derived or independently verified evidentiary authority.
2. A halt creates a handoff, not permission to infer.
3. User Override requires a legitimate mandatory artifact requirement.
4. All accounting uses one canonical pre-render measurement surface.
5. A countable line is mechanically defined.
6. User-supplied lines and propagation are separate metrics.
7. Single-event halt-to-completion accounting applies only when one override event exists and the interval legitimately spans completion.
8. Multiple override events use non-overlapping propagation intervals.
9. Cumulative override percentage is calculated from summed propagation deltas.
10. Override telemetry remains inspectable.
11. Overrides are observable dependencies, not automatically failures.
12. Explicit user promotion creates operational authority, not fabrication.
13. MARA does not receive autonomous-completion credit for override-attributable propagation.
14. The user does not receive attribution for independent MARA work outside an override interval.
15. Artifact surface geometry, résumé shape selection, slot allocation, HTML/PDF layout, capacity budgeting, and presentation design are governed elsewhere.

## 17. CANONICAL OPERATING SUMMARY

**Evidence boundary reached → mandatory artifact requirement unresolved → MARA halts → user supplies/promotes resolution → `USER_OVERRIDE` recorded → MARA resumes with operational authority → propagation measured → provenance retained → completed artifact carries performance receipt.**
