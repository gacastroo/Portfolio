import React, { useState } from "react";
import { skillsData } from "/src/components/data/data.js";

const Skills = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title" data-heading="My Abilities">My Experience</h2>

      <div className="skills-container container grid">
        {/* Tabs */}
        <div className="skills-tabs">
          {skillsData.map((s, i) => (
            <div
              key={s.id}
              className={`skills-header${active === i ? " skills-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <i className={`${s.icon} skills-icon`} />
              <div>
                <h1 className="skills-title">{s.title}</h1>
                <span className="skills-subtitle">{s.subtitle}</span>
              </div>
              <i className="uil uil-angle-down skills-arrow" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="skills-content">
          {skillsData.map((s, i) => (
            <div
              key={s.id}
              className={`skills-group${active === i ? " skills-active" : ""}`}
              data-content
            >
              <div className="skills-list grid">
                {s.skills.map((skill) => (
                  <div className="skills-data" key={skill.name}>
                    <div className="skills-titles">
                      <h3 className="skills-name">{skill.name}</h3>
                      <span className="skills-number">{skill.level}%</span>
                    </div>
                    <div className="skills-bar">
                      <span
                        className="skills-percentage"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
