"use client";

import { ProjectType } from "@/data/types";

interface ProjectDetailsProps {
  project: ProjectType;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <article className="space-y-12">
      <h3 className="text-4xl font-bold border-b border-[#00000080] dark:border-[#ffffff80] pb-4">{project.title}</h3>
      <p>{project.description}</p>
      <p>
        <h4>개발기간</h4>
        <span>{project.period}</span>
      </p>
      <p>
        <h4>개발인원</h4>
        <span>{project.participants}</span>
      </p>
      <p>
        <h4>Skills</h4>
        {project.skills.map((skill, index) => (
          <li key={index} className="list-disc">
            {skill}
          </li>
        ))}
      </p>
      <p>
        <h4>Links</h4>
        {project.links.map((link, i) => (
          <li key={i} className="list-disc hover:text-cyan-300 hover:underline">
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.alt}
            </a>
          </li>
        ))}
      </p>
      <p>
        <h4>Background</h4>
        <span>{project.details.background}</span>
      </p>
      <p>
        <h4>Features</h4>
        {project.details.features.map((feature, i) => (
          <li key={i} className="list-disc">
            {feature}
          </li>
        ))}
      </p>
      <p>
        <h4>Process</h4>
        <span>{project.details.developmentProcess}</span>
      </p>
      <p>
        <h4>Contribution</h4>
        <span>{project.details.roleAndContribution}</span>
      </p>
      <p>
        <h4>Result</h4>
        <span>{project.details.result}</span>
      </p>
      <p>
        <h4>Improvements</h4>
        <span>{project.details.improvements}</span>
      </p>
    </article>
  );
}
