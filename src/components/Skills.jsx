import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import {
  FaJava, FaPython, FaReact, FaPhp, FaHtml5, FaCss3Alt,
  FaLaravel, FaDocker, FaGitAlt, FaGithub, FaUnity,
  FaCode, FaMobileAlt, FaVrCardboard, FaNodeJs,
} from 'react-icons/fa';
import {
  SiKotlin, SiCplusplus, SiJavascript, SiTypescript, SiVite,
  SiMysql, SiAndroidstudio, SiFirebase, SiBlender, SiPostman,
  SiCisco, SiCanva, SiFigma, SiFlask, SiScikitlearn,
  SiPandas, SiNumpy, SiJupyter, SiTensorflow, SiSqlite,
  SiRedis, SiXml, SiFastapi,
} from 'react-icons/si';
import { TbApi, TbBrandCSharp } from 'react-icons/tb';
import { MdOutlineStorage } from 'react-icons/md';
import styles from '../styles/Skills.module.css';

/* ── Skill dot-rating helper ─────────────────────────────── */
function DotRating({ level }) {
  // level: 1-5
  return (
    <div className={styles.dotRating}>
      {[1, 2, 3, 4, 5].map(i => (
        <span
          key={i}
          className={`${styles.dot} ${i <= level ? styles.dotFilled : styles.dotEmpty}`}
        />
      ))}
    </div>
  );
}

