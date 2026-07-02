import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BrainCircuit, Box, Globe, Sparkles, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from '../styles/Projects.module.css';
import ImageSlider from './ImageSlider';

const featuredProjects = [
  {
    badge: 'FINAL YEAR PROJECT · PART 1',
    title: 'Virtual Mart – 3D Non-Immersive VR Shopping Store',
    description:
      'A complete 3D Non-Immersive VR shopping application bridging immersive experiences and e-commerce. Designed dynamic 3D environments, interactive product displays, and spatial UI assets with Unity 3D and Blender.',
    highlights: [
      'Dynamic 3D environments & interactive product displays',
      'Unity 3D + Blender for modeling and engine implementation',
      'Seamless navigation and interactive product inspection',
      'Frontend hooked into real-time web-based inventory API',
    ],
    tags: ['Unity 3D', 'Blender', 'C#', 'VR Development', '3D Modeling'],
    images: [
      '/vmart_unity/image41.png', '/vmart_unity/image39.png', '/vmart_unity/image35.png',
      '/vmart_unity/image34.png', '/vmart_unity/image27.png', '/vmart_unity/image29.png',
      '/vmart_unity/image31.png', '/vmart_unity/image33.png', '/vmart_unity/image36.png',
      '/vmart_unity/image37.png', '/vmart_unity/image38.png',
    ],
    icon: <Box size={20} />,
    color: '#c084fc',
    interval: 4000,
  },
  {
    badge: 'FINAL YEAR PROJECT · PART 2',
    title: 'Virtual Mart – Real-Time Inventory Management System',
    description:
      'The highly scalable backend and web dashboard powering the Virtual Mart VR Store. A full-stack system with real-time product sync between the VR store and admin panel, powered by Laravel, React.js, and MySQL.',
    highlights: [
      'Integrated Real-Time Inventory Management with Laravel + React',
      'Seamless product/stock sync between VR store & web dashboard',
      'Robust REST APIs serving dynamic 3D asset data',
      'Sleek admin interface for real-time stock control',
    ],
    tags: ['React.js', 'Laravel', 'PHP', 'Vite', 'MySQL', 'REST APIs'],
    images: ['/vmart_inventory/image1.png', '/vmart_inventory/image2.png', '/vmart_inventory/image3.png'],
    github: 'https://github.com/masha8663/V-Mart_Inventory',
    icon: <Globe size={20} />,
    color: '#22d3ee',
    interval: 4500,
  },
];

const projects = [
  {
    title: 'AI Insurance Claim Predictor',
    description: 'ML model to predict insurance claim risks with a Flask web interface for real-time analytics.',
    tags: ['Python', 'Machine Learning', 'Flask', 'Scikit-learn'],
    images: ['/insurance/image6.png', '/insurance/image7.png', '/insurance/image8.png'],
    icon: <BrainCircuit size={18} />,
    color: '#f472b6',
  },
  {
    title: 'Fitness Dashboard',
    description: 'C# Windows Forms dashboard for workout tracking, progress monitoring, and fitness data display.',
    tags: ['C#', 'Windows Forms', 'Desktop App'],
    images: ['/fitness/image20.png', '/fitness/image21.png', '/fitness/image22.png', '/fitness/image23.png', '/fitness/image24.png'],
    color: '#4ade80',
  },
  {
    title: 'Grub App – Food Delivery UI',
    description: 'Interactive mobile app UI designed for seamless food delivery, recipe tracking, and user engagement.',
    tags: ['Mobile UI', 'App Design', 'UX'],
    images: ['/grub/image12.jpg', '/grub/image13.jpg', '/grub/image14.jpg', '/grub/image15.jpg', '/grub/image16.jpg'],
    color: '#fbbf24',
  },
  {
    title: 'Python Compiler Core',
    description: 'Core compiler construction project featuring lexical analysis, syntax trees, and semantic flows.',
    tags: ['Python', 'Compiler Design', 'Algorithms'],
    images: ['/compiler/image4.png', '/compiler/image5.png', '/compiler/image9.png'],
    color: '#22d3ee',
  },
  {
    title: 'Smart Agriculture – IoT Network',
    description: 'IoT network design for soil monitoring, automated irrigation, and sensors using Cisco Packet Tracer.',
    tags: ['IoT', 'Cisco Packet Tracer', 'Networking'],
    images: ['/iot/image10.png', '/iot/image11.png'],
    color: '#a3e635',
  },
  {
    title: 'TechNest E-Commerce Storefront',
    description: 'Modern, high-conversion e-commerce storefront for tech accessories with promotional grids.',
    tags: ['Web Design', 'E-Commerce', 'UI/UX'],
    images: ['/image43.jpeg'],
    color: '#c084fc',
  },
  {
    title: 'Modins Insurance Landing Page',
    description: 'Professional corporate landing page for an insurance agency with service highlights.',
    tags: ['Front-End', 'Corporate UI', 'Landing Page'],
    images: ['/image44.jpeg'],
    color: '#f472b6',
  },
  {
    title: 'Technova Electronics Catalog',
    description: 'Feature-rich electronics e-commerce platform with dynamic catalogs and category navigation.',
    tags: ['Web App', 'E-Commerce UI'],
    images: ['/image45.jpeg'],
    color: '#22d3ee',
  },
  {
    title: 'Canva Design Showcase',
    description: 'Creative design projects crafted in Canva featuring marketing templates and multimedia content.',
    tags: ['Canva', 'Graphic Design', 'Multimedia'],
    images: ['/canva/1.mp4', '/canva/image.jpeg', '/canva/image48.jpeg', '/canva/image47.jpeg'],
    color: '#fbbf24',
  },
];

