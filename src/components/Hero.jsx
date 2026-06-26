import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, BrainCircuit } from 'lucide-react';
import HeroParticles from './HeroParticles';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.aiBadge}>
            <BrainCircuit size={16} />
            <span>AI & Web Innovation Focus</span>
          </div>
          
          <h2 className={styles.greeting}>Hi, I am</h2>
          <h1 className={styles.name}>Umm E <span className="text-gradient">Rubab</span></h1>
          <p className={styles.subtitle}>
            AI, Full-Stack Web & Mobile Developer
          </p>
          <p className={styles.description}>
            I build full-stack websites, mobile apps, and machine learning models. I enjoy writing clean code and turning ideas into useful, working applications.
          </p>
          
          <div className={styles.actions}>
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="/cv.pdf" target="_blank" className="btn btn-outline">
              Download CV <FileText size={20} />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.canvasContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <HeroParticles />
          <div className={styles.canvasGlow}></div>
        </motion.div>
      </div>
    </section>
  );
}
