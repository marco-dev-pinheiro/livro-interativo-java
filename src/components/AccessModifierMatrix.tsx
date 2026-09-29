import React, { useState } from 'react';
import { Lock, Unlock, Eye, CheckCircle2, XCircle } from 'lucide-react';

export const AccessModifierMatrix: React.FC = () => {
  const [selectedModifier, setSelectedModifier] = useState<'public' | 'protected' | 'default' | 'private'>('private');

  const modifierInfo = {
    public: {
      name: 'public',
      level: 'Mais Aberto',
      description: 'Acessível irrestritamente a partir de qualquer classe em qualquer pacote do projeto.',
      rules: [
        { context: 'Mesma Classe', allowed: true },
        { context: 'Mesmo Pacote', allowed: true },
        { context: 'Subclasse (outro pacote)', allowed: true },
        { context: 'Outro Pacote qualquer', allowed: true }
      ],
      recommendation: 'Use para a API pública de métodos (ex: sacar, depositar, calcularTotal) ou constantes públicas.'
    },
    protected: {
      name: 'protected',
      level: 'Herança & Pacote',
      description: 'Acessível por todas as classes no mesmo pacote e exclusivamente por subclasses mesmo se estiverem em outros pacotes.',
      rules: [
        { context: 'Mesma Classe', allowed: true },
        { context: 'Mesmo Pacote', allowed: true },
        { context: 'Subclasse (outro pacote)', allowed: true },
        { context: 'Outro Pacote qualquer', allowed: false }
      ],
      recommendation: 'Use para métodos auxiliares que classes filhas precisam sobrescrever ou acessar.'
    },
    default: {
      name: 'default (package-private)',
      level: 'Pacote Apenas',
      description: 'Quando nenhuma palavra-chave é declarada. Visível somente por classes que residem exatamente no mesmo pacote.',
      rules: [
        { context: 'Mesma Classe', allowed: true },
        { context: 'Mesmo Pacote', allowed: true },
        { context: 'Subclasse (outro pacote)', allowed: false },
        { context: 'Outro Pacote qualquer', allowed: false }
      ],
      recommendation: 'Bom para isolar detalhes internos de implementação dentro de um submódulo sem expor para o resto da aplicação.'
    },
    private: {
      name: 'private',
      level: 'Mais Restrito (Blindado)',
      description: 'Visível exclusivamente dentro das chaves da própria classe onde foi declarado.',
      rules: [
        { context: 'Mesma Classe', allowed: true },
        { context: 'Mesmo Pacote', allowed: false },
        { context: 'Subclasse (outro pacote)', allowed: false },
        { context: 'Outro Pacote qualquer', allowed: false }
      ],
      recommendation: 'Regra de ouro: TODOS os atributos de dados devem ser private para preservar a integridade do objeto.'
    }
  };

  const current = modifierInfo[selectedModifier];

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Lock className="w-5 h-5 text-cyan-400" />
          <h4 className="font-semibold text-white text-base">Simulador de Visibilidade & Modificadores</h4>
        </div>

        {/* Selector */}
        <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs font-mono">
          {(['public', 'protected', 'default', 'private'] as const).map(modifierKey => (
            <button
              key={modifierKey}
              onClick={() => setSelectedModifier(modifierKey)}
              className={`px-2.5 py-1 rounded transition-colors ${
                selectedModifier === modifierKey
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {modifierKey}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Rules Table */}
        <div className="bg-slate-950/80 rounded-xl border border-slate-800 p-4">
          <div className="text-xs text-slate-400 font-semibold mb-3 flex items-center justify-between">
            <span>QUEM CONSEGUE ACESSAR COM <code className="text-cyan-400 font-bold">{current.name}</code>?</span>
            <span className="text-[11px] text-slate-500">{current.level}</span>
          </div>

          <div className="space-y-2.5">
            {current.rules.map(rule => (
              <div
                key={rule.context}
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900/70 border border-slate-800/80 text-xs"
              >
                <span className="text-slate-300 font-medium">{rule.context}</span>
                <span className="flex items-center gap-1.5">
                  {rule.allowed ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Sim, visível</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-400" />
                      <span className="text-rose-400 font-semibold">Não, bloqueado</span>
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Explanation & Best Practice */}
        <div className="space-y-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              {current.name}
            </span>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">
              {current.description}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
            <span className="font-semibold text-white block mb-1">🎯 Quando utilizar:</span>
            {current.recommendation}
          </div>

          <div className="font-mono text-xs bg-slate-950 p-3 rounded-lg border border-slate-800 text-slate-300">
            <code>
              {selectedModifier === 'default' ? '// sem palavra-chave' : selectedModifier} double saldo;
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};
