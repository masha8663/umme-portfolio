import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import styles from '../styles/Navbar.module.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#internships' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section tracking
      const sections = navLinks.map(l => l.href.slice(1));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className={`container ${styles.navContainer}`}>
          {/* Logo */}
          <a href="#" className={styles.logo}>
            <span className={styles.logoText}>
              U<span className="text-gradient">R</span>
            </span>
            <span className={styles.logoDot} />
          </a>

          {/* Desktop Links */}
          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              >
                {link.label}
                <span className={styles.navLinkUnderline} />
              </a>
            ))}
          </div>

          {/* Resume CTA */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className={`btn btn-primary ${styles.resumeBtn}`}
          >
            <FileText size={16} />
            Resume
          </a>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <span className={styles.mobileLinkNum}>0{idx + 1}.</span>
                {link.label}
              </motion.a>
            ))}
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className={`btn btn-primary ${styles.mobileResume}`}>
              <FileText size={16} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
