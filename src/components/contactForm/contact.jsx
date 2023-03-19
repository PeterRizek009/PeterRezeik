import React, { useRef, useState } from 'react';
import "./contact.css"
import {motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();


    const [msg, setMsg] = useState(" ");
    const [show, setShow] = useState(false)






    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5rvug3p', 'template_lwy1cbq', form.current, 'RjOD8z7h3igQUBEDn')
            .then((result) => {
                setShow(true);
                setMsg("Sent")
                setTimeout(() => {
                    setShow(false);
                }, 6000);
                console.log(show);
            }, (error) => {
                setShow(true);
                setMsg("error")
            });
    }

    return (
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
                    <h1 className="mb-5">Contact Me</h1>
                    <form action className="contact-form container-fluid" ref={form} onSubmit={sendEmail} >
                        <div className='row'>
                            <div className="col-sm-6">
                                <div className="input-block">
                                    <input type="text" className="form-control" placeholder='Email' name="user_email" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-block">
                                    <input type="text" className="form-control" placeholder='Message Subject' subject="subject" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-block textarea">
                                <textarea rows={5} type="text" name="message" className="form-control" defaultValue={""} placeholder="Message" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <button className="square-button  text-center" value="Send">Send</button>
                            </div>
                            <div className="col-sm-4">
                                {show ?
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <div className="mail-mark mt-3" role="alert">
                                            {msg === "Sent" ?
                                                <div className='d-flex'>
                                                    <i className="fa-solid fa-check"></i>
                                                    <span className='text-white mx-2'>Message Sent</span>
                                                </div>
                                                :
                                                <h3>Error </h3>

                                            }
                                        </div>
                                    </motion.div>
                                    :
                                    null

                                }
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </motion.div >
    );
}

export default Contact;