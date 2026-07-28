import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Award, 
  FileCheck, 
  Sparkles, 
  Code2, 
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroProps {
  onOpenAiChat: (initialPrompt?: string) => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAiChat, onOpenResumeModal }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>5th Semester CSE Student • Seeking Software Internships</span>
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Hi, I'm {PERSONAL_INFO.name}
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-bold text-blue-600">
                Computer Science Engineering Student (5th Semester)
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                Chitkara University, HP • 2024–2028 • CGPA: 8.71 / 10.0
              </p>
            </div>

            {/* Objective Paragraph */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {PERSONAL_INFO.objective}
            </p>

            {/* Key Quick Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-md mx-auto lg:mx-0">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-emerald-600">
                  8.71
                </div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">
                  Current CGPA
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-slate-900">
                  3+
                </div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">
                  Core Projects
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-blue-600">
                  1
                </div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">
                  ML Paper
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm transition-all flex items-center gap-2"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-colors flex items-center gap-2 shadow-xs"
              >
                <FileCheck className="w-4 h-4 text-emerald-600" />
                <span>Resume PDF</span>
              </button>
            </div>

            {/* Direct Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-slate-600">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 text-xs font-semibold transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 text-xs font-semibold transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-blue-600 text-xs font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Academic Highlights Overview Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="max-w-sm w-full bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <h2 className="text-sm font-bold text-slate-900">Academic Summary</h2>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-600 font-medium">Status</span>
                  <span className="font-bold text-slate-900">5th Semester (2024–2028)</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-600 font-medium">University</span>
                  <span className="font-bold text-slate-900">Chitkara University, HP</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-600 font-medium">CGPA</span>
                  <span className="font-extrabold text-emerald-600">8.71 / 10.0</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-600 font-medium">Specialization</span>
                  <span className="font-bold text-blue-600">Java, Full Stack & ML</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
