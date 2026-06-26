import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className={styles.aboutContent}>
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageGlow}></div>
              <img src="/umme.jpg" alt="Umme Rubab" className={styles.profileImage} />
            </div>
          </motion.div>

          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`glass ${styles.aboutCard}`}>
              <h3>BS Computer Science</h3>
              <p className={styles.university}>Air University Aerospace & Aviation Campus, Kamra (2022 - 2026)</p>
              
              <div className={styles.bio}>
                <p>
                  I am a highly driven software engineering student specializing in Full-Stack Web Development and Artificial Intelligence.
                </p>
                <p>
                  My technical expertise lies in building scalable web architectures using React.js and Laravel, alongside designing intelligent machine learning algorithms with Python. I thrive on solving complex backend challenges, crafting seamless user interfaces, and leveraging AI models to build innovative, data-driven solutions for the modern web.
                </p>
              </div>

              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className="text-gradient">10+</span>
                  <p>Projects</p>
                </div>
                <div className={styles.statItem}>
                  <span className="text-gradient">3</span>
                  <p>Internships</p>
                </div>
                <div className={styles.statItem}>
                  <span className="text-gradient">3.10</span>
                  <p>CGPA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
