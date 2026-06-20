import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLaptopCode, FaCheckDouble, FaBriefcase, FaCertificate } from 'react-icons/fa';
import './Achievements.css';

function CountUp({ end, duration = 1.5, suffix = "", delay = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const delayTimeout = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(delayTimeout);
  }, [isInView, end, duration, delay]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Achievements() {
  const stats = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      title: "Projects Built",
      value: 10,
      suffix: "+",
      color: "#00F5FF",
      desc: "Robust full-stack systems, interactive interfaces, and mobile applications."
    },
    {
      id: 2,
      icon: <FaCheckDouble />,
      title: "Techs Mastered",
      value: 15,
      suffix: "+",
      color: "#00FF88",
      desc: "Languages, databases, frameworks, and tools covering the full stack."
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      title: "Internships",
      value: 1,
      suffix: "",
      color: "#FF6B35",
      desc: "Web development intern designing interfaces and integrating endpoints."
    },
    {
      id: 4,
      icon: <FaCertificate />,
      title: "Certifications",
      value: 8,
      suffix: "+",
      color: "#00F5FF",
      desc: "Google AI credentials, Samsung Innovation Campus milestones, and NPTEL certs."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 18 }
    }
  };

  return (
    <section id="achievements" className="section">
      <div className="ach-glow-background"></div>

      <div className="ach-header">
        <div className="badge">ACHIEVEMENTS</div>
        <h2 className="section-title">Milestone Quantified</h2>
        <p className="section-subtitle">
          Key achievements and stats representing my software engineering progress.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="ach-grid"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={cardVariants}
            className="ach-card glass-panel"
            style={{ '--theme-color': stat.color }}
          >
            <div className="ach-card-icon" style={{ color: stat.color }}>
              {stat.icon}
            </div>
            
            <h3 className="ach-number">
              <CountUp end={stat.value} suffix={stat.suffix} delay={0.1 * stat.id} />
            </h3>

            <h4 className="ach-title">{stat.title}</h4>
            <p className="ach-desc">{stat.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
