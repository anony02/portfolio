import { useState, useEffect } from "react";

interface UseDarkModeReturn {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function useDarkMode(): UseDarkModeReturn {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", newMode.toString());
  };

  return { isDarkMode, toggleDarkMode };
}
