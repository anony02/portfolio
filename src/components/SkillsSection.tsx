"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import nextConfig from "../../next.config.mjs";
import { skills } from "@/data/data";

export default function SkillsSection() {
  return (
    <section id="skills">
      <h2 className="mb-2 text-2xl font-bold">Skills</h2>
      <ul className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <motion.li
            key={skill.alt}
            className="h-32 w-32 flex flex-col items-center group"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
          >
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
            <span className="mt-2 font-bold text-center relative">{skill.alt}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
