"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import useDarkMode from "@/hooks/useDarkMode";

export default function DarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="p-2">
      <div className="icon-hover-effect">
        {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6 dark:text-gray-200" />}
      </div>
    </button>
  );
}
