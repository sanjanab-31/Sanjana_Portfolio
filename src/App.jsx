import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Founder from './components/Founder';
import NavigationRail from './components/NavigationRail';

function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-gray-200 font-sans selection:bg-white selection:text-black">
      <NavigationRail />
      <Hero />
      <About />
      <Founder />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}

export default App;
