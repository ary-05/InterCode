import { TerminalIcon, CheckCircle2Icon, XCircleIcon } from "lucide-react";

function OutputPanel({ output }) {
  return (
    <div className="h-full bg-[#0d1117] flex flex-col border-l border-t border-[#30363d] min-h-0">
      <div className="px-4 py-2.5 bg-[#161b22] border-b border-[#30363d] flex items-center gap-2 shrink-0">
        <TerminalIcon className="size-4 text-[#6217d2]" />
        <span className="font-semibold text-sm text-white font-nunito">Output</span>
        {output !== null && (
          <span className="ml-auto">
            {output.success ? (
              <div className="flex items-center gap-1.5 text-green-500 text-xs font-semibold">
                <CheckCircle2Icon className="size-3.5" />
                Success
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-red-500 text-xs font-semibold">
                <XCircleIcon className="size-3.5" />
                Error
              </div>
            )}
          </span>
        )}
      </div>
      <div
        className="flex-1 min-h-0 overflow-auto p-4 bg-[#0d1117]
          [&::-webkit-scrollbar]:w-3
          [&::-webkit-scrollbar-track]:bg-[#0d1117]
          [&::-webkit-scrollbar-thumb]:bg-[#30363d]
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:border-2
          [&::-webkit-scrollbar-thumb]:border-[#0d1117]
          [&::-webkit-scrollbar-thumb:hover]:bg-[#6217d2]
          [scrollbar-width:thin]
          [scrollbar-color:#30363d_#0d1117]"
      >
        {output === null ? (
          <div className="space-y-2">
            <TerminalIcon className="size-8 text-[#30363d]" />
            <p className="text-[#8b949e] text-sm font-nunito">
              Click "Run Code" to see the output here...
            </p>
          </div>
        ) : output.success ? (
          <div className="space-y-2">
            <div className="flex items-center gap-2 pb-2 border-b border-[#30363d]">
              <CheckCircle2Icon className="size-4 text-green-500" />
              <span className="text-xs font-semibold text-green-500 font-nunito">Execution Successful</span>
            </div>
            <pre className="text-sm font-mono text-[#c9d1d9] whitespace-pre-wrap leading-relaxed bg-[#161b22] p-3 rounded border border-[#30363d]">
              {output.output}
            </pre>
          </div>
        ) : (
          <div className="space-y-3">
            {output.output && (
              <div>
                <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#30363d]">
                  <TerminalIcon className="size-4 text-[#8b949e]" />
                  <span className="text-xs font-semibold text-[#8b949e] font-nunito">Standard Output</span>
                </div>
                <pre className="text-sm font-mono text-[#c9d1d9] whitespace-pre-wrap leading-relaxed bg-[#161b22] p-3 rounded border border-[#30363d]">
                  {output.output}
                </pre>
              </div>
            )}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#30363d]">
                <XCircleIcon className="size-4 text-red-500" />
                <span className="text-xs font-semibold text-red-500 font-nunito">Error</span>
              </div>
              <pre className="text-sm font-mono text-red-400 whitespace-pre-wrap leading-relaxed bg-[#161b22] p-3 rounded border border-red-900/20">
                {output.error}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default OutputPanel;