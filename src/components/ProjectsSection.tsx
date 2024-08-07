import ProjectItem from "./ProjectItem";

interface Project {
  title: string;
  description: string;
  skills?: string[];
  links?: { href: string; src: string; alt: string; width: number; height: number }[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects">
      <h2 className="mb-2 text-2xl font-bold">Projects</h2>
      <ol className="flex flex-col">
        {projects.map((project, i) => (
          <ProjectItem key={i} {...project} />
        ))}
      </ol>
    </section>
  );
}
