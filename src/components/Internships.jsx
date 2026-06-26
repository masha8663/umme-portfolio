import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Code2, Cpu } from 'lucide-react';
import styles from '../styles/Internships.module.css';

const internships = [
  {
    role: "Web Development Intern",
    company: "Developers Hub",
    duration: "2025",
    description: "Architected and improved core website features using React, Vite, Laravel, and PHP. Led responsive UI developments and integrated complex backend APIs. Managed GitHub repositories and executed rigorous Postman API testing.",
    icon: <Code2 size={24} />,
    color: "#a855f7"
  },
  {
    role: "Technology Intern",
    company: "Atom Global Information",
    duration: "Jul 2025 - Sep 2025",
    description: "Spearheaded advanced R&D projects focusing on Unity 3D, Figma, IoT devices, and VR systems. Explored digital twin concepts and developed real-time interactive project architectures.",
    icon: <Cpu size={24} />,
    color: "#06b6d4"
  },
  {
    role: "Technical Intern",
    company: "Pakistan Aeronautical Complex Kamra",
    duration: "Jun 2024 - Jul 2024",
    description: "Conducted deep-dive studies into LRUs, avionics, radar technology, and complex aircraft systems within a highly technical aerospace environment.",
    icon: <Building2 size={24} />,
    color: "#10b981"
  }
];

export default function Internships() {
  return (
    <section id="internships" className={`section ${styles.internshipsSection}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional <span className="text-gradient">Internships</span>
        </motion.h2>

        <div className={styles.timeline}>
          {internships.map((internship, idx) => (
            <motion.div 
              key={idx}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div 
                className={styles.timelineIcon} 
                style={{ borderColor: internship.color, color: internship.color, boxShadow: `0 0 20px ${internship.color}40` }}
              >
                {internship.icon}
              </div>
              
              <div className={`glass ${styles.timelineContent}`}>
                <div className={styles.contentHeader}>
                  <div className={styles.titleGroup}>
                    <h3>{internship.role}</h3>
                    <h4 className={styles.company} style={{ color: internship.color }}>{internship.company}</h4>
                  </div>
                  <span className={styles.duration} style={{ backgroundColor: `${internship.color}15`, color: internship.color }}>
                    {internship.duration}
                  </span>
                </div>
                <p>{internship.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
