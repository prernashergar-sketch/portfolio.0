import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Database, ArrowRight, Github, Linkedin, Mail, Play, Server, HardDrive, CheckCircle2, Cpu } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [pipelineActive, setPipelineActive] = useState(false);
  const [packetCount, setPacketCount] = useState(2480);
  const [activeStep, setActiveStep] = useState(1);

  const triggerPipelineStream = () => {
    if (pipelineActive) return;
    setPipelineActive(true);
    setActiveStep(1);

    const stepInterval = setInterval(() => {
      setActiveStep(prev => {
        if (prev >= 4) {
          clearInterval(stepInterval);
          setPipelineActive(false);
          setPacketCount(count => count + 120);
          return 1;
        }
        return prev + 1;
      });
    }, 600);
  };

  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-b border-[#38BDF8]/10 bg-[#0B1120]">
      {/* Background architectural glow grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Academic Status Label */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#94A3B8]">
              <span className="font-mono text-[#38BDF8] font-semibold uppercase tracking-wider">
                B.Tech CSE (AIML) · 2nd Year
              </span>
              <span aria-hidden="true">·</span>
              <span>REVA University, Bengaluru</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.1]">
                Prerna Shergar
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[#38BDF8]">
                Aspiring Data Engineer
              </p>
            </div>

            {/* Career Objective & Bio */}
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl">
              2nd-year undergraduate at REVA University specializing in Computer Science & Engineering (AIML). Passionate about architecting resilient relational database schemas in MySQL, designing high-throughput data extraction pipelines in Python, and building responsive full-stack applications.
            </p>

            {/* Quick Action CTA Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-all shadow-md shadow-blue-500/25 flex items-center gap-2"
              >
                Explore Projects
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#terminal"
                className="px-4 py-2.5 text-xs font-semibold text-[#F8FAFC] bg-[#0F172A] hover:bg-[#1E293B] border border-[#38BDF8]/20 rounded-lg transition-colors flex items-center gap-2"
              >
                <Database className="w-3.5 h-3.5 text-[#38BDF8]" />
                Interactive SQL Workbench
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 text-xs font-semibold text-[#94A3B8] hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-colors"
              >
                View Academic CV
              </button>
            </div>

            {/* Verified External Social Channels */}
            <div className="pt-4 flex items-center gap-4 text-xs text-[#94A3B8]">
              <span className="font-mono uppercase text-[11px] text-[#64748B]">Connect:</span>
              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true" className="text-[#334155]">/</span>
              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-[#334155]">/</span>
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Data Pipeline Schematic (Engineering Graphic, No photos) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0F172A] border border-[#38BDF8]/25 p-5 shadow-2xl shadow-blue-950/40">
              {/* Specular hairline top border */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />

              {/* Console Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  <span className="text-xs font-mono uppercase text-[#F8FAFC]">ETL Pipeline Node Graph</span>
                </div>
                <span className="text-[11px] font-mono text-[#38BDF8] bg-[#1E293B] px-2 py-0.5 rounded border border-white/5">
                  v2.4 · Normalized
                </span>
              </div>

              {/* Interactive Pipeline Node Stack */}
              <div className="space-y-3 font-mono text-xs">
                {/* Node 1: Ingestion */}
                <div className={`p-3 rounded-lg border transition-all ${
                  activeStep === 1 && pipelineActive
                    ? 'bg-[#1E293B] border-[#38BDF8] shadow-md shadow-blue-500/20'
                    : 'bg-[#080E1D] border-white/5'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[#94A3B8]">
                      <Server className="w-3.5 h-3.5 text-[#38BDF8]" />
                      01. Raw Data Ingestion
                    </span>
                    <span className="text-[10px] text-[#38BDF8]">IPL & Dining Streams</span>
                  </div>
                  <p className="text-[11px] text-[#64748B] mt-1 font-sans">
                    Ingests transactional HTTP payloads, validates payload timestamps & formats.
                  </p>
                </div>

                {/* Connecting Vector Arrow */}
                <div className="flex justify-center -my-1 text-[#38BDF8]/50 text-xs">↓</div>

                {/* Node 2: Transformation & Cleaning */}
                <div className={`p-3 rounded-lg border transition-all ${
                  activeStep === 2 && pipelineActive
                    ? 'bg-[#1E293B] border-[#38BDF8] shadow-md shadow-blue-500/20'
                    : 'bg-[#080E1D] border-white/5'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[#94A3B8]">
                      <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
                      02. Python Transformation (ETL)
                    </span>
                    <span className="text-[10px] text-emerald-400">Type Coercion</span>
                  </div>
                  <p className="text-[11px] text-[#64748B] mt-1 font-sans">
                    Deduplicates records, calculates net sums, detects anomalies, parses dates.
                  </p>
                </div>

                {/* Connecting Vector Arrow */}
                <div className="flex justify-center -my-1 text-[#38BDF8]/50 text-xs">↓</div>

                {/* Node 3: Storage & Relational Constraints */}
                <div className={`p-3 rounded-lg border transition-all ${
                  activeStep === 3 && pipelineActive
                    ? 'bg-[#1E293B] border-[#38BDF8] shadow-md shadow-blue-500/20'
                    : 'bg-[#080E1D] border-white/5'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[#94A3B8]">
                      <HardDrive className="w-3.5 h-3.5 text-[#38BDF8]" />
                      03. MySQL & Supabase RDBMS
                    </span>
                    <span className="text-[10px] text-[#38BDF8]">Foreign Keys & ACID</span>
                  </div>
                  <p className="text-[11px] text-[#64748B] mt-1 font-sans">
                    Persists normalized entities into indexed relational tables with integrity constraints.
                  </p>
                </div>

                {/* Connecting Vector Arrow */}
                <div className="flex justify-center -my-1 text-[#38BDF8]/50 text-xs">↓</div>

                {/* Node 4: Serving & React Dashboard */}
                <div className={`p-3 rounded-lg border transition-all ${
                  activeStep === 4 && pipelineActive
                    ? 'bg-[#1E293B] border-[#38BDF8] shadow-md shadow-blue-500/20'
                    : 'bg-[#080E1D] border-white/5'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[#94A3B8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      04. Serving Layer (React & SQL Views)
                    </span>
                    <span className="text-[10px] text-emerald-400">&lt; 15ms Latency</span>
                  </div>
                  <p className="text-[11px] text-[#64748B] mt-1 font-sans">
                    Serves aggregated analytical metrics and live booking records to client interfaces.
                  </p>
                </div>
              </div>

              {/* Interactive Pipeline Action */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#64748B] block font-mono">STREAM BUFFER:</span>
                  <span className="text-xs font-mono font-bold text-[#F8FAFC]">
                    {packetCount.toLocaleString()} records committed
                  </span>
                </div>

                <button
                  onClick={triggerPipelineStream}
                  disabled={pipelineActive}
                  className="px-3.5 py-1.5 text-xs font-mono font-semibold text-[#0B1120] bg-[#38BDF8] hover:bg-[#7BD0FF] disabled:opacity-50 rounded-lg transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <Play className="w-3 h-3 fill-current" />
                  {pipelineActive ? 'Streaming...' : 'Run Pipeline'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
