import {
  FaExternalLinkAlt,
  FaGithub
} from "react-icons/fa";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container py-4">


        <div className="text-center text-white mb-4">
          <p className="projects-title">MY WORK</p>

          <h2 className="fw-bold">
            My <span>Projects</span>
          </h2>

          <p className="text-secondary">
            Some of my recent projects and creative work
          </p>
        </div>


        <div className="row g-4">

          
          <div className="col-md-6 col-lg-4">
            <div className="project-card h-100">

              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80"
                alt="Project"
              />

              <div className="p-4">
                <h5>Task Management App</h5>

                <p>
                  A modern task management application built with
                  responsive design and easy user interface.
                </p>

                <div className="mb-3">
                  <span className="badge bg-warning text-dark me-2">
                    React
                  </span>

                  <span className="badge bg-secondary me-2">
                    JavaScript
                  </span>
                </div>

                <button className="btn btn-outline-warning btn-sm me-2">
                  <FaExternalLinkAlt /> Live Demo
                </button>

                <button className="btn btn-outline-light btn-sm">
                  <FaGithub /> GitHub
                </button>
              </div>

            </div>
          </div>


          <div className="col-md-6 col-lg-4">
            <div className="project-card h-100">

              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80"
                alt="Project"
              />

              <div className="p-4">
                <h5>ShopEase</h5>

                <p>
                  A responsive e-commerce website with modern
                  product layout and smooth user experience.
                </p>

                <div className="mb-3">
                  <span className="badge bg-warning text-dark me-2">
                    React
                  </span>

                  <span className="badge bg-secondary me-2">
                    Bootstrap
                  </span>
                </div>

                <button className="btn btn-outline-warning btn-sm me-2">
                  <FaExternalLinkAlt /> Live Demo
                </button>

                <button className="btn btn-outline-light btn-sm">
                  <FaGithub /> GitHub
                </button>
              </div>

            </div>
          </div>

          
          <div className="col-md-6 col-lg-4">
            <div className="project-card h-100">

              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80"
                alt="Project"
              />

              <div className="p-4">
                <h5>FinTrack Dashboard</h5>

                <p>
                  A clean financial dashboard for tracking expenses,
                  income and important business data.
                </p>

                <div className="mb-3">
                  <span className="badge bg-warning text-dark me-2">
                    JavaScript
                  </span>

                  <span className="badge bg-secondary">
                    CSS
                  </span>
                </div>

                <button className="btn btn-outline-warning btn-sm me-2">
                  <FaExternalLinkAlt /> Live Demo
                </button>

                <button className="btn btn-outline-light btn-sm">
                  <FaGithub /> GitHub
                </button>
              </div>

            </div>
          </div>

        </div>

       
        <div className="text-center mt-4">
          <button className="btn btn-warning rounded-pill px-4">
            View All Projects →
          </button>
        </div>

      </div>
    </section>
  );
}

export default Projects;