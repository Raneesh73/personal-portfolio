import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaServer, FaMobileAlt, FaBrain, FaTools } from 'react-icons/fa';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend Engineering', icon: <FaLaptopCode />, color: '#00F5FF' },
    { id: 'backend', label: 'Backend & Databases', icon: <FaServer />, color: '#00FF88' },
    { id: 'mobile', label: 'Mobile Architectures', icon: <FaMobileAlt />, color: '#FF6B35' },
    { id: 'ai', label: 'AI & Data Science', icon: <FaBrain />, color: '#00F5FF' },
    { id: 'tools', label: 'Developer Toolkits', icon: <FaTools />, color: '#00FF88' }
  ];

  const skillsData = {
    frontend: [
      { name: 'React', level: 90, desc: 'Responsive hooks, contexts, custom hooks' },
      { name: 'JavaScript (ES6+)', level: 85, desc: 'Promises, Async/Await, closures, modern structures' },
      { name: 'HTML5 / CSS3', level: 90, desc: 'Flexbox, CSS grids, transitions, keyframe systems' },
      { name: 'Framer Motion', level: 80, desc: 'Spring physics, layout animations, exit transitions' }
    ],
    backend: [
      { name: 'Node.js', level: 78, desc: 'Express framework, event loops, buffer modules' },
      { name: 'REST APIs', level: 88, desc: 'Secure routes, JSON models, status responses' },
      { name: 'Firebase', level: 85, desc: 'Firestore db, Auth modules, cloud functions' },
      { name: 'Server-Side Logic', level: 80, desc: 'Middleware, error handlers, MVC patterns' }
    ],
    mobile: [
      { name: 'Flutter', level: 82, desc: 'Provider state, custom painters, native bridges' },
      { name: 'Dart', level: 80, desc: 'OOP schemas, asynchronous streams, sound null safety' },
      { name: 'Cross-Platform Dev', level: 85, desc: 'Simultaneous deployment, offline caches' }
    ],
    ai: [
      { name: 'Machine Learning', level: 75, desc: 'Linear models, cluster maps, training cycles' },
      { name: 'NLP', level: 78, desc: 'Text classification, tokenization, semantic arrays' },
      { name: 'Generative AI', level: 85, desc: 'API prompts, context window tuning, assistant pipelines' },
      { name: 'Fake Information Detection', level: 80, desc: 'Misinformaton classification algorithms' }
    ],
    tools: [
      { name: 'GitHub', level: 85, desc: 'Branch rules, pull requests, collaborative merging' },
      { name: 'VS Code & Cursor AI', level: 90, desc: 'Workspace configurations, AI code generation' },
      { name: 'Copilot', level: 92, desc: 'Speedy logic suggestions and boilerplate filling' },
      { name: 'Firebase Console', level: 80, desc: 'Rules setup, indexes configuration' },
      { name: 'Postman', level: 85, desc: 'Endpoint debugging and validation tests' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="skills" className="section">
      <div className="skills-glow-background"></div>

      <div className="skills-header">
        <div className="badge">SKILLS</div>
        <h2 className="section-title">Technical Competence Matrix</h2>
        <p className="section-subtitle">
          Click the interactive domain cards on the left to reveal the active tech stacks and floating core spheres.
        </p>
      </div>

      <div className="skills-layout-grid">
        {/* Left Column: Domain Selector Cards */}
        <div className="skills-categories-column">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`skill-category-card glass-panel ${isActive ? 'category-active' : ''}`}
                style={{ '--accent-theme': cat.color }}
              >
                <div className="category-card-icon" style={{ color: cat.color }}>
                  {cat.icon}
                </div>
                <div className="category-card-info">
                  <h4>{cat.label}</h4>
                  <span className="category-items-count">
                    {skillsData[cat.id].length} Technologies
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Floating Skill Sphere Cloud & Status bars */}
        <div className="skills-display-column">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
              className="skills-details-container"
            >
              {/* Floating Skill Cloud */}
              <div className="floating-spheres-container glass-panel">
                <span className="cloud-label">Interactive Cloud</span>
                <div className="cloud-mesh">
                  {skillsData[activeCategory].map((skill, index) => {
                    // Random float parameters for coordinates
                    const randomX = Math.sin(index * 45) * 60;
                    const randomY = Math.cos(index * 45) * 40;
                    const randomDelay = index * 0.1;

                    return (
                      <motion.div
                        key={skill.name}
                        className="floating-skill-sphere"
                        animate={{
                          y: [randomY, randomY - 12, randomY],
                          x: [randomX, randomX + 8, randomX]
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 4 + (index % 3),
                          ease: 'easeInOut',
                          delay: randomDelay
                        }}
                        whileHover={{ scale: 1.15, zIndex: 10 }}
                        style={{
                          border: `1px solid ${categories.find(c => c.id === activeCategory).color}40`,
                          boxShadow: `0 0 15px ${categories.find(c => c.id === activeCategory).color}15`
                        }}
                      >
                        <span className="sphere-glow" style={{ background: categories.find(c => c.id === activeCategory).color }} />
                        <span className="sphere-name">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Skill Bars with details */}
              <div className="skills-list-grid">
                {skillsData[activeCategory].map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="skill-bar-card glass-panel"
                  >
                    <div className="skill-info-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar-track">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="skill-bar-fill"
                        style={{ background: categories.find(c => c.id === activeCategory).color }}
                      />
                    </div>

                    <p className="skill-desc-text">{skill.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
