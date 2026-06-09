import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, PenTool, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <Layers className="w-6 h-6 text-indigo-400" />,
    skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
    bg: "from-indigo-500/10 to-transparent",
    border: "group-hover:border-indigo-500/30"
  },
  {
    title: "Backend & Database",
    icon: <Server className="w-6 h-6 text-emerald-400" />,
    skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "SQL", "Firebase", "REST APIs"],
    bg: "from-emerald-500/10 to-transparent",
    border: "group-hover:border-emerald-500/30"
  },
  {
    title: "Design & UI/UX",
    icon: <PenTool className="w-6 h-6 text-rose-400" />,
    skills: ["Figma", "Wireframing", "Canva", "Prototyping", "User Research"],
    bg: "from-rose-500/10 to-transparent",
    border: "group-hover:border-rose-500/30"
  },
  {
    title: "Tools & Core",
    icon: <Wrench className="w-6 h-6 text-amber-400" />,
    skills: ["Git", "GitHub", "Vercel", "C Programming", "Authentication", "Deployment"],
    bg: "from-amber-500/10 to-transparent",
    border: "group-hover:border-amber-500/30"
  }
];

const Skills = () => {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden" id="skills">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-white/30"></div>
              <span className="text-sm uppercase tracking-widest text-gray-400 font-medium">Expertise</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight">
              Technical <br className="hidden md:block" /><span className="text-gray-500">Arsenal</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-light max-w-md md:text-right"
          >
            A curated list of tools and technologies I use to bring digital products to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/5 p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.04] ${category.border}`}
            >
              {/* Subtle gradient background for each card */}
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${category.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white tracking-wide">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-auto">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-4 py-2 rounded-full text-sm font-medium border border-white/10 bg-white/5 text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
