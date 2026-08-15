# SCHM-01: Schema - Demand Primitives

## 1. The Demand Molecule
The "Demand Molecule" is the fundamental unit of target-side representation. It ensures reversible decomposition (Read First, Represent Second).

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | UUID | Unique identifier for the primitive. |
| `actor` | String | Who performs the action (usually "Incumbent"). |
| `action` | String | The governing verb (e.g., "coordinates," "builds"). |
| `object` | String | The entity acted upon (e.g., "sample inventory"). |
| `relationship`| Enum | Relationship type: `AUTHORITY`, `COORDINATION`, `SUPPORT`. |
| `mechanism` | String | How the action is performed (the "process"). |
| `effect` | String | The expected operational output or outcome. |
| `demand_type` | Enum | `TRAIT`, `SKILL`, `ABILITY`, `KNOWLEDGE`. |
| `provenance` | String | Source text span / pointer to raw job posting. |
| `neighbor_ids`| Array | Links to other primitives that constrain this one. |

## 2. Negative Space Assertion
Used to define what the role is **not**, preventing role drift.

- **Schema:** `{ "type": "NEGATIVE_SPACE", "assertion": "NOT X", "reason": "Y" }`
- **Example:** `NOT a people manager` | **Reason:** Functional duties focus solely on process, zero direct reports mentioned.

## 3. Classification Anchors (The Diagnostic Wrapper)
Every set of Demand Primitives must be wrapped in a Diagnostic Anchor to prove SCOUT's comprehension.

| Anchor | Value | Rationale | Match Type |
| :--- | :--- | :--- | :--- |
| **NAICS** | 6-digit code | Why this industry? | `HOT_MATCH` |
| **O*NET/SOC** | 8-digit code | Why this occupation? | `HOT_MATCH` |

## 4. Constraint Rules
1. **Title Exclusion:** The bestowed job title (e.g., "Director of Fun") is recorded in metadata but **must not** appear in the `action` or `object` fields.
2. **Neutrality:** Traits must be neutral descriptors (e.g., "Persistent" instead of "Stubborn").
3. **Lossless Decomposition:** The `mechanism` and `effect` fields must prevent the semantic collapse of a duty into a generic keyword.

## 5. Sample Primitive (Operations Manager Context)
```json
{
  "id": "DP-001",
  "actor": "Incumbent",
  "action": "Maintains visibility",
  "object": "Sample inventory",
  "relationship": "COORDINATION",
  "mechanism": "Digital tracking and vendor follow-up",
  "effect": "Downstream teams receive assets on time",
  "demand_type": "ABILITY",
  "provenance": "section 2, paragraph 3: 'ensure samples land accurately...'",
  "neighbor_ids": ["DP-004"]
}
```
