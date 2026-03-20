import React from "react";

const Home = () => (
  <section className="home" id="home">
    <div className="home-container container grid">
      <div className="home-social">
        <div className="home-social-links">
          <a href="https://github.com/gacastroo" target="_blank" rel="noreferrer" className="home-social-link">
            <i className="uil uil-github" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="home-social-link">
            <i className="uil uil-linkedin" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="home-social-link">
            <i className="uil uil-twitter" />
          </a>
        </div>
      </div>

      <img
        alt="Guillermo"
        className="home-img"
      />

      <div className="home-data">
        <h1 className="home-title">Hi, I'm Guillermo</h1>
        <h3 className="home-subtitle">Frontend Developer</h3>
        <p className="home-description">
          I have high level experience in web design, development knowledge and producing quality work.
        </p>
        <a href="#about" className="button">
          <i className="uil uil-user button-icon" />
          More About Me!
        </a>
      </div>

      <div className="my-info">
        <div className="info-item">
          <i className="uil uil-envelope-edit info-icon" />
          <div>
            <h3 className="info-title">Email</h3>
            <span className="info-subtitle">guillermoandca@gmail.com</span>
          </div>
        </div>
        <div className="info-item">
          <i className="uil uil-github info-icon" />
          <div>
            <h3 className="info-title">GitHub</h3>
            <span className="info-subtitle">gacastroo</span>
          </div>
        </div>
        <div className="info-item">
          <i className="uil uil-map-marker info-icon" />
          <div>
            <h3 className="info-title">Location</h3>
            <span className="info-subtitle">Spain</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
