import React from 'react';
import styles from '../css-modules/Education.module.css';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

const educationData = [
  {
    degree: "Master of Science (Web Engineering)",
    institution: "Technische Universität Chemnitz",
    duration: "Oct 2024 – Current",
    icon: <FaUniversity className={styles.eduIcon} /> // University Icon
  },
  {
    degree: "Bachelor of Engineering (Computer)",
    institution: "Savitribai Phule Pune University",
    duration: "Jul 2018 – Apr 2022",
    icon: <MdSchool className={styles.eduIcon} /> // College Icon
  }
];

const Education = () => {
  return (
    <section id="education" className={styles.educationSection}>
      <h2 className={styles.heading}>
        <FaGraduationCap className={styles.icon} /> My <span className={styles.highlight}>Education</span>
      </h2>

      {educationData.map((edu, index) => (
        <div key={index} className={styles.educationItem}>
          <div className={styles.iconContainer}>
            {edu.icon}
          </div>
          <div className={styles.eduDetails}>
            <h3 className={styles.degree}>{edu.degree}</h3>
            <p className={styles.institution}>{edu.institution}</p>
            <span className={styles.duration}>{edu.duration}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
