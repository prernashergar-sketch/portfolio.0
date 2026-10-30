import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#080E1D] border-t border-[#38BDF8]/15 text-[#94A3B8] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Academic Information */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-6 h-6 rounded bg-[#0F172A] border border-[#38BDF8]/30 flex items-center justify-center text-[10px] font-mono font-bold text-[#38BDF8]">
                PS
              </span>
              <span className="font-bold text-white text-sm">Prerna Shergar</span>
            </div>
            <p className="text-[11px] text-[#64748B]">
              B.Tech CSE (AIML), 2nd Year · REVA University, Bengaluru
            </p>
          </div>

          {/* Quick Anchor Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <a href="#about" className="hover:text-[#38BDF8] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#38BDF8] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#38BDF8] transition-colors">Projects</a>
            <a href="#terminal" className="hover:text-[#38BDF8] transition-colors">Workbench</a>
            <a href="#education" className="hover:text-[#38BDF8] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#38BDF8] transition-colors">Contact</a>
          </nav>

          {/* External Social Profiles & Scroll To Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#94A3B8] hover:text-white bg-[#0F172A] rounded-lg border border-white/5 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#94A3B8] hover:text-white bg-[#0F172A] rounded-lg border border-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="p-2 text-[#94A3B8] hover:text-white bg-[#0F172A] rounded-lg border border-white/5 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-[#94A3B8] hover:text-white bg-[#0F172A] rounded-lg border border-white/5 transition-colors"
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#64748B]">
          <p>© {new Date().getFullYear()} Prerna Shergar. All rights reserved.</p>
          <p className="font-mono">Engineered with React, TypeScript & Stitch Obsidian Precision</p>
        </div>
      </div>
    </footer>
  );
};
