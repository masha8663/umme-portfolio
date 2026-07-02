import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, Cpu, Building2, Calendar, MapPin, Sparkles } from 'lucide-react';
import styles from '../styles/Internships.module.css';

const internships = [
  {
    role: 'Web Development Intern',
    company: 'Developers Hub',
    location: 'On-site',
    duration: '2025',
    type: 'Full-Stack',
    icon: <Code2 size={22} />,
    color: '#c084fc',
    description:
      'Architected and improved core website features using React, Vite, Laravel, and PHP. Led responsive UI developments and integrated complex backend APIs. Managed GitHub repositories and executed rigorous Postman API testing.',
    highlights: [
      'Built full-stack web features with React + Laravel',
      'Integrated and tested REST APIs via Postman',
      'Managed version control workflows on GitHub',
      'Delivered responsive, mobile-first UI components',
    ],
    tags: ['React.js', 'Vite', 'Laravel', 'PHP', 'MySQL', 'REST APIs'],
  },
  {
    role: 'Technology Intern',
    company: 'Atom Global Information',
    location: 'On-site',
    duration: 'Jul 2025 – Sep 2025',
    type: 'R&D / VR',
    icon: <Cpu size={22} />,
    color: '#22d3ee',
    description:
      'Spearheaded advanced R&D projects focusing on Unity 3D, Figma, IoT devices, and VR systems. Explored digital twin concepts and developed real-time interactive project architectures.',
    highlights: [
      'Developed VR prototypes using Unity 3D & C#',
      'Researched IoT device integration frameworks',
      'Designed digital twin architectures',
      'Created interactive UI/UX mockups in Figma',
    ],
    tags: ['Unity 3D', 'C#', 'Figma', 'IoT', 'VR Systems', 'Blender'],
  },
  {
    role: 'Technical Intern',
    company: 'Pakistan Aeronautical Complex Kamra',
    location: 'Kamra, Punjab',
    duration: 'Jun 2024 – Jul 2024',
    type: 'Aerospace',
    icon: <Building2 size={22} />,
    color: '#4ade80',
    description:
      'Conducted deep-dive studies into LRUs, avionics, radar technology, and complex aircraft systems within a highly technical aerospace environment.',
    highlights: [
      'Studied Line Replaceable Units (LRUs) in aircraft',
      'Explored radar & avionics technology systems',
      'Reviewed aerospace safety and testing protocols',
      'Gained exposure to defense-grade engineering',
    ],
    tags: ['Avionics', 'Radar Systems', 'IoT', 'Aerospace Engineering'],
  },
];

export default function Internships() {
  return (
    <section id="internships" className={`section ${styles.internshipsSection}`}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">
            <Sparkles size={13} /> Work Experience
          </span>
          <h2 className="section-title">
            Professional <span className="text-gradient">Internships</span>
          </h2>
          <p className="section-subtitle">
            Real-world experience across web, VR, and aerospace industries
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {internships.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.timelineEntry}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.15 }}
            >
              {/* Timeline connector */}
              <div className={styles.timelineCenter}>
                <div
                  className={styles.timelineIcon}
                  style={{
                    color: item.color,
                    borderColor: item.color,
                    boxShadow: `0 0 24px ${item.color}40`,
                    background: `${item.color}12`,
                  }}
                >
                  {item.icon}
                </div>
                {idx < internships.length - 1 && (
                  <div
                    className={styles.timelineLine}
                    style={{ background: `linear-gradient(180deg, ${item.color}60, ${internships[idx + 1].color}30)` }}
                  />
                )}
              </div>

              {/* Card */}
              <motion.div
                className={`glass ${styles.timelineCard}`}
                whileHover={{ y: -4, boxShadow: `0 20px 50px ${item.color}20` }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Top */}
                <div className={styles.cardTop}>
                  <div className={styles.cardMeta}>
                    <span
                      className={styles.typeBadge}
                      style={{ color: item.color, background: `${item.color}15`, borderColor: `${item.color}30` }}
                    >
                      {item.type}
                    </span>
                    <div className={styles.metaRow}>
                      <Calendar size={13} />
                      <span>{item.duration}</span>
                    </div>
                    <div className={styles.metaRow}>
                      <MapPin size={13} />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className={styles.roleTitle}>{item.role}</h3>
                    <h4 className={styles.companyName} style={{ color: item.color }}>
                      @ {item.company}
                    </h4>
                  </div>
                </div>

                <p className={styles.cardDesc}>{item.description}</p>

                {/* Highlights */}
                <ul className={styles.highlights}>
                  {item.highlights.map((h, hi) => (
                    <li key={hi} className={styles.highlightItem}>
                      <span className={styles.highlightDot} style={{ background: item.color }} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className={styles.tagRow}>
                  {item.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className={styles.techTag}
                      style={{ color: item.color, borderColor: `${item.color}25`, background: `${item.color}08` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
