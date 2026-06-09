import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "Vanguard",
    subtitle: "Youth Entrepreneur Network",
    description: "A full-stack networking platform connecting founders, mentors, and incubators. Features include startup profile management, mentor–founder connection system, cohort-based programs, and real-time messaging.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Firebase Auth"],
    color: "from-blue-600/20 via-indigo-500/10 to-transparent",
    borderColor: "group-hover:border-blue-500/50",
    accent: "text-blue-400"
  },
  {
    id: "02",
    title: "ERP System",
    subtitle: "School Management",
    description: "A complete ERP platform for schools with multi-role access. Includes Admin, Teacher, Student, and Parent dashboards, attendance management, exams/marks system, and fee tracking.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    color: "from-emerald-600/20 via-teal-500/10 to-transparent",
    borderColor: "group-hover:border-emerald-500/50",
    accent: "text-emerald-400"
  },
  {
    id: "03",
    title: "Billing Software",
    subtitle: "Invoice & Payment Management",
    description: "Invoice and billing management system for businesses. Handles product management, invoice generation, payment tracking, and customer history.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    color: "from-purple-600/20 via-pink-500/10 to-transparent",
    borderColor: "group-hover:border-purple-500/50",
    accent: "text-purple-400"
  }
];

const Projects = () => {
  return (
    <section className="relative bg-[#050505] py-32" id="projects">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 mb-8"
            >
              <Sparkles className="w-4 h-4 text-gray-400" />
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300 font-medium">Portfolio</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-white leading-none"
            >
              Selected <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">Works.</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-light max-w-md md:text-right"
          >
            A curated collection of my most impactful projects, showcasing technical depth and design excellence.
          </motion.p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative flex flex-col gap-12 md:gap-0 pb-[10vh]">
          {projects.map((project, index) => {
            // Calculate sticky top offset to stack them nicely on desktop
            const stickyTop = `calc(15vh + ${index * 40}px)`;
            // Increase z-index for each subsequent card so they stack correctly
            const zIndex = index + 10;
            
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ top: stickyTop, zIndex }}
                className={`md:sticky w-full min-h-[500px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] bg-[#0a0a0a] border border-white/10 p-8 md:p-16 mb-12 md:mb-[30vh] overflow-hidden group shadow-2xl flex flex-col justify-between ${project.borderColor} transition-colors duration-500`}
              >
                {/* Background Gradient & Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-100 transition-opacity duration-700`}></div>
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-white/[0.04] transition-colors duration-700 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  
                  {/* Top Half */}
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-4 mb-8">
                        <span className={`font-display text-2xl font-bold tracking-widest ${project.accent}`}>
                          {project.id}
                        </span>
                        <div className="h-[2px] w-12 bg-white/20"></div>
                        <span className="text-gray-300 uppercase tracking-widest text-sm font-semibold">
                          {project.subtitle}
                        </span>
                      </div>
                      <h3 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-8 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap lg:justify-end gap-3 lg:max-w-[300px]">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs uppercase tracking-widest bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full text-gray-300 backdrop-blur-md group-hover:bg-white/[0.08] transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Half - Action Buttons */}
                  <div className="flex gap-4 mt-16 md:mt-0">
                    <button className="h-14 px-6 md:px-8 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
                      Live Preview <ArrowUpRight className="w-5 h-5" />
                    </button>
                    <button className="w-14 h-14 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <Github className="w-6 h-6 text-gray-300" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
