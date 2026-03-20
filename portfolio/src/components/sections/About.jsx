import React from "react";

const About = () => (
  <section className="about section" id="about">
    <h2 className="section-title" data-heading="My Intro">About Me</h2>

    <div className="about-container container grid">
      <img
        src=""
        alt="About Guillermo"
        className="about-img"
      />

      <div className="about-data">
        <h3 className="about-heading">
          Hi, I'm Guillermo Castro, based in Spain
        </h3>
        <p className="about-description">
          I'm a frontend developer with extensive knowledge and experience working with modern web
          technologies, React, UI and UX design. I care about every detail that makes an interface
          feel great.
        </p>

        <div className="about-info">
          <div className="about-box">
            <i className="uil uil-award about-icon" />
            <h3 className="about-title">Experience</h3>
            <span className="about-subtitle">2+ Years</span>
          </div>
          <div className="about-box">
            <i className="uil uil-suitcase-alt about-icon" />
            <h3 className="about-title">Completed</h3>
            <span className="about-subtitle">10+ Projects</span>
          </div>
          <div className="about-box">
            <i className="uil uil-headphones-alt about-icon" />
            <h3 className="about-title">Support</h3>
            <span className="about-subtitle">Online 24/7</span>
          </div>
        </div>

        <a href="#contact" className="button">
          <i className="uil uil-navigator button-icon" />
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default About;
