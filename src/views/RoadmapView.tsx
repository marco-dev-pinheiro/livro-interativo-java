import React, { useState } from 'react';
import { ROADMAP_STEPS } from '../data/roadmap';
import { RoadmapStep } from '../types';
import { StepStudyView } from './StepStudyView';
import {
  CheckCircle,
  Circle,
  ArrowRight,
  BookOpen,
  Compass,
  Check,
  Sparkles,
  FolderGit2,
  Terminal,
  Trophy,
  Clock,
  BrainCircuit
} from 'lucide-react';

interface RoadmapViewProps {
  onNavigateToPoo: (sectionId?: string) => void;
  onNavigateToArea: (areaId: string) => void;
}

const STORAGE_ROADMAP_KEY = 'java-roadmap-completed-steps';

const STEP_MILESTONES: Record<string, string> = {
  '01': 'Consigo escrever um programa.',
  '02': 'Consigo fazer o programa tomar decisões.',
  '03': 'Consigo trabalhar com vários dados.',
  '04': 'Consigo organizar meu código em métodos.',
  '05': 'Consigo modelar problemas usando objetos.',
  '06': 'Consigo tratar situações inesperadas.',
  '07': 'Consigo persistir informações no disco.',
  '08': 'Consigo processar dados com Streams e Lambdas.'
};

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  onNavigateToPoo,
  onNavigateToArea
}) => {
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_ROADMAP_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [activeStudyStep, setActiveStudyStep] = useState<RoadmapStep | null>(null);

  const toggleStep = (stepNumber: string) => {
    setCompletedSteps((previousCompletedMap) => {
      const updatedCompletedMap = { ...previousCompletedMap, [stepNumber]: !previousCompletedMap[stepNumber] };
      try {
        localStorage.setItem(STORAGE_ROADMAP_KEY, JSON.stringify(updatedCompletedMap));
      } catch (storageError) {
        console.error(storageError);
      }
      return updatedCompletedMap;
    });
  };

  const completedCount = ROADMAP_STEPS.filter((step) => completedSteps[step.number]).length;
  const progressPercent = Math.round((completedCount / ROADMAP_STEPS.length) * 100);

  // If a step is opened for in-depth study, render the StepStudyView
  if (activeStudyStep) {
    return (
      <StepStudyView
        step={activeStudyStep}
        allSteps={ROADMAP_STEPS}
        isCompleted={!!completedSteps[activeStudyStep.number]}
        onToggleComplete={toggleStep}
        onSelectStep={(targetStepNumber) => {
          const targetStep = ROADMAP_STEPS.find((step) => step.number === targetStepNumber);
          if (targetStep) {
            setActiveStudyStep(targetStep);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onBackToRoadmap={() => {
          setActiveStudyStep(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateToPoo={onNavigateToPoo}
        onNavigateToArea={onNavigateToArea}
      />
    );
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center pt-4 pb-2 max-w-3xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400">
          <Compass className="w-3.5 h-3.5" />
          <span>LIVRO INTERATIVO DE ESTUDOS</span>
          <span aria-hidden="true">·</span>
          <span>8 ETAPAS PROGRESSIVAS</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-balance">
          Trilha de Estudos <span className="text-cyan-400">Java</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-balance">
          Aprenda Java construindo coisas que existem no <strong className="text-white">mundo real + jogos</strong>.
          Uma jornada progressiva no formato:
        </p>

        {/* Pedagogical Step Formula */}
        <div className="flex items-center justify-center gap-2 flex-wrap text-xs font-semibold py-1">
          <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300">
            📚 Conceito
          </span>
          <span className="text-slate-600">→</span>
          <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-emerald-300">
            🟢 Treino
          </span>
          <span className="text-slate-600">→</span>
          <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-amber-300">
            🟡 Desafio
          </span>
          <span className="text-slate-600">→</span>
          <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-rose-300">
            🔴 Projeto
          </span>
          <span className="text-slate-600">→</span>
          <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-purple-300">
            🧪 Lab
          </span>
        </div>

        {/* Progress Tracker */}
        <div className="max-w-md mx-auto pt-2">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
            <span>Sua Evolução no Portfólio</span>
            <span className="text-cyan-400 font-mono font-bold">
              {completedCount} de {ROADMAP_STEPS.length} etapas concluídas ({progressPercent}%)
            </span>
          </div>
          <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </section>

      {/* 8-Steps Visual Grid */}
      <section aria-label="Etapas da trilha para estudo e portfólio" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {ROADMAP_STEPS.map((step) => {
          const isCompleted = !!completedSteps[step.number];
          const milestoneText = STEP_MILESTONES[step.number] || '';

          return (
            <article
              key={step.number}
              onClick={() => {
                setActiveStudyStep(step);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative bg-slate-900/90 border border-slate-800 hover:border-cyan-500/70 rounded-2xl p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/20"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-8 h-8 rounded-xl font-mono font-bold text-xs flex items-center justify-center"
                      style={{
                        backgroundColor: `${step.color}20`,
                        color: step.color,
                        border: `1px solid ${step.color}40`
                      }}
                    >
                      {step.number}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {step.theme}
                    </span>
                  </div>

                  <button
                    onClick={(clickEvent) => {
                      clickEvent.stopPropagation();
                      toggleStep(step.number);
                    }}
                    type="button"
                    title={isCompleted ? 'Desmarcar' : 'Concluir'}
                    className="cursor-pointer"
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-600 hover:text-slate-400" />
                    )}
                  </button>
                </div>

                <h2 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h2>
                <div className="text-xs text-cyan-400 font-medium mt-0.5">
                  {step.subtitle}
                </div>

                {/* Milestone Quote */}
                <div className="mt-2.5 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 text-[11px] text-slate-300 italic">
                  &ldquo;{milestoneText}&rdquo;
                </div>

                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {step.description}
                </p>

                {/* Inclusions checklist */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5 text-emerald-300">
                    <Sparkles className="w-3 h-3 shrink-0" />
                    <span>🟢 Treino rápido de sintaxe</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-300">
                    <BrainCircuit className="w-3 h-3 shrink-0" />
                    <span>🟡 {step.logicalChallenge.title}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-rose-300">
                    <FolderGit2 className="w-3 h-3 shrink-0" />
                    <span className="truncate">🔴 {step.portfolioProject.title}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-purple-300">
                    <Terminal className="w-3 h-3 shrink-0" />
                    <span>🧪 Lab Interativo com Testes</span>
                  </div>
                </div>
              </div>

              {/* Action trigger on card bottom */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Abrir Aula & Prática
                </span>
                <ArrowRight className="w-4 h-4 text-cyan-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          );
        })}
      </section>

      {/* Philosophy Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-cyan-400">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>FILOSOFIA PEDAGÓGICA PRÁTICA</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Java Construindo Coisas do Mundo Real + Jogos
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            Cada etapa foi desenhada para que você entenda o <strong className="text-slate-200">porquê</strong> de cada recurso:
            desde uma ficha de futebol até um catálogo de cinema, um gerenciador de campeonatos e uma engine de batalha por turnos.
          </p>
        </div>

        <button
          onClick={() => {
            setActiveStudyStep(ROADMAP_STEPS[0]);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-900/40 cursor-pointer shrink-0"
        >
          <span>Iniciar na Etapa 01: ⚽ Futebol</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
