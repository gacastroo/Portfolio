import React, { useState } from "react";
import { skillsData } from "../data/skillsData";
import "../../styles/skills.css";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/translations";

const Skills = () => {
  const [active, setActive] = useState(0);
  const { lang } = useLanguage();
  const s = t.skills;
  const current = skillsData[active];

  const tagClass = {
    experiencia: "tag-exp",
    formación:   "tag-cert",
    prácticas:   "tag-prac",
  };

  const categoryTitle = (title) =>
    s.categories[title]?.[lang] ?? title;

  const tagLabel = (tag) =>
    s.tags[tag]?.[lang] ?? tag;

  return (
    <section className="skills section" id="skills">
      <div className="skills-container container grid">
        <div className="skills-header-row">
          <h2 className="section-title" data-heading={s.sectionHeading[lang]}>{s.title[lang]}</h2>
          <span className="section-name">Guillermo Castro Abarca</span>
        </div>

        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          {skillsData.map((sk, i) => (
            <button
              key={sk.id}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`skills-tab ${active === i ? `active ${sk.color}` : ""}`}
              onClick={() => setActive(i)}
            >
              {categoryTitle(sk.title)}
            </button>
          ))}
        </div>

        <div className="skills-pills">
          {current.skills.map((skill) => (
            <div key={skill.name} className="skill-pill">
              <span className={`pill-dot dot-${current.color}`} />
              {skill.name}
              {skill.tag && (
                <span className={`pill-tag ${tagClass[skill.tag]}`}>
                  {tagLabel(skill.tag)}
                </span>
              )}
            </div>
          ))}
        </div>

        {current.experience && (
          <div className="exp-card">
            <div className="exp-header">
              <span className="exp-company">{current.experience.company}</span>
              <span className="exp-date">{current.experience.date}</span>
            </div>
            <ul className="exp-bullets">
              {s.expBullets[lang].map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        )}

        {current.cert && (
          <div className="cert-card">
            <div className="cert-icon">
              <i className="uil uil-award" />
            </div>
            <div>
              <p className="cert-title">{s.certTitle[lang]}</p>
              <span className="cert-sub">{s.certSub[lang]}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
