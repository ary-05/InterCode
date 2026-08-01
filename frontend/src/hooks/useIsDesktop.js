import { useEffect, useState } from "react";

const DESKTOP_BREAKPOINT = 1280; // matches Tailwind's xl:

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= DESKTOP_BREAKPOINT : true
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);

    const handleChange = (e) => setIsDesktop(e.matches);

    // set initial value in case it changed before mount
    setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isDesktop;
}

export default useIsDesktop;