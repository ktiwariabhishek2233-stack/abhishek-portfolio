import React from 'react';
import { FileText, Calendar } from 'lucide-react';
import { RESEARCH_PAPER } from '../data/resumeData';

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>Academic Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Research Paper
          </h2>
          <p className="mt-3 text-slate-600 text-sm font-medium">
            Published machine learning research on medical diagnostic classification datasets.
          </p>
        </div>

        {/* Paper Card matching Projects Card format */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:border-blue-500 transition-colors">
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-900 text-xs font-extrabold border border-blue-300">
                    Research Study
                  </span>
                  <span className="text-xs text-slate-600 font-bold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    Semester 4 – 5
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {RESEARCH_PAPER.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-0.5">
                  Machine Learning & Medical Image Diagnostics
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 shrink-0 max-w-xs md:justify-end">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
                  Python
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
                  Scikit-learn
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
                  Random Forest
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
                  SVM
                </span>
              </div>
            </div>

            {/* Description matching exact text-xs sm:text-sm text-slate-700 font-normal leading-relaxed styling */}
            <div className="pt-4 space-y-2">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Research Overview:
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                {RESEARCH_PAPER.description}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
