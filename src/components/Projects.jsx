import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    id: "01",
    title: "Vanguard",
    subtitle: "Youth Entrepreneur Network",
    description: "A full-stack networking platform connecting founders, mentors, and incubators. Features include startup profile management, mentor–founder connection system, cohort-based programs, and real-time messaging.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Firebase Auth"]
  },
  {
    id: "02",
    title: "ERP System",
    subtitle: "School Management",
    description: "A complete ERP platform for schools with multi-role access. Includes Admin, Teacher, Student, and Parent dashboards, attendance management, exams/marks system, and fee tracking.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"]
  },
  {
    id: "03",
    title: "Billing Software",
    subtitle: "Invoice & Payment Management",
    description: "Invoice and billing management system for businesses. Handles product management, invoice generation, payment tracking, and customer history.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"]
  }
];

const Projects = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" id="projects">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
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
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none"
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
            A curated collection of my most impactful projects, showcasing technical depth and professional execution.
          </motion.p>
        </div>

        {/* Scalable Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-mono text-xs md:text-sm tracking-widest uppercase">
                    {project.id} <span className="mx-2 text-gray-700">//</span> {project.subtitle}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                     <ArrowUpRight className="w-4 h-4 text-gray-300" />
                  </div>
                </div>

                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mt-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[11px] font-medium tracking-wide bg-white/5 px-3 py-1.5 rounded-full text-gray-400 border border-white/5 group-hover:border-white/10 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-6 mt-8 pt-6 border-t border-white/5">
                <button className="flex items-center gap-2 text-xs md:text-sm font-semibold text-white hover:text-gray-300 transition-colors group/btn">
                  Live Preview <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
                <button className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-400 hover:text-white transition-colors group/btn2">
                  GitHub <FiGithub className="w-4 h-4 transition-transform group-hover/btn2:scale-110" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
