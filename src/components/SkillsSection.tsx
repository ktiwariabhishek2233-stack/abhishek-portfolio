import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Cpu, 
  Search, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/resumeData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4 text-blue-600" />;
      case 'Globe': return <Globe className="w-4 h-4 text-indigo-600" />;
      case 'Database': return <Database className="w-4 h-4 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-purple-600" />;
      default: return <Code2 className="w-4 h-4 text-blue-600" />;
    }
  };

  const getProficiencyLabel = (level: number, highlight?: boolean) => {
    if (highlight || level >= 88) return { label: 'Core', color: 'bg-blue-100 text-blue-900 border-blue-300' };
    if (level >= 80) return { label: 'Proficient', color: 'bg-slate-100 text-slate-700 border-slate-200' };
    return { label: 'Practicing', color: 'bg-slate-50 text-slate-600 border-slate-200' };
  };

  const filteredCategories = SKILL_CATEGORIES.map(category => {
    const isCategorySelected = activeCategory === 'all' || activeCategory === category.title;
    if (!isCategorySelected) return null;

    const filteredSkills = category.skills.filter(skill => 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...category,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-10 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 text-[11px] font-semibold uppercase tracking-wider mb-1 border border-blue-200">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-1 text-slate-600 text-xs font-medium">
            Categorized skills & proficiencies practiced in coursework and software projects.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-5">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors border ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat.title)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors border ${
                  activeCategory === cat.title
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-52">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1 text-xs font-semibold rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Skills Chip Grid Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCategories.map((category, idx) => {
            const colors = ['text-blue-600', 'text-indigo-600', 'text-emerald-600', 'text-purple-600'];
            const headerColor = colors[idx % colors.length];

            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs space-y-3"
              >
                <div className={`flex items-center gap-2 ${headerColor} font-bold text-xs uppercase tracking-wider border-b border-slate-100 pb-2`}>
                  {getCategoryIcon(category!.iconName)}
                  <span>{category!.title}</span>
                </div>

                {/* Skill Chip Badges matching AboutSection format */}
                <div className="flex flex-wrap gap-1.5">
                  {category!.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-medium"
                    >
                      <CheckCircle2 className={`w-3 h-3 ${skill.highlight ? 'text-blue-600' : 'text-slate-400'} shrink-0`} />
                      <span className="font-semibold text-slate-900">{skill.name}</span>
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
