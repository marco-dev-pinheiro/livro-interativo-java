import React, { useState } from 'react';
import { Network, HelpCircle, ArrowRight, ShieldCheck, Trash2 } from 'lucide-react';

export const RelationshipExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'associacao' | 'composicao' | 'agregacao'>('composicao');
  const [isWholeDeleted, setIsWholeDeleted] = useState(false);

  const scenarios = {
    associacao: {
      title: 'Associação',
      nature: 'Usa um (Independente)',
      whole: 'Pedido',
      part: 'Cliente',
      symbol: '──►',
      cardinality: '1 ── N',
      description: 'Um objeto usa outro, mas ambos têm ciclos de vida independentes.',
      partSurvives: true,
      survivalText: 'Se o Pedido for cancelado ou apagado, o Cliente CONTINUA existindo normalmente no cadastro!',
      code: `public class Pedido {\n    private Cliente cliente; // Associação\n}`
    },
    composicao: {
      title: 'Composição',
      nature: 'Parte-todo FORTE (Dependência existencial)',
      whole: 'Pedido',
      part: 'ItemPedido',
      symbol: '◆──',
      cardinality: '1 ── N',
      description: 'A parte só existe enquanto o todo existir. Relação de posse existencial.',
      partSurvives: false,
      survivalText: 'Ao excluir o Pedido, seus itens perdem o sentido e são destruídos pela Garbage Collection.',
      code: `public class Pedido {\n    private List<ItemPedido> itens; // Composição forte\n}`
    },
    agregacao: {
      title: 'Agregação',
      nature: 'Parte-todo FRACA (Independente)',
      whole: 'Time',
      part: 'Jogador',
      symbol: '◇──',
      cardinality: '1 ── N',
      description: 'Relação todo-parte onde a parte pode existir mesmo que o todo acabe.',
      partSurvives: true,
      survivalText: 'Se o Time for desfeito ou falir, o Jogador continua existindo como profissional livre no mercado.',
      code: `public class Time {\n    private List<Jogador> jogadores; // Agregação fraca\n}`
    }
  };

  const current = scenarios[activeTab];

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Network className="w-5 h-5 text-emerald-400" />
          <h4 className="font-semibold text-white text-base">Laboratório Visual de Relacionamentos</h4>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
          {(['composicao', 'associacao', 'agregacao'] as const).map(relationshipType => (
            <button
              key={relationshipType}
              onClick={() => {
                setActiveTab(relationshipType);
                setIsWholeDeleted(false);
              }}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors capitalize ${
                activeTab === relationshipType
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {relationshipType === 'composicao' ? 'Composição' : relationshipType === 'associacao' ? 'Associação' : 'Agregação'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Visual Box Diagram */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-5 flex flex-col items-center justify-center min-h-[220px]">
          <div className="text-xs text-slate-500 mb-4 font-mono uppercase tracking-wider">
            Simulação de Ciclo de Vida em Memória
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center w-full">
            {/* The Whole */}
            <div className={`p-4 rounded-xl border text-center transition-all duration-300 w-36 ${
              isWholeDeleted
                ? 'border-dashed border-rose-500/50 bg-rose-950/20 opacity-40 scale-95'
                : 'border-emerald-500/60 bg-emerald-950/20 text-emerald-300 shadow-lg shadow-emerald-950/40'
            }`}>
              <div className="text-xs text-slate-400 mb-1">Todo / Container</div>
              <div className="font-bold text-base font-mono">{current.whole}</div>
              <div className="text-[11px] text-slate-400 mt-1">
                {isWholeDeleted ? 'Destruído' : 'Instanciado'}
              </div>
            </div>

            {/* Connection Arrow & Symbol */}
            <div className="flex flex-col items-center text-slate-400 text-xs font-mono">
              <span className="text-emerald-400 font-bold">{current.symbol}</span>
              <span className="text-[10px] text-slate-500">{current.cardinality}</span>
              <span className="text-[10px] uppercase text-slate-400 mt-0.5">{current.nature.split(' ')[0]}</span>
            </div>

            {/* The Part */}
            <div className={`p-4 rounded-xl border text-center transition-all duration-300 w-36 ${
              isWholeDeleted && !current.partSurvives
                ? 'border-dashed border-rose-500/50 bg-rose-950/30 opacity-30 scale-90'
                : 'border-cyan-500/60 bg-cyan-950/20 text-cyan-300 shadow-lg shadow-cyan-950/40'
            }`}>
              <div className="text-xs text-slate-400 mb-1">Parte / Membro</div>
              <div className="font-bold text-base font-mono">{current.part}</div>
              <div className="text-[11px] mt-1 font-medium">
                {isWholeDeleted
                  ? current.partSurvives
                    ? '✨ Sobrevive!'
                    : '💀 Destruído!'
                  : 'Ativo'}
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="mt-5">
            <button
              onClick={() => setIsWholeDeleted(!isWholeDeleted)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                isWholeDeleted
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-rose-900/60 hover:bg-rose-800 text-rose-200 border border-rose-700/50'
              }`}
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{isWholeDeleted ? 'Restaurar Objeto Principal' : `Excluir o ${current.whole} (Testar)`}</span>
            </button>
          </div>
        </div>

        {/* Detailed Concept Breakdown */}
        <div className="space-y-3">
          <div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              {current.title} · {current.nature}
            </span>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">
              {current.description}
            </p>
          </div>

          <div className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
            current.partSurvives
              ? 'bg-slate-950/80 border-slate-800 text-slate-300'
              : 'bg-amber-950/20 border-amber-800/40 text-amber-200'
          }`}>
            <div className="font-semibold mb-1 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>O Teste Mental Rápido:</span>
            </div>
            {current.survivalText}
          </div>

          <div className="font-mono text-xs bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-300">
            {current.code}
          </div>
        </div>
      </div>
    </div>
  );
};
