import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { AiChatModal } from './components/AiChatModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isAiChatOpen, setIsAiChatOpen] = useState<boolean>(false);
  const [aiChatInitialPrompt, setAiChatInitialPrompt] = useState<string | undefined>(undefined);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  const handleOpenAiChat = (initialPrompt?: string) => {
    setAiChatInitialPrompt(initialPrompt);
    setIsAiChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Navigation Header */}
      <Header
        onOpenAiChat={() => handleOpenAiChat()}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenAiChat={handleOpenAiChat}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Resume Chat Assistant Modal */}
      <AiChatModal
        isOpen={isAiChatOpen}
        onClose={() => setIsAiChatOpen(false)}
        initialPrompt={aiChatInitialPrompt}
      />

      {/* Printable Resume PDF Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

    </div>
  );
}
