import React, { useState } from 'react';
import { REPOSITORY_DOCS } from '../data/mockRepository';
import { RepoDoc } from '../types';
import {
  BookOpen,
  Search,
  FileCode,
  Copy,
  Check,
  FolderTree,
  Tag,
  ArrowRight,
  Code2,
  FileText,
  Shield,
  Layers,
} from 'lucide-react';

export const RepositoryExplorer: React.FC = () => {
  const [selectedDocId, setSelectedDocId] = useState<string>('ROOT-01');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copied, setCopied] = useState(false);
  const [viewRaw, setViewRaw] = useState(false);

  const filteredDocs = REPOSITORY_DOCS.filter((doc) => {
    const matchesCat = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const activeDoc = REPOSITORY_DOCS.find((d) => d.id === selectedDocId) || REPOSITORY_DOCS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeDoc.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'root':
        return <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">Root</span>;
      case 'architecture':
        return <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-[10px] font-mono">Architecture</span>;
      case 'contracts':
        return <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 text-[10px] font-mono">Contracts</span>;
      case 'schemas':
        return <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 text-[10px] font-mono">Schemas</span>;
      case 'logic':
        return <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 text-[10px] font-mono">Logic / Laws</span>;
      case 'workflows':
        return <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-mono">Workflows</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-700/60 flex items-center justify-center text-indigo-400 shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Repository & Architectural Specifications</h2>
            <p className="text-xs text-slate-300 mt-0.5">
              The canonical specification suite governing the MARA + SCOUT 3-machine 7-stage pipeline.
            </p>
          </div>
        </div>
      </div>

      {/* Main Split-View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Sidebar: File Tree, Search, & Categories */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search specification files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 text-[11px]">
            {['all', 'architecture', 'contracts', 'schemas', 'logic', 'workflows'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg capitalize transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white font-medium shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* File Registry List */}
          <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1">
            {filteredDocs.map((doc) => {
              const isSelected = doc.id === selectedDocId;
              return (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDocId(doc.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-indigo-950/70 border-indigo-500 shadow-md ring-1 ring-indigo-500/30'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-slate-200">{doc.name}</span>
                    {getCategoryBadge(doc.category)}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium truncate">{doc.role}</div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Pane: Markdown Viewer & Dependency Inspector */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
          
          <div>
            {/* Document Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 mb-4 gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white font-mono">{activeDoc.name}</h3>
                  <span className="text-xs font-mono text-slate-400">({activeDoc.path})</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">{activeDoc.summary}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewRaw(!viewRaw)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>{viewRaw ? 'Rendered View' : 'Raw Markdown'}</span>
                </button>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium shadow transition-colors flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Document Dependencies Bar */}
            {activeDoc.dependencies.length > 0 && (
              <div className="flex items-center gap-2 mb-4 p-2 rounded-lg bg-slate-950 border border-slate-800/80 text-xs">
                <span className="text-slate-400 font-mono text-[11px]">Architectural Dependencies:</span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {activeDoc.dependencies.map((depId) => {
                    const depDoc = REPOSITORY_DOCS.find((d) => d.id === depId);
                    return (
                      <button
                        key={depId}
                        onClick={() => setSelectedDocId(depId)}
                        className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-mono text-[10px] hover:bg-indigo-900 transition-colors"
                      >
                        {depDoc?.name || depId}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Markdown Text Area */}
            <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-mono max-h-[580px] overflow-y-auto">
              {activeDoc.content}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Status: <strong className="text-emerald-400">Active Specification</strong></span>
            <span className="font-mono text-[11px]">Spec Version: 2026.08.10-F</span>
          </div>

        </div>

      </div>

    </div>
  );
};
