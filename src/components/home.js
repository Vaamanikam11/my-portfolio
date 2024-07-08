import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../src/Cover.png'; // Update the path if necessary
import './home.css';
import { Typed } from 'react-typed';

// const Home = () => {
//   const roles = ['Software Developer', 'AI/ML Enthusiast', 'Data Scientist'];
//   const [currentRole, setCurrentRole] = useState(0);

//   useEffect(() => {
//     const roleChangeInterval = setInterval(() => {
//       setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
//     }, 2000); // Change role every 2 seconds
//     return () => clearInterval(roleChangeInterval);
//   }, [roles.length]);

//   return (
//     <section className="home" id="home">
//       <div className="home-overlay">
//         <Container>
//           <Row className="align-items-center">
//             <Col xs={12} md={6} xl={7}>
//               <span className="tagline">Welcome to my Portfolio</span>
//               <h1>
//                 Hi! I am Vaama a <span className="wrap">{roles[currentRole]}</span>
//               </h1>
//               {/* <button onClick={() => console.log('connect')}>
//                 Resume <ArrowRightCircle size={25} />
//               </button> */}
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </section>
//   );
// };

// export default Home;

const Home = () => {
  const roles = ['Software Developer', 'AI/ML Enthusiast', 'Data Scientist'];

  return (
    <section className="home" id="home">
      <div className="home-overlay">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                Hi! I am Vaama{' '}
                <span className="wrap">
                  <Typed
                    strings={roles}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                  />
                </span>
              </h1>
              <p>
                <a href="#contact" className="btn btn-primary">
                  Resume
                </a>
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Home;