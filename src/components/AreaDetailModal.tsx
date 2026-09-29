import React from 'react';
import { JavaArea } from '../types';
import { CodeBlock } from './CodeBlock';
import { X, ArrowRight, BookOpen, Lightbulb, ExternalLink } from 'lucide-react';

interface AreaDetailModalProps {
  area: JavaArea | null;
  onClose: () => void;
  onNavigateToPooSection?: (sectionId: string) => void;
}

export const AreaDetailModal: React.FC<AreaDetailModalProps> = ({
  area,
  onClose,
  onNavigateToPooSection
}) => {
  if (!area) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="area-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <span
              className="w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm"
              style={{ backgroundColor: `${area.color}22`, color: area.color, border: `1px solid ${area.color}44` }}
            >
              {area.number}
            </span>
            <div>
              <h3 id="area-modal-title" className="text-lg font-bold text-white">
                {area.title}
              </h3>
              <p className="text-xs text-slate-400">{area.tagline}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar janela"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Summary */}
          <div className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
            {area.summary}
          </div>

          {/* Topics List */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Tópicos e Métodos Abordados
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {area.topics.map((topic) => (
                <div
                  key={topic.id}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: area.color }}
                  />
                  <span className={topic.isMethod ? 'font-mono text-amber-300 font-medium' : 'text-slate-200'}>
                    {topic.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Dive Code */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              {area.deepDiveCode.title}
            </h4>
            <p className="text-xs text-slate-400 mb-2">
              {area.deepDiveCode.description}
            </p>
            <CodeBlock code={area.deepDiveCode.code} title={area.title} />
          </div>

          {/* Key Takeaway Callout */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-amber-200 text-xs leading-relaxed">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-300 block mb-0.5">Ponto Fundamental para Lembrar:</span>
              {area.keyTakeaway}
            </div>
          </div>

          {/* Cross link to POO if relevant */}
          {area.relatedPooSectionId && onNavigateToPooSection && (
            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-800/40 flex items-center justify-between gap-4">
              <div className="text-xs text-purple-200">
                <span className="font-semibold text-purple-300 block">Conexão com POO:</span>
                Este tópico possui um capítulo aprofundado no Livro de Orientação a Objetos.
              </div>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToPooSection(area.relatedPooSectionId!);
                }}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Explorar no Livro</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/70 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
