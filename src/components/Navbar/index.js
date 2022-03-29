import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <section className="nav nav-tabs">
      <div className="navbar-item">
      <a
        href="#about"
        onClick={() => handlePageChange("About")}
        className={currentPage === "About" ? "nav-link active" : "nav-link"}
      >
        About Me
      </a>
      </div>
      <div className="navbar-item">
      <a
        href="#resume"
        onClick={() => handlePageChange("Resume")}
        className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
      >
        Resume
      </a>
      </div>
      <div className="navbar-item">
      <a
        href="#projects"
        onClick={() => handlePageChange("Projects")}
        className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
      >
        Projects
      </a>
      </div>
      <div className="navbar-item">
      <a
        href="#contact"
        onClick={() => handlePageChange("Contact")}
        className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
      >
        Contact Info
      </a>
      </div>
    </section>
  );
}

export default Navbar;
