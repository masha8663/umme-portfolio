import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, Cpu, Building2, Calendar, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import styles from '../styles/Internships.module.css';

const internships = [
  {
    role: 'Web Development Intern',
    company: 'Developers Hub',
    location: 'On-site',
    duration: '2025',
    type: 'Full-Stack',
    icon: <Code2 size={24} />,
    color: '#a855f7',
    description:
      'Architected and improved core website features using React, Vite, Laravel, and PHP. Led responsive UI developments and integrated complex backend APIs.',
    highlights: [
      'Built full-stack web features with React + Laravel + Vite',
      'Integrated and tested REST APIs using Postman',
      'Managed version control workflows on GitHub',
      'Delivered responsive, mobile-first UI components',
    ],
    tags: ['React.js', 'Vite', 'Laravel', 'PHP', 'MySQL', 'REST APIs', 'Postman'],
  },
  {
    role: 'Technology Intern',
    company: 'Atom Global Information',
    location: 'On-site',
    duration: 'Jul 2025 – Sep 2025',
    type: 'R&D / VR',
    icon: <Cpu size={24} />,
    color: '#06b6d4',
    description:
      'Spearheaded advanced R&D projects focusing on Unity 3D, Figma, IoT devices, and VR systems. Explored digital twin concepts and developed real-time interactive project architectures.',
    highlights: [
      'Developed VR prototypes using Unity 3D and C#',
      'Researched IoT device integration frameworks',
      'Designed digital twin architectures for real-time systems',
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
    icon: <Building2 size={24} />,
    color: '#4ade80',
    description:
      'Conducted deep-dive studies into LRUs, avionics, radar technology, and complex aircraft systems within a highly technical aerospace environment.',
    highlights: [
      'Studied Line Replaceable Units (LRUs) in aircraft systems',
      'Explored radar & avionics technology in detail',
      'Reviewed aerospace safety and testing protocols',
      'Gained hands-on exposure to defense-grade engineering',
    ],
    tags: ['Avionics', 'Radar Systems', 'IoT', 'Aerospace Engineering', 'LRUs'],
  },
];

export default function Internships() {
  return (
    <section id="internships" className={`section ${styles.section}`}>
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">
            <Sparkles size={12} /> Work Experience
          </span>
          <h2 className="section-title">
            Professional <span className="text-gradient">Internships</span>
          </h2>
          <p className="section-subtitle">
            Real-world experience across web, VR, and aerospace industries
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Cards */}
        <div className={styles.cardsList}>
          {internships.map((item, idx) => (
            <motion.div
              key={idx}
              className={`glass ${styles.card}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              whileHover={{ y: -4, borderColor: `${item.color}40` }}
              style={{ '--accent': item.color }}
            >
              {/* Top accent line */}
              <div className={styles.accentLine} style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />

              {/* Card Header Row */}
              <div className={styles.cardHeader}>
                {/* Icon */}
                <div
                  className={styles.iconBox}
                  style={{ color: item.color, background: `${item.color}15`, border: `1px solid ${item.color}35` }}
                >
                  {item.icon}
                </div>

                {/* Title block */}
                <div className={styles.titleBlock}>
                  <h3 className={styles.role}>{item.role}</h3>
                  <p className={styles.company} style={{ color: item.color }}>
                    {item.company}
                  </p>
                </div>

                {/* Meta badges (right side) */}
                <div className={styles.metaBadges}>
                  <span
                    className={styles.typeBadge}
                    style={{ color: item.color, background: `${item.color}12`, border: `1px solid ${item.color}30` }}
                  >
                    {item.type}
                  </span>
                  <div className={styles.metaItem}>
                    <Calendar size={13} />
                    <span>{item.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className={styles.desc}>{item.description}</p>

              {/* Highlights */}
              <ul className={styles.highlights}>
                {item.highlights.map((h, hi) => (
                  <li key={hi} className={styles.highlight}>
                    <ChevronRight size={14} style={{ color: item.color, flexShrink: 0 }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className={styles.tags}>
                {item.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className={styles.tag}
                    style={{ color: item.color, background: `${item.color}08`, border: `1px solid ${item.color}25` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
