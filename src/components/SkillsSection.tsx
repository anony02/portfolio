import Image from "next/image";
import nextConfig from "../../next.config.mjs";
import { skills } from "@/data/data";

export default function SkillsSection() {
  return (
    <section id="skills">
      <h2 className="mb-2 text-2xl font-bold">Skills</h2>
      <ul className="flex items-center">
        {skills.map((skill) => (
          <li key={skill.alt} className="mr-1.5 mt-2">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={`${nextConfig.basePath}${skill.src}`}
              alt={`${skill.alt} Logo`}
              width={skill.width}
              height={skill.height}
              priority
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
