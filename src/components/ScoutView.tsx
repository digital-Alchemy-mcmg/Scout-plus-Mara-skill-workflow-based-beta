import React, { useState } from 'react';
import { QueryBundle, DemandPrimitive, PipelineStageNumber, ScoutExhaustItem } from '../types';
import {
  Cpu,
  Trash2,
  CheckCircle2,
  Layers,
  ArrowRight,
  Shield,
  Search,
  Tag,
  FileCheck,
  AlertCircle,
  Hash,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

interface ScoutViewProps {
  currentStage: PipelineStageNumber;
  setStage: (stage: PipelineStageNumber) => void;
  rawJobPosting: string;
  queryBundle: QueryBundle;
  onProceedToMara: () => void;
  isAiRunning: boolean;
}

export const ScoutView: React.FC<ScoutViewProps> = ({
  currentStage,
  setStage,
  rawJobPosting,
  queryBundle,
  onProceedToMara,
  isAiRunning,
}) => {
  const [selectedMoleculeId, setSelectedMoleculeId] = useState<string>(
    queryBundle.demandPrimitives[0]?.id || ''
  );
  const [activeSubTab, setActiveSubTab] = useState<'all' | 'critical' | 'negative'>('all');

  const selectedMolecule = queryBundle.demandPrimitives.find((m) => m.id === selectedMoleculeId) || queryBundle.demandPrimitives[0];

  return (
    <div className="space-y-6">
      
      {/* Machine Context Banner */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-700/60 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">Machine 1: SCOUT (Target Compiler)</h2>
                <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-cyan-950/90 text-cyan-300 border border-cyan-800">
                  Stage {currentStage} of 7
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 max-w-3xl">
                Deconstructs raw job postings into canonical, reversible <strong className="text-cyan-300">Demand Primitives</strong> while filtering out marketing fluff (SCOUT Exhaust). Applies the <em>"Box Before Lens"</em> rule before classification.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {currentStage < 3 ? (
              <button
                onClick={() => setStage((currentStage + 1) as PipelineStageNumber)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg shadow transition-colors flex items-center gap-1.5"
              >
                <span>Proceed to Stage {currentStage + 1}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={onProceedToMara}
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold rounded-lg shadow-lg transition-all flex items-center gap-2"
              >
                <span>Handoff to MARA (Stage 4)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Stage Sub-Navigator */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-800">
          <button
            onClick={() => setStage(1)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              currentStage === 1
                ? 'bg-cyan-950 border border-cyan-600 text-cyan-300'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Stage 1: Intake & Filtration
          </button>
          <button
            onClick={() => setStage(2)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              currentStage === 2
                ? 'bg-cyan-950 border border-cyan-600 text-cyan-300'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Stage 2: Reversible Decomposition
          </button>
          <button
            onClick={() => setStage(3)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              currentStage === 3
                ? 'bg-cyan-950 border border-cyan-600 text-cyan-300'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Stage 3: NAICS / O*NET Diagnostics
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* STAGE 1: INTAKE & FILTRATION                                              */}
      {/* ========================================================================= */}
      {currentStage === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Raw Source Posting with highlighted matter */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white">Source Input (Job Posting Artifact)</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Preserved Provenance</span>
            </div>

            <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 text-xs font-mono text-slate-300 leading-relaxed overflow-y-auto max-h-[460px] whitespace-pre-wrap selection:bg-cyan-900 selection:text-white">
              {rawJobPosting}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Governed by: <strong>LOGC-01 (Admission Rule)</strong></span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> De-commoditization Active
              </span>
            </div>
          </div>

          {/* Right Column: SCOUT Exhaust (Discarded Fluff) vs Admitted Operational Matter */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* SCOUT Exhaust Box */}
            <div className="bg-amber-950/20 border border-amber-800/60 rounded-2xl p-5">
              <div className="flex items-center justify-between pb-3 border-b border-amber-800/40 mb-3">
                <div className="flex items-center gap-2">
                  <Trash2 className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-amber-200">SCOUT Exhaust (Discarded Noise)</h3>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700">
                  {queryBundle.scoutExhaust.length} Discarded Items
                </span>
              </div>

              <p className="text-xs text-amber-300/80 mb-3">
                Material stripped under <strong>NO_FLUFF_ADMISSION</strong> and <strong>NO_TITLE_EVIDENCE</strong>. This matter will never enter the query receptor set.
              </p>

              <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
                {queryBundle.scoutExhaust.map((item) => (
                  <div
                    key={item.id}
                    className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-800/40 flex flex-col gap-1 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-amber-300 font-medium line-through">"{item.text}"</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-900 text-amber-200">
                        {item.reason.replace(/_/g, ' ')}
                      </span>
                    </div>
                    <span className="text-[10px] text-amber-400/60 font-mono">Location: {item.originalLocation}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Purpose & Metaphor Extracted */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800 mb-3">
                <Shield className="w-4 h-4 text-indigo-400" />
                <h3 className="text-sm font-bold text-white">Extracted Existential Purpose</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-[11px] uppercase font-mono text-indigo-400 font-semibold mb-1">
                    Existential "Why" (Operational Breakdown Failure)
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-indigo-900/40 text-xs text-slate-200 leading-relaxed">
                    "{queryBundle.corePurpose}"
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase font-mono text-cyan-400 font-semibold mb-1">
                    Role Metaphor (Operational Persona)
                  </div>
                  <div className="p-2.5 bg-slate-950 rounded-xl border border-cyan-900/40 text-xs text-cyan-200 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {queryBundle.coreMetaphor}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STAGE 2: REVERSIBLE DECOMPOSITION (DEMAND MOLECULES)                      */}
      {/* ========================================================================= */}
      {currentStage === 2 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Molecule List Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white">Demand Molecules</h3>
              </div>
              
              <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveSubTab('all')}
                  className={`px-2 py-0.5 rounded ${activeSubTab === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
                >
                  All ({queryBundle.demandPrimitives.length})
                </button>
                <button
                  onClick={() => setActiveSubTab('critical')}
                  className={`px-2 py-0.5 rounded ${activeSubTab === 'critical' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
                >
                  Critical ({queryBundle.demandPrimitives.filter((d) => d.isCritical).length})
                </button>
                <button
                  onClick={() => setActiveSubTab('negative')}
                  className={`px-2 py-0.5 rounded ${activeSubTab === 'negative' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
                >
                  NOT X ({queryBundle.negativeSpace.length})
                </button>
              </div>
            </div>

            {/* List of molecules */}
            {activeSubTab !== 'negative' ? (
              <div className="space-y-2 max-h-[560px] overflow-y-auto pr-1">
                {queryBundle.demandPrimitives
                  .filter((dp) => (activeSubTab === 'critical' ? dp.isCritical : true))
                  .map((dp) => {
                    const isSelected = dp.id === selectedMoleculeId;
                    return (
                      <div
                        key={dp.id}
                        onClick={() => setSelectedMoleculeId(dp.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-indigo-950/60 border-indigo-500 shadow-md ring-1 ring-indigo-500/30'
                            : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-[11px] font-bold text-cyan-400">{dp.id}</span>
                            <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                              {dp.relationship}
                            </span>
                            {dp.isCritical && (
                              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-rose-950 text-rose-300 border border-rose-800">
                                Critical
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] font-mono text-slate-500">{dp.demand_type}</span>
                        </div>
                        <div className="text-xs font-semibold text-white truncate">
                          {dp.action} <span className="text-slate-300 font-normal">{dp.object}</span>
                        </div>
                        <div className="text-[11px] text-slate-400 truncate mt-1">
                          Mechanism: {dp.mechanism}
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              /* Negative Space Assertions */
              <div className="space-y-3">
                {queryBundle.negativeSpace.map((ns) => (
                  <div key={ns.id} className="p-3.5 rounded-xl bg-slate-900 border border-rose-900/50">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-xs mb-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{ns.assertion}</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">{ns.reason}</p>
                    {ns.sourceText && (
                      <span className="text-[10px] font-mono text-slate-500 mt-2 block">
                        Source: {ns.sourceText}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Molecule Inspector Card (SCHM-01 Details) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-indigo-400" />
                <h3 className="text-sm font-bold text-white">
                  Molecule Inspector: <span className="text-indigo-400 font-mono">{selectedMolecule.id}</span>
                </h3>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                SCHM-01 Compliant
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Actor</span>
                <span className="font-semibold text-slate-200">{selectedMolecule.actor}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Governing Action Verb</span>
                <span className="font-semibold text-cyan-300">{selectedMolecule.action}</span>
              </div>

              <div className="sm:col-span-2 p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Object of Action</span>
                <span className="font-semibold text-slate-200">{selectedMolecule.object}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Relationship Type</span>
                <span className="font-semibold text-indigo-300">{selectedMolecule.relationship}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Demand Type</span>
                <span className="font-semibold text-emerald-300">{selectedMolecule.demand_type}</span>
              </div>

              <div className="sm:col-span-2 p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Mechanism (The Process)</span>
                <p className="text-slate-300 leading-relaxed">{selectedMolecule.mechanism}</p>
              </div>

              <div className="sm:col-span-2 p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Effect (Operational Output)</span>
                <p className="text-slate-300 leading-relaxed">{selectedMolecule.effect}</p>
              </div>

              <div className="sm:col-span-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="text-[10px] uppercase font-mono text-slate-500 block mb-1">Source Provenance</span>
                "{selectedMolecule.provenance}"
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* STAGE 3: CLASSIFICATION & COMPREHENSION DIAGNOSTICS                       */}
      {/* ========================================================================= */}
      {currentStage === 3 && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-800 mb-6">
              <FileCheck className="w-5 h-5 text-emerald-400" />
              <div>
                <h3 className="text-base font-bold text-white">Stage 3: Comprehension Diagnostics (Hot-Match Validation)</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Proves SCOUT's understanding of the economic activity before initiating MARA candidate traversal.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* NAICS Card */}
              <div className="p-5 rounded-xl bg-slate-950 border border-cyan-900/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-400">NAICS Industry Anchor</span>
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                      {queryBundle.naicsAnchor.matchType}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white font-mono">{queryBundle.naicsAnchor.code}</div>
                  <div className="text-sm font-semibold text-slate-200 mt-1">{queryBundle.naicsAnchor.title}</div>
                  
                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Economic Rationale</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{queryBundle.naicsAnchor.rationale}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Cold Match Rejected: Retail (4481)</span>
                  <span className="text-emerald-400">Hot Match Confirmed</span>
                </div>
              </div>

              {/* O*NET Card */}
              <div className="p-5 rounded-xl bg-slate-950 border border-indigo-900/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-indigo-400">O*NET / SOC Occupation Anchor</span>
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                      {queryBundle.onetAnchor.matchType}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white font-mono">{queryBundle.onetAnchor.code}</div>
                  <div className="text-sm font-semibold text-slate-200 mt-1">{queryBundle.onetAnchor.title}</div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Occupational Rationale</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{queryBundle.onetAnchor.rationale}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Reversible Decomposition: Verified</span>
                  <span className="text-emerald-400">SOC Matched</span>
                </div>
              </div>

            </div>

            {/* Exit Gate Confirmation */}
            <div className="mt-6 p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-900/80 flex items-center justify-center text-emerald-300 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-200">Stage 3 Exit Gate Satisfied (mara_ready = TRUE)</div>
                  <p className="text-[11px] text-emerald-300/80">
                    The Target Compiler has produced an admissible Query Bundle conforming to INTF-01 (Interface A).
                  </p>
                </div>
              </div>

              <button
                onClick={onProceedToMara}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow transition-colors flex items-center gap-1.5 shrink-0"
              >
                <span>Handoff to MARA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
