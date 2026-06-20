import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Auto-clear success message after 4s
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section">
      <div className="contact-glow-background"></div>

      <div className="contact-header">
        <div className="badge">CONTACT</div>
        <h2 className="section-title">Initiate Connection</h2>
        <p className="section-subtitle">
          Submit the form below or connect via primary professional networking coordinates.
        </p>
      </div>

      <div className="contact-layout-grid">
        {/* Left Column: Coordinates */}
        <div className="contact-info-column">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="contact-card-box glass-panel"
          >
            <h3>Digital Coordinates</h3>
            
            <div className="coord-items-list">
              <a href="mailto:vrraneesh2006@gmail.com" className="coord-item">
                <div className="coord-icon-wrapper mail-theme">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="coord-label">Email Coordinates</span>
                  <span className="coord-value">vrraneesh2006@gmail.com</span>
                </div>
              </a>

              <div className="coord-item">
                <div className="coord-icon-wrapper loc-theme">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="coord-label">Location Node</span>
                  <span className="coord-value">Gurugram, Haryana, India</span>
                </div>
              </div>
            </div>

            <div className="social-nodes-container">
              <h4>Professional Directories</h4>
              <div className="social-nodes-row">
                <a
                  href="https://github.com/Raneesh73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-node-btn github-node"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/raneesh-vr-a1836239a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-node-btn linkedin-node"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-column">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="contact-form-card glass-panel"
          >
            <h3>Transmission Portal</h3>

            <form onSubmit={handleSubmit} className="transmission-form">
              <div className="input-group-row">
                <div className="form-input-wrapper">
                  <label htmlFor="name">Identification / Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-input-wrapper">
                  <label htmlFor="email">Return Channel / Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-input-wrapper">
                <label htmlFor="message">Message Transmission</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Draft your query or proposal details..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <div className="form-submit-row">
                <button
                  type="submit"
                  className={`form-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                >
                  {isSubmitting ? (
                    "Transmitting..."
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Success Feedback Banner */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="form-success-banner"
                >
                  <FaCheckCircle className="banner-success-icon" />
                  <div>
                    <h4>Transmission Complete!</h4>
                    <p>Your message has been processed successfully. Raneesh will reach out shortly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <footer className="portfolio-footer">
        <p>© {new Date().getFullYear()} Raneesh VR. Built with React & Framer Motion.</p>
      </footer>
    </section>
  );
}
