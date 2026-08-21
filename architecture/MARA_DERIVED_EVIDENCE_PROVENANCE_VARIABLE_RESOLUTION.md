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

## 11. Geometry and Normalization Are Different Jobs

The subsequent architecture discussion exposed a second separation problem: fitting language into geometry and deciding what language should say are not the same task.

Normalization answers:

> What should this governed evidence say for this destination?

Geometry answers:

> What expression capacity does this artifact location provide?

Rendering answers:

> How is the already-approved expression physically realized on the surface?

The goals differ. Geometry optimizes fit. Normalization optimizes semantic fidelity, relevance, evidence allocation, and intelligibility. Rendering executes the approved package.

Geometry must therefore constrain normalization without owning normalization. A geometry system may report capacity, overflow, line count, dimensions, and typography effects, but it should not independently rewrite candidate meaning in order to make text fit.

Likewise, normalization should not invent layout assumptions. It should receive a declared capacity contract and solve the semantic problem inside that contract.

## 12. Every Résumé Plan Has a Floor Plan

A résumé design should be treated as a floor plan rather than merely as a visual template.

The floor plan is drawn by design intelligence — the architect. The architect does not need to know the candidate's evidence in order to know the structural purpose and measurable capacity of the artifact spaces it created.

The analogy is a house or apartment. Before anyone moves in, the architect can identify the kitchen, living room, dining room, primary bedroom, smaller rooms, and circulation areas. The architect can provide dimensions and explain what each space was structurally designed to accommodate. The architect does not decide who sleeps in which room or how the room is furnished.

A résumé floor plan behaves the same way.

Each container has an address and a structural identity. The design system can know that one container is naturally suited to identity/header information, another to primary experience, another to secondary evidence, another to education or credentials, and another to supporting material. It can also know the relative prominence and physical capacity of each container.

The normalizer then furnishes the selected floor plan with governed evidence.

## 13. The Renderer Has a Pre-Render Design-Intelligence Phase

Container selection happens upstream from normalization even though the available floor plans originate from the renderer/design system.

This means the renderer participates in two distinct phases.

### Phase A — Floor-Plan Provision

Before normalization, the system sends the total derived-evidence payload specification to the renderer/design-intelligence layer.

At this point, nothing is rendered.

The renderer responds with one or more viable floor plans appropriate to the payload. Each plan exposes its addressed containers and geometry contracts.

The response may say, in effect:

- Floor Plan 1 has six containers.
- Floor Plan 2 has six containers with different proportions.
- Floor Plan 3 has three larger containers.
- Each container has a known address, purpose, dimensions, prominence, and capacity.

The system then selects one or more floor plans for normalization.

### Phase B — Actual Rendering

Only after normalization and verification does the renderer return in its physical rendering role.

It receives already-approved content mapped to already-approved container addresses and realizes that content in the selected surface.

The same component may therefore participate twice, but the responsibilities must remain distinct:

**Pre-normalization:** expose viable floor plans and capacity contracts.

**Post-verification:** render authorized content into those plans.

## 14. Capacity Contracts

Design intelligence should hand normalization a capacity contract, not a design tutorial.

A container contract can include:

- container address;
- structural or semantic class;
- width and height;
- typography profile;
- heading allowance;
- body allowance;
- comfortable character budget;
- hard character ceiling;
- comfortable line count;
- spacing assumptions;
- reserved visual elements;
- relative prominence;
- allowed or preferred content forms.

Typography changes can alter the contract without changing normalization logic.

For example, design intelligence may calculate that a particular container comfortably supports 403 characters under one typography profile, but only 286 characters when a heading treatment, font, line height, and spacing profile are applied. It may further reserve a portion of that budget for a heading.

Normalization does not need to know how those numbers were calculated. It only needs the usable contract.

The handoff becomes:

> Container B: under typography profile X, this space permits 286 comfortable characters, including up to 73 characters of heading.

Normalization can then solve the evidence-expression problem inside those limits.

## 15. Container Selection Is Upstream From Normalization

Once the total payload is known, a runner sends the payload specification to the renderer/design-intelligence layer.

The renderer returns floor plans that can plausibly accommodate that payload, along with addressed container measurements.

The sequence therefore becomes:

`Derived Evidence Pack -> total payload specification -> renderer floor-plan response -> floor-plan selection -> normalization -> geometry verification -> eligible rendering`

By the time normalization starts, the active floor plan is known.

Normalization is not deciding what boxes exist. It is deciding what governed evidence should occupy the boxes that already exist and how that evidence should be expressed within their capacity contracts.

