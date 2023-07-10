import React from 'react'
import { motion } from 'framer-motion';



const Resume = () => {
    return (<>
     <motion.div initial={{
                y: "200vw",
            }}
                animate={{
                    y: "0"
                }}
                transition={{
                    duration: "0.9"
                }}>
        <section className="resume-section">
            <div className="resume-section-content">
                <h1 className="mb-5 resume-title">Resume</h1>
                <p className='text-primary'>Download My resume</p>
                <a type="button" class="btn btn-outline-warning" href="https://drive.google.com/file/d/1r9gkk5yiEutD4P1zw-ONxj2qM-QUhdhv/view?usp=sharing">Download</a>
            </div>
        </section>
        <hr className="m-0" />
        </motion.div>
    </>);
}

export default Resume;