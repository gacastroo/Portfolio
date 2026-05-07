import React from "react";
import profileImg from "../../assets/img/profile.png";

const About = () => (
  <section className="about section" id="about">
    <h2 className="section-title" data-heading="My Intro">About Me</h2>

    <div className="about-container container grid">
      <img
        src={profileImg}
        alt="About Guillermo"
        className="about-img"
      />

      <div className="about-data">
        <h3 className="about-heading">
          Hi, I'm Guillermo Castro, based in Madrid
        </h3>
        <p className="about-description">
          I enjoy analysing systems and shaping secure, functional and well-structured solutions,
          whether through code or security event analysis. I like learning new technologies,
          solving problems with an analytical mindset and contributing in collaborative environments.
        </p>

        <div className="about-info">
          <div className="about-box">
            <i className="uil uil-award about-icon" />
            <h3 className="about-title">Experience</h3>
            <span className="about-subtitle">Internship 2025</span>
          </div>
          <div className="about-box">
            <i className="uil uil-suitcase-alt about-icon" />
            <h3 className="about-title">Completed</h3>
            <span className="about-subtitle">10+ Projects</span>
          </div>
          <div className="about-box">
            <i className="uil uil-shield-check about-icon" />
            <h3 className="about-title">Focus</h3>
            <span className="about-subtitle">Web & Security</span>
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
