# WORK-01: Workflow - SCOUT Decomposition

## 1. Overview
The SCOUT workflow is a 7-step process designed to extract the functional "Existential Why" of a role while discarding recruitment marketing noise.

## 2. Operational Steps

### Step 1: Ingestion & De-Commoditization (Stage 1)
- **Action:** Extract all governing verbs.
- **Filter:** Apply the `LOGC-01` Admission Rule.
    - **Discard:** "fast-paced," "rockstar," "dynamic," "years of experience," and the bestowed Job Title.
    - **Keep:** Physical, digital, relational, or authority-bearing actions (e.g., "coordinates," "builds," "reconciles").
- **Output:** Cleaned Atomic Verb Set.

### Step 2: Core Purpose Extraction
- **Action:** Identify the "Breakdown Scenario." Ask: *If this role vanished, what operational failure occurs?*
- **Output:** 1–2 sentence statement focusing on **outputs** (e.g., "Ensures sample flow accuracy") rather than **inputs** (e.g., "Tracks samples").

### Step 3: Behavioral Profiling & Metaphor
- **Action:** Convert tasks into observable behaviors.
    - *Example:* "Prioritize requests" → "Handles by business criticality, not who asks loudest."
- **Metaphor:** Identify the core role metaphor (e.g., "Control Tower," "Hub," "Mediator").

### Step 4: Inductive Trait Matrix Construction
- **Action:** Group verbs into clusters.
- **Rule:** If a verb does not fit an existing cluster, **create a new one**. Do not force-fit (prevents Omission Bias).
- **Structure:** For each cluster, define the Trait (neutral), Skill (learned), and Ability (applied outcome).

### Step 5: Negative Space Definition
- **Action:** Define what the role is **NOT**.
- **Source:** Contrast against the Core Purpose and Title Misconceptions.
- **Output:** Explicit "NOT X" assertions (e.g., "NOT a people manager," "NOT a strategist").

### Step 6: Classification Logic (The Diagnostic)
- **Action:** Resolve NAICS (Industry) and O*NET/SOC (Occupation).
- **Verification:** Perform the "Cold Match Test."
    - *Test:* If NAICS is "Retail," but the role has no interaction with POS or customers, **reject** and find the "Hot Match" (e.g., "Apparel Manufacturing").
- **Output:** Validated Diagnostic Anchors.

### Step 7: SBS Validation (QA)
- **Action:** Compare the output side-by-side with alternative interpretations.
- **Audit:** Ensure no material operational verb from the raw source was omitted.

## 3. Reproduction Template (The Job Analysis Engine)
To initiate this workflow, use the following functional prompt structure:

1. **Role:** Job Analysis Engine.
2. **Task:** Deconstruct [JOB_POSTING] into 4 sections:
    - **Section 1: Core Purpose** (Operational impact, 1-2 sentences).
    - **Section 2: Target Narrative** (Behavioral descriptors, NO titles/credentials).
    - **Section 3: Trait Matrix** (6 clusters: Trait, Skill, Ability, Keywords, SOC Code).
    - **Section 4: Negative Space** (Negate roles/domains, not traits).
3. **Constraints:** Apply `LOGC-01` (No fluff, no titles, no credentials).

## 4. Exit Criteria
- `mara_ready = TRUE`
- `discovery_rule_satisfied = TRUE`
- Output satisfies `INTF-01` (Interface A).
