import SkillList from "./SkillList";
import LinkList from "./LinkList";

interface ProjectItemProps {
  title: string;
  description: string;
  skills?: string[];
  links?: { href: string; src: string; alt: string; width: number; height: number }[];
}

export default function ProjectItem({ title, description, skills = [], links = [] }: ProjectItemProps) {
  return (
    <li className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-gray-800 hover:dark:bg-gray-800/30 my-4">
      <h3 className="mb-2 font-semibold group-hover:text-cyan-300">
        {title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h3>
      <p className="m-0 text-sm opacity-50">{description}</p>
      {skills.length > 0 && <SkillList skills={skills} />}
      {links.length > 0 && <LinkList links={links} />}
    </li>
  );
}
