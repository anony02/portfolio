"use client";

import { useState } from "react";
import ProjectItem from "./ProjectItem";
import Modal from "./Modal";
import ProjectDetails from "./ProjectDetails";
import { ProjectType } from "@/data/types";

interface ProjectsSectionProps {
  projects: ProjectType[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const handleClose = () => setSelectedProject(null);

  return (
    <section id="projects">
      <h2 className="mb-2 text-2xl font-bold">Projects</h2>
      <ol className="flex flex-col">
        {projects.map((project, i) => (
          <ProjectItem key={i} {...project} onClick={() => setSelectedProject(project)} />
        ))}
      </ol>
      <Modal isOpen={!!selectedProject} onClose={handleClose}>
        {selectedProject && <ProjectDetails project={selectedProject} />}
      </Modal>
    </section>
  );
}
