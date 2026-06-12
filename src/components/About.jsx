import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  Briefcase,
  User,
  Cpu,
  Database,
  Globe,
  Terminal
} from 'lucide-react';

const About = () => {
  const education = [
    {
      id: 'EDU-01',
      degree: 'B.E. Computer Science & Eng.',
      inst: 'Sri Eshwar College of Engineering',
      period: '2024 — 2028',
      status: 'SYS.ACTIVE',
      gpa: 'CGPA: 8.3/10',
      desc: 'Specializing in advanced full-stack architectures, db systems, and human-computer interaction.'
    },
    {
      id: 'EDU-02',
      degree: 'HSC & SSLC',
      inst: 'Dr. V. Genguswamy Naidu Matric Hr Sec',
      period: 'Grad. 2024',
      status: 'SYS.ARCHIVED',
      gpa: 'HSC: 94% | SSLC: 97.8%',
      desc: 'Top-tier academic ranks with major emphasis on science, computing streams, and algebraic reasoning.'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#050505] noise-overlay" id="about">
      {/* ═══ AMBIENT BACKGROUND ═══ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/12 w-[500px] h-[500px] bg-[#71d300]/[0.04] rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/12 w-[400px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 opacity-30">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#71d300]/20 to-transparent animate-scanline" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* ═══ HEADER ═══ */}
        <div className="mb-16 flex flex-col items-center md:items-start">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-[#71d300] mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold">System.Profile()</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-normal text-white uppercase tracking-wide leading-none text-center md:text-left"
          >
            Bridging <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>Engineering</span> <br className="hidden md:block"/>
            & Intuition.
          </motion.h2>
        </div>

        {/* ═══ BENTO GRID ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ── 1. BIO CORE (Spans 2 cols on tablet/desktop) ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-8 md:p-10 hover:border-white/20 transition-all duration-500"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#71d300]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#71d300]/30 transition-colors">
                  <User className="w-5 h-5 text-gray-400 group-hover:text-[#71d300] transition-colors" />
                </div>
                <h3 className="text-xl font-grotesk text-white mb-4">Core Directives</h3>
                <p className="text-gray-400 font-light leading-relaxed text-base md:text-lg">
                  Focusing on holistic product architecture, I build clean frontend interfaces and efficient backend logic. I treat code as a medium to create digital systems that are both highly performant and aesthetically premium. My work lies at the intersection of pixel-perfect design and robust system engineering.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── 2. COORDINATES (1 col) ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-8 flex flex-col items-center justify-center text-center hover:border-white/20 transition-all duration-500 min-h-[250px]"
          >
            {/* Radar Animation Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <div className="w-48 h-48 border border-[#71d300]/30 rounded-full absolute" />
              <div className="w-32 h-32 border border-[#71d300]/20 rounded-full absolute" />
              <div className="w-full h-px bg-[#71d300]/20 absolute" />
              <div className="h-full w-px bg-[#71d300]/20 absolute" />
              {/* Sweeping line */}
              <div className="absolute w-24 h-24 border-r-2 border-[#71d300] rounded-full animate-spin-slow origin-bottom-left" style={{ top: '50%', left: '50%', marginTop: '-6rem', marginLeft: '-6rem' }} />
            </div>

            <MapPin className="w-8 h-8 text-[#71d300] mb-4 relative z-10" />
            <h3 className="text-lg font-grotesk text-white relative z-10">Coimbatore, IND</h3>
            <p className="text-xs font-mono text-gray-500 mt-2 tracking-widest uppercase relative z-10">Base Location</p>
          </motion.div>

          {/* ── 3. CURRENT PROTOCOL (1 col) ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-8 hover:border-[#71d300]/30 transition-all duration-500"
          >
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
              <Briefcase className="w-5 h-5 text-gray-400 group-hover:text-[#71d300] transition-colors" />
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Current Protocol</p>
                <h3 className="text-white font-grotesk text-lg">Full-Stack Dev & UI/UX</h3>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Venture</p>
                <h3 className="text-white font-grotesk text-lg flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#71d300]" />
                  Technovanam
                </h3>
              </div>
            </div>
          </motion.div>

          {/* ── 4. KNOWLEDGE MODULES (Education) (Spans 2 cols) ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 relative rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-sm p-6 md:p-8 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Database className="w-5 h-5 text-[#71d300]" />
              <h3 className="text-lg font-grotesk text-white">Knowledge Databanks</h3>
              <span className="ml-auto text-[10px] font-mono text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">2 Modules Found</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.map((edu, idx) => (
                <div 
                  key={edu.id}
                  className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:bg-[#71d300]/[0.02] transition-all duration-300 hover:border-[#71d300]/20 hover:-translate-y-1"
                >
                  {/* Glowing Edge on Hover */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#71d300]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[10px] font-mono px-2 py-1 rounded border ${edu.status === 'SYS.ACTIVE' ? 'text-[#71d300] bg-[#71d300]/10 border-[#71d300]/20' : 'text-gray-400 bg-white/5 border-white/10'}`}>
                      {edu.status}
                    </span>
                    <span className="text-xs font-mono text-gray-500">{edu.id}</span>
                  </div>

                  <h4 className="text-white font-grotesk text-lg mb-1">{edu.degree}</h4>
                  <p className="text-sm text-gray-400 font-medium mb-4">{edu.inst}</p>
                  
                  {/* Stats Bar */}
                  <div className="flex items-center gap-3 text-xs font-mono text-gray-500 mb-4 bg-white/5 p-2 rounded">
                    <Terminal className="w-3 h-3" />
                    <span>{edu.period}</span>
                    <span className="w-px h-3 bg-white/20" />
                    <span className="text-gray-300">{edu.gpa}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {edu.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
