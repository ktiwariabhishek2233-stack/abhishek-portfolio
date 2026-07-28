import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Target, 
  Sparkles, 
  Languages, 
  CheckCircle2,
  Building2,
  Award
} from 'lucide-react';
import { PERSONAL_INFO, CORE_SUBJECTS } from '../data/resumeData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-10 bg-white border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 text-[11px] font-semibold uppercase tracking-wider mb-1 border border-blue-200">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>Academic Overview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            About Me
          </h2>
          <p className="mt-1 text-slate-600 text-xs font-medium">
            Computer Science Engineering Student • Chitkara University, HP (5th Semester)
          </p>
        </div>

        {/* Academic Quick Status Ribbon */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 mb-5 flex flex-wrap items-center justify-around gap-3 text-xs text-slate-800 font-semibold shadow-2xs">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{PERSONAL_INFO.education.university}</span>
          </div>
          <div className="h-4 w-px bg-slate-300 hidden sm:block" />
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>B.E. CSE (2024–2028) • Semester 5</span>
          </div>
          <div className="h-4 w-px bg-slate-300 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-emerald-700 font-bold">CGPA: {PERSONAL_INFO.education.cgpa} / 10.0</span>
          </div>
        </div>

        {/* 3-Column Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1: Core Coursework */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider border-b border-slate-100 pb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Core CS Coursework</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {CORE_SUBJECTS.map((subject, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-medium"
                >
                  <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                  <span>{subject}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Objective & Interests */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider border-b border-slate-100 pb-2">
              <Target className="w-3.5 h-3.5" />
              <span>Internship Goal</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Seeking software engineering internship opportunities to apply Java, MERN full-stack development, and data structures to real-world software products.
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              {PERSONAL_INFO.areasOfInterest.map((area, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 text-[10px] font-semibold border border-blue-200">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Skills & Languages */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-purple-600 font-bold text-xs uppercase tracking-wider border-b border-slate-100 pb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personal Strengths</span>
            </div>
            
            <div>
              <span className="text-[11px] font-semibold text-slate-500 block mb-1">Soft Skills:</span>
              <div className="flex flex-wrap gap-1">
                {PERSONAL_INFO.softSkills.map((skill, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                <Languages className="w-3.5 h-3.5 text-emerald-600" />
                <span>Languages:</span>
              </div>
              <span className="font-semibold text-slate-800 text-[11px]">English, Hindi</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
