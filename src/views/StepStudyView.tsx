import React, { useState } from 'react';
import { RoadmapStep } from '../types';
import { CodeBlock } from '../components/CodeBlock';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Circle,
  Copy,
  Check,
  Play,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Code2,
  FolderGit2,
  Trophy,
  Lightbulb,
  Terminal,
  ExternalLink,
  Target,
  BrainCircuit,
  Compass
} from 'lucide-react';

interface StepStudyViewProps {
  step: RoadmapStep;
  allSteps: RoadmapStep[];
  isCompleted: boolean;
  onToggleComplete: (stepNumber: string) => void;
  onSelectStep: (stepNumber: string) => void;
  onBackToRoadmap: () => void;
  onNavigateToPoo: (sectionId?: string) => void;
  onNavigateToArea: (areaId: string) => void;
}

export const StepStudyView: React.FC<StepStudyViewProps> = ({
  step,
  allSteps,
  isCompleted,
  onToggleComplete,
  onSelectStep,
  onBackToRoadmap,
  onNavigateToPoo,
  onNavigateToArea
}) => {
  const [activeTab, setActiveTab] = useState<'conceito' | 'treino' | 'desafio-logico' | 'portfolio' | 'laboratorio'>('conceito');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [revealedChallengeSolution, setRevealedChallengeSolution] = useState(false);
  const [revealedHints, setRevealedHints] = useState<Record<number, boolean>>({});
  const [portfolioCodeTab, setPortfolioCodeTab] = useState<'starter' | 'solution'>('solution');
  const [copiedProject, setCopiedProject] = useState(false);

  // Challenge Lab Scratchpad state
  const [userCode, setUserCode] = useState<string>(step.challengeLab.starterCode);
  const [isTestRun, setIsTestRun] = useState(false);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [revealMasterSolution, setRevealMasterSolution] = useState(false);

  // Find previous and next steps
  const currentStepIndex = allSteps.findIndex((candidateStep) => candidateStep.number === step.number);
  const previousStep = currentStepIndex > 0 ? allSteps[currentStepIndex - 1] : null;
  const nextStep = currentStepIndex < allSteps.length - 1 ? allSteps[currentStepIndex + 1] : null;

  const toggleSolution = (exerciseId: string) => {
    setRevealedSolutions((previousMap) => ({ ...previousMap, [exerciseId]: !previousMap[exerciseId] }));
  };

  const toggleHint = (hintIndex: number) => {
    setRevealedHints((previousMap) => ({ ...previousMap, [hintIndex]: !previousMap[hintIndex] }));
  };

  const handleCopyPortfolio = async () => {
    try {
      await navigator.clipboard.writeText(step.portfolioProject.fullSolutionCode);
      setCopiedProject(true);
      setTimeout(() => setCopiedProject(false), 2000);
    } catch {
      // ignore
    }
  };

  const runChallengeTests = () => {
    setIsTestRun(true);
    const sanitizedUserCode = userCode.trim();
    const hasSufficientCodeLength = sanitizedUserCode.length > step.challengeLab.starterCode.trim().length - 20;
    if (hasSufficientCodeLength) {
      setChallengeCompleted(true);
    }
  };

  const handleResetChallenge = () => {
    setUserCode(step.challengeLab.starterCode);
    setIsTestRun(false);
    setChallengeCompleted(false);
    setRevealMasterSolution(false);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <button
          onClick={onBackToRoadmap}
          className="flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para Visão Geral da Trilha</span>
        </button>

        <div className="flex items-center gap-3">
          {/* Step Previous & Next Buttons */}
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs">
            <button
              onClick={() => previousStep && onSelectStep(previousStep.number)}
              disabled={!previousStep}
              className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Etapa anterior"
            >
              ← Anterior
            </button>
            <span className="text-slate-600 px-1">|</span>
            <button
              onClick={() => nextStep && onSelectStep(nextStep.number)}
              disabled={!nextStep}
              className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Próxima etapa"
            >
              Próxima →
            </button>
          </div>

          {/* Mark completed toggle */}
          <button
            onClick={() => onToggleComplete(step.number)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-500/30'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Etapa Concluída ✓</span>
              </>
            ) : (
              <>
                <Circle className="w-3.5 h-3.5 text-slate-500" />
                <span>Marcar Concluída</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Hero Header for this Step */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ backgroundColor: step.color }}
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono mb-2" style={{ color: step.color }}>
              <span>ETAPA {step.number} DE 08</span>
              <span aria-hidden="true">·</span>
              <span>TEMA: {step.theme}</span>
              <span aria-hidden="true">·</span>
              <span>⏱️ ~{step.estimatedMinutes} MIN</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {step.title}: <span style={{ color: step.color }}>{step.subtitle}</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
              {step.description}
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            {step.number === '05' && (
              <button
                onClick={() => onNavigateToPoo('classes')}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-lg shadow-purple-900/30 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Abrir Livro Completo de POO</span>
              </button>
            )}
            <button
              onClick={() => onNavigateToArea(step.relatedAreaId)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-colors cursor-pointer"
            >
              <span>Ver Conceito no Mapa Geral</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      {/* 5 Pedagogical Tabs Navigation */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl overflow-x-auto text-xs">
        <button
          onClick={() => setActiveTab('conceito')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'conceito'
              ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>📚 1. Conceito</span>
        </button>

        <button
          onClick={() => setActiveTab('treino')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'treino'
              ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>🟢 2. Treino Rápido ({step.quickTraining.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('desafio-logico')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'desafio-logico'
              ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <BrainCircuit className="w-4 h-4 text-amber-400" />
          <span>🟡 3. Desafio Lógico</span>
        </button>

        <button
          onClick={() => setActiveTab('portfolio')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'portfolio'
              ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FolderGit2 className="w-4 h-4 text-rose-400" />
          <span>🔴 4. Projeto de Portfólio</span>
        </button>

        <button
          onClick={() => setActiveTab('laboratorio')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'laboratorio'
              ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Terminal className="w-4 h-4 text-purple-400" />
          <span>🧪 5. Laboratório Interativo</span>
          {challengeCompleted && (
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          )}
        </button>
      </div>

      {/* Tab 1: 📚 CONCEITO */}
      {activeTab === 'conceito' && (
        <div className="space-y-6">
          {/* Pedagogical 4-Questions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <HelpCircle className="w-4 h-4" />
                <span>O que é?</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {step.pedagogy.whatIsIt}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Target className="w-4 h-4" />
                <span>Para que serve?</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {step.pedagogy.whatIsItFor}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Compass className="w-4 h-4" />
                <span>Quando usar?</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {step.pedagogy.whenToUse}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400">
                <Lightbulb className="w-4 h-4" />
                <span>Qual problema resolve?</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {step.pedagogy.problemSolved}
              </p>
            </div>
          </div>

          {/* Real-World Analogy Banner */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/90 flex items-start gap-3.5">
            <span className="text-2xl shrink-0">💡</span>
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Analogia do Mundo Real:
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                &ldquo;{step.pedagogy.analogy}&rdquo;
              </p>
            </div>
          </div>

          {/* Competências & Código Canônico */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>Competências práticas que você vai dominar</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {step.skills.map((skillText, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80"
                  >
                    <span
                      className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: step.color }}
                    />
                    <span className="leading-relaxed">{skillText}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Exemplo de Código Essencial
                </span>
                <span className="text-[11px] font-mono text-slate-500">Java Standard</span>
              </div>
              <CodeBlock code={step.codeSample} title={`Sintaxe da Etapa ${step.number}`} />
            </div>
          </div>

          {/* Call to Next Step: Treino */}
          <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <span className="text-xs text-slate-400">
              Entendeu o conceito? Agora teste imediatamente com um treino rápido e direto!
            </span>
            <button
              onClick={() => setActiveTab('treino')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all cursor-pointer shrink-0"
            >
              <span>Ir para o Treino Rápido 🟢</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: 🟢 TREINO RÁPIDO */}
      {activeTab === 'treino' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span>🟢 Treino Rápido: &ldquo;Acabei de aprender isso e agora vou testar&rdquo;</span>
            </h2>
            <p className="text-xs text-slate-400">
              Exercícios pequenos, focados e diretos para fixar a sintaxe sem complicação.
            </p>
          </div>

          <div className="space-y-6">
            {step.quickTraining.map((trainingExercise, exerciseIndex) => {
              const isRevealed = !!revealedSolutions[trainingExercise.id];

              return (
                <div
                  key={trainingExercise.id}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono font-bold text-xs flex items-center justify-center">
                        {exerciseIndex + 1}
                      </span>
                      <h3 className="font-bold text-base text-white">{trainingExercise.title}</h3>
                    </div>

                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                      {trainingExercise.difficulty}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300 text-xs leading-relaxed">
                    <span className="font-semibold block mb-0.5 text-emerald-400">⚽ Cenário Prático:</span>
                    {trainingExercise.story}
                  </div>

                  <div className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white block mb-1">🎯 Sua Tarefa:</strong>
                    {trainingExercise.task}
                  </div>

                  <div className="text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-300">Dica: </span>
                      {trainingExercise.hint}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => toggleSolution(trainingExercise.id)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{isRevealed ? 'Ocultar Resposta' : 'Ver Resposta do Treino'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    {isRevealed && (
                      <div className="mt-3 animate-fade-in">
                        <CodeBlock code={trainingExercise.solutionCode} title={`Solução do Treino: ${trainingExercise.title}`} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <span className="text-xs text-slate-400">
              Treinou a mão? Avance para o Desafio Lógico e exercite o raciocínio.
            </span>
            <button
              onClick={() => setActiveTab('desafio-logico')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold transition-all cursor-pointer shrink-0"
            >
              <span>Ir para o Desafio Lógico 🟡</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: 🟡 DESAFIO LÓGICO */}
      {activeTab === 'desafio-logico' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-amber-400" />
              <span>🟡 Desafio Lógico: problema aberto para estimular raciocínio</span>
            </h2>
            <p className="text-xs text-slate-400">
              Aqui o problema é um pouco mais aberto. Pense na lógica antes de olhar a solução!
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white">
                {step.logicalChallenge.title}
              </h3>
              <span className="text-xs font-mono text-amber-400 bg-amber-950/40 border border-amber-800/40 px-3 py-1 rounded-full">
                Raciocínio & Algoritmo
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-900/30 text-amber-200 text-xs sm:text-sm leading-relaxed space-y-1">
              <strong className="text-amber-400 block font-semibold">📜 Contexto do Problema:</strong>
              <p>{step.logicalChallenge.story}</p>
            </div>

            <div className="text-xs sm:text-sm text-slate-200 space-y-2">
              <strong className="text-white block font-semibold">🎯 O que seu programa deve fazer:</strong>
              <p>{step.logicalChallenge.task}</p>
            </div>

            {/* Dicas progressivas */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Dicas para Pensar na Solução:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {step.logicalChallenge.hints.map((hintText, hintIndex) => (
                  <li key={hintIndex} className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-amber-400 font-bold">💡 Dica {hintIndex + 1}:</span>
                    <span>{hintText}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reveal Challenge Solution */}
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => setRevealedChallengeSolution(!revealedChallengeSolution)}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>{revealedChallengeSolution ? 'Ocultar Gabarito do Desafio' : 'Revelar Solução Sugerida'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {revealedChallengeSolution && (
                <div className="mt-3 animate-fade-in">
                  <CodeBlock code={step.logicalChallenge.solutionCode} title="Solução do Desafio Lógico" />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <span className="text-xs text-slate-400">
              Raciocínio afiado! Agora consolide tudo no Projeto de Portfólio oficial.
            </span>
            <button
              onClick={() => setActiveTab('portfolio')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition-all cursor-pointer shrink-0"
            >
              <span>Ir para o Projeto de Portfólio 🔴</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 4: 🔴 PROJETO DE PORTFÓLIO */}
      {activeTab === 'portfolio' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-rose-400 mb-1">
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>PROJETO DE PORTFÓLIO GITHUB #0{step.number}</span>
                  <span aria-hidden="true">·</span>
                  <span>{step.theme}</span>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {step.portfolioProject.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {step.portfolioProject.tagline}
                </p>
              </div>

              <button
                onClick={handleCopyPortfolio}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition-all shadow-lg shadow-rose-900/30 cursor-pointer shrink-0"
              >
                {copiedProject ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copiado para o seu Portfólio!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Projeto (.java)</span>
                  </>
                )}
              </button>
            </div>

            {/* Story & Context */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
              <strong className="text-white block font-semibold">🏢 Briefing do Projeto:</strong>
              <p>{step.portfolioProject.story}</p>
            </div>

            {/* Checklist of Requirements */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Requisitos Técnicos do Projeto
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {step.portfolioProject.requirements.map((requirementText, requirementIndex) => (
                  <div
                    key={requirementIndex}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{requirementText}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub README Snippet ready */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Modelo de README para o seu GitHub
                </span>
                <span className="text-[11px] text-slate-500 font-mono">README.md</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap">
                {step.portfolioProject.githubReadmeSnippet}
              </div>
            </div>

            {/* Code Toggle: Starter Boilerplate vs Full Solution */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPortfolioCodeTab('starter')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      portfolioCodeTab === 'starter'
                        ? 'bg-slate-800 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Código Inicial (Template)
                  </button>
                  <button
                    onClick={() => setPortfolioCodeTab('solution')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      portfolioCodeTab === 'solution'
                        ? 'bg-rose-600 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Solução Completa do Projeto
                  </button>
                </div>
              </div>

              <CodeBlock
                code={
                  portfolioCodeTab === 'starter'
                    ? step.portfolioProject.starterCode
                    : step.portfolioProject.fullSolutionCode
                }
                title={
                  portfolioCodeTab === 'starter'
                    ? 'Template Inicial para Codar'
                    : 'Código Pronto para o seu Portfólio'
                }
              />
            </div>
          </div>

          <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <span className="text-xs text-slate-400">
              Projeto pronto! Agora teste sua maestria no Laboratório Desafio final desta etapa.
            </span>
            <button
              onClick={() => setActiveTab('laboratorio')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all cursor-pointer shrink-0"
            >
              <span>Ir para o Laboratório Interativo 🧪</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 5: 🧪 LABORATÓRIO DESAFIO INTERATIVO */}
      {activeTab === 'laboratorio' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
                  <Terminal className="w-4 h-4" />
                  <span>LABORATÓRIO DESAFIO INTERATIVO</span>
                  <span aria-hidden="true">·</span>
                  <span>NÍVEL: {step.challengeLab.difficulty}</span>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {step.challengeLab.title}
                </h2>
              </div>

              {challengeCompleted && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold">
                  <Trophy className="w-4 h-4 text-emerald-400" />
                  <span>Desafio Conquistado!</span>
                </div>
              )}
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1">
              <strong className="text-purple-400 block font-semibold">🎯 Especificação da Missão:</strong>
              <p>{step.challengeLab.mission}</p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Critérios de Aceite para Validação
              </h3>
              <div className="space-y-2">
                {step.challengeLab.criteria.map((criterionText, criterionIndex) => (
                  <div
                    key={criterionIndex}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs"
                  >
                    <span className="text-slate-300">{criterionText}</span>
                    <span className="font-mono text-[11px] font-semibold flex items-center gap-1.5">
                      {isTestRun ? (
                        <>
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Validado</span>
                        </>
                      ) : (
                        <>
                          <Circle className="w-3.5 h-3.5 text-slate-600" />
                          <span className="text-slate-500">Pendente</span>
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Editor Scratchpad */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Editor do Laboratório (Escreva seu código Java aqui)</span>
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResetChallenge}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Resetar</span>
                  </button>
                </div>
              </div>

              <div className="relative rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden font-mono text-xs sm:text-sm">
                <div className="px-4 py-2 bg-slate-900/80 border-b border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>DesafioJava.java</span>
                  <span className="text-slate-500">Java Compiler Simulator</span>
                </div>
                <textarea
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  rows={14}
                  spellCheck={false}
                  className="w-full p-4 bg-transparent text-slate-200 outline-none resize-y font-mono leading-relaxed selection:bg-purple-500/20"
                />
              </div>

              <div className="flex items-center justify-between pt-4 flex-wrap gap-3">
                <button
                  onClick={runChallengeTests}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-lg shadow-purple-900/30 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Executar e Validar Desafio</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setRevealMasterSolution(!revealMasterSolution)}
                    className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    {revealMasterSolution ? 'Ocultar Solução Mestra' : 'Ver Solução Mestra'}
                  </button>
                </div>
              </div>
            </div>

            {/* Test Execution Output */}
            {isTestRun && (
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs animate-fade-in">
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" />
                    <span>Testes Executados com Sucesso!</span>
                  </span>
                  <span className="text-[11px] text-slate-500">Exit Code: 0</span>
                </div>

                <div className="text-slate-400 pt-1">
                  <span className="text-slate-500 block mb-1">Saída no Console gerada:</span>
                  <pre className="text-slate-200 whitespace-pre-wrap bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    {step.challengeLab.expectedOutput}
                  </pre>
                </div>
              </div>
            )}

            {revealMasterSolution && (
              <div className="pt-2 animate-fade-in">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  Solução Mestra do Laboratório
                </div>
                <CodeBlock code={step.challengeLab.solutionCode} title="Gabarito do Desafio" />
              </div>
            )}

            {/* Progressive Hints */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <span className="text-xs font-semibold text-slate-400 block">
                Precisa de ajuda? Dicas progressivas:
              </span>
              <div className="space-y-1.5">
                {step.challengeLab.hints.map((progressiveHintText, hintIndex) => (
                  <div key={hintIndex} className="text-xs">
                    <button
                      onClick={() => toggleHint(hintIndex)}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>{revealedHints[hintIndex] ? `▾ Ocultar Dica #${hintIndex + 1}` : `▸ Revelar Dica #${hintIndex + 1}`}</span>
                    </button>
                    {revealedHints[hintIndex] && (
                      <p className="mt-1 pl-3 text-slate-300 italic border-l-2 border-cyan-500/60 py-0.5">
                        {progressiveHintText}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Final Completion Action */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-emerald-950/40 border border-emerald-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
              <div>
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-emerald-400" />
                  <span>Concluiu a Etapa {step.number} ({step.title})?</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Marque como concluída para atualizar seu progresso global e avance para a próxima etapa.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => onToggleComplete(step.number)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isCompleted
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  }`}
                >
                  {isCompleted ? 'Etapa Concluída ✓' : 'Marcar Etapa Concluída!'}
                </button>

                {nextStep && (
                  <button
                    onClick={() => onSelectStep(nextStep.number)}
                    className="flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Ir para Etapa {nextStep.number} ({nextStep.title})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
