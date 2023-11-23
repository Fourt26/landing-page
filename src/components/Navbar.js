function Navbar(props) {
  const navbarStyle = {
    backgroundColor: "#4180ab",
    color: "#fffaf0",
  };

  return (
    <div>
      <div
        className="container-fluid border rounded text-light"
        style={navbarStyle}
      >
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom ">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-4 text-light ">Simple header</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link link-light" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-light">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-light">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-light">
                Contact
              </a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}
export default Navbar;
