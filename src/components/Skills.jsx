import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiFramer, SiExpress, SiPostgresql, SiMongodb, SiFirebase, SiFigma, SiCanva, SiC, SiVercel, SiMysql } from 'react-icons/si';
import { Layers, ChevronRight } from 'lucide-react';

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "text-[#61DAFB] group-hover:text-gray-500" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E] group-hover:text-gray-500" },
      { name: "HTML5", icon: <FaHtml5 />, color: "text-[#E34F26] group-hover:text-gray-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-[#1572B6] group-hover:text-gray-500" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4] group-hover:text-gray-500" },
      { name: "Framer", icon: <SiFramer />, color: "text-white group-hover:text-gray-500" },
    ]
  },
  {
    id: "backend",
    title: "Backend Engineering",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-[#339933] group-hover:text-gray-500" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-300 group-hover:text-gray-500" },
    ]
  },
  {
    id: "database",
    title: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#4169E1] group-hover:text-gray-500" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248] group-hover:text-gray-500" },
      { name: "SQL", icon: <SiMysql />, color: "text-[#4479A1] group-hover:text-gray-500" },
      { name: "Firebase", icon: <SiFirebase />, color: "text-[#FFCA28] group-hover:text-gray-500" },
    ]
  },
  {
    id: "design",
    title: "Design & Prototyping",
    skills: [
      { name: "Figma", icon: <SiFigma />, color: "text-[#F24E1E] group-hover:text-gray-500" },
      { name: "Canva", icon: <SiCanva />, color: "text-[#00C4CC] group-hover:text-gray-500" },
    ]
  },
  {
    id: "tools",
    title: "Core & Tools",
    skills: [
      { name: "C Prog.", icon: <SiC />, color: "text-[#A8B9CC] group-hover:text-gray-500" },
      { name: "Git", icon: <FaGitAlt />, color: "text-[#F05032] group-hover:text-gray-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white group-hover:text-gray-500" },
      { name: "Vercel", icon: <SiVercel />, color: "text-white group-hover:text-gray-500" },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" id="skills">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Subtle Grid Pattern overlay for texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Headings & Categories */}
        <div className="w-full flex-1 flex flex-col">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md self-start mb-6"
          >
            <Layers className="w-4 h-4 text-gray-400" />
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300 font-medium">Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none mb-6"
          >
            Technical <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Arsenal.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg font-light leading-relaxed mb-16 max-w-md"
          >
            Hover over a category below to reveal the specific instruments I utilize for digital creation.
          </motion.p>

          {/* Interactive Category List */}
          <div className="flex flex-col gap-6 ml-4 lg:ml-12 mt-4">
            {skillCategories.map((cat, idx) => {
              const isActive = activeCategory.id === cat.id;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
                  onMouseEnter={() => setActiveCategory(cat)}
                  onClick={() => setActiveCategory(cat)}
                  className={`group flex items-center gap-4 cursor-pointer py-2 transition-all duration-300 ${isActive ? 'translate-x-4' : 'hover:translate-x-2'}`}
                >
                  <div className={`w-12 h-[1px] transition-all duration-300 ${isActive ? 'bg-white' : 'bg-white/20 group-hover:bg-white/50'}`}></div>
                  <h3 className={`text-2xl md:text-3xl font-display tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-300'}`}>
                    {cat.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Icons Grid */}
        <div className="w-full flex-1 flex items-center justify-center lg:justify-center lg:mt-32">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory.id}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 w-full"
            >
              {activeCategory.skills.map((skill, idx) => (
                <div 
                  key={idx}
                  className="group relative flex flex-col items-center justify-center gap-5 p-8 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500"
                >
                  {/* Half Borders Construction - Reversed */}
                  {/* Top-Left Corner */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40 transition-all duration-500 group-hover:w-6 group-hover:bg-white/20"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-full bg-white/40 transition-all duration-500 group-hover:h-6 group-hover:bg-white/20"></div>
                  
                  {/* Bottom-Right Corner */}
                  <div className="absolute bottom-0 right-0 w-full h-[1px] bg-white/40 transition-all duration-500 group-hover:w-6 group-hover:bg-white/20"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-full bg-white/40 transition-all duration-500 group-hover:h-6 group-hover:bg-white/20"></div>

                  {/* Skill Icon */}
                  <div className={`text-4xl md:text-5xl transition-all duration-500 transform scale-110 group-hover:scale-100 ${skill.color}`}>
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <span className="text-sm font-medium tracking-wide text-white group-hover:text-gray-500 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
