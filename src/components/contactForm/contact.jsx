import React from 'react';
import "./contact.css"

const Contact = () => {
    return (
        <section className="resume-section">
            <div className="resume-section-content">
                <h1 className="mb-5">Contact Me</h1>
                <form action className="contact-form container-fluid">
                    <div className='row'>
                        <div className="col-sm-6">
                            <div className="input-block">
                                <input type="text" className="form-control" placeholder='Email' />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-block">
                                <input type="text" className="form-control" placeholder='Message Subject' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="input-block textarea">
                            <textarea rows={5} type="text" className="form-control" defaultValue={""} placeholder="Message" />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <button className="square-button  mx-auto">Send</button>
                    </div>


                </form>
            </div>
        </section>

    );
}

export default Contact;