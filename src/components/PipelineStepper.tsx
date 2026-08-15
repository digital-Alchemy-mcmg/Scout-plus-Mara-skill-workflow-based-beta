import React from 'react';
import { PipelineStageNumber, MachineType } from '../types';
import { Sparkles, Check, ArrowRight, ShieldAlert, Cpu, Database, FileText } from 'lucide-react';

interface PipelineStepperProps {
  currentStage: PipelineStageNumber;
  setStage: (stage: PipelineStageNumber) => void;
  scoutExhaustCount: number;
  maraExhaustCount: number;
  isFrozen: boolean;
  isBlocked: boolean;
}

interface StageMeta {
  stage: PipelineStageNumber;
  name: string;
  machine: MachineType;
  shortDesc: string;
  exhaustType?: string;
}

const STAGES: StageMeta[] = [
  { stage: 1, name: 'Intake & Filtration', machine: 'SCOUT', shortDesc: 'Filter noise & marketing fluff', exhaustType: 'SCOUT' },
  { stage: 2, name: 'Decomposition', machine: 'SCOUT', shortDesc: 'Reversible Demand Molecules' },
  { stage: 3, name: 'Classification', machine: 'SCOUT', shortDesc: 'NAICS & ONET Hot-Match' },
  { stage: 4, name: 'Query Insertion', machine: 'MARA', shortDesc: '4 Active Semantic Walls' },
  { stage: 5, name: 'Binding & Traversal', machine: 'MARA', shortDesc: 'Spatial DNA Traversal' },
  { stage: 6, name: 'Exhaust Formation', machine: 'MARA', shortDesc: 'Gap Analysis & Freeze', exhaustType: 'MARA' },
  { stage: 7, name: 'Artifact Projection', machine: 'ARTIFACT', shortDesc: 'Traceable Artifact Rendering' },
];

export const PipelineStepper: React.FC<PipelineStepperProps> = ({
  currentStage,
  setStage,
  scoutExhaustCount,
  maraExhaustCount,
  isFrozen,
  isBlocked,
}) => {
  return (
    <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Machine Grouping Header */}
        <div className="grid grid-cols-12 gap-2 mb-2 text-xs font-semibold uppercase tracking-wider">
          <div className="col-span-12 sm:col-span-5 flex items-center gap-1.5 text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Machine 1: SCOUT (Target Compiler)</span>
            <span className="text-[10px] text-slate-500 font-mono font-normal">Stages 1–3</span>
          </div>
          <div className="col-span-12 sm:col-span-5 flex items-center gap-1.5 text-indigo-400">
            <Database className="w-3.5 h-3.5" />
            <span>Machine 2: MARA (Binding Engine)</span>
            <span className="text-[10px] text-slate-500 font-mono font-normal">Stages 4–6</span>
          </div>
          <div className="col-span-12 sm:col-span-2 flex items-center gap-1.5 text-emerald-400">
            <FileText className="w-3.5 h-3.5" />
            <span>Machine 3: ARTIFACT</span>
            <span className="text-[10px] text-slate-500 font-mono font-normal">Stage 7</span>
          </div>
        </div>

        {/* Stages Stepper Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {STAGES.map((s) => {
            const isActive = currentStage === s.stage;
            const isPassed = currentStage > s.stage;
            
            // Badge color based on machine
            let machineAccent = 'border-cyan-700/50 text-cyan-400';
            if (s.machine === 'MARA') machineAccent = 'border-indigo-700/50 text-indigo-400';
            if (s.machine === 'ARTIFACT') machineAccent = 'border-emerald-700/50 text-emerald-400';

            return (
              <button
                key={s.stage}
                onClick={() => setStage(s.stage)}
                className={`relative flex flex-col p-2.5 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-slate-800/90 border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                    : isPassed
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                    : 'bg-slate-950/40 border-slate-800/60 text-slate-500 hover:border-slate-800'
                }`}
              >
                {/* Step number badge & machine indicator */}
                <div className="flex items-center justify-between w-full mb-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isActive
                          ? 'bg-indigo-600 text-white'
                          : isPassed
                          ? 'bg-emerald-900/80 text-emerald-300 border border-emerald-700'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {isPassed ? <Check className="w-3 h-3" /> : s.stage}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">{s.machine}</span>
                  </div>

                  {/* Exhaust Indicator Pills */}
                  {s.exhaustType === 'SCOUT' && scoutExhaustCount > 0 && (
                    <span
                      className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-amber-950/80 border border-amber-800 text-amber-300"
                      title="SCOUT Exhaust: Discarded fluff & non-operational metadata"
                    >
                      -{scoutExhaustCount} Fluff
                    </span>
                  )}
                  {s.exhaustType === 'MARA' && maraExhaustCount > 0 && (
                    <span
                      className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-rose-950/80 border border-rose-800 text-rose-300"
                      title="MARA Exhaust: Legitimate target requirements unsupported by candidate"
                    >
                      {maraExhaustCount} Gap
                    </span>
                  )}
                  {s.stage === 6 && isFrozen && (
                    <span className="px-1 py-0.2 rounded text-[9px] font-mono bg-cyan-950 border border-cyan-800 text-cyan-300">
                      Locked
                    </span>
                  )}
                </div>

                {/* Stage Title */}
                <div className="font-semibold text-xs text-slate-200 truncate">{s.name}</div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{s.shortDesc}</div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
