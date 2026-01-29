import { getDifficultyBadgeClass } from "../lib/utils";
import { BookOpenIcon, ListIcon, AlertCircleIcon } from "lucide-react";

function ProblemDescription({ problem, currentProblemId, onProblemChange, allProblems }) {
  return (
    <div className="h-full overflow-y-auto bg-[#0d1117]">
      {/* HEADER SECTION */}
      <div className="p-6 bg-[#161b22] border-b border-[#30363d] sticky top-0 z-10">
        <div className="flex items-start justify-between mb-3">
          <h1 className="text-2xl font-bold text-white font-nunito">{problem.title}</h1>
          <span className={`badge ${getDifficultyBadgeClass(problem.difficulty)} px-3 py-1`}>
            {problem.difficulty}
          </span>
        </div>
        <p className="text-[#8b949e] text-sm font-nunito mb-4">{problem.category}</p>

        {/* Problem selector */}
        <select
          className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg text-white text-sm font-nunito focus:outline-none focus:border-[#6217d2] transition-colors hover:border-[#6217d2]/50"
          value={currentProblemId}
          onChange={(e) => onProblemChange(e.target.value)}
        >
          {allProblems.map((p) => (
            <option key={p.id} value={p.id} className="bg-[#161b22] text-white">
              {p.title} - {p.difficulty}
            </option>
          ))}
        </select>
      </div>

      <div className="p-6 space-y-5">
        {/* PROBLEM DESC */}
        <div className="bg-[#161b22] rounded-lg border border-[#30363d]">
          <div className="px-4 py-3 border-b border-[#30363d] flex items-center gap-2">
            <BookOpenIcon className="size-4 text-[#6217d2]" />
            <h2 className="text-base font-semibold text-white font-nunito">Description</h2>
          </div>
          <div className="p-4 space-y-3 text-sm leading-relaxed">
            <p className="text-[#c9d1d9] font-nunito">{problem.description.text}</p>
            {problem.description.notes.map((note, idx) => (
              <p key={idx} className="text-[#c9d1d9] font-nunito">
                {note}
              </p>
            ))}
          </div>
        </div>

        {/* EXAMPLES SECTION */}
        <div className="bg-[#161b22] rounded-lg border border-[#30363d]">
          <div className="px-4 py-3 border-b border-[#30363d] flex items-center gap-2">
            <ListIcon className="size-4 text-[#6217d2]" />
            <h2 className="text-base font-semibold text-white font-nunito">Examples</h2>
          </div>
          <div className="p-4 space-y-4">
            {problem.examples.map((example, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#6217d2]/10 border border-[#6217d2]/30 rounded text-[#6217d2] text-xs font-semibold font-nunito">
                    Example {idx + 1}
                  </span>
                </div>
                <div className="bg-[#0d1117] border border-[#30363d] rounded-md p-3 font-mono text-xs space-y-2">
                  <div className="flex gap-2">
                    <span className="text-[#6217d2] font-bold min-w-[60px]">Input:</span>
                    <span className="text-[#c9d1d9]">{example.input}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#FFCC00] font-bold min-w-[60px]">Output:</span>
                    <span className="text-[#c9d1d9]">{example.output}</span>
                  </div>
                  {example.explanation && (
                    <div className="pt-2 border-t border-[#30363d] mt-2">
                      <span className="text-[#8b949e] font-sans text-xs">
                        <span className="font-semibold text-[#c9d1d9]">Explanation:</span> {example.explanation}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONSTRAINTS */}
        <div className="bg-[#161b22] rounded-lg border border-[#30363d]">
          <div className="px-4 py-3 border-b border-[#30363d] flex items-center gap-2">
            <AlertCircleIcon className="size-4 text-[#6217d2]" />
            <h2 className="text-base font-semibold text-white font-nunito">Constraints</h2>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-[#c9d1d9] text-sm font-nunito">
              {problem.constraints.map((constraint, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-[#6217d2] mt-0.5">•</span>
                  <code className="text-xs bg-[#0d1117] px-2 py-0.5 rounded border border-[#30363d]">
                    {constraint}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemDescription;