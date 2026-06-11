import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

/* ────────────────────────────────────
   FLOATING PARTICLES — Canvas-based
   ──────────────────────────────────── */
const ParticleField = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Create particles
    const count = Math.min(80, Math.floor((w * h) / 15000));
    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const handleMouse = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouse);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const pts = particles.current;

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        // Mouse repulsion
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.vx += (dx / dist) * force * 0.2;
          p.vy += (dy / dist) * force * 0.2;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Wrap around edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < pts.length; j++) {
          const p2 = pts[j];
          const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(113, 211, 0, ${0.08 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};



/* ────────────────────────────────────
   NAV SECTIONS
   ──────────────────────────────────── */
const navSections = [
  { id: "home", label: "Home", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "projects", label: "Projects", num: "03" },
  { id: "contact", label: "Contact", num: "04" },
];

/* ════════════════════════════════════
   HERO COMPONENT
   ════════════════════════════════════ */
const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.95]);

  const [activeNav, setActiveNav] = useState(0);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  // Live clock
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  // Alternate between two slides every 3.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % 2);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (idx) => {
    setActiveNav(idx);
    const sectionIds = ['home', 'about', 'projects', 'contact'];
    const el = document.getElementById(sectionIds[idx]);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      style={{ opacity: heroOpacity, scale: heroScale }}
      className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden w-full noise-overlay"
    >

      {/* ═══ PARTICLE CONSTELLATION ═══ */}
      <ParticleField />

      {/* ═══ MORPHING GRADIENT BLOBS ═══ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary emerald blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#71d300]/[0.07] animate-morph-blob blur-[100px]"
        />
        {/* Secondary purple accent blob */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/[0.04] animate-morph-blob blur-[120px]"
        />
        {/* Warm accent */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-amber-400/[0.04] rounded-full blur-[100px]"
        />
      </div>

      {/* ═══ ROTATING GEOMETRIC RINGS ═══ */}
      <div className="absolute top-1/2 left-1/2 pointer-events-none" style={{ width: 0, height: 0 }}>
        <div
          className="absolute animate-spin-slow"
          style={{
            width: '600px', height: '600px',
            top: '50%', left: '50%',
            border: '1px solid rgba(255,255,255,0.03)',
            borderRadius: '50%',
          }}
        />
        <div
          className="absolute animate-spin-reverse"
          style={{
            width: '450px', height: '450px',
            top: '50%', left: '50%',
            border: '1px dashed rgba(113,211,0,0.06)',
            borderRadius: '50%',
          }}
        />
        <div
          className="absolute animate-spin-slow"
          style={{
            width: '750px', height: '750px',
            top: '50%', left: '50%',
            border: '1px solid rgba(255,255,255,0.015)',
            borderRadius: '50%',
          }}
        />
      </div>

      {/* ═══ SCAN LINE ═══ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#71d300]/20 to-transparent animate-scanline"
        />
      </div>


      {/* Top-Right — Live clock + location */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="fixed top-6 right-6 md:top-8 md:right-10 z-50 flex items-center gap-4"
      >
        <span className="text-[10px] md:text-xs font-mono text-gray-600 uppercase tracking-widest hidden md:inline">
          IST
        </span>
        <span className="text-[10px] md:text-xs font-mono text-gray-400 tabular-nums tracking-widest">
          {currentTime}
        </span>
        <div className="w-px h-3 bg-white/10 hidden md:block" />
        <span className="text-[10px] md:text-xs font-mono text-gray-600 tracking-widest hidden md:inline">
          IND
        </span>
      </motion.div>

      {/* Left Edge — Vertical dot navigation rail */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6"
        onMouseLeave={() => setHoveredNav(null)}
      >
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/5" />
        {navSections.map((item, idx) => {
          const isActive = activeNav === idx;
          const isHovered = hoveredNav === idx;
          return (
            <div
              key={item.id}
              className="relative flex items-center gap-4 cursor-pointer group"
              onMouseEnter={() => setHoveredNav(idx)}
              onClick={() => handleNavClick(idx)}
            >
              <motion.div
                className={`relative z-10 rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? 'w-3 h-3 bg-white border-white shadow-[0_0_12px_rgba(255,255,255,0.5)]'
                    : isHovered
                      ? 'w-2.5 h-2.5 bg-white/50 border-white/50'
                      : 'w-2 h-2 bg-transparent border-white/20'
                }`}
                layout
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: -8, width: 0 }}
                    animate={{ opacity: 1, x: 0, width: 'auto' }}
                    exit={{ opacity: 0, x: -8, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-6 flex items-center gap-2 whitespace-nowrap overflow-hidden"
                  >
                    <span className="text-[10px] font-mono text-white/30">{item.num}</span>
                    <span className="text-[11px] font-medium tracking-widest uppercase text-white">
                      {item.label}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>

      {/* Right Edge — Vertical text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 hidden md:block"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-white/10"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Portfolio — 2026
        </span>
      </motion.div>

      {/* ═══════ MAIN HERO CONTENT ═══════ */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center">

        {/* ── Center: Name intro ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-3 mb-6 md:mb-8"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-white/30 origin-left "
          />
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.35em] text-gray-500">
            Hey, I'm Sanjana B — I build things
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-white/30 origin-right"
          />
        </motion.div>

        {/* ── ALTERNATING MASSIVE TYPOGRAPHY ── */}
        {/* Two "slides" that swap every 3.5s: slide 0 = FULL-STACK + UI/UX DESIGNER, slide 1 = CO-FOUNDER & CTO + @ TECHNOVANAM */}
        <div className="relative w-full text-center flex flex-col items-center justify-center" style={{ minHeight: '28vw' }}>
          <AnimatePresence mode="wait">
            {roleIndex % 2 === 0 ? (
              <motion.div
                key="slide-dev"
                initial={{ opacity: 0, y: 60, scale: 0.97, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -60, scale: 0.97, filter: 'blur(8px)' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex flex-col items-center justify-center"
              >
                <motion.div style={{ y: y1 }}>
                  <h1 className="font-display text-[14vw] md:text-[12vw] lg:text-[10vw] font-normal uppercase leading-none text-white relative z-10">
                    FULL-STACK
                  </h1>
                </motion.div>
                <motion.div style={{ y: y2 }} className="mt-1 md:mt-3">
                  <h1
                    className="font-display text-[11vw] md:text-[10vw] lg:text-[8.5vw] font-normal uppercase leading-none relative z-10 cursor-default"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)',
                    }}
                  >
                    & UI/UX DESIGNER
                  </h1>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="slide-cto"
                initial={{ opacity: 0, y: 60, scale: 0.97, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -60, scale: 0.97, filter: 'blur(8px)' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex flex-col items-center justify-center"
              >
                <motion.div style={{ y: y1 }}>
                  <h1 className="font-display text-[12vw] md:text-[10vw] lg:text-[8.5vw] font-normal uppercase leading-none text-white relative z-10">
                    CO-FOUNDER
                    <span className="text-[#71d300]"> & CTO</span>
                  </h1>
                </motion.div>
                <motion.div style={{ y: y2 }} className="mt-1 md:mt-3">
                  <h1
                    className="font-display text-[9vw] md:text-[8vw] lg:text-[6.5vw] font-normal uppercase leading-none relative z-10 cursor-default"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: '2px rgba(113, 211, 0, 0.4)',
                    }}
                  >
                    @ TECHNOVANAM
                  </h1>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Slide indicator dots ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center gap-3 mt-6 md:mt-8"
        >
          <button
            onClick={() => setRoleIndex(0)}
            className={`w-8 h-1 rounded-full transition-all duration-500 cursor-pointer ${
              roleIndex % 2 === 0 ? 'bg-white w-12' : 'bg-white/15 hover:bg-white/30'
            }`}
          />
          <button
            onClick={() => setRoleIndex(1)}
            className={`w-8 h-1 rounded-full transition-all duration-500 cursor-pointer ${
              roleIndex % 2 === 1 ? 'bg-[#71d300] w-12' : 'bg-white/15 hover:bg-white/30'
            }`}
          />
        </motion.div>

        {/* ── Bottom decorative strip ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 w-full max-w-2xl flex items-center gap-4"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="flex items-center gap-6">
            {['React', 'Node.js', 'Figma'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3 + i * 0.15 }}
                className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-gray-600 hover:text-[#71d300] transition-colors duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </div>


    </motion.section>
  );
};

export default Hero;
