import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <h1 className="logo">Guillermo Castro</h1>

        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;