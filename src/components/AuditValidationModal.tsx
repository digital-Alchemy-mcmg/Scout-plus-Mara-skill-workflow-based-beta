import React, { useMemo } from 'react';
import { ShieldCheck, X, CheckCircle, AlertTriangle } from 'lucide-react';
import type { CandidateSpatialDNA, FrozenSnapshot, QueryBundle, TargetResolvedArtifact, ValidationCheckResult } from '../types';
import { allChecksPassed, normalizeCandidateDNA, validateCandidateDNA, validateFrozenSnapshot, validateQueryBundle } from '../governance';

interface AuditValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
  queryBundle: QueryBundle;
  candidateDNA: CandidateSpatialDNA;
  frozenSnapshot: FrozenSnapshot | null;
  artifact: TargetResolvedArtifact | null;
}

export const AuditValidationModal: React.FC<AuditValidationModalProps> = ({ isOpen, onClose, queryBundle, candidateDNA, frozenSnapshot, artifact }) => {
  const rules = useMemo<ValidationCheckResult[]>(() => {
    const canonical = normalizeCandidateDNA(candidateDNA);
    const checks = [...validateCandidateDNA(canonical), ...validateQueryBundle(queryBundle)];
    if (frozenSnapshot) checks.push(...validateFrozenSnapshot(frozenSnapshot));
    else checks.push({ ruleId: 'FROZEN_SNAPSHOT_PRESENT', name: 'Frozen Snapshot exists', passed: false, details: 'No current frozen snapshot is available.', severity: 'ERROR' });

    const artifactLinksValid = !artifact || !!frozenSnapshot && artifact.freezeHash === frozenSnapshot.freezeHash && artifact.traceabilityLinks.every((link) => {
      return frozenSnapshot.boundAtoms.some((atom) => atom.demandId === link.boundAtom.demandId && atom.evidenceId === link.evidencePacket.evidence_id);
    });
    checks.push({
      ruleId: 'ARTIFACT_BOUNDARY',
      name: 'Artifact remains inside frozen boundary',
      passed: artifactLinksValid,
      details: artifact ? (artifactLinksValid ? 'Artifact hash and traceability links resolve to the current frozen snapshot.' : 'Artifact contains a stale or out-of-bound traceability reference.') : 'No artifact is currently rendered.',
      severity: 'ERROR',
    });
    return checks;
  }, [candidateDNA, queryBundle, frozenSnapshot, artifact]);

  if (!isOpen) return null;
  const passed = rules.filter((r) => r.passed).length;
  const compliance = rules.length ? Math.round((passed / rules.length) * 100) : 0;
  const releaseReady = allChecksPassed(rules);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full p-6 space-y-5 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-emerald-400"><ShieldCheck className="w-5 h-5" /></div><div><h3 className="text-base font-bold text-white">Deterministic Architecture Audit</h3><p className="text-xs text-slate-400">Runtime-derived checks; no hardcoded pass states.</p></div></div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
        </div>

        <div className={`p-4 rounded-xl border flex items-center justify-between ${releaseReady ? 'bg-emerald-950/30 border-emerald-800/60' : 'bg-amber-950/30 border-amber-800/60'}`}>
          <div className="flex items-center gap-2.5">{releaseReady ? <CheckCircle className="w-5 h-5 text-emerald-400" /> : <AlertTriangle className="w-5 h-5 text-amber-400" />}<div><div className="text-xs font-bold">Audit Status: {passed}/{rules.length} checks passed ({compliance}%)</div><p className="text-[11px] text-slate-400">{releaseReady ? 'All deterministic ERROR-level invariants pass.' : 'Release remains blocked by one or more deterministic invariants.'}</p></div></div>
          <span className={`text-xs font-mono px-2.5 py-1 rounded border ${releaseReady ? 'border-emerald-700 text-emerald-200' : 'border-amber-700 text-amber-200'}`}>{releaseReady ? 'ARCHITECTURE PASS' : 'BLOCKED'}</span>
        </div>

        <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
          {rules.map((rule) => (
            <div key={rule.ruleId} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start justify-between gap-3 text-xs">
              <div className="space-y-1"><div className="flex items-center gap-2"><span className="font-mono font-bold text-indigo-300">{rule.ruleId}</span><span className="font-semibold text-white">{rule.name}</span></div><p className="text-slate-400 text-[11px]">{rule.details}</p></div>
              <span className={`px-2 py-0.5 rounded border text-[10px] font-mono shrink-0 ${rule.passed ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-rose-950 text-rose-300 border-rose-800'}`}>{rule.passed ? 'PASSED' : 'FAILED'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
