import { Code2, Clock, Users, Trophy, Loader } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";

function RecentSessions({ sessions, isLoading }) {
  return (
    <div className="bg-[#030023]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-2xl shadow-xl hover:border-[#6217d2] transition-all duration-200 mt-6 sm:mt-8">
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="p-2 bg-[#6217d2]/20 border border-[#6217d2] rounded-xl">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#6217d2]" />
          </div>
          <h2 className="text-lg sm:text-2xl font-semibold text-white font-nunito">Your Past Sessions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {isLoading ? (
            <div className="col-span-full flex items-center justify-center py-20">
              <Loader className="w-10 h-10 animate-spin text-[#6217d2]" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className={`relative ${
                  session.status === "active"
                    ? "bg-success/10 border border-success/30 hover:border-success/60"
                    : "bg-[#090040]/50 backdrop-blur-sm border border-[#6217d2]/30 hover:border-[#6217d2]"
                } rounded-xl transition-all duration-200`}
              >
                {session.status === "active" && (
                  <div className="absolute top-3 right-3">
                    <div className="badge badge-success gap-1">
                      <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                      ACTIVE
                    </div>
                  </div>
                )}

                <div className="p-4 sm:p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
                        session.status === "active"
                          ? "bg-success/20 border border-success"
                          : "bg-[#6217d2]/20 border border-[#6217d2]"
                      }`}
                    >
                      <Code2 className={`w-5 h-5 sm:w-6 sm:h-6 ${session.status === "active" ? "text-success" : "text-[#6217d2]"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm sm:text-base mb-1 truncate text-white font-nunito">{session.problem}</h3>
                      <span
                        className={`badge badge-sm ${getDifficultyBadgeClass(session.difficulty)}`}
                      >
                        {session.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-white/80 mb-4 font-nunito">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      <span>
                        {formatDistanceToNow(new Date(session.createdAt), {
                          addSuffix: true,
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      <span>
                        {session.participant ? "2" : "1"} participant
                        {session.participant ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#6217d2]/20">
                    <span className="text-xs font-semibold text-white/80 uppercase font-nunito">Completed</span>
                    <span className="text-xs text-white/40 font-nunito">
                      {new Date(session.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#6217d2]/20 border border-[#6217d2] rounded-3xl flex items-center justify-center">
                <Trophy className="w-10 h-10 text-[#6217d2]/50" />
              </div>
              <p className="text-lg font-semibold text-white/70 mb-1 font-nunito">No sessions yet</p>
              <p className="text-sm text-white/50 font-nunito">Start your coding journey today!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentSessions;