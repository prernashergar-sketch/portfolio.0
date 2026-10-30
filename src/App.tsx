/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DataEngineerTerminal } from './components/DataEngineerTerminal';
import { AboutEducation } from './components/AboutEducation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#38BDF8]/20 selection:text-[#38BDF8]">
      {/* Top Bar Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Architectural Data Pipeline & Bio */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Technical Competencies Matrix */}
        <SkillsSection />

        {/* Featured Projects with Interactive Simulator Triggers */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Interactive Query & Python ETL Workbench */}
        <DataEngineerTerminal />

        {/* Academic Coursework & REVA University Education */}
        <AboutEducation />

        {/* Direct Contact & Social Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Case Study & Live Simulator Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Academic Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
