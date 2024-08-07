"use client";

import { Merienda } from "next/font/google";
import { menus } from "@/data/data";
import { handleMenuClick } from "@/utils/handleMenuClick";

const merienda = Merienda({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export default function Navigation() {
  return (
    <nav
      className={`${merienda.className} fixed bottom-0 left-0 w-full text-xl bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none`}
    >
      <ul className="flex justify-center space-x-8 mt-8 mb-8 lg:m-0 lg:flex-col lg:space-y-8 lg:space-x-0">
        {menus.map((menu) => (
          <li key={menu}>
            <button className="flex place-items-center gap-2 p-0 font-bold" onClick={(e) => handleMenuClick(e, menu)}>
              {menu}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
