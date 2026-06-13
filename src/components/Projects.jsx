import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

/* ────────────────────────────────────
   VERCEL-STYLE PROJECT BLOCK
   ──────────────────────────────────── */
const ProjectBlock = ({ num, date, year, yearSubtext, title, desc, tech, yearScale, yearOpacity, contentX, contentOpacity, timelineOrientation }) => {
  return (
    <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 relative">
        
        {/* YEAR / DATE / NUM (Sharp Geometric) */}
        <motion.div 
          style={{ scale: yearScale, opacity: yearOpacity }}
          className={`flex flex-col ${timelineOrientation === 'horizontal-top' ? 'md:-translate-y-20' : 'md:translate-y-0'} z-10 w-full md:w-auto shrink-0 border-l border-white/10 pl-8 relative`}
        >
          {/* Timeline Connector Line */}
          <div className="absolute top-1/2 -left-[1px] w-[1px] h-32 bg-[#71d300] -translate-y-1/2" />

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-sm font-mono text-[#71d300] uppercase tracking-widest">{date}</span>
          </div>
          <h3 className="text-7xl md:text-8xl lg:text-[120px] font-bold text-white tracking-tighter leading-none mb-4">
            {year}
          </h3>
          <p className="text-xs font-mono text-white/40 tracking-[0.2em] whitespace-pre-line leading-relaxed uppercase">
            {yearSubtext}
          </p>
          <div className="absolute -top-12 left-0 text-[10px] font-mono text-white/20 tracking-[0.3em]">
            PROJ // {num}
          </div>
        </motion.div>

        {/* CONTENT CARD (Vercel Style) */}
        <motion.div 
          style={{ x: contentX, opacity: contentOpacity }}
          className="w-full max-w-3xl z-20 flex flex-col justify-center"
        >
          <div className="bg-black/80 backdrop-blur-3xl border border-white/10 p-8 md:p-12 transition-colors duration-300 hover:border-white/30 group">
            {/* Minimalist Top Bar */}
            <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
              <span className="text-xs font-mono text-[#71d300] tracking-widest bg-[#71d300]/10 px-3 py-1 border border-[#71d300]/20">
                LATEST WORK
              </span>
              <div className="flex gap-4">
                <FaGithub className="w-5 h-5 text-white/40 hover:text-white transition-colors cursor-pointer" />
                <ExternalLink className="w-5 h-5 text-white/40 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>

            <h4 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight group-hover:text-[#71d300] transition-colors duration-300">
              {title}
            </h4>
            
            <p className="text-white/50 text-lg font-light leading-relaxed mb-10">
              {desc}
            </p>

            {/* Sharp Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <span key={i} className="text-xs font-mono text-white/60 uppercase tracking-widest border border-white/10 bg-white/[0.02] px-4 py-2 hover:border-white/30 hover:text-white transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

/* ════════════════════════════════════
   PROJECTS SECTION
   ════════════════════════════════════ */
const Projects = () => {
  const containerRef = useRef(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Project 1 animations
  const p1YearScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]);
  const p1YearOpacity = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);
  const p1ContentX = useTransform(scrollYProgress, [0, 0.25], ["0%", "-100%"]);
  const p1ContentOpacity = useTransform(scrollYProgress, [0.1, 0.25], [1, 0]);

  // Project 2 animations
  const p2YearScale = useTransform(scrollYProgress, [0.2, 0.35, 0.6], [0.8, 1, 0.8]);
  const p2YearOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const p2ContentX = useTransform(scrollYProgress, [0.2, 0.35, 0.6], ["100%", "0%", "-100%"]);
  const p2ContentOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.5, 0.6], [0, 1, 1, 0]);

  // Project 3 animations
  const p3YearScale = useTransform(scrollYProgress, [0.55, 0.7, 1], [0.8, 1, 1]);
  const p3YearOpacity = useTransform(scrollYProgress, [0.55, 0.7, 1], [0, 1, 1]);
  const p3ContentX = useTransform(scrollYProgress, [0.55, 0.7, 1], ["100%", "0%", "0%"]);
  const p3ContentOpacity = useTransform(scrollYProgress, [0.55, 0.7, 1], [0, 1, 1]);

  return (
    <section id="projects" ref={containerRef} className="relative w-full h-[400vh] bg-black font-sans">
      
      {/* Vercel Grid Background & Sticky Section Header */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pointer-events-none">
        
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

        <div className="absolute top-24 left-6 md:left-12 lg:left-24 z-30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
              Selected Projects
            </span>
          </div>
        </div>

      </div>

      <div className="absolute top-0 left-0 w-full z-20">
        
        {/* PROJECT 01 */}
        <ProjectBlock
          num="01" date="" year="2024" yearSubtext={"UI/UX\nPROTOTYPE"} title="Tech Sphere"
          desc="Created and prototyped a contemporary tech-savvy website prioritizing simplicity, readability, and user interaction. The site featured dedicated pages for events, new media, and product exhibitions."
          tech={["Figma", "UI/UX Design", "Prototyping"]}
          yearScale={p1YearScale} yearOpacity={p1YearOpacity} contentX={p1ContentX} contentOpacity={p1ContentOpacity}
          timelineOrientation="vertical-left"
        />

        {/* PROJECT 02 */}
        <ProjectBlock
          num="02" date="" year="2024" yearSubtext={"FULL-STACK\nWEB APP"} title="Athlixir Website"
          desc="Created a complete-stack responsive web application for Athlixir, an actual-world solution to athlete performance management and sports event participation."
          tech={["React.js", "Tailwind CSS", "Node.js", "MongoDB"]}
          yearScale={p2YearScale} yearOpacity={p2YearOpacity} contentX={p2ContentX} contentOpacity={p2ContentOpacity}
          timelineOrientation="horizontal-top"
        />

        {/* PROJECT 03 */}
        <ProjectBlock
          num="03" date="" year="2023" yearSubtext={"MERN STACK\nAPPLICATION"} title="Billing Software"
          desc="Developed a full-stack billing and invoicing system. Implemented secure authentication, product/service management, invoice generation, and real-time payment tracking."
          tech={["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"]}
          yearScale={p3YearScale} yearOpacity={p3YearOpacity} contentX={p3ContentX} contentOpacity={p3ContentOpacity}
          timelineOrientation="vertical-left"
        />
        
      </div>
    </section>
  );
};

export default Projects;
