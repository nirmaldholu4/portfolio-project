function Home() {
    return (
        <section className="home">
            <div className="container">
                <div className="row align-items-center min-vh-100">

                   
                    <div className="col-lg-6 text-white">

                        <p className="home-title">
                            FULL-STACK DEVELOPER & UI/UX ENTHUSIAST
                        </p>

                        <h1 className="display-3 fw-bold">
                            Hi, I'm <span>Nirmal</span> 👋
                        </h1>

                        <p className="lead text-secondary mt-4">
                            I craft digital solutions that combine cutting-edge
                            technology with beautiful design. Let's turn your ideas
                            into reality.
                        </p>

                        
                        <div className="mt-4">
                            <button className="btn btn-warning px-4 py-3 me-3">
                                Contact Me →
                            </button>

                            <button className="btn btn-outline-warning px-4 py-3">
                                ↓ Download CV
                            </button>
                        </div>

                      
                        <div className="row mt-5">

                            <div className="col-4">
                                <h3 className="text-warning fw-bold">30+</h3>
                                <p>Projects</p>
                            </div>

                            <div className="col-4">
                                <h3 className="text-warning fw-bold">2+</h3>
                                <p>Years</p>
                            </div>

                            <div className="col-4">
                                <h3 className="text-warning fw-bold">40+</h3>
                                <p>Clients</p>
                            </div>

                        </div>
                    </div>

                    
                    <div className="col-lg-6 text-center mt-5 mt-lg-0">

                        <div className="profile-box">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/058/270/914/small/confident-business-professional-holding-digital-devices-in-office-png.png"
                                alt="Profile"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Home;