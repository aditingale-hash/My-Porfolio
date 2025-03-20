import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../css-modules/Experience.module.css';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.heading}>
        <FaBriefcase className={styles.icon} /> My <span className={styles.highlight}>Experience</span>
      </h2>

      <Carousel controls={true} indicators={true} interval={3000} pause="hover">
        <Carousel.Item>
          <div className={`${styles.job} ${styles.fixedHeight}`}>
            <h3 className={styles.jobTitle}>
              Software Development Intern, Neuronode Technologies Pvt. Ltd. – Pune, India
            </h3>
            <span className={styles.jobDuration}><em>July 2021 – Sept 2021</em></span>
            <ul className={styles.jobList}>
              <li>Developed a Streamlit-based stock portfolio web app using Quandl API for real-time and historical data.</li>
              <li>Designed custom filtering and sorting functionalities for tracking specific stocks and investment trends.</li>
              <li>Optimized data retrieval and visualization for a seamless user experience.</li>
            </ul>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={`${styles.job} ${styles.fixedHeight}`}>
            <h3 className={styles.jobTitle}>
              Trainee Software Developer, Capgemini – Pune, India
            </h3>
            <span className={styles.jobDuration}><em>Jan 2022 – Apr 2022</em></span>
            <ul className={styles.jobList}>
              <li>Developed microservices-based enterprise applications using Java and Angular.</li>
              <li>Designed and implemented REST APIs to ensure seamless system communication.</li>
              <li>Created and maintained technical documentation for development teams and stakeholders.</li>
              <li>Worked with cloud-based testing environments including AWS, Citrix, Virtual Lab, and O365.</li>
            </ul>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={`${styles.job} ${styles.fixedHeight}`}>
            <h3 className={styles.jobTitle}>
              Software Analyst, Capgemini – Pune, India
            </h3>
            <span className={styles.jobDuration}><em>Sep 2022 – May 2024</em></span>
            <ul className={styles.jobList}>
              <li>Developed and maintained enterprise-level applications using Java, Spring Boot, and REST APIs.</li>
              <li>Designed and optimized SQL database queries to improve data retrieval efficiency.</li>
              <li>Provided technical solutions for McDonald’s POS systems, Kiosks, and Restaurant File Management Systems.</li>
              <li>Enhanced code quality, deployment strategies, and team collaboration in an Agile environment.</li>
              <li>Improved an automation tool for JIRA and ServiceNow integration, streamlining task synchronization.</li>
              <li>Developed data-driven insights and visualization reports using Power BI.</li>
            </ul>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Experience;
