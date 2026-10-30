import React, { useState } from 'react';
import { DATA_ENGINEERING_QUERIES } from '../data/portfolioData';
import { Terminal, Play, CheckCircle2, RotateCcw, Copy, Check, Server, Sparkles } from 'lucide-react';

export const DataEngineerTerminal: React.FC = () => {
  const [selectedQueryIndex, setSelectedQueryIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState<any[] | null>(
    DATA_ENGINEERING_QUERIES[0].output
  );
  const [copied, setCopied] = useState(false);
  const [executionTime, setExecutionTime] = useState("14.2 ms");

  const currentQuery = DATA_ENGINEERING_QUERIES[selectedQueryIndex];

  const handleRun = () => {
    setIsRunning(true);
    setExecutionResult(null);
    setTimeout(() => {
      setIsRunning(false);
      setExecutionResult(currentQuery.output);
      setExecutionTime(`${(Math.random() * 8 + 8).toFixed(1)} ms`);
    }, 450);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentQuery.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-12 sm:py-16 border-t border-[#38BDF8]/10 bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Data Engineering Workbench</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
              Interactive Query & ETL Console
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-xl">
              Demonstrating practical query optimization, multi-table SQL aggregations, and automated Python ETL pipelines written for production workloads.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Query Engine: MySQL 8.0 & Python 3.12</span>
          </div>
        </div>

        {/* Workbench Shell */}
        <div className="rounded-xl bg-[#0F172A] border border-[#38BDF8]/20 shadow-2xl overflow-hidden">
          {/* Top Bar */}
          <div className="px-4 py-3 bg-[#080E1D] border-b border-white/5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <span className="text-xs font-mono text-[#94A3B8] ml-2">prerna@reva-data-lab:~/pipelines</span>
            </div>

            {/* Script / Query Selector */}
            <div className="flex items-center gap-1.5 bg-[#0F172A] p-1 rounded-lg border border-white/5 overflow-x-auto">
              {DATA_ENGINEERING_QUERIES.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => {
                    setSelectedQueryIndex(idx);
                    setExecutionResult(q.output);
                  }}
                  className={`px-3 py-1 text-xs font-mono rounded transition-colors whitespace-nowrap shrink-0 ${
                    selectedQueryIndex === idx
                      ? 'bg-[#38BDF8] text-[#0B1120] font-semibold'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {q.language.toUpperCase()}: {q.title.split(':')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Description & Action Bar */}
          <div className="px-4 py-2.5 bg-[#0B1120] border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
            <p className="text-[#94A3B8] font-mono truncate max-w-2xl">
              <span className="text-[#38BDF8] font-semibold">{currentQuery.title}</span> — {currentQuery.description}
            </p>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopy}
                className="px-2.5 py-1 text-xs font-mono text-[#94A3B8] hover:text-white bg-[#1E293B] hover:bg-[#334155] rounded border border-white/5 transition-colors flex items-center gap-1"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy'}
              </button>

              <button
                onClick={handleRun}
                disabled={isRunning}
                className="px-3 py-1 text-xs font-mono text-white bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-50 rounded transition-colors flex items-center gap-1.5 font-semibold shadow-sm"
              >
                <Play className="w-3 h-3 fill-current" />
                {isRunning ? 'Executing...' : 'Run Query'}
              </button>
            </div>
          </div>

          {/* Code Viewer */}
          <div className="p-4 bg-[#050811] overflow-x-auto font-mono text-xs text-[#E2E8F0] border-b border-white/5 max-h-72">
            <pre className="leading-relaxed">{currentQuery.code}</pre>
          </div>

          {/* Terminal Output Tray */}
          <div className="p-4 bg-[#0B1120] space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[#94A3B8]">
              <span className="flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                <Server className="w-3 h-3 text-[#38BDF8]" /> Query Output Buffer
              </span>
              <span className="text-[11px] text-[#64748B]">
                Execution Latency: <strong className="text-emerald-400 font-normal">{executionTime}</strong>
              </span>
            </div>

            {isRunning ? (
              <div className="py-6 flex flex-col items-center justify-center text-[#94A3B8] space-y-2">
                <RotateCcw className="w-5 h-5 animate-spin text-[#38BDF8]" />
                <span className="text-xs">Parsing AST & scanning relational indices...</span>
              </div>
            ) : executionResult ? (
              <div className="overflow-x-auto rounded border border-white/5 bg-[#080E1D]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#1E293B]/70 text-[#38BDF8] border-b border-white/10 uppercase text-[10px]">
                    <tr>
                      {Object.keys(executionResult[0]).map((key) => (
                        <th key={key} className="py-2 px-3 font-mono font-medium">
                          {key.replace('_', ' ')}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-[#E2E8F0]">
                    {executionResult.map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.02]">
                        {Object.values(row).map((val: any, j) => (
                          <td key={j} className="py-2 px-3 font-mono">
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="py-4 text-[#64748B] text-center">
                Click "Run Query" to evaluate output records.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
