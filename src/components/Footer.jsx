import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h2>Umme <span className="text-gradient">Rubab</span></h2>
            <p>Building innovative & immersive digital experiences.</p>
          </div>
          
          <div className={styles.socialLinks}>
            <a href="mailto:ummerubab8663@gmail.com" className={styles.socialIcon} aria-label="Email">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/umm-e-rubab-487070353" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/masha8663" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="tel:+923315303175" className={styles.socialIcon} aria-label="Phone">
              <Phone size={24} />
            </a>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Umme Rubab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
