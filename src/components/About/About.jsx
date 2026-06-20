import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaBrain, FaHeart } from 'react-icons/fa';
import './About.css';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const tabContents = {
    story: {
      title: "My Creative Engine",
      text: "I am a B.Tech Computer Science student at Amity University Gurugram (currently in my 3rd year). From early childhood curiosity about digital networks to building interactive apps, my focus has gravitated toward engineering tools that solve concrete real-world problems. I combine robust full-stack developer practices with experimental AI capabilities to deliver complete products rather than simple APIs.",
    },
    goals: {
      title: "Vision & Goals",
      text: "My primary career objective is to secure high-growth Software Engineering and Full Stack Developer roles where I can collaborate on production systems. I am particularly excited about integrating advanced artificial intelligence models (NLP, Generative AI) with traditional web applications. Long-term, I aspire to architectural design roles, steering large-scale software systems and creative engineering teams.",
    },
    interests: {
      title: "Outside the IDE",
      text: "When I am not coding, I participate in hackathons, build custom automations, and research machine learning algorithms. I am also fascinated by interface micro-interactions, mobile cross-platform architectures, and digital security circle applications. Additionally, I enjoy listening to music, keeping up with modern AI frameworks, and networking with fellow developers.",
    },
  };

  return (
    <section id="about" className="section">
      <div className="about-glow-background"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="about-grid"
      >
        {/* Left Column: Left empty on top for avatar alignment, shows details card on bottom */}
        <div className="about-left-col">
          {/* Decorative container matching avatar area */}
          <div className="avatar-placeholder-card"></div>
          
          <motion.div variants={itemVariants} className="personal-details-card glass-panel">
            <h3 className="details-card-title">Profile Nodes</h3>
            <div className="detail-item">
              <FaMapMarkerAlt className="detail-icon" />
              <div>
                <span className="detail-label">Location</span>
                <span className="detail-value">Gurugram, India</span>
              </div>
            </div>
            <div className="detail-item">
              <FaCode className="detail-icon" />
              <div>
                <span className="detail-label">Primary Stack</span>
                <span className="detail-value">React, Node.js, Flutter</span>
              </div>
            </div>
            <div className="detail-item">
              <FaBrain className="detail-icon" />
              <div>
                <span className="detail-label">Focus</span>
                <span className="detail-value">AI Integration & Full Stack</span>
              </div>
            </div>
            <div className="detail-item">
              <FaHeart className="detail-icon" />
              <div>
                <span className="detail-label">Hobbies</span>
                <span className="detail-value">Hackathons, UI Design, Music</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Narrative & Timeline */}
        <div className="about-right-col">
          <motion.div variants={itemVariants}>
            <div className="badge">ABOUT ME</div>
            <h2 className="section-title">Crafting Intelligent Solutions</h2>
          </motion.div>

          {/* Interactive Navigation Tabs */}
          <motion.div variants={itemVariants} className="about-tabs glass-panel">
            {Object.keys(tabContents).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`about-tab-btn ${activeTab === tab ? 'tab-btn-active' : ''}`}
              >
                {tab === 'story' && "Story"}
                {tab === 'goals' && "Career Goals"}
                {tab === 'interests' && "Interests"}
              </button>
            ))}
          </motion.div>

          {/* Tab Bio Card */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="about-tab-panel glass-panel"
          >
            <h3>{tabContents[activeTab].title}</h3>
            <p>{tabContents[activeTab].text}</p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="education-timeline-wrapper">
            <h3 className="timeline-section-title">Education Timeline</h3>
            <div className="education-timeline">
              <div className="timeline-node-item">
                <div className="timeline-icon-box">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content-card glass-panel">
                  <span className="timeline-date"><FaCalendarAlt /> 2023 - 2027 (3rd Year)</span>
                  <h4>B.Tech in Computer Science & Engineering</h4>
                  <p className="timeline-school">Amity University Gurugram</p>
                  <div className="academic-stats">
                    <div className="stat-pill">CGPA: 8.43/10</div>
                    <div className="stat-pill">SGPA: 8.70</div>
                  </div>
                  <p className="timeline-desc">
                    Specializing in core computer science curriculum: Algorithms, Database Architecture, Software Engineering principles, and AI methodologies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
