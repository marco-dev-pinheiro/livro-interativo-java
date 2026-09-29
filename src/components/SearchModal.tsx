import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, BookOpen, Layers, Zap, Compass } from 'lucide-react';
import { JAVA_AREAS } from '../data/javaAreas';
import { POO_SECTIONS } from '../data/pooContent';
import { QUICK_REFERENCE_ITEMS } from '../data/quickReference';
import { ROADMAP_STEPS } from '../data/roadmap';
import { ViewMode } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewMode, sectionId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent, or toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Search in Roadmap Steps
  const matchedRoadmap = normalizedQuery
    ? ROADMAP_STEPS.filter(
        (step) =>
          step.title.toLowerCase().includes(normalizedQuery) ||
          step.subtitle.toLowerCase().includes(normalizedQuery) ||
          step.theme.toLowerCase().includes(normalizedQuery) ||
          step.description.toLowerCase().includes(normalizedQuery) ||
          step.portfolioProject.title.toLowerCase().includes(normalizedQuery) ||
          step.skills.some((skill) => skill.toLowerCase().includes(normalizedQuery))
      )
    : [];

  // Search in Areas
  const matchedAreas = normalizedQuery
    ? JAVA_AREAS.filter(
        (area) =>
          area.title.toLowerCase().includes(normalizedQuery) ||
          area.summary.toLowerCase().includes(normalizedQuery) ||
          area.topics.some((topic) => topic.name.toLowerCase().includes(normalizedQuery))
      )
    : [];

  // Search in POO Sections
  const matchedPoo = normalizedQuery
    ? POO_SECTIONS.filter(
        (section) =>
          section.title.toLowerCase().includes(normalizedQuery) ||
          section.summary.toLowerCase().includes(normalizedQuery) ||
          section.subsections.some((subsection) =>
            subsection.title.toLowerCase().includes(normalizedQuery) ||
            subsection.content.some((contentLine) => contentLine.toLowerCase().includes(normalizedQuery))
          )
      )
    : [];

  // Search in Quick Reference
  const matchedQuickRef = normalizedQuery
    ? QUICK_REFERENCE_ITEMS.filter(
        (item) =>
          item.action.toLowerCase().includes(normalizedQuery) ||
          item.targetJavaFeature.toLowerCase().includes(normalizedQuery) ||
          item.description.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const hasResults =
    matchedRoadmap.length > 0 || matchedAreas.length > 0 || matchedPoo.length > 0 || matchedQuickRef.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-950/90">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar conceitos (ex: HashMap, private, Scanner, construtor, streams)..."
            autoFocus
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded"
            >
              Limpar
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 rounded border border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query && (
            <div className="text-center py-8 text-xs text-slate-500">
              Digite uma palavra-chave para buscar no livro de estudos, áreas do Java e guia rápido de sintaxe.
            </div>
          )}

          {query && !hasResults && (
            <div className="text-center py-8 text-xs text-slate-400">
              Nenhum termo correspondente encontrado para &quot;{query}&quot;. Tente &quot;POO&quot;, &quot;Array&quot;, &quot;equals&quot; ou &quot;private&quot;.
            </div>
          )}

          {/* Roadmap Steps Matches */}
          {matchedRoadmap.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>Trilha de Estudos & Portfólio ({matchedRoadmap.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedRoadmap.map((step) => (
                  <div
                    key={step.number}
                    onClick={() => {
                      onClose();
                      onNavigate('roadmap');
                    }}
                    className="p-2.5 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800/80 cursor-pointer flex items-center justify-between text-xs transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                        <span>{step.number}. {step.title}: {step.subtitle}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                          {step.theme}
                        </span>
                      </div>
                      <div className="text-slate-400 text-[11px] line-clamp-1 mt-0.5">
                        Projeto: {step.portfolioProject.title}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Ref Matches */}
          {matchedQuickRef.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Consulta Rápida ({matchedQuickRef.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedQuickRef.slice(0, 4).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      onClose();
                      onNavigate('quick-ref');
                    }}
                    className="p-2.5 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800/80 cursor-pointer flex items-center justify-between text-xs transition-colors group"
                  >
                    <div>
                      <div className="font-medium text-white group-hover:text-amber-300 transition-colors">
                        {item.action}
                      </div>
                      <div className="text-slate-400 font-mono text-[11px] mt-0.5">
                        Recurso: <span className="text-amber-400 font-bold">{item.targetJavaFeature}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* POO Sections Matches */}
          {matchedPoo.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Livro de POO ({matchedPoo.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedPoo.map((section) => (
                  <div
                    key={section.id}
                    onClick={() => {
                      onClose();
                      onNavigate('poo', section.id);
                    }}
                    className="p-2.5 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800/80 cursor-pointer flex items-center justify-between text-xs transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {section.title}
                      </div>
                      <div className="text-slate-400 text-[11px] line-clamp-1 mt-0.5">
                        {section.subtitle}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Areas Matches */}
          {matchedAreas.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Áreas do Java ({matchedAreas.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedAreas.map((area) => (
                  <div
                    key={area.id}
                    onClick={() => {
                      onClose();
                      onNavigate('map', area.id);
                    }}
                    className="p-2.5 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800/80 cursor-pointer flex items-center justify-between text-xs transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-cyan-400 font-bold">{area.number}</span>
                      <div>
                        <div className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {area.title}
                        </div>
                        <div className="text-slate-400 text-[11px] mt-0.5">{area.tagline}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
