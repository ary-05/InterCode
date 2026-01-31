import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon, CodeIcon, RotateCcwIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
  starterCode,
  onResetCode,
}) {
  return (
    <div className="h-full bg-[#0d1117] flex flex-col border-l border-[#30363d]">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-[#30363d]">
        <div className="flex items-center gap-3">
          <CodeIcon className="size-4 text-[#6217d2]" />
          <div className="flex items-center gap-2">
            <img
              src={LANGUAGE_CONFIG[selectedLanguage].icon}
              alt={LANGUAGE_CONFIG[selectedLanguage].name}
              className="size-5"
            />
            <select
              className="px-3 py-1.5 bg-[#0d1117] border border-[#30363d] rounded text-white text-sm font-nunito focus:outline-none focus:border-[#6217d2] transition-colors cursor-pointer hover:border-[#6217d2]/50"
              value={selectedLanguage}
              onChange={onLanguageChange}
            >
              {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
                <option key={key} value={key} className="bg-[#161b22]">
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <button
          className="px-4 py-1.5 bg-[#090040] hover:bg-[#090040]/70 border border-[#6217d2]/30 hover:border-[#6217d2] rounded-lg text-white text-sm font-semibold font-nunito transition-all duration-200 flex items-center gap-2"
          onClick={onResetCode}
        >
          <RotateCcwIcon className="size-4" />
          Reset
        </button>

        <button
          className="px-4 py-1.5 bg-gradient-to-r from-[#6217d2] to-[#31066e] hover:from-[#31066e] hover:to-[#6217d2] rounded-lg text-white text-sm font-semibold font-nunito shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isRunning}
          onClick={onRunCode}
        >
          {isRunning ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <PlayIcon className="size-4" />
              Run Code
            </>
          )}
        </button>
      </div>

      <div className="flex-1 overflow-hidden">
        <Editor
          height={"100%"}
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={onCodeChange}
          theme="vs-dark"
          options={{
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: { enabled: false },
            padding: { top: 16, bottom: 16 },
            lineHeight: 20,
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
            fontLigatures: true,
            cursorBlinking: "smooth",
            smoothScrolling: true,
            contextmenu: true,
            scrollbar: {
              verticalScrollbarSize: 10,
              horizontalScrollbarSize: 10,
            },
          }}
        />
      </div>
    </div>
  );
}
export default CodeEditorPanel;