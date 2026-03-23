import React from "react";
import multitaskImg from "/src/assets/img/multitask.png";

const Home = () => (
    <section className="home" id="home">
      <div className="home-container container">

        {/* Social */}
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
            <a href="https://twitter.com" target="_blank" rel="noreferrer"
               className="home-social-link" aria-label="Twitter">
              <i className="uil uil-twitter" />
            </a>
          </div>
        </div>

        {/* Columna derecha: ilustración + marco circular */}
        <div className="home-right">

          {/* Ilustración flotante */}
          <div className="home-float-img">
            <img src={multitaskImg} alt="developer illustration" />
          </div>

          {/* Marco circular con badges */}
          <div className="profile-wrapper">
            <div className="profile-image-glow" />
            <div className="profile-image-frame">
              <div className="profile-image" id="profileImage">
                {/*
                Para añadir tu foto sustituye este bloque por:
                <img src="/src/assets/img/tu-foto.jpg" alt="Guillermo Castro" />
              */}
                <div className="profile-placeholder">
                  <i className="uil uil-user" />
                </div>
              </div>
            </div>

            <div className="floating-badge badge-1">
              <i className="uil uil-server badge-icon" />
              <div className="badge-content">
                <span className="badge-title">Spring Boot</span>
                <span className="badge-libs">
                  REST APIs · Microservices · JPA
                </span>
              </div>
            </div>

            <div className="floating-badge badge-2">
              <i className="uil uil-react badge-icon" />
              <div className="badge-content">
                <span className="badge-title">React</span>
                <span className="badge-libs">
                  Hooks · State · TypeScript
                </span>
              </div>
            </div>

            <div className="floating-badge badge-3">
              <i className="uil uil-docker badge-icon" />
              <div className="badge-content">
                <span className="badge-title">DevOps</span>
                <span className="badge-libs">
                Docker · Git · CI/CD
              </span>
              </div>
            </div>
        </div>
          </div>

        {/* Texto principal */}
        <div className="home-data">
          <h1 className="home-title">
            Hi, I&rsquo;m <span className="home-title-name">Guillermo Castro</span>
          </h1>
          <h3 className="home-subtitle">Full Stack Developer</h3>
          <p className="home-description">
            I have high level experience in web design, development knowledge
            and producing quality work.
          </p>
          <a href="#about" className="button">
            <i className="uil uil-user button-icon" />
            More About Me!
          </a>
        </div>

        {/* Info inferior */}
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

      <div>

      </div>
    </section>
);

export default Home;