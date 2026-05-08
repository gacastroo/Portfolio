import React from "react";
import { experienceData } from "../data/experienceData";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/translations";

const Experience = () => {
  const { lang } = useLanguage();
  const e = t.experience;

  return (
    <section className="experience section" id="experience">
      <h2 className="section-title" data-heading={e.sectionHeading[lang]}>{e.title[lang]}</h2>

      <div className="experience-container container">
        <div className="experience-list">
          {experienceData.map((item) => (
            <article className="experience-card" key={item.id}>
              <div className="experience-top">
                <div className="experience-icon" aria-hidden="true">
                  <i className="uil uil-briefcase-alt" />
                </div>
                <div className="experience-heading">
                  <span className="experience-kicker">{e.kicker[lang]}</span>
                  <h3 className="experience-role">{e.role[lang]}</h3>
                  <p className="experience-company">{item.company}</p>
                </div>
              </div>

              <div className="experience-meta" aria-label="Experience details">
                <span><i className="uil uil-calendar-alt" /> {item.period}</span>
                <span><i className="uil uil-map-marker" /> {item.location}</span>
              </div>

              <p className="experience-summary">{e.summary[lang]}</p>

              <ul className="experience-bullets">
                {e.bullets[lang].map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="experience-tags" aria-label="Technologies used">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
