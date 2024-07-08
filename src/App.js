// src/App.js
import React from 'react';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
// import Projects from './components/projects';
import Contact from './components/contact';
import Certificates from './components/certificates';
import Footer from './components/footer';
import Education from './components/education';
import Experience from './components/experience';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Education />
        {/* <Projects /> */}
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
