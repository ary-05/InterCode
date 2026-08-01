import { useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon, CodeIcon, RotateCcwIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";
import { ENV } from "../lib/env";

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
  starterCode,
  onResetCode,
  sessionId,
}) {
  const wsRef = useRef(null);
  const isRemoteUpdate = useRef(false);

  useEffect(() => {
    if (!sessionId) return;

    // Clean up existing connection first
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }

    let ws = null;
    let isCancelled = false;

    // Small delay to handle React StrictMode double-mounting
    const timeoutId = setTimeout(() => {
      if (isCancelled) return;

      ws = new WebSocket(`${ENV.WS_URL}?sessionId=${sessionId}`);
      wsRef.current = ws;

      ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          if (message.type === "code-update") {
            isRemoteUpdate.current = true;
            onCodeChange(message.payload);
          } else if (message.type === "language-change") {
            isRemoteUpdate.current = true;
            onLanguageChange({ target: { value: message.payload } });
          }
        } catch (err) {
          // Ignore parse errors
        }
      };
    }, 100);

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, [sessionId]);

  const handleCodeChange = (newCode) => {
    onCodeChange(newCode);

    // Only send if this is a local change, not a remote update
    if (!isRemoteUpdate.current && wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({ type: "code-update", payload: newCode })
      );
    }
    isRemoteUpdate.current = false;
  };

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    onLanguageChange(e);

    // Broadcast language change to other users
    if (!isRemoteUpdate.current && wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({ type: "language-change", payload: newLanguage })
      );
    }
    isRemoteUpdate.current = false;
  };

  const handleResetCode = () => {
    onResetCode();
    // Broadcast the actual starter code so both clients have the same code
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({ type: "code-update", payload: starterCode[selectedLanguage] })
      );
    }
  };

  return (
    <div className="h-full bg-[#0d1117] flex flex-col border-l border-[#30363d] min-h-0">
      <div className="flex items-center justify-between gap-2 px-4 py-2.5 bg-[#161b22] border-b border-[#30363d] flex-wrap shrink-0">
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
              onChange={handleLanguageChange}
            >
              {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
                <option key={key} value={key} className="bg-[#161b22]">
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="px-4 py-1.5 bg-[#090040] hover:bg-[#090040]/70 border border-[#6217d2]/30 hover:border-[#6217d2] rounded-lg text-white text-sm font-semibold font-nunito transition-all duration-200 flex items-center gap-2"
            onClick={handleResetCode}
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
      </div>

      <div className="flex-1 min-h-0 overflow-hidden">
        <Editor
          height={"100%"}
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={handleCodeChange}
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
              verticalScrollbarSize: 12,
              horizontalScrollbarSize: 12,
              useShadows: false,
            },
          }}
        />
      </div>
    </div>
  );
}
export default CodeEditorPanel;