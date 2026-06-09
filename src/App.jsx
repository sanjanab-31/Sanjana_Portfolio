import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-gray-200 font-sans selection:bg-white selection:text-black">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}

export default App;
