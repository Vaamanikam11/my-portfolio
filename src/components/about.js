// src/components/About.js
import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/assests/profile.jpg" alt="Profile" /> {/* Path relative to the public folder */}
        </div>
        <div className="about-content">
          <h1 style={{ color: '#333' }}>About me</h1>
          <p>
          Hello! I'm Vaama Nikam, a Computer Engineer with a Master's degree in Computer Science from Syracuse University. Throughout my academic journey, 
          I have focused on developing my skills in AI, including machine learning algorithms, data analysis, and natural language processing. I have also 
          been involved in various research projects related to AI, including developing chatbots and analyzing large datasets using advanced algorithms.
          </p>
          <p>
          In addition to my academic pursuits, I have participated in several AI-related competitions and hackathons, where I have 
          been able to put my skills to the test and learn from industry experts. I have also been an active member of various clubs
          on campus, where I have had the opportunity to collaborate with like-minded individuals and learn about the latest developments
          in the field. I am eager to connect with industry professionals and continue to learn and grow as a professional in this 
          exciting field.
          </p>
          <p>I am currently looking for Fall 2024 co-ops/internships and Summer 2025 new grad full-time roles.</p>
          <div className="skills-tools">
            <div className="section">
              <h3>Skills</h3>
              <ul>
                <li>Programming Languages: C, C++, Python, SQL</li>
                <li>Web: HTML, CSS3, JavaScript, jQuery, Bootstrap, React, React Native</li>
                <li>Analytics and ML: NumPy, Pandas, TensorFlow, Scikit-learn, Keras, Computer Vision, Generative AI, Artificial Intelligence, NLP, LLM</li>
              </ul>
            </div>
            <div className="section">
              <h3>Tools</h3>
              <ul>
                <li>Database Tools: MySQL, MongoDB</li>
                <li>Visualization Tools: Tableau, Python Libraries, Power BI</li>
                <li>Git Version Control, GitHub</li>
                
              </ul>
            </div>
            <div className="section">
              <h3>Software</h3>
              <ul>
                <li>Anaconda, PyCharm, Jupyter, Android Studio, VS Code, XCode, Windows, UNIX, MacOS, Microsoft Office</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
