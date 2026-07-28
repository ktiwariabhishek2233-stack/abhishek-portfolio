import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeaderProps {
  onOpenAiChat: () => void;
  onOpenResumeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAiChat,
  onOpenResumeModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'research', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Research', id: 'research' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Title */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="cursor-pointer flex items-center gap-2 group"
          id="header-logo"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center font-bold text-lg justify-center shadow-xs group-hover:scale-105 transition-transform">
            AT
          </div>
          <div>
            <span className="font-bold text-slate-900 text-base sm:text-lg tracking-tight block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-blue-600 font-semibold block">
              B.E. CSE @ Chitkara Univ
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-blue-600 bg-blue-50 border border-blue-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* View Resume PDF */}
          <button
            id="view-resume-btn"
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>Resume PDF</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-slate-300 font-semibold text-sm text-slate-800 hover:bg-slate-50"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              View Printable Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
