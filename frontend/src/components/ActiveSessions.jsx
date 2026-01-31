import {
  ArrowRightIcon,
  Code2Icon,
  CrownIcon,
  Headset,
  UsersIcon,
  ZapIcon,
  LoaderIcon,
} from "lucide-react";
import { Link } from "react-router";
import { getDifficultyBadgeClass } from "../lib/utils";

function ActiveSessions({ sessions, isLoading, isUserInSession }) {
  return (
    <div className="lg:col-span-2 bg-[#030023]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-2xl shadow-xl h-full">
      <div className="p-6">
        {/* HEADERS SECTION */}
        <div className="flex items-center justify-between mb-6">
          {/* TITLE AND ICON */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#6217d2]/20 border border-[#6217d2] rounded-xl">
              <ZapIcon className="size-5 text-[#6217d2]" />
            </div>
            <h2 className="text-2xl text-white font-semibold font-nunito">Live Sessions</h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="size-2 bg-success rounded-full" />
            <span className="text-sm font-medium text-success font-nunito">{sessions.length} active</span>
          </div>
        </div>

        {/* SESSIONS LIST */}
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <LoaderIcon className="size-10 animate-spin text-[#6217d2]" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className="bg-[#090040]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-xl hover:border-[#6217d2] transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-4 p-5">
                  {/* LEFT SIDE */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="relative size-14 rounded-xl bg-[#6217d2]/20 border border-[#6217d2] flex items-center justify-center">
                      <Code2Icon className="size-7 text-[#6217d2]" />
                      <div className="absolute -top-1 -right-1 size-4 bg-success rounded-full border-2 border-[#090040]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg truncate text-white font-nunito">{session.problem}</h3>
                        <span
                          className={`badge badge-sm ${getDifficultyBadgeClass(
                            session.difficulty
                          )}`}
                        >
                          {session.difficulty.slice(0, 1).toUpperCase() +
                            session.difficulty.slice(1)}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-white/80 font-nunito">
                        <div className="flex items-center gap-1.5">
                          <CrownIcon className="size-4" />
                          <span className="font-medium">{session.host?.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <UsersIcon className="size-4" />
                          <span className="text-xs">{session.participant ? "2/2" : "1/2"}</span>
                        </div>
                        {session.participant && !isUserInSession(session) ? (
                          <span className="badge badge-error badge-sm">FULL</span>
                        ) : (
                          <span className="badge badge-success badge-sm">OPEN</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {session.participant && !isUserInSession(session) ? (
                    <button className="px-4 py-2 bg-[#6217d2]/20 text-white/50 rounded-lg font-nunito font-semibold cursor-not-allowed">Full</button>
                  ) : (
                    <Link to={`/session/${session._id}`} className="px-4 py-2 bg-[#6217d2] hover:bg-[#7528e3] text-white rounded-lg font-nunito font-semibold flex items-center gap-2 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-[#6217d2]/50">
                      {isUserInSession(session) ? "Rejoin" : "Join"}
                      <ArrowRightIcon className="size-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#6217d2]/20 border border-[#6217d2] rounded-3xl flex items-center justify-center">
                <Headset className="w-10 h-10 text-[#6217d2]/50" />
              </div>
              <p className="text-lg font-semibold text-white/70 mb-1 font-nunito">No active sessions</p>
              <p className="text-sm text-white/50 font-nunito">Be the first to create one!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ActiveSessions;