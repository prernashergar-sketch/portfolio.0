import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { Layers, Play, Github, ExternalLink, ArrowUpRight, Database, Terminal } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'Data & Database' | 'Web Apps'>('All');

  const categories = ['All', 'Full Stack', 'Data & Database', 'Web Apps'] as const;

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-[#38BDF8]/10 bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineered Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Featured Technical Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-xl">
              Comprehensive case studies featuring relational schemas, automated data pipelines, and responsive client architectures. Click any card to launch the live interactive simulation.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0F172A] rounded-lg border border-white/5 overflow-x-auto self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                  filter === cat
                    ? 'bg-[#3B82F6] text-white font-semibold shadow-md shadow-blue-500/20'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 12-column responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            // First item can be highlighted across 2 columns on desktop if desired
            const isFeatured = index === 0 && filter === 'All';

            return (
              <div
                key={project.id}
                className={`group relative rounded-xl bg-[#0F172A] border border-[#38BDF8]/15 hover:border-[#38BDF8]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Specular Top Hairline (Stitch Obsidian Precision) */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent group-hover:via-[#38BDF8] transition-all" />

                <div className="p-6 space-y-4">
                  {/* Category & Status Bar */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#38BDF8] uppercase tracking-wider text-[11px] font-semibold">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">
                      0{index + 1} // CASE STUDY
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] mt-1 font-medium leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#94A3B8]/90 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/5 font-mono text-[11px]">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="p-1.5 bg-[#0B1120] rounded border border-white/5">
                        <span className="text-[#64748B] block text-[9px] uppercase truncate">{m.label}</span>
                        <span className="text-[#F8FAFC] font-semibold truncate block mt-0.5">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips with glowing dots */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#0B1120] border border-[#38BDF8]/20 rounded text-[11px] font-mono text-[#94A3B8]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-[#080E1D] border-t border-white/5 flex items-center justify-between gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] flex items-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-all shadow-md shadow-blue-500/20 flex items-center gap-1.5"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Interactive Demo</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
