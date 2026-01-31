import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, Headset, ZapIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="px-7 pt-10">
      <div className="bg-[#030023]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#6217d2]/20 border border-[#6217d2] flex items-center justify-center">
                <Headset className="w-6 h-6 text-[#6217d2]" />
              </div>
              <h1 className="text-5xl font-bold text-white font-nunito">
                Welcome back, {user?.firstName || "there"}!
              </h1>
            </div>
            <p className="text-xl text-white/60 ml-16 font-nunito">
              Ready to optimize your skills?
            </p>
          </div>
          <button
            onClick={onCreateSession}
            className="group px-8 py-4 bg-[#6217d2] hover:bg-[#7528e3] rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-[#6217d2]/50"
          >
            <div className="flex items-center gap-2 text-white font-bold text-lg font-nunito">
              <ZapIcon className="w-6 h-6" />
              <span>Create Session</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;