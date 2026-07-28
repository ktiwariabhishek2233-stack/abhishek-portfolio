import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  FileText, 
  CheckCircle, 
  Sparkles,
  Users
} from 'lucide-react';
import { ACHIEVEMENTS, PERSONAL_INFO } from '../data/resumeData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-300 dark:border-emerald-900">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Honors & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            Achievements & Responsibilities
          </h2>
          <p className="mt-3 text-slate-800 dark:text-slate-200 text-sm font-medium">
            Demonstrating leadership, academic commitment, and proactive collaboration.
          </p>
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-300 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-900">
                    {item.icon === 'FileText' && <FileText className="w-5 h-5" />}
                    {item.icon === 'Award' && <Award className="w-5 h-5" />}
                    {item.icon === 'ShieldCheck' && <ShieldCheck className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-extrabold text-slate-800 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-base font-black text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 text-xs text-emerald-800 dark:text-emerald-400 font-bold">
                <CheckCircle className="w-4 h-4" />
                <span>Verified Resume Record</span>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Leadership Matrix */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-extrabold text-sm mb-4">
            <Users className="w-5 h-5" />
            <span>Soft Skills & Professional Qualities</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {PERSONAL_INFO.softSkills.map((skill, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/60 text-center"
              >
                <Sparkles className="w-4 h-4 text-amber-600 mx-auto mb-1.5" />
                <span className="text-xs font-extrabold text-slate-950 dark:text-slate-100 block">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
