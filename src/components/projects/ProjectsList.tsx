import ProjectItem from "./ProjectItem";
import { portfolioData } from "../../lib/portfolio-data";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  summary: string;
  why: string;
  achievements: string;
}

export default function ProjectsList() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16">
      <h3 className="text-3xl font-poppins font-bold text-gray-900 mb-12 text-center">
        Project
      </h3>
      <div className="grid grid-cols-1 gap-8">
        {[...portfolioData.projects].reverse().map((project) => (
          <ProjectItem key={project.id} project={project as Project} />
        ))}
      </div>
    </section>
  );
}
