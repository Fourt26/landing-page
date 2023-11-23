function Footer() {
  const footerStyle = {
    backgroundColor: "#4180ab",
    color: "#fffaf0",
  };
  return (
    <div>
      <div className="container-fluid rounded" style={footerStyle}>
        <footer className="py-3 my-4 ">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 link-light text-body-light">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 link-light text-body-light">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-light px-2 text-body-light">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-light px-2 text-body-light">
                Contact
              </a>
            </li>
          </ul>
          <p className="text-center text-body-light">© 2023 Company, Inc</p>
        </footer>
      </div>
      ;
    </div>
  );
}

export default Footer;
