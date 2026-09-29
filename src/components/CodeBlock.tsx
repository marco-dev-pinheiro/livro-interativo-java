import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'java',
  title,
  showLineNumbers = true
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div className="relative my-4 rounded-xl border border-slate-800 bg-slate-900/90 overflow-hidden font-mono text-xs sm:text-sm shadow-xl">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800/80 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80"></span>
          </div>
          {title ? (
            <span className="font-sans font-medium text-slate-300 ml-2">{title}</span>
          ) : (
            <span className="text-slate-400 font-mono ml-2 uppercase text-[11px] tracking-wider">{language}</span>
          )}
        </div>

        <button
          onClick={handleCopy}
          type="button"
          aria-label="Copiar código para a área de transferência"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer text-xs"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-sans font-medium">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-sans">Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="p-4 overflow-x-auto text-slate-200">
        <pre className="flex leading-relaxed font-mono">
          {showLineNumbers && (
            <div className="select-none pr-4 mr-2 border-r border-slate-800 text-slate-600 text-right text-xs shrink-0">
              {lines.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
          )}
          <code className="text-slate-200 block whitespace-pre">
            {code.trim()}
          </code>
        </pre>
      </div>
    </div>
  );
};
