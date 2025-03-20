import React, { useState } from 'react';
import styles from '../css-modules/Hero.module.css';
import Image from 'react-bootstrap/Image';
import { FaLaptopCode, FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <section 
      id="hero" 
      className={`${styles.hero} ${isHighlighted ? styles.highlight : ''}`}
      onMouseEnter={() => setIsHighlighted(true)}
      onMouseLeave={() => setIsHighlighted(false)}
    >
      <div className={styles.heroContent}>
        {/* Profile Image */}
        <Image 
        src={`${process.env.PUBLIC_URL}/Aditi_1.jpg`} 
         // src="my-portfolio/public/Aditi 1.jpg"
          roundedCircle
          className={styles.profileImg}
        />

        {/* Name and Role */}
        <h1 className={styles.title}>Aditi Ashok Ingale</h1>
        <h2 className={styles.subtitle}>
          <FaLaptopCode className={styles.icon} /> Software Engineer
        </h2>

        {/* Location */}
        <p className={styles.location}>
          <FaMapMarkerAlt className={styles.icon} /> Germany
        </p>

        {/* Contact Information */}
        <p className={styles.contact}>
          <a className={styles.link} href="mailto:aditiingale20001946@gmail.com">
            <FaEnvelope className={styles.icon} /> aditiingale20001946@gmail.com
          </a>
          {'  '}|{'  '}
          <a className={styles.link} href="tel:+49155606799780">
            <FaPhone className={styles.icon} /> +49 155606799780
          </a>
        </p>

        {/* Social Links */}
        <p className={styles.contact}>
          <a className={styles.link} href="https://www.linkedin.com/in/aditi-ashok-ingale/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} /> LinkedIn Profile
          </a>
          {'  '}|{'  '}
          <a className={styles.link} href="https://github.com/aditingale-hash" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} /> GitHub Profile
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
