import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaCheckCircle, FaExclamationTriangle, FaLock } from 'react-icons/fa';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsList = [
    {
      id: 1,
      title: "DEN - Private Safety Circle App",
      category: "Mobile Application",
      badgeText: "Safety Circle",
      tech: ["Flutter", "Dart", "Firebase Realtime DB", "Google Maps API", "Firebase Auth"],
      desc: "A privacy-first mobile application allowing users to create closed circles of trusted individuals and monitor real-time locations via Google Maps.",
      problem: "Traditional safety apps sell user coordinate data and suffer from high network delay, failing to deliver instantaneous emergency tracking.",
      solution: "DEN uses Google Maps API together with Firebase Realtime Database for low-latency synchronization. We integrated fine-grained invitation codes, giving users full control over when and who sees their location.",
      features: [
        "Interactive Google Maps real-time location streaming",
        "Encrypted invitation tokens for group entry",
        "Low-latency data synchronization via Firebase sockets",
        "Offline caching for location restoration",
        "Instant SOS alert broadcasts with click-actions"
      ],
      github: "https://github.com/Raneesh73/DEN",
      demo: "#"
    },
    {
      id: 2,
      title: "Guardian Pulse - AI Fake News Detector",
      category: "Artificial Intelligence / NLP",
      badgeText: "SIC Project",
      tech: ["Python", "Natural Language Processing", "Machine Learning", "Text Classification", "Scikit-Learn"],
      desc: "Developed under Samsung Innovation Campus (SIC), this platform analyzes articles and text entries to detect misinformation and fake content.",
      problem: "Manual verification of rumors is slow and cannot keep pace with viral, auto-generated fake articles.",
      solution: "Guardian Pulse tokenizes content and runs text classification algorithms. Built a modular Python analysis core achieving solid accuracy on labeled validation datasets.",
      features: [
        "NLP pre-processing (tokenization, stop-word filtering)",
        "TF-IDF feature extraction arrays",
        "Support Vector Machine (SVM) text classifier model",
        "Detailed classification report and confidence scores",
        "Rest API integration with clean web interfaces"
      ],
      github: null,
      demo: "#"
    },
    {
      id: 3,
      title: "Agriculture AI Bot",
      category: "AI & Automation",
      badgeText: "Chatbot Integration",
      tech: ["Python", "REST APIs", "OpenWeather API", "NLP APIs", "Flask"],
      desc: "An intelligent chatbot delivering crop suggestions and weather-based farming advice based on region-specific details.",
      problem: "Farmers struggle to synthesize weather forecasts with agricultural guides to select proper seeding windows.",
      solution: "Developed an AI agent that consumes live environmental metrics from REST APIs and correlates them with agricultural databases to output specific farming steps.",
      features: [
        "Live location-based weather parsing (OpenWeather API)",
        "Region-specific soil and crop compatibility algorithms",
        "Conversational AI agent interface",
        "Daily farming scheduler and action checklists"
      ],
      github: null,
      demo: "#"
    },
    {
      id: 4,
      title: "Quizone - Technical Quiz Platform",
      category: "Full Stack Web App",
      badgeText: "Interactive Web",
      tech: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Node.js"],
      desc: "A responsive full-stack quiz platform designed to help computer science students prepare for technical evaluations.",
      problem: "Standard quiz widgets lack multi-device sync, session authentication, and interactive leaderboards.",
      solution: "Built a complete node backend tracking session progress and storing answers. Created a highly optimized frontend grid rendering smooth transition panels.",
      features: [
        "Dynamic question retrieval systems with timers",
        "Real-time scoreboard and ranking calculation",
        "Token-based session tracking for participants",
        "Mobile-first responsive design matching Apple aesthetics"
      ],
      github: "https://github.com/Raneesh73/QUIZONE",
      demo: "#"
    }
  ];

  // Custom 3D Tilt Hook
  const handleMouseMove = (e, cardId) => {
    const card = document.getElementById(`project-card-${cardId}`);
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top;  // y position within element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 12; // tilt angle
    const rotateY = (x - centerX) / 12; // tilt angle

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.boxShadow = `0 15px 40px rgba(0, 245, 255, 0.15)`;
  };

  const handleMouseLeave = (cardId) => {
    const card = document.getElementById(`project-card-${cardId}`);
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.boxShadow = 'var(--glass-shadow)';
  };

  return (
    <section id="projects" className="section">
      <div className="projects-glow-background"></div>

      <div className="projects-header">
        <div className="badge">PROJECTS</div>
        <h2 className="section-title">Showcase of Craftsmanship</h2>
        <p className="section-subtitle">
          Hover over cards to experience 3D tilt interaction. Click "View Details" to explore the design logic, problem statements, and features.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projectsList.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="project-card glass-panel"
            onMouseMove={(e) => handleMouseMove(e, project.id)}
            onMouseLeave={() => handleMouseLeave(project.id)}
          >
            <div className="project-card-header">
              <span className="project-category">{project.category}</span>
              <span className="project-badge">{project.badgeText}</span>
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-short-desc">{project.desc}</p>

            <div className="project-tech-tags">
              {project.tech.slice(0, 3).map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
              {project.tech.length > 3 && (
                <span className="tech-tag-more">+{project.tech.length - 3} more</span>
              )}
            </div>

            <div className="project-card-actions">
              <button
                onClick={() => setSelectedProject(project)}
                className="project-details-btn"
              >
                View Details
              </button>
              <div className="project-links">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <FaGithub />
                  </a>
                ) : (
                  <span className="private-repo-indicator" title="Internal Campus Codebase">
                    <FaLock />
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-backdrop-overlay">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="project-modal-container glass-panel"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="modal-close-btn"
                aria-label="Close Modal"
              >
                <FaTimes />
              </button>

              <div className="modal-content-wrapper">
                <div className="modal-header-block">
                  <span className="modal-badge">{selectedProject.category}</span>
                  <h2>{selectedProject.title}</h2>
                </div>

                <div className="modal-body-grid">
                  {/* Left Column: Tech Stack & Actions */}
                  <div className="modal-body-left">
                    <div className="modal-info-section">
                      <h4 className="info-title"><FaCode className="info-title-icon" /> Tech Stack</h4>
                      <div className="modal-tech-tags">
                        {selectedProject.tech.map((t) => (
                          <span key={t} className="modal-tech-tag">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="modal-links-section">
                      {selectedProject.github ? (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-action-btn github-action-btn"
                        >
                          <FaGithub /> View Repository
                        </a>
                      ) : (
                        <div className="modal-action-btn github-action-btn private-repo-btn">
                          <FaLock /> Internal Codebase
                        </div>
                      )}
                      {selectedProject.demo !== '#' && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-action-btn demo-action-btn"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Problem, Solution, Features */}
                  <div className="modal-body-right">
                    <div className="modal-info-section">
                      <h4 className="info-title text-orange"><FaExclamationTriangle className="info-title-icon" /> The Problem</h4>
                      <p className="modal-desc-text">{selectedProject.problem}</p>
                    </div>

                    <div className="modal-info-section">
                      <h4 className="info-title text-green"><FaCheckCircle className="info-title-icon" /> The Solution</h4>
                      <p className="modal-desc-text">{selectedProject.solution}</p>
                    </div>

                    <div className="modal-info-section">
                      <h4 className="info-title">Key Core Features</h4>
                      <ul className="modal-features-list">
                        {selectedProject.features.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

