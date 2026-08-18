import React, { useMemo, useState } from 'react';
import type { CandidateSpatialDNA, EvidenceDomain, FrozenSnapshot, PipelineStageNumber, QueryBundle, SemanticBand } from '../types';
import { ArrowRight, Database, Lock, ShieldCheck, Target } from 'lucide-react';
import { EVIDENCE_DOMAINS, normalizeCandidateDNA } from '../governance';

interface MaraViewProps {
  currentStage: PipelineStageNumber;
  setStage: (stage: PipelineStageNumber) => void;
  queryBundle: QueryBundle;
  candidateDNA: CandidateSpatialDNA;
  frozenSnapshot: FrozenSnapshot;
  onProceedToArtifact: () => void;
  isAiRunning: boolean;
}

const LABELS: Record<EvidenceDomain, string> = {
  WORK_HISTORY: 'Work History',
  EDUCATION_COMPETENCY: 'Education & Technical Competency',
  CREATIVE_WORKS: 'Creative Works & Projects',
  PSYCHOMETRICS: 'Psychometric & Cognitive',
  TESTIMONY_BEHAVIOR: 'References / Publications / Testimony / Observed Behavior',
};

const bandClass = (band: SemanticBand) => {
  if (band === 'FLOOR') return 'text-rose-300 border-rose-800 bg-rose-950/30';
  if (band === 'CEILING') return 'text-emerald-300 border-emerald-800 bg-emerald-950/30';
  return 'text-slate-300 border-slate-700 bg-slate-900';
};

