import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PipelineStepper } from './components/PipelineStepper';
import { ScoutView } from './components/ScoutView';
import { MaraView } from './components/MaraView';
import { ArtifactView } from './components/ArtifactView';
import { RepositoryExplorer } from './components/RepositoryExplorer';
import { AuditValidationModal } from './components/AuditValidationModal';
import { CustomInputModal } from './components/CustomInputModal';
import { SAMPLE_CASES, SampleCase } from './data/sampleProfiles';
import {
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

  // Active Case Data
  const currentCase = SAMPLE_CASES.find((c) => c.id === selectedCaseId) || SAMPLE_CASES[0];

  const [customJobPosting, setCustomJobPosting] = useState<string>(currentCase.rawJobPosting);
  const [customCandidateDNA, setCustomCandidateDNA] = useState<CandidateSpatialDNA>(currentCase.candidateDNA);
  const [queryBundle, setQueryBundle] = useState<QueryBundle>(currentCase.precomputedQueryBundle);
  const [frozenSnapshot, setFrozenSnapshot] = useState<FrozenSnapshot>(currentCase.precomputedFrozenSnapshot);
  const [artifact, setArtifact] = useState<TargetResolvedArtifact>(currentCase.precomputedArtifact);

  // Sync state when selected case changes
  const handleCaseChange = (newCaseId: string) => {
    setSelectedCaseId(newCaseId);
    const newCase = SAMPLE_CASES.find((c) => c.id === newCaseId) || SAMPLE_CASES[0];
    setCustomJobPosting(newCase.rawJobPosting);
    setCustomCandidateDNA(newCase.candidateDNA);
    setQueryBundle(newCase.precomputedQueryBundle);
    setFrozenSnapshot(newCase.precomputedFrozenSnapshot);
    setArtifact(newCase.precomputedArtifact);
    setCurrentStage(1);
  };

  // Determine current active machine
  let currentMachine: MachineType = 'SCOUT';
  if (currentStage >= 4 && currentStage <= 6) currentMachine = 'MARA';
  if (currentStage === 7) currentMachine = 'ARTIFACT';

  const maraReady = currentStage >= 3;
  const isFrozen = currentStage >= 6;
  const isBlocked = frozenSnapshot.isBlocked;

  // Custom Pipeline Execution
  const handleRunCustomPipeline = async (jobText: string, candidateSummary: string) => {
    setIsAiLoading(true);
    try {
      // 1. SCOUT Decompose API
      const scoutRes = await fetch('/api/gemini/scout-decompose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobPostingText: jobText }),
      });

      if (scoutRes.ok) {
        const newQueryBundle: QueryBundle = await scoutRes.json();
        setQueryBundle(newQueryBundle);
        setCustomJobPosting(jobText);

        // 2. MARA Bind API
        const maraRes = await fetch('/api/gemini/mara-bind', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            queryBundle: newQueryBundle,
            candidateDNA: customCandidateDNA,
          }),
        });

        if (maraRes.ok) {
          const newSnapshot: FrozenSnapshot = await maraRes.json();
          setFrozenSnapshot(newSnapshot);

          // 3. Artifact Render API
          const artRes = await fetch('/api/gemini/artifact-render', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              frozenSnapshot: newSnapshot,
              candidateDNA: customCandidateDNA,
              queryBundle: newQueryBundle,
              artifactType: 'TARGET_RESOLVED_RESUME',
            }),
          });

          if (artRes.ok) {
            const newArtifact: TargetResolvedArtifact = await artRes.json();
            setArtifact(newArtifact);
          }
        }
      } else {
        // Fallback to local profile decomposition
        setCustomJobPosting(jobText);
      }
    } catch (err) {
      console.warn('AI pipeline error, preserving active dataset:', err);
    } finally {
      setIsAiLoading(false);
      setCurrentStage(1);
    }
  };

  // Change Artifact Type
  const handleChangeArtifactType = async (type: ArtifactType) => {
    if (artifact.type === type) return;
    
    // Check if we can re-render via Gemini or format locally
    try {
      setIsAiLoading(true);
      const artRes = await fetch('/api/gemini/artifact-render', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          frozenSnapshot,
          candidateDNA: customCandidateDNA,
          queryBundle,
          artifactType: type,
        }),
      });

      if (artRes.ok) {
        const newArtifact = await artRes.json();
        setArtifact(newArtifact);
        return;
      }
    } catch (e) {
      // Local fallback title update
    } finally {
      setIsAiLoading(false);
    }

    // Default formatting fallback
    let newTitle = 'Target-Resolved Resume';
    if (type === 'RECRUITER_SUMMARY_BRIEF') newTitle = 'Recruiter Intelligence Brief: Ceiling Capabilities';
    if (type === 'INTERVIEW_PREP_GAP_BRIEF') newTitle = 'Interview Prep & MARA Exhaust Gap Defense';
    if (type === 'COVER_LETTER') newTitle = 'Target-Resolved Cover Letter & Mission Alignment';

    setArtifact({
      ...artifact,
      type,
      title: `${newTitle}: ${customCandidateDNA.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      
      {/* Top Navbar */}
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

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'pipeline' && (
          <div>
            {/* 7-Stage Stepper Header */}
            <PipelineStepper
              currentStage={currentStage}
              setStage={setCurrentStage}
              scoutExhaustCount={queryBundle.scoutExhaust?.length || 0}
              maraExhaustCount={frozenSnapshot.maraExhaust?.length || 0}
              isFrozen={isFrozen}
              isBlocked={isBlocked}
            />

            {/* Pipeline Stage Body */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {/* Stages 1 to 3: SCOUT */}
              {currentStage <= 3 && (
                <ScoutView
                  currentStage={currentStage}
                  setStage={setCurrentStage}
                  rawJobPosting={customJobPosting}
                  queryBundle={queryBundle}
                  onProceedToMara={() => setCurrentStage(4)}
                  isAiRunning={isAiLoading}
                />
              )}

              {/* Stages 4 to 6: MARA */}
              {currentStage >= 4 && currentStage <= 6 && (
                <MaraView
                  currentStage={currentStage}
                  setStage={setCurrentStage}
                  queryBundle={queryBundle}
                  candidateDNA={customCandidateDNA}
                  frozenSnapshot={frozenSnapshot}
                  onProceedToArtifact={() => setCurrentStage(7)}
                  isAiRunning={isAiLoading}
                />
              )}

              {/* Stage 7: ARTIFACT MODEL */}
              {currentStage === 7 && (
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

        {/* Repository Documentation Explorer */}
        {activeTab === 'repository' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <RepositoryExplorer />
          </div>
        )}
      </main>

      {/* Global Audit Modal */}
      <AuditValidationModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        queryBundle={queryBundle}
        frozenSnapshot={frozenSnapshot}
        artifact={artifact}
      />

      {/* Custom Input Modal */}
      <CustomInputModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onRunCustomPipeline={handleRunCustomPipeline}
        isLoading={isAiLoading}
      />

      {/* Footer Bar */}
      <footer className="border-t border-slate-900 bg-slate-950 px-4 py-4 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>MARA + SCOUT Governed Translation Engine</span>
            <span className="text-slate-600">|</span>
            <span>Spec 2026.08.10-F</span>
          </div>
          <div>
            Axiom: <em>"Identity is immutable. Projection is temporary. Every claim is traceable."</em>
          </div>
        </div>
      </footer>

    </div>
  );
}
