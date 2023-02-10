import React from 'react'



const Skills = () => {
    return (<>

    <div>
  <section className="resume-section" id="skills">
    <div className="resume-section-content">
      <h1 className="mb-5">Skills</h1>
      <div className="subheading mb-3">Programming Languages &amp; Tools</div>
      <ul className="list-inline dev-icons">
        <li className="list-inline-item"><i className="fa-brands fa-html5 text-primary" /></li>
        <li className="list-inline-item"><i className="fab fa-css3-alt text-info" /></li>
        <li className="list-inline-item"><i className="fab fa-bootstrap" /></li>
        <li className="list-inline-item"><i className="fab fa-js-square text-warning" /></li>
        <li className="list-inline-item"><i className="fab fa-react text-info" /></li>
        <li className="list-inline-item"><i className="fab fa-git text-black" /></li>
        <li className="list-inline-item"><i className="fab fa-npm text-danger" /></li>
      </ul>
      <div className="subheading mb-3">Skills</div>
      <ul className="fa-ul mb-0">
        <li>
          <span className="fa-li"><i className="fas fa-check" /></span>
          Mobile-First, Responsive Design
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-check" /></span>
          Problem solving
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-check" /></span>
          Ability to learn new technology
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-check" /></span>
          Teamwork
        </li>
      </ul>
    </div>
  </section>
  <hr className="m-0" />
</div>

    </>);
}

export default Skills;