import React, { useState } from 'react';
import { TargetResolvedArtifact, TraceabilityLink, ArtifactType, FrozenSnapshot, CandidateSpatialDNA } from '../types';
import {
  FileText,
  CheckCircle2,
  Copy,
  Download,
  Link,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Info,
  Layers,
  ChevronRight,
  Eye,
  Lock,
} from 'lucide-react';

interface ArtifactViewProps {
  artifact: TargetResolvedArtifact;
  frozenSnapshot: FrozenSnapshot;
  candidateDNA: CandidateSpatialDNA;
  onChangeArtifactType: (type: ArtifactType) => void;
  isAiRunning: boolean;
}

export const ArtifactView: React.FC<ArtifactViewProps> = ({
  artifact,
  frozenSnapshot,
  candidateDNA,
  onChangeArtifactType,
  isAiRunning,
}) => {
  const [selectedLinkIndex, setSelectedLinkIndex] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const selectedLink =
    selectedLinkIndex !== null && artifact.traceabilityLinks
      ? artifact.traceabilityLinks[selectedLinkIndex] || artifact.traceabilityLinks[0]
      : null;

  const handleCopy = () => {
    navigator.clipboard.writeText(artifact.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Machine Context Banner */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">Machine 3: ARTIFACT MODEL (Projection Renderer)</h2>
                <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-emerald-950/90 text-emerald-300 border border-emerald-800">
                  Stage 7 of 7
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 max-w-3xl">
                Compressor engine operating strictly on the <strong className="text-cyan-300">Frozen Snapshot</strong>. Contractually prohibited from hallucination or accessing raw candidate DNA. Enforces the <strong className="text-emerald-400">Traceability Contract</strong> down to each individual sentence.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopy}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied!' : 'Copy Artifact'}</span>
            </button>
          </div>
        </div>

        {/* Projection Type Selector */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-800 overflow-x-auto">
          <button
            onClick={() => onChangeArtifactType('TARGET_RESOLVED_RESUME')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              artifact.type === 'TARGET_RESOLVED_RESUME'
                ? 'bg-emerald-950 border border-emerald-600 text-emerald-300'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Target-Resolved Resume
          </button>
          <button
            onClick={() => onChangeArtifactType('RECRUITER_SUMMARY_BRIEF')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              artifact.type === 'RECRUITER_SUMMARY_BRIEF'
                ? 'bg-emerald-950 border border-emerald-600 text-emerald-300'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Recruiter Intelligence Brief
          </button>
          <button
            onClick={() => onChangeArtifactType('INTERVIEW_PREP_GAP_BRIEF')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              artifact.type === 'INTERVIEW_PREP_GAP_BRIEF'
                ? 'bg-emerald-950 border border-emerald-600 text-emerald-300'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Interview Gap Defense Brief
          </button>
          <button
            onClick={() => onChangeArtifactType('COVER_LETTER')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              artifact.type === 'COVER_LETTER'
                ? 'bg-emerald-950 border border-emerald-600 text-emerald-300'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Cover Letter
          </button>
        </div>
      </div>

      {/* Main Artifact & Traceability Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Rendered Document View */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div>
                <h3 className="text-base font-bold text-white">{artifact.title}</h3>
                <span className="text-xs font-mono text-slate-400">
                  Target Projection: {artifact.targetRole}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-1 rounded border border-cyan-800">
                <Lock className="w-3 h-3" />
                <span className="truncate max-w-[120px]">{artifact.freezeHash}</span>
              </div>
            </div>

            {/* Document Content with clickable sentence highlights */}
            <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-sans space-y-4 max-h-[580px] overflow-y-auto">
              {artifact.content}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Traceability Reversible
            </span>
            <span className="font-mono text-[11px]">Generated: {artifact.generatedAt.slice(0, 19)}</span>
          </div>
        </div>

        {/* Traceability Audit Sidebar (Live Inspector) */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Link className="w-4 h-4 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Traceability Audit (WORK-03)</h3>
            </div>
            <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
              {artifact.traceabilityLinks?.length || 0} Traceable Links
            </span>
          </div>

          <p className="text-xs text-slate-300">
            Click any sentence below to verify its exact reverse-path from Rendered Sentence → Bound Atom → Evidence Packet → Source Span:
          </p>

          {/* Links Selector */}
          <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
            {artifact.traceabilityLinks?.map((link, idx) => {
              const isSelected = selectedLinkIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedLinkIndex(idx)}
                  className={`p-2.5 rounded-xl border cursor-pointer text-xs transition-all ${
                    isSelected
                      ? 'bg-emerald-950/60 border-emerald-500 text-white shadow-sm ring-1 ring-emerald-500/30'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-emerald-400 mb-1">
                    <span>Sentence #{idx + 1}</span>
                    <span>Citation: {link.evidencePacket?.evidence_id || link.boundAtom?.evidenceId}</span>
                  </div>
                  <div className="line-clamp-2 text-slate-200">{link.sentenceText}</div>
                </div>
              );
            })}
          </div>

          {/* Active Link Deep Inspector */}
          {selectedLink && (
            <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900/60 space-y-3 text-xs">
              <div className="text-[10px] font-mono uppercase font-bold text-emerald-400">
                Reverse Provenance Path
              </div>

              {/* Step 1: Bound Atom */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-indigo-400 block mb-0.5">
                  1. Bound Atom in Frozen Snapshot
                </span>
                <div className="font-semibold text-slate-200">
                  {selectedLink.boundAtom?.demandId} ↔ {selectedLink.boundAtom?.evidenceId}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Band: <strong className="text-emerald-300">{selectedLink.boundAtom?.semanticBand}</strong> | Corroboration: {selectedLink.boundAtom?.corroborationType}
                </div>
              </div>

              {/* Step 2: Source Evidence Packet */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-cyan-400 block mb-0.5">
                  2. Candidate Evidence Packet (SCHM-02)
                </span>
                <div className="font-semibold text-white">
                  {selectedLink.evidencePacket?.governing_verb} {selectedLink.evidencePacket?.entity}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">
                  Source: {selectedLink.evidencePacket?.provenance?.source} ({selectedLink.evidencePacket?.provenance?.section})
                </div>
              </div>

              {/* Step 3: Target Demand Primitive */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-amber-400 block mb-0.5">
                  3. Target Demand Primitive (SCHM-01)
                </span>
                <div className="font-semibold text-slate-200">
                  {selectedLink.demandPrimitive?.action} {selectedLink.demandPrimitive?.object}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
