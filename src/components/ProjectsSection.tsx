import React from 'react';
import { Layers, Calendar, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/resumeData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Academic & Coursework Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Key Projects
          </h2>
          <p className="mt-3 text-slate-600 text-sm font-medium">
            Projects built during 5th semester coursework and self-directed learning across Full-Stack Web, IoT, and Computer Vision.
          </p>
        </div>

        {/* Projects Stack / Individual Cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:border-blue-500 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-900 text-xs font-extrabold border border-blue-300">
                      {project.badge}
                    </span>
                    <span className="text-xs text-slate-600 font-bold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {project.period}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 shrink-0 max-w-xs md:justify-end">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description & Key Features */}
              <div className="pt-4 space-y-2">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Key Technical Highlights:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                  {project.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
