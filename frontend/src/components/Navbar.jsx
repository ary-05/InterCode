import { Link, useLocation } from "react-router";
import { BookOpenIcon, LayoutDashboardIcon, Headset } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  const location = useLocation();

  console.log(location);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#010029]/85 backdrop-blur-md border-b border-[#6217d2]/30 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="group flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform duration-200"
        >
          <div className="size-8 sm:size-10 rounded-xl bg-gradient-to-br from-[#6217d2] via-[#31066e] to-[#FFCC00] flex items-center justify-center shadow-lg ">
            <Headset className="size-5 sm:size-6 text-white" />
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-nunito font-bold tracking-wide bg-gradient-to-r from-[#6217d2] to-[#FFCC00] bg-clip-text text-transparent">
              InterCode
            </span>
            <span className="text-xs text-white/60 font-medium -mt-1">Let's Code</span>
          </div>
        </Link>

        <div className="flex items-center gap-1">
          {/* PROBLEMS PAGE LINK */}
          <Link
            to={"/problems"}
            className={`px-4 py-2.5 rounded-lg transition-all duration-200 
              ${
                isActive("/problems")
                  ? "bg-[#6217d2] text-white"
                  : "hover:bg-[#090040]/50 text-white/70 hover:text-white"
              }
              
              `}
          >
            <div className="flex items-center gap-x-2.5">
              <BookOpenIcon className="size-4" />
              <span className="font-medium hidden sm:inline">Problems</span>
            </div>
          </Link>

          {/* DASHBORD PAGE LINK */}
          <Link
            to={"/dashboard"}
            className={`px-4 py-2.5 rounded-lg transition-all duration-200 
              ${
                isActive("/dashboard")
                  ? "bg-[#6217d2] text-white"
                  : "hover:bg-[#090040]/50 text-white/70 hover:text-white"
              }
              
              `}
          >
            <div className="flex items-center gap-x-2.5">
              <LayoutDashboardIcon className="size-4" />
              <span className="font-medium hidden sm:inline">Dashbord</span>
            </div>
          </Link>

          <div className="ml-4 mt-2">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;