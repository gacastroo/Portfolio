import React, { useState } from "react";
import { skillsData } from "../data/skillsData";
import "../../styles/skills.css";

const tagStyles = {
  experiencia: "tag-exp",
  formación: "tag-cert",
  prácticas: "tag-prac",
};

const Skills = () => {
  const [active, setActive] = useState(0);
  const current = skillsData[active];

  return (
    <section className="skills section" id="skills">
      <div className="skills-container container grid">
        <div className="skills-header-row">
          <h2 className="section-title" data-heading="Tech Stack">Habilidades</h2>
          <span className="section-name">Guillermo Castro Abarca</span>
        </div>

        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          {skillsData.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`skills-tab ${active === i ? `active ${s.color}` : ""}`}
              onClick={() => setActive(i)}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="skills-pills">
          {current.skills.map((skill) => (
            <div key={skill.name} className="skill-pill">
              <span className={`pill-dot dot-${current.color}`} />
              {skill.name}
              {skill.tag && (
                <span className={`pill-tag ${tagStyles[skill.tag]}`}>
                  {skill.tag}
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
              {current.experience.bullets.map((b) => (
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
              <p className="cert-title">{current.cert.title}</p>
              <span className="cert-sub">{current.cert.sub}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
