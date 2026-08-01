import { Link, useLocation } from "react-router";
import { BookOpenIcon, LayoutDashboardIcon, Headset } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#010029]/85 backdrop-blur-md border-b border-[#6217d2]/30 sticky top-0 z-50 shadow-lg">
      <div className="px-3 sm:px-5 lg:px-7 py-3 sm:py-4 flex items-center justify-between gap-2">
        {/* LOGO */}
        <Link
          to="/"
          className="group flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform duration-200 min-w-0"
        >
          <div className="shrink-0 size-8 sm:size-10 rounded-xl bg-gradient-to-br from-[#6217d2] via-[#31066e] to-[#FFCC00] flex items-center justify-center shadow-lg">
            <Headset className="size-5 sm:size-6 text-white" />
          </div>

          <div className="flex flex-col min-w-0">
            <span className="text-lg sm:text-xl lg:text-2xl font-nunito font-bold tracking-wide bg-gradient-to-r from-[#6217d2] to-[#FFCC00] bg-clip-text text-transparent truncate">
              InterCode
            </span>
            <span className="text-[10px] sm:text-xs text-white/60 font-medium -mt-1 hidden xs:block">
              Let's Code
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          {/* PROBLEMS PAGE LINK */}
          <Link
            to={"/problems"}
            className={`px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all duration-200
              ${
                isActive("/problems")
                  ? "bg-[#6217d2] text-white"
                  : "hover:bg-[#090040]/50 text-white/70 hover:text-white"
              }`}
          >
            <div className="flex items-center gap-x-2 sm:gap-x-2.5">
              <BookOpenIcon className="size-4 shrink-0" />
              <span className="font-medium hidden sm:inline">Problems</span>
            </div>
          </Link>

          {/* DASHBOARD PAGE LINK */}
          <Link
            to={"/dashboard"}
            className={`px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all duration-200
              ${
                isActive("/dashboard")
                  ? "bg-[#6217d2] text-white"
                  : "hover:bg-[#090040]/50 text-white/70 hover:text-white"
              }`}
          >
            <div className="flex items-center gap-x-2 sm:gap-x-2.5">
              <LayoutDashboardIcon className="size-4 shrink-0" />
              <span className="font-medium hidden sm:inline">Dashboard</span>
            </div>
          </Link>

          <div className="ml-2 sm:ml-4 shrink-0">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;