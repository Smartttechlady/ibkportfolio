import React from 'react'
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {


  return (
     <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={("./..//Images/Logo.png")}  alt="Logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <i className="bi bi-person"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/experience">
                <i className="bi bi-laptop"></i> Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">
                <i className="bi bi-briefcase"></i> Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                <i className="bi bi-envelope"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar