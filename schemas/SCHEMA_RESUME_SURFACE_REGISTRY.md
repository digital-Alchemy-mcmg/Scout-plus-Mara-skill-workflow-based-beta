# SCHM-04: Résumé Surface Registry Entry & Selection Payload

## Registry Entry

```json
{
  "surface_id": "D4",
  "family": "Claude",
  "density_class": "MOD",
  "format": "one_page_letter",
  "comfortable_character_capacity": 3204,
  "usable_lines": 66,
  "container_topology": "dominant_primary_plus_sidebar",
  "pdf_fitness": "high",
  "machine_placement": "high",
  "revalidation_required": false,
  "constraints": [],
  "source_design_pack": "string"
}
```

## Selection Payload

```json
{
  "artifact_id": "string",
  "canonical_pre_render_id": "string",
  "character_volume": 0,
  "countable_line_volume": 0,
  "employment_record_count": 0,
  "accountability_track_count": 0,
  "chronology_depth": "string",
  "section_distribution": [],
  "project_depth": "string",
  "education_footprint": "string",
  "density_class": "MIN|MOD|HIGH|INT",
  "wrapping_sensitive_strings": [],
  "subordinate_content": [],
  "eligible_surfaces": [],
  "selected_surface": null,
  "selection_authority": "deterministic|user_surface_choice"
}
```

## Invariants

1. Selection occurs after the logical payload is fixed.
2. Surface selection cannot alter evidence, authority, chronology, or User Override accounting.
3. A surface below required comfortable capacity is rejected.
4. A surface requiring semantic inflation/compression to fit is rejected.
5. Human choice is allowed only among already-valid surfaces.
