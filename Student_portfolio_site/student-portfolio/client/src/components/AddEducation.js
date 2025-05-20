// src/components/AddEducation.js
import React, { useState } from 'react';
import axios from 'axios';

function AddEducation({ onEducationAdded }) {
  const [institution, setInstitution] = useState('');
  const [degree, setDegree] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEducation = {
      institution,
      degree,
      fieldOfStudy,
      startDate,
      endDate,
      description,
    };

    try {
      const res = await axios.post('http://localhost:5000/api/education', newEducation);
      onEducationAdded(res.data);

      // Clear form
      setInstitution('');
      setDegree('');
      setFieldOfStudy('');
      setStartDate('');
      setEndDate('');
      setDescription('');
    } catch (err) {
      console.error('Error adding education:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Education</h3>

      <input
        type="text"
        placeholder="Institution"
        value={institution}
        onChange={e => setInstitution(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={e => setDegree(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Field of Study"
        value={fieldOfStudy}
        onChange={e => setFieldOfStudy(e.target.value)}
        required
      />

      <label>Start Date:</label>
      <input
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        required
      />

      <label>End Date:</label>
      <input
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <button type="submit">Add Education</button>
    </form>
  );
}

export default AddEducation;
