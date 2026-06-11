import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navSections = [
  { id: "home", label: "Home", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "projects", label: "Projects", num: "03" },
  { id: "contact", label: "Contact", num: "04" },
];

const NavigationRail = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredNav, setHoveredNav] = useState(null);
  const [visibleLabelSection, setVisibleLabelSection] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0.05,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      navSections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    setVisibleLabelSection(activeSection);
    const timer = setTimeout(() => {
      setVisibleLabelSection(null);
    }, 2500);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6"
      onMouseLeave={() => setHoveredNav(null)}
    >
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/5" />
      {navSections.map((item, idx) => {
        const isActive = activeSection === item.id;
        const isHovered = hoveredNav === idx;
        const isVisibleLabel = isHovered || visibleLabelSection === item.id;

        return (
          <div
            key={item.id}
            className="relative flex items-center gap-4 cursor-pointer group"
            onMouseEnter={() => setHoveredNav(idx)}
            onClick={() => handleNavClick(item.id)}
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
              {isVisibleLabel && (
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
  );
};

export default NavigationRail;
