import React, { useState } from 'react';
import type { PipelineStageNumber, QueryBundle } from '../types';
import { AlertCircle, ArrowRight, CheckCircle2, Cpu, Layers, Search } from 'lucide-react';

interface ScoutViewProps {
  currentStage: PipelineStageNumber;
  setStage: (stage: PipelineStageNumber) => void;
  rawJobPosting: string;
  queryBundle: QueryBundle;
  onProceedToMara: () => void;
  isAiRunning: boolean;
}

export const ScoutView: React.FC<ScoutViewProps> = ({ currentStage, setStage, rawJobPosting, queryBundle, onProceedToMara, isAiRunning }) => {
  const [selectedId, setSelectedId] = useState(queryBundle.demandPrimitives[0]?.id || '');
  const selected = queryBundle.demandPrimitives.find((item) => item.id === selectedId) || queryBundle.demandPrimitives[0];
  const stage3 = queryBundle.executionState?.gates[3];
  const maraReady = stage3?.status === 'PASSED';

  return (
    <div className="space-y-6">
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <Cpu className="w-5 h-5 text-cyan-400 mt-1" />
            <div>
              <h2 className="text-lg font-bold">Machine 1: SCOUT (Target Compiler)</h2>
              <p className="text-xs text-slate-300 mt-1">Stages 1-3 preserve source provenance, reversible demand primitives, Negative Space, SCOUT Exhaust, and explicit classification validation state.</p>
            </div>
          </div>
          {currentStage === 3 && (
            <button disabled={!maraReady || isAiRunning} onClick={onProceedToMara} className="px-4 py-2 rounded-lg bg-cyan-700 disabled:opacity-40 text-xs font-semibold flex items-center gap-2">
              Handoff to MARA <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="flex gap-2 mt-4 pt-4 border-t border-slate-800 text-xs">
          {[1, 2, 3].map((stage) => <button key={stage} onClick={() => setStage(stage as PipelineStageNumber)} className={`px-3 py-1.5 rounded-lg ${currentStage === stage ? 'bg-cyan-950 text-cyan-200 border border-cyan-700' : 'bg-slate-950 text-slate-400'}`}>Stage {stage}</button>)}
        </div>
      </div>

      {currentStage === 1 && (
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><Search className="w-4 h-4 text-cyan-400" /><h3 className="text-sm font-bold">Source Input</h3></div>
            <pre className="whitespace-pre-wrap text-xs bg-slate-950 rounded-xl p-4 max-h-[520px] overflow-auto">{rawJobPosting}</pre>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-sm font-bold mb-3">SCOUT Exhaust</h3>
            <div className="space-y-2">{queryBundle.scoutExhaust.map((item) => <div key={item.id} className="text-xs p-3 rounded-lg bg-amber-950/30 border border-amber-900"><div className="font-mono text-amber-300">{item.reason}</div><div className="text-slate-300">{item.text}</div></div>)}</div>
          </div>
        </div>
      )}

      {currentStage === 2 && (
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-2">
            <div className="flex items-center gap-2 mb-2"><Layers className="w-4 h-4 text-cyan-400" /><h3 className="text-sm font-bold">Demand Primitives</h3></div>
            {queryBundle.demandPrimitives.map((item) => <button key={item.id} onClick={() => setSelectedId(item.id)} className={`w-full text-left p-3 rounded-xl border ${selected?.id === item.id ? 'border-cyan-600 bg-cyan-950/30' : 'border-slate-800 bg-slate-900'}`}><div className="text-xs font-mono text-cyan-300">{item.id}</div><div className="text-xs font-semibold mt-1">{item.action} {item.object}</div></button>)}
          </div>
          <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-5 text-xs">
            {selected && <div className="space-y-3"><div><span className="text-slate-500">Actor:</span> {selected.actor}</div><div><span className="text-slate-500">Action/Object:</span> {selected.action} {selected.object}</div><div><span className="text-slate-500">Relationship:</span> {selected.relationship}</div><div><span className="text-slate-500">Mechanism:</span> {selected.mechanism}</div><div><span className="text-slate-500">Effect:</span> {selected.effect}</div><div><span className="text-slate-500">Provenance:</span> {selected.provenance}</div></div>}
          </div>
        </div>
      )}

      {currentStage === 3 && (
        <div className="grid lg:grid-cols-2 gap-6">
          {[queryBundle.naicsAnchor, queryBundle.onetAnchor].map((anchor) => (
            <div key={anchor.system} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="flex justify-between gap-3"><div><div className="text-xs font-mono text-cyan-300">{anchor.system}</div><div className="font-bold mt-1">{anchor.code} — {anchor.title}</div></div><span className={`text-[11px] px-2 py-1 rounded border h-fit ${anchor.validationStatus === 'VALIDATED' ? 'border-emerald-700 text-emerald-300' : 'border-amber-700 text-amber-300'}`}>{anchor.validationStatus || 'UNVERIFIED'}</span></div>
              <p className="text-xs text-slate-300 mt-3">{anchor.rationale}</p>
              <div className="mt-3 text-[11px] text-slate-500">Model hypothesis: {anchor.matchType}. This label is not independent validation.</div>
            </div>
          ))}
          <div className="lg:col-span-2 p-4 rounded-xl border border-slate-800 bg-slate-900 text-xs flex gap-2 items-start">
            {maraReady ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertCircle className="w-4 h-4 text-amber-400" />}
            <div><strong>{maraReady ? 'MARA gate passed.' : 'MARA gate blocked.'}</strong><div className="text-slate-400 mt-1">{stage3?.reasons.join(' ') || 'Classification validation state is required.'}</div></div>
          </div>
        </div>
      )}
    </div>
  );
};
