import React, { useState } from "react";
import { workData } from "/src/components/data/data.js";

const filters = ["all", "web", "app", "design"];

const Work = () => {
  const [active, setActive] = useState("all");
  const [popup, setPopup] = useState(null);

  const filtered = active === "all" ? workData : workData.filter((w) => w.filter === active);

  return (
    <>
      <section className="work section" id="work">
        <h2 className="section-title" data-heading="My Portfolio">Recent Works</h2>

        <div className="work-filters">
          {filters.map((f) => (
            <span
              key={f}
              className={`work-item${active === f ? " active-work" : ""}`}
              onClick={() => setActive(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </span>
          ))}
        </div>

        <div className="work-container container grid">
          {filtered.map((item) => (
            <div className={`work-card mix ${item.filter}`} key={item.id}>
              <img src={item.img} alt={item.title} className="work-img" />
              <h3 className="work-title">{item.title}</h3>
              <button className="work-button" onClick={() => setPopup(item)}>
                Demo <i className="uil uil-arrow-right work-button-icon" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Popup */}
      <div className={`portfolio-popup${popup ? " open" : ""}`}>
        <div className="portfolio-popup-inner">
          {popup && (
            <div className="portfolio-popup-content grid">
              <button className="portfolio-popup-close" onClick={() => setPopup(null)}>
                <i className="uil uil-times" />
              </button>
              <div className="pp-thumbnail">
                <img src={popup.img} alt={popup.title} className="portfolio-popup-img" />
              </div>
              <div className="portfolio-popup-info">
                <div className="portfolio-popup-subtitle">
                  Featured — <span>{popup.details.subtitle}</span>
                </div>
                <div className="portfolio-popup-body">
                  <h3 className="details-title">{popup.details.title}</h3>
                  <p className="details-description">{popup.details.description}</p>
                  <ul className="details-info">
                    <li>Created — <span>{popup.details.created}</span></li>
                    <li>Technologies — <span>{popup.details.tech}</span></li>
                    <li>Role — <span>{popup.details.role}</span></li>
                    <li>View — <span><a href={popup.details.link}>www.demo.com</a></span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Work;
