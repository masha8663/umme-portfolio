import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>
          U<span className="text-gradient">R</span>
        </a>
        
        <div className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#internships" className={styles.navLink}>Internships</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
