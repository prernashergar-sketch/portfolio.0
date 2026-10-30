import React, { useState, useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { IPLBookingSimulator, ExpenseTrackerSimulator, RestaurantReservationSimulator, WanderlustTravelSimulator } from './ProjectSimulators';
import { X, ExternalLink, Github, Database, Code, Play, CheckCircle2, Copy, Check } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'schema' | 'features'>('demo');
  const [copiedSql, setCopiedSql] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const copySql = () => {
    if (project.schemaDetails?.sqlSnippet) {
      navigator.clipboard.writeText(project.schemaDetails.sqlSnippet);
      setCopiedSql(true);
      setTimeout(() => setCopiedSql(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0F172A] border border-[#38BDF8]/25 rounded-xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Specular Top Hairline */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#38BDF8]/60 to-transparent" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#38BDF8]/15 bg-[#0B1120]/70 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
              <span className="font-mono text-[#38BDF8] uppercase tracking-wider">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>Prerna Shergar Project Case Study</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight">{project.title}</h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-2xl">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#94A3B8] hover:text-white rounded-lg hover:bg-[#1E293B] border border-white/5 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Subnav Tabs */}
        <div className="px-5 sm:px-6 py-2.5 bg-[#0B1120] border-b border-[#38BDF8]/10 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'demo'
                ? 'bg-[#1E293B] text-[#38BDF8] border border-[#38BDF8]/30 font-semibold shadow-sm'
                : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Play className="w-3.5 h-3.5" /> Live Interactive Demo
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'schema'
                ? 'bg-[#1E293B] text-[#38BDF8] border border-[#38BDF8]/30 font-semibold shadow-sm'
                : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Database className="w-3.5 h-3.5" /> Database Schema & SQL
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'features'
                ? 'bg-[#1E293B] text-[#38BDF8] border border-[#38BDF8]/30 font-semibold shadow-sm'
                : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Code className="w-3.5 h-3.5" /> System Architecture
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'demo' && (
            <div className="space-y-4">
              {project.id === 'ipl-ticket-booking' && <IPLBookingSimulator />}
              {project.id === 'personal-expense-tracker' && <ExpenseTrackerSimulator />}
              {project.id === 'restaurant-reservation' && <RestaurantReservationSimulator />}
              {project.id === 'wanderlust-travel' && <WanderlustTravelSimulator />}
              {project.id === 'personal-portfolio-website' && (
                <div className="space-y-4">
                  <div className="p-4 bg-[#080E1D] border border-white/10 rounded-lg space-y-3">
                    <span className="text-xs uppercase tracking-wider text-[#38BDF8] font-mono">Portfolio Architecture Engine</span>
                    <h4 className="text-base font-semibold text-[#F8FAFC]">Obsidian Precision Design System</h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      This portfolio website is developed as a reactive single-page architecture built using React 19, TypeScript, and modern utility tokens. It demonstrates zero AI-slop design principles, deep midnight navy canvases, and unboxed typography.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                      <div className="p-2.5 bg-[#0F172A] rounded border border-white/5 font-mono text-xs">
                        <span className="text-[#64748B] block text-[10px]">BASE CANVAS</span>
                        <span className="text-[#38BDF8] font-semibold">#0B1120</span>
                      </div>
                      <div className="p-2.5 bg-[#0F172A] rounded border border-white/5 font-mono text-xs">
                        <span className="text-[#64748B] block text-[10px]">ELEVATED SURFACE</span>
                        <span className="text-[#38BDF8] font-semibold">#0F172A</span>
                      </div>
                      <div className="p-2.5 bg-[#0F172A] rounded border border-white/5 font-mono text-xs">
                        <span className="text-[#64748B] block text-[10px]">PRIMARY ACCENT</span>
                        <span className="text-[#38BDF8] font-semibold">#3B82F6</span>
                      </div>
                      <div className="p-2.5 bg-[#0F172A] rounded border border-white/5 font-mono text-xs">
                        <span className="text-[#64748B] block text-[10px]">CYAN LUMINESCENCE</span>
                        <span className="text-[#38BDF8] font-semibold">#38BDF8</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#080E1D] border border-white/10 rounded-lg">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
                  <span className="text-xs font-mono text-[#38BDF8] uppercase">Relational Data Model Definition</span>
                  <button
                    onClick={copySql}
                    className="flex items-center gap-1 text-[11px] font-mono text-[#94A3B8] hover:text-white px-2 py-1 rounded bg-[#1E293B] border border-white/10 transition-colors"
                  >
                    {copiedSql ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    {copiedSql ? 'Copied' : 'Copy SQL'}
                  </button>
                </div>
                <p className="text-xs text-[#94A3B8] mb-3">{project.schemaDetails.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="text-[11px] text-[#64748B] font-mono mr-1">Tables modeled:</span>
                  {project.schemaDetails.tables.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-[#1E293B] text-[#38BDF8] rounded text-[11px] font-mono border border-[#38BDF8]/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="relative overflow-x-auto rounded bg-[#050811] p-3.5 border border-white/5 font-mono text-xs text-[#E2E8F0]">
                  <pre className="text-xs leading-relaxed font-mono">{project.schemaDetails.sqlSnippet}</pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#080E1D] border border-white/10 rounded-lg space-y-3">
                <span className="text-xs font-mono text-[#38BDF8] uppercase">Key Engineering Highlights</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="p-3 bg-[#0F172A] border border-white/5 rounded-lg flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#E2E8F0] leading-relaxed">{h}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#080E1D] border border-white/10 rounded-lg space-y-2">
                <span className="text-xs font-mono text-[#38BDF8] uppercase">Functional Capabilities</span>
                <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#38BDF8] font-mono text-[11px]">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Action Buttons */}
        <div className="p-4 sm:p-5 bg-[#0B1120] border-t border-[#38BDF8]/15 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#64748B] font-mono">Tech:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map(t => (
                <span key={t} className="text-[11px] font-mono text-[#94A3B8] bg-[#1E293B] px-2 py-0.5 rounded border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-medium text-[#F8FAFC] bg-[#1E293B] hover:bg-[#334155] border border-white/10 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" /> View on GitHub
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
