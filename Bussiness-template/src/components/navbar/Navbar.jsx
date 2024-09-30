function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 py-lg-0 shadow">
        <div className="container">
          <div className="navbar-brand">
            <h2 className="m-0">Flex Business Pro</h2>
            <p className="m-0" style={{ fontSize: "16px", color : "grey" }}>
              Clean and Modern Business Theme
            </p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-flex justify-content-end">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3">
                <li className="nav-item mx-2 ">
                  <a className="nav-link active text-primary" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" aria-current="page" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" aria-current="page" href="#">
                    Styleguide
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" aria-current="page" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" aria-current="page" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
