// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faMedium, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer id="contact">
      <h2>Contact</h2>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> vaamanikam11@gmail.com || vnikam@syr.edu
      </p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/vaama-nikam112/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Vaamanikam11" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://medium.com/@vaamanikam11" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a href="https://www.instagram.com/vaama_nikam11/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
