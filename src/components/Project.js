import React from 'react';
import styles from '../css-modules/Project.module.css';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Stock Analysis App",
    description: "A real-time stock analysis web app that fetches data, processes trends, and provides stock recommendations.",
    image:process.env.PUBLIC_URL + "/A.png", // Replace with actual image URL
    github: "https://github.com/aditingale-hash/Stock_webapp"
    
  },
  {
    title: "Speech to Sign Language",
    description: "Speech-to-Sign Language Converter translates spoken words into sign language gestures in real time.",
    image: process.env.PUBLIC_URL + "/D.png",
    github: "https://github.com/aditingale-hash/Data-Internship-Project"
    
  },
  {
    title: "Hospital Management System",
    description: "A Hospital Management System is a full-stack Java application using Spring Boot, React/Angular, and a secure database.",
    image: process.env.PUBLIC_URL + "/C.png",
    github: "https://github.com/aditingale-hash/myprojjects",
  },
  {
    title: "Gold Price Trend Analysis",
    description: "A React-based Gold Price Trend Analysis app visualizes real-time and historical gold price trends.",
    image: process.env.PUBLIC_URL + "/B.png",
    github: "https://github.com/aditingale-hash/yellow"
  },
  {
    title: "Payment Gateway",
    description: "A Payment Gateway securely processes online transactions by integrating APIs, enabling seamless payments for e-commerce and services.",
    image: process.env.PUBLIC_URL + "/E.png",
    github: "https://github.com/aditingale-hash/Spark-Project"
  },
  {
    title: "Shopping Cart System",
    description: "A Shopping Cart System is a web app that allows users to browse products, add items to a cart, and securely checkout using a payment gateway. ",
    image: process.env.PUBLIC_URL + "/F.png",
    github: "https://github.com/aditingale-hash/shoppingcart"
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.heading}>My Recent <span className={styles.highlight}>Works</span></h2>
      <p className={styles.subtitle}>Here are a few projects I've worked on recently.</p>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectLinks}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                <FaGithub /> GitHub
              </a>
              {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                <FaExternalLinkAlt /> Demo
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
