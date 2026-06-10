import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  // Subtle parallax effect on scroll
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 w-full">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-50">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl font-bold tracking-tighter"
        >
          SB<span className="text-gray-500">.</span>
        </motion.div>
        
        <motion.a 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          href="/resume.pdf"
          download
          className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm"
        >
          <Download size={16} />
          Resume
        </motion.a>
      </nav>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col items-center mt-12">
        
        {/* Intro Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl font-light mb-6 md:mb-2 text-center flex items-center justify-center gap-2"
        >
          <span className="text-2xl">👋</span> my name is Sanjana B and I am a
        </motion.p>
        
        {/* Massive Typography Group */}
        <div className="relative w-full flex flex-col items-center justify-center text-center leading-[0.85] tracking-wide">
          
          <motion.h1 
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[16vw] md:text-[14vw] lg:text-[12vw] font-normal uppercase text-white z-20 m-0 p-0 whitespace-nowrap"
          >
            FULL-STACK
          </motion.h1>

          <motion.h1 
            style={{ y: y2 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[14vw] md:text-[12vw] lg:text-[11vw] font-normal uppercase text-outline z-10 m-0 p-0 whitespace-nowrap"
          >
            & UI/UX DESIGNER
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-emerald-400 font-medium tracking-widest uppercase text-sm md:text-base mt-4"
          >
            Co-Founder & CTO @ Technovanam
          </motion.p>

        </div>
        
        {/* Footer info in Hero */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full flex flex-col md:flex-row justify-between items-center md:items-end mt-16 md:mt-24 px-4 text-center md:text-left gap-6"
        >
          <p className="text-gray-400 text-lg md:text-xl font-light">
            based in Coimbatore, India.
          </p>
          <p className="max-w-xl text-gray-500 text-sm md:text-base font-light text-center md:text-right">
            Passionate about building impactful digital products, creating scalable web applications, intuitive user experiences, and innovative technology solutions that solve real-world problems.
          </p>
        </motion.div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
