import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaCheck } from 'react-icons/fa';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "3Skill",
      period: "Jan 2026 - Present",
      tech: ["React.js", "JavaScript", "REST APIs", "Git & GitHub", "Component Architecture"],
      highlights: [
        "Built responsive, user-friendly frontend interfaces using React JS and custom CSS modules.",
        "Integrated secure REST APIs to maintain smooth client-server data synchronization.",
        "Collaborated on project tasks using Git, writing clean modular components following Agile rules.",
        "Authored reusable codebase functions, participating in peer code reviews and sprint meetings."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="experience" className="section">
      <div className="exp-glow-background"></div>

      <div className="exp-header">
        <div className="badge">EXPERIENCE</div>
        <h2 className="section-title">Industry Milestones</h2>
        <p className="section-subtitle">
          My professional timeline and engineering roles in collaborative teams.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="exp-timeline-container"
      >
        <div className="exp-timeline-line"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="exp-timeline-item">
            {/* Timeline Bullet Node */}
            <div className="exp-timeline-node">
              <FaBriefcase />
            </div>

            {/* Content Card */}
            <motion.div
              variants={cardVariants}
              className="exp-timeline-card glass-panel"
            >
              <div className="exp-card-header">
                <div>
                  <span className="exp-period"><FaCalendarAlt className="exp-date-icon" /> {exp.period}</span>
                  <h3 className="exp-role">{exp.role}</h3>
                  <h4 className="exp-company">{exp.company}</h4>
                </div>
              </div>

              <div className="exp-highlights-list">
                {exp.highlights.map((high, i) => (
                  <div key={i} className="exp-highlight-item">
                    <span className="exp-bullet-icon"><FaCheck /></span>
                    <p className="exp-highlight-text">{high}</p>
                  </div>
                ))}
              </div>

              <div className="exp-tech-tags">
                {exp.tech.map((t) => (
                  <span key={t} className="exp-tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