## 16. Floor-Plan Selection Creates Controlled Artifact Variability

A single governed candidate evidence package can produce several valid résumé artifacts without changing candidate truth.

The evidence base, provenance, authority, confidence, and destination remain fixed. The floor plan changes.

Because each floor plan exposes different real estate, normalization must solve the same evidence-allocation problem differently for each plan.

One plan may provide a large experience container and a narrow education rail. Another may divide experience across several medium containers. Another may allocate greater space to systems or projects.

The same evidence therefore moves, compresses, expands, or becomes explicit in different places because geometry changes the available expression opportunities.

This is natural structural variability rather than random rewriting.

The pipeline can branch as:

`one governed evidence payload -> multiple viable floor plans -> one normalized allocation per floor plan -> geometry verification per plan -> multiple eligible rendered artifacts`

Normalization may also create multiple valid allocations within a single floor plan if deliberate expression variants are desired, but the evidence base does not change.

## 17. Confidence and Evidence Importance Guide Allocation

The normalizer does not receive only a blurb and a character count.

It receives the derived evidence object together with its lineage, confidence/authority information, destination relevance, and underlying evidence atoms.

This gives normalization a stable hierarchy when geometry becomes restrictive.

High-value evidence is harder to suppress.

Moderate-value evidence may be compressed into a collective statement.

Lower-value evidence may disappear from explicit surface expression while remaining preserved underneath the derived evidence representation.

For example, one floor plan may allow a 65-person leadership fact to appear as its own bullet. Another may need to combine that evidence with operational scope. A third may have sufficient room to surface both team size and the $40,000 catering evidence separately.

These are not different candidate truths. They are different spatial projections of the same governed candidate evidence.

## 18. Geometry Verification Is an Eligibility Gate

After normalization fills each candidate floor plan, the geometry verifier checks the completed package against the declared capacity contract for every addressed container.

Its role is narrow and deterministic compared with normalization.

It may report, for example:

- Plan 1 = TRUE
- Plan 2 = TRUE
- Plan 3 = FALSE
- Plan 4 = TRUE
- Plan 5 = FALSE

The FALSE plans do not advance.

The TRUE plans become render-eligible.

A TRUE result means the normalized package satisfies the geometry contract for that floor plan. It becomes the release key required by the renderer.

**No TRUE, no render.**

The renderer should not independently decide whether an overflowing or noncompliant package looks acceptable. Eligibility has already been established by the verifier.

## 19. User Choice Happens Among Valid Representations

If Plans 1, 2, and 4 return TRUE, all three may be rendered.

The user can then choose among three artifacts that already satisfy the evidence, normalization, and geometry requirements.

The user's preference is therefore about presentation rather than repair.

The choice becomes:

> Which valid spatial expression of this candidate do I prefer?

rather than:

> Which version actually fits, which version accidentally omitted something important, or which one needs manual repair?

This is a meaningful architectural distinction. The machinery resolves truth governance, evidence relevance, semantic allocation, and geometry eligibility before aesthetic selection occurs.

## 20. Worker / Verifier / Orchestrator Boundary

This architecture also clarifies the worker-verifier-orchestrator model.

### Payload Runner

Sends the total governed payload specification upstream to design intelligence.

### Renderer / Design Intelligence — Floor-Plan Phase

Returns viable floor plans and addressed capacity contracts. It is not yet rendering the artifact.

### Normalizer Worker

Receives a selected floor plan plus the governed derived-evidence payload. It assigns evidence to addressed containers and produces authorized human expression within each capacity contract.

### Semantic Verifier

Checks that normalization preserves meaning, provenance, destination relevance, confidence/authority constraints, and does not introduce unsupported candidate facts.

### Geometry Verifier

Checks the completed normalized floor plan against container dimensions and capacity limits. It returns eligibility status and measured failures. It does not rewrite semantics.

### Orchestrator

Routes failed semantic packages back to normalization for semantic correction and routes failed geometry packages back with measured capacity constraints. It advances only packages that satisfy the required gates.

### Renderer — Surface Phase

Receives only render-eligible packages and realizes them as the actual PDF, HTML, or other artifact surface.

## 21. Revised Architecture Principle

The architecture can therefore be stated as follows:

**Design intelligence defines the available rooms. Normalization furnishes them with governed evidence. Verification confirms that the furnishing respects both semantic authority and physical capacity. Rendering moves the approved furnishing into the selected floor plan.**

The result is controlled variability: one candidate truth can produce several valid artifacts because different floor plans redistribute the same governed evidence differently, while provenance, confidence, and authority remain stable underneath every variation.
