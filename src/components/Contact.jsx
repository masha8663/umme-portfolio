import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Sparkles, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import styles from '../styles/Contact.module.css';

const EMAILJS_SERVICE_ID  = 'service_0z8ltya';
const EMAILJS_TEMPLATE_ID = 'template_zz5u4k6';
const EMAILJS_PUBLIC_KEY  = 'g0Fdyh_zw5JDyaqgM';

const STATUS = { IDLE: 'idle', SENDING: 'sending', SUCCESS: 'success', ERROR: 'error' };

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'ummerubab8663@gmail.com',
    href: 'mailto:ummerubab8663@gmail.com',
    color: '#c084fc',
  },
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+92 331 5303175',
    href: 'tel:+923315303175',
    color: '#22d3ee',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Attock, Punjab · Remote / Hybrid',
    color: '#4ade80',
  },
];

const socials = [
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    sub: 'masha8663',
    href: 'https://github.com/masha8663',
    color: '#c084fc',
  },
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    sub: 'umm-e-rubab',
    href: 'https://www.linkedin.com/in/umm-e-rubab-487070353',
    color: '#22d3ee',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    sub: 'ummerubab8663@gmail.com',
    href: 'mailto:ummerubab8663@gmail.com',
    color: '#f472b6',
  },
];

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(STATUS.IDLE);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.SENDING);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY);
      setStatus(STATUS.SUCCESS);
      setForm({ name: '', email: '', subject: '', message: '' });
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
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">
            <Sparkles size={13} /> Get In Touch
          </span>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's build something amazing together.
          </p>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.contactGrid}>
          {/* ── Left: Info ─────────────────────────────────────────────── */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.infoHeader}>
              <h3>Let's work together</h3>
              <p>
                I'm currently open to new opportunities — whether it's a full-time role,
                freelance project, or just a great conversation. Drop me a message!
              </p>
            </div>

            {/* Contact info items */}
            <div className={styles.infoItems}>
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.infoItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.infoIcon} style={{ color: item.color, background: `${item.color}15`, borderColor: `${item.color}25` }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className={styles.infoLabel}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className={styles.infoValue} style={{ color: item.color }}>{item.value}</a>
                    ) : (
                      <span className={styles.infoValue} style={{ color: item.color }}>{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social connect */}
            <div className={styles.socialsBlock}>
              <h4 className={styles.socialsTitle}>Find me on</h4>
              <div className={styles.socialCards}>
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className={styles.socialCard}
                    style={{ '--s-color': s.color }}
                  >
                    <div className={styles.socialCardIcon} style={{ color: s.color, background: `${s.color}15` }}>
                      {s.icon}
                    </div>
                    <div>
                      <div className={styles.socialCardLabel}>{s.label}</div>
                      <div className={styles.socialCardSub}>{s.sub}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ─────────────────────────────────────────────── */}
          <motion.div
            className={`glass ${styles.formCard}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.formHeader}>
              <MessageSquare size={20} className={styles.formHeaderIcon} />
              <h3>Send a Message</h3>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Fatima Khan"
                    value={form.name}
                    onChange={handleChange}
                    disabled={status === STATUS.SENDING}
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="fatima@example.com"
                    value={form.email}
                    onChange={handleChange}
                    disabled={status === STATUS.SENDING}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Let's collaborate on a project"
                  value={form.subject}
                  onChange={handleChange}
                  disabled={status === STATUS.SENDING}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Hi Umme, I'd love to discuss..."
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === STATUS.SENDING}
                  className={styles.textarea}
                />
              </div>

              {/* Status messages */}
              {status === STATUS.SUCCESS && (
                <motion.div
                  className={styles.feedbackSuccess}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle2 size={18} /> Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === STATUS.ERROR && (
                <motion.div
                  className={styles.feedbackError}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={18} /> Something went wrong. Email me at ummerubab8663@gmail.com
                </motion.div>
              )}

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={status === STATUS.SENDING || status === STATUS.SUCCESS}
              >
                {status === STATUS.SENDING ? (
                  <><span className={styles.spinner} /> Sending…</>
                ) : status === STATUS.SUCCESS ? (
                  <><CheckCircle2 size={18} /> Sent!</>
                ) : (
                  <>Send Message <Send size={17} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
