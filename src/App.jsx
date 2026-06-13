import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Achievements from './components/Achievements';
import Patents from './components/Patents';
import CodingProfile from './components/CodingProfile';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import EntrepreneurialJourney from './components/EntrepreneurialJourney';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-black min-h-screen text-gray-200 font-sans selection:bg-white selection:text-black">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WorkExperience />
      <Achievements />
      <Patents />
      <CodingProfile />
      <WhyWorkWithMe />
      <EntrepreneurialJourney />
      <Contact />
    </main>
  );
}

export default App;
