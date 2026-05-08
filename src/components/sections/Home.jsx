import React from "react";
import profileImg from "../../assets/img/profile.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/translations";

const Home = () => {
  const { lang } = useLanguage();
  const h = t.home;

  return (
    <section className="home" id="home">
      <div className="home-container container">

        <div className="home-social">
          <div className="home-social-links">
            <a href="https://github.com/gacastroo" target="_blank" rel="noreferrer"
               className="home-social-link" aria-label="GitHub">
              <i className="uil uil-github" />
            </a>
            <a href="https://www.linkedin.com/in/guillermo-castro-abarcaa/" target="_blank" rel="noreferrer"
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
            <img src="/multitask.png" alt="Developer illustration" />
          </div>

          <div className="profile-wrapper">
            <div className="profile-image-glow" />
            <div className="profile-image-frame">
              <div className="profile-image" id="profileImage">
                <img src={profileImg} alt="Guillermo Castro" />
              </div>
            </div>

            <div className="floating-badge badge-1">
              <i className="uil uil-server badge-icon" />
              <div className="badge-content">
                <span className="badge-title">Spring Boot</span>
                <span className="badge-libs">REST APIs · Java · Thymeleaf</span>
              </div>
            </div>

            <div className="floating-badge badge-2">
              <i className="uil uil-react badge-icon" />
              <div className="badge-content">
                <span className="badge-title">React</span>
                <span className="badge-libs">Hooks · UI · JavaScript</span>
              </div>
            </div>

            <div className="floating-badge badge-3">
              <i className="uil uil-shield-check badge-icon" />
              <div className="badge-content">
                <span className="badge-title">Cybersecurity</span>
                <span className="badge-libs">{h.badge3[lang]}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="home-data">
          <h1 className="home-title">
            {h.greeting[lang]}&nbsp;<span className="home-title-name">Guillermo Castro</span>
          </h1>
          <h3 className="home-subtitle">{h.subtitle[lang]}</h3>
          <p className="home-description">{h.description[lang]}</p>
          <a href="#about" className="button">
            <i className="uil uil-user button-icon" />
            {h.cta[lang]}
          </a>
        </div>

        <div className="my-info">
          <a href="#contact">
            <div className="info-item">
              <i className="uil uil-envelope-edit info-icon" />
              <div>
                <h3 className="info-title">{h.emailLabel[lang]}</h3>
                <span className="info-subtitle">guillermoandca@gmail.com</span>
              </div>
            </div>
          </a>

          <a href="https://github.com/gacastroo" target="_blank" rel="noreferrer">
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
              <h3 className="info-title">{h.locationLabel[lang]}</h3>
              <span className="info-subtitle">{h.locationVal[lang]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
