import './css/app.css';

import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/myprojects/projects';
import Resume from './components/resume/resume';
import Certificate from './components/mycertificate/certificate';
import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion';
import Contact from './components/contactForm/contact';
import Loading from './components/loading/loading.jsx';



function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [switchOff, setSwitchOff] = useState(false);

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const toggleSwitch = useCallback(() => setSwitchOff(!switchOff), [switchOff])

  const [showComponent, setShowComponent] = useState(false);
  
  const location = useLocation();



  useEffect(() => {
    const delay = 3000; // Delay in milliseconds

    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <>
      {showComponent === true ?

        <div className={switchOff ? "App" : "App-off"}>

          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} toggleSwitch={toggleSwitch} switchOff={switchOff} />
          <motion.div animate={{ marginLeft: isOpen ? "40px" : "0px" }}  >

            <Routes location={location.pathname}>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/contact" element={<Contact />} />

            </Routes>

          </motion.div>

        </div>
        :
        <Loading />
      }
    </>
  );
}

export default App;
