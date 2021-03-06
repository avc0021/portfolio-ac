import React from "react";

function Footer() {
  return (
    <section className="footer" style={{textAlign:"center"}}>
      <div className="footer-social-icons">
        <ul className="social-icons">
          <li>
            <a href="https://github.com/avc0021" className="social-icon">
              {" "}
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ac383/" className="social-icon">
              {" "}
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_ayejayz_/" className="social-icon">
              {" "}
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
