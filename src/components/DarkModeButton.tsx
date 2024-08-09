"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import useDarkMode from "@/hooks/useDarkMode";

export default function DarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="p-2">
      <div className="icon-hover-effect">
        {isDarkMode ? <SunIcon className="h-10 w-10" /> : <MoonIcon className="h-10 w-10" />}
      </div>
    </button>
  );
}