const FILTERS = ['All', 'Web', 'AI/ML', 'Mobile', 'VR/3D', 'Design'];
const filterMap = {
  All: () => true,
  Web: (p) => p.tags.some(t => ['React.js', 'Laravel', 'PHP', 'HTML', 'CSS', 'Vite', 'MySQL', 'REST APIs', 'Flask', 'Web Design', 'Front-End', 'Web App', 'E-Commerce', 'Landing Page', 'Corporate UI', 'E-Commerce UI'].includes(t)),
  'AI/ML': (p) => p.tags.some(t => ['Machine Learning', 'Python', 'Flask', 'Scikit-learn', 'AI Algorithms'].includes(t)),
  Mobile: (p) => p.tags.some(t => ['Mobile UI', 'App Design', 'Android', 'Kotlin'].includes(t)),
  'VR/3D': (p) => p.tags.some(t => ['Unity 3D', 'Blender', 'VR Development', 'C#', '3D Modeling'].includes(t)),
  Design: (p) => p.tags.some(t => ['Canva', 'Graphic Design', 'Multimedia', 'UI/UX', 'UX'].includes(t)),
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = projects.filter(filterMap[activeFilter]);

  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">
            <Sparkles size={13} /> Portfolio
          </span>
          <h2 className="section-title">
            <span className="text-gradient">Selected Work</span>
          </h2>
          <p className="section-subtitle">
            Projects I've built — from VR stores to AI models
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* ── Featured Projects ──────────────────────────────────────────── */}
        <div className={styles.featuredSection}>
          {featuredProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              className={`glass ${styles.featuredCard} ${idx % 2 !== 0 ? styles.reversed : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              style={{ '--accent': proj.color }}
            >
              {/* Media */}
              <div className={styles.featuredMedia}>
                <div className={styles.mediaFrame}>
                  <ImageSlider images={proj.images} interval={proj.interval} />
                  <div className={styles.mediaGlow} style={{ background: `radial-gradient(circle at center, ${proj.color}30, transparent 70%)` }} />
                </div>
              </div>

              {/* Content */}
              <div className={styles.featuredContent}>
                <div className={styles.featuredBadge} style={{ color: proj.color, borderColor: `${proj.color}35`, background: `${proj.color}10` }}>
                  {proj.icon} {proj.badge}
                </div>
                <h3 className={styles.featuredTitle}>{proj.title}</h3>
                <p className={styles.featuredDesc}>{proj.description}</p>

                <ul className={styles.highlightList}>
                  {proj.highlights.map((h, hi) => (
                    <li key={hi} className={styles.highlightItem}>
                      <ChevronRight size={14} style={{ color: proj.color }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className={styles.tagRow}>
                  {proj.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className={styles.techTag}
                      style={{ color: proj.color, borderColor: `${proj.color}25`, background: `${proj.color}08` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ marginTop: '1rem', width: 'fit-content' }}>
                    <FaGithub size={18} /> View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── More Projects ──────────────────────────────────────────────── */}
        <div className={styles.moreHeader}>
          <h3 className={styles.moreTitle}>More Projects</h3>

          {/* Filter tabs */}
          <div className={styles.filterRow}>
            {FILTERS.map(f => (
              <button
                key={f}
                className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className={styles.projectsGrid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                className={`glass ${styles.projectCard}`}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -5 }}
                style={{ '--card-color': project.color }}
              >
                {/* Image Slider */}
                <div className={styles.cardMedia}>
                  <ImageSlider images={project.images} interval={3500 + idx * 300} />
                  <div className={styles.cardOverlay} style={{ background: `linear-gradient(to top, ${project.color}18, transparent)` }} />
                </div>

                {/* Card Content */}
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    {project.icon && (
                      <span className={styles.cardIcon} style={{ color: project.color, background: `${project.color}15` }}>
                        {project.icon}
                      </span>
                    )}
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                  </div>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.cardTags}>
                    {project.tags.slice(0, 3).map((tag, ti) => (
                      <span key={ti} className={styles.cardTag} style={{ color: project.color, borderColor: `${project.color}25`, background: `${project.color}08` }}>
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className={styles.cardTag} style={{ color: project.color, borderColor: `${project.color}25`, background: `${project.color}08` }}>
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
