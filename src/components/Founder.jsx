import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Code, Target, Users, Lightbulb, Rocket, Globe,
  Layers, Zap, Terminal, ChevronRight, Sparkles, Briefcase
} from 'lucide-react';

/* ─────────────────────────────────────────
   MINI PARTICLE FIELD (reused from Hero)
───────────────────────────────────────── */
const ParticleField = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    let w = (canvas.width = parent.offsetWidth);
    let h = (canvas.height = parent.offsetHeight);

    const count = Math.min(60, Math.floor((w * h) / 18000));
    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 1.5 + 0.5, opacity: Math.random() * 0.4 + 0.05,
    }));

    const resize = () => {
      w = canvas.width = parent.offsetWidth;
      h = canvas.height = parent.offsetHeight;
    };
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const pts = particles.current;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        p.vx *= 0.99; p.vy *= 0.99;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const p2 = pts[j];
          const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(113,211,0,${0.07 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

/* ─────────────────────────────────────────
   ANIMATED LETTERS (identical to Hero)
───────────────────────────────────────── */
const AnimatedLetters = ({ text, className, style = {}, hoverStyle = {}, delay = 0 }) => {
  const letters = Array.from(text);
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.03, delayChildren: delay } } };
  const child = {
    visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: 'spring', damping: 15, stiffness: 150 } },
    hidden: { opacity: 0, y: 30, scale: 0.8, rotate: -5 },
  };
  return (
    <motion.span variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
      className={`inline-flex flex-wrap justify-center ${className || ''}`}>
      {letters.map((char, idx) => (
        <motion.span key={idx} variants={child}
          whileHover={{ y: -10, scale: 1.15, ...hoverStyle, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
          className="inline-block cursor-pointer select-none"
          style={{ ...style, display: char === ' ' ? 'inline' : 'inline-block', marginRight: char === ' ' ? '0.25em' : '0' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const storyChapters = [
  { num: '01', title: 'The Spark', icon: Sparkles, text: 'My journey into technology began with curiosity and a desire to understand how digital products are built. Over time, that curiosity evolved into a passion for designing experiences and solving real-world challenges.' },
  { num: '02', title: 'The Purpose', icon: Lightbulb, text: 'As I explored web development and UI/UX design, I realized that technology has the power to create opportunities, improve lives, and solve meaningful problems when built with purpose.' },
  { num: '03', title: 'The Venture', icon: Rocket, text: 'This belief led me to become the Co-Founder and CTO of Technovanam — where I oversee technical vision, product architecture, user experience design, and technical strategy.' },
];

const responsibilities = [
  { icon: Code,      label: 'Product Architecture' },
  { icon: Target,    label: 'UI/UX Leadership'     },
  { icon: Users,     label: 'Team Guidance'         },
  { icon: Lightbulb, label: 'Product Strategy'     },
  { icon: Briefcase, label: 'Tech Implementation'  },
  { icon: Rocket,    label: 'Startup Innovation'   },
];

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
const Founder = () => {
  const sectionRef = useRef(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  useEffect(() => {
    const interval = setInterval(() => setActiveChapter(p => (p + 1) % storyChapters.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="founder" className="relative bg-[#050505] overflow-hidden noise-overlay">

      {/* ═══ SHARED AMBIENT LAYER ═══ */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#71d300]/[0.04] rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/[0.03] rounded-full blur-[160px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px]" />
      </motion.div>

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 opacity-30">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#71d300]/20 to-transparent animate-scanline" />
      </div>

      {/* Rotating rings — same as Hero */}
      <div className="absolute top-1/2 left-1/2 pointer-events-none" style={{ width: 0, height: 0 }}>
        <div className="absolute animate-spin-slow" style={{ width: '900px', height: '900px', top: '50%', left: '50%', border: '1px solid rgba(255,255,255,0.025)', borderRadius: '50%', transform: 'translate(-50%,-50%)' }} />
        <div className="absolute animate-spin-reverse" style={{ width: '650px', height: '650px', top: '50%', left: '50%', border: '1px dashed rgba(113,211,0,0.05)', borderRadius: '50%', transform: 'translate(-50%,-50%)' }} />
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — CINEMATIC HERO-STYLE HEADER
      ═══════════════════════════════════════════════════ */}
      <div className="relative z-20 py-28 md:py-40 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden">

        {/* Ghost particles layer */}
        <div className="absolute inset-0 overflow-hidden">
          <ParticleField />
        </div>

        {/* Oversized ghost text */}
        <div className="absolute -top-8 inset-x-0 flex justify-center select-none pointer-events-none z-0">
          <span className="font-display text-[25vw] font-bold text-transparent leading-none"
            style={{ WebkitTextStroke: '1px rgba(113,211,0,0.04)' }}>
            CTO
          </span>
        </div>

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="relative z-20 flex items-center gap-3 mb-8">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-white/20 origin-left" />
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.35em] text-gray-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#71d300] animate-pulse inline-block" />
            Leadership & Entrepreneurship
          </span>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-white/20 origin-right" />
        </motion.div>

        {/* Massive title — Hero-style */}
        <div className="relative z-20 flex flex-col items-center" style={{ minHeight: '22vw' }}>
          <h2 className="font-display text-[14vw] md:text-[11vw] lg:text-[9.5vw] font-normal uppercase leading-none text-white">
            <AnimatedLetters text="CO-FOUNDER"
              style={{ color: '#ffffff' }}
              hoverStyle={{ color: '#71d300', textShadow: '0 0 25px rgba(113,211,0,0.8)' }} />
          </h2>
          <h2 className="font-display text-[10vw] md:text-[8vw] lg:text-[7vw] font-normal uppercase leading-none mt-1 md:mt-2">
            <AnimatedLetters text="& CTO"
              style={{ color: 'transparent', WebkitTextStroke: '2px rgba(113,211,0,0.5)' }}
              hoverStyle={{ color: '#71d300', WebkitTextStroke: '2px rgba(113,211,0,1)', textShadow: '0 0 25px rgba(113,211,0,0.8)' }}
              delay={0.2} />
          </h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }}
            className="mt-4 md:mt-6 font-mono text-sm md:text-base uppercase tracking-[0.5em] text-gray-600">
            @ Technovanam
          </motion.p>
        </div>

        {/* Decorative bottom strip */}
        <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }}
          transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 mt-10 w-full max-w-xl flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="flex items-center gap-6">
            {['Technical Vision', 'Product Architecture', 'UX Strategy'].map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 1.3 + i * 0.12 }}
                className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 hover:text-[#71d300] transition-colors duration-300 cursor-default hidden md:inline">
                {t}
              </motion.span>
            ))}
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — ORIGIN STORY (terminal-style panels)
      ═══════════════════════════════════════════════════ */}
      <div className="relative z-20 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20 items-start">

          {/* Left — chapter selector */}
          <div className="space-y-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="flex items-center gap-2 mb-8">
              <Terminal className="w-4 h-4 text-[#71d300]" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#71d300]">Origin.Story()</span>
            </motion.div>

            {storyChapters.map((ch, idx) => {
              const Icon = ch.icon;
              return (
                <motion.button key={idx}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveChapter(idx)}
                  className={`group w-full text-left flex items-start gap-4 p-5 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    activeChapter === idx
                      ? 'bg-[#71d300]/[0.04] border-[#71d300]/30 shadow-[0_0_40px_rgba(113,211,0,0.05)]'
                      : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5'
                  }`}>
                  <span className={`text-xs font-mono mt-1 transition-colors duration-300 ${activeChapter === idx ? 'text-[#71d300]' : 'text-gray-700'}`}>
                    {ch.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={`w-4 h-4 transition-colors duration-300 ${activeChapter === idx ? 'text-[#71d300]' : 'text-gray-700'}`} />
                      <h4 className={`text-lg font-grotesk font-semibold transition-colors duration-300 ${activeChapter === idx ? 'text-white' : 'text-gray-500'}`}>
                        {ch.title}
                      </h4>
                    </div>
                    <motion.div initial={false}
                      animate={{ height: activeChapter === idx ? 'auto' : 0, opacity: activeChapter === idx ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden">
                      <p className="text-gray-400 text-sm leading-relaxed font-light pt-2">{ch.text}</p>
                    </motion.div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ml-auto mt-1.5 shrink-0 transition-all duration-300 ${activeChapter === idx ? 'text-[#71d300] rotate-90' : 'text-gray-700'}`} />
                </motion.button>
              );
            })}

            {/* Progress bars */}
            <div className="flex gap-2 pt-6 px-5">
              {storyChapters.map((_, idx) => (
                <div key={idx} className="flex-1 h-0.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div className="h-full bg-[#71d300] rounded-full" initial={{ width: '0%' }}
                    animate={{ width: activeChapter === idx ? '100%' : activeChapter > idx ? '100%' : '0%' }}
                    transition={{ duration: activeChapter === idx ? 5 : 0.3, ease: 'linear' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right — quote + vision as terminal windows */}
          <div className="space-y-6">

            {/* Quote card — terminal window style */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] group">
              {/* Scan line on hover */}
              <motion.div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#71d300]/50 to-transparent"
                animate={{ top: ['-5%', '105%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#71d300]/40" />
                <span className="ml-2 text-[10px] font-mono text-gray-600 tracking-widest">PHILOSOPHY.md</span>
              </div>
              <div className="relative p-7 md:p-10">
                <div className="absolute top-4 right-6 text-[100px] leading-none font-serif text-[#71d300]/5 pointer-events-none select-none">"</div>
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-0.5 h-14 rounded-full bg-gradient-to-b from-[#71d300] to-[#71d300]/20 shrink-0 mt-1" />
                  <p className="text-lg md:text-xl text-gray-200 font-light italic leading-relaxed">
                    Technology becomes meaningful when it creates opportunities, solves real problems, and empowers people to achieve their goals.
                  </p>
                </div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#71d300]/50 text-right">— Sanjana B</p>
              </div>
            </motion.div>

            {/* Vision card — terminal window style */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] group hover:border-[#71d300]/20 transition-colors duration-500">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#71d300]/40" />
                <span className="ml-2 text-[10px] font-mono text-gray-600 tracking-widest">VISION.exe</span>
                <span className="ml-auto text-[9px] font-mono text-[#71d300] flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-[#71d300] animate-pulse" />RUNNING</span>
              </div>
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#71d300]/10 border border-[#71d300]/20 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-[#71d300]" />
                  </div>
                  <h3 className="text-lg font-grotesk font-semibold text-white">Long-term Vision</h3>
                </div>
                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                  I aspire to become a technology entrepreneur who builds impactful digital products capable of solving meaningful problems at scale. My long-term vision is to grow Technovanam into a technology company recognized for innovation, product excellence, and social impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — RESPONSIBILITIES as Bento Cards
      ═══════════════════════════════════════════════════ */}
      <div className="relative z-20 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[1400px] mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-[#71d300]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#71d300]">Role.Responsibilities()</span>
          </div>
          <h3 className="font-display text-3xl md:text-5xl font-normal uppercase text-white leading-none">
            What I Do{' '}
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(113,211,0,0.5)' }}>@ Technovanam</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {responsibilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8 hover:border-[#71d300]/30 hover:shadow-[0_10px_40px_rgba(113,211,0,0.08)] transition-all duration-500 cursor-default">
                {/* Scan effect */}
                <motion.div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#71d300]/60 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ top: ['-5%', '105%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
                {/* Corner accent */}
                <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-[#71d300]/20 group-hover:border-[#71d300]/60 transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-[#71d300]/20 group-hover:border-[#71d300]/60 transition-colors duration-300" />

                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#71d300]/10 group-hover:border-[#71d300]/30 transition-all duration-500 flex items-center justify-center mb-5 relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-[#71d300]/20" animate={{ scale: [1, 1.8, 1], opacity: [0, 0.4, 0] }} transition={{ duration: 2.5, repeat: Infinity }} />
                  <Icon className="w-4 h-4 text-gray-500 group-hover:text-[#71d300] transition-colors duration-500 relative z-10" />
                </div>

                <p className="text-white font-grotesk font-medium text-sm md:text-base group-hover:text-[#71d300] transition-colors duration-300">{item.label}</p>
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-700 mt-1 block">SYS.ACTIVE</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — TECHNOVANAM ROLE — Full-width cinematic
      ═══════════════════════════════════════════════════ */}
      <div className="relative z-20 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[1400px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] group">

          {/* Full scan line */}
          <motion.div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#71d300]/30 to-transparent"
            animate={{ top: ['-2%', '102%'] }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} />

          {/* Corner viewfinder */}
          {['top-4 left-4 border-t border-l', 'top-4 right-4 border-t border-r', 'bottom-4 left-4 border-b border-l', 'bottom-4 right-4 border-b border-r'].map((cls, i) => (
            <div key={i} className={`absolute w-5 h-5 ${cls} border-[#71d300]/20 group-hover:border-[#71d300]/60 transition-colors duration-500`} />
          ))}

          {/* Grid bg */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#71d30006_1px,transparent_1px),linear-gradient(to_bottom,#71d30006_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

          <div className="relative z-10 p-8 md:p-14 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-[#71d300]/10 border border-[#71d300]/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#71d300]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#71d300]/70">Current.Role</span>
                </div>
                <h3 className="font-display text-5xl md:text-6xl font-normal uppercase text-white leading-none mb-3">
                  Technovanam
                </h3>
                <p className="text-[#71d300] font-mono text-sm tracking-wider mb-8 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#71d300] animate-pulse" />
                  Co-Founder & Chief Technology Officer
                </p>
                <p className="text-gray-400 font-light leading-relaxed text-base md:text-lg">
                  As CTO of Technovanam, I lead technical development, product architecture, UI/UX strategy, and innovation initiatives — transforming innovative ideas into practical solutions that people can use and benefit from.
                </p>
              </div>

              {/* Right — 2×2 highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Layers,    label: 'Full-Stack',   sub: 'Development'      },
                  { icon: Target,    label: 'UI/UX',        sub: 'Design Leadership' },
                  { icon: Users,     label: 'Team',         sub: 'Collaboration'    },
                  { icon: Globe,     label: 'Product',      sub: 'Innovation'       },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={idx}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="group/card relative overflow-hidden p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#71d300]/30 hover:bg-[#71d300]/[0.03] transition-all duration-500">
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#71d300]/20 group-hover/card:bg-[#71d300] group-hover/card:shadow-[0_0_8px_#71d300] transition-all duration-300" />
                      <Icon className="w-5 h-5 text-gray-600 group-hover/card:text-[#71d300] transition-colors duration-300 mb-4" />
                      <p className="text-white font-grotesk font-semibold text-sm">{item.label}</p>
                      <p className="text-gray-600 text-xs mt-0.5 font-mono">{item.sub}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Founder;
