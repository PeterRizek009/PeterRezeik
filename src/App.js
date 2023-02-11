import './css/app.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/myprojects/projects';
import Resume from './components/resume/resume';
import Certificate from './components/mycertificate/certificate';
import React, { useState } from 'react'
import { motion } from 'framer-motion';

function App() {

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="App">
      <Navbar  isOpen={isOpen} setIsOpen={setIsOpen}  toggle={toggle}/>
      <motion.div animate={{ marginLeft: isOpen ? "40px" : "0px" }}  >
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About/>}/>  
        <Route path="/skills" element={<Skills/>}/>  
         <Route path="/projects" element={<Projects/>}/>  
       <Route path="/resume" element={<Resume/>}/>  
        <Route path="/certificate" element={<Certificate/>}/>  
       {/*  <Route path="*" element={<DifferentSquares/>}/> */}
      </Routes>
      </motion.div>
    </div>
  );
}

export default App;
