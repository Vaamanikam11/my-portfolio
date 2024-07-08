import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../../src/Cover.png';
import './home.css';

const Home = () => {
  const roles = ['Software Developer', 'AI/ML Enthusiast', 'Data Scientist'];

  return (
    <section className="home" id="home">
      <div className="home-overlay">
        <span className="tagline">Welcome to my Portfolio</span>
        <h1>
          Hi! I am Vaama a {' '}
          <span className="wrap">
            <Typewriter
              words={roles}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        
      </div>
    </section>
  );
};

export default Home;
