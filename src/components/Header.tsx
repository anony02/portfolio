import Link from "next/link";
import { menus } from "@/data/data";

export default function Header() {
  return (
    <header className="z-10 w-full items-center justify-between text-sm lg:flex">
      <h1>
        <Link href="/">
          <div className="font-bold text-2xl"> Dohyeon Lee</div>
          <div className="text-base opacity-50">Front-end Developer</div>
        </Link>
      </h1>
      <nav className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        <ul className="flex justify-center lg:space-x-8">
          {menus.map((menu) => (
            <li key={menu}>
              <a
                className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 font-bold"
                href={`#${menu.toLowerCase().split(" ").join("")}`}
              >
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
