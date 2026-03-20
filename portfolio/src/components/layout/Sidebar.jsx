import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((s) => {
        const top = s.offsetTop - 50;
        if (scrollY >= top && scrollY < top + s.offsetHeight) {
          setActiveLink(s.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button className="nav-toggle" onClick={() => setShow(true)}>
        <i className="uil uil-bars" />
      </button>

      <aside className={`sidebar${show ? " show-sidebar" : ""}`} id="sidebar">
        <nav className="nav">
          <div className="nav-logo">
            <a href="#home" className="nav-logo-text">G</a>
          </div>

          <div className="nav-menu">
            <div className="menu">
              <ul className="nav-list">
                {navLinks.map(({ href, label }) => (
                  <li className="nav-item" key={href}>
                    <a
                      href={href}
                      className={`nav-link${activeLink === href.slice(1) ? " active-link" : ""}`}
                      onClick={() => setShow(false)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="btn-share">
            <i className="uil uil-share-alt social-share" />
          </div>

          <button className="nav-close" onClick={() => setShow(false)}>
            <i className="uil uil-times" />
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
