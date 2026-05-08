import React from "react";
import profileImg from "../../assets/img/profile.png";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/translations";

const About = () => {
  const { lang } = useLanguage();
  const a = t.about;

  return (
    <section className="about section" id="about">
      <h2 className="section-title" data-heading={a.sectionHeading[lang]}>{a.title[lang]}</h2>

      <div className="about-container container grid">
        <img src={profileImg} alt="About Guillermo" className="about-img" />

        <div className="about-data">
          <h3 className="about-heading">{a.heading[lang]}</h3>
          <p className="about-description">{a.description[lang]}</p>

          <div className="about-info">
            <div className="about-box">
              <i className="uil uil-award about-icon" />
              <h3 className="about-title">{a.box1Title[lang]}</h3>
              <span className="about-subtitle">{a.box1Sub[lang]}</span>
            </div>
            <div className="about-box">
              <i className="uil uil-suitcase-alt about-icon" />
              <h3 className="about-title">{a.box2Title[lang]}</h3>
              <span className="about-subtitle">{a.box2Sub[lang]}</span>
            </div>
            <div className="about-box">
              <i className="uil uil-shield-check about-icon" />
              <h3 className="about-title">{a.box3Title[lang]}</h3>
              <span className="about-subtitle">{a.box3Sub[lang]}</span>
            </div>
          </div>

          <a href="#contact" className="button">
            <i className="uil uil-navigator button-icon" />
            {a.cta[lang]}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
