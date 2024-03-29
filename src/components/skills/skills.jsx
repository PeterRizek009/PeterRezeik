import React from 'react'
import "./skills.css"
import { motion } from 'framer-motion';
import {SiTypescript , SiRedux} from 'react-icons/si'
 
const Skills = () => {
    return (<>

    <motion.div  initial={{
      y : "200vw",
    }}
    animate={{
      y : "0"
    }}
    transition={{
      duration:"0.9"
    }}>
  <section className="resume-section" id="skills">
    <div className="resume-section-content">
      <h1 className="mb-5">Skills</h1>
      <div className="subheading mb-3">Programming Languages &amp; Tools</div>
      <ul className="list-inline dev-icons">
        <li className="list-inline-item ms-1"><i className="fa-brands fa-html5 text-primary" /></li>
        <li className="list-inline-item ms-1"><i className="fab fa-css3-alt text-info" /></li>
        <li className="list-inline-item ms-1"><i className="fab fa-bootstrap" /></li>
        <li className="list-inline-item ms-1"><i className="fab fa-js-square text-warning" /></li>
        <li className="list-inline-item ms-1"><i className="fab fa-react text-info" /></li>
            <li className="list-inline-item ms-1"><i className="fab fa-redux text-info" /></li>
        <li className="list-inline-item ms-1"><i className="fab fa-git text-white" /></li>
        <li className="list-inline-item ms-1"><i className="fab fa-github text-white" /></li>
        <li className="list-inline-item ms-1"><i className="fab fa-npm text-danger" /></li>
        <li className="list-inline-item ms-1"><SiTypescript className='text-info'/></li>
        <li className="list-inline-item ms-1"><SiRedux/></li>

      </ul>
      <div className="subheading mb-3">Skills</div>
      <ul className="fa-ul mb-0 text-white skill-two">
        <li className="mb-1">
          <span className="fa-li text-primary"><i className="fas fa-check" /></span>
          Mobile-First, Responsive Design
        </li>
        <li className="mb-1">
          <span className="fa-li text-primary"><i className="fas fa-check" /></span>
          Problem solving
        </li>
        <li className="mb-1">
          <span className="fa-li text-primary"><i className="fas fa-check" /></span>
          Ability to learn new technology
        </li>
        <li>
          <span className="fa-li text-primary"><i className="fas fa-check" /></span>
          Experience in creating responsive and adaptive web designs
        </li>
      </ul>
    </div>
  </section>
  <hr className="m-0" />
</motion.div>

    </>);
}

export default Skills;