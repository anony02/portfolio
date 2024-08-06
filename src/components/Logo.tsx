import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Logo() {
  return (
    <h1>
      <Link href="/" className="flex flex-col items-center">
        <div className={`${dancingScript.className} font-bold text-4xl`}> Dohyeon Lee</div>
        <div className="text-base opacity-50">Front-end Developer</div>
      </Link>
    </h1>
  );
}
