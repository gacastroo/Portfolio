import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message) setSent(true);
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title" data-heading="Get in Touch">Contact Me</h2>

      <div className="ctc-wrapper container">

        {/* Left — tagline + links */}
        <div className="ctc-left">
          <p className="ctc-tagline">
            Let's build something<br />
            <span>worth remembering.</span>
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
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="ctc-link">
              <span className="ctc-link-icon"><i className="uil uil-linkedin" /></span>
              <span className="ctc-link-label">Guillermo Castro</span>
              <i className="uil uil-arrow-up-right ctc-link-arrow" />
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="ctc-right">
          {sent ? (
            <div className="ctc-success">
              <div className="ctc-success-icon">
                <i className="uil uil-check" />
              </div>
              <h3>Message received!</h3>
              <p>I'll get back to you as soon as possible.</p>
              <button className="ctc-reset" onClick={() => { setSent(false); setEmail(""); setMessage(""); }}>
                Send another
              </button>
            </div>
          ) : (
            <form className="ctc-form" onSubmit={handleSubmit}>
              <div className="ctc-field">
                <label htmlFor="ctc-email">Your email</label>
                <input
                  id="ctc-email"
                  type="email"
                  placeholder="hello@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="ctc-field">
                <label htmlFor="ctc-message">Message</label>
                <textarea
                  id="ctc-message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="ctc-send">
                Send message
                <i className="uil uil-message ctc-send-icon" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
