import React, { useState } from 'react';
import {
  QueryBundle,
  CandidateSpatialDNA,
  FrozenSnapshot,
  PipelineStageNumber,
  EvidenceDomain,
  BoundAtom,
  SemanticBand,
  MaraExhaustItem,
} from '../types';
import {
  Database,
  Lock,
  Compass,
  ArrowRight,
  Shield,
  Activity,
  Layers,
  CheckCircle,
  AlertTriangle,
  FileCheck,
  ChevronRight,
  Hash,
  Sparkles,
  Link,
  Target,
} from 'lucide-react';

interface MaraViewProps {
  currentStage: PipelineStageNumber;
  setStage: (stage: PipelineStageNumber) => void;
  queryBundle: QueryBundle;
  candidateDNA: CandidateSpatialDNA;
  frozenSnapshot: FrozenSnapshot;
  onProceedToArtifact: () => void;
  isAiRunning: boolean;
}

const ALL_DOMAINS: Array<{ key: EvidenceDomain; label: string; count: number }> = [
  { key: 'IDENTITY', label: 'Identity & Core Bounded Data', count: 1 },
  { key: 'WORK_HISTORY', label: 'Work History & Production Tenure', count: 5 },
  { key: 'EDUCATION_COMPETENCY', label: 'Education & Technical Competency', count: 2 },
  { key: 'CREATIVE_WORKS', label: 'Creative Works, Code & Systems', count: 1 },
  { key: 'PSYCHOMETRICS', label: 'Psychometrics & Cognitive Profiles', count: 1 },
  { key: 'TESTIMONY_BEHAVIOR', label: 'Testimony, References & Behavior', count: 1 },
];

