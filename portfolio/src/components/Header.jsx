function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark header">
      <div className="container">

        <a className="navbar-brand logo" href="#">
          Myportfolio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About Me</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Testimonials</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>

            <li className="nav-item ms-lg-3">
              <a className="btn btn-warning rounded-pill" href="#">
                Let's Talk
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Header;