import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code } from 'lucide-react';

const Projects = () => {
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

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="h-[1px] bg-white/20 flex-grow mr-8 hidden md:block"></div>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-right">
            Selected<span className="text-outline"> Works</span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16"
            >
              <div className="lg:w-1/3 flex flex-col justify-between">
                <div>
                  <span className="text-gray-600 font-display text-6xl md:text-8xl font-black block mb-4">{project.id}</span>
                  <h3 className="text-3xl md:text-5xl font-bold mb-2 uppercase tracking-tighter">{project.title}</h3>
                  <p className="text-xl text-gray-400 font-light mb-6">{project.subtitle}</p>
                </div>
                
                <div className="hidden lg:flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full text-gray-400 group-hover:border-white/30 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/3 border border-white/10 rounded-2xl p-8 md:p-12 bg-white/[0.02] backdrop-blur-sm group-hover:bg-white/[0.04] transition-colors flex flex-col justify-between">
                <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12">
                  {project.description}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mt-auto">
                  <div className="flex lg:hidden flex-wrap gap-2 mb-4 sm:mb-0">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-white text-gray-400 transition-colors">
                      <Code size={18} /> Code
                    </button>
                    <button className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-white text-gray-400 transition-colors">
                      <ArrowUpRight size={18} /> Live Site
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
