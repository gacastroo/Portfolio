import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer-bg">
      <div className="footer-container container grid">
        <div>
          <h1 className="footer-title">Guillermo</h1>
          <span className="footer-subtitle">Frontend Developer</span>
        </div>
        <ul className="footer-links">
          <li><a href="#services" className="footer-link">Services</a></li>
          <li><a href="#work" className="footer-link">Work</a></li>
          <li><a href="#contact" className="footer-link">Contact</a></li>
        </ul>
        <div className="footer-socials">
          <a href="https://github.com/gacastroo" target="_blank" rel="noreferrer" className="footer-social">
            <i className="uil uil-github" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social">
            <i className="uil uil-linkedin" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social">
            <i className="uil uil-twitter" />
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
