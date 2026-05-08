import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const f = t.footer;

  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-container container grid">
          <div>
            <h1 className="footer-title">Guillermo</h1>
            <span className="footer-subtitle">Full Stack Developer</span>
          </div>
          <ul className="footer-links">
            <li><a href="#experience" className="footer-link">{f.experience[lang]}</a></li>
            <li><a href="#work"       className="footer-link">{f.work[lang]}</a></li>
            <li><a href="#contact"    className="footer-link">{f.contact[lang]}</a></li>
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
          © {new Date().getFullYear()} <a href="#">Guillermo Castro</a>. {f.rights[lang]}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
