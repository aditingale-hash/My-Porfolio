import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../css-modules/Header.module.css';
import { FaFileDownload, FaUser, FaBriefcase, FaGraduationCap, FaCode, FaProjectDiagram, FaCertificate } from 'react-icons/fa';

const Header = () => {
  // Function to handle resume download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + "/Aditi_Ashok_Ingale-Resume.pdf"; // Ensure resume is in the public folder
    link.download = "Aditi_Ashok_Ingale-Resume.pdf"; // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Row className="w-100 align-items-center">
          <Col className="d-flex justify-content-between align-items-center">
            {/* Logo & Brand */}
            <Navbar.Brand href="#home" className={styles.brand}>
              <span className={styles.logoIcon}>🌸</span> Aditi Ingale
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggle} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#summary" className={styles.navLink}><FaUser className={styles.icon} /> Profile Summary</Nav.Link>
                <Nav.Link href="#link1" className={styles.navLink}><FaBriefcase className={styles.icon} /> Work Experience</Nav.Link>
                <Nav.Link href="#link2" className={styles.navLink}><FaGraduationCap className={styles.icon} /> Education</Nav.Link>
                <Nav.Link href="#link3" className={styles.navLink}><FaCode className={styles.icon} /> Skill Sets</Nav.Link>
                <Nav.Link href="#link4" className={styles.navLink}><FaProjectDiagram className={styles.icon} /> Projects</Nav.Link>
                <Nav.Link href="#link5" className={styles.navLink}><FaCertificate className={styles.icon} /> Certifications</Nav.Link>

                {/* Download Resume Button */}
                <Button variant="outline-light" className={styles.downloadBtn} onClick={handleDownload}>
                  <FaFileDownload /> Download Resume
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
