import React, { useState } from 'react';
import { POO_MINDMAP_DATA } from '../data/pooContent';
import { Check, ChevronDown, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';

interface InteractiveMindMapProps {
  studiedSections: Record<string, boolean>;
  onToggleStudied: (id: string) => void;
  onSelectSection: (id: string) => void;
}

export const InteractiveMindMap: React.FC<InteractiveMindMapProps> = ({
  studiedSections,
  onToggleStudied,
  onSelectSection
}) => {
  const [openBranches, setOpenBranches] = useState<Record<string, boolean>>(() => {
    const initialBranchesState: Record<string, boolean> = {};
    POO_MINDMAP_DATA.forEach(branch => {
      initialBranchesState[branch.id] = true;
    });
    return initialBranchesState;
  });

  const toggleBranch = (branchId: string) => {
    setOpenBranches(previousState => ({ ...previousState, [branchId]: !previousState[branchId] }));
  };

  const expandAll = () => {
    const allExpandedState: Record<string, boolean> = {};
    POO_MINDMAP_DATA.forEach(branch => {
      allExpandedState[branch.id] = true;
    });
    setOpenBranches(allExpandedState);
  };

  const collapseAll = () => {
    const allCollapsedState: Record<string, boolean> = {};
    POO_MINDMAP_DATA.forEach(branch => {
      allCollapsedState[branch.id] = false;
    });
    setOpenBranches(allCollapsedState);
  };

  const studiedCount = POO_MINDMAP_DATA.filter(branch => studiedSections[branch.id]).length;

  // Layout math for SVG
  const itemHeight = 36;
  const gap = 14;
  const branchX = 180;
  const branchWidth = 190;
  const leafX = branchX + branchWidth + 45;

  let currentY = 0;
  const rows = POO_MINDMAP_DATA.map(branch => {
    const isOpen = !!openBranches[branch.id];
    const topicCount = isOpen ? branch.topics.length : 1;
    const startY = currentY;
    currentY += topicCount * itemHeight + gap;
    return { branch, startY, topicCount, isOpen };
  });

  const totalHeight = Math.max(currentY - gap, 280);
  const rootY = totalHeight / 2;
  const svgWidth = 720;

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl">
      {/* Mind map Header / Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-base font-semibold text-white flex items-center gap-2">
            <span>🗺️ Mapa Mental Interativo</span>
            <span className="text-xs text-slate-400 font-normal">· POO em Java</span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Clique nos nós coloridos para expandir ou nos subtópicos para saltar diretamente para a seção.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={expandAll}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition-colors"
          >
            <Maximize2 className="w-3 h-3 text-slate-400" />
            <span>Expandir tudo</span>
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition-colors"
          >
            <Minimize2 className="w-3 h-3 text-slate-400" />
            <span>Recolher</span>
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{studiedCount} de {POO_MINDMAP_DATA.length} seções estudadas</span>
          </div>
        </div>
      </div>

      {/* SVG Canvas Container */}
      <div className="overflow-x-auto pt-4 pb-2">
        <svg
          viewBox={`0 0 ${svgWidth} ${totalHeight}`}
          className="w-full min-w-[620px] h-auto select-none"
          role="img"
          aria-label="Mapa mental visual e interativo dos conceitos de Orientação a Objetos em Java"
        >
          {/* Central Root Node */}
          <g className="cursor-pointer" onClick={() => onSelectSection('classes')}>
            <rect
              x={10}
              y={rootY - 22}
              width={130}
              height={44}
              rx={12}
              fill="#0F172A"
              stroke="#E2E8F0"
              strokeWidth={2}
            />
            <text
              x={75}
              y={rootY + 5}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize={13}
              fontWeight="bold"
              fontFamily="system-ui, sans-serif"
            >
              ☕ POO em Java
            </text>
          </g>

          {/* Render Branches and Connecting Curves */}
          {rows.map(({ branch, startY, topicCount, isOpen }) => {
            const branchCenterY = startY + (topicCount * itemHeight) / 2;
            const isStudied = !!studiedSections[branch.id];

            return (
              <g key={branch.id}>
                {/* Curve from root to branch */}
                <path
                  d={`M 140 ${rootY} C 160 ${rootY}, 160 ${branchCenterY}, ${branchX} ${branchCenterY}`}
                  fill="none"
                  stroke={branch.color}
                  strokeWidth={2.2}
                  strokeOpacity={0.7}
                />

                {/* Branch Node (Interactive toggle) */}
                <g
                  className="cursor-pointer transition-transform hover:scale-102"
                  onClick={() => toggleBranch(branch.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isOpen}
                  aria-label={`${branch.title}, clique para ${isOpen ? 'recolher' : 'expandir'}`}
                >
                  <rect
                    x={branchX}
                    y={branchCenterY - 17}
                    width={branchWidth}
                    height={34}
                    rx={8}
                    fill={branch.color}
                    className="transition-colors hover:brightness-110"
                  />
                  <text
                    x={branchX + 12}
                    y={branchCenterY + 5}
                    fill="#0F172A"
                    fontSize={12.5}
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                  >
                    {isStudied ? '✓ ' : ''}{branch.title}
                  </text>
                  <text
                    x={branchX + branchWidth - 14}
                    y={branchCenterY + 5}
                    fill="#0F172A"
                    fontSize={14}
                    textAnchor="end"
                    fontWeight="bold"
                  >
                    {isOpen ? '▾' : '▸'}
                  </text>
                </g>

                {/* Study Mark Quick Button on Branch */}
                <g
                  className="cursor-pointer"
                  onClick={(event) => {
                    event.stopPropagation();
                    onToggleStudied(branch.id);
                  }}
                  aria-label={isStudied ? 'Desmarcar estudo' : 'Marcar como estudada'}
                >
                  <title>{isStudied ? 'Desmarcar estudo' : 'Marcar como estudada'}</title>
                  <circle
                    cx={branchX + branchWidth + 14}
                    cy={branchCenterY}
                    r={9}
                    fill={isStudied ? '#10B981' : '#1E293B'}
                    stroke={branch.color}
                    strokeWidth={1.5}
                  />
                  {isStudied && (
                    <text
                      x={branchX + branchWidth + 14}
                      y={branchCenterY + 3.5}
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize={10}
                      fontWeight="bold"
                    >
                      ✓
                    </text>
                  )}
                </g>

                {/* Subtopics (Leaves) if branch is open */}
                {isOpen &&
                  branch.topics.map((subtopic, subtopicIndex) => {
                    const leafCenterY = startY + subtopicIndex * itemHeight + itemHeight / 2;
                    const textWidth = Math.round(subtopic.length * 7.5 + 26);

                    return (
                      <g key={subtopic}>
                        {/* Curve from branch to subtopic */}
                        <path
                          d={`M ${branchX + branchWidth + 24} ${branchCenterY} C ${branchX + branchWidth + 40} ${branchCenterY}, ${leafX - 15} ${leafCenterY}, ${leafX} ${leafCenterY}`}
                          fill="none"
                          stroke={branch.color}
                          strokeWidth={1.6}
                          strokeOpacity={0.6}
                        />

                        {/* Subtopic Leaf Node (Click to jump to POO Section) */}
                        <g
                          className="cursor-pointer group"
                          onClick={() => onSelectSection(branch.id)}
                        >
                          <rect
                            x={leafX}
                            y={leafCenterY - 13}
                            width={textWidth}
                            height={26}
                            rx={13}
                            fill="#1E293B"
                            stroke={branch.color}
                            strokeWidth={1.3}
                            className="group-hover:fill-slate-800 transition-colors"
                          />
                          <text
                            x={leafX + 13}
                            y={leafCenterY + 4.5}
                            fill="#F1F5F9"
                            fontSize={11.5}
                            fontFamily="system-ui, sans-serif"
                            className="group-hover:fill-amber-300 transition-colors"
                          >
                            {subtopic}
                          </text>
                        </g>
                      </g>
                    );
                  })}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
