# WORK-03: Workflow - Artifact Model Rendering

## 1. Overview
The Artifact Model is a **Compressor**, not a Discovery Engine. Its task is to render the query-resolved relationship into human-readable formats using *only* the data contained within the Frozen Snapshot.

## 2. Operational Steps

### Step 1: Receipt of Frozen Snapshot (Stage 7 Start)
- **Action:** Accept Interface B from MARA.
- **Verification:** Confirm the `freeze_hash` is valid and the `projection_blocked` flag is `FALSE`.
- **Restriction:** The Renderer is contractually forbidden from accessing the raw candidate DNA substrate or the raw job posting.

### Step 2: Selection of Pertinent Evidence
- **Action:** Filter the Snapshot for "Admitted & Binding" matter.
- **Rule:** Only candidate evidence that has successfully "bound" to a Target Demand Primitive is eligible for inclusion in the final artifact.
- **Exclusion:**
    - Do NOT include SCOUT Exhaust (Discarded fluff).
    - Do NOT include MARA Exhaust (Gaps) in public-facing artifacts like resumes (unless specifically requested for internal risk briefs).

### Step 3: Compression & Synthesis
- **Action:** Render the bound evidence into the required format (Resume, LinkedIn, etc.).
- **Voice:** Maintain a factual, evidence-based tone.
- **Narrative Rule:** Every sentence must be a synthetic representation of one or more "Bound Atoms."
- **Constraint:** Do not "bridge" gaps. If a demand was unsupported in MARA, do not invent experience to cover it.

### Step 4: The Traceability Audit
- **Action:** Map every rendered sentence back to its source provenance.
- **Structure:**
    - `Rendered Sentence` → `Snapshot Bound Atom` → `Evidence Packet ID` → `Source Span`.
- **Validation:** If a sentence cannot be traced back to the Frozen Snapshot, it must be deleted.

### Step 5: Artifact Emission
- **Action:** Generate the final target-resolved document.
- **Metadata:** Attach the "Comprehension Diagnostics" (NAICS/O*NET) and "Core Purpose" to ensure the reader understands the lens through which this artifact was projected.

## 3. Supported Artifact Types
The Renderer can produce multiple projections from the same Snapshot:
- **Target-Resolved Resume:** Focus on alignment and bound impact.
- **Recruiter Summary:** Highlight Ceiling-level evidence and critical binds.
- **Interview Prep Brief:** Contrast bound evidence with MARA Exhaust (gaps) for defensive preparation.
- **Cover Letter:** Synthesize the "Core Metaphor" and "Core Purpose" with bound candidate history.

## 4. Prohibited Behaviors
- **NO Discovery:** The model shall not "infer" or "discover" candidate skills not present in the Snapshot.
- **NO Hallucination:** Every claim must have a corresponding `evidence_id`.
- **NO Identity Rewriting:** The artifact represents a temporary projection, not a permanent change to candidate identity.

## 5. Exit Criteria
- **Traceability Contract Satisfied.**
- **Output:** Target-Resolved Artifact.
