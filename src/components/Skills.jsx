import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Globe, Smartphone, Box, Wrench, Sparkles } from 'lucide-react';
import { FaJava, FaPython, FaPhp, FaReact, FaHtml5, FaCss3Alt, FaLaravel, FaDocker, FaGitAlt, FaGithub, FaUnity, FaCode, FaMobileAlt, FaVrCardboard } from 'react-icons/fa';
import { SiKotlin, SiCplusplus, SiJavascript, SiVite, SiMysql, SiAndroidstudio, SiFirebase, SiBlender, SiPostman, SiDigitalocean, SiCisco, SiCanva, SiFigma } from 'react-icons/si';
import { TbApi, TbBrandCSharp } from 'react-icons/tb';
import styles from '../styles/Skills.module.css';

const categories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: <Code size={16} />,
    color: '#c084fc',
    skills: [
      { name: 'Python', icon: <FaPython />, level: 85 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 80 },
      { name: 'Java', icon: <FaJava />, level: 75 },
      { name: 'PHP', icon: <FaPhp />, level: 78 },
      { name: 'Kotlin', icon: <SiKotlin />, level: 70 },
      { name: 'C++', icon: <SiCplusplus />, level: 65 },
      { name: 'C#', icon: <TbBrandCSharp />, level: 72 },
    ]
  },
  {
    id: 'web',
    label: 'Web Dev',
    icon: <Globe size={16} />,
    color: '#22d3ee',
    skills: [
      { name: 'React.js', icon: <FaReact />, level: 85 },
      { name: 'Laravel', icon: <FaLaravel />, level: 80 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 88 },
      { name: 'Vite', icon: <SiVite />, level: 82 },
      { name: 'MySQL', icon: <SiMysql />, level: 78 },
      { name: 'REST APIs', icon: <TbApi />, level: 80 },
    ]
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: <Smartphone size={16} />,
    color: '#4ade80',
    skills: [
      { name: 'Android Studio', icon: <SiAndroidstudio />, level: 75 },
      { name: 'Kotlin', icon: <SiKotlin />, level: 70 },
      { name: 'Firebase', icon: <SiFirebase />, level: 72 },
      { name: 'XML', icon: <FaCode />, level: 78 },
    ]
  },
  {
    id: 'vr',
    label: 'VR & 3D',
    icon: <Box size={16} />,
    color: '#f472b6',
    skills: [
      { name: 'Unity 3D', icon: <FaUnity />, level: 78 },
      { name: 'Blender', icon: <SiBlender />, level: 70 },
      { name: 'C# (Unity)', icon: <TbBrandCSharp />, level: 72 },
      { name: 'VR Dev', icon: <FaVrCardboard />, level: 70 },
    ]
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: <Wrench size={16} />,
    color: '#fbbf24',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 85 },
      { name: 'GitHub', icon: <FaGithub />, level: 85 },
      { name: 'Docker', icon: <FaDocker />, level: 65 },
      { name: 'Postman', icon: <SiPostman />, level: 80 },
      { name: 'Figma', icon: <SiFigma />, level: 70 },
      { name: 'Canva', icon: <SiCanva />, level: 85 },
      { name: 'Cisco PT', icon: <SiCisco />, level: 68 },
    ]
  },
];

function SkillBar({ name, icon, level, color, index }) {
  return (
    <motion.div
      className={styles.skillItem}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06 }}
    >
      <div className={styles.skillHeader}>
        <div className={styles.skillNameRow}>
          <span className={styles.skillIcon} style={{ color }}>{icon}</span>
          <span className={styles.skillName}>{name}</span>
        </div>
        <span className={styles.skillLevel} style={{ color }}>{level}%</span>
      </div>
      <div className={styles.skillBarTrack}>
        <motion.div
          className={styles.skillBarFill}
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.06 + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('languages');

  const current = categories.find(c => c.id === active);

  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">
            <Sparkles size={13} /> Technical Arsenal
          </span>
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className={styles.tabsRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tab} ${active === cat.id ? styles.tabActive : ''}`}
              style={active === cat.id ? { borderColor: cat.color, color: cat.color, background: `${cat.color}12` } : {}}
              onClick={() => setActive(cat.id)}
            >
              <span className={styles.tabIcon}>{cat.icon}</span>
              <span className={styles.tabLabel}>{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={`glass ${styles.skillsPanel}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.panelHeader}>
              <h3 style={{ color: current.color }}>{current.label}</h3>
              <span className={styles.panelCount}>{current.skills.length} skills</span>
            </div>

            <div className={styles.skillsGrid}>
              {current.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  color={current.color}
                  index={i}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All skills tag cloud */}
        <motion.div
          className={styles.tagCloud}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4 className={styles.tagCloudTitle}>All Technologies</h4>
          <div className={styles.tagCloudGrid}>
            {categories.flatMap(c => c.skills).map((skill, i) => (
              <motion.span
                key={`${skill.name}-${i}`}
                className={`tag ${styles.techTag}`}
                whileHover={{ scale: 1.08, y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
              >
                {skill.icon}
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
