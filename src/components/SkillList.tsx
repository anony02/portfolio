interface SkillListProps {
  skills: string[];
}

export default function SkillList({ skills }: SkillListProps) {
  return (
    <ul className="flex">
      {skills.map((skill) => (
        <li
          key={skill}
          className="rounded-full px-3 py-1 text-xs leading-5 bg-indigo-600/10 text-indigo-600 mr-1.5 mt-2"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
