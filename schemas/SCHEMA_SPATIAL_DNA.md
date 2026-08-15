# SCHM-02: Schema - Spatial Candidate DNA

## 1. The Evidence Registry (The Six Domains)
All candidate evidence must be categorized into one of the following six closed domains. These are storage buckets, not projection faces.

1. **Identity:** Bounded entity data (Location, contact, core roles).
2. **Work History:** Professional tenure and organizational contributions.
3. **Education & Technical Competency:** Academic and technical certifications/knowledge.
4. **Creative Works & Projects:** Artifacts built, systems designed, products launched.
5. **Psychometric & Cognitive Profile:** Behavioral tendencies and cognitive evidence.
6. **Testimony & Observed Behavior:** References, publications, and third-party witness.

## 2. The Evidence Packet (The Atomic Unit)
Evidence is stored in immutable packets.

| Field | Type | Description |
| :--- | :--- | :--- |
| `evidence_id` | UUID | Unique identifier for the evidence object. |
| `domain` | Enum | One of the 6 Domains above. |
| `governing_verb`| String | The action the candidate performed (e.g., "Led," "Optimized"). |
| `entity` | String | The object of the action (e.g., "15-person team," "ERP migration"). |
| `provenance` | Object | Link to source (resume, LinkedIn, GitHub, transcript). |
| `confidence` | Float | Extraction quality score (0.0 - 1.0). |
| `authority` | Enum | `DIRECT` (built it), `CONTRIBUTORY` (helped), `STATIONARY` (witnessed). |
| `timestamp` | Date | When the evidence was created/recorded. |

## 3. Projection Geometry (The Cube)
When a query is initiated, MARA constructs a temporary projection box using the "Box Before Lens" rule.

- **Invariant References:**
    - **Origin:** The Candidate (Absolute Zero).
    - **Ceiling:** Maximum positive alignment/demonstration.
    - **Floor:** Actual adverse or contradictory evidence (Failure/Misconduct).
- **Active Variables:**
    - **Semantic Walls:** MARA selects **4 active walls** from the 6-domain registry based on the specific Target Query.

## 4. Semantic Bands (The Measuring Grammar)
Each wall measures distance from the Origin using a governed scale:

| Band | Meaning |
| :--- | :--- |
| **Ceiling** | Ideal demonstration of the demand. |
| **Above Baseline**| Strong evidence exceeding neutral requirements. |
| **Baseline** | Neutral/Presence; evidence exists but does not differentiate. |
| **Below Baseline**| Weak demonstration or insufficient authority. |
| **Floor** | Active contradiction or failure. |

**Crucial Rule:** Absence of evidence (Unsupported) keeps an item at the Baseline/Unresolved state. It does **not** move an item to the Floor.

## 5. Sample Evidence Packet (Work History Domain)
```json
{
  "evidence_id": "EV-992",
  "domain": "WORK_HISTORY",
  "governing_verb": "Orchestrated",
  "entity": "Overseas vendor shipment schedule",
  "authority": "DIRECT",
  "provenance": {
    "source": "Resume_2024.pdf",
    "section": "Experience: Senior Ops Manager"
  },
  "confidence": 0.95,
  "attributes": {
    "scale": "50,000 units/mo",
    "tools": ["NetSuite", "Excel"]
  }
}
```
