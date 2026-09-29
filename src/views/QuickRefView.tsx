import React, { useState } from 'react';
import { QUICK_REFERENCE_ITEMS } from '../data/quickReference';
import { QuickReferenceItem } from '../types';
import { CodeBlock } from '../components/CodeBlock';
import { Zap, Search, Copy, Check, BookOpen, ArrowUpRight } from 'lucide-react';

interface QuickRefViewProps {
  onNavigateToPoo: (sectionId?: string) => void;
}

export const QuickRefView: React.FC<QuickRefViewProps> = ({ onNavigateToPoo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['Todos', 'I/O', 'Estruturas', 'Coleções', 'POO', 'Controle & Erros', 'Avançado'];

  const filteredItems = QUICK_REFERENCE_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
    const normalizedSearchQuery = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !normalizedSearchQuery ||
      item.action.toLowerCase().includes(normalizedSearchQuery) ||
      item.targetJavaFeature.toLowerCase().includes(normalizedSearchQuery) ||
      item.description.toLowerCase().includes(normalizedSearchQuery);

    return matchesCategory && matchesSearch;
  });

  const handleCopy = async (itemId: string, snippetCode: string) => {
    try {
      await navigator.clipboard.writeText(snippetCode);
      setCopiedId(itemId);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center pt-4 pb-2 max-w-3xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-amber-400">
          <Zap className="w-3.5 h-3.5" />
          <span>CONSULTA RÁPIDA DE SINTAXE</span>
          <span aria-hidden="true">·</span>
          <span>&quot;QUERO FAZER X&quot;</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-balance">
          Consulta Rápida <span className="text-amber-500">Java</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-balance">
          &quot;Quero fazer X. Qual recurso ou sintaxe do Java devo procurar?&quot; Encontre instantaneamente
          o comando certo para o seu objetivo prático com exemplos de código prontos.
        </p>

        {/* Search Input */}
        <div className="max-w-xl mx-auto relative pt-2">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(inputChangeEvent) => setSearchQuery(inputChangeEvent.target.value)}
            placeholder="Buscar por objetivo ou recurso (ex: ordenar, imprimir, hashmap, try-catch, herança)..."
            className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/80 shadow-inner transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Limpar
            </button>
          )}
        </div>

        {/* Category Filter Pills (Functional Filter Buttons) */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap pt-2">
          {categories.map((categoryName) => (
            <button
              key={categoryName}
              onClick={() => setSelectedCategory(categoryName)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === categoryName
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {categoryName}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Quick Reference Cards */}
      <section aria-label="Lista de consultas rápidas" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => {
          const isCopied = copiedId === item.id;

          return (
            <div
              key={item.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-200 group shadow-lg"
            >
              <div>
                {/* Header & Feature */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.category}
                  </span>
                  <span className="font-mono text-xs font-bold text-amber-400 bg-amber-950/40 border border-amber-800/50 px-2 py-0.5 rounded">
                    {item.targetJavaFeature}
                  </span>
                </div>

                <h2 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.action}
                </h2>

                <p className="text-xs text-slate-400 mt-1.5 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Code snippet */}
                <div className="relative rounded-lg bg-slate-950 border border-slate-800/90 p-3 text-xs font-mono text-slate-200 overflow-x-auto">
                  <pre className="whitespace-pre">{item.code}</pre>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <button
                  onClick={() => handleCopy(item.id, item.code)}
                  type="button"
                  className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar código</span>
                    </>
                  )}
                </button>

                {item.relatedPooId && (
                  <button
                    onClick={() => onNavigateToPoo(item.relatedPooId)}
                    type="button"
                    className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer text-[11px]"
                  >
                    <span>Ver no Livro de POO</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 text-slate-400 text-sm">
          Nenhum resultado encontrado para os critérios selecionados. Tente limpar a busca.
        </div>
      )}
    </div>
  );
};
