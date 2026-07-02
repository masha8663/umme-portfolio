import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import styles from '../styles/Navbar.module.css';

const navLinks = [
  { label: 'Home',       href: '#' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#internships' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks.map(l => l.href.slice(1)).filter(Boolean);
      let cur = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (href) => {
    setMenuOpen(false);
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); goto('#'); }}>
            <span className="text-gradient">UR</span>
          </a>

          {/* Desktop Links */}
          <div className={styles.links}>
            {navLinks.map(link => {
              const id = link.href === '#' ? '' : link.href.slice(1);
              const isActive = link.href === '#' ? active === '' : active === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
                  onClick={(e) => { e.preventDefault(); goto(link.href); }}
                >
                  {link.label}
                  {isActive && <motion.span className={styles.activeDot} layoutId="navDot" />}
                </a>
              );
            })}
          </div>

          {/* Resume CTA */}
          <a href="/cv.pdf" target="_blank" rel="noreferrer" className={`btn btn-primary ${styles.resumeBtn}`}>
            <FileText size={15} /> Resume
          </a>

          {/* Mobile Toggle */}
          <button className={styles.toggle} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={(e) => { e.preventDefault(); goto(link.href); }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <span className={styles.mobileNum}>0{i + 1}.</span>
                {link.label}
              </motion.a>
            ))}
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className={`btn btn-primary ${styles.mobileResume}`}>
              <FileText size={15} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
