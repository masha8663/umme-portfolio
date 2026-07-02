import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, MapPin, Sparkles } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/Hero.module.css';

const ROLES = [
  'Full-Stack Developer',
  'Mobile App Developer',
  'VR & 3D Developer',
  'AI/ML Engineer',
  'UI/UX Designer',
];

const orbitSkills = [
  { label: 'React', color: '#61DAFB', angle: 0 },
  { label: 'Unity 3D', color: '#a855f7', angle: 72 },
  { label: 'Python', color: '#22d3ee', angle: 144 },
  { label: 'Laravel', color: '#f472b6', angle: 216 },
  { label: 'Android', color: '#4ade80', angle: 288 },
];

function OrbitalRing() {
  return (
    <div className={styles.orbitalContainer}>
      {/* Central Badge */}
      <div className={styles.centralBadge}>
        <span className="text-gradient">UR</span>
        <div className={styles.centralPulse} />
        <div className={styles.centralPulse2} />
      </div>

      {/* Orbit rings */}
      <div className={styles.orbitRing1} />
      <div className={styles.orbitRing2} />

      {/* Orbiting skill badges */}
      {orbitSkills.map((skill, i) => (
        <div
          key={skill.label}
          className={styles.orbitItem}
          style={{ '--orbit-angle': `${skill.angle}deg`, '--orbit-color': skill.color, '--orbit-index': i }}
        >
          <span className={styles.orbitBadge} style={{ borderColor: skill.color, color: skill.color }}>
            {skill.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function TypewriterRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[index];
    let timeout;

    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className={styles.typewriter}>
      {displayed}<span className={styles.cursor}>|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>

        {/* Left: Text Content */}
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Available badge */}
          <motion.div
            className={styles.availableBadge}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className={styles.availableDot} />
            Available for opportunities
          </motion.div>

          <h2 className={styles.greeting}>Hi there, I'm</h2>
          <h1 className={styles.name}>
            Umm E <span className="text-gradient">Rubab</span>
          </h1>

          <div className={styles.roleRow}>
            <span className={styles.rolePrefix}>I build </span>
            <TypewriterRole />
          </div>

          <p className={styles.description}>
            CS graduate from <strong>Air University Kamra</strong> with 3 real-world internships.
            I craft full-stack web apps, mobile solutions, and VR experiences —
            driven by a passion for clean code and impactful design.
          </p>

          <div className={styles.locationRow}>
            <MapPin size={15} />
            <span>Attock, Punjab, Pakistan · Remote/Hybrid</span>
          </div>

          {/* CTAs */}
          <div className={styles.actions}>
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">
              <FileText size={18} /> Download CV
            </a>
          </div>

          {/* Social links */}
          <div className={styles.socialRow}>
            <a
              href="https://github.com/masha8663"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/umm-e-rubab-487070353"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <div className={styles.socialDivider} />
            <span className={styles.socialLabel}>Follow me</span>
          </div>
        </motion.div>

        {/* Right: Orbital Illustration */}
        <motion.div
          className={styles.visualContent}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <OrbitalRing />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
