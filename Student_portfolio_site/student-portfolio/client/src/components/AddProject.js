import React, { useState } from 'react';
import axios from 'axios';

function AddProject({ onProjectAdded }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    githubLink: '',
    liveLink: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Convert techStack from comma separated string to array
      const techArray = formData.techStack.split(',').map(item => item.trim());

      const newProject = {
        ...formData,
        techStack: techArray,
      };

      const res = await axios.post('http://localhost:5000/api/projects', newProject);
      onProjectAdded(res.data);

      // Clear form after successful submission
      setFormData({
        title: '',
        description: '',
        techStack: '',
        githubLink: '',
        liveLink: ''
      });
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Add New Project</h2>

      <input
        type="text"
        name="title"
        placeholder="Project Title"
        value={formData.title}
        onChange={handleChange}
        required
      /><br />

      <textarea
        name="description"
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}
        required
      ></textarea><br />

      <input
        type="text"
        name="techStack"
        placeholder="Tech Stack (comma separated)"
        value={formData.techStack}
        onChange={handleChange}
        required
      /><br />

      <input
        type="url"
        name="githubLink"
        placeholder="GitHub URL"
        value={formData.githubLink}
        onChange={handleChange}
      /><br />

      <input
        type="url"
        name="liveLink"
        placeholder="Live Demo URL"
        value={formData.liveLink}
        onChange={handleChange}
      /><br />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddProject;
