import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUp, Heart } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

const socials = [
  { icon: <FaGithub size={20} />, href: 'https://github.com/masha8663', label: 'GitHub' },
  { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/umm-e-rubab-487070353', label: 'LinkedIn' },
  { icon: <Mail size={20} />, href: 'mailto:ummerubab8663@gmail.com', label: 'Email' },
  { icon: <Phone size={20} />, href: 'tel:+923315303175', label: 'Phone' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      {/* Top gradient line */}
      <div className={styles.topBorder} />

      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              U<span className="text-gradient">R</span>
              <span className={styles.logoDot} />
            </div>
            <p className={styles.tagline}>
              Building innovative digital experiences at the intersection of web, mobile, and VR.
            </p>
            <div className={styles.socialRow}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className={styles.socialBtn}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className={styles.navLink}>
                    <span className={styles.navArrow}>→</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <Mail size={14} />
                <a href="mailto:ummerubab8663@gmail.com">ummerubab8663@gmail.com</a>
              </li>
              <li>
                <Phone size={14} />
                <a href="tel:+923315303175">+92 331 5303175</a>
              </li>
            </ul>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className={`btn btn-primary ${styles.cvBtn}`}>
              Download CV
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Umme Rubab. Crafted with <Heart size={13} className={styles.heart} /> using React & Vite.
          </p>
          <motion.button
            className={styles.scrollTopBtn}
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
