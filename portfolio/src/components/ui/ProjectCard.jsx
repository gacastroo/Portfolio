import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul className="tech-list">
        {project.tech.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <a href={project.link} target="_blank" rel="noreferrer">
        Ver proyecto
      </a>
    </article>
  );
};

export default ProjectCard;