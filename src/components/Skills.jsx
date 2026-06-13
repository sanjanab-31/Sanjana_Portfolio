import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaJava, FaPython } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiFigma, SiCanva, SiC, SiCplusplus, SiMysql } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { HiOutlineTranslate } from "react-icons/hi";

const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: [
      { name: "C", icon: <SiC />, color: "text-[#A8B9CC] group-hover:text-white" },
      { name: "Python", icon: <FaPython />, color: "text-[#3776AB] group-hover:text-white" },
      { name: "C++", icon: <SiCplusplus />, color: "text-[#00599C] group-hover:text-white" },
      { name: "Java", icon: <FaJava />, color: "text-[#007396] group-hover:text-white" },
      { name: "SQL", icon: <SiMysql />, color: "text-[#4479A1] group-hover:text-white" },
    ]
  },
  {
    id: "web",
    title: "Web Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, color: "text-[#E34F26] group-hover:text-white" },
      { name: "CSS", icon: <FaCss3Alt />, color: "text-[#1572B6] group-hover:text-white" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E] group-hover:text-white" },
      { name: "React.js", icon: <FaReact />, color: "text-[#61DAFB] group-hover:text-white" },
      { name: "Node.js", icon: <FaNodeJs />, color: "text-[#339933] group-hover:text-white" },
      { name: "Express.js", icon: <SiExpress />, color: "text-white/50 group-hover:text-white" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248] group-hover:text-white" },
    ]
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Figma", icon: <SiFigma />, color: "text-[#F24E1E] group-hover:text-white" },
      { name: "Canva", icon: <SiCanva />, color: "text-[#00C4CC] group-hover:text-white" },
      { name: "VS Code", icon: <VscVscode />, color: "text-[#007ACC] group-hover:text-white" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white/80 group-hover:text-white" },
    ]
  },
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "English", icon: <HiOutlineTranslate />, color: "text-white/80 group-hover:text-white" },
      { name: "Tamil", icon: <HiOutlineTranslate />, color: "text-white/80 group-hover:text-white" },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-black py-32 font-sans border-t border-white/10">
      
      {/* VERCEL GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: `4rem 4rem`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-white/20" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
                Competencies
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Technical Skills.
            </h2>
          </div>
          <p className="text-white/50 font-light max-w-md border-l border-[#71d300] pl-6 text-sm">
            A comprehensive overview of my technical capabilities, languages, and the tools I use to build robust digital solutions.
          </p>
        </motion.div>

        {/* Sharp Masonry/Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-l border-t border-white/[0.08]">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-r border-b border-white/[0.08] p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-white/30">0{idx + 1}</span>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.1) + (sIdx * 0.05) }}
                    className="group flex items-center gap-3 px-4 py-3 border border-white/10 bg-black/40 hover:border-[#71d300]/50 hover:bg-[#71d300]/5 transition-all cursor-default"
                  >
                    <div className={`text-xl transition-colors duration-300 ${skill.color} grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100`}>
                      {skill.icon}
                    </div>
                    <span className="text-sm font-mono text-white/60 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
