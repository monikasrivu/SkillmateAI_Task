import React from 'react';

function PortfolioDisplay({ data }) {
  if (!data.profile) {
    return <p>Please fill your profile details to see the portfolio.</p>;
  }

  return (
    <div>
      <h1>{data.profile.name}'s Portfolio</h1>
      <p><strong>College:</strong> {data.profile.college}</p>
      <p><strong>Degree:</strong> {data.profile.degree}</p>
      <p><strong>Email:</strong> {data.profile.email}</p>
      <p>
        <strong>LinkedIn:</strong>{' '}
        <a href={data.profile.linkedin} target="_blank" rel="noreferrer">
          {data.profile.linkedin}
        </a>
      </p>

      <h2>Projects</h2>
      <ul>
        {data.projects.map(project => (
          <li key={project._id || project.title}>
            <strong>{project.title}</strong>: {project.description}
          </li>
        ))}
      </ul>

      <h2>Blogs</h2>
      <ul>
        {data.blogs.map(blog => (
          <li key={blog._id || blog.title}>
            <strong>{blog.title}</strong>: {blog.content}
          </li>
        ))}
      </ul>

      <h2>Education</h2>
      <ul>
        {data.education.map(edu => (
          <li key={edu._id || edu.institution}>
            <strong>{edu.degree}</strong> from {edu.institution} (
            {new Date(edu.startDate).getFullYear()} - {edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioDisplay;
