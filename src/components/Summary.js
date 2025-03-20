import React from 'react';
import styles from '../css-modules/Summary.module.css';
import { FaUserTie } from 'react-icons/fa';

const Summary = () => {
  return (
    <section id="summary" className={styles.summarySection}>
      <h2 className={styles.heading}>
        <FaUserTie className={styles.icon} /> About <span className={styles.highlight}>Me</span>
      </h2>
      <p className={styles.text}>
      Proactive and detail-oriented Software Analyst with more than 2 years of experience in Data Analysis, 
microservices, API validation, and Database solutions. AWS Certified Cloud Practitioner with expertise in web 
application development, software deployment, debugging, and Agile methodologies.  
Skilled in end-to-end project coordination, requirement analysis, and operational alignment, leveraging tools 
like Jira, MS Office, Power BI and Postman for enhanced visibility and data-driven decision-making. 
Technically proficient in programming languages (C++, Java, SQL, Python) and passionate about applying 
technical expertise and project management skills to develop innovative, scalable solutions in a collaborative 
environment.
      </p>
    </section>
  );
};

export default Summary;
