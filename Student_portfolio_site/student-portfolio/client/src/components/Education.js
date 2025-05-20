// src/components/Education.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddEducation from './AddEducation';

function Education() {
  const [educationList, setEducationList] = useState([]);

  const fetchEducation = () => {
    axios.get('http://localhost:5000/api/education')
      .then(res => setEducationList(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  const handleEducationAdded = (newEducation) => {
    setEducationList([newEducation, ...educationList]);
  };

  return (
    <div>
      <AddEducation onEducationAdded={handleEducationAdded} />

      <h2>Education</h2>
      {educationList.length === 0 ? (
        <p>No education records found.</p>
      ) : (
        <ul>
          {educationList.map(edu => (
            <li key={edu._id}>
              <h3>{edu.degree} in {edu.fieldOfStudy}</h3>
              <p><strong>Institution:</strong> {edu.institution}</p>
              <p><strong>Duration:</strong> {new Date(edu.startDate).toLocaleDateString()} - {edu.endDate ? new Date(edu.endDate).toLocaleDateString() : 'Present'}</p>
              <p>{edu.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Education;
