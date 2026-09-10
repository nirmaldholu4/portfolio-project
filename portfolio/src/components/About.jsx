function About() {
    return (
        <section className="about py-4" id="about">
            <div className="container py-3">

                <div className="row align-items-center">

                   
                    <div className="col-lg-5 text-center mb-4 mb-lg-0">
                        <div className="about-box">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D4E12AQGipRfYOOPelA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1718875139409?e=2147483647&v=beta&t=cVgRzcQ6Evuz7YjKPnkceF9V5oqUJwC_DY4ROfKIcpc"
                                alt="About Me"
                            />
                        </div>
                    </div>

                   
                    <div className="col-lg-7 text-white">

                        <p className="about-title">ABOUT ME</p>

                        <h2 className="fw-bold mb-3">
                            Turning Ideas Into <span>Digital Reality</span>
                        </h2>

                        <p className="text-secondary">
                            I'm a passionate full-stack developer who loves creating
                            modern, responsive and user-friendly web applications.
                            I enjoy turning complex problems into simple and beautiful
                            solutions.
                        </p>

                        <p className="text-secondary">
                            My goal is to build digital experiences that are fast,
                            reliable and easy to use. I always try to learn new
                            technologies and improve my skills.
                        </p>

                        
                        <div className="row mt-4">

                            <div className="col-sm-6 mb-3">
                                <h6 className="text-warning">Name</h6>
                                <p>Nirmal Developer</p>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <h6 className="text-warning">Experience</h6>
                                <p>2+ Years</p>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <h6 className="text-warning">Location</h6>
                                <p>India</p>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <h6 className="text-warning">Email</h6>
                                <p>hello@example.com</p>
                            </div>

                        </div>

                        <button className="btn btn-warning rounded-pill px-4 mt-2">
                            More About Me →
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;