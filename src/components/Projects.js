import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Project 1', description: 'Description of project 1', link: '#' },
    { name: 'Project 2', description: 'Description of project 2', link: '#' },
    // Add more projects here
  ];

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

