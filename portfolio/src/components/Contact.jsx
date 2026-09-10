import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

function Contact() {
    return (
        <section className="contact py-3" id="contact">
            <div className="container py-3">


                <div className="text-center text-white mb-4">
                    <p className="contact-title">CONTACT ME</p>

                    <h2 className="fw-bold">
                        Let's <span>Work Together</span>
                    </h2>

                    <p className="text-secondary">
                        Have a project in mind? Feel free to get in touch with me.
                    </p>
                </div>

                <div className="row g-4">


                    <div className="col-lg-5">

                        <div className="contact-card p-4 h-100 text-white">

                            <h4 className="fw-bold mb-4">
                                Get In Touch
                            </h4>

                            <div className="d-flex align-items-center mb-4">
                                <FaEnvelope className="contact-icon me-3" />

                                <div>
                                    <small className="text-secondary">Email</small>
                                    <p className="mb-0">hello@example.com</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <FaPhone className="contact-icon me-3" />

                                <div>
                                    <small className="text-secondary">Phone</small>
                                    <p className="mb-0">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <FaMapMarkerAlt className="contact-icon me-3" />

                                <div>
                                    <small className="text-secondary">Location</small>
                                    <p className="mb-0">India</p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <a href="#" className="text-warning me-3">
                                    <FaGithub />
                                </a>

                                <a href="#" className="text-warning">
                                    <FaLinkedin />
                                </a>
                            </div>

                        </div>

                    </div>


                    <div className="col-lg-7">

                        <div className="contact-card p-4">

                            <form>

                                <div className="row">

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label text-white">
                                            Your Name
                                        </label>

                                        <input type="text" className="form-control" placeholder="Enter your name" />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label text-white">
                                            Email
                                        </label>

                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                    </div>

                                </div>

                                <div className="mb-3">
                                    <label className="form-label text-white">
                                        Subject
                                    </label>

                                    <input type="text" className="form-control" placeholder="Enter subject" />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label text-white">
                                        Message
                                    </label>

                                    <textarea className="form-control" rows="5" placeholder="Write your message"></textarea>
                                </div>

                                <button type="button" className="btn btn-warning rounded-pill px-4" > Send Message → </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;