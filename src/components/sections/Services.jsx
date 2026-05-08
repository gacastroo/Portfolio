import React, { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/translations";

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);
  const { lang } = useLanguage();
  const s = t.services;

  const servicesData = [
    { icon: "uil uil-web-grid" },
    { icon: "uil uil-edit" },
    { icon: "uil uil-briefcase" },
  ];

  const activeService = useMemo(() => {
    if (activeModal === null) return null;
    return s.items[activeModal] ?? null;
  }, [activeModal, lang]);

  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    if (!activeService) return undefined;
    const handleEscape = (event) => { if (event.key === "Escape") closeModal(); };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [activeService]);

  return (
    <section className="services section" id="services">
      <h2 className="section-title" data-heading={s.sectionHeading[lang]}>{s.title[lang]}</h2>

      <div className="services-container container grid">
        {s.items.map((item, i) => (
          <div className="services-content" key={i}>
            <div>
              <i className={`${servicesData[i].icon} services-icon`} />
              <h3 className="services-title">
                {item.title[lang].split("\n").map((line, j) => (
                  <span key={j}>{line}{j === 0 && <br />}</span>
                ))}
              </h3>
            </div>
            <button
              type="button"
              className="services-button"
              onClick={() => setActiveModal(i)}
              aria-haspopup="dialog"
              aria-expanded={activeModal === i}
            >
              {s.viewMore[lang]} <i className="uil uil-arrow-right services-button-icon" />
            </button>
          </div>
        ))}
      </div>

      <div
        className={`services-modal${activeService ? " active-modal" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!activeService}
        aria-labelledby="services-modal-title"
        onClick={closeModal}
      >
        {activeService && (
          <div className="services-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="services-modal-close"
              onClick={closeModal}
              aria-label="Close services modal"
            >
              <i className="uil uil-times" />
            </button>
            <h3 className="services-modal-title" id="services-modal-title">
              {activeService.modal.title[lang]}
            </h3>
            <p className="services-modal-description">{activeService.modal.description[lang]}</p>
            <ul className="services-modal-services grid">
              {activeService.modal.items[lang].map((item, j) => (
                <li className="services-modal-service" key={j}>
                  <i className="uil uil-check-circle services-modal-icon" />
                  <p className="services-modal-info">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
