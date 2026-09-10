import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaJs
} from "react-icons/fa";

function Skills() {
    return (
        <section className="skills py-4" id="skills">
            <div className="container py-3">

                
                <div className="text-center text-white mb-5">
                    <p className="skills-title">MY SKILLS</p>

                    <h2 className="fw-bold">
                        Skills & <span>Expertise</span>
                    </h2>

                    <p className="text-secondary">
                        Technologies and tools I use to build modern web applications
                    </p>
                </div>

               
                <div className="row g-4">

                    <div className="col-md-6 col-lg-4">
                        <div className="skill-card p-4">
                            <FaHtml5 className="skill-icon" />
                            <h5>HTML & CSS</h5>
                            <p>95%</p>

                            <div className="progress">
                                <div className="progress-bar bg-warning" style={{ width: "95%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="skill-card p-4">
                            <FaJs className="skill-icon" />
                            <h5>JavaScript</h5>
                            <p>90%</p>

                            <div className="progress">
                                <div className="progress-bar bg-warning" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="skill-card p-4">
                            <FaReact className="skill-icon" />
                            <h5>React</h5>
                            <p>85%</p>

                            <div className="progress">
                                <div className="progress-bar bg-warning" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="skill-card p-4">
                            <FaNodeJs className="skill-icon" />
                            <h5>Node.js</h5>
                            <p>80%</p>

                            <div className="progress">
                                <div className="progress-bar bg-warning" style={{ width: "80%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="skill-card p-4">
                            <FaPython className="skill-icon" />
                            <h5>Python</h5>
                            <p>75%</p>

                            <div className="progress">
                                <div className="progress-bar bg-warning" style={{ width: "75%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="skill-card p-4">
                            <FaCss3Alt className="skill-icon" />
                            <h5>UI / UX Design</h5>
                            <p>85%</p>

                            <div className="progress">
                                <div className="progress-bar bg-warning" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                    </div>

                </div>

               
                <div className="text-center text-white mt-5">
                    <p className="mb-0"> I'm <span className="text-warning fw-bold">Nirmal</span>, always learning and improving my development skills. </p>
                </div>

            </div>
        </section>
    );
}

export default Skills;