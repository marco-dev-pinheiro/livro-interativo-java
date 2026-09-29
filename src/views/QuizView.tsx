import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, ArrowRight, BookOpen, Award } from 'lucide-react';

interface QuizViewProps {
  onNavigateToPoo: (sectionId?: string) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ onNavigateToPoo }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const question = QUIZ_QUESTIONS[currentQuestionIndex];
  const total = QUIZ_QUESTIONS.length;

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestionIndex]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < total - 1) {
      setCurrentQuestionIndex((previousIndex) => previousIndex + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((previousIndex) => previousIndex - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
  };

  // Score calculation
  const correctCount = QUIZ_QUESTIONS.filter(
    (quizQuestion, questionIndex) => selectedAnswers[questionIndex] === quizQuestion.correctIndex
  ).length;
  const scorePercent = Math.round((correctCount / total) * 100);

  return (
    <div className="space-y-12 max-w-3xl mx-auto">
      {/* Header */}
      <section className="text-center pt-4 pb-2 space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-purple-400">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>AUTOAVALIAÇÃO & FIXAÇÃO</span>
          <span aria-hidden="true">·</span>
          <span>POO & CONCEITOS JAVA</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-balance">
          Quiz de Fixação <span className="text-purple-400">Java</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-balance">
          &quot;Teste antes de entregar códigos prontos!&quot; Valide seu entendimento sobre classes,
          encapsulamento, relacionamentos e boas práticas com feedback explicativo imediato.
        </p>
      </section>

      {!isSubmitted ? (
        /* Question Card */
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          {/* Progress Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-400">
            <span className="font-mono text-purple-400 font-semibold">
              Pergunta {currentQuestionIndex + 1} de {total}
            </span>
            <span>Categoria: <strong className="text-slate-200">{question.category}</strong></span>
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((optionText, optionIndex) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === optionIndex;

              return (
                <button
                  key={optionIndex}
                  onClick={() => handleSelectOption(optionIndex)}
                  className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-purple-950/40 border-purple-500 text-purple-100 shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-purple-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {String.fromCharCode(65 + optionIndex)}
                  </span>
                  <span className="flex-1 mt-0.5 leading-relaxed">{optionText}</span>
                </button>
              );
            })}
          </div>

          {/* Actions Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300 transition-colors"
            >
              Anterior
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestionIndex] === undefined}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white shadow-lg shadow-purple-900/40 transition-all cursor-pointer"
            >
              <span>{currentQuestionIndex === total - 1 ? 'Concluir Teste' : 'Próxima'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-8">
          <div className="text-center space-y-3 pb-6 border-b border-slate-800">
            <div className="w-16 h-16 rounded-full bg-purple-950/60 border border-purple-500/40 flex items-center justify-center mx-auto text-purple-400">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white">Resultado da Avaliação</h2>
            <div className="text-3xl font-extrabold font-mono text-purple-400">
              {scorePercent}% de acerto
            </div>
            <p className="text-xs text-slate-400">
              Você acertou {correctCount} de {total} questões de fundamentos e POO em Java.
            </p>
          </div>

          {/* Explanations List */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Gabarito Didático com Explicações
            </h3>

            {QUIZ_QUESTIONS.map((quizQuestion, questionIndex) => {
              const userAnswer = selectedAnswers[questionIndex];
              const isCorrect = userAnswer === quizQuestion.correctIndex;

              return (
                <div
                  key={quizQuestion.id}
                  className={`p-4 rounded-2xl border text-xs space-y-2 ${
                    isCorrect
                      ? 'bg-emerald-950/15 border-emerald-900/40'
                      : 'bg-rose-950/15 border-rose-900/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-white">
                      {questionIndex + 1}. {quizQuestion.question}
                    </span>
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    )}
                  </div>

                  <div className="text-slate-400">
                    Sua resposta: <strong className={isCorrect ? 'text-emerald-300' : 'text-rose-300'}>
                      {quizQuestion.options[userAnswer]}
                    </strong>
                  </div>

                  {!isCorrect && (
                    <div className="text-emerald-400">
                      Resposta correta: <strong>{quizQuestion.options[quizQuestion.correctIndex]}</strong>
                    </div>
                  )}

                  <div className="p-3 rounded-lg bg-slate-950 text-slate-300 leading-relaxed border border-slate-800/80">
                    <span className="font-semibold text-purple-300 block mb-0.5">Explicação técnica:</span>
                    {quizQuestion.explanation}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800 flex-wrap gap-4">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Refazer Quiz</span>
            </button>

            <button
              onClick={() => onNavigateToPoo('classes')}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-all shadow"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Revisar Conceitos no Livro</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
