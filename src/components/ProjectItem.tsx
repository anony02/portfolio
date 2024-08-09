import SkillList from "./SkillList";
import LinkList from "./LinkList";
import { ProjectType } from "@/data/types";

interface ProjectItemProps extends ProjectType {
  onClick: () => void;
}

export default function ProjectItem({
  title,
  description,
  period,
  participants,
  skills = [],
  links = [],
  onClick,
}: ProjectItemProps) {
  return (
    <li className="relative group my-4 cursor-pointer" onClick={onClick}>
      <div className="absolute inset-0 bg-[#00000064] dark:bg-[#ffffff64]" />
      <div className="relative border-2 border-[#00000064] bg-[#d6dbdc] dark:border-[#ffffff64] dark:bg-[#1e1e1e] px-5 py-4 transition-colors transition-transform transform translate-x-[-0.4rem] translate-y-[-0.5rem] group-hover:translate-x-0 group-hover:translate-y-0">
        <p className="mb-2 text-sm opacity-50">{period}</p>
        <h3 className="mb-2 font-semibold">
          {title}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h3>
        <p className="mb-2 font-bold text-xs text-indigo-600">{participants}</p>
        <p className="m-0 text-sm">{description}</p>
        {skills.length > 0 && <SkillList skills={skills} />}
        {links.length > 0 && <LinkList links={links} />}
      </div>
    </li>
  );
}
