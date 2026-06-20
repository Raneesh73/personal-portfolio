import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../../assets/profile.png';
import './Avatar.css';

export default function Avatar({ activeSection }) {
  const [speech, setSpeech] = useState("Hi there! I'm Raneesh. Welcome to my portfolio.");
  const [isMobile, setIsMobile] = useState(false);

  // Resize listener to toggle mobile view styles
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update speech prompts based on scroll section
  useEffect(() => {
    switch (activeSection) {
      case 'hero':
        setSpeech("Hi! I'm Raneesh. Explore my digital world below.");
        break;
      case 'about':
        setSpeech("Here is my journey—from B.Tech CSE at Amity to building projects!");
        break;
      case 'skills':
        setSpeech("Hover over these cards and spheres to see what I build with!");
        break;
      case 'projects':
        setSpeech("Check out DEN and Guardian Pulse. Click 'Details' to learn more.");
        break;
      case 'experience':
        setSpeech("Here is my industry exposure in React, REST APIs, and team dev.");
        break;
      case 'achievements':
        setSpeech("Awesome milestones achieved! Check out my stats here.");
        break;
      case 'certifications':
        setSpeech("Always learning. Here are my verified technical credentials.");
        break;
      case 'resume':
        setSpeech("Download my full PDF resume here for your reference.");
        break;
      case 'contact':
        setSpeech("Let's build something amazing together! Drop me a line below.");
        break;
      default:
        setSpeech("Let's explore together!");
    }
  }, [activeSection]);

  // Dynamic layout coordinates based on section state
  const getAvatarStyles = () => {
    if (isMobile) {
      switch (activeSection) {
        case 'hero':
          return { x: 'calc(50vw - 45px)', y: '150px', scale: 1, rotate: 0 };
        case 'about':
          return { x: 'calc(85vw - 90px)', y: 'calc(80vh - 90px)', scale: 1, rotate: -5 };
        case 'skills':
          return { x: '20px', y: 'calc(25vh)', scale: 0.9, rotate: 5 };
        case 'projects':
          return { x: 'calc(90vw - 90px)', y: 'calc(15vh)', scale: 1, rotate: 10 };
        case 'experience':
          return { x: '20px', y: 'calc(75vh - 90px)', scale: 1.05, rotate: -8 };
        case 'achievements':
          return { x: 'calc(50vw - 45px)', y: 'calc(18vh)', scale: 1.1, rotate: 15 };
        case 'certifications':
          return { x: 'calc(85vw - 90px)', y: 'calc(45vh)', scale: 0.9, rotate: -5 };
        case 'resume':
          return { x: '20px', y: 'calc(45vh)', scale: 0.95, rotate: 0 };
        case 'contact':
          return { x: 'calc(50vw - 45px)', y: 'calc(15vh)', scale: 1.1, rotate: 0 };
        default:
          return { x: 'calc(50vw - 45px)', y: '150px', scale: 1, rotate: 0 };
      }
    }

    switch (activeSection) {
      case 'hero':
        return {
          x: 'calc(50vw - 75px)',
          y: '220px',
          scale: 1.1,
          rotate: 0,
        };
      case 'about':
        return {
          x: 'calc(15vw - 50px)',
          y: 'calc(50vh - 100px)',
          scale: 0.95,
          rotate: -5,
        };
      case 'skills':
        return {
          x: 'calc(50vw - 60px)',
          y: '90px',
          scale: 0.85,
          rotate: 5,
        };
      case 'projects':
        return {
          x: 'calc(85vw - 75px)',
          y: 'calc(40vh - 75px)',
          scale: 0.95,
          rotate: 10,
        };
      case 'experience':
        return {
          x: 'calc(80vw - 75px)',
          y: 'calc(60vh - 75px)',
          scale: 1.05,
          rotate: -8,
        };
      case 'achievements':
        return {
          x: 'calc(82vw - 75px)',
          y: '140px',
          scale: 1.15,
          rotate: 15,
        };
      case 'certifications':
        return {
          x: 'calc(12vw - 50px)',
          y: 'calc(45vh - 75px)',
          scale: 0.9,
          rotate: -5,
        };
      case 'resume':
        return {
          x: 'calc(85vw - 75px)',
          y: 'calc(45vh - 75px)',
          scale: 0.95,
          rotate: 0,
        };
      case 'contact':
        return {
          x: 'calc(50vw - 75px)',
          y: 'calc(15vh + 30px)',
          scale: 1.1,
          rotate: 0,
        };
      default:
        return {
          x: '50px',
          y: '50px',
          scale: 1,
          rotate: 0,
        };
    }
  };

  const springConfig = { type: 'spring', stiffness: 90, damping: 20, mass: 0.85 };

  // Determine gesture/avatar state for overlays
  const isCelebrating = activeSection === 'achievements';
  const isWaving = activeSection === 'contact';
  const isPointing = activeSection === 'projects';

  return (
    <div className="avatar-global-anchor">
      {/* Dynamic speech bubble */}
      <AnimatePresence>
        {speech && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              // Position coordinate helpers
              x: isMobile
                ? getAvatarStyles().x.includes('50vw')
                  ? 'calc(50vw - 100px)'
                  : parseFloat(getAvatarStyles().x) > window.innerWidth / 2 || getAvatarStyles().x.includes('80vw') || getAvatarStyles().x.includes('85vw') || getAvatarStyles().x.includes('90vw')
                    ? `calc(${getAvatarStyles().x} - 150px)`
                    : `calc(${getAvatarStyles().x} + 80px)`
                : getAvatarStyles().x === 'calc(50vw - 75px)' 
                  ? 'calc(50vw - 150px)' 
                  : parseFloat(getAvatarStyles().x) > window.innerWidth / 2 
                    ? `calc(${getAvatarStyles().x} - 230px)` 
                    : `calc(${getAvatarStyles().x} + 170px)`,
              y: isMobile 
                ? `calc(${getAvatarStyles().y} - 85px)` 
                : `calc(${getAvatarStyles().y} - 80px)`
            }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={springConfig}
            className={`avatar-speech-bubble ${isMobile ? 'speech-mobile' : ''}`}
          >
            <div className="speech-arrow"></div>
            <p className="speech-text">
              {isCelebrating && "🎉 "}
              {isWaving && "👋 "}
              {speech}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Avatar Container */}
      <motion.div
        animate={getAvatarStyles()}
        transition={springConfig}
        className={`avatar-container ${isCelebrating ? 'avatar-celebrate' : ''} ${isWaving ? 'avatar-wave' : ''} ${isPointing ? 'avatar-pointing' : ''}`}
      >
        {/* Holographic Glowing Ring Outer */}
        <div className="hologram-ring outer-ring"></div>
        <div className="hologram-ring inner-ring"></div>

        {/* Dynamic Pointer Arrow helper for projects */}
        {isPointing && !isMobile && (
          <div className="pointing-arrow-indicator">👉</div>
        )}

        {/* Profile Image container */}
        <div className="avatar-frame">
          <img src={profileImg} alt="Raneesh VR Digital Guide" className="avatar-img" />
          <div className="avatar-scan-line"></div>
          <div className="avatar-status-dot"></div>
        </div>

        {/* Background Cyber-Dots */}
        <div className="hologram-core-glow"></div>
      </motion.div>
    </div>
  );
}
