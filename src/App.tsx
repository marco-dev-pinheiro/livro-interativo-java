import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ViewMode } from './types';
import { VisualMapView } from './views/VisualMapView';
import { Search, BookOpen, Layers, Compass, Zap, HelpCircle, CheckCircle2 } from 'lucide-react';

const PooBookView = lazy(() => import('./views/PooBookView').then(m => ({ default: m.PooBookView })));
const RoadmapView = lazy(() => import('./views/RoadmapView').then(m => ({ default: m.RoadmapView })));
const QuickRefView = lazy(() => import('./views/QuickRefView').then(m => ({ default: m.QuickRefView })));
const QuizView = lazy(() => import('./views/QuizView').then(m => ({ default: m.QuizView })));
const SearchModal = lazy(() => import('./components/SearchModal').then(m => ({ default: m.SearchModal })));

const ViewLoading = () => (
  <div className="py-20 flex flex-col items-center justify-center text-slate-400">
    <div className="w-8 h-8 border-2 border-slate-700 border-t-amber-400 rounded-full animate-spin mb-3"></div>
    <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Carregando módulo...</span>
  </div>
);

const viewVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 }
};

const viewTransition = {
  duration: 0.2,
  ease: [0.16, 1, 0.3, 1] as const
};

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>(() => {
    const hash = window.location.hash.replace('#', '');
    if (['map', 'poo', 'roadmap', 'quick-ref', 'quiz'].includes(hash)) {
      return hash as ViewMode;
    }
    return 'map';
  });

  const [pooSectionTarget, setPooSectionTarget] = useState<string | undefined>('classes');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Background prefetch for instant navigation without lag
  useEffect(() => {
    const prefetch = () => {
      import('./views/PooBookView');
      import('./views/RoadmapView');
      import('./views/QuickRefView');
      import('./views/QuizView');
      import('./components/SearchModal');
    };
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (fn: () => void) => number }).requestIdleCallback(prefetch);
    } else {
      const timer = setTimeout(prefetch, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Sync hash with view
  useEffect(() => {
    window.location.hash = currentView;
  }, [currentView]);

  // Global keydown for ⌘K search
  useEffect(() => {
    const handleKeyDown = (keyboardEvent: KeyboardEvent) => {
      if ((keyboardEvent.metaKey || keyboardEvent.ctrlKey) && keyboardEvent.key === 'k') {
        keyboardEvent.preventDefault();
        setIsSearchOpen((isSearchCurrentlyOpen) => !isSearchCurrentlyOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateToPoo = (sectionId?: string) => {
    if (sectionId) {
      setPooSectionTarget(sectionId);
    }
    setCurrentView('poo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToArea = (_targetAreaId: string) => {
    setCurrentView('map');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'map' as ViewMode, label: 'Mapa Visual', icon: Layers },
    { id: 'poo' as ViewMode, label: 'Livro de POO', icon: BookOpen },
    { id: 'roadmap' as ViewMode, label: 'Trilha de Estudos', icon: Compass },
    { id: 'quick-ref' as ViewMode, label: 'Consulta Rápida', icon: Zap },
    { id: 'quiz' as ViewMode, label: 'Quiz & Fixação', icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Skip to Content for Accessibility */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg shadow-lg"
      >
        Ir para o conteúdo principal
      </a>

      {/* Top Bar Contract (3 Zones) */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Zone 1: Single text wordmark */}
          <button
            onClick={() => setCurrentView('map')}
            className="text-base sm:text-lg font-extrabold text-white tracking-tight flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer shrink-0"
          >
            <span>☕</span>
            <span>Java Manual & POO</span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Navegação principal da plataforma"
            className="hidden md:flex items-center gap-1 sm:gap-2 text-xs font-medium text-slate-300"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentView === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setCurrentView(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-800 text-white font-semibold shadow-sm border border-slate-700'
                      : 'hover:text-white hover:bg-slate-900/80 text-slate-400'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action (Search trigger) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 transition-colors cursor-pointer"
              aria-label="Abrir busca global de conceitos Java"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Buscar conceito...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-500 bg-slate-950 rounded border border-slate-800">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="md:hidden flex items-center gap-1 overflow-x-auto pt-2.5 pb-1 -mx-2 px-2 border-t border-slate-800/60 mt-2 text-xs">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentView === link.id;

            return (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentView(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-slate-800 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Content Area */}
      <main id="conteudo-principal" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <AnimatePresence mode="wait">
          {currentView === 'map' && (
            <motion.div
              key="map"
              variants={viewVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={viewTransition}
            >
              <VisualMapView
                onNavigateToPoo={navigateToPoo}
                onNavigateToRoadmap={() => setCurrentView('roadmap')}
                onNavigateToQuickRef={() => setCurrentView('quick-ref')}
              />
            </motion.div>
          )}

          {currentView === 'poo' && (
            <motion.div
              key="poo"
              variants={viewVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={viewTransition}
            >
              <Suspense fallback={<ViewLoading />}>
                <PooBookView
                  initialSectionId={pooSectionTarget}
                  onNavigateToArea={navigateToArea}
                />
              </Suspense>
            </motion.div>
          )}

          {currentView === 'roadmap' && (
            <motion.div
              key="roadmap"
              variants={viewVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={viewTransition}
            >
              <Suspense fallback={<ViewLoading />}>
                <RoadmapView
                  onNavigateToPoo={navigateToPoo}
                  onNavigateToArea={navigateToArea}
                />
              </Suspense>
            </motion.div>
          )}

          {currentView === 'quick-ref' && (
            <motion.div
              key="quick-ref"
              variants={viewVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={viewTransition}
            >
              <Suspense fallback={<ViewLoading />}>
                <QuickRefView onNavigateToPoo={navigateToPoo} />
              </Suspense>
            </motion.div>
          )}

          {currentView === 'quiz' && (
            <motion.div
              key="quiz"
              variants={viewVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={viewTransition}
            >
              <Suspense fallback={<ViewLoading />}>
                <QuizView onNavigateToPoo={navigateToPoo} />
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Search Modal */}
      {isSearchOpen && (
        <Suspense fallback={null}>
          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onNavigate={(view, sectionId) => {
              if (view === 'poo' && sectionId) {
                setPooSectionTarget(sectionId);
              }
              setCurrentView(view);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </Suspense>
      )}

      {/* Semantic Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="text-slate-400 font-medium">
            ☕ Manual de Estudos Java & Guia Visual de Orientação a Objetos
          </p>
          <p className="text-slate-500">
            Organizado e estruturado por Marco. Conceitos semânticos unificados, links interativos e boas práticas de engenharia de software.
          </p>
        </div>
      </footer>
    </div>
  );
}
