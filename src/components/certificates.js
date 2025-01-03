import React from 'react';
import './certificates.css';

const certifications = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issued: 'Issued October 2022',
    logo: `${process.env.PUBLIC_URL}/assets/azure1.png`,  // Correct path to the logo image
    link: 'https://learn.microsoft.com/en-us/users/vaamanikam-6071/transcript/d4p8i93335y5zod'
  },
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    issued: 'Issued July 2022',
    logo: `${process.env.PUBLIC_URL}/assets/azure2.png`,  // Correct path to the logo image
    link: 'https://learn.microsoft.com/en-us/users/vaamanikam-6071/transcript/d4p8i93335y5zod'
  },
  {
    title: 'Python for Data Science and AI',
    issued: 'Issued October 2022',
    logo: `${process.env.PUBLIC_URL}/assets/ibm.png`,  // Correct path to the logo image
    link: 'https://www.credly.com/badges/75e8233b-35ea-4421-9896-f9eacd53d84e'
  },
  {
    title: 'Google Cloud Badges',
    issued: 'Silver League',
    logo: `${process.env.PUBLIC_URL}/assets/gcp.png`,  // Correct path to the logo image
    link: 'https://www.cloudskillsboost.google/public_profiles/9d49caf4-fd29-4511-b952-12b2888a1a7d'
  },
];

const Certificates = () => {
  return (
    <section id="certificates">
      <h2>Certifications</h2>
      <div className="certification-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card" onClick={() => window.open(cert.link, '_blank')}>
            <div className="certification-logo">
              <img src={cert.logo} alt={cert.title} />
            </div>
            <div className="certification-info">
              <h3>{cert.title}</h3>
              <p>{cert.issued}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
