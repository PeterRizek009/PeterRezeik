import React from 'react'
import "./projects.css"
import { motion } from 'framer-motion';

const Projects = () => {

    const projectsData = [
        {
            name: 'Book Store Website',
            link: 'https://books-ecommerceapp.netlify.app/',
            image: './library.png'
        },
        {
            name: 'News website',
            link: 'https://newsapptoday.netlify.app/',
            image: './news.png'
        },
        {
            name: 'Football  Transfers Market ',
            link: 'https://football-transfers.netlify.app/',
            image: './Transfer.jpg'
        },
        {
            name: 'Company Landing Page',
            link: 'https://companylanpgtemplate.netlify.app/',
            image: './landing.png'
        },
    ]
    return (
        <>
            <motion.div initial={{
                y: "200vw",
            }}
                animate={{
                    y: "0"
                }}
                transition={{
                    duration: "0.9"
                }}>
                <section className="resume-section" id="education">
                    <div className="resume-section-content">
                        <h1 className="mb-5">Projeects</h1>
                        <div className="projects">

                            {projectsData.map((project) => (
                                <div className="project">
                                    <a href={project.link} className="portfolio-card" key={project.name}>
                                        <img src={require(`${project.image}`)} className="portfolio-card-img" alt="books" />
                                        <span className="portfolio-card-overlay">
                                            <span className="portfolio-card-caption">
                                                <h4>{project.name}</h4>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            ))}


                        </div></div></section>
            </motion.div>
        </>
    );
}

export default Projects;