export const MaraView: React.FC<MaraViewProps> = ({
  currentStage,
  setStage,
  queryBundle,
  candidateDNA,
  frozenSnapshot,
  onProceedToArtifact,
  isAiRunning,
}) => {
  const [selectedBoundAtomDemandId, setSelectedBoundAtomDemandId] = useState<string>(
    frozenSnapshot.boundAtoms[0]?.demandId || ''
  );
  const [filterBand, setFilterBand] = useState<string>('ALL');

  const selectedBoundAtom =
    frozenSnapshot.boundAtoms.find((b) => b.demandId === selectedBoundAtomDemandId) ||
    frozenSnapshot.boundAtoms[0];

  const selectedDemandPrimitive = queryBundle.demandPrimitives.find(
    (d) => d.id === selectedBoundAtom?.demandId
  );

  // Find evidence packet from registry
  let selectedEvidencePacket: any = null;
  if (selectedBoundAtom) {
    Object.values(candidateDNA.evidenceRegistry).forEach((list: any) => {
      const found = list.find((e: any) => e.evidence_id === selectedBoundAtom.evidenceId);
      if (found) selectedEvidencePacket = found;
    });
  }

  // Calculate band color
  const getBandBadge = (band: SemanticBand) => {
    switch (band) {
      case 'CEILING':
        return <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700 text-[10px] font-mono">CEILING (Exceeds)</span>;
      case 'ABOVE_BASELINE':
        return <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-700 text-[10px] font-mono">ABOVE BASELINE</span>;
      case 'BASELINE':
        return <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[10px] font-mono">BASELINE (Present)</span>;
      case 'BELOW_BASELINE':
        return <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700 text-[10px] font-mono">BELOW BASELINE</span>;
      case 'FLOOR':
        return <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-700 text-[10px] font-mono">FLOOR (Adverse)</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Machine Context Banner */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-700/60 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">Machine 2: MARA (Binding & Traversal Engine)</h2>
                <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-indigo-950/90 text-indigo-300 border border-indigo-800">
                  Stage {currentStage} of 7
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 max-w-3xl">
                Read-only interrogation engine. Traverses candidate <strong className="text-indigo-300">Spatial DNA</strong> from Candidate Origin (Absolute Zero) against the active 4 Semantic Walls. Formulates <strong className="text-rose-400">MARA Exhaust</strong> and locks the <strong className="text-cyan-400">Evidence Boundary Freeze</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {currentStage < 6 ? (
              <button
                onClick={() => setStage((currentStage + 1) as PipelineStageNumber)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg shadow transition-colors flex items-center gap-1.5"
              >
                <span>Proceed to Stage {currentStage + 1}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={onProceedToArtifact}
                className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white text-xs font-semibold rounded-lg shadow-lg transition-all flex items-center gap-2"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Handoff Frozen Snapshot to Stage 7</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Stage Sub-Navigator */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-800">
          <button
            onClick={() => setStage(4)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              currentStage === 4
                ? 'bg-indigo-950 border border-indigo-600 text-indigo-300'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Stage 4: Query Insertion & 4 Walls
          </button>
          <button
            onClick={() => setStage(5)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              currentStage === 5
                ? 'bg-indigo-950 border border-indigo-600 text-indigo-300'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Stage 5: Traversal & Binding Matrix
          </button>
          <button
            onClick={() => setStage(6)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              currentStage === 6
                ? 'bg-indigo-950 border border-indigo-600 text-indigo-300'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Stage 6: MARA Exhaust & Boundary Freeze
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* STAGE 4: QUERY INSERTION & 4 ACTIVE SEMANTIC WALLS                        */}
      {/* ========================================================================= */}
      {currentStage === 4 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Active Semantic Walls Card */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-400" />
                <h3 className="text-sm font-bold text-white">4 Active Semantic Walls (Selected Receptors)</h3>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                SCHM-02 Geometry
              </span>
            </div>

            <p className="text-xs text-slate-300">
              MARA selects 4 active projection walls from the 6 candidate evidence domains based on the target demand profile:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ALL_DOMAINS.map((dom) => {
                const isActive = queryBundle.activeReceptors.includes(dom.key);
                return (
                  <div
                    key={dom.key}
                    className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                      isActive
                        ? 'bg-indigo-950/50 border-indigo-500 text-white shadow-sm ring-1 ring-indigo-500/30'
                        : 'bg-slate-950/40 border-slate-800 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold">{dom.key}</span>
                      {isActive ? (
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-indigo-900 text-indigo-200">
                          Active Wall
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-slate-600">Dormant</span>
                      )}
                    </div>
                    <div className="text-xs font-medium text-slate-300">{dom.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Candidate Origin & Spatial Geometry Anchor */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white">Candidate Origin (Absolute Zero)</h3>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">Read-Only Immutable</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Candidate Identity:</span>
                <span className="font-bold text-white font-mono">{candidateDNA.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Candidate ID:</span>
                <span className="font-mono text-slate-300">{candidateDNA.candidateId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Current Provenance:</span>
                <span className="text-slate-200">{candidateDNA.currentRoleProvenance}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Registered Evidence Packets:</span>
                <span className="font-mono text-cyan-400">
                  {Object.values(candidateDNA.evidenceRegistry).reduce((acc: number, l: any) => acc + (l?.length || 0), 0)} immutable packets
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-200 leading-relaxed">
              <strong className="text-indigo-300 block mb-1">Governing Axiom: Candidate Immutability (LOGC-01)</strong>
              MARA queries the candidate without modifying or writing back to candidate DNA. Projections are temporary, query-relative views.
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* STAGE 5: BINDING & SPATIAL TRAVERSAL MATRIX                               */}
      {/* ========================================================================= */}
      {currentStage === 5 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Bound Atoms List & Filters */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold text-white">Binding Atoms ({frozenSnapshot.boundAtoms.length})</h3>
              </div>
              
              <select
                value={filterBand}
                onChange={(e) => setFilterBand(e.target.value)}
                className="bg-slate-950 border border-slate-800 text-xs text-slate-300 rounded px-2 py-1"
              >
                <option value="ALL">All Bands</option>
                <option value="CEILING">Ceiling Only</option>
                <option value="ABOVE_BASELINE">Above Baseline</option>
              </select>
            </div>

            <div className="space-y-2 max-h-[560px] overflow-y-auto pr-1">
              {frozenSnapshot.boundAtoms
                .filter((b) => (filterBand === 'ALL' ? true : b.semanticBand === filterBand))
                .map((atom) => {
                  const dp = queryBundle.demandPrimitives.find((d) => d.id === atom.demandId);
                  const isSelected = atom.demandId === selectedBoundAtomDemandId;
                  return (
                    <div
                      key={atom.demandId}
                      onClick={() => setSelectedBoundAtomDemandId(atom.demandId)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-indigo-950/70 border-indigo-500 shadow-md ring-1 ring-indigo-500/30'
                          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-xs font-bold text-indigo-400">{atom.demandId}</span>
                        {getBandBadge(atom.semanticBand)}
                      </div>
                      <div className="text-xs font-semibold text-white truncate">
                        {dp?.action} {dp?.object}
                      </div>
                      <div className="flex items-center justify-between mt-2 text-[11px] text-slate-400">
                        <span className="font-mono text-slate-500">Evidence: {atom.evidenceId}</span>
                        <span className="font-mono text-emerald-400 font-medium">Score: {(atom.score * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Right Column: Deep Binding Inspector */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Link className="w-4 h-4 text-indigo-400" />
                <h3 className="text-sm font-bold text-white">
                  Binding Inspector: <span className="font-mono text-indigo-300">{selectedBoundAtom?.demandId}</span> ↔ <span className="font-mono text-cyan-300">{selectedBoundAtom?.evidenceId}</span>
                </h3>
              </div>
              {selectedBoundAtom && getBandBadge(selectedBoundAtom.semanticBand)}
            </div>

            {selectedBoundAtom && (
              <div className="space-y-4 text-xs">
                
                {/* Target Demand Primitive */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase text-cyan-400 font-bold mb-1.5">
                    <span>Target Demand (SCOUT SCHM-01)</span>
                    <span>{selectedDemandPrimitive?.demand_type}</span>
                  </div>
                  <div className="font-semibold text-slate-200 text-sm mb-1">
                    {selectedDemandPrimitive?.action} {selectedDemandPrimitive?.object}
                  </div>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    Mechanism: {selectedDemandPrimitive?.mechanism}
                  </p>
                </div>

                {/* Candidate Evidence Packet */}
                <div className="p-4 rounded-xl bg-slate-950 border border-indigo-900/60">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase text-indigo-400 font-bold mb-1.5">
                    <span>Bound Candidate Evidence (MARA SCHM-02)</span>
                    <span className="text-emerald-400">Confidence: {(selectedEvidencePacket?.confidence * 100 || 95)}%</span>
                  </div>
                  <div className="font-semibold text-white text-sm mb-1">
                    {selectedEvidencePacket?.governing_verb} {selectedEvidencePacket?.entity}
                  </div>
                  <div className="text-slate-400 text-xs mt-2 font-mono">
                    Provenance: {selectedEvidencePacket?.provenance?.source} ({selectedEvidencePacket?.provenance?.section})
                  </div>
                </div>

                {/* Corroboration & Traversal Rationale */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Corroboration Logic</span>
                    <span className="font-bold text-slate-200 font-mono">{selectedBoundAtom.corroborationType}</span>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      {selectedBoundAtom.corroborationType === 'CONVERGENT'
                        ? 'Multiple independent planes reinforce this capability.'
                        : 'Single high-authority evidence packet.'}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Spatial Band Offset</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-emerald-500 h-full rounded-full"
                          style={{ width: `${selectedBoundAtom.bandOffset * 100}%` }}
                        />
                      </div>
                      <span className="font-mono text-emerald-400 font-bold">{(selectedBoundAtom.bandOffset * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                </div>

                {/* Traversal Reasoning */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Binding Rationale</span>
                  <p className="text-slate-200 leading-relaxed">{selectedBoundAtom.rationale}</p>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STAGE 6: MARA EXHAUST & EVIDENCE BOUNDARY FREEZE                         */}
      {/* ========================================================================= */}
      {currentStage === 6 && (
        <div className="space-y-6">
          
          {/* Dual Exhaust Comparison Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* MARA Exhaust Card (Legitimate Gaps) */}
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-800/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-rose-800/40 mb-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    <h3 className="text-sm font-bold text-rose-200">MARA Exhaust (Candidate Gaps)</h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
                    {frozenSnapshot.maraExhaust.length} Gaps Detected
                  </span>
                </div>

                <p className="text-xs text-rose-300/80 mb-3 leading-relaxed">
                  Legitimate target job demands that failed to bind to candidate evidence. Under <strong>LOGC-01 (NO_UNSUPPORTED_NEG)</strong>, absence of evidence is not negative; it represents an unresolved gap.
                </p>

                {frozenSnapshot.maraExhaust.length > 0 ? (
                  <div className="space-y-3">
                    {frozenSnapshot.maraExhaust.map((mex) => (
                      <div key={mex.id} className="p-3 rounded-xl bg-rose-950/40 border border-rose-900/60 text-xs">
                        <div className="flex items-center justify-between font-mono font-bold text-rose-300 mb-1">
                          <span>{mex.demandPrimitive.action} {mex.demandPrimitive.object}</span>
                          <span className="text-[10px] uppercase px-1.5 py-0.2 rounded bg-rose-900 text-rose-200">
                            Reason: {mex.reason}
                          </span>
                        </div>
                        <p className="text-slate-300 text-[11px] mt-1 leading-relaxed">{mex.detailedAnalysis}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-slate-950/60 text-center text-xs text-emerald-400 font-medium">
                    Zero MARA Exhaust gaps detected (100% Demand Binding).
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-rose-900/60 text-[10px] font-mono text-rose-400/80">
                Rule: Never conflate MARA Exhaust (Candidate Gaps) with SCOUT Exhaust (Source Fluff).
              </div>
            </div>

            {/* Evidence Boundary Freeze Card */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-800/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-cyan-800/40 mb-3">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-sm font-bold text-cyan-200">Evidence Boundary Freeze (INTF-01)</h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    LOCKED
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-cyan-900/40">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Cryptographic Freeze Hash</span>
                    <span className="font-mono text-cyan-300 text-[11px] break-all">{frozenSnapshot.freezeHash}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block">Ceiling Binds</span>
                      <span className="text-base font-bold text-emerald-400 font-mono">
                        {frozenSnapshot.geometricState.ceilingCount}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block">Alignment Ratio</span>
                      <span className="text-base font-bold text-cyan-400 font-mono">
                        {(frozenSnapshot.geometricState.alignmentRatio * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-cyan-900/60 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">projection_blocked: FALSE</span>
                <button
                  onClick={onProceedToArtifact}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-semibold rounded-lg shadow transition-all flex items-center gap-1.5"
                >
                  <span>Handoff to Stage 7</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
