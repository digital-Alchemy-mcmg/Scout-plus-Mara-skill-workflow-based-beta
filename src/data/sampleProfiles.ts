import { CandidateSpatialDNA, QueryBundle, FrozenSnapshot, TargetResolvedArtifact } from '../types';

export interface SampleCase {
  id: string;
  title: string;
  tagline: string;
  industry: string;
  rawJobPosting: string;
  candidateDNA: CandidateSpatialDNA;
  precomputedQueryBundle: QueryBundle;
  precomputedFrozenSnapshot: FrozenSnapshot;
  precomputedArtifact: TargetResolvedArtifact;
}

export const SAMPLE_CASES: SampleCase[] = [
  {
    id: 'case-ops-manager',
    title: 'Senior Operations & Production Manager',
    tagline: 'Apparel & Technical Footwear Supply Chain (NAICS 3152, O*NET 11-1021.00)',
    industry: 'Apparel Manufacturing & Global Distribution',
    rawJobPosting: `SENIOR OPERATIONS MANAGER - GLOBAL SAMPLES & PRODUCTION
Company: Apex Performance Labs (Footwear & Gear)
Location: Portland, OR / Hybrid

ABOUT US:
Apex Performance Labs is looking for a dynamic, rockstar Senior Operations Manager who thrives in a fast-paced, high-octane environment! We are disrupting the technical athletic apparel sphere. Must be a self-starter, culture champion, and guru with 8+ years of experience!

KEY OPERATIONAL DUTIES & RESPONSIBILITIES:
- Maintains real-time visibility across all physical sample inventory and global vendor production pipelines.
- Coordinates critical path shipment milestones between overseas tier-1 manufacturing facilities and domestic testing labs to ensure on-time prototype delivery.
- Resolves daily logistical exceptions and material bottlenecks by executing contingency freight routing and alternative fabric allocation.
- Enforces strict quality assurance acceptance criteria across pre-production garment batches before mass manufacturing sign-off.
- Orchestrates weekly cross-functional synchronization between Industrial Design, Sourcing, and Commercial Merchandising teams.
- Oversees warehouse pallet staging, customs clearance documentation, and inland transit handoffs.
- Negotiates regional freight forwarder service-level agreements and volume rate tiers.
- Audits monthly vendor billing reconciliations against delivered bill-of-materials (BOM) specifications.

HIRING REQUIREMENTS:
- Bachelor's Degree in Logistics or equivalent operational excellence.
- Strong proficiency with ERP systems (NetSuite / SAP S/4HANA).
- Passionate team player with exceptional synergy!`,
    candidateDNA: {
      candidateId: 'cand-elena-rostova-01',
      name: 'Elena Rostova',
      currentRoleProvenance: 'Operations Director, Veloce Technical Outerwear',
      location: 'Seattle, WA',
      evidenceRegistry: {
        IDENTITY: [
          {
            evidence_id: 'EV-ID-01',
            domain: 'IDENTITY',
            governing_verb: 'Located',
            entity: 'Pacific Northwest Region (Seattle/Portland commute)',
            authority: 'DIRECT',
            provenance: { source: 'Contact Profile', section: 'Residency' },
            confidence: 1.0,
            attributes: { availability: 'Immediate', workAuth: 'US Citizen' }
          }
        ],
        WORK_HISTORY: [
          {
            evidence_id: 'EV-WH-01',
            domain: 'WORK_HISTORY',
            governing_verb: 'Orchestrated',
            entity: 'Global sample tracking pipeline spanning 4 Tier-1 factories in Vietnam and Taiwan',
            authority: 'DIRECT',
            provenance: { source: 'Veloce_Career_Summary.pdf', section: 'Experience: Operations Lead' },
            confidence: 0.98,
            attributes: { unitVolume: '45,000 seasonal samples/yr', onTimeRate: '97.4%' }
          },
          {
            evidence_id: 'EV-WH-02',
            domain: 'WORK_HISTORY',
            governing_verb: 'Rerouted',
            entity: 'Air-freight and multi-modal container logistics during Red Sea maritime disruptions',
            authority: 'DIRECT',
            provenance: { source: 'Veloce_Career_Summary.pdf', section: 'Case Study: Logistics Contingency' },
            confidence: 0.95,
            attributes: { costSaved: '$180,000 expedited fee avoidance', deliveryDelayDays: 0 }
          },
          {
            evidence_id: 'EV-WH-03',
            domain: 'WORK_HISTORY',
            governing_verb: 'Enforced',
            entity: 'Pre-production QA inspection checklists reducing garment stitch defects',
            authority: 'DIRECT',
            provenance: { source: 'Veloce_Career_Summary.pdf', section: 'Quality Control Review' },
            confidence: 0.92,
            attributes: { defectReductionPercent: '22%' }
          },
          {
            evidence_id: 'EV-WH-04',
            domain: 'WORK_HISTORY',
            governing_verb: 'Facilitated',
            entity: 'Weekly alignment forums uniting apparel design directors, fabric mills, and commercial heads',
            authority: 'CONTRIBUTORY',
            provenance: { source: 'Veloce_Career_Summary.pdf', section: 'Cross-Functional Leadership' },
            confidence: 0.89,
            attributes: { cadence: 'Weekly', stakeholderCount: 14 }
          },
          {
            evidence_id: 'EV-WH-05',
            domain: 'WORK_HISTORY',
            governing_verb: 'Reconciled',
            entity: 'Monthly BOM vendor invoicing across 12 Asian tier-1 suppliers in NetSuite ERP',
            authority: 'DIRECT',
            provenance: { source: 'Veloce_Career_Summary.pdf', section: 'Financial Operations' },
            confidence: 0.94,
            attributes: { system: 'NetSuite ERP', invoiceAccuracy: '99.8%' }
          }
        ],
        EDUCATION_COMPETENCY: [
          {
            evidence_id: 'EV-EDU-01',
            domain: 'EDUCATION_COMPETENCY',
            governing_verb: 'Completed',
            entity: 'B.S. in Supply Chain Management & Industrial Engineering, Univ. of Washington',
            authority: 'DIRECT',
            provenance: { source: 'Academic_Transcript_UW.pdf', section: 'Degree Award' },
            confidence: 1.0,
            attributes: { honors: 'Magna Cum Laude', graduationYear: 2018 }
          },
          {
            evidence_id: 'EV-EDU-02',
            domain: 'EDUCATION_COMPETENCY',
            governing_verb: 'Certified',
            entity: 'APICS Certified Supply Chain Professional (CSCP)',
            authority: 'DIRECT',
            provenance: { source: 'APICS_Verification.pdf', section: 'Credentials' },
            confidence: 0.98,
            attributes: { validity: 'Active 2024-2027' }
          }
        ],
        CREATIVE_WORKS: [
          {
            evidence_id: 'EV-CW-01',
            domain: 'CREATIVE_WORKS',
            governing_verb: 'Architected',
            entity: 'Automated Sample Status Web Portal connecting overseas factories with US R&D design benches',
            authority: 'DIRECT',
            provenance: { source: 'Internal_Ops_Tooling_Portfolio.pdf', section: 'Software Implementations' },
            confidence: 0.91,
            attributes: { dailyActiveUsers: 85, latencyReductionHours: 48 }
          }
        ],
        PSYCHOMETRICS: [
          {
            evidence_id: 'EV-PSY-01',
            domain: 'PSYCHOMETRICS',
            governing_verb: 'Demonstrated',
            entity: 'High cognitive ambiguity tolerance and methodical operational triage under supply shocks',
            authority: 'STATIONARY',
            provenance: { source: 'Leadership_Assessment_Hogan.pdf', section: 'Stress Profile' },
            confidence: 0.88,
            attributes: { composureIndex: '94th percentile', executionFocus: 'High' }
          }
        ],
        TESTIMONY_BEHAVIOR: [
          {
            evidence_id: 'EV-TES-01',
            domain: 'TESTIMONY_BEHAVIOR',
            governing_verb: 'Commended',
            entity: 'VP of Sourcing: Elena acts as the central control tower, preventing sample bottlenecks before designers even notice them',
            authority: 'STATIONARY',
            provenance: { source: 'Executive_Recommendation_Letter.pdf', section: 'Direct Quote' },
            confidence: 0.96,
            attributes: { recommender: 'VP Global Sourcing, Veloce' }
          }
        ]
      }
    },
    precomputedQueryBundle: {
      targetTitleProvenance: 'Senior Operations Manager - Global Samples & Production',
      corePurpose: 'Guarantees uncompromised sample velocity and manufacturing milestone adherence from prototype sign-off through factory mass-production handoff.',
      coreMetaphor: 'Control Tower & Operational Dispatcher',
      naicsAnchor: {
        code: '315220',
        title: "Men's and Boys' Cut and Sew Apparel Manufacturing",
        rationale: 'Core operational reality is technical garment batch QA, textile mill routing, and sample production, not retail storefront sales.',
        matchType: 'HOT_MATCH',
        system: 'NAICS'
      },
      onetAnchor: {
        code: '11-1021.00',
        title: 'General and Operations Managers',
        rationale: 'Direct accountability for vendor coordination, supply chain bottleneck resolution, and multi-team synchronization.',
        matchType: 'HOT_MATCH',
        system: 'ONET_SOC'
      },
      demandPrimitives: [
        {
          id: 'DP-01',
          actor: 'Incumbent',
          action: 'Maintains visibility',
          object: 'Sample inventory and global vendor production pipelines',
          relationship: 'COORDINATION',
          mechanism: 'Digital tracking systems and daily vendor milestone check-ins',
          effect: 'Downstream testing labs receive prototype assets without scheduling slip',
          demand_type: 'ABILITY',
          provenance: 'Duties paragraph 1: "Maintains real-time visibility across all physical sample inventory..."',
          isCritical: true
        },
        {
          id: 'DP-02',
          actor: 'Incumbent',
          action: 'Coordinates shipment milestones',
          object: 'Overseas Tier-1 manufacturing facilities and domestic test labs',
          relationship: 'COORDINATION',
          mechanism: 'Multi-modal freight tracking and SLA enforcement',
          effect: 'Guarantees on-time prototype delivery for critical product reviews',
          demand_type: 'SKILL',
          provenance: 'Duties paragraph 2: "Coordinates critical path shipment milestones between overseas tier-1..."',
          isCritical: true
        },
        {
          id: 'DP-03',
          actor: 'Incumbent',
          action: 'Resolves logistical exceptions',
          object: 'Daily material bottlenecks and customs delays',
          relationship: 'AUTHORITY',
          mechanism: 'Contingency freight routing and alternative fabric allocation',
          effect: 'Eliminates factory downtime and preserves production calendar deadlines',
          demand_type: 'ABILITY',
          provenance: 'Duties paragraph 3: "Resolves daily logistical exceptions and material bottlenecks..."',
          isCritical: true
        },
        {
          id: 'DP-04',
          actor: 'Incumbent',
          action: 'Enforces QA criteria',
          object: 'Pre-production garment batches and physical samples',
          relationship: 'AUTHORITY',
          mechanism: 'Standardized tolerance checklists and stitch defect inspection',
          effect: 'Prevents defective runs before mass manufacturing release',
          demand_type: 'SKILL',
          provenance: 'Duties paragraph 4: "Enforces strict quality assurance acceptance criteria..."',
          isCritical: true
        },
        {
          id: 'DP-05',
          actor: 'Incumbent',
          action: 'Orchestrates synchronization',
          object: 'Design, Sourcing, and Merchandising leadership',
          relationship: 'COORDINATION',
          mechanism: 'Structured weekly operational reviews and cross-functional forums',
          effect: 'Unifies engineering constraints with creative product roadmaps',
          demand_type: 'ABILITY',
          provenance: 'Duties paragraph 5: "Orchestrates weekly cross-functional synchronization between..."',
          isCritical: false
        },
        {
          id: 'DP-06',
          actor: 'Incumbent',
          action: 'Manages customs documentation',
          object: 'Official US Customs clearance forms and licensed brokerage entries',
          relationship: 'AUTHORITY',
          mechanism: 'Direct licensed customs brokerage filing and tariff classification',
          effect: 'Legal port-of-entry authorization without bonded warehouse holdovers',
          demand_type: 'KNOWLEDGE',
          provenance: 'Duties paragraph 6: "customs clearance documentation, and inland transit handoffs"',
          isCritical: false
        },
        {
          id: 'DP-07',
          actor: 'Incumbent',
          action: 'Reconciles vendor billing',
          object: 'Monthly BOM invoices and ERP financial ledgers',
          relationship: 'COORDINATION',
          mechanism: 'NetSuite/SAP three-way matching against purchase orders',
          effect: 'Ensures zero billing discrepancies and preserves supplier credit terms',
          demand_type: 'SKILL',
          provenance: 'Duties paragraph 8: "Audits monthly vendor billing reconciliations against delivered BOM..."',
          isCritical: false
        }
      ],
      negativeSpace: [
        {
          id: 'NS-01',
          assertion: 'NOT a Creative Garment Fashion Designer',
          reason: 'Job posting is strictly procedural operations, vendor logistics, and QA compliance with zero aesthetic sketch or colorway design authority.',
          sourceText: 'Exclusion based on purely operational duty distribution.'
        },
        {
          id: 'NS-02',
          assertion: 'NOT an In-Store Retail Merchandising Manager',
          reason: 'Scope is factory-to-lab pre-production tier-1 supply chain, having no brick-and-mortar storefront or consumer POS accountability.',
          sourceText: 'Scope isolation from NAICS 3152 vs 4481 retail.'
        }
      ],
      activeReceptors: ['WORK_HISTORY', 'CREATIVE_WORKS', 'TESTIMONY_BEHAVIOR', 'EDUCATION_COMPETENCY'],
      scoutExhaust: [
        {
          id: 'SE-01',
          text: 'rockstar Senior Operations Manager who thrives in a fast-paced, high-octane environment',
          reason: 'MARKETING_FLUFF',
          originalLocation: 'Paragraph 1: About Us section'
        },
        {
          id: 'SE-02',
          text: 'guru with 8+ years of experience',
          reason: 'STATIC_CREDENTIAL_FILTER',
          originalLocation: 'Paragraph 1: Intro constraints'
        },
        {
          id: 'SE-03',
          text: 'Passionate team player with exceptional synergy',
          reason: 'MARKETING_FLUFF',
          originalLocation: 'Hiring Requirements bullet 3'
        },
        {
          id: 'SE-04',
          text: 'Senior Operations Manager (Job Title)',
          reason: 'BESTOWED_TITLE',
          originalLocation: 'Header / Provenance Metadata'
        }
      ],
      timestamp: '2026-08-14T20:30:00Z'
    },
    precomputedFrozenSnapshot: {
      freezeHash: '0x8f2d9c44e6b1a03975dcf7402a4a391583d78c0b',
      freezeTimestamp: '2026-08-14T20:30:15Z',
      candidateId: 'cand-elena-rostova-01',
      targetRoleIdentifier: 'Senior Operations & Production Manager (Apex)',
      activeWalls: ['WORK_HISTORY', 'CREATIVE_WORKS', 'TESTIMONY_BEHAVIOR', 'EDUCATION_COMPETENCY'],
      boundAtoms: [
        {
          demandId: 'DP-01',
          evidenceId: 'EV-WH-01',
          semanticBand: 'CEILING',
          score: 0.98,
          corroborationType: 'CONVERGENT',
          corroboratingEvidenceIds: ['EV-CW-01', 'EV-TES-01'],
          rationale: 'Candidate orchestrated 45k seasonal samples across 4 Tier-1 facilities with custom web portal (EV-CW-01) and explicit VP commendation (EV-TES-01).',
          bandOffset: 0.95
        },
        {
          demandId: 'DP-02',
          evidenceId: 'EV-WH-01',
          semanticBand: 'CEILING',
          score: 0.94,
          corroborationType: 'CONVERGENT',
          corroboratingEvidenceIds: ['EV-EDU-02'],
          rationale: '97.4% on-time milestone arrival across international Tier-1 factories backed by APICS CSCP certification.',
          bandOffset: 0.92
        },
        {
          demandId: 'DP-03',
          evidenceId: 'EV-WH-02',
          semanticBand: 'CEILING',
          score: 0.96,
          corroborationType: 'INDEPENDENT',
          rationale: 'Demonstrated direct crisis rerouting during global maritime disruptions, averting $180k freight penalties with zero delivery days lost.',
          bandOffset: 0.94
        },
        {
          demandId: 'DP-04',
          evidenceId: 'EV-WH-03',
          semanticBand: 'ABOVE_BASELINE',
          score: 0.88,
          corroborationType: 'INDEPENDENT',
          rationale: 'Directly applied batch QA checklists reducing stitch defect rates by 22% prior to production run authorization.',
          bandOffset: 0.82
        },
        {
          demandId: 'DP-05',
          evidenceId: 'EV-WH-04',
          semanticBand: 'ABOVE_BASELINE',
          score: 0.85,
          corroborationType: 'CONVERGENT',
          corroboratingEvidenceIds: ['EV-TES-01'],
          rationale: 'Led 14-stakeholder weekly alignment sync between design and fabric mills.',
          bandOffset: 0.78
        },
        {
          demandId: 'DP-07',
          evidenceId: 'EV-WH-05',
          semanticBand: 'CEILING',
          score: 0.93,
          corroborationType: 'CONVERGENT',
          corroboratingEvidenceIds: ['EV-EDU-01'],
          rationale: 'Maintained 99.8% invoice accuracy across NetSuite ERP BOM reconciliations for 12 Tier-1 Asian suppliers.',
          bandOffset: 0.90
        }
      ],
      maraExhaust: [
        {
          id: 'MEX-01',
          demandPrimitive: {
            id: 'DP-06',
            actor: 'Incumbent',
            action: 'Manages customs documentation',
            object: 'Official US Customs clearance forms and licensed brokerage entries',
            relationship: 'AUTHORITY',
            mechanism: 'Direct licensed customs brokerage filing and tariff classification',
            effect: 'Legal port-of-entry authorization without bonded warehouse holdovers',
            demand_type: 'KNOWLEDGE',
            provenance: 'Duties paragraph 6: "customs clearance documentation, and inland transit handoffs"'
          },
          reason: 'unsupported',
          detailedAnalysis: 'Candidate evidence demonstrates inland freight coordination and multi-modal shipment tracking, but contains no record of licensed customs broker filing (CBP Form 7501) or formal Harmonized Tariff Schedule (HTS) classification authority.',
          severity: 'SECONDARY_GAP'
        }
      ],
      projectionCenter: { x: 0.88, y: 0.92, z: 0.85 },
      geometricState: {
        ceilingCount: 4,
        aboveBaselineCount: 2,
        baselineCount: 0,
        belowBaselineCount: 0,
        floorCount: 0,
        alignmentRatio: 0.857
      },
      isBlocked: false
    },
    precomputedArtifact: {
      id: 'art-elena-01',
      type: 'TARGET_RESOLVED_RESUME',
      title: 'Target-Resolved Executive Operations Portfolio: Elena Rostova',
      candidateName: 'Elena Rostova',
      targetRole: 'Senior Operations & Production Manager (Global Apparel & Footwear Supply Chain)',
      content: `ELENA ROSTOVA
Seattle, WA | APICS CSCP Certified | Operations Leadership

PROFESSIONAL SUMMARY:
Operational control tower and supply chain leader with proven record directing Tier-1 global sample manufacturing, crisis logistics rerouting, and digital vendor tracking. Proven track record achieving 97.4% on-time prototype delivery across 45,000 annual seasonal units and cutting pre-production defect rates by 22%.

TARGET-BOUND OPERATIONAL CAPABILITIES:

1. Global Sample Pipeline & Factory Milestone Synchronization
- Orchestrated end-to-end sample tracking across 4 Tier-1 facilities in Vietnam and Taiwan, maintaining a 97.4% on-time milestone delivery rate across 45,000 annual prototype units [EV-WH-01].
- Architected proprietary digital sample status portal connecting overseas factory dispatch benches with US R&D design teams, reducing milestone status latency by 48 hours [EV-CW-01, EV-TES-01].

2. Logistical Bottleneck Resolution & Crisis Rerouting
- Executed contingency air-freight and multi-modal freight rerouting during global maritime corridor disruptions, preventing 100% of delivery schedule delays and avoiding $180,000 in expedited shipping penalties [EV-WH-02].

3. Pre-Production Quality Assurance & Defect Minimization
- Enforced rigorous pre-production QA inspection checklists across technical garment batches, driving a 22% reduction in factory stitch defects prior to mass manufacturing handoff [EV-WH-03].

4. Cross-Functional Design-to-Manufacturing Alignment
- Chaired weekly 14-stakeholder operational alignment forums bridging apparel design directors, raw material mills, and merchandising leadership to harmonize technical tolerances [EV-WH-04, EV-TES-01].

5. ERP Ledger Reconciliation & BOM Accuracy
- Reconciled monthly Bill-of-Materials (BOM) invoicing across 12 Tier-1 Asian suppliers in NetSuite ERP with 99.8% ledger accuracy [EV-WH-05, EV-EDU-01].

EDUCATION & PROFESSIONAL CREDENTIALS:
- B.S. in Supply Chain Management & Industrial Engineering, University of Washington [EV-EDU-01]
- APICS Certified Supply Chain Professional (CSCP), Active Credential [EV-EDU-02]`,
      sections: [
        {
          heading: 'Target-Bound Operational Capabilities',
          content: [
            'Orchestrated end-to-end sample tracking across 4 Tier-1 facilities in Vietnam and Taiwan, maintaining a 97.4% on-time milestone delivery rate across 45,000 annual prototype units [EV-WH-01].',
            'Architected proprietary digital sample status portal connecting overseas factory dispatch benches with US R&D design teams, reducing milestone status latency by 48 hours [EV-CW-01, EV-TES-01].',
            'Executed contingency air-freight and multi-modal freight rerouting during global maritime corridor disruptions, preventing 100% of delivery schedule delays and avoiding $180,000 in expedited shipping penalties [EV-WH-02].',
            'Enforced rigorous pre-production QA inspection checklists across technical garment batches, driving a 22% reduction in factory stitch defects prior to mass manufacturing handoff [EV-WH-03].',
            'Chaired weekly 14-stakeholder operational alignment forums bridging apparel design directors, raw material mills, and merchandising leadership to harmonize technical tolerances [EV-WH-04, EV-TES-01].',
            'Reconciled monthly Bill-of-Materials (BOM) invoicing across 12 Tier-1 Asian suppliers in NetSuite ERP with 99.8% ledger accuracy [EV-WH-05, EV-EDU-01].'
          ]
        }
      ],
      traceabilityLinks: [
        {
          artifactSentenceIndex: 0,
          sentenceText: 'Orchestrated end-to-end sample tracking across 4 Tier-1 facilities in Vietnam and Taiwan, maintaining a 97.4% on-time milestone delivery rate across 45,000 annual prototype units [EV-WH-01].',
          boundAtom: {
            demandId: 'DP-01',
            evidenceId: 'EV-WH-01',
            semanticBand: 'CEILING',
            score: 0.98,
            corroborationType: 'CONVERGENT',
            rationale: 'Direct proof of sample pipeline maintenance with 45k unit volume.',
            bandOffset: 0.95
          },
          evidencePacket: {
            evidence_id: 'EV-WH-01',
            domain: 'WORK_HISTORY',
            governing_verb: 'Orchestrated',
            entity: 'Global sample tracking pipeline spanning 4 Tier-1 factories in Vietnam and Taiwan',
            authority: 'DIRECT',
            provenance: { source: 'Veloce_Career_Summary.pdf', section: 'Experience: Operations Lead' },
            confidence: 0.98,
            attributes: { unitVolume: '45,000 seasonal samples/yr', onTimeRate: '97.4%' }
          },
          demandPrimitive: {
            id: 'DP-01',
            actor: 'Incumbent',
            action: 'Maintains visibility',
            object: 'Sample inventory and global vendor production pipelines',
            relationship: 'COORDINATION',
            mechanism: 'Digital tracking systems and daily vendor milestone check-ins',
            effect: 'Downstream testing labs receive prototype assets without scheduling slip',
            demand_type: 'ABILITY',
            provenance: 'Duties paragraph 1'
          }
        },
        {
          artifactSentenceIndex: 1,
          sentenceText: 'Architected proprietary digital sample status portal connecting overseas factory dispatch benches with US R&D design teams, reducing milestone status latency by 48 hours [EV-CW-01, EV-TES-01].',
          boundAtom: {
            demandId: 'DP-01',
            evidenceId: 'EV-CW-01',
            semanticBand: 'CEILING',
            score: 0.98,
            corroborationType: 'CONVERGENT',
            rationale: 'Convergent evidence reinforcing tracking portal implementation.',
            bandOffset: 0.95
          },
          evidencePacket: {
            evidence_id: 'EV-CW-01',
            domain: 'CREATIVE_WORKS',
            governing_verb: 'Architected',
            entity: 'Automated Sample Status Web Portal connecting overseas factories with US R&D design benches',
            authority: 'DIRECT',
            provenance: { source: 'Internal_Ops_Tooling_Portfolio.pdf', section: 'Software Implementations' },
            confidence: 0.91,
            attributes: { dailyActiveUsers: 85, latencyReductionHours: 48 }
          },
          demandPrimitive: {
            id: 'DP-01',
            actor: 'Incumbent',
            action: 'Maintains visibility',
            object: 'Sample inventory and global vendor production pipelines',
            relationship: 'COORDINATION',
            mechanism: 'Digital tracking systems and daily vendor milestone check-ins',
            effect: 'Downstream testing labs receive prototype assets without scheduling slip',
            demand_type: 'ABILITY',
            provenance: 'Duties paragraph 1'
          }
        },
        {
          artifactSentenceIndex: 2,
          sentenceText: 'Executed contingency air-freight and multi-modal freight rerouting during global maritime corridor disruptions, preventing 100% of delivery schedule delays and avoiding $180,000 in expedited shipping penalties [EV-WH-02].',
          boundAtom: {
            demandId: 'DP-03',
            evidenceId: 'EV-WH-02',
            semanticBand: 'CEILING',
            score: 0.96,
            corroborationType: 'INDEPENDENT',
            rationale: 'Crisis freight rerouting verification with documented monetary and schedule protection.',
            bandOffset: 0.94
          },
          evidencePacket: {
            evidence_id: 'EV-WH-02',
            domain: 'WORK_HISTORY',
            governing_verb: 'Rerouted',
            entity: 'Air-freight and multi-modal container logistics during Red Sea maritime disruptions',
            authority: 'DIRECT',
            provenance: { source: 'Veloce_Career_Summary.pdf', section: 'Case Study: Logistics Contingency' },
            confidence: 0.95,
            attributes: { costSaved: '$180,000 expedited fee avoidance', deliveryDelayDays: 0 }
          },
          demandPrimitive: {
            id: 'DP-03',
            actor: 'Incumbent',
            action: 'Resolves logistical exceptions',
            object: 'Daily material bottlenecks and customs delays',
            relationship: 'AUTHORITY',
            mechanism: 'Contingency freight routing and alternative fabric allocation',
            effect: 'Eliminates factory downtime and preserves production calendar deadlines',
            demand_type: 'ABILITY',
            provenance: 'Duties paragraph 3'
          }
        }
      ],
      generatedAt: '2026-08-14T20:30:20Z',
      freezeHash: '0x8f2d9c44e6b1a03975dcf7402a4a391583d78c0b'
    }
  },
  {
    id: 'case-systems-eng',
    title: 'Staff Distributed Systems Engineer',
    tagline: 'High-Throughput Storage & Consensus Engine (NAICS 541511, O*NET 15-1252.00)',
    industry: 'Cloud Infrastructure & Core Storage Systems',
    rawJobPosting: `STAFF DISTRIBUTED SYSTEMS ENGINEER - CORE STORAGE
Company: ChronoScale Infrastructure
Location: San Francisco, CA / Remote

ABOUT US:
ChronoScale is looking for a 10x coding ninja and visionary systems rockstar! We are revolutionizing global state replication. Must possess unmatched grit and 10+ years building hyperscale primitives!

KEY OPERATIONAL DUTIES & RESPONSIBILITIES:
- Designs and implements zero-loss consensus state machines using Raft/Paxos protocol variations in Rust.
- Optimizes disk I/O write paths and LSM-tree compaction algorithms for sub-millisecond tail latency (p99.9).
- Debugs asynchronous race conditions, split-brain cluster partitions, and distributed deadlock topologies.
- Implements comprehensive distributed tracing spans and deterministic chaos testing harnesses (Jepsen).
- Authors RFC architectural proposals and establishes strict formal verification contracts (TLA+).
- Mentors senior engineering staff through structured asynchronous design reviews and post-mortems.

HIRING REQUIREMENTS:
- Master of Science in Computer Science or demonstrated systems architecture mastery.
- Expert-level proficiency in systems languages (Rust, Go, C++).
- Passionate about high-speed data structures!`,
    candidateDNA: {
      candidateId: 'cand-marcus-vance-02',
      name: 'Marcus Vance',
      currentRoleProvenance: 'Principal Systems Architect, HyperMesh DB',
      location: 'Austin, TX',
      evidenceRegistry: {
        IDENTITY: [
          {
            evidence_id: 'EV-SYS-ID-01',
            domain: 'IDENTITY',
            governing_verb: 'Located',
            entity: 'Austin, TX (Remote infrastructure contributor)',
            authority: 'DIRECT',
            provenance: { source: 'Profile', section: 'Contact' },
            confidence: 1.0,
            attributes: { availability: '2 weeks' }
          }
        ],
        WORK_HISTORY: [
          {
            evidence_id: 'EV-SYS-WH-01',
            domain: 'WORK_HISTORY',
            governing_verb: 'Authored',
            entity: 'Production Raft consensus engine in Rust supporting 1.2M writes/sec',
            authority: 'DIRECT',
            provenance: { source: 'HyperMesh_Tech_Report.pdf', section: 'Core Engine Architecture' },
            confidence: 0.99,
            attributes: { language: 'Rust', throughput: '1.2M writes/sec', zeroLoss: true }
          },
          {
            evidence_id: 'EV-SYS-WH-02',
            domain: 'WORK_HISTORY',
            governing_verb: 'Optimized',
            entity: 'LSM-tree WAL flush pipeline reducing p99.9 write latency from 14ms to 0.8ms',
            authority: 'DIRECT',
            provenance: { source: 'HyperMesh_Tech_Report.pdf', section: 'I/O Profiling' },
            confidence: 0.96,
            attributes: { latencyReduction: '94%', p99_9_ms: 0.8 }
          },
          {
            evidence_id: 'EV-SYS-WH-03',
            domain: 'WORK_HISTORY',
            governing_verb: 'Engineered',
            entity: 'Automated Jepsen chaos testing framework injecting network partitions and clock drift',
            authority: 'DIRECT',
            provenance: { source: 'Chaos_Test_Suite_Summary.pdf', section: 'Verification' },
            confidence: 0.94,
            attributes: { bugsDiscoveredPreRelease: 18 }
          }
        ],
        EDUCATION_COMPETENCY: [
          {
            evidence_id: 'EV-SYS-EDU-01',
            domain: 'EDUCATION_COMPETENCY',
            governing_verb: 'Completed',
            entity: 'M.S. in Computer Science (Distributed Systems Focus), Carnegie Mellon University',
            authority: 'DIRECT',
            provenance: { source: 'CMU_Diploma.pdf', section: 'Master Degree' },
            confidence: 1.0,
            attributes: { thesis: 'Deterministic Fault Injection in Consensus Protocols' }
          }
        ],
        CREATIVE_WORKS: [
          {
            evidence_id: 'EV-SYS-CW-01',
            domain: 'CREATIVE_WORKS',
            governing_verb: 'Published',
            entity: 'Open-source Rust crate for lightweight TLA+ model-checking state assertions (1.4k stars)',
            authority: 'DIRECT',
            provenance: { source: 'GitHub_Repository.json', section: 'Open Source' },
            confidence: 0.97,
            attributes: { repo: 'github.com/mvance/raft-tla-rs', stars: 1420 }
          }
        ],
        PSYCHOMETRICS: [
          {
            evidence_id: 'EV-SYS-PSY-01',
            domain: 'PSYCHOMETRICS',
            governing_verb: 'Demonstrated',
            entity: 'Rigorous empirical skepticism and formal verification mindset over intuitive reasoning',
            authority: 'STATIONARY',
            provenance: { source: 'Peer_Review_Assessments.pdf', section: 'Cognitive Style' },
            confidence: 0.91,
            attributes: { methodology: 'Formal invariants' }
          }
        ],
        TESTIMONY_BEHAVIOR: [
          {
            evidence_id: 'EV-SYS-TES-01',
            domain: 'TESTIMONY_BEHAVIOR',
            governing_verb: 'Validated',
            entity: 'CTO HyperMesh: Marcus catches distributed concurrency flaws during design phases that would take months to diagnose in production',
            authority: 'STATIONARY',
            provenance: { source: 'CTO_Reference_Note.pdf', section: 'Evaluation' },
            confidence: 0.97,
            attributes: { evaluator: 'CTO, HyperMesh Systems' }
          }
        ]
      }
    },
    precomputedQueryBundle: {
      targetTitleProvenance: 'Staff Distributed Systems Engineer - Core Storage',
      corePurpose: 'Guarantees sub-millisecond linearizable state storage and cluster stability across hardware partitions and adversarial network faults.',
      coreMetaphor: 'Consensus Architect & State Machine Invariant Guardian',
      naicsAnchor: {
        code: '541511',
        title: 'Custom Computer Programming Services (Systems & Infrastructure)',
        rationale: 'Low-level distributed systems runtime development and consensus engine programming.',
        matchType: 'HOT_MATCH',
        system: 'NAICS'
      },
      onetAnchor: {
        code: '15-1252.00',
        title: 'Software Developers (Systems Software)',
        rationale: 'Direct core memory, disk I/O, and protocol concurrency engineering.',
        matchType: 'HOT_MATCH',
        system: 'ONET_SOC'
      },
      demandPrimitives: [
        {
          id: 'DP-SYS-01',
          actor: 'Incumbent',
          action: 'Implements consensus state machines',
          object: 'Zero-loss replication protocol engines in Rust',
          relationship: 'AUTHORITY',
          mechanism: 'Raft/Paxos algorithm implementation and formal verification',
          effect: 'Guarantees linearizability and zero data loss under network partitions',
          demand_type: 'ABILITY',
          provenance: 'Duties paragraph 1: "Designs and implements zero-loss consensus state machines..."',
          isCritical: true
        },
        {
          id: 'DP-SYS-02',
          actor: 'Incumbent',
          action: 'Optimizes write paths',
          object: 'Disk I/O and LSM-tree compaction engines',
          relationship: 'AUTHORITY',
          mechanism: 'Lock-free concurrency and memory-mapped append logs',
          effect: 'Achieves sub-millisecond tail latency (p99.9)',
          demand_type: 'SKILL',
          provenance: 'Duties paragraph 2: "Optimizes disk I/O write paths and LSM-tree compaction..."',
          isCritical: true
        },
        {
          id: 'DP-SYS-03',
          actor: 'Incumbent',
          action: 'Executes chaos testing',
          object: 'Cluster partition topologies and clock skews',
          relationship: 'AUTHORITY',
          mechanism: 'Jepsen test suites and deterministic fault injection',
          effect: 'Identifies split-brain regressions prior to production deployment',
          demand_type: 'ABILITY',
          provenance: 'Duties paragraph 4: "Implements comprehensive distributed tracing spans and deterministic chaos..."',
          isCritical: true
        }
      ],
      negativeSpace: [
        {
          id: 'NS-SYS-01',
          assertion: 'NOT a Frontend/Fullstack Web Developer',
          reason: 'Job posting is strictly low-level systems storage, memory layout, and consensus protocols with zero HTML/CSS/UI obligations.',
          sourceText: 'Scope isolation from web layer.'
        }
      ],
      activeReceptors: ['WORK_HISTORY', 'EDUCATION_COMPETENCY', 'CREATIVE_WORKS', 'TESTIMONY_BEHAVIOR'],
      scoutExhaust: [
        {
          id: 'SE-SYS-01',
          text: '10x coding ninja and visionary systems rockstar',
          reason: 'MARKETING_FLUFF',
          originalLocation: 'Intro paragraph'
        },
        {
          id: 'SE-SYS-02',
          text: 'Must possess unmatched grit and 10+ years',
          reason: 'STATIC_CREDENTIAL_FILTER',
          originalLocation: 'Intro paragraph'
        }
      ],
      timestamp: '2026-08-14T20:30:00Z'
    },
    precomputedFrozenSnapshot: {
      freezeHash: '0x41e8c92a77f9036c841bb20d6f112e49c7198d03',
      freezeTimestamp: '2026-08-14T20:30:15Z',
      candidateId: 'cand-marcus-vance-02',
      targetRoleIdentifier: 'Staff Distributed Systems Engineer (ChronoScale)',
      activeWalls: ['WORK_HISTORY', 'EDUCATION_COMPETENCY', 'CREATIVE_WORKS', 'TESTIMONY_BEHAVIOR'],
      boundAtoms: [
        {
          demandId: 'DP-SYS-01',
          evidenceId: 'EV-SYS-WH-01',
          semanticBand: 'CEILING',
          score: 0.99,
          corroborationType: 'CONVERGENT',
          corroboratingEvidenceIds: ['EV-SYS-CW-01', 'EV-SYS-EDU-01'],
          rationale: 'Authored production 1.2M writes/sec Raft engine in Rust with CMU Master thesis in consensus protocols.',
          bandOffset: 0.98
        },
        {
          demandId: 'DP-SYS-02',
          evidenceId: 'EV-SYS-WH-02',
          semanticBand: 'CEILING',
          score: 0.96,
          corroborationType: 'INDEPENDENT',
          rationale: 'Reduced LSM-tree p99.9 latency to 0.8ms (sub-millisecond target surpassed).',
          bandOffset: 0.94
        },
        {
          demandId: 'DP-SYS-03',
          evidenceId: 'EV-SYS-WH-03',
          semanticBand: 'CEILING',
          score: 0.95,
          corroborationType: 'CONVERGENT',
          corroboratingEvidenceIds: ['EV-SYS-TES-01'],
          rationale: 'Built Jepsen chaos harness uncovering 18 concurrency edge cases before release.',
          bandOffset: 0.93
        }
      ],
      maraExhaust: [],
      projectionCenter: { x: 0.95, y: 0.96, z: 0.93 },
      geometricState: {
        ceilingCount: 3,
        aboveBaselineCount: 0,
        baselineCount: 0,
        belowBaselineCount: 0,
        floorCount: 0,
        alignmentRatio: 1.0
      },
      isBlocked: false
    },
    precomputedArtifact: {
      id: 'art-marcus-01',
      type: 'TARGET_RESOLVED_RESUME',
      title: 'Target-Resolved Technical Portfolio: Marcus Vance',
      candidateName: 'Marcus Vance',
      targetRole: 'Staff Distributed Systems Engineer (ChronoScale Storage Architecture)',
      content: `MARCUS VANCE
Austin, TX | M.S. Distributed Systems (CMU) | Rust / Distributed Consensus

CORE DISTRIBUTED SYSTEMS CAPABILITIES:

1. Zero-Loss Consensus State Machines & Protocol Invariants
- Engineered production Raft consensus engine in Rust delivering 1.2M linearizable writes/second with deterministic zero-loss partition tolerance [EV-SYS-WH-01, EV-SYS-EDU-01].
- Created open-source Rust TLA+ verification framework utilized by 1,400+ developers to validate protocol state safety invariants [EV-SYS-CW-01].

2. Low-Latency Storage Subsystems & Write Path Optimization
- Redesigned LSM-tree Write-Ahead Log (WAL) and compaction pipelines, dropping p99.9 tail latency from 14ms to 0.8ms under heavy write amplification [EV-SYS-WH-02].

3. Chaos Fault Injection & Partition Topology Verification
- Constructed automated Jepsen chaos harness injecting network splits and clock drift, catching 18 critical distributed deadlock and split-brain defects prior to production release [EV-SYS-WH-03, EV-SYS-TES-01].`,
      sections: [
        {
          heading: 'Core Distributed Systems Capabilities',
          content: [
            'Engineered production Raft consensus engine in Rust delivering 1.2M linearizable writes/second with deterministic zero-loss partition tolerance [EV-SYS-WH-01, EV-SYS-EDU-01].',
            'Created open-source Rust TLA+ verification framework utilized by 1,400+ developers to validate protocol state safety invariants [EV-SYS-CW-01].',
            'Redesigned LSM-tree Write-Ahead Log (WAL) and compaction pipelines, dropping p99.9 tail latency from 14ms to 0.8ms under heavy write amplification [EV-SYS-WH-02].',
            'Constructed automated Jepsen chaos harness injecting network splits and clock drift, catching 18 critical distributed deadlock and split-brain defects prior to production release [EV-SYS-WH-03, EV-SYS-TES-01].'
          ]
        }
      ],
      traceabilityLinks: [
        {
          artifactSentenceIndex: 0,
          sentenceText: 'Engineered production Raft consensus engine in Rust delivering 1.2M linearizable writes/second with deterministic zero-loss partition tolerance [EV-SYS-WH-01, EV-SYS-EDU-01].',
          boundAtom: {
            demandId: 'DP-SYS-01',
            evidenceId: 'EV-SYS-WH-01',
            semanticBand: 'CEILING',
            score: 0.99,
            corroborationType: 'CONVERGENT',
            rationale: 'Direct evidence of 1.2M write throughput consensus engine.',
            bandOffset: 0.98
          },
          evidencePacket: {
            evidence_id: 'EV-SYS-WH-01',
            domain: 'WORK_HISTORY',
            governing_verb: 'Authored',
            entity: 'Production Raft consensus engine in Rust supporting 1.2M writes/sec',
            authority: 'DIRECT',
            provenance: { source: 'HyperMesh_Tech_Report.pdf', section: 'Core Engine Architecture' },
            confidence: 0.99,
            attributes: { language: 'Rust', throughput: '1.2M writes/sec' }
          },
          demandPrimitive: {
            id: 'DP-SYS-01',
            actor: 'Incumbent',
            action: 'Implements consensus state machines',
            object: 'Zero-loss replication protocol engines in Rust',
            relationship: 'AUTHORITY',
            mechanism: 'Raft/Paxos algorithm implementation and formal verification',
            effect: 'Guarantees linearizability and zero data loss under network partitions',
            demand_type: 'ABILITY',
            provenance: 'Duties paragraph 1'
          }
        }
      ],
      generatedAt: '2026-08-14T20:30:20Z',
      freezeHash: '0x41e8c92a77f9036c841bb20d6f112e49c7198d03'
    }
  }
];
