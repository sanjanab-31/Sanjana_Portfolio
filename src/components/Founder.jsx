import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Briefcase, Target, Users, Code, Lightbulb, Rocket, ChevronRight, Zap, Globe, Layers } from 'lucide-react';

const responsibilities = [
  { icon: Code, label: 'Product Architecture', angle: 0 },
  { icon: Target, label: 'UI/UX Leadership', angle: 60 },
  { icon: Users, label: 'Team Guidance', angle: 120 },
  { icon: Lightbulb, label: 'Product Strategy', angle: 180 },
  { icon: Briefcase, label: 'Tech Implementation', angle: 240 },
  { icon: Rocket, label: 'Startup Innovation', angle: 300 },
];

const storyChapters = [
  {
    num: '01',
    title: 'The Spark',
    text: 'My journey into technology began with curiosity and a desire to understand how digital products are built. Over time, that curiosity evolved into a passion for designing experiences and solving real-world challenges.',
  },
  {
    num: '02',
    title: 'The Purpose',
    text: 'As I explored web development and UI/UX design, I realized that technology has the power to create opportunities, improve lives, and solve meaningful problems when built with purpose.',
  },
  {
    num: '03',
    title: 'The Venture',
    text: 'This belief led me to become the Co-Founder and CTO of Technovanam — where I oversee technical vision, product architecture, user experience design, and technical strategy.',
  },
];

