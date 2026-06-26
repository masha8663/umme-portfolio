import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

export default function Contact() {

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>

        <div className={styles.contactWrapper}>
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's build something amazing together.</h3>
            <p className={styles.contactDesc}>
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>
            
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ummerubab8663@gmail.com">ummerubab8663@gmail.com</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><Phone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+923315303175">+92 331 5303175</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <span>Remote / Hybrid</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={`glass ${styles.contactSocialContainer}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Connect With Me</h3>
            <p className={styles.socialDesc}>Find me on these platforms or reach out directly.</p>
            <div className={styles.socialGrid}>
              <a href="mailto:ummerubab8663@gmail.com" className={`btn btn-outline ${styles.socialBtn}`}>
                <Mail size={22} /> Email Me
              </a>
              <a href="tel:+923315303175" className={`btn btn-outline ${styles.socialBtn}`}>
                <Phone size={22} /> Call Me
              </a>
              <a href="https://www.linkedin.com/in/umm-e-rubab-487070353" target="_blank" rel="noreferrer" className={`btn btn-outline ${styles.socialBtn}`}>
                <FaLinkedin size={22} /> LinkedIn
              </a>
              <a href="https://github.com/masha8663" target="_blank" rel="noreferrer" className={`btn btn-outline ${styles.socialBtn}`}>
                <FaGithub size={22} /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
