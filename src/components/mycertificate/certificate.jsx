import React from 'react';
import { motion } from 'framer-motion';
import "./certificates.css"


const Certificate = () => {
    return (<>
        {/* Awards*/}
        <motion.div initial={{
            y: "200vw",
        }}
            animate={{
                y: "0"
            }}
            transition={{
                duration: "0.9"
            }}>
            <section className="resume-section" id="awards">
                <div className="resume-section-content">
                    <h1 className="mb-5">Awards &amp; <span className='text-primary'>Certifications </span> </h1>
                    <ul className="fa-ul mb-0 ">
                        <li className="mt-2 text-white">
                            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
                            Web development course (WordPress , HTML5 ,CSS3 , freelancing) - <br />
                            Online course - Udacity and Future is digital program (FWD).<br />
                            <a href="https://drive.google.com/file/d/1NEFhn98xa6090Frj5gX6ONGyH4psTEYt/view" className='text-primary'>Certificate</a>
                        </li>
                        <li className="mt-3 text-white">
                            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
                            React JS certificate - Online course - (Information Technology institute ) <br />
                            <a href="https://drive.google.com/file/d/1ARg3XfsPVwihkNiRvwAyfEkI8dijIPc9/view" className='text-primary'>Certificate</a>
                        </li>
                        <li className="mt-3 text-white">
                            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
                            solved more than 60 problem solving question in the last three month <br />
                            <a href="https://app.codesignal.com/profile/peterrizek009" className='text-primary'>Profile</a>
                        </li>
                    </ul>
                </div>
            </section>
        </motion.div>
    </>);
}

export default Certificate 