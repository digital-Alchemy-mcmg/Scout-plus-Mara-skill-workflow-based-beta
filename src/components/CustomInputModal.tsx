import React, { useState } from 'react';
import { X, Sparkles, AlertCircle, ArrowRight, Wand2 } from 'lucide-react';

interface CustomInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRunCustomPipeline: (jobText: string, candidateSummary: string) => Promise<void>;
  isLoading: boolean;
}

export const CustomInputModal: React.FC<CustomInputModalProps> = ({
  isOpen,
  onClose,
  onRunCustomPipeline,
  isLoading,
}) => {
  const [jobText, setJobText] = useState('');
  const [candidateText, setCandidateText] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobText.trim()) {
      setError('Please paste a job description.');
      return;
    }
    setError(null);
    await onRunCustomPipeline(jobText, candidateText);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full p-6 space-y-5 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-700/60 flex items-center justify-center text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Execute Custom Pipeline</h3>
              <p className="text-xs text-slate-400">
                Input any target job posting to execute SCOUT Decomposition, MARA Binding, and Artifact Projection.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-800 text-xs text-rose-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Raw Job Description (Target Posting) <span className="text-rose-400">*</span>
            </label>
            <textarea
              rows={6}
              value={jobText}
              onChange={(e) => setJobText(e.target.value)}
              placeholder="Paste raw job description here (including company intro, responsibilities, requirements, and fluff)..."
              className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Candidate Background / Spatial Evidence Summary (Optional)
            </label>
            <textarea
              rows={4}
              value={candidateText}
              onChange={(e) => setCandidateText(e.target.value)}
              placeholder="Paste candidate career background, key accomplishments, verified projects, and credentials..."
              className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Buttons */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-mono">
              Applies LOGC-01 & INTF-01 Governed Translation
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold rounded-lg shadow-lg transition-all flex items-center gap-1.5 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Wand2 className="w-4 h-4 animate-spin" />
                    <span>Executing Pipeline...</span>
                  </>
                ) : (
                  <>
                    <span>Compile & Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
