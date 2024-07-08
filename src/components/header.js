// src/components/Header.js
import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggling menu. Current state:", isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <h1>Vaama Nikam</h1>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#education" onClick={toggleMenu}>Education</a>
        <a href="#experience" onClick={toggleMenu}>Experience</a>
        {/* <a href="#projects" onClick={toggleMenu}>Projects</a> */}
        <a href="#certificates" onClick={toggleMenu}>Certifications</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Header;
