import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BrainCircuit, Box } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from '../styles/Projects.module.css';
import ImageSlider from './ImageSlider';

const projects = [
  {
    title: "Fitness Dashboard Using Windows Forms",
    description: "C# Windows Forms dashboard for workout tracking, progress monitoring, and fitness data display.",
    tags: ["C#", "Windows Forms", "Desktop App"],
    images: ["/fitness/image20.png", "/fitness/image21.png", "/fitness/image22.png", "/fitness/image23.png", "/fitness/image24.png", "/fitness/image25.png", "/fitness/image26.png"]
  },
  {
    title: "Grub App - Food Delivery Application",
    description: "Interactive mobile application UI designed for seamless food delivery, recipe tracking, and user engagement.",
    tags: ["Mobile UI", "App Design"],
    images: ["/grub/image12.jpg", "/grub/image13.jpg", "/grub/image14.jpg", "/grub/image15.jpg", "/grub/image16.jpg", "/grub/image17.jpg", "/grub/image18.jpg", "/grub/image19.jpg"]
  },
  {
    title: "AI Insurance Claim Predictor",
    description: "Advanced machine learning model built with Python to predict insurance claim risks. Features a sleek Flask web interface for real-time data input and highly accurate predictive analytics.",
    tags: ["Python", "Machine Learning", "Flask", "AI Algorithms"],
    images: ["/insurance/image6.png", "/insurance/image7.png", "/insurance/image8.png"],
    icon: <BrainCircuit size={24} />
  },
  {
    title: "Python Compiler Core",
    description: "Core compiler construction project written in Python, featuring deep implementations of lexical analysis, syntax trees, and semantic flows.",
    tags: ["Python", "Compiler Architecture"],
    images: ["/compiler/image4.png", "/compiler/image5.png", "/compiler/image9.png"]
  },
  {
    title: "TechNest E-Commerce Storefront",
    description: "Designed a modern, high-conversion e-commerce storefront for tech accessories. Features promotional grids, dynamic product cards, and a clean layout.",
    tags: ["Web Design", "E-Commerce", "UI/UX"],
    images: ["/image43.jpeg"]
  },
  {
    title: "Modins Insurance Landing Page",
    description: "Developed a professional and corporate landing page for an insurance agency. Includes robust service offerings, statistical highlights, and lead generation sections.",
    tags: ["Front-End", "Corporate UI", "Landing Page"],
    images: ["/image44.jpeg"]
  },
  {
    title: "Technova Electronics Catalog",
    description: "Built a feature-rich electronics e-commerce platform with dynamic product catalogs, promotional banners, and intuitive category navigation.",
    tags: ["Web Application", "E-Commerce UI"],
    images: ["/image45.jpeg"]
  },
  {
    title: "Canva Design & Multimedia Showcase",
    description: "Creative design projects crafted utilizing Canva, featuring dynamic visuals, marketing templates, and multimedia content integration.",
    tags: ["Canva", "Graphic Design", "Multimedia"],
    images: ["/canva/image46.jpeg", "/canva/1.mp4", "/canva/image47.jpeg"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">Selected Work</span>
        </motion.h2>

        {/* Featured Project 1: Virtual Mart - Unity Side */}
        <motion.div 
          className={`glass ${styles.featuredProjectCard}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.featuredSliderArea}>
            <ImageSlider 
              images={[
                "/vmart_unity/image27.png", "/vmart_unity/image28.png", "/vmart_unity/image29.png", 
                "/vmart_unity/image30.png", "/vmart_unity/image31.png", "/vmart_unity/image32.png", 
                "/vmart_unity/image33.png", "/vmart_unity/image34.png", "/vmart_unity/image35.png", "/vmart_unity/image36.png"
              ]} 
              interval={4000} 
            />
          </div>
          
          <div className={styles.featuredContentArea}>
            <div className={styles.featuredHeader}>
              <div className={styles.projectIcon}><Box size={28} /></div>
              <div>
                <h4 className={styles.featuredLabel}>FINAL YEAR PROJECT - PART 1</h4>
                <h3>Virtual Mart – 3D Non-Immersive VR Shopping Store</h3>
              </div>
            </div>
            
            <div className={styles.featuredDescription}>
              <p>Developed a complete 3D Non-Immersive VR shopping application bridging the gap between immersive experiences and e-commerce.</p>
              <ul>
                <li>Designed dynamic 3D environments, interactive product displays, and spatial UI assets.</li>
                <li>Utilized Unity 3D and Blender for modeling and engine implementation.</li>
                <li>Enabled seamless navigation and interactive product inspection for users.</li>
                <li>Architected the front-end interface that dynamically hooks into the web-based inventory API.</li>
              </ul>
            </div>
            
            <div className={styles.tags}>
              {["Unity 3D", "Blender", "VR Development", "C#"].map((tag, tIdx) => (
                <span key={tIdx} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Project 2: Virtual Mart - Inventory System */}
        <motion.div 
          className={`glass ${styles.featuredProjectCard} ${styles.reverseLayout}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.featuredSliderArea}>
            <ImageSlider 
              images={[
                "/vmart_inventory/image1.png", 
                "/vmart_inventory/image2.png", 
                "/vmart_inventory/image3.png"
              ]} 
              interval={4500} 
            />
          </div>
          
          <div className={styles.featuredContentArea}>
            <div className={styles.featuredHeader}>
              <div className={styles.projectIcon}><Box size={28} /></div>
              <div>
                <h4 className={styles.featuredLabel}>FINAL YEAR PROJECT - PART 2</h4>
                <h3>Virtual Mart – Real-Time Inventory Management System</h3>
              </div>
            </div>
            
            <div className={styles.featuredDescription}>
              <p>The highly scalable backend and web dashboard driving the Virtual Mart VR Store.</p>
              <ul>
                <li>Integrated a Real-Time Inventory Management System powered by Laravel, PHP, React.js, and Vite.</li>
                <li>Enabled seamless synchronization of products and stock between the VR store and inventory platform.</li>
                <li>Developed robust REST APIs to serve dynamic 3D asset data and handle massive concurrent inventory updates.</li>
                <li>Built a sleek administrative web interface for real-time stock control.</li>
              </ul>
            </div>
            
            <div className={styles.tags}>
              {["React.js", "Laravel", "PHP", "Vite", "MySQL"].map((tag, tIdx) => (
                <span key={tIdx} className={styles.tag}>{tag}</span>
              ))}
            </div>
            
            <div className={styles.projectLinks}>
              <a href="https://github.com/masha8663/V-Mart_Inventory" target="_blank" rel="noreferrer" className={styles.link}>
                <FaGithub size={22} /> View Inventory Code
              </a>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <h3 className={styles.subHeading}>More Projects</h3>
        <div className={styles.bentoGrid}>
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              className={`glass ${styles.projectCard} ${project.featured ? styles.featuredCard : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className={styles.projectImageContainer}>
                <ImageSlider images={project.images} interval={3500 + idx * 500} />
              </div>
              
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  {project.icon && <div className={styles.projectIcon}>{project.icon}</div>}
                  <h3>{project.title}</h3>
                </div>
                
                <p>{project.description}</p>
                
                <div className={styles.tags}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                
                <div className={styles.projectLinks}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className={styles.link}>
                      <FaGithub size={22} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
