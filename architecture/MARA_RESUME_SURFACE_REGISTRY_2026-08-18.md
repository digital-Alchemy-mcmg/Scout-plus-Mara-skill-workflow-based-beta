# MARA Résumé Surface Registry & Deterministic Selection Specification

**Status:** GOVERNING — admitted at 2026-08-18 synchronization  
**Scope:** Artifact Model résumé surface selection and fixed PDF geometry  
**Source:** Multi-Model Résumé Surface Comparative Audit, 2026-08-18  
**Purpose:** treat résumé designs as an addressable deterministic surface library rather than regenerating geometry for each artifact.

## 1. Governing Philosophy

MARA/Artifact Model must **keep the variation** produced by the multi-model geometry experiment rather than collapse it into one universal résumé template.

Each retained résumé surface is a fixed writing geometry with known density class, evidence-bearing line capacity, Comfortable Character Capacity (CCC), container purposes, width constraints, margin/typography characteristics, PDF fitness, machine-placement usability, and failure modes.

The system selects from the library. It does not reinvent geometry when an existing retained surface can carry the fixed authorized payload.

## 2. Canonical Family Attribution

The governing registry uses these families:

- **Claude:** D1–D7
- **KIMI:** S1–S7
- **Meta:** MIN-01, MIN-02, MOD-01, MOD-02, MOD-03, HIGH-01, HIGH-02
- **Gemini:** Precision, Contextual, Thesis, Integrated

One contributing audit section misattributed the MIN/MOD/HIGH series to Gemini. The consolidated inventory and majority source record assign that series to Meta; this specification uses that attribution.

GLM was referenced during the experiment but supplied no surface and therefore contributes no registry entry.

## 3. Capacity Currency

Raw line count is insufficient because a narrow rail line and a full-width line carry different evidence capacity.

The normalized currency is **Comfortable Character Capacity (CCC)**, derived from usable evidence lines and comfortable characters per line with safety derating for word-wrap loss and ragged-right slack.

Measurement methods preserved by source family:

- Claude D-series: ReportLab AFM/stringWidth-based measurement with typeface-specific comfort factors.
- KIMI S-series: measured mean glyph advance with derating.
- Meta series: deterministic line maps/capacity specification.
- Gemini: declared surface budgets for Precision, Contextual, Thesis, and Integrated.

Header/footer zones are excluded from evidence capacity.

## 4. Registry — Core Retained Surfaces

| ID | Family | Class | Approx. CCC | Disposition / Role |
|---|---|---:|---:|---|
| D1 | Claude | MIN | 2,604 | Retain; statement-led/narrative minimum-density |
| D2 | Claude | MIN | 2,842 | Retain; identity band/highlight structure |
| D3 | Claude | MOD | 3,666 | Retain; balanced two-column |
| D4 | Claude | MOD | 3,204 | Retain; dominant primary + sidebar; high PDF reliability |
| D5 | Claude | MOD | 3,290 | Retain; horizontal banded |
| D6 | Claude | HIGH | 4,464 | Retain for unique feature; dense three-column; revalidate fit when used |
| D7 | Claude | HIGH | 4,282 | Retain; high-density/full-bleed; low wrap slack |
| S1 | KIMI | MIN | 2,134 | Retain; monolith/curated thin-evidence surface |
| S2 | KIMI | MIN | 2,279 | Retain; offset rail; strong machine placement |
| S3 | KIMI | MOD | 3,360 | Retain; twin ledger/equal timelines |
| S4 | KIMI | MOD | 3,759 | Retain; sovereign/dominant primary |
| S5 | KIMI | MOD | 3,561 | Retain for unique feature; horizontal strata |
| S6 | KIMI | HIGH | 4,756 | Retain for unique feature; editorial high-density |
| S7 | KIMI | HIGH | 5,088 | Retain candidate but requires geometry revalidation before production use |
| MIN-01 | Meta | MIN | 2,088 | Retain; Atrium/prominence chamber |
| MIN-02 | Meta | MIN | 1,824 | Do not prefer; redundant/low capacity |
| MOD-01 | Meta | MOD | 3,080 | Retain; reliable 35/65 baseline |
| MOD-02 | Meta | MOD | 3,010 | Retain; dominant + rail; strong uneven-evidence strategy |
| MOD-03 | Meta | MOD | 2,778 | Revalidate; masonry placement ambiguity |
| HIGH-01 | Meta | HIGH | 5,420 | Capacity leader; geometry/readability revalidation mandatory |
| HIGH-02 | Meta | HIGH | 4,544 | Unique parallel-track surface; geometry/readability revalidation mandatory |
| Precision | Gemini | MIN | 1,088 | Retain for ultra-minimal payloads |
| Contextual | Gemini | MOD | 2,160 | Retain for moderate concise payloads |
| Thesis | Gemini | HIGH | 3,060 | Retain for deep standalone narrative |
| Integrated | Gemini | INT | 4,200 résumé-side / two-page package | Retain for integrated cover-letter + résumé package |

