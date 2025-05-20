import React, { useState } from 'react';

function ProfileForm({ onProfileUpdate }) {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    degree: '',
    email: '',
    linkedin: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Enter Your Profile Details</h2>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        name="college"
        placeholder="College"
        value={formData.college}
        onChange={handleChange}
        required
      />

      <input
        name="degree"
        placeholder="Degree"
        value={formData.degree}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="url"
        name="linkedin"
        placeholder="LinkedIn URL"
        value={formData.linkedin}
        onChange={handleChange}
        required
      />

      <button type="submit">Save Profile</button>
    </form>
  );
}

export default ProfileForm;
