import { MonitorIcon, LaptopIcon } from "lucide-react";

function DesktopOnlyGate({ pageLabel = "This page" }) {
  return (
    <div className="flex xl:hidden flex-1 items-center justify-center px-6 py-16">
      <div className="max-w-md text-center bg-[#090040]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-2xl p-8 shadow-xl">
        <div className="size-16 mx-auto mb-5 rounded-2xl bg-[#6217d2]/20 border border-[#6217d2] flex items-center justify-center">
          <LaptopIcon className="size-8 text-[#6217d2]" />
        </div>
        <h2 className="text-xl font-bold text-white font-nunito mb-2">
          Best on a Bigger Screen
        </h2>
        <p className="text-white/70 font-nunito text-sm leading-relaxed mb-1">
          {pageLabel} needs more room to show the code editor, problem details, and output side by side.
        </p>
        <p className="text-white/50 font-nunito text-xs">
          Please switch to a laptop or desktop screen to continue.
        </p>
        <div className="flex items-center justify-center gap-2 mt-5 text-[#FFCC00] text-xs font-nunito font-semibold">
          <MonitorIcon className="size-4" />
          Minimum width: 1280px
        </div>
      </div>
    </div>
  );
}

export default DesktopOnlyGate;