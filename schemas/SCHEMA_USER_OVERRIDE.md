# SCHM-03: User Override Event & Receipt

**Authority Class:** `USER_OVERRIDE`  
**Authority Type:** operational, not evidentiary

## Event Object

```json
{
  "event_id": "UO-001",
  "authority_class": "USER_OVERRIDE",
  "authority_type": "operational_not_evidentiary",
  "halt_baseline_lines": null,
  "halt_reason": "string",
  "affected_requirement": "string",
  "user_supplied_lines": 0,
  "resolution_supplied": "string or structured reference",
  "propagation_start": "canonical pre-render state identifier",
  "propagation_end": "canonical pre-render state identifier",
  "propagation_delta_lines": null,
  "dependent_objects": [],
  "sequence_position": "string"
}
```

Unknown or unreconstructable telemetry must be represented explicitly as unavailable/null and must never be fabricated.

## Receipt Object

```json
{
  "canonical_measurement_surface_id": "string",
  "final_countable_lines": 0,
  "override_event_count": 0,
  "override_events": [],
  "cumulative_user_supplied_lines": 0,
  "cumulative_downstream_lines_unlocked": null,
  "cumulative_override_attributable_percentage": null,
  "mara_autonomous_portion": null,
  "user_override_attributable_portion": null,
  "evidence_metadata": {
    "total_atomic_evidence_objects": null,
    "count_per_domain": null,
    "evidence_hashes": null,
    "derived_evidence_pack_hash": null
  }
}
```

## Invariants

1. `USER_OVERRIDE` never becomes independent evidence.
2. User-supplied lines and propagation lines are distinct metrics.
3. Multiple propagation intervals do not overlap.
4. Render geometry cannot change canonical attribution.
5. Unavailable telemetry remains unavailable.
