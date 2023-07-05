import React from 'react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "./nav.css"
import {BsFillBrightnessHighFill} from 'react-icons/bs'

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
                        <div className="toggleBtn" onClick={toggleSwitch}>
                            {switchOff ?
                                <i className="fas fa-moon"></i>
                                :
                              <BsFillBrightnessHighFill/>
                            }
                        </div>
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
                    </ul>
                    :
                    <ul className="navbar-closed">

                        <div className="toggleBtn mb-5" onClick={toggleSwitch}>
                            {switchOff ?
                                <i className="fas fa-moon" id="moon"></i>
                                :
                                <i className="fas fa-sun"></i>
                            }
                        </div>
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
                    </ul>
                }
            </div>
            {/* </nav> */}
        </motion.div>



    );
}

export default Navbar;  