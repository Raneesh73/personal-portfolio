import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaBriefcase, FaDownload, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 18 },
    },
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-gradient"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-content"
      >
        {/* Futuristic top badge */}
        <motion.div variants={itemVariants} className="hero-badge">
          <span className="hero-badge-dot"></span>
          Open for Internships & Full-Time Roles
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={itemVariants} className="hero-title">
          Raneesh <span className="glow-text">VR</span>
        </motion.h1>

        {/* Roles Slider */}
        <motion.div variants={itemVariants} className="hero-subtitles">
          <span className="subtitle-item">Software Engineer Intern</span>
          <span className="subtitle-divider">•</span>
          <span className="subtitle-item">Full Stack Developer</span>
          <span className="subtitle-divider">•</span>
          <span className="subtitle-item">AI Builder</span>
        </motion.div>

        {/* Tagline */}
        <motion.p variants={itemVariants} className="hero-tagline">
          Building intelligent digital experiences through AI integrations, Full-Stack Architecture, and modern frontend design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="hero-actions">
          <button
            onClick={() => handleScrollTo('projects')}
            className="hero-btn primary-btn"
          >
            <FaBriefcase className="btn-icon" /> View Projects
          </button>
          
          <a
            href="/resume.pdf"
            download="Raneesh_VR_Resume.pdf"
            className="hero-btn secondary-btn"
          >
            <FaDownload className="btn-icon" /> Download Resume
          </a>

          <button
            onClick={() => handleScrollTo('contact')}
            className="hero-btn tertiary-btn"
          >
            <FaEnvelope className="btn-icon" /> Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* Floating scroll down indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="scroll-indicator"
        onClick={() => handleScrollTo('about')}
      >
        <span className="scroll-text">Explore Portfolio</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="scroll-icon-wrapper"
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
}
