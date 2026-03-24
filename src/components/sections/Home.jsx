import React from "react";

const Home = () => (
    <section className="home" id="home">
      <div className="home-container container">

        <div className="home-social">
          <div className="home-social-links">
            <a href="https://github.com/gacastroo" target="_blank" rel="noreferrer"
               className="home-social-link" aria-label="GitHub">
              <i className="uil uil-github" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
               className="home-social-link" aria-label="LinkedIn">
              <i className="uil uil-linkedin" />
            </a>
            <a href="/CV_GuillermoCastro.pdf" download
               className="home-social-link" aria-label="Download CV">
              <i className="uil uil-file-alt"/>
            </a>
          </div>
        </div>

        <div className="home-right">
          <div className="home-float-img">
            <img src="/multitask.png" alt="developer illustration" />
          </div>

          <div className="profile-wrapper">
            <div className="profile-image-glow" />
            <div className="profile-image-frame">
              <div className="profile-image" id="profileImage">
                <div className="profile-placeholder">
                  <i className="uil uil-user" />
                </div>
              </div>
            </div>

            <div className="floating-badge badge-1">
              <i className="uil uil-server badge-icon" />
              <div className="badge-content">
                <span className="badge-title">Spring Boot</span>
                <span className="badge-libs">REST APIs · Microservices · JPA</span>
              </div>
            </div>

            <div className="floating-badge badge-2">
              <i className="uil uil-react badge-icon" />
              <div className="badge-content">
                <span className="badge-title">React</span>
                <span className="badge-libs">Hooks · State · TypeScript</span>
              </div>
            </div>

            <div className="floating-badge badge-3">
              <i className="uil uil-docker badge-icon" />
              <div className="badge-content">
                <span className="badge-title">DevOps</span>
                <span className="badge-libs">Docker · Git · CI/CD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="home-data">
          <h1 className="home-title">
            Hi, I&rsquo;m <span className="home-title-name">Guillermo Castro</span>
          </h1>
          <h3 className="home-subtitle">Full Stack Developer</h3>
          <p className="home-description">
            Web developer building secure solutions across backend, Frontend, and DevOps. Committed to collaboration and problem-solving.
          </p>
          <a href="#about" className="button">
            <i className="uil uil-user button-icon" />
            More About Me!
          </a>
        </div>

        <div className="my-info">
          <a href="#contact">
            <div className="info-item">
              <i className="uil uil-envelope-edit info-icon" />
              <div>
                <h3 className="info-title">Email</h3>
                <span className="info-subtitle">guillermoandca@gmail.com</span>
              </div>
            </div>
          </a>

          <a href="https://github.com/gacastroo">
            <div className="info-item">
              <i className="uil uil-github info-icon" />
              <div>
                <h3 className="info-title">GitHub</h3>
                <span className="info-subtitle">gacastroo</span>
              </div>
            </div>
          </a>

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
