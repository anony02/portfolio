import Image from "next/image";
import nextConfig from "../../next.config.mjs";
import { skills } from "@/data/data";

export default function SkillsSection() {
  return (
    <section id="skills">
      <h2 className="mb-2 text-2xl font-bold">Skills</h2>
      <ul className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <li key={skill.alt} className="h-32 w-32 flex flex-col items-center group relative">
            <div className="h-20 w-20 flex justify-center items-center">
              <Image
                className="p-2 dark:drop-shadow-[0_0_10px_#ffffff50]"
                src={`${nextConfig.basePath}${skill.src}`}
                alt={`${skill.alt} Logo`}
                width={skill.width}
                height={skill.height}
                priority
              />
            </div>
            <span className="mt-2 font-bold text-center relative group-hover:text-yellow-600">
              {skill.alt}
              <span className="absolute bottom-0 left-0 w-full h-[0.3rem] bg-[#ffff00a0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
