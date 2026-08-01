import { Code2Icon, LoaderIcon, PlusIcon } from "lucide-react";
import { PROBLEMS } from "../data/problems";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = Object.values(PROBLEMS);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#030023] border border-[#6217d2]/30 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6">
          <h3 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-white font-nunito">Create New Session</h3>

          <div className="space-y-5 sm:space-y-8">
            {/* PROBLEM SELECTION */}
            <div className="space-y-2">
              <label className="block">
                <span className="text-white font-nunito font-semibold">Select Problem</span>
                <span className="text-error ml-1">*</span>
              </label>

              <select
                className="w-full px-4 py-3 bg-[#090040] border border-[#6217d2]/30 rounded-xl text-white font-nunito focus:outline-none focus:border-[#6217d2] transition-colors"
                value={roomConfig.problem}
                onChange={(e) => {
                  const selectedProblem = problems.find((p) => p.title === e.target.value);
                  setRoomConfig({
                    ...roomConfig,
                    difficulty: selectedProblem.difficulty,
                    problem: e.target.value,
                  });
                }}
              >
                <option value="" disabled>
                  Choose a coding problem...
                </option>

                {problems.map((problem) => (
                  <option key={problem.id} value={problem.title}>
                    {problem.title} ({problem.difficulty})
                  </option>
                ))}
              </select>
            </div>

            {/* PASSWORD INPUT */}
            <div className="space-y-2">
              <label className="block">
                <span className="text-white font-nunito font-semibold">Set Session Password</span>
                <span className="text-error ml-1">*</span>
              </label>

              <input
                type="password"
                className="w-full px-4 py-3 bg-[#090040] border border-[#6217d2]/30 rounded-xl text-white font-nunito focus:outline-none focus:border-[#6217d2] transition-colors"
                placeholder="Enter a secure password..."
                value={roomConfig.password}
                onChange={(e) =>
                  setRoomConfig({
                    ...roomConfig,
                    password: e.target.value,
                  })
                }
              />
            </div>

            {/* ROOM SUMMARY */}
            {roomConfig.problem && (
              <div className="bg-success/10 border border-success/30 rounded-xl p-3 sm:p-4">
                <div className="flex items-start gap-3">
                  <Code2Icon className="size-5 text-success flex-shrink-0 mt-0.5" />
                  <div className="text-white font-nunito min-w-0">
                    <p className="font-semibold mb-1">Room Summary:</p>
                    <p className="text-sm text-white/80 break-words">
                      Problem: <span className="font-medium">{roomConfig.problem}</span>
                    </p>
                    <p className="text-sm text-white/80">
                      Max Participants: <span className="font-medium">2 (1-on-1 session)</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6">
            <button 
              className="flex-1 px-6 py-3 bg-[#090040] hover:bg-[#090040]/70 text-white rounded-xl font-nunito font-semibold border border-[#6217d2]/30 transition-all duration-200"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              className="flex-1 px-6 py-3 bg-[#6217d2] hover:bg-[#7528e3] text-white rounded-xl font-nunito font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-[#6217d2]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              onClick={onCreateRoom}
              disabled={isCreating || !roomConfig.problem || !roomConfig.password}
            >
              {isCreating ? (
                <LoaderIcon className="size-5 animate-spin" />
              ) : (
                <PlusIcon className="size-5" />
              )}

              {isCreating ? "Creating..." : "Create"}
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
}
export default CreateSessionModal;