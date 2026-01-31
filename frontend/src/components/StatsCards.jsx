import { TrophyIcon, UsersIcon } from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  return (
    <div className="lg:col-span-1 grid grid-cols-1 gap-6">
      {/* Active Count */}
      <div className="bg-[#030023]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-2xl shadow-xl hover:border-[#6217d2] hover:scale-[1.02] transition-all duration-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-[#6217d2]/20 border border-[#6217d2] rounded-2xl">
              <UsersIcon className="w-5 h-5 text-[#6217d2]" />
            </div>
            <div className="badge badge-primary">Live</div>
          </div>
          <div className="text-4xl font-black mb-1 text-[#6217d2] font-nunito">{activeSessionsCount}</div>
          <div className="text-sm text-white/60 font-nunito">Active Sessions</div>
        </div>
      </div>

      {/* Recent Count */}
      <div className="bg-[#030023]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-2xl shadow-xl hover:border-[#6217d2] hover:scale-[1.02] transition-all duration-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-warning/20 border border-warning rounded-2xl">
              <TrophyIcon className="w-5 h-5 text-warning" />
            </div>
          </div>
          <div className="text-4xl font-black mb-1 text-warning font-nunito">{recentSessionsCount}</div>
          <div className="text-sm text-white/60 font-nunito">Total Sessions</div>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;