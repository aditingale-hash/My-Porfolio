import React from 'react';
import styles from '../css-modules/Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>&copy; 2025 Aditi Ingale. All rights reserved.</p>

        {/* Social Links */}
        <div className={styles.socialLinks}>
          <a href="mailto:aditiingale20001946@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/aditi-ashok-ingale/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://github.com/aditingale-hash" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
