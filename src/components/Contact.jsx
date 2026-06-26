import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('Message sent successfully! I will get back to you soon.');
    e.target.reset();
    setTimeout(() => setFormStatus(''), 5000);
  };

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
            className={`glass ${styles.contactFormContainer}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required placeholder="John Doe" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required placeholder="john@example.com" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" required rows="5" placeholder="Hi Umme, I'd like to talk about..."></textarea>
              </div>
              
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                Send Message <Send size={18} />
              </button>
              
              {formStatus && <div className={styles.successMessage}>{formStatus}</div>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
