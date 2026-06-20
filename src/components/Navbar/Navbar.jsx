import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTerminal } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar({ activeSection, sections }) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background glow switch
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress percentage calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of floating header
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
    <nav className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <FaTerminal className="logo-icon" />
          <span>Raneesh<span className="logo-accent">.dev</span></span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`nav-link-btn ${activeSection === sec.id ? 'nav-link-active' : ''}`}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {/* Navigation Action Buttons */}
        <div className="navbar-actions">
          <a
            href="https://github.com/Raneesh73"
            target="_blank"
            rel="noopener noreferrer"
            className="action-icon-link"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/raneesh-vr-a1836239a"
            target="_blank"
            rel="noopener noreferrer"
            className="action-icon-link"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="contact-cta-btn"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`hamburger ${mobileMenuOpen ? 'hamburger-active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'drawer-active' : ''}`}>
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className={`mobile-nav-link ${activeSection === sec.id ? 'mobile-nav-active' : ''}`}
          >
            {sec.label}
          </button>
        ))}
        <div className="mobile-drawer-socials">
          <a href="https://github.com/Raneesh73" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/raneesh-vr-a1836239a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      {/* Dynamic Scroll Progress Bar */}
      <div
        className="scroll-progress-indicator"
        style={{ width: `${scrollProgress}%` }}
      />
    </nav>
  );
}
