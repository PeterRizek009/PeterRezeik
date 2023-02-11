import React from 'react'
import "./projects.css"

const Projects = () => {
    return (
        <>
           <hr className="m-0" />
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h1 className="mb-2">Projeects</h1>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-md-4">
                                <a href="https://books-store-reactapp.netlify.app/" className="portfolio-card">
                                    <img src={require('./library.jpg')} className="portfolio-card-img" alt="books" />
                                    <span className="portfolio-card-overlay">
                                        <span className="portfolio-card-caption">
                                            <h4>Book store </h4>
                                            <p className="font-weight-normal">E-commerce APP</p>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="https://football-transfers.netlify.app/" className="portfolio-card">
                                    <img src={require('./Transfer.jpg')} className="portfolio-card-img" alt="football" />
                                    <span className="portfolio-card-overlay">
                                        <span className="portfolio-card-caption">
                                            <h4>Football  Transfers Market </h4>
                                            <p className="font-weight-normal">getting data from API and display it and manipulate it </p>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="https://wiki-search-app.netlify.app/" className="portfolio-card">
                                    <img src={require('./wiki.png')} className="portfolio-card-img" alt="search" />
                                    <span className="portfolio-card-overlay">
                                        <span className="portfolio-card-caption">
                                            <h4>WIKI search APP</h4>
                                            <p className="font-weight-normal">getting data from Wikipedia API and display and save the search queries</p>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div></div></div></section>

        </>
    );
}

export default Projects;