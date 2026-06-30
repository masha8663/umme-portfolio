import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import styles from '../styles/Contact.module.css';

// ─── EmailJS Config ─────────────────────────────────────────────────────────
// Fill these in after setting up EmailJS for Umme's account:
// 1. Sign up at https://www.emailjs.com/ with ummerubab8663@gmail.com
// 2. Add Gmail service → copy Service ID below
// 3. Create email template → copy Template ID below
// 4. Account → API Keys → copy Public Key below
const EMAILJS_SERVICE_ID  = 'service_0z8ltya';
const EMAILJS_TEMPLATE_ID = 'template_zz5u4k6';
const EMAILJS_PUBLIC_KEY  = 'g0Fdyh_zw5JDyaqgM';
// ─────────────────────────────────────────────────────────────────────────────

const STATUS = { IDLE: 'idle', SENDING: 'sending', SUCCESS: 'success', ERROR: 'error' };

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(STATUS.IDLE);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.SENDING);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      setStatus(STATUS.SUCCESS);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(STATUS.IDLE), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus(STATUS.ERROR);
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    }
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
            <div className={styles.socialSection}>
              <h4 className={styles.socialHeading}>Connect With Me</h4>
              <div className={styles.socialGrid}>
                <a href="mailto:ummerubab8663@gmail.com" className={`btn btn-outline ${styles.socialBtn}`}>
                  <Mail size={18} /> Email
                </a>
                <a href="tel:+923315303175" className={`btn btn-outline ${styles.socialBtn}`}>
                  <Phone size={18} /> Phone
                </a>
                <a href="https://www.linkedin.com/in/umm-e-rubab-487070353" target="_blank" rel="noreferrer" className={`btn btn-outline ${styles.socialBtn}`}>
                  <FaLinkedin size={18} /> LinkedIn
                </a>
                <a href="https://github.com/masha8663" target="_blank" rel="noreferrer" className={`btn btn-outline ${styles.socialBtn}`}>
                  <FaGithub size={18} /> GitHub
                </a>
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
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>

              <div className={styles.inputGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  disabled={status === STATUS.SENDING}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === STATUS.SENDING}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Hi Umme, I'd like to talk about..."
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === STATUS.SENDING}
                />
              </div>

              {status === STATUS.SUCCESS && (
                <div className={styles.feedbackSuccess}>
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === STATUS.ERROR && (
                <div className={styles.feedbackError}>
                  ❌ Something went wrong. Please email me directly at ummerubab8663@gmail.com
                </div>
              )}

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={status === STATUS.SENDING || status === STATUS.SUCCESS}
              >
                {status === STATUS.SENDING ? (
                  <><span className={styles.btnSpinner} /> Sending...</>
                ) : status === STATUS.SUCCESS ? (
                  <>✅ Sent!</>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
