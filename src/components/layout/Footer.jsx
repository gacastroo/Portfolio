import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer-bg">
      <div className="footer-container container grid">
        <div>
          <h1 className="footer-title">Guillermo</h1>
          <span className="footer-subtitle">Full Stack Developer</span>
        </div>
        <ul className="footer-links">
          <li><a href="#experience" className="footer-link">Experience</a></li>
          <li><a href="#work" className="footer-link">Work</a></li>
          <li><a href="#contact" className="footer-link">Contact</a></li>
        </ul>
        <div className="footer-socials">
          <a href="https://github.com/gacastroo" target="_blank" rel="noreferrer" className="footer-social">
            <i className="uil uil-github" />
          </a>
          <a href="https://www.linkedin.com/in/guillermo-castro-abarcaa/" target="_blank" rel="noreferrer" className="footer-social">
            <i className="uil uil-linkedin" />
          </a>
        </div>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} <a href="#">Guillermo Castro</a>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
