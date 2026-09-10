import {
    FaCode,
    FaPen,
    FaMobileAlt,
    FaEnvelope,
    FaPaintBrush,
    FaDesktop
} from "react-icons/fa";

function Services() {
    return (
        <section className="services py-5" id="services">
            <div className="container py-4">

               
                <div className="text-center text-white mb-4">
                    <h2 className="fw-bold">
                        My <span>Services</span>
                    </h2>

                    <p className="small text-secondary">
                        Comprehensive digital solutions tailored to your business needs
                    </p>
                </div>

                
                <div className="row g-3">

                    <div className="col-md-6 col-lg-4">
                        <div className="service-card p-4 h-100">
                            <FaCode className="service-icon" />
                            <h5>Web Development</h5>
                            <p>
                                Custom web applications built with modern technologies
                                for optimal performance and user experience.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="service-card p-4 h-100">
                            <FaPen className="service-icon" />
                            <h5>Technical Writing</h5>
                            <p>
                                Clear and comprehensive documentation to keep your
                                users informed and your projects effective.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="service-card p-4 h-100">
                            <FaMobileAlt className="service-icon" />
                            <h5>Mobile Development</h5>
                            <p>
                                Native and cross-platform mobile apps that deliver
                                seamless experiences on all devices.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="service-card p-4 h-100">
                            <FaEnvelope className="service-icon" />
                            <h5>Email Marketing</h5>
                            <p>
                                Strategic email campaigns that engage your audience
                                and drive meaningful business results.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="service-card p-4 h-100">
                            <FaPaintBrush className="service-icon" />
                            <h5>UI/UX Design</h5>
                            <p>
                                User-centered designs that combine aesthetics with
                                functionality for exceptional experiences.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="service-card p-4 h-100">
                            <FaDesktop className="service-icon" />
                            <h5>Web Design</h5>
                            <p>
                                Responsive and visually stunning websites that
                                represent your brand and engage visitors.
                            </p>
                        </div>
                    </div>

                </div>

                
                <div className="text-center mt-4">
                    <button className="btn btn-warning rounded-pill px-4 me-2">
                        View All Services →
                    </button>

                    <button className="btn btn-outline-warning rounded-pill px-4">
                        Get In Touch
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Services;