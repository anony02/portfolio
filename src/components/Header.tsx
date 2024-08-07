import { Merienda } from "next/font/google";
import Logo from "./Logo";
import DarkModeButton from "./DarkModeButton";
import Navigation from "./Navigation";

const merienda = Merienda({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export default function Header() {
  return (
    <header className="z-10 w-full items-center justify-between flex lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:w-1/2 lg:flex-col lg:justify-around lg:py-24">
      <Logo />
      <Navigation />
      <DarkModeButton />
    </header>
  );
}
