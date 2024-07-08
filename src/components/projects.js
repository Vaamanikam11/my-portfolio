// src/components/Projects.js
import React from 'react';
import '../components/project.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Project Title</h3>
          <p>Project description...</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
