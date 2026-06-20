import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaCheckCircle, FaFileAlt } from 'react-icons/fa';
import resumePreview from '../../assets/resume_preview.png';
import './Resume.css';

export default function Resume() {
  const resumeHighlights = [
    "Full-Stack capability: React JS, Node.js, REST APIs, and Firebase",
    "Mobile engineering experience: Flutter & Dart cross-platform apps",
    "AI/ML exposure: Text classification models, NLP, and Generative APIs",
    "Academics: B.Tech CSE student (CGPA: 8.43/10, SGPA: 8.7)",
    "Collaboration: Version control with Git, peer code reviews, Agile cycles"
  ];

  return (
    <section id="resume" className="section">
      <div className="resume-glow-background"></div>

      <div className="resume-header">
        <div className="badge">RESUME</div>
        <h2 className="section-title">Credentials & Curriculum Vitae</h2>
        <p className="section-subtitle">
          View or download my verified developer CV to review structural experiences and skills.
        </p>
      </div>

      <div className="resume-layout-grid">
        {/* Left Column: Interactive Resume Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="resume-preview-container glass-panel"
        >
          <div className="resume-preview-header">
            <FaFileAlt className="preview-file-icon" />
            <span>Raneesh_VR_Resume.pdf</span>
          </div>
          <div className="resume-image-frame">
            <img src={resumePreview} alt="Raneesh VR Resume Preview" className="resume-img-preview" />
            <div className="resume-image-overlay">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-view-btn"
              >
                <FaEye /> View Full Document
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Key Details & CTAs */}
        <div className="resume-info-container">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="resume-details-card glass-panel"
          >
            <h3>Professional Highlights</h3>
            <div className="resume-highlights-list">
              {resumeHighlights.map((high, i) => (
                <div key={i} className="resume-high-item">
                  <FaCheckCircle className="high-check-icon" />
                  <p>{high}</p>
                </div>
              ))}
            </div>

            <div className="resume-actions-row">
              <a
                href="/resume.pdf"
                download="Raneesh_VR_Resume.pdf"
                className="resume-action-btn download-btn"
              >
                <FaDownload /> Download PDF
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-action-btn view-btn"
              >
                <FaEye /> View PDF Online
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
