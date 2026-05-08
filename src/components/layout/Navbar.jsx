import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/translations";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle } = useLanguage();
  const n = t.nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky-navbar${scrolled ? " navbar-scrolled" : ""}`}>
      <nav className="navbar-inner container">
        <a href="#home" className="navbar-logo">GC</a>

        <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
          <li><a href="#home"       onClick={() => setMenuOpen(false)}>{n.home[lang]}</a></li>
          <li><a href="#about"      onClick={() => setMenuOpen(false)}>{n.about[lang]}</a></li>
          <li><a href="#skills"     onClick={() => setMenuOpen(false)}>{n.skills[lang]}</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>{n.experience[lang]}</a></li>
          <li><a href="#work"       onClick={() => setMenuOpen(false)}>{n.work[lang]}</a></li>
          <li><a href="#services"   onClick={() => setMenuOpen(false)}>{n.services[lang]}</a></li>
          <li><a href="#contact"    onClick={() => setMenuOpen(false)}>{n.contact[lang]}</a></li>
        </ul>

        <div className="navbar-actions">
          <button
            className="lang-toggle"
            onClick={toggle}
            aria-label="Toggle language"
            title={lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
          >
            <span className={`lang-flag ${lang === "en" ? "active" : ""}`}>🇬🇧</span>
            <span className="lang-divider">|</span>
            <span className={`lang-flag ${lang === "es" ? "active" : ""}`}>🇪🇸</span>
          </button>

          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
