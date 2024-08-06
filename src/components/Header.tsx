"use client";

import { useState, useEffect } from "react";
import { menus } from "@/data/data";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <header className="z-10 w-full items-center justify-between flex">
      <Logo />
      <nav
        className={`${merienda.className} fixed bottom-0 left-0 w-full text-xl bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none`}
      >
        <ul className="flex justify-center space-x-8 mt-8 mb-8 lg:m-0">
          {menus.map((menu) => (
            <li key={menu}>
              <a
                className="flex place-items-center gap-2 p-0 lg:pointer-events-auto font-bold"
                href={`#${menu.toLowerCase().split(" ").join("")}`}
              >
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={toggleDarkMode} className="p-2">
        <div className="icon-hover-effect">
          {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6 dark:text-gray-200" />}
        </div>
      </button>
    </header>
  );
}
