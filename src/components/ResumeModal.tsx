import React from 'react';
import { X, Printer, Download, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO, CORE_SUBJECTS, PROJECTS, RESEARCH_PAPER, ACHIEVEMENTS } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:static">
      <div className="bg-white text-slate-900 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-10 border border-slate-200 relative my-6 print:max-w-none print:max-h-none print:shadow-none print:p-0 print:border-none">
        
        {/* Modal Controls Bar (Hidden during print) */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 text-sm">Abhishek Kumar Tiwari — Resume</span>
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold text-xs">PDF Printable Format</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PRINTABLE RESUME BODY */}
        <div className="max-w-3xl mx-auto space-y-6 text-slate-900 font-sans print:text-black">
          
          {/* Resume Header */}
          <div className="text-center border-b-2 border-slate-800 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-slate-800 font-semibold mt-3">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <span className="text-slate-400 font-normal">|</span>

              <a 
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors"
                title="Call Phone"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{PERSONAL_INFO.formattedPhone || PERSONAL_INFO.phone}</span>
              </a>

              <span className="text-slate-400 font-normal">|</span>

              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1.5 text-slate-800 hover:text-blue-600 font-semibold transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 shrink-0" />
                <span>LinkedIn</span>
              </a>

              <span className="text-slate-400 font-normal">|</span>

              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1.5 text-slate-800 hover:text-blue-600 font-semibold transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5 shrink-0" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-400 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed">
              {PERSONAL_INFO.objective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-400 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs font-semibold">
              <div>
                <span className="font-bold text-slate-900">{PERSONAL_INFO.education.university}</span>
                <div className="font-medium text-slate-800">{PERSONAL_INFO.education.degree}</div>
                <div className="text-slate-700">CGPA: {PERSONAL_INFO.education.cgpa}</div>
              </div>
              <span className="text-slate-700 font-mono">{PERSONAL_INFO.education.period}</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-400 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-slate-800">
              <p>
                <strong className="font-bold">Programming Languages:</strong> Java, Python, C, C++, JavaScript
              </p>
              <p>
                <strong className="font-bold">Web Technologies:</strong> HTML, CSS, JavaScript, React.js, Node.js (Basics)
              </p>
              <p>
                <strong className="font-bold">Database:</strong> MySQL, MongoDB
              </p>
              <p>
                <strong className="font-bold">Core Subjects:</strong> Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks
              </p>
              <p>
                <strong className="font-bold">Tools & Libraries:</strong> Git, GitHub, VS Code, Arduino IDE, Google Colab, OpenCV, Scikit-learn, Pandas, NumPy, Matplotlib
              </p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-400 pb-1 mb-2">
              Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{proj.title}</span>
                    <span className="font-mono text-slate-700">{proj.period}</span>
                  </div>
                  <div className="text-[11px] text-slate-600 font-semibold italic">
                    {proj.technologies.join(', ')}
                  </div>
                  <ul className="list-disc pl-4 space-y-0.5 text-slate-800">
                    {proj.description.map((desc, dIdx) => (
                      <li key={dIdx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Research Paper */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-400 pb-1 mb-2">
              Research Paper
            </h2>
            <div className="text-xs space-y-1">
              <div className="font-bold text-slate-900">{RESEARCH_PAPER.title}</div>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-800">
                {RESEARCH_PAPER.highlights.map((h, hIdx) => (
                  <li key={hIdx}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-400 pb-1 mb-2">
              Achievements
            </h2>
            <ul className="list-disc pl-4 space-y-0.5 text-xs text-slate-800">
              <li>Authored a research paper on Kidney Tumor Classification.</li>
              <li>Developed multiple academic and web development projects.</li>
              <li>Served as House Prefect in school, leading fellow students and assisting in discipline and event management.</li>
            </ul>
          </div>

          {/* Areas of Interest & Soft Skills */}
          <div className="grid grid-cols-2 gap-4 text-xs pt-1">
            <div>
              <strong className="font-bold text-slate-900 uppercase block mb-1">Areas of Interest:</strong>
              <p className="text-slate-800">{PERSONAL_INFO.areasOfInterest.join(' • ')}</p>
            </div>
            <div>
              <strong className="font-bold text-slate-900 uppercase block mb-1">Soft Skills:</strong>
              <p className="text-slate-800">{PERSONAL_INFO.softSkills.join(' • ')}</p>
            </div>
          </div>

          {/* Languages */}
          <div className="text-xs">
            <strong className="font-bold text-slate-900 uppercase">Languages:</strong>{' '}
            <span className="text-slate-800">{PERSONAL_INFO.languages.join(' • ')}</span>
          </div>

        </div>

      </div>
    </div>
  );
};
