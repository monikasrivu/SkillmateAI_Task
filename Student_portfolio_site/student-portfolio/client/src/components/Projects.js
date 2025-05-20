import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddProject from './AddProject';

function Projects() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleProjectAdded = (newProject) => {
    setProjects(prevProjects => [newProject, ...prevProjects]);
  };

  return (
    <div>
      <AddProject onProjectAdded={handleProjectAdded} />

      <h2>Projects</h2>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project._id} style={{ marginBottom: '1.5rem' }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
              <p>
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
                )}
                {project.githubLink && project.liveLink && ' | '}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer">Live Demo</a>
                )}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Projects;
