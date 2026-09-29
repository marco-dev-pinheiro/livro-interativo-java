export type ViewMode = 'map' | 'poo' | 'roadmap' | 'quick-ref' | 'quiz';

export interface JavaTopic {
  id: string;
  name: string;
  codeSnippet?: string;
  isMethod?: boolean;
}

export interface JavaArea {
  id: string;
  number: string;
  title: string;
  tagline: string;
  icon: string;
  color: string; // Tailwind hex or class reference
  summary: string;
  topics: JavaTopic[];
  deepDiveCode: {
    title: string;
    description: string;
    code: string;
  };
  keyTakeaway: string;
  relatedPooSectionId?: string;
}

export interface FunExercise {
  id: string;
  title: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  story: string;
  task: string;
  hint: string;
  solutionCode: string;
}

export interface PortfolioProject {
  title: string;
  tagline: string;
  story: string;
  githubReadmeSnippet: string;
  requirements: string[];
  starterCode: string;
  fullSolutionCode: string;
}

export interface ChallengeTestCase {
  id: string;
  name: string;
  description: string;
  check: (code: string) => { passed: boolean; message: string };
}

export interface ChallengeLab {
  title: string;
  difficulty: string;
  mission: string;
  starterCode: string;
  solutionCode: string;
  hints: string[];
  criteria: string[];
  expectedOutput: string;
}

export interface PedagogicalConcept {
  whatIsIt: string;
  whatIsItFor: string;
  whenToUse: string;
  problemSolved: string;
  analogy: string;
}

export interface LogicalChallenge {
  title: string;
  story: string;
  task: string;
  hints: string[];
  solutionCode: string;
}

export interface RoadmapStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  theme: string; // e.g. "⚽ Futebol", "🎮 Games", etc.
  pedagogy: PedagogicalConcept;
  skills: string[];
  codeSample: string;
  relatedAreaId: string;
  color: string;
  estimatedMinutes: number;
  quickTraining: FunExercise[]; // 🟢 TREINO (exercícios curtos e diretos)
  logicalChallenge: LogicalChallenge; // 🟡 DESAFIO (problema aberto para pensar)
  funExercises: FunExercise[]; // Mantido para compatibilidade
  portfolioProject: PortfolioProject; // 🔴 PROJETO (portfólio GitHub do mundo real)
  challengeLab: ChallengeLab; // 🧪 LABORATÓRIO DESAFIO INTERATIVO
}

export interface QuickReferenceItem {
  id: string;
  action: string;
  targetJavaFeature: string;
  description: string;
  category: 'I/O' | 'Estruturas' | 'Coleções' | 'POO' | 'Controle & Erros' | 'Avançado';
  code: string;
  relatedPooId?: string;
}

export interface MindMapNode {
  id: string;
  title: string;
  colorVar: string;
  subtopics: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}
