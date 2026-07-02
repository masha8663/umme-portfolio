import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, MapPin, Sparkles } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from '../styles/Hero.module.css';

const ROLES = [
  'Full-Stack Developer',
  'Mobile App Developer',
  'VR & 3D Developer',
  'AI / ML Engineer',
  'UI/UX Designer',
];

function Typewriter() {
  const [idx, setIdx]         = useState(0);
  const [text, setText]       = useState('');
  const [deleting, setDelete] = useState(false);

  useEffect(() => {
    const full = ROLES[idx];
    let t;
    if (!deleting && text.length < full.length) {
      t = setTimeout(() => setText(full.slice(0, text.length + 1)), 75);
    } else if (!deleting && text.length === full.length) {
      t = setTimeout(() => setDelete(true), 2000);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else {
      setDelete(false);
      setIdx((p) => (p + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span className={styles.typeText}>
      {text}<span className={styles.cursor}>|</span>
    </span>
  );
}

/* Floating skill bubbles like the reference */
const BUBBLES = [
  { label: 'React',     x: '72%', y: '10%', color: '#61DAFB', delay: 0    },
  { label: 'Python',    x: '85%', y: '35%', color: '#3776AB', delay: 0.4  },
  { label: 'Unity 3D',  x: '68%', y: '58%', color: '#a855f7', delay: 0.8  },
  { label: 'Laravel',   x: '82%', y: '72%', color: '#FF2D20', delay: 0.2  },
  { label: 'Kotlin',    x: '60%', y: '82%', color: '#7F52FF', delay: 0.6  },
  { label: 'Flutter',   x: '90%', y: '55%', color: '#54C5F8', delay: 1.0  },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Floating skill bubbles */}
      <div className={styles.bubblesArea} aria-hidden>
        {BUBBLES.map(b => (
          <motion.div
            key={b.label}
            className={styles.bubble}
            style={{ left: b.x, top: b.y, '--bcolor': b.color }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            transition={{
              opacity: { delay: b.delay, duration: 0.5 },
              scale:   { delay: b.delay, duration: 0.5 },
              y: { duration: 4 + Math.random(), repeat: Infinity, ease: 'easeInOut', delay: b.delay + 0.5 },
            }}
          >
            <span className={styles.bubbleDot} style={{ background: b.color }} />
            {b.label}
          </motion.div>
        ))}
      </div>

      <div className={`container ${styles.heroInner}`}>
        {/* ── Left: Text ── */}
        <motion.div
          className={styles.textCol}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Available badge */}
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className={styles.badgeDot} />
            Available for work
          </motion.div>

          <p className={styles.greeting}>Hi there! I'm</p>

          <h1 className={styles.name}>
            Umm E{' '}
            <span className="text-gradient">Rubab</span>
          </h1>

          <div className={styles.roleRow}>
            <Typewriter />
          </div>

          <p className={styles.desc}>
            CS student at <strong>Air University Kamra</strong> · graduating 2026.
            I build full-stack web apps, Android apps, VR experiences &amp; AI models —
            with 3 real-world internships to back it up.
          </p>

          <div className={styles.location}>
            <MapPin size={14} />
            Attock, Punjab · Remote / Hybrid
          </div>

          {/* CTA buttons */}
          <div className={styles.ctaRow}>
            <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View My Work <ArrowDown size={17} />
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">
              <FileText size={17} /> Download CV
            </a>
          </div>

          {/* Social icons */}
          <div className={styles.socials}>
            <a href="https://github.com/masha8663" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <FaGithub size={19} />
            </a>
            <a href="https://www.linkedin.com/in/umm-e-rubab-487070353" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <FaLinkedin size={19} />
            </a>
            <a href="mailto:ummerubab8663@gmail.com" className={styles.socialIcon} aria-label="Email">
              <MdEmail size={20} />
            </a>
            <div className={styles.socialBar} />
          </div>
        </motion.div>

        {/* ── Right: Profile image ── */}
        <motion.div
          className={styles.imageCol}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        >
          <div className={styles.imageRing}>
            <div className={styles.imageGlow1} />
            <div className={styles.imageGlow2} />
            <div className={styles.imageFrame}>
              <img
                src="/umme.jpg"
                alt="Umme Rubab"
                className={styles.profileImg}
                onError={e => { e.target.src = 'https://ui-avatars.com/api/?name=Umme+Rubab&size=500&background=a855f7&color=fff'; }}
              />
            </div>
            {/* Decorative ring */}
            <svg className={styles.ringsvg} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="185" fill="none" stroke="url(#rg)" strokeWidth="1.5" strokeDasharray="6 10" />
              <defs>
                <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className={styles.scrollCue}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={styles.mouse}><div className={styles.wheel} /></div>
        <span>Scroll down</span>
      </motion.div>
    </section>
  );
}
