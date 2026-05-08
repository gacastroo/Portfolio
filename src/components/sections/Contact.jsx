import React, { useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!email || !message) return;

  const templateParams = {
    name: email,
    email: email,
    message: message,
    time: new Date().toLocaleString()
  };

  setLoading(true);
  emailjs
    .send(
      "service_7b1pwr4",
      "template_jeletj7",
      templateParams,
      "2Tavmc8mYUXBFrLql"
    )
    .then((res) => {
      console.log("SUCCESS!", res.status, res.text);
      setSent(true);
    })
    .catch((error) => {
      console.error("FAILED...", error.text || error);
    })
      .finally(() => setLoading(false));
    
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
            <a href="https://www.linkedin.com/in/guillermo-castro-abarcaa/" target="_blank" rel="noreferrer" className="ctc-link">
              <span className="ctc-link-icon"><i className="uil uil-linkedin" /></span>
              <span className="ctc-link-label">linkedin.com/in/guillermo-castro-abarcaa</span>
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
              <button type="submit" className="ctc-send" disabled={loading}>
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
