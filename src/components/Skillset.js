import React from 'react';
import styles from '../css-modules/Skillset.module.css';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaAngular, FaDatabase, FaAws } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiPostgresql,SiSpringboot, SiPostman, SiCitrix } from 'react-icons/si';
import { CgCPlusPlus } from 'react-icons/cg';

const skills = [
  { name: 'C++', icon: <CgCPlusPlus /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'SQL', icon: <FaDatabase/> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Angular', icon: <FaAngular /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'REST', icon: <SiPostman />},
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Citrix', icon: <SiCitrix/> },
  { name: 'Spring', icon: <SiSpringboot /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'AWS', icon: <FaAws /> }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.heading}>Professional <span className={styles.highlight}>Skillset</span></h2>

      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.icon}>{skill.icon}</div>
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
