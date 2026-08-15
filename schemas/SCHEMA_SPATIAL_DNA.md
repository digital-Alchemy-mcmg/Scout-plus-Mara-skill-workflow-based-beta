# SCHM-02: Spatial Candidate DNA

## 1. Candidate Core

Candidate Core is the immutable subject of Spatial Candidate DNA. It is not an evidence domain and not a projection wall.

Candidate Core contains identity and biographical subject information required to establish who the evidence belongs to, including candidate identifier, name, location when available, and other bounded biographical fields.

## 2. Evidence Registry — Five Domains

The Evidence Registry contains only candidate evidence and is closed to these five domains:

1. **Work History** (`WORK_HISTORY`)
2. **Education & Technical Competency** (`EDUCATION_COMPETENCY`)
3. **Creative Works & Projects** (`CREATIVE_WORKS`)
4. **Psychometric & Cognitive** (`PSYCHOMETRICS`)
5. **References / Publications / Testimony / Observed Behavior** (`TESTIMONY_BEHAVIOR`)

`IDENTITY` is not a legal evidence domain.

## 3. Canonical Evidence Packet

Every canonical evidence packet preserves distinct concepts rather than collapsing them into one confidence score:

- `evidence_id`
- `domain`
- `governing_verb`
- `entity`
- `propositionId`
- `candidateRelationship`
- `sourceClass`
- `authorityCeiling`
- `extractionConfidence`
- `authorityVerified`
- `sourceLineageId`
- `independence`
- `corroborationState`
- `contradictionState`
- `convergesWithEvidenceIds`
- `provenance`
- `attributes`

Extraction confidence answers whether the source was extracted correctly. Authority ceiling constrains how strongly that evidence class may support an assertion. High extraction confidence does not imply high evidentiary authority.

Different evidence domains do not automatically establish independent evidence. Independence is a source-lineage property.

## 4. Candidate Relationship vs Source Authority

The candidate's relationship to an event or artifact is separate from source authority. A candidate may be directly related to a fact while the source itself remains candidate-supplied or otherwise authority-limited.

## 5. Geometry

Ceiling and Floor remain invariant directions. Floor requires actual adverse or contradictory evidence; absence of evidence is not Floor.

The current Semantic Band model is retained during this repair because its continued architectural role is a protected unresolved decision.

The count and ownership of active semantic walls/receptors is also preserved as unresolved. This schema does not decide whether four active walls remain four under the corrected five-domain ontology.

## 6. Projection Sufficiency

Projection sufficiency is not geometric Floor. A minimum evidence/binding threshold, if later defined, must be represented separately from actual contradictory or adverse evidence.

## 7. Legacy Fixture Migration

Pre-repair fixtures may still contain legacy `IDENTITY` evidence packets and combined `confidence` / `authority` fields. Runtime normalization must:

- move subject identity to Candidate Core;
- discard `IDENTITY` from the Evidence Registry;
- map legacy extraction confidence only to extraction confidence;
- leave source authority unverified unless a valid source class and ceiling are supplied;
- never infer independence from evidence-domain separation.