Exact per-container geometry remains governed by the originating design pack.

## 5. Deterministic Selection Inputs

Surface selection begins only after candidate truth is fixed and the pre-render logical artifact payload exists.

Selector inputs include total character volume, canonical countable-line volume, section distribution, employment-record count, chronology depth, project/venture depth, education footprint, long organization/title strings, evidence density class, rail-vs-narrative needs, destination constraints, and content that must remain subordinate/deep.

The selector must not change evidence to make a surface fit.

## 6. Selection Sequence

1. Freeze the logical artifact payload and provenance accounting.
2. Classify payload density: minimum, moderate, high, or integrated.
3. Eliminate surfaces whose CCC is below the payload's comfortable requirement.
4. Eliminate surfaces whose container topology conflicts with payload shape.
5. Apply PDF-fitness and wrap-slack constraints.
6. Apply destination-specific presentation requirements.
7. Rank remaining surfaces by fit, not aesthetics alone.
8. If one surface remains deterministically superior, select it.
9. If two or more surfaces remain materially equivalent, invoke a **surface-selection user choice/override** at the Artifact Model layer.

A surface-selection choice does not alter candidate truth, evidence authority, User Override provenance, or canonical pre-render line accounting.

## 7. Failure Modes

The selector must account for aggressive margins/low typography floors, ragged alignment in multi-track dense layouts, narrow-rail wrapping for long titles, masonry/slot ambiguity, artificial whitespace when sparse evidence is forced into high-density geometry, and semantic compression pressure when capacity is insufficient.

If a surface requires semantic weakening, omission of mandatory content, unsupported abbreviation, or font/margin degradation below its validated floor, reject the surface.

## 8. Geometry and Provenance Separation

Surface geometry is downstream of provenance.

PDF wrapping, HTML wrapping, typography, container width, pagination, or responsive behavior must never alter User Override percentages or evidence attribution.

The canonical pre-render artifact representation remains the measurement authority.

## 9. Human/User Surface Choice

A human/user surface choice is permitted only after deterministic filtering has produced multiple legally valid surfaces.

The user may select among valid geometries.

The user may not use surface choice to strengthen evidence, alter chronology, change authority class, invent content, or force an over-capacity surface and then rewrite candidate truth to fit it.

## 10. Current Test Payload Receipt — 2026-08-18

The chronology/User Override test produced a corrected logical résumé payload with:

- canonical countable lines: **41**;
- character volume: **2,342 including line breaks / 2,301 excluding line breaks**;
- employment records: **4**;
- independent overlapping accountability tracks: **2**;
- chronology depth: **12/2012–Present**;
- distinct 2023–Present tracks:
  - **OCC — Data Analytics / HCI**;
  - **Metro Concepts / Relax**;
- Relax: subordinate/deep;
- evidence density: high relative to compact payload size;
- wrapping-sensitive long strings and qualified process/system statements.

The prior 40-line payload is superseded by this corrected 41-line state.

This test payload is ready for deterministic surface reconciliation. No further candidate-truth modification is authorized by the surface-selection step.

## 11. Governing Principle

> **Fix the payload first. Select geometry second. Never rewrite candidate truth to rescue a surface.**