const Founder = () => {
  const sectionRef = useRef(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const [orbitalHover, setOrbitalHover] = useState(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 0.6, 0]);

  // Auto cycle chapters
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChapter((prev) => (prev + 1) % storyChapters.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" id="founder">
      
      {/* ═══ AMBIENT BACKGROUND EFFECTS ═══ */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Emerald glow orb */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[180px]"
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      {/* ═══ SECTION 1: CINEMATIC HEADER ═══ */}
      <div className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Oversized decorative number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -top-4 right-8 md:right-24 select-none pointer-events-none"
          >
            <span
              className="text-[20vw] md:text-[15vw] font-display font-bold text-transparent"
              style={{ WebkitTextStroke: '1px rgba(16, 185, 129, 0.08)' }}
            >
              CTO
            </span>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-400" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-emerald-400">
              Leadership & Entrepreneurship
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-400" />
          </motion.div>

          {/* Main heading — editorial typography */}
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-8xl lg:text-[9rem] font-bold uppercase tracking-tight text-white leading-[0.85]"
            >
              Co-Founder
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-4 md:gap-6 mt-2 md:mt-4"
            >
              <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-emerald-500 to-transparent" />
              <h2
                className="font-display text-5xl md:text-7xl lg:text-[8rem] font-bold uppercase tracking-tight leading-[0.85]"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(16, 185, 129, 0.5)',
                }}
              >
                & CTO
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-sm md:text-base text-gray-500 font-mono tracking-widest uppercase mt-4 md:mt-6"
            >
              @ Technovanam
            </motion.p>
          </div>
        </div>
      </div>

      {/* ═══ SECTION 2: STORY CHAPTERS — Stacked interactive chapters ═══ */}
      <div className="relative px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          
          {/* Left: Chapter selectors */}
          <div className="space-y-2">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono uppercase tracking-[0.3em] text-gray-600 mb-8"
            >
              The Origin Story
            </motion.h3>
            
            {storyChapters.map((chapter, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveChapter(idx)}
                className={`group w-full text-left flex items-start gap-4 p-5 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeChapter === idx
                    ? 'bg-white/[0.04] border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.05)]'
                    : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5'
                }`}
              >
                <span
                  className={`text-xs font-mono mt-1 transition-colors duration-300 ${
                    activeChapter === idx ? 'text-emerald-400' : 'text-gray-700'
                  }`}
                >
                  {chapter.num}
                </span>
                <div>
                  <h4
                    className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                      activeChapter === idx ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {chapter.title}
                  </h4>
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeChapter === idx ? 'auto' : 0,
                      opacity: activeChapter === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm leading-relaxed font-light pt-2">
                      {chapter.text}
                    </p>
                  </motion.div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 ml-auto mt-1.5 shrink-0 transition-all duration-300 ${
                    activeChapter === idx
                      ? 'text-emerald-400 rotate-90'
                      : 'text-gray-700 rotate-0'
                  }`}
                />
              </motion.button>
            ))}

            {/* Progress bar */}
            <div className="flex gap-2 pt-6 px-5">
              {storyChapters.map((_, idx) => (
                <div key={idx} className="flex-1 h-0.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full bg-emerald-500 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{
                      width: activeChapter === idx ? '100%' : activeChapter > idx ? '100%' : '0%',
                    }}
                    transition={{
                      duration: activeChapter === idx ? 5 : 0.3,
                      ease: 'linear',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quote & Vision manifesto */}
          <div className="space-y-12">
            {/* Featured Quote — Glassmorphic floating card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/10 blur-sm" />
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
                {/* Decorative quotation mark */}
                <div className="absolute top-4 right-6 text-[120px] leading-none font-serif text-emerald-500/5 pointer-events-none select-none">
                  "
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-1 h-12 rounded-full bg-gradient-to-b from-emerald-400 to-teal-600 shrink-0" />
                  <p className="text-xl md:text-2xl text-gray-200 font-light italic leading-relaxed">
                    Technology becomes meaningful when it creates opportunities, solves real problems, and empowers people to achieve their goals.
                  </p>
                </div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-500/60 text-right">
                  — Sanjana B
                </p>
              </div>
            </motion.div>

            {/* Vision card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative group"
            >
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-10 hover:border-emerald-500/20 transition-colors duration-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-emerald-500/10">
                    <Globe className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Vision</h3>
                </div>
                <p className="text-gray-400 font-light leading-relaxed">
                  I aspire to become a technology entrepreneur who builds impactful digital products capable of solving meaningful problems at scale. My long-term vision is to grow Technovanam into a technology company recognized for innovation, product excellence, and social impact — while continuing to explore emerging technologies, product engineering, and human-centered design.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══ SECTION 3: ORBITAL RESPONSIBILITIES ═══ */}
      <div className="relative px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-600 mb-4">
              What I Do @ Technovanam
            </h3>
            <p className="text-3xl md:text-4xl font-bold text-white">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Responsibilities</span>
            </p>
          </motion.div>

          {/* Orbital ring — desktop */}
          <div className="hidden md:flex items-center justify-center relative" style={{ height: '500px' }}>
            {/* Central element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className="absolute z-20 flex flex-col items-center justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-emerald-500/5 blur-2xl" />
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-500/30 flex flex-col items-center justify-center backdrop-blur-sm">
                  <Rocket className="w-8 h-8 text-emerald-400 mb-1" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300">CTO</span>
                </div>
              </div>
            </motion.div>

            {/* Orbital ring path */}
            <motion.div
              initial={{ opacity: 0, rotate: -30 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-white/5"
            />

            {/* Responsibility nodes */}
            {responsibilities.map((item, idx) => {
              const radius = 210;
              const angleRad = (item.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;
              const Icon = item.icon;
              const isHovered = orbitalHover === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5, type: 'spring' }}
                  onMouseEnter={() => setOrbitalHover(idx)}
                  onMouseLeave={() => setOrbitalHover(null)}
                  className="absolute z-10 cursor-pointer"
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,
                    top: `calc(50% + ${y}px - 32px)`,
                  }}
                >
                  {/* Connector line to center */}
                  <svg
                    className="absolute pointer-events-none"
                    style={{
                      width: Math.abs(x) + 40,
                      height: Math.abs(y) + 40,
                      left: x < 0 ? 32 : -(Math.abs(x)),
                      top: y < 0 ? 32 : -(Math.abs(y)),
                    }}
                  >
                    <line
                      x1={x < 0 ? Math.abs(x) : 0}
                      y1={y < 0 ? Math.abs(y) : 0}
                      x2={x < 0 ? 0 : Math.abs(x)}
                      y2={y < 0 ? 0 : Math.abs(y)}
                      stroke={isHovered ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.03)'}
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      style={{ transition: 'stroke 0.3s' }}
                    />
                  </svg>

                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className={`relative w-16 h-16 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? 'bg-emerald-500/15 border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)]'
                        : 'bg-white/[0.03] border border-white/5'
                    }`}
                  >
                    <Icon className={`w-5 h-5 transition-colors duration-300 ${isHovered ? 'text-emerald-400' : 'text-gray-500'}`} />
                  </motion.div>

                  {/* Label tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap"
                      >
                        <span className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-xs text-white font-medium">
                          {item.label}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile — Horizontal scroll cards */}
          <div className="md:hidden flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
            {responsibilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="snap-center shrink-0 w-32 bg-white/[0.03] border border-white/5 rounded-2xl p-5 flex flex-col items-center gap-3"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-xs text-center text-gray-400 font-medium leading-tight">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══ SECTION 4: TECHNOVANAM ROLE CARD — Immersive full-width ═══ */}
      <div className="relative px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/5"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-[#050505] to-teal-950/20" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10 p-8 md:p-14 lg:p-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Left: Title & Description */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <Zap className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400/80">Current Role</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                    Technovanam
                  </h3>
                  <p className="text-emerald-400 font-medium text-lg mb-8">
                    Co-Founder & Chief Technology Officer
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed text-lg">
                    As CTO of Technovanam, I lead technical development, product architecture, UI/UX strategy, and innovation initiatives — transforming innovative ideas into practical solutions that people can use and benefit from.
                  </p>
                </div>

                {/* Right: Metrics / Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Layers, label: 'Full-Stack', sub: 'Development' },
                    { icon: Target, label: 'UI/UX', sub: 'Design Leadership' },
                    { icon: Users, label: 'Team', sub: 'Collaboration' },
                    { icon: Globe, label: 'Product', sub: 'Innovation' },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="group p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-500"
                      >
                        <Icon className="w-6 h-6 text-gray-600 group-hover:text-emerald-400 transition-colors duration-300 mb-3" />
                        <p className="text-white font-semibold text-sm">{item.label}</p>
                        <p className="text-gray-600 text-xs mt-0.5">{item.sub}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Founder;
