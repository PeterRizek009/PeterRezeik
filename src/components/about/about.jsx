import React from 'react';
import "./about.css"


const About = () => {
    return (<>
    
        <section className="resume-section"  id="about">
            <div className="resume-section-content">
                <h1 className="text-uppercase">
                    Peter
                    <span className="text-primary"> Rezeik</span>
                </h1>
                <br />
                <h3 className="mb-0">
                    Front-End developer
                    <span className="text-primary"> | </span>React Js
                </h3>

                <div className="subheading mb-2">
                <i className="fas fa-map-marker text-primary me-2"></i>
                    Alexandria,Egypt
                </div>
                <div className="subheading mb-2">
                <i className="fa-sharp fa-solid fa-envelope text-primary me-2"></i>
                    <a href="mailto:Plrizek@gmail.com" className="text-primary">Plrizek@gmail.com</a>
                </div>

                <div className="subheading mb-3">
                    <i className="fas fa-phone text-primary me-2"></i>  +201285586035 - +201557656399
                </div>

                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/peter-rezik-a84408123/"><i className="fab fa-linkedin-in" /></a>
                    <a className="social-icon" href="https://github.com/PeterRizek009"><i className="fab fa-github" /></a>
                    <a className="social-icon" href="https://www.youtube.com/@peter-codes6557"><i className="fab fa-youtube" /></a>
                </div>
                <br />
                <p className="lead mb-5 w-50">Enthusiastic front-End developer with a great passion to put ideas into modern digital forms and I have a good experience using HTML and CSS and Javascript and React JS </p>

            </div>
        </section>
    
        <hr className="m-0" />


    </>
    );
}

export default About;