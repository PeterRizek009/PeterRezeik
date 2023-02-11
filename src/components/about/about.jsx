import React from 'react';
import "./about.css"


const About = () => {
    return (<>
    
        <section className="resume-section"  id="about">
            <div className="resume-section-content">
                <h1 className="text-capitalize">
                    Peter
                    <span className="text-primary"> Reziek</span>
                </h1>
                <br />
                <h3 className="mb-0">
                    Front-End developer
                    <span className="text-primary"> | </span>React Js
                </h3>

                <div className="subheading mb-2">
                    Alexandria,Egypt
                    <a href="mailto:Plrizek@gmail.com" className="ms-3 text-primary">Plrizek@gmail.com</a>
                </div>

                <div className="subheading mb-3">
                    <i class="fas fa-phone text-primary me-2"></i>  +201285586035 - +201557656399
                </div>

                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/peter-rezik-a84408123/"><i className="fab fa-linkedin-in" /></a>
                    <a className="social-icon" href="https://github.com/PeterRizek009"><i className="fab fa-github" /></a>
                    <a className="social-icon" href="https://www.youtube.com/@peter-codes6557"><i className="fab fa-youtube" /></a>
                </div>
                <br />
                <p className="lead mb-5 w-75">I have a great passion for putting ideas into digital form with a great and modern view and currently  I am Seeking a role as a front-end developer so I can use my thorough knowledge of programming frameworks and development software. </p>

            </div>
        </section>
    
        <hr className="m-0" />


    </>
    );
}

export default About;