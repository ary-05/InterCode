import { useState } from "react";
import { LoaderIcon, LogInIcon } from "lucide-react";

function JoinSessionModal({ isOpen, onClose, onJoinSession, isJoining, sessionId }) {
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#030023] border border-[#6217d2]/30 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="p-6">
          <h3 className="font-bold text-2xl mb-6 text-white font-nunito">Join Session</h3>

          <div className="space-y-6">
            {/* SESSION ID DISPLAY */}
            <div className="space-y-2">
              <label className="block">
                <span className="text-white font-nunito font-semibold">Session ID</span>
              </label>

              <input
                type="text"
                className="w-full px-4 py-3 bg-[#090040]/50 border border-[#6217d2]/20 rounded-xl text-white/70 font-nunito cursor-not-allowed"
                value={sessionId}
                disabled
                readOnly
              />
            </div>

            {/* PASSWORD INPUT */}
            <div className="space-y-2">
              <label className="block">
                <span className="text-white font-nunito font-semibold">Session Password</span>
                <span className="text-error ml-1">*</span>
              </label>

              <input
                type="password"
                className="w-full px-4 py-3 bg-[#090040] border border-[#6217d2]/30 rounded-xl text-white font-nunito focus:outline-none focus:border-[#6217d2] transition-colors"
                placeholder="Enter session password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <button
              className="flex-1 px-6 py-3 bg-[#090040] hover:bg-[#090040]/70 text-white rounded-xl font-nunito font-semibold border border-[#6217d2]/30 transition-all duration-200"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              className="flex-1 px-6 py-3 bg-[#6217d2] hover:bg-[#7528e3] text-white rounded-xl font-nunito font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-[#6217d2]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              onClick={() => onJoinSession({ sessionId, password })}
              disabled={isJoining || !password}
            >
              {isJoining ? (
                <LoaderIcon className="size-5 animate-spin" />
              ) : (
                <LogInIcon className="size-5" />
              )}

              {isJoining ? "Joining..." : "Join"}
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
}

export default JoinSessionModal;