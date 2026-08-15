# INTF-01: Handoff Specifications

This document defines the contractual data payloads transferred between machines at specific pipeline stages.

## 1. Interface A: SCOUT → MARA (The Query Bundle)
**Trigger:** Completion of Stage 3 (Classification).
**Machine State:** `mara_ready: TRUE`

The Query Bundle converts job-side decomposition into a relational "receptor set" for MARA to traverse.

| Component | Content |
| :--- | :--- |
| **Target Identity** | NAICS/ONET codes, Hot-Match rationale, and Role Metadata (Provenance only). |
| **Demand Set** | An array of `SCHM-01` Demand Primitives. |
| **Active Receptors**| The 4 semantic walls selected by SCOUT for the projection box. |
| **Negative Space** | Explicit exclusions (e.g., "NOT a designer") to bound the query. |
| **Scout Exhaust** | (Metadata) Reference to discarded fluff to ensure it does not re-enter the query. |

## 2. Interface B: MARA → ARTIFACT MODEL (The Frozen Snapshot)
**Trigger:** Completion of Stage 6 (Exhaust Formation).
**Machine State:** `projection_blocked: FALSE`

The Frozen Snapshot is an immutable representation of the candidate/target relationship. It is the *only* data source allowed for artifact generation.

| Component | Content |
| :--- | :--- |
| **Freeze Record** | Timestamp and immutable hash of the evidence boundary. No data may be added post-freeze. |
| **Bound Atoms** | Mapping of specific `SCHM-01` Demand Primitives to specific `SCHM-02` Evidence Packets. |
| **Corroboration Map**| Analysis of whether evidence is Convergent (reinforcing) or Independent (distinct). |
| **MARA Exhaust** | Legitimate demands that failed to bind, including the specific reason (e.g., `unsupported`, `contradicted`). |
| **Projection Center**| The "Candidate/Query Center" defining the focal point of the snapshot. |
| **Geometric State** | The location of all bound evidence relative to the Ceiling, Baseline, and Floor. |

## 3. Machine State Indicators (Handoff Flags)
Handoffs are governed by these binary states:

- `mara_ready`: Set to `TRUE` only if NAICS/ONET Hot-Match is validated and Demand Molecules satisfy the reversible decomposition contract.
- `projection_blocked`: Set to `TRUE` if critical "Floor" evidence (Adverse/Contradictory) is detected, or if the "Floor" of alignment (Critical atoms) is not met.
- `discovery_rule_satisfied`: Set to `TRUE` if the O*NET/NAICS resolution was exposed immediately post-decomposition.

## 4. Integrity Assertion
> *"The Artifact Model shall not access the raw candidate substrate or the raw job posting. It is contractually limited to the Frozen Snapshot provided by Interface B."*
