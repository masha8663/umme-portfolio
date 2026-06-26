import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/variables.css';
import './styles/global.css';

function App() {
  return (
    <>
      <div className="background-mesh"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Internships />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
