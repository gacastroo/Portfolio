import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/translations";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const { lang } = useLanguage();
  const c = t.contact;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) return;
    const templateParams = {
      name: email,
      email: email,
      message: message,
      time: new Date().toLocaleString(),
    };
    setLoading(true);
    emailjs
      .send("service_7b1pwr4", "template_jeletj7", templateParams, "2Tavmc8mYUXBFrLql")
      .then((res) => { console.log("SUCCESS!", res.status, res.text); setSent(true); })
      .catch((error) => { console.error("FAILED...", error.text || error); })
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title" data-heading={c.sectionHeading[lang]}>{c.title[lang]}</h2>

      <div className="ctc-wrapper container">
        <div className="ctc-left">
          <p className="ctc-tagline">
            {c.tagline1[lang]}<br />
            <span>{c.tagline2[lang]}</span>
          </p>

          <div className="ctc-links">
            <a href="mailto:guillermoandca@gmail.com" className="ctc-link">
              <span className="ctc-link-icon"><i className="uil uil-envelope" /></span>
              <span className="ctc-link-label">guillermoandca@gmail.com</span>
              <i className="uil uil-arrow-up-right ctc-link-arrow" />
            </a>
            <a href="https://github.com/gacastroo" target="_blank" rel="noreferrer" className="ctc-link">
              <span className="ctc-link-icon"><i className="uil uil-github" /></span>
              <span className="ctc-link-label">github.com/gacastroo</span>
              <i className="uil uil-arrow-up-right ctc-link-arrow" />
            </a>
            <a href="https://www.linkedin.com/in/guillermo-castro-abarcaa/" target="_blank" rel="noreferrer" className="ctc-link">
              <span className="ctc-link-icon"><i className="uil uil-linkedin" /></span>
              <span className="ctc-link-label">linkedin.com/in/guillermo-castro-abarcaa</span>
              <i className="uil uil-arrow-up-right ctc-link-arrow" />
            </a>
          </div>
        </div>

        <div className="ctc-right">
          {sent ? (
            <div className="ctc-success">
              <div className="ctc-success-icon">
                <i className="uil uil-check" />
              </div>
              <h3>{c.successTitle[lang]}</h3>
              <p>{c.successSub[lang]}</p>
              <button className="ctc-reset" onClick={() => { setSent(false); setEmail(""); setMessage(""); }}>
                {c.sendAnother[lang]}
              </button>
            </div>
          ) : (
            <form className="ctc-form" onSubmit={handleSubmit}>
              <div className="ctc-field">
                <label htmlFor="ctc-email">{c.emailLabel[lang]}</label>
                <input
                  id="ctc-email"
                  type="email"
                  placeholder={c.emailPlaceholder[lang]}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="ctc-field">
                <label htmlFor="ctc-message">{c.msgLabel[lang]}</label>
                <textarea
                  id="ctc-message"
                  placeholder={c.msgPlaceholder[lang]}
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="ctc-send" disabled={loading}>
                {loading ? c.sending[lang] : c.sendBtn[lang]}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