/* ── Skill Card ──────────────────────────────────────────── */
function SkillCard({ skill, index }) {
  return (
    <motion.div
      className={`glass ${styles.skillCard}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, borderColor: 'rgba(168,85,247,0.4)' }}
    >
      <div className={styles.skillIconWrap} style={{ color: skill.color }}>
        {skill.icon}
      </div>
      <div className={styles.skillName}>{skill.name}</div>
      <DotRating level={skill.level} />
    </motion.div>
  );
}

/* ── Skill Data ──────────────────────────────────────────── */
const categories = [
  {
    id: 'web',
    label: 'Web Development',
    emoji: '🌐',
    color: '#3b82f6',
    skills: [
      { name: 'React.js',    icon: <FaReact />,      level: 5, color: '#61DAFB' },
      { name: 'Laravel',     icon: <FaLaravel />,    level: 4, color: '#FF2D20' },
      { name: 'JavaScript',  icon: <SiJavascript />, level: 5, color: '#F7DF1E' },
      { name: 'PHP',         icon: <FaPhp />,        level: 4, color: '#8993be' },
      { name: 'HTML5',       icon: <FaHtml5 />,      level: 5, color: '#E34F26' },
      { name: 'CSS3',        icon: <FaCss3Alt />,    level: 5, color: '#1572B6' },
      { name: 'Vite',        icon: <SiVite />,       level: 4, color: '#646CFF' },
      { name: 'REST APIs',   icon: <TbApi />,        level: 4, color: '#a855f7' },
      { name: 'MySQL',       icon: <SiMysql />,      level: 4, color: '#00758F' },
    ],
  },
  {
    id: 'languages',
    label: 'Programming Languages',
    emoji: '💻',
    color: '#a855f7',
    skills: [
      { name: 'Python',      icon: <FaPython />,       level: 5, color: '#3776AB' },
      { name: 'Java',        icon: <FaJava />,         level: 4, color: '#f89820' },
      { name: 'Kotlin',      icon: <SiKotlin />,       level: 4, color: '#7F52FF' },
      { name: 'JavaScript',  icon: <SiJavascript />,   level: 5, color: '#F7DF1E' },
      { name: 'C++',         icon: <SiCplusplus />,    level: 3, color: '#00599C' },
      { name: 'C#',          icon: <TbBrandCSharp />,  level: 4, color: '#239120' },
      { name: 'PHP',         icon: <FaPhp />,          level: 4, color: '#8993be' },
      { name: 'XML',         icon: <SiXml />,          level: 3, color: '#ff6600' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile & VR Development',
    emoji: '📱',
    color: '#06b6d4',
    skills: [
      { name: 'Android Studio', icon: <SiAndroidstudio />, level: 4, color: '#3DDC84' },
      { name: 'Kotlin',         icon: <SiKotlin />,         level: 4, color: '#7F52FF' },
      { name: 'Firebase',       icon: <SiFirebase />,       level: 4, color: '#FFCA28' },
      { name: 'Unity 3D',       icon: <FaUnity />,          level: 4, color: '#ffffff' },
      { name: 'Blender',        icon: <SiBlender />,        level: 3, color: '#EA7600' },
      { name: 'VR Development', icon: <FaVrCardboard />,    level: 4, color: '#a855f7' },
      { name: 'C# (Unity)',     icon: <TbBrandCSharp />,    level: 4, color: '#239120' },
      { name: 'Mobile UI',      icon: <FaMobileAlt />,      level: 4, color: '#06b6d4' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Machine Learning',
    emoji: '🤖',
    color: '#f472b6',
    skills: [
      { name: 'Python (ML)',   icon: <FaPython />,        level: 5, color: '#3776AB' },
      { name: 'Scikit-Learn',  icon: <SiScikitlearn />,   level: 4, color: '#F7931E' },
      { name: 'Flask',         icon: <SiFlask />,         level: 4, color: '#ffffff' },
      { name: 'Pandas',        icon: <SiPandas />,        level: 4, color: '#150458' },
      { name: 'NumPy',         icon: <SiNumpy />,         level: 4, color: '#013243' },
      { name: 'Jupyter',       icon: <SiJupyter />,       level: 4, color: '#F37626' },
      { name: 'TensorFlow',    icon: <SiTensorflow />,    level: 3, color: '#FF6F00' },
      { name: 'Data Analysis', icon: <MdOutlineStorage />,level: 4, color: '#f472b6' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools, DevOps & Design',
    emoji: '🛠️',
    color: '#4ade80',
    skills: [
      { name: 'Git',            icon: <FaGitAlt />,    level: 5, color: '#F05032' },
      { name: 'GitHub',         icon: <FaGithub />,    level: 5, color: '#ffffff' },
      { name: 'Docker',         icon: <FaDocker />,    level: 3, color: '#2496ED' },
      { name: 'Postman',        icon: <SiPostman />,   level: 4, color: '#FF6C37' },
      { name: 'Figma',          icon: <SiFigma />,     level: 4, color: '#F24E1E' },
      { name: 'Canva',          icon: <SiCanva />,     level: 5, color: '#00C4CC' },
      { name: 'Cisco PT',       icon: <SiCisco />,     level: 3, color: '#1BA0D7' },
      { name: 'Android Studio', icon: <SiAndroidstudio />, level: 4, color: '#3DDC84' },
    ],
  },
];

/* ── Languages (wide cards at the bottom) ──────────────── */
const languageCards = [
  { name: 'Urdu', level: 'Native', flag: '🇵🇰', color: '#4ade80' },
  { name: 'English', level: 'Proficient', flag: '🇬🇧', color: '#3b82f6' },
];

export default function Skills() {
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
            <Sparkles size={12} /> Skills &amp; Technologies
          </span>
          <h2 className="section-title">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Technologies I use to build impactful, scalable, and modern applications
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Categories */}
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.id}
            className={styles.categoryBlock}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
          >
            {/* Category Header */}
            <div className={styles.catHeader}>
              <span className={styles.catEmoji}>{cat.emoji}</span>
              <h3 className={styles.catTitle} style={{ color: cat.color }}>
                {cat.label}
              </h3>
              <div className={styles.catLine} style={{ background: `linear-gradient(90deg, ${cat.color}60, transparent)` }} />
            </div>

            {/* Skills Grid */}
            <div className={styles.skillsGrid}>
              {cat.skills.map((skill, si) => (
                <SkillCard key={skill.name} skill={skill} index={si} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Language Cards */}
        <motion.div
          className={styles.categoryBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.catHeader}>
            <span className={styles.catEmoji}>🗣️</span>
            <h3 className={styles.catTitle} style={{ color: '#fbbf24' }}>Languages</h3>
            <div className={styles.catLine} style={{ background: 'linear-gradient(90deg, #fbbf2460, transparent)' }} />
          </div>
          <div className={styles.langGrid}>
            {languageCards.map((lang, i) => (
              <motion.div
                key={lang.name}
                className={`glass ${styles.langCard}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <span className={styles.langFlag}>{lang.flag}</span>
                <span className={styles.langName}>{lang.name}</span>
                <span className={styles.langLevel} style={{ color: lang.color, borderColor: `${lang.color}40`, background: `${lang.color}12` }}>
                  {lang.level}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
