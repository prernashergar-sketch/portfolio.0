import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, BookOpen, MapPin, Award, CheckCircle2, Terminal, Code, Cpu } from 'lucide-react';

export const AboutEducation: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 border-b border-[#38BDF8]/10 bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Trajectory</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Education & Engineering Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-xl">
              Studying at REVA University, Bengaluru with a focused emphasis on scalable data infrastructure, relational databases, and algorithmic rigor.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-mono">
            <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </div>

        {/* 2-Column Academic & Focus Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: University Degree & Coursework Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F172A] border border-[#38BDF8]/20 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider font-semibold">
                    {PERSONAL_INFO.education.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] mt-1 tracking-tight">
                    {PERSONAL_INFO.education.degree}
                  </h3>
                  <p className="text-sm font-semibold text-[#38BDF8] mt-0.5">
                    {PERSONAL_INFO.education.university}
                  </p>
                </div>
                <div className="p-3 bg-[#0B1120] rounded-xl border border-white/5 text-[#38BDF8] shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#94A3B8] mt-4 leading-relaxed">
                Pursuing an engineering degree centered on Computer Science with specialized focus on Artificial Intelligence and Machine Learning. Building sound foundations in relational data structures, system modeling, and data pipelines.
              </p>

              {/* Coursework Modules */}
              <div className="mt-6 pt-5 border-t border-white/5 space-y-3">
                <span className="text-xs font-mono text-[#F8FAFC] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                  <BookOpen className="w-3.5 h-3.5 text-[#38BDF8]" /> Key Core Coursework
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PERSONAL_INFO.education.coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-[#080E1D] border border-white/5 rounded-lg flex items-center gap-2 text-xs text-[#E2E8F0]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0" />
                      <span className="truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* University & Campus Context */}
            <div className="p-5 rounded-xl bg-[#0F172A] border border-white/5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0B1120] border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] font-bold font-mono text-sm">
                  RU
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">REVA University Campus</h4>
                  <p className="text-xs text-[#94A3B8]">Kattigenahalli, Yelahanka, Bengaluru</p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#38BDF8] px-2.5 py-1 bg-[#0B1120] rounded border border-white/5">
                Active Student
              </span>
            </div>
          </div>

          {/* Right Column: Engineering Philosophy & Path */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase">
                <Cpu className="w-3.5 h-3.5" />
                <span>Career Vision</span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Why Data Engineering?
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Behind every machine learning algorithm and AI inference engine lies a critical foundation: clean, dependable, and timely data pipelines. As an aspiring Data Engineer, my aim is to bridge the gap between software engineering, relational database schemas, and analytical data streams.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3 bg-[#0B1120] rounded-lg border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-white">Data Integrity Over Speculation</h5>
                    <p className="text-[11px] text-[#94A3B8] mt-0.5">
                      Ensuring every transactional event adheres strictly to relational constraints and ACID guarantees.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#0B1120] rounded-lg border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-white">Efficient Query Optimization</h5>
                    <p className="text-[11px] text-[#94A3B8] mt-0.5">
                      Writing deterministic SQL queries with purposeful indexes and minimal execution overhead.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#0B1120] rounded-lg border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-white">Full-Stack Context Awareness</h5>
                    <p className="text-[11px] text-[#94A3B8] mt-0.5">
                      Understanding how frontend state interacts with backend APIs and cloud datastores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
