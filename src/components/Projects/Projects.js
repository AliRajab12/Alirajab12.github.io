import React from 'react';
import './Projects.css';
const Projects = ({ projects }) => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-links">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            )}
          </div>
          <div className="project-technologies">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;