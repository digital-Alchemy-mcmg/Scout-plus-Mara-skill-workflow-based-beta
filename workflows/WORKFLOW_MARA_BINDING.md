# WORK-02: Workflow - MARA Binding & Projection

## 1. Overview
MARA is a read-only interrogation engine. It does not search for keywords; it tests the "Bind" between structured job demands and immutable candidate evidence.

## 2. Operational Steps

### Step 1: Query Insertion (Stage 4)
- **Action:** Accept the `INTF-01` Query Bundle from SCOUT.
- **Receptor Setup:**
    - Attach receptors to the **Candidate Origin** (Absolute Zero).
    - Activate the **4 Semantic Walls** defined in the Query Bundle.
    - Set the **Evidence Boundary** (Confidence/Authority threshold).

### Step 2: Traversal (Stage 5)
- **Action:** Traverse the Candidate DNA substrate through the active semantic walls.
- **Logic:** For each Demand Primitive, query the Evidence Registry.
- **Evaluation:** Measure the "distance" from Origin to Ceiling/Floor.
    - **Aligns:** Evidence supports the action/object/mechanism.
    - **Contradicts:** Evidence proves the candidate cannot or did not perform the demand.
    - **Absence:** No evidence found (Result: `unsupported`).

### Step 3: Corroboration & Counterposition
- **Convergent Corroboration:** Identify if multiple planes (e.g., Work History + Projects + Testimony) independently support the same proposition.
- **Independent Instantiation:** Determine if evidence objects represent distinct facts that should not be collapsed.
- **Counterposition:** Test the "Governing Verb" (e.g., *Built* vs. *Maintained*) to ensure the authority level matches the demand.

### Step 4: Exhaust Formation (Stage 6)
- **Action:** Collect all legitimate target demands that failed to bind.
- **Categorization:** Assign a reason to each exhaust atom:
    - `unsupported`: No evidence found.
    - `non_demonstrated`: Query requires history; none present.
    - `contradicted`: Adverse evidence found.
    - `insufficient_authority`: Evidence exists but at a lower authority than demanded.
- **Output:** **MARA Exhaust Map**.

### Step 5: The "Freeze" & Snapshot
- **Action:** Once traversal is complete, trigger the **Evidence Boundary Freeze**.
- **Constraint:** No new candidate evidence may enter the reasoning cycle.
- **Result:** Generate the **Frozen Snapshot**. This is a query-resolved representation of the candidate as viewed *only* through this specific target lens.

## 3. Evaluative Boundaries (Diagnostic Checks)
- **Ceiling Check:** Is there evidence that exceeds the baseline requirement?
- **Floor Check:** Is there active contradictory evidence (Misconduct/Failure)?
- **Alignment Floor:** Have the "Critical Atoms" (Must-Haves) bound? If not, set `projection_blocked = TRUE`.

## 4. Handoff Criteria
- **Freeze Hash:** Generate a stable identifier for the frozen evidence set.
- **Snapshot Ready:** Ensure all bound evidence is linked to its `SCHM-02` provenance.
- **Output:** Satisfies `INTF-01` (Interface B).
