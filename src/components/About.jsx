import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Star, Code2, Sparkles, ExternalLink } from 'lucide-react';
import styles from '../styles/About.module.css';

const stats = [
  { value: '10+', label: 'Projects Built', icon: <Code2 size={18} />, color: '#c084fc' },
  { value: '3', label: 'Internships', icon: <Briefcase size={18} />, color: '#22d3ee' },
  { value: '3.10', label: 'CGPA', icon: <Star size={18} />, color: '#f472b6' },
  { value: '4+', label: 'Years Study', icon: <GraduationCap size={18} />, color: '#fbbf24' },
];

const highlights = [
  'Full-Stack Web Development (React · Laravel · PHP)',
  'Mobile Application Development (Kotlin · Android)',
  'VR & 3D Development (Unity 3D · Blender · C#)',
  'AI / Machine Learning (Python · Flask · Scikit-learn)',
  'UI/UX Design (Figma · Canva · Responsive Design)',
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function About() {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        {/* Section header */}
        <motion.div className="section-header" {...fadeIn()}>
          <span className="section-eyebrow">
            <Sparkles size={13} /> Who I Am
          </span>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.aboutGrid}>
          {/* Left: Image + floating card */}
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.imageWrapper}>
              {/* Glow layers */}
              <div className={styles.imageGlow1} />
              <div className={styles.imageGlow2} />
              {/* Main image */}
              <div className={styles.imageFrame}>
                <img
                  src="/umme.jpg"
                  alt="Umme Rubab – Full-Stack Developer"
                  className={styles.profileImage}
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Umme+Rubab&size=400&background=c084fc&color=fff&font-size=0.33'; }}
                />
                <div className={styles.imageBorder} />
              </div>

              {/* Floating experience badge */}
              <motion.div
                className={styles.floatBadge}
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <GraduationCap size={18} className={styles.badgeIcon} />
                <div>
                  <div className={styles.badgeTitle}>Air University</div>
                  <div className={styles.badgeSub}>BSCS · 2022–2026</div>
                </div>
              </motion.div>

              {/* Floating internships badge */}
              <motion.div
                className={`${styles.floatBadge} ${styles.floatBadgeRight}`}
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Briefcase size={18} className={styles.badgeIconCyan} />
                <div>
                  <div className={styles.badgeTitle}>3 Internships</div>
                  <div className={styles.badgeSub}>Industry Experience</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Bio */}
            <div className={styles.bio}>
              <p>
                I'm <strong>Umme Rubab</strong>, a passionate Computer Science student at <strong>Air University
                Aerospace &amp; Aviation Campus, Kamra</strong> — graduating in 2026 with a 3.10 CGPA.
              </p>
              <p>
                Through 3 real-world internships at <strong>Developers Hub</strong>, <strong>Atom Global Information</strong>,
                and <strong>Pakistan Aeronautical Complex Kamra</strong>, I've honed my skills across web, mobile, VR, and IoT domains.
              </p>
              <p>
                I love building things that live on the internet — and beyond. Whether it's a 3D VR shopping store,
                an AI insurance predictor, or a sleek inventory dashboard, I bring creativity and precision to every project.
              </p>
            </div>

            {/* Expertise list */}
            <div className={styles.expertiseCard}>
              <h4 className={styles.expertiseTitle}>
                <Code2 size={16} /> Areas of Expertise
              </h4>
              <ul className={styles.expertiseList}>
                {highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    className={styles.expertiseItem}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                  >
                    <span className={styles.expertiseDot} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className={styles.quickLinks}>
              <a
                href="https://github.com/masha8663"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                GitHub Profile <ExternalLink size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/umm-e-rubab-487070353"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                LinkedIn <ExternalLink size={15} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className={`glass ${styles.statCard}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.statIcon} style={{ color: stat.color, background: `${stat.color}15` }}>
                {stat.icon}
              </div>
              <div className={styles.statValue} style={{ color: stat.color }}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
