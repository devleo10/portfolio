import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Skills from './components/Skills';
import Communities from './components/Communities';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OpenSource />
      <Skills />
      <Communities />
      <Contact />
    </div>
  );
}

export default App;
