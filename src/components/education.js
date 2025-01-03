import React from 'react';
import './education.css';

const educationData = [
  {
    title: 'Master of Science in Computer Science',
    institution: 'Syracuse University',
    years: '2023 - 2025',
    logo: `${process.env.PUBLIC_URL}/assets/Syracuse-Orange-Logo-2006.png`, // Correct path to the SU logo image
  },
  {
    title: 'Bachelor of Engineering in Computer Engineering',
    institution: 'University of Mumbai',
    years: '2019 - 2023',
    logo: `${process.env.PUBLIC_URL}/assets/mumuni.png`, // Correct path to the University of Mumbai logo image
  },
  // Add more education entries as needed
];

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-logo">
              <img src={edu.logo} alt={edu.institution} />
            </div>
            <div className="education-info">
              <h3>{edu.institution}</h3>
              <p>{edu.title}</p>
              <p>{edu.years}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
