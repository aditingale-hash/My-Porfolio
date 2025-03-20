import React from 'react';
import styles from '../css-modules/Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>Contact</h2>
      <p className={styles.info}>
        Email: <a className={styles.link} href="mailto:aditiingale20001946@gmail.com">aditiingale20001946@gmail.com</a>
      </p>
      <p className={styles.info}>
        Phone: <a className={styles.link} href="tel:+49155606799780">+49 155606799780</a>
      </p>
      <p className={styles.info}>
        LinkedIn: <a className={styles.link} href="https://www.linkedin.com/in/aditi-ashok-ingale/" target="_blank" rel="noopener noreferrer">
          Aditi Ingale
        </a>
      </p>
    </section>
  );
};

export default Contact;
