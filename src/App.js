import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Project from './components/Project';
import Experience from './components/Experience';
import Education from './components/Education';
import Skillset from './components/Skillset';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <section id="home">
        <Hero />
      </section>
      
      <section id="summary">
      <Summary/>
      </section>

    
      <section id="link1">
        <Experience />
      </section>

      <section id="link2">
        <Education />
      </section>
      <section id="link3">
        <Skillset />
      </section>
      <section id="link4">
      <Project />
      </section>
      <section id="link5">
      <Certifications/>
      </section>
    
    <Footer/>
  </div>
  );
}

export default App;
