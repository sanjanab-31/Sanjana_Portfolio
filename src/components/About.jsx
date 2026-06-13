import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code2, Layers, Cpu, Globe, TerminalSquare } from 'lucide-react';

/* ────────────────────────────────────
   VERCEL-STYLE RAZOR SHARP CARD
   ──────────────────────────────────── */
const VercelCard = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={`relative group bg-black/60 border border-white/[0.08] p-8 md:p-10 backdrop-blur-2xl transition-colors duration-300 hover:border-white/30 hover:bg-black/80 ${className}`}
  >
    <div className="relative z-10 h-full flex flex-col">
      {children}
    </div>
  </motion.div>
);

/* ────────────────────────────────────
   ACADEMIC MILESTONES (Flat Timeline)
   ──────────────────────────────────── */
const AcademicMilestones = () => {
  const milestones = [
    {
      id: '01',
      degree: 'SSLC (Secondary School)',
      inst: 'Dr. V. Genguswamy Naidu Matric Hr Sec',
      period: '2021 — 2022',
      desc: 'Foundation of algebraic reasoning and core sciences. Achieved 97.8% board examination score.',
    },
    {
      id: '02',
      degree: 'HSC (Higher Secondary)',
      inst: 'Dr. V. Genguswamy Naidu Matric Hr Sec',
      period: '2023 — 2024',
      desc: 'Top-tier academic ranks with major emphasis on science and computing streams. Achieved 94% board examination score.',
    },
    {
      id: '03',
      degree: 'B.E. Computer Science',
      inst: 'Sri Eshwar College of Engineering',
      period: '2024 — Till Date',
      desc: 'Specializing in advanced full-stack architectures, database systems, and human-computer interaction. SGPA - 8.5%.',
    }
  ];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 pb-32">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-8 h-px bg-white/20" />
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
          Academic Milestones
        </h3>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-white/[0.08]">
        {milestones.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-r border-b border-white/[0.08] p-8 md:p-12 flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-300"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-[#71d300] tracking-widest px-3 py-1 border border-[#71d300]/30 bg-[#71d300]/10">
                  {item.period}
                </span>
                <span className="text-xs font-mono text-white/30">{item.id}</span>
              </div>
              <h4 className="text-2xl font-semibold text-white tracking-tight mb-2">
                {item.degree}
              </h4>
              <p className="text-sm font-mono text-white/40 uppercase tracking-widest mb-8">
                {item.inst}
              </p>
            </div>
            
            <p className="text-white/60 font-light leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ════════════════════════════════════
   ABOUT SECTION
   ════════════════════════════════════ */
const About = () => {
  return (
    <section id="about" className="relative w-full bg-black font-sans text-white border-t border-white/10">
      
      {/* ═══ VERCEL GRID BACKGROUND ═══ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing Orbs Behind Grid */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] right-[20%] w-[600px] h-[600px] bg-[#71d300] rounded-full blur-[200px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-violet-600 rounded-full blur-[200px]"
        />
        
        {/* SVG Grid Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: `4rem 4rem`
          }}
        />
        
        {/* Top/Bottom Fade for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* ═══ SHARP MASONRY SECTION ═══ */}
      <div className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 z-20 max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
              Behind the Code
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            About me.
          </h2>
          <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl border-l border-[#71d300] pl-6">
            Designing and developing digital experiences that are intuitive, precise, and exceptionally engineered.
          </p>
        </motion.div>

        {/* Sharp Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-l border-t border-white/[0.08]">
          
          {/* Main Bio Card (Span 2x2) */}
          <VercelCard className="md:col-span-2 md:row-span-2 border-r border-b" delay={0.1}>
            <TerminalSquare className="w-6 h-6 text-white/40 mb-12" />
            <h3 className="text-2xl md:text-4xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Aspiring <span className="text-[#71d300]">Computer Science</span> professional specializing in UI/UX and full-stack development.
            </h3>
            <p className="text-white/50 font-light text-lg leading-relaxed mb-6">
              I am passionate about creating intuitive user interfaces and impactful digital solutions. Currently learning the MERN stack, I aim to build user-focused applications by combining my technical expertise with rigorous engineering standards.
            </p>
          </VercelCard>

          {/* Location / Status Card */}
          <VercelCard className="md:col-span-1 md:row-span-1 border-r border-b" delay={0.2}>
            <div className="flex justify-between items-start mb-12">
              <Globe className="w-5 h-5 text-white/30" />
              <MapPin className="w-4 h-4 text-[#71d300]" />
            </div>
            <div>
              <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Base</p>
              <h4 className="text-lg text-white font-medium tracking-tight">Coimbatore, IND</h4>
              
              <div className="mt-8 flex items-center gap-3 border border-[#71d300]/30 bg-[#71d300]/5 w-fit px-3 py-1.5">
                <div className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#71d300] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#71d300]"></span>
                </div>
                <span className="text-[10px] font-mono text-[#71d300] uppercase tracking-widest">Available</span>
              </div>
            </div>
          </VercelCard>

          {/* Languages Card */}
          <VercelCard className="md:col-span-1 md:row-span-1 border-r border-b flex flex-col justify-center items-center text-center" delay={0.3}>
            <Layers className="w-6 h-6 text-white/30 mb-6" />
            <h4 className="text-2xl font-semibold text-white mb-2 tracking-tight">Bilingual</h4>
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest">English & Tamil</p>
          </VercelCard>

          {/* Tech Stack Highlights */}
          <VercelCard className="md:col-span-2 md:row-span-1 border-r border-b" delay={0.4}>
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="w-4 h-4 text-white/40" />
              <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest">Tech Arsenal</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {['C', 'C++', 'Python', 'Java', 'SQL', 'HTML/CSS', 'JavaScript', 'MERN Stack', 'Figma', 'Canva'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 text-xs font-mono text-white/70 border border-white/10 hover:border-white/40 hover:text-white transition-colors cursor-default bg-white/[0.02]">
                  {tech}
                </span>
              ))}
            </div>
          </VercelCard>

          {/* Core Tools Card (Span 2x1) */}
          <VercelCard className="md:col-span-2 md:row-span-1 border-r border-b" delay={0.5}>
            <div className="flex items-center gap-3 mb-8">
              <Cpu className="w-4 h-4 text-white/40" />
              <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest">Workflow & Tools</h4>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Design to Deployment</h3>
            <p className="text-white/50 font-light leading-relaxed text-sm">
              I leverage tools like <span className="text-white font-medium">Figma</span> and <span className="text-white font-medium">Canva</span> for conceptualizing and prototyping, while using <span className="text-white font-medium">VS Code</span> and <span className="text-white font-medium">GitHub</span> to write clean, maintainable code and manage version control.
            </p>
          </VercelCard>

        </div>
      </div>

      <AcademicMilestones />

    </section>
  );
};

export default About;

