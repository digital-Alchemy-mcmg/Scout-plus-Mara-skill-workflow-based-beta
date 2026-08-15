import React from 'react';
import { Layers, ShieldCheck, BookOpen, Sparkles, ChevronDown, CheckCircle, AlertTriangle, Lock } from 'lucide-react';
import { MachineType } from '../types';
import { SAMPLE_CASES } from '../data/sampleProfiles';

interface NavbarProps {
  activeTab: 'pipeline' | 'repository' | 'audit';
  setActiveTab: (tab: 'pipeline' | 'repository' | 'audit') => void;
  selectedCaseId: string;
  setSelectedCaseId: (id: string) => void;
  currentMachine: MachineType;
  maraReady: boolean;
  isFrozen: boolean;
  isBlocked: boolean;
  onOpenCustomModal: () => void;
  onOpenAuditModal: () => void;
  isAiRunning: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedCaseId,
  setSelectedCaseId,
  currentMachine,
  maraReady,
  isFrozen,
  isBlocked,
  onOpenCustomModal,
  onOpenAuditModal,
  isAiRunning,
}) => {
  const selectedCase = SAMPLE_CASES.find((c) => c.id === selectedCaseId);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-950/50">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-white text-lg">MARA + SCOUT</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-indigo-950 border border-indigo-700/60 text-indigo-300">
                  v2026.08.10-F
                </span>
              </div>
              <p className="text-xs text-slate-400 font-normal truncate hidden sm:block">
                Query-Resolved Candidate Projection Pipeline
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'pipeline'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>7-Stage Pipeline</span>
            </button>

            <button
              onClick={() => setActiveTab('repository')}
              className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'repository'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Repository & Spec</span>
            </button>

            <button
              onClick={onOpenAuditModal}
              className="px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">LOGC-01 Audit</span>
            </button>
          </nav>

          {/* Right Controls: Machine State & Case Selector */}
          <div className="flex items-center gap-2.5">
            {/* Machine State Indicators */}
            <div className="hidden lg:flex items-center gap-1.5 text-xs font-mono">
              <span
                className={`px-2 py-1 rounded border flex items-center gap-1 ${
                  maraReady
                    ? 'bg-emerald-950/80 border-emerald-700/70 text-emerald-300'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400'
                }`}
                title="Stage 3 Diagnostic Passed: Ready for MARA Traversal"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${maraReady ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
                mara_ready
              </span>

              <span
                className={`px-2 py-1 rounded border flex items-center gap-1 ${
                  isFrozen
                    ? 'bg-cyan-950/80 border-cyan-700/70 text-cyan-300'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400'
                }`}
                title="Evidence Boundary Frozen: Immutable snapshot locked"
              >
                <Lock className="w-3 h-3 text-cyan-400" />
                frozen_snapshot
              </span>

              {isBlocked && (
                <span className="px-2 py-1 rounded border bg-rose-950/80 border-rose-700/70 text-rose-300 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 text-rose-400" />
                  blocked
                </span>
              )}
            </div>

            {/* Case Selector Dropdown */}
            <div className="relative">
              <select
                value={selectedCaseId}
                onChange={(e) => setSelectedCaseId(e.target.value)}
                className="appearance-none bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs sm:text-sm pl-3 pr-8 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer font-medium"
              >
                {SAMPLE_CASES.map((sc) => (
                  <option key={sc.id} value={sc.id}>
                    {sc.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Custom Input Button */}
            <button
              onClick={onOpenCustomModal}
              className="px-2.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 text-xs font-medium transition-colors flex items-center gap-1"
              title="Input custom job description or candidate profile"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Custom Input</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
