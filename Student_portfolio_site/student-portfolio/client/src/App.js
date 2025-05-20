import React, { useState } from 'react';

// Form component to update profile information
function ProfileForm({ onUpdate }) {
  const [formData, setFormData] = useState({
    name: '', college: '', degree: '', email: '', linkedin: ''
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <section aria-labelledby="profile-form-title" style={{ marginBottom: 24 }}>
      <h2 id="profile-form-title" style={{ marginBottom: 12 }}>Profile Information</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name" style={labelStyle}>Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="college" style={labelStyle}>College / University</label>
        <input
          id="college"
          name="college"
          type="text"
          placeholder="Your college or university"
          value={formData.college}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="degree" style={labelStyle}>Degree / Program</label>
        <input
          id="degree"
          name="degree"
          type="text"
          placeholder="Your degree or program"
          value={formData.degree}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="email" style={labelStyle}>Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="linkedin" style={labelStyle}>LinkedIn Profile URL</label>
        <input
          id="linkedin"
          name="linkedin"
          type="url"
          placeholder="https://linkedin.com/in/yourprofile"
          value={formData.linkedin}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>Save Profile</button>
      </form>
    </section>
  );
}

// Form component to add projects
function ProjectsForm({ onAdd }) {
  const [project, setProject] = useState({ title: '', description: '' });

  const handleChange = e => {
    setProject(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(project);
    setProject({ title: '', description: '' });
  };

  return (
    <section aria-labelledby="projects-form-title" style={{ marginBottom: 24 }}>
      <h2 id="projects-form-title" style={{ marginBottom: 12 }}>Add Project</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="project-title" style={labelStyle}>Project Title</label>
        <input
          id="project-title"
          name="title"
          type="text"
          placeholder="Project title"
          value={project.title}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="project-description" style={labelStyle}>Description</label>
        <input
          id="project-description"
          name="description"
          type="text"
          placeholder="Brief description"
          value={project.description}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>Add Project</button>
      </form>
    </section>
  );
}

// Form component to add blogs
function BlogsForm({ onAdd }) {
  const [blog, setBlog] = useState({ title: '', content: '' });

  const handleChange = e => {
    setBlog(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(blog);
    setBlog({ title: '', content: '' });
  };

  return (
    <section aria-labelledby="blogs-form-title" style={{ marginBottom: 24 }}>
      <h2 id="blogs-form-title" style={{ marginBottom: 12 }}>Add Blog</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="blog-title" style={labelStyle}>Blog Title</label>
        <input
          id="blog-title"
          name="title"
          type="text"
          placeholder="Blog title"
          value={blog.title}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="blog-content" style={labelStyle}>Content</label>
        <textarea
          id="blog-content"
          name="content"
          placeholder="Write your blog content here..."
          value={blog.content}
          onChange={handleChange}
          required
          rows={4}
          style={{ ...inputStyle, resize: 'vertical' }}
        />

        <button type="submit" style={buttonStyle}>Add Blog</button>
      </form>
    </section>
  );
}

// Form component to add education details
function EducationForm({ onAdd }) {
  const [education, setEducation] = useState({ degree: '', institution: '', startYear: '', endYear: '' });

  const handleChange = e => {
    setEducation(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(education);
    setEducation({ degree: '', institution: '', startYear: '', endYear: '' });
  };

  return (
    <section aria-labelledby="education-form-title" style={{ marginBottom: 24 }}>
      <h2 id="education-form-title" style={{ marginBottom: 12 }}>Add Education</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="edu-degree" style={labelStyle}>Degree</label>
        <input
          id="edu-degree"
          name="degree"
          type="text"
          placeholder="Degree earned"
          value={education.degree}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="edu-institution" style={labelStyle}>Institution</label>
        <input
          id="edu-institution"
          name="institution"
          type="text"
          placeholder="Institution name"
          value={education.institution}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="edu-startYear" style={labelStyle}>Start Year</label>
        <input
          id="edu-startYear"
          name="startYear"
          type="number"
          placeholder="YYYY"
          value={education.startYear}
          onChange={handleChange}
          required
          min="1900"
          max={new Date().getFullYear()}
          style={inputStyle}
        />

        <label htmlFor="edu-endYear" style={labelStyle}>End Year / Present</label>
        <input
          id="edu-endYear"
          name="endYear"
          type="text"
          placeholder="YYYY or Present"
          value={education.endYear}
          onChange={handleChange}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>Add Education</button>
      </form>
    </section>
  );
}

// Component to display portfolio data in a structured way
function PortfolioDisplay({ data }) {
  if (!data.profile.name.trim()) {
    return <p>Please complete your profile to view the portfolio.</p>;
  }

  return (
    <section aria-labelledby="portfolio-title" style={portfolioContainerStyle}>
      <h1 id="portfolio-title" style={{ marginBottom: 16 }}>{data.profile.name}'s Portfolio</h1>

      <div style={sectionStyle}>
        <h2 style={sectionHeaderStyle}>Profile</h2>
        <p><strong>College:</strong> {data.profile.college}</p>
        <p><strong>Degree:</strong> {data.profile.degree}</p>
        <p><strong>Email:</strong> <a href={`mailto:${data.profile.email}`}>{data.profile.email}</a></p>
        <p><strong>LinkedIn:</strong> <a href={data.profile.linkedin} target="_blank" rel="noopener noreferrer">{data.profile.linkedin}</a></p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionHeaderStyle}>Projects</h2>
        {data.projects.length > 0 ? (
          <ul>
            {data.projects.map((p, i) => (
              <li key={i}>
                <strong>{p.title}</strong>: {p.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No projects added yet.</p>
        )}
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionHeaderStyle}>Blogs</h2>
        {data.blogs.length > 0 ? (
          <ul>
            {data.blogs.map((b, i) => (
              <li key={i}>
                <strong>{b.title}</strong>: {b.content}
              </li>
            ))}
          </ul>
        ) : (
          <p>No blogs added yet.</p>
        )}
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionHeaderStyle}>Education</h2>
        {data.education.length > 0 ? (
          <ul>
            {data.education.map((e, i) => (
              <li key={i}>
                <strong>{e.degree}</strong> from {e.institution} ({e.startYear} - {e.endYear || 'Present'})
              </li>
            ))}
          </ul>
        ) : (
          <p>No education details added yet.</p>
        )}
      </div>
    </section>
  );
}

export default function PortfolioApp() {
  const [profile, setProfile] = useState({
    name: '',
    college: '',
    degree: '',
    email: '',
    linkedin: ''
  });
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [education, setEducation] = useState([]);

  // Update profile info
  const updateProfile = data => setProfile(data);

  // Add project
  const addProject = project => setProjects(prev => [...prev, project]);

  // Add blog
  const addBlog = blog => setBlogs(prev => [...prev, blog]);

  // Add education
  const addEducation = edu => setEducation(prev => [...prev, edu]);

  return (
    <main style={mainStyle}>
      <h1 style={titleStyle}>Student Portfolio Builder</h1>
      <ProfileForm onUpdate={updateProfile} />
      <ProjectsForm onAdd={addProject} />
      <BlogsForm onAdd={addBlog} />
      <EducationForm onAdd={addEducation} />

      <hr style={{ margin: '2rem 0' }} />

      <PortfolioDisplay data={{ profile, projects, blogs, education }} />
    </main>
  );
}

// Styles
const mainStyle = {
  maxWidth: 900,
  margin: '0 auto',
  padding: '1rem 2rem',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: '#222',
  backgroundColor: '#f9f9f9',
  minHeight: '100vh',
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: 24,
  color: '#333',
};

const labelStyle = {
  display: 'block',
  marginBottom: 6,
  fontWeight: 600,
  fontSize: 14,
};

const inputStyle = {
  width: '100%',
  padding: '8px 10px',
  marginBottom: 16,
  fontSize: 14,
  borderRadius: 4,
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  transition: 'border-color 0.3s',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: 16,
  borderRadius: 4,
  border: 'none',
  backgroundColor: '#0073e6',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const portfolioContainerStyle = {
  backgroundColor: '#fff',
  padding: 24,
  borderRadius: 6,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const sectionStyle = {
  marginBottom: 20,
};

const sectionHeaderStyle = {
  borderBottom: '2px solid #0073e6',
  paddingBottom: 6,
  marginBottom: 12,
  color: '#0073e6',
};
