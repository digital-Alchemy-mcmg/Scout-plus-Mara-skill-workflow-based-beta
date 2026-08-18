import React, { useState } from 'react';
import { X, Sparkles, AlertCircle, ArrowRight, Wand2 } from 'lucide-react';

interface CustomInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRunCustomPipeline: (jobText: string) => Promise<void>;
  isLoading: boolean;
}

export const CustomInputModal: React.FC<CustomInputModalProps> = ({ isOpen, onClose, onRunCustomPipeline, isLoading }) => {
  const [jobText, setJobText] = useState('');
  const [error, setError] = useState<string | null>(null);
  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobText.trim()) {
      setError('Please paste a job description.');
      return;
    }
    setError(null);
    await onRunCustomPipeline(jobText);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full p-6 space-y-5 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-700/60 flex items-center justify-center text-indigo-400"><Sparkles className="w-5 h-5" /></div>
            <div>
              <h3 className="text-base font-bold text-white">Execute Custom Target Pipeline</h3>
              <p className="text-xs text-slate-400">Run SCOUT against a new target posting using the currently selected candidate substrate.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800 text-xs text-amber-200">
          Custom candidate ingestion is disabled in this repair branch. The formal location of Spatial DNA population is an unresolved architecture decision, so this UI will not accept a candidate summary and silently bind against another candidate.
        </div>

        {error && <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-800 text-xs text-rose-300 flex items-center gap-2"><AlertCircle className="w-4 h-4" /><span>{error}</span></div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">Raw Job Description (Target Posting) <span className="text-rose-400">*</span></label>
            <textarea
              rows={8}
              value={jobText}
              onChange={(e) => setJobText(e.target.value)}
              placeholder="Paste raw job description here..."
              className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-mono">Downstream state is invalidated if SCOUT/MARA fails.</span>
            <div className="flex items-center gap-2">
              <button type="button" onClick={onClose} className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium">Cancel</button>
              <button type="submit" disabled={isLoading} className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 disabled:opacity-50">
                {isLoading ? <><Wand2 className="w-4 h-4 animate-spin" /><span>Executing...</span></> : <><span>Compile Target</span><ArrowRight className="w-4 h-4" /></>}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
