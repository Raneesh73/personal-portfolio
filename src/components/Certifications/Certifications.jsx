import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import './Certifications.css';

export default function Certifications() {
  const certificationsList = [
    {
      id: 1,
      title: "AI Program Certification",
      issuer: "Samsung Innovation Campus (SIC)",
      year: "2026",
      badge: "Core AI & ML",
      desc: "Comprehensive certification covering supervised & unsupervised learning, deep neural networks, and computer vision / NLP projects."
    },
    {
      id: 2,
      title: "Generative AI Foundations",
      issuer: "Google",
      year: "2025",
      badge: "Generative AI",
      desc: "Learned foundational generative model structures, large language model (LLM) prompts, and responsible AI practices."
    },
    {
      id: 3,
      title: "Computer Architecture - Elite Certificate",
      issuer: "NPTEL (IIT/NIT Collaborative Program)",
      year: "2025",
      badge: "Academic Honor",
      desc: "Advanced coursework in processor design, pipelining, caching, and instruction-level parallelism. Received 'Elite' distinction."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="certifications" className="section">
      <div className="certs-glow-background"></div>

      <div className="certs-header">
        <div className="badge">CERTIFICATIONS</div>
        <h2 className="section-title">Academic & Professional Credentials</h2>
        <p className="section-subtitle">
          Verified academic distinctions and industry technical specializations.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="certs-grid"
      >
        {certificationsList.map((cert) => (
          <motion.div
            key={cert.id}
            variants={itemVariants}
            className="cert-card glass-panel"
          >
            <div className="cert-card-header">
              <div className="cert-icon-wrapper">
                <FaCertificate />
              </div>
              <span className="cert-year">{cert.year}</span>
            </div>

            <span className="cert-badge">{cert.badge}</span>
            
            <h3 className="cert-title">{cert.title}</h3>
            <h4 className="cert-issuer">{cert.issuer}</h4>
            
            <p className="cert-desc">{cert.desc}</p>
            
            <div className="cert-card-footer">
              <span className="cert-verify-link">
                <FaAward className="award-icon" /> Verified Credential
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
