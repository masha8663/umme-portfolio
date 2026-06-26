import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Skills.module.css';
import { FaJava, FaPython, FaPhp, FaReact, FaHtml5, FaCss3Alt, FaLaravel, FaDocker, FaGitAlt, FaGithub, FaUnity, FaCode, FaMobileAlt, FaVrCardboard } from 'react-icons/fa';
import { SiKotlin, SiCplusplus, SiJavascript, SiVite, SiMysql, SiAndroidstudio, SiFirebase, SiBlender, SiPostman, SiDigitalocean, SiCisco, SiCanva } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <SiJavascript /> }
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "REST APIs", icon: <TbApi /> }
    ]
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Android Studio", icon: <SiAndroidstudio /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "XML", icon: <FaCode /> },
      { name: "Mobile Computing", icon: <FaMobileAlt /> }
    ]
  },
  {
    title: "VR & 3D",
    skills: [
      { name: "Unity 3D", icon: <FaUnity /> },
      { name: "Blender", icon: <SiBlender /> },
      { name: "Virtual Reality Development", icon: <FaVrCardboard /> }
    ]
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "DigitalOcean Droplets", icon: <SiDigitalocean /> },
      { name: "Cisco Packet Tracer", icon: <SiCisco /> },
      { name: "Canva", icon: <SiCanva /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className={`glass ${styles.skillCategory}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3>{category.title}</h3>
              <div className={styles.skillTags}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.skillTag}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    {skill.name}
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
