import React, { useState, useEffect } from 'react';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Avatar from './components/Avatar/Avatar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Achievements from './components/Achievements/Achievements';
import Certifications from './components/Certifications/Certifications';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import './styles/global.css';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Loading Screen simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll tracking
  useEffect(() => {
    if (loading) return;

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section occupies center window area
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((sec) => {
      const element = document.getElementById(sec.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((sec) => {
        const element = document.getElementById(sec.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-logo glow-text">
          Raneesh<span style={{ color: '#00FF88' }}>.dev</span>
        </div>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Dynamic particles and glowing grids */}
      <Background />

      {/* Floating Header */}
      <Navbar activeSection={activeSection} sections={sections} />

      {/* Futuristic Digital Guide Avatar */}
      <Avatar activeSection={activeSection} />

      {/* Scrollable Layout Context */}
      <main className="portfolio-main-layout">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
