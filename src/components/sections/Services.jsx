import React, { useState } from "react";
import { servicesData } from "/src/components/data/data.js";

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="services section" id="services">
      <h2 className="section-title" data-heading="Services">What I Offer</h2>

      <div className="services-container container grid">
        {servicesData.map((s, i) => (
          <div className="services-content" key={i}>
            <div>
              <i className={`${s.icon} services-icon`} />
              <h3 className="services-title">
                {s.title.split("\n").map((line, j) => (
                  <span key={j}>{line}{j === 0 && <br />}</span>
                ))}
              </h3>
            </div>
            <button className="services-button" onClick={() => setActiveModal(i)}>
              View More <i className="uil uil-arrow-right services-button-icon" />
            </button>

            {/* Modal */}
            <div className={`services-modal${activeModal === i ? " active-modal" : ""}`}>
              <div className="services-modal-content">
                <button className="services-modal-close" onClick={() => setActiveModal(null)}>
                  <i className="uil uil-times" />
                </button>
                <h3 className="services-modal-title">{s.modal.title}</h3>
                <p className="services-modal-description">{s.modal.description}</p>
                <ul className="services-modal-services grid">
                  {s.modal.items.map((item, j) => (
                    <li className="services-modal-service" key={j}>
                      <i className="uil uil-check-circle services-modal-icon" />
                      <p className="services-modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
