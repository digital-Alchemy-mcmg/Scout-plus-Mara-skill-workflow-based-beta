# MARA Derived Evidence — Provenance-Preserving Variable Resolution

## Status

Architecture finding and proposed correction derived from the résumé pilot comparison.

## 1. Observation That Exposed the Problem

A comparison between an older résumé and the newer MARA-produced résumé showed an asymmetric result.

The newer résumé contained greater total breadth: additional employment periods, systems/process language, retail experience, digital tooling, and independent service-design work. However, the older résumé retained several high-resolution performance facts that did not survive into the newer artifact, including examples such as:

- leadership of a 65-person team;
- more than $40,000 in catering activity;
- COVID-period operating and revenue-response evidence;
- audit activity;
- cost-of-goods responsibility;
- four specifically named operating locations.

The newer résumé still read coherently and represented the candidate reasonably well. The missing resolution became visible because too much evidentiary weight was being carried by the titles and positions themselves. The specific accomplishments that had previously supplied proof and performance weight were no longer equally visible.

This comparison provided the diagnostic signal: MARA had preserved broad semantic meaning while losing some of the source resolution that made the claims strong.

## 2. Likely Failure Mechanism

The working hypothesis is premature semantic compression.

Source evidence is atomized and interpreted. MARA then creates derived evidence blurbs or slabs that summarize the collective meaning of several evidence atoms. If that compressed representation becomes the effective downstream payload, later artifact construction operates on an interpretation of the source rather than on the source-resolution evidence itself.

The resulting path behaves approximately as:

`source evidence -> interpretation -> compressed blurb/slab -> artifact re-expression`

This can create a second interpretive pass over an already compressed representation.

Broad concepts survive this process well. Specific evidence does not. For example, a 65-person team can become "team leadership"; $40,000 in catering can become "catering operations"; four named cities can become "multiple locations"; audits can become "compliance"; COGS can become "cost controls." None of these abstractions are necessarily false, but they reduce evidentiary resolution.

## 3. Architectural Correction

Derived evidence blurbs should remain useful semantic objects, but they must not replace their supporting evidence.

Every derived evidence blurb must carry lineage to the atomic evidence from which it was derived.

The downstream object therefore has two synchronized representations:

1. **Semantic representation** — the derived evidence blurb: what the evidence collectively means.
2. **Evidentiary representation** — lineage-addressable source atoms: the specific evidence that authorizes and supports that meaning.

The preferred path becomes:

`source evidence -> atomic propositions + provenance -> MARA binding -> derived evidence blurb + supporting lineage -> normalization/composition`

Compression therefore becomes reversible for expression purposes. The system can move from the semantic abstraction back to the supporting resolution without inventing new facts.

## 4. Why Lineage Is Operational, Not Merely Auditable

Provenance is not retained only so a human can later verify where a statement came from. It becomes an active input to artifact construction.

A résumé renderer operates inside fixed geometry. Containers have different statement and bullet capacities. A single fixed blurb cannot optimally serve every container size.

When the normalizer/composer receives both the derived blurb and its supporting evidence atoms, it gains multiple evidence-authorized ways to express the same semantic object.

A small container may use only the collective abstraction.

A larger container may use the abstraction plus one high-value source atom.

A different destination may select another source atom because that evidence is more relevant to the destination.

Thus geometry does not force fabrication or blind truncation. It triggers evidence selection at different resolutions.

## 5. Variable-Resolution Composition

Assume a derived evidence blurb is supported by four atoms: A, B, C, and D.

For the current destination, A and B are high-value, C is moderate-value, and D is low-value.

If geometry permits broad expression, the artifact may express the collective meaning while surfacing several specific atoms.

If geometry contracts, the system may stop explicitly rendering D while recomputing the collective expression from the evidence that remains appropriate for representation.

If the container permits one statement plus two bullets, and A and B deserve explicit visibility, then A and B are promoted into the two bullets. The collective statement is recomputed from C and D rather than continuing to summarize all four atoms.

This prevents duplicate use of scarce geometry. Evidence promoted to explicit resolution should not simultaneously consume space inside a collective summary unless deliberate repetition is justified.

The composition problem therefore changes from:

> Shorten this blurb until it fits.

To:

> Given this semantic object, its supporting evidence, destination relevance, and available geometry, determine which evidence deserves explicit resolution and which remaining evidence should be represented collectively.

## 6. Anti-Hallucination Boundary

This architecture creates a stronger expression constraint.

Every substantive artifact statement must resolve to either:

- one or more explicitly selected evidence atoms; or
- a derived compression whose declared supporting subset is lineage-addressable.

If an expression cannot point backward to authorized evidence or an authorized compression of that evidence, it has no authority to appear in the artifact.

The normalizer is therefore free to choose wording and resolution, but it is not free to create candidate facts.

## 7. Separation of Responsibilities

MARA may continue to interpret and compress evidence because the semantic abstraction is useful. The correction is that abstraction cannot destroy or replace the underlying evidence resolution.

MARA is responsible for evidence governance, proposition identity, provenance, authority, binding, and the relationship between derived semantic objects and their supporting atoms.

The normalization/composition layer receives both the semantic object and its evidence lineage. That layer decides how to say what MARA has authorized, based on destination relevance and artifact geometry.

The renderer then realizes the selected expression in the target surface.

This preserves the distinction between evidence governance and expression while allowing geometry-aware composition to use the full resolution of governed evidence.

## 8. Résumé Pilot Implication

The older résumé accomplishments did not necessarily need to remain verbatim inside MARA's compressed blurbs. They needed to remain attached beneath those blurbs as recoverable supporting evidence.

Had the high-resolution atoms remained available at normalization/composition time, the newer résumé could have retained its increased breadth while selectively restoring performance weight through facts such as team size, revenue/catering magnitude, audits, COGS, location specificity, or COVID-period operating evidence where destination relevance and geometry justified them.

The objective is therefore not to choose between the older résumé's depth and the newer résumé's breadth. The architecture should preserve both and allocate resolution dynamically.

## 9. Proposed Invariant

**A derived evidence object may compress semantic meaning, but it must never sever, overwrite, or become a substitute for the lineage-addressable evidence from which it was derived. Any downstream normalization or composition operation must be able to inspect both the derived semantic representation and its authorized supporting evidence set.**

## 10. Design Consequence

Artifact capacity becomes an evidence-allocation problem rather than a text-shortening problem.

The system can redistribute evidentiary weight among position titles, collective statements, and explicit accomplishments without fabricating content and without permanently discarding resolution during earlier compression.
