import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Database, Globe, GitBranch, Terminal, CheckCircle2, ChevronRight, Copy, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(SKILL_CATEGORIES[0].skills[0]);
  const [copied, setCopied] = useState(false);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  const handleCopy = () => {
    if (selectedSkill?.codeSnippet) {
      navigator.clipboard.writeText(selectedSkill.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Code2 className="w-3.5 h-3.5" />;
      case 1: return <Database className="w-3.5 h-3.5" />;
      case 2: return <Globe className="w-3.5 h-3.5" />;
      case 3: return <GitBranch className="w-3.5 h-3.5" />;
      default: return <Terminal className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-[#38BDF8]/10 bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
              Skills & Engineering Stack
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-xl">
              Grounded in academic computer science fundamentals, relational database systems, and modern full-stack web technologies.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-mono">
            <span>Primary Focus:</span>
            <span className="text-[#38BDF8] font-semibold">Data Engineering & Relational SQL</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => {
                setActiveCategoryIndex(idx);
                setSelectedSkill(cat.skills[0]);
              }}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeCategoryIndex === idx
                  ? 'bg-[#3B82F6] text-white font-semibold shadow-md shadow-blue-500/20'
                  : 'bg-[#0F172A] text-[#94A3B8] hover:text-[#F8FAFC] border border-white/5'
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* 2-Column Split: Skills List + Interactive Implementation Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Skill Cards */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-3 bg-[#0F172A] border border-white/5 rounded-lg mb-2">
              <p className="text-xs text-[#94A3B8]">{activeCategory.description}</p>
            </div>

            {activeCategory.skills.map((skill) => {
              const isSelected = selectedSkill.name === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all ${
                    isSelected
                      ? 'bg-[#1E293B] border-[#38BDF8] shadow-lg shadow-blue-500/10'
                      : 'bg-[#0F172A] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span>
                      <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
                    </div>
                    <span className="text-[11px] font-mono text-[#38BDF8] bg-[#0B1120] px-2 py-0.5 rounded border border-white/5">
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    {skill.focus}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                    <span>Click to inspect code</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#38BDF8] translate-x-1' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Code Snippet & Implementation Preview */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#0F172A] border border-[#38BDF8]/20 shadow-xl overflow-hidden">
              <div className="px-4 py-3 bg-[#080E1D] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="text-xs font-mono text-white">
                    Implementation Snippet: <strong className="text-[#38BDF8]">{selectedSkill.name}</strong>
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 text-xs font-mono text-[#94A3B8] hover:text-white bg-[#1E293B] rounded border border-white/5 transition-colors flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Code Panel */}
              <div className="p-4 bg-[#050811] overflow-x-auto font-mono text-xs text-[#E2E8F0]">
                <pre className="leading-relaxed">
                  {selectedSkill.codeSnippet || `// Implementation details for ${selectedSkill.name}\n// Relational querying and algorithmic logic`}
                </pre>
              </div>

              {/* Practical Use In Projects */}
              <div className="p-4 bg-[#0B1120] border-t border-white/5 text-xs text-[#94A3B8] space-y-1.5 font-sans">
                <div className="flex items-center gap-2 text-white font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Applied in Prerna's Projects:</span>
                </div>
                <p className="text-[11px] text-[#94A3B8] pl-5">
                  Leveraged across the <strong>IPL Ticket Booking System</strong>, <strong>Personal Expense Tracker</strong>, and <strong>Restaurant Reservation System</strong> for deterministic relational storage, state synchronization, and pipeline routines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
