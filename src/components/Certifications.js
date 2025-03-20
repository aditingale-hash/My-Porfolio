import React from 'react';
import styles from '../css-modules/Certifications.module.css';
import { FaAward } from 'react-icons/fa';

const certifications = [
  { title: "AWS Certified: Cloud Practitioner" },
  { title: "AWS Certified: Generative AI Essentials" },
  { title: "Capgemini: Entry-Level Developer (Level 1 and 2)" },
  { title: "Coursera: Agile Software Development" },
  { title: "IBM: Python for Data Science" },
  { title: "Capgemini : Rising Star (Best Employee) " },
];

const Certifications = () => {
  return (
    <section id="certifications" className={styles.certificationsSection}>
      <h2 className={styles.heading}>
        <FaAward className={styles.icon} /> My <span className={styles.highlight}>Certifications</span>
      </h2>
      <div className={styles.certificationsGrid}>
        {certifications.map((cert, index) => (
          <div key={index} className={styles.certCard}>
            <FaAward className={styles.certIcon} />
            <p className={styles.certTitle}>{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
