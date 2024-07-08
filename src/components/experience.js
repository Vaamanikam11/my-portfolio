// src/components/WorkExperience.js
import React from 'react';
import './experience.css';

const workExperiences = [
  {
    title: 'Web Development Intern',
    company: 'EkakiVedam Organization',
    period: 'May 2022 - Feb 2023',
    logo: 'assests/ekaki-logo.jpeg', // Adjust the path to your logo
  },
  {
    title: 'AI/ML Intern',
    company: 'Checkexplore Technologies',
    period: 'May 2022 - Oct 2022',
    logo: 'assests/checkexplore-logo.png', // Adjust the path to your logo
  },
  {
    title: 'AI Intern',
    company: 'Axisvation Solutions',
    period: 'Jul 2021  - Sep 2021',
    logo: 'assests/logo-axisvation.png', // Adjust the path to your logo
  },
  // {
  //   title: 'Data Scientist',
  //   company: 'U.S. Army',
  //   period: 'June 2020 - August 2021',
  //   logo: '/assets/us_army.png', // Adjust the path to your logo
  // },
 
];

const WorkExperience = () => {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {workExperiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <div className="experience-logo">
              <img src={experience.logo} alt={experience.company} />
            </div>
            <div className="experience-info">
              <h3>{experience.title}</h3>
              <p>{experience.company}</p>
              <p>{experience.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
