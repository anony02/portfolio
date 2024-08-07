import ProjectItem from "./ProjectItem";
import { ProjectType } from "@/data/types";

interface ProjectsSectionProps {
  projects: ProjectType[];
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
