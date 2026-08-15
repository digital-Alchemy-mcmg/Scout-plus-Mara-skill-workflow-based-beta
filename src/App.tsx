import React, { useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { PipelineStepper } from './components/PipelineStepper';
import { ScoutView } from './components/ScoutView';
import { MaraView } from './components/MaraView';
import { ArtifactView } from './components/ArtifactView';
import { RepositoryExplorer } from './components/RepositoryExplorer';
import { AuditValidationModal } from './components/AuditValidationModal';
import { CustomInputModal } from './components/CustomInputModal';
import { SAMPLE_CASES } from './data/sampleProfiles';
import { evaluateScoutGates } from './governance';
import type {
  PipelineStageNumber,
  MachineType,
  QueryBundle,
  CandidateSpatialDNA,
  FrozenSnapshot,
  TargetResolvedArtifact,
  ArtifactType,
} from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'repository' | 'audit'>('pipeline');
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case-ops-manager');
  const [currentStage, setCurrentStage] = useState<PipelineStageNumber>(1);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [executionError, setExecutionError] = useState<string | null>(null);

  const currentCase = SAMPLE_CASES.find((c) => c.id === selectedCaseId) || SAMPLE_CASES[0];
  const [customJobPosting, setCustomJobPosting] = useState<string>(currentCase.rawJobPosting);
  const [customCandidateDNA, setCustomCandidateDNA] = useState<CandidateSpatialDNA>(currentCase.candidateDNA);
  const [queryBundle, setQueryBundle] = useState<QueryBundle>(currentCase.precomputedQueryBundle);
  const [frozenSnapshot, setFrozenSnapshot] = useState<FrozenSnapshot | null>(currentCase.precomputedFrozenSnapshot);
  const [artifact, setArtifact] = useState<TargetResolvedArtifact | null>(currentCase.precomputedArtifact);

  const scoutState = useMemo(() => queryBundle.executionState || evaluateScoutGates(queryBundle), [queryBundle]);
  const maxNavigableStage = useMemo(() => {
    if (frozenSnapshot?.executionState?.highestPassedStage) {
      return Math.min(7, frozenSnapshot.executionState.highestPassedStage + 1);
    }
    return Math.min(3, scoutState.highestPassedStage + 1);
  }, [frozenSnapshot, scoutState]);

  const requestStage = (stage: PipelineStageNumber) => {
    if (stage <= maxNavigableStage) {
      setCurrentStage(stage);
      setExecutionError(null);
    } else {
      setExecutionError(`Stage ${stage} is blocked until prior execution gates pass.`);
    }
  };

  const handleCaseChange = (newCaseId: string) => {
    setSelectedCaseId(newCaseId);
    const newCase = SAMPLE_CASES.find((c) => c.id === newCaseId) || SAMPLE_CASES[0];
    setCustomJobPosting(newCase.rawJobPosting);
    setCustomCandidateDNA(newCase.candidateDNA);
    setQueryBundle(newCase.precomputedQueryBundle);
    setFrozenSnapshot(newCase.precomputedFrozenSnapshot);
    setArtifact(newCase.precomputedArtifact);
    setExecutionError(null);
    setCurrentStage(1);
  };

  let currentMachine: MachineType = 'SCOUT';
  if (currentStage >= 4 && currentStage <= 6) currentMachine = 'MARA';
  if (currentStage === 7) currentMachine = 'ARTIFACT';

  const maraReady = scoutState.gates[3]?.status === 'PASSED';
  const isFrozen = !!frozenSnapshot?.freezeHash && frozenSnapshot.executionState?.gates[6]?.status === 'PASSED';
  const isBlocked = frozenSnapshot?.isBlocked ?? !maraReady;

  const invalidateDownstream = () => {
    setFrozenSnapshot(null);
    setArtifact(null);
  };

  // Candidate ingestion is intentionally NOT performed here. Formal Spatial DNA population is a protected YELLOW decision.
  const handleRunCustomPipeline = async (jobText: string) => {
    setIsAiLoading(true);
    setExecutionError(null);
    invalidateDownstream();
    setCustomJobPosting(jobText);
    try {
      const scoutRes = await fetch('/api/gemini/scout-decompose', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ jobPostingText: jobText }),
      });
      if (!scoutRes.ok) {
        const body = await scoutRes.json().catch(() => ({}));
        throw new Error(body.error || 'SCOUT execution failed.');
      }

      const newQueryBundle: QueryBundle = await scoutRes.json();
      setQueryBundle(newQueryBundle);
      const gates = newQueryBundle.executionState || evaluateScoutGates(newQueryBundle);
      if (gates.gates[3]?.status !== 'PASSED') {
        setCurrentStage(3);
        setExecutionError(gates.gates[3]?.reasons.join(' ') || 'Classification validation is required before MARA handoff.');
        return;
      }

      const maraRes = await fetch('/api/gemini/mara-bind', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ queryBundle: newQueryBundle, candidateDNA: customCandidateDNA }),
      });
      if (!maraRes.ok) {
        const body = await maraRes.json().catch(() => ({}));
        throw new Error(body.error || 'MARA execution failed.');
      }
      const newSnapshot: FrozenSnapshot = await maraRes.json();
      setFrozenSnapshot(newSnapshot);

      const artRes = await fetch('/api/gemini/artifact-render', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ frozenSnapshot: newSnapshot, artifactType: 'TARGET_RESOLVED_RESUME' }),
      });
      if (!artRes.ok) {
        const body = await artRes.json().catch(() => ({}));
        throw new Error(body.error || 'Artifact rendering failed.');
      }
      setArtifact(await artRes.json());
      setCurrentStage(7);
    } catch (err: any) {
      invalidateDownstream();
      setExecutionError(err.message || 'Pipeline execution failed; downstream state was invalidated.');
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleChangeArtifactType = async (type: ArtifactType) => {
    if (!frozenSnapshot || !artifact || artifact.type === type) return;
    setIsAiLoading(true);
    setExecutionError(null);
    try {
      const artRes = await fetch('/api/gemini/artifact-render', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ frozenSnapshot, artifactType: type }),
      });
      if (!artRes.ok) {
        const body = await artRes.json().catch(() => ({}));
        throw new Error(body.error || 'Artifact re-render failed.');
      }
      setArtifact(await artRes.json());
    } catch (err: any) {
      setArtifact(null);
      setExecutionError(err.message || 'Artifact state invalidated after render failure.');
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCaseId={selectedCaseId}
        setSelectedCaseId={handleCaseChange}
        currentMachine={currentMachine}
        maraReady={maraReady}
        isFrozen={isFrozen}
        isBlocked={isBlocked}
        onOpenCustomModal={() => setIsCustomModalOpen(true)}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
        isAiRunning={isAiLoading}
      />

      <main className="flex-1">
        {activeTab === 'pipeline' && (
          <div>
            <PipelineStepper
              currentStage={currentStage}
              setStage={requestStage}
              scoutExhaustCount={queryBundle.scoutExhaust?.length || 0}
              maraExhaustCount={frozenSnapshot?.maraExhaust?.length || 0}
              isFrozen={isFrozen}
              isBlocked={isBlocked}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {executionError && (
                <div className="mb-5 rounded-xl border border-amber-800 bg-amber-950/30 p-3 text-xs text-amber-200">
                  {executionError}
                </div>
              )}

              {currentStage <= 3 && (
                <ScoutView
                  currentStage={currentStage}
                  setStage={requestStage}
                  rawJobPosting={customJobPosting}
                  queryBundle={queryBundle}
                  onProceedToMara={() => requestStage(4)}
                  isAiRunning={isAiLoading}
                />
              )}

              {currentStage >= 4 && currentStage <= 6 && frozenSnapshot && (
                <MaraView
                  currentStage={currentStage}
                  setStage={requestStage}
                  queryBundle={queryBundle}
                  candidateDNA={customCandidateDNA}
                  frozenSnapshot={frozenSnapshot}
                  onProceedToArtifact={() => requestStage(7)}
                  isAiRunning={isAiLoading}
                />
              )}

              {currentStage === 7 && frozenSnapshot && artifact && (
                <ArtifactView
                  artifact={artifact}
                  frozenSnapshot={frozenSnapshot}
                  candidateDNA={customCandidateDNA}
                  onChangeArtifactType={handleChangeArtifactType}
                  isAiRunning={isAiLoading}
                />
              )}
            </div>
          </div>
        )}

        {activeTab === 'repository' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"><RepositoryExplorer /></div>
        )}
      </main>

      <AuditValidationModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        queryBundle={queryBundle}
        candidateDNA={customCandidateDNA}
        frozenSnapshot={frozenSnapshot}
        artifact={artifact}
      />

      <CustomInputModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onRunCustomPipeline={handleRunCustomPipeline}
        isLoading={isAiLoading}
      />

      <footer className="border-t border-slate-900 bg-slate-950 px-4 py-4 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-mono">
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400" /><span>MARA + SCOUT Governed Translation Engine</span></div>
          <div>Identity is immutable. Projection is temporary. Every claim is traceable.</div>
        </div>
      </footer>
    </div>
  );
}
