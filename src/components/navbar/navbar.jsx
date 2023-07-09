import React from 'react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "./nav.css"
import { BsFillBrightnessHighFill } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'


const Navbar = ({ isOpen, toggle, toggleSwitch, switchOff }) => {

 


    return (
        <motion.div animate={{ width: isOpen ? "240px" : "60px" }} className="navbar navbar-expand navbar-dark bg-primary" id="sideNav">

            <div className={isOpen ? "custom-toggler" : "custom-right"} type="button" onClick={toggle}>
                {isOpen ?

                    <i className="fa-solid fa-arrow-left"></i>
                    :
                    <i className="fa-solid fa-arrow-right"></i>
                }
            </div>



            <div className="collapse navbar-collapse">
                {isOpen ?
                    <ul className="navbar-nav">

                        <div className={isOpen ? "navbar-brand" : "no-show"} >
                            <span className="d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={require('./Profile.jpeg')} alt="pic" /></span>
                        </div>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}>About me</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/skills"}>Skills</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/projects"}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/resume"}>Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/certificate"}>Certifications</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/contact"}>Contact Me</Link>
                        </li>
                        <li className="nav-item my-4">
                            <div className="toggleBtn" onClick={toggleSwitch}>
                                {switchOff ?
                                    <MdDarkMode />
                                    :
                                    <BsFillBrightnessHighFill />
                                }
                            </div>
                        </li>
                    </ul>
                    :
                    <ul className="navbar-closed">

                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}><i className="fas fa-house-user"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/skills"}><i className="fas fa-laptop-code"></i></Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/projects"}><i className="fa-solid fa-ellipsis"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/resume"}><i className="fas fa-file"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/certificate"}><i className="fa-sharp fa-solid fa-award"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/contact"}><i className="fa-regular fa-message"></i></Link>
                        </li>

                        <li className="nav-item my-4">
                            <div className="toggleBtn" onClick={toggleSwitch}>
                                {switchOff ?
                                    <MdDarkMode />
                                    :
                                    <BsFillBrightnessHighFill />
                                }
                            </div>
                        </li>
                    </ul>
                }
            </div>
            {/* </nav> */}
        </motion.div>



    );
}

export default Navbar;  