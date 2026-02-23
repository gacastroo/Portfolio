import React from "react";
import ProjectCard from "../components/ui/ProjectCard";
import projects from "../components/data/projects";

const Projects = () => {
  return (
    <section className="projects-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Projects;