export const MaraView: React.FC<MaraViewProps> = ({ currentStage, setStage, queryBundle, candidateDNA, frozenSnapshot, onProceedToArtifact, isAiRunning }) => {
  const canonical = useMemo(() => normalizeCandidateDNA(candidateDNA), [candidateDNA]);
  const [selectedDemandId, setSelectedDemandId] = useState(frozenSnapshot.boundAtoms[0]?.demandId || '');
  const selectedAtom = frozenSnapshot.boundAtoms.find((item) => item.demandId === selectedDemandId);
  const selectedDemand = queryBundle.demandPrimitives.find((item) => item.id === selectedDemandId);
  const selectedEvidence = frozenSnapshot.renderContext?.evidence.find((item) => item.evidence_id === selectedAtom?.evidenceId);
  const stage6Passed = frozenSnapshot.executionState?.gates[6]?.status === 'PASSED';

  return (
    <div className="space-y-6">
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
        <div className="flex justify-between gap-4 items-start">
          <div className="flex gap-3"><Database className="w-5 h-5 text-indigo-400 mt-1" /><div><h2 className="text-lg font-bold">Machine 2: MARA (Binding & Traversal Engine)</h2><p className="text-xs text-slate-300 mt-1">Read-only traversal from Candidate Core across the five evidence domains. Candidate Core is not a wall or evidence domain.</p></div></div>
          {currentStage === 6 && <button disabled={!stage6Passed || isAiRunning} onClick={onProceedToArtifact} className="px-4 py-2 rounded-lg bg-indigo-700 disabled:opacity-40 text-xs font-semibold flex items-center gap-2"><Lock className="w-4 h-4" /> Handoff Frozen Snapshot <ArrowRight className="w-4 h-4" /></button>}
        </div>
        <div className="flex gap-2 mt-4 pt-4 border-t border-slate-800 text-xs">{[4,5,6].map((stage) => <button key={stage} onClick={() => setStage(stage as PipelineStageNumber)} className={`px-3 py-1.5 rounded-lg ${currentStage === stage ? 'bg-indigo-950 text-indigo-200 border border-indigo-700' : 'bg-slate-950 text-slate-400'}`}>Stage {stage}</button>)}</div>
      </div>

      {currentStage === 4 && (
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4"><Target className="w-4 h-4 text-cyan-400" /><h3 className="text-sm font-bold">Candidate Core</h3></div>
            <div className="space-y-2 text-xs"><div><span className="text-slate-500">Candidate ID:</span> {canonical.candidateCore.candidateId}</div><div><span className="text-slate-500">Name:</span> {canonical.candidateCore.name}</div><div><span className="text-slate-500">Location:</span> {canonical.candidateCore.location || '—'}</div></div>
            <div className="mt-4 p-3 border border-cyan-900 rounded-xl text-xs text-cyan-200 bg-cyan-950/20">Identity & biographical information belongs here. It is not admitted into the Evidence Registry as an evidence domain.</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-sm font-bold mb-4">Five-Domain Evidence Registry</h3>
            <div className="space-y-2">{EVIDENCE_DOMAINS.map((domain) => <div key={domain} className="flex justify-between text-xs p-3 rounded-lg bg-slate-950 border border-slate-800"><span>{LABELS[domain]}</span><span className="font-mono text-indigo-300">{canonical.evidenceRegistry[domain].length} packets</span></div>)}</div>
            <div className="mt-4 text-[11px] text-amber-300">Protected YELLOW boundary: this repair does not decide whether four active semantic walls remain four or who owns receptor selection.</div>
          </div>
        </div>
      )}

      {currentStage === 5 && (
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-2">{frozenSnapshot.boundAtoms.map((atom) => <button key={`${atom.demandId}:${atom.evidenceId}`} onClick={() => setSelectedDemandId(atom.demandId)} className={`w-full text-left p-3 rounded-xl border ${selectedDemandId === atom.demandId ? 'border-indigo-500 bg-indigo-950/30' : 'border-slate-800 bg-slate-900'}`}><div className="flex justify-between gap-2"><span className="font-mono text-xs text-indigo-300">{atom.demandId}</span><span className={`text-[10px] px-2 py-0.5 rounded border ${bandClass(atom.semanticBand)}`}>{atom.semanticBand}</span></div><div className="text-xs mt-1">Evidence: {atom.evidenceId}</div></button>)}</div>
          <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-5 text-xs">
            {selectedAtom && selectedDemand && selectedEvidence ? <div className="space-y-3"><div><span className="text-slate-500">Demand:</span> {selectedDemand.action} {selectedDemand.object}</div><div><span className="text-slate-500">Evidence:</span> {selectedEvidence.governing_verb} {selectedEvidence.entity}</div><div><span className="text-slate-500">Proposition:</span> {selectedEvidence.propositionId}</div><div><span className="text-slate-500">Source lineage:</span> {selectedEvidence.sourceLineageId}</div><div><span className="text-slate-500">Extraction confidence:</span> {selectedEvidence.extractionConfidence}</div><div><span className="text-slate-500">Authority ceiling:</span> {selectedEvidence.authorityCeiling} {selectedEvidence.authorityVerified ? '(verified)' : '(unverified)'}</div><div><span className="text-slate-500">Independence:</span> {selectedEvidence.independence}</div><div><span className="text-slate-500">Corroboration:</span> {selectedEvidence.corroborationState}</div><div><span className="text-slate-500">Contradiction:</span> {selectedEvidence.contradictionState}</div></div> : <div className="text-slate-500">No valid frozen-bound evidence selected.</div>}
          </div>
        </div>
      )}

      {currentStage === 6 && (
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5"><h3 className="text-sm font-bold mb-3">MARA Exhaust</h3><div className="space-y-2">{frozenSnapshot.maraExhaust.map((item) => <div key={item.id} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs"><div className="font-mono text-amber-300">{item.reason}</div><div className="mt-1">{item.demandPrimitive.action} {item.demandPrimitive.object}</div><div className="text-slate-500 mt-1">{item.detailedAnalysis}</div></div>)}</div><div className="mt-4 text-[11px] text-slate-500">A non-bind records the current evidence relationship; it is not automatically a candidate deficiency.</div></div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5"><div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /><h3 className="text-sm font-bold">Frozen Boundary</h3></div><div className="mt-3 space-y-2 text-xs"><div><span className="text-slate-500">Schema:</span> {frozenSnapshot.schemaVersion || 'legacy snapshot'}</div><div><span className="text-slate-500">Hash:</span> <span className="font-mono break-all">{frozenSnapshot.freezeHash}</span></div><div><span className="text-slate-500">Renderer context:</span> {frozenSnapshot.renderContext ? 'self-contained' : 'missing'}</div><div><span className="text-slate-500">Projection sufficiency:</span> {frozenSnapshot.projectionSufficiency?.satisfied === null ? 'policy unresolved' : String(frozenSnapshot.projectionSufficiency?.satisfied)}</div></div></div>
        </div>
      )}
    </div>
  );
};
