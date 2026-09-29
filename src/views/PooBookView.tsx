import React, { useState, useEffect } from 'react';
import { POO_SECTIONS } from '../data/pooContent';
import { InteractiveMindMap } from '../components/InteractiveMindMap';
import { RelationshipExplorer } from '../components/RelationshipExplorer';
import { AccessModifierMatrix } from '../components/AccessModifierMatrix';
import { CodeBlock } from '../components/CodeBlock';
import {
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  BookmarkCheck,
  Sparkles,
  Layers,
  ShieldCheck,
  Network,
  FolderTree,
  Star,
  ExternalLink
} from 'lucide-react';

interface PooBookViewProps {
  initialSectionId?: string;
  onNavigateToArea?: (areaId: string) => void;
}

const STORAGE_KEY = 'poo-java-estudadas-v2';

export const PooBookView: React.FC<PooBookViewProps> = ({
  initialSectionId,
  onNavigateToArea
}) => {
  const [studiedSections, setStudiedSections] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [activeSectionId, setActiveSectionId] = useState<string>(initialSectionId || 'classes');

  // Sync with initialSectionId if it changes
  useEffect(() => {
    if (initialSectionId) {
      setActiveSectionId(initialSectionId);
      const element = document.getElementById(initialSectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [initialSectionId]);

  const toggleStudied = (sectionId: string) => {
    setStudiedSections((previousSections) => {
      const updatedSections = { ...previousSections, [sectionId]: !previousSections[sectionId] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSections));
      } catch (storageError) {
        console.error(storageError);
      }
      return updatedSections;
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSectionId(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const totalSections = POO_SECTIONS.length;
  const completedCount = POO_SECTIONS.filter((section) => studiedSections[section.id]).length;
  const progressPercent = Math.round((completedCount / totalSections) * 100);

  return (
    <div className="space-y-12">
      {/* Book Title Banner */}
      <section className="text-center pt-4 pb-2 max-w-3xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-purple-400">
          <span>LIVRO DE CONSULTA & ESTUDOS</span>
          <span aria-hidden="true">·</span>
          <span>AUTOR: MARCO</span>
          <span aria-hidden="true">·</span>
          <span>JAVA POO</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-balance">
          Orientação a Objetos em <span className="text-purple-400">Java</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-balance">
          Modelar o mundo real em objetos que guardam dados e executam ações. Da arquitetura de classes
          aos relacionamentos de alta coesão e baixo acoplamento.
        </p>

        {/* Global Book Progress Bar */}
        <div className="max-w-md mx-auto pt-2">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
            <span>Progresso de Leitura</span>
            <span className="text-purple-400 font-mono font-bold">
              {completedCount} de {totalSections} capítulos ({progressPercent}%)
            </span>
          </div>
          <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-emerald-400 transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </section>

      {/* Interactive Mind Map (As in Document 1) */}
      <section aria-labelledby="mapa-mental-title">
        <InteractiveMindMap
          studiedSections={studiedSections}
          onToggleStudied={toggleStudied}
          onSelectSection={scrollToSection}
        />
      </section>

      {/* Main Two-Column Layout: Sidebar Navigation + Book Chapters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sticky Table of Contents Sidebar */}
        <aside className="lg:col-span-4 lg:sticky lg:top-20 space-y-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>Sumário do Livro</span>
            </h3>
            <span className="text-[11px] font-mono text-slate-500">
              {completedCount}/{totalSections} lidos
            </span>
          </div>

          <nav aria-label="Navegação pelos capítulos de POO" className="space-y-1.5">
            {POO_SECTIONS.map((section, sectionIndex) => {
              const isStudied = !!studiedSections[section.id];
              const isActive = activeSectionId === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 border text-xs cursor-pointer ${
                    isActive
                      ? 'bg-slate-800/90 border-purple-500/80 text-white shadow'
                      : 'bg-slate-950/60 border-slate-800/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <span
                    className="font-mono text-[11px] font-bold shrink-0 mt-0.5"
                    style={{ color: section.color }}
                  >
                    0{sectionIndex + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate text-slate-200 flex items-center gap-1.5">
                      <span>{section.title}</span>
                      {isStudied && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate mt-0.5">
                      {section.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Book Chapters Stream */}
        <main className="lg:col-span-8 space-y-16">
          {POO_SECTIONS.map((section, sectionIndex) => {
            const isStudied = !!studiedSections[section.id];

            return (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-24 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative"
                style={{ borderTop: `4px solid ${section.color}` }}
              >
                {/* Chapter Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono mb-1" style={{ color: section.color }}>
                      <span>{section.badge}</span>
                      <span aria-hidden="true">·</span>
                      <span>CAPÍTULO 0{sectionIndex + 1}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {section.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      {section.subtitle}
                    </p>
                  </div>

                  {/* Mark as Studied Toggle Button */}
                  <button
                    onClick={() => toggleStudied(section.id)}
                    type="button"
                    aria-pressed={isStudied}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                      isStudied
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-500/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                    }`}
                  >
                    {isStudied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Capítulo Estudado ✓</span>
                      </>
                    ) : (
                      <>
                        <BookmarkCheck className="w-3.5 h-3.5 text-slate-400" />
                        <span>Marcar como estudada</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Chapter Summary */}
                <div className="my-5 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {section.summary}
                </div>

                {/* Subsections Content */}
                <div className="space-y-8 mt-6">
                  {section.subsections.map((subsection) => (
                    <div key={subsection.id} className="space-y-3">
                      <h3
                        className="text-base font-bold flex items-center gap-2"
                        style={{ color: section.color }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: section.color }} />
                        <span>{subsection.title}</span>
                      </h3>

                      {subsection.content.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}

                      {/* Code Block if present */}
                      {subsection.code && (
                        <CodeBlock code={subsection.code} title={subsection.title} />
                      )}

                      {/* Diagram if present */}
                      {subsection.diagram && (
                        <div className="my-4 p-4 rounded-xl bg-slate-950 font-mono text-xs text-amber-300 border border-slate-800 overflow-x-auto whitespace-pre leading-relaxed">
                          {subsection.diagram}
                        </div>
                      )}

                      {/* Table if present */}
                      {subsection.table && (
                        <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 bg-slate-950/80">
                          <table className="w-full text-left text-xs">
                            <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                              <tr>
                                {subsection.table.headers.map((headerText) => (
                                  <th key={headerText} className="p-3 font-semibold" style={{ color: section.color }}>
                                    {headerText}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/70 text-slate-300">
                              {subsection.table.rows.map((rowCells, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-slate-900/40">
                                  {rowCells.map((cellContent, cellIndex) => (
                                    <td key={cellIndex} className="p-3">
                                      {cellIndex === 0 ? (
                                        <code className="text-amber-300 font-mono text-xs">
                                          {cellContent}
                                        </code>
                                      ) : (
                                        cellContent
                                      )}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Callout if present */}
                      {subsection.callout && (
                        <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/50 text-purple-200 text-xs sm:text-sm leading-relaxed">
                          <strong className="text-white block mb-0.5">
                            💡 {subsection.callout.label}:
                          </strong>
                          {subsection.callout.text}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Specific Interactive Widgets embedded in relevant sections */}
                {section.id === 'encapsulamento' && (
                  <AccessModifierMatrix />
                )}

                {section.id === 'relacionamentos' && (
                  <RelationshipExplorer />
                )}
              </article>
            );
          })}
        </main>
      </div>
    </div>
  );
};
