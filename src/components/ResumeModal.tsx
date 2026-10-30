import React, { useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { X, Printer, Download, Mail, Github, Linkedin, MapPin, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0F172A] border border-[#38BDF8]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Specular Hairline */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent" />

        {/* Modal Action Bar */}
        <div className="p-4 sm:px-6 bg-[#0B1120] border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8]">
            <span>ACADEMIC CURRICULUM VITAE</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#94A3B8]">REVA University</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-mono text-[#F8FAFC] bg-[#1E293B] hover:bg-[#334155] rounded-lg border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#94A3B8] hover:text-white rounded-lg hover:bg-[#1E293B] transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0D1322] text-[#E2E8F0] font-sans text-xs sm:text-sm">
          {/* Header Block */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-sm font-semibold text-[#38BDF8] font-mono">
              {PERSONAL_INFO.role} · B.Tech CSE (AIML), 2nd Year
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#94A3B8] font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                {PERSONAL_INFO.contact.location}
              </span>
              <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="flex items-center gap-1.5 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                {PERSONAL_INFO.contact.email}
              </a>
              <a href={PERSONAL_INFO.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <Github className="w-3.5 h-3.5 text-[#38BDF8]" />
                github.com/prernashergar-sketch
              </a>
              <a href={PERSONAL_INFO.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <Linkedin className="w-3.5 h-3.5 text-[#38BDF8]" />
                linkedin.com/in/prerna-shergar-8b421b376
              </a>
            </div>
          </div>

          {/* Career Statement */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
              Professional Summary & Objective
            </h4>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              {PERSONAL_INFO.careerObjective}
            </p>
          </div>

          {/* Education Block */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
              Education
            </h4>
            <div className="p-4 bg-[#0F172A] rounded-xl border border-white/5 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h5 className="font-bold text-white text-sm sm:text-base">{PERSONAL_INFO.education.university}</h5>
                  <p className="text-xs text-[#38BDF8] font-mono">{PERSONAL_INFO.education.degree}</p>
                </div>
                <span className="text-xs font-mono text-[#94A3B8]">{PERSONAL_INFO.education.year}</span>
              </div>
              <p className="text-xs text-[#94A3B8]">Location: {PERSONAL_INFO.education.location}</p>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-[#64748B] block mb-1">KEY RELEVANT COURSEWORK:</span>
                <div className="flex flex-wrap gap-1.5">
                  {PERSONAL_INFO.education.coursework.map(c => (
                    <span key={c} className="text-[11px] font-mono bg-[#0B1120] text-[#E2E8F0] px-2 py-0.5 rounded border border-white/5">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Block */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
              Technical Competencies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#0F172A] rounded-lg border border-white/5">
                <span className="text-[11px] font-mono text-[#38BDF8] uppercase block mb-1">Languages:</span>
                <span className="text-[#F8FAFC]">Python, C, JavaScript, HTML5, CSS3, SQL</span>
              </div>
              <div className="p-3 bg-[#0F172A] rounded-lg border border-white/5">
                <span className="text-[11px] font-mono text-[#38BDF8] uppercase block mb-1">Databases & Storage:</span>
                <span className="text-[#F8FAFC]">MySQL, Supabase, Relational Schema Modeling, Query Optimization</span>
              </div>
              <div className="p-3 bg-[#0F172A] rounded-lg border border-white/5">
                <span className="text-[11px] font-mono text-[#38BDF8] uppercase block mb-1">Web Technologies:</span>
                <span className="text-[#F8FAFC]">React.js, Tailwind CSS, Responsive Web Architectures</span>
              </div>
              <div className="p-3 bg-[#0F172A] rounded-lg border border-white/5">
                <span className="text-[11px] font-mono text-[#38BDF8] uppercase block mb-1">Version Control & Tools:</span>
                <span className="text-[#F8FAFC]">Git, GitHub, Visual Studio Code, Linux Terminal</span>
              </div>
            </div>
          </div>

          {/* Projects Highlight Block */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
              Engineered Projects
            </h4>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 bg-[#0F172A] rounded-xl border border-white/5 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h5 className="font-bold text-white text-sm">{proj.title}</h5>
                    <div className="flex items-center gap-1.5">
                      {proj.technologies.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] font-mono text-[#38BDF8] bg-[#0B1120] px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{proj.description}</p>
                  <ul className="list-disc list-inside text-[11px] text-[#CBD5E1] space-y-0.5 pt-1">
                    {proj.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0B1120] border-t border-white/5 flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#64748B]">
            Portfolio of Prerna Shergar · Updated October 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
