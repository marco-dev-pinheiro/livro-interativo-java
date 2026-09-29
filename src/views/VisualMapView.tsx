import React, { useState } from 'react';
import { JAVA_AREAS } from '../data/javaAreas';
import { JavaArea } from '../types';
import { AreaDetailModal } from '../components/AreaDetailModal';
import { Layers, ArrowRight, BookOpen, Sparkles, Code2, Search } from 'lucide-react';

interface VisualMapViewProps {
  onNavigateToPoo: (sectionId?: string) => void;
  onNavigateToRoadmap: () => void;
  onNavigateToQuickRef: () => void;
}

export const VisualMapView: React.FC<VisualMapViewProps> = ({
  onNavigateToPoo,
  onNavigateToRoadmap,
  onNavigateToQuickRef
}) => {
  const [selectedArea, setSelectedArea] = useState<JavaArea | null>(null);
  const [filterQuery, setFilterQuery] = useState('');

  const filteredAreas = JAVA_AREAS.filter((area) => {
    if (!filterQuery) return true;
    const normalizedQuery = filterQuery.toLowerCase().trim();
    return (
      area.title.toLowerCase().includes(normalizedQuery) ||
      area.tagline.toLowerCase().includes(normalizedQuery) ||
      area.topics.some((topic) => topic.name.toLowerCase().includes(normalizedQuery))
    );
  });

  return (
    <div className="space-y-12">
      {/* Hero Intro */}
      <section className="text-center pt-4 pb-2 max-w-3xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-amber-400">
          <span>GUIA VISUAL DE ESTUDOS</span>
          <span aria-hidden="true">·</span>
          <span>ECOSSISTEMA JAVA</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-balance">
          Mapa Visual da Linguagem <span className="text-amber-500">Java</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-balance">
          Um mapa visual panorâmico para compreender a arquitetura da linguagem, navegar pelas 10 áreas essenciais
          e conectar os fundamentos com a Orientação a Objetos.
        </p>

        {/* Action jump buttons */}
        <div className="flex items-center justify-center gap-3 pt-2 flex-wrap text-xs">
          <button
            onClick={() => onNavigateToPoo('classes')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600/90 hover:bg-purple-600 text-white font-medium transition-all shadow-lg shadow-purple-900/30 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Aprofundar no Livro de POO</span>
          </button>
          <button
            onClick={onNavigateToRoadmap}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 font-medium transition-colors cursor-pointer"
          >
            <span>Ver Trilha de Aprendizado (8 Passos)</span>
          </button>
          <button
            onClick={onNavigateToQuickRef}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 font-medium transition-colors cursor-pointer"
          >
            <span>Consulta Rápida (Quero fazer X)</span>
          </button>
        </div>
      </section>

      {/* Central Interactive Hub */}
      <div className="relative flex justify-center py-4">
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-slate-900 border-4 border-amber-500 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(245,158,11,0.25)] relative z-10 transition-transform hover:scale-105">
          <span className="text-3xl sm:text-4xl">☕</span>
          <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white mt-1">JAVA</span>
          <span className="text-[11px] text-amber-400 font-mono mt-0.5">10 ÁREAS CENTRAIS</span>
        </div>
      </div>

      {/* Filter / Search within the 10 areas */}
      <div className="max-w-md mx-auto relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={filterQuery}
          onChange={(inputEvent) => setFilterQuery(inputEvent.target.value)}
          placeholder="Filtrar tópicos (ex: Scanner, Arrays.sort, POO, try-catch)..."
          className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/80 transition-colors"
        />
        {filterQuery && (
          <button
            onClick={() => setFilterQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-400 hover:text-white"
          >
            Limpar
          </button>
        )}
      </div>

      {/* 10 Areas Grid (As featured in Document 2) */}
      <section aria-label="10 Áreas do Java" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredAreas.map((area) => {
          const isPoo = area.id === 'poo';

          return (
            <article
              key={area.id}
              onClick={() => setSelectedArea(area)}
              className={`group relative bg-slate-900/90 border rounded-2xl p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl ${
                isPoo
                  ? 'border-purple-500/50 hover:border-purple-400 shadow-lg shadow-purple-950/20'
                  : 'border-slate-800 hover:border-amber-500/60'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs"
                      style={{
                        backgroundColor: `${area.color}20`,
                        color: area.color,
                        border: `1px solid ${area.color}40`
                      }}
                    >
                      {area.number}
                    </div>
                    <h2 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {area.title}
                    </h2>
                  </div>

                  {isPoo && (
                    <span className="text-[10px] font-semibold text-purple-300 bg-purple-950/80 border border-purple-800 px-2 py-0.5 rounded-full">
                      Guia Completo
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                  {area.tagline}
                </p>

                {/* Topics list */}
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {area.topics.map((t) => (
                    <li
                      key={t.id}
                      className="p-1.5 px-2.5 rounded-md bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-[13px] hover:bg-slate-800/60 transition-colors"
                    >
                      <span className={t.isMethod ? 'font-mono text-amber-300 text-xs' : 'text-slate-300'}>
                        {t.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="group-hover:text-white transition-colors">
                  Clique para ver sintaxe e código
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
              </div>
            </article>
          );
        })}
      </section>

      {/* Modal for detailed Area inspection */}
      <AreaDetailModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
        onNavigateToPooSection={(secId) => {
          setSelectedArea(null);
          onNavigateToPoo(secId);
        }}
      />
    </div>
  );
};
