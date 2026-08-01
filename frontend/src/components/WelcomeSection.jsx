import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, Headset, ZapIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="px-4 sm:px-5 lg:px-7 pt-6 sm:pt-8 lg:pt-10">
      <div className="bg-[#030023]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#6217d2]/20 border border-[#6217d2] flex items-center justify-center">
                <Headset className="w-5 h-5 sm:w-6 sm:h-6 text-[#6217d2]" />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white font-nunito">
                Welcome back, {user?.firstName || "there"}!
              </h1>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-white/60 ml-0 sm:ml-[52px] lg:ml-16 font-nunito">
              Ready to optimize your skills?
            </p>
          </div>
          <button
            onClick={onCreateSession}
            className="group px-6 py-3 sm:px-8 sm:py-4 bg-[#6217d2] hover:bg-[#7528e3] rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-[#6217d2]/50 w-full lg:w-auto"
          >
            <div className="flex items-center justify-center gap-2 text-white font-bold text-base sm:text-lg font-nunito">
              <ZapIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Create Session</span>
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;