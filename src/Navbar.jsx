import React from "react";
import Logo from "./images/Slogo.png";
import "./style.css";

function Navbar() {
  const logoStyle = {
    width: "50px",
    height: "40px",
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top shadow">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand d-flex align-items-center" href="#Home">
          <img
            src={Logo}
            alt="Sangar Logo"
            className="rounded-pill me-2"
            style={logoStyle}
          />
          <span className="fw-bold">SANGARD.</span>
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Profile">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Project">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Journey">Journey</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Skills">Skills</a>
            </li>
            <li className="nav-item ms-2">
              <a href="#Contact">
                <button className="btn btn-outline-info btn-sm rounded-pill px-3">
                  Contact
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
