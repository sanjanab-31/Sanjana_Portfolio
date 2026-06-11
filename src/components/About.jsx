import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  Briefcase,
  ChevronRight,
  User,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const education = [
    {
      index: '01',
      title: 'B.E. Computer Science and Engineering',
      institution: 'Sri Eshwar College of Engineering',
      period: '2024 — 2028 (Expected)',
      gpa: 'CGPA: 8.3 / 10',
      highlights: [
        'Specializing in advanced full-stack architectures and database systems.',
        'Actively participating in developer chapters and innovation bootcamps.',
        'Exploring the intersection of human-computer interaction and web performance.'
      ]
    },
    {
      index: '02',
      title: 'Higher Secondary & SSLC',
      institution: 'Dr. V. Genguswamy Naidu Matric Hr Sec School',
      period: 'Graduated 2024',
      gpa: 'HSC: 94% | SSLC: 97.8%',
      highlights: [
        'Maintained top-tier academic ranks with major emphasis on science and computing streams.',
        'Participated in science exhibitions, coding drills, and algebraic reasoning challenges.',
        'Graduated with distinctions in both primary and higher secondary levels.'
      ]
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#050505] noise-overlay" id="about">
      {/* Background Gradients & Ambient Effects matching Hero theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/12 w-[400px] h-[400px] bg-[#71d300]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/12 w-[400px] h-[400px] bg-violet-500/[0.02] rounded-full blur-[120px]" />
      </div>

      {/* Decorative Scanline detail matching Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#71d300]/10 to-transparent top-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER SECTION - Elegant & Neat */}
        <div className="border-b border-white/5 pb-10 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-[#71d300] mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider font-mono font-medium">About Me</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-grotesk text-3xl md:text-5xl font-light text-white tracking-normal leading-tight"
          >
            I bridge engineering precision <br className="hidden md:inline" />
            with intuitive user experience.
          </motion.h2>
        </div>

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Concise Bio & Metadata */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 font-light leading-relaxed text-base md:text-lg"
            >
              <p>
                Focusing on holistic product architecture, I build clean frontend interfaces and efficient backend logic. I treat code as a medium to create digital systems that are both highly performant and aesthetically premium.
              </p>
            </motion.div>

            {/* Concise metadata list */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-6 border-t border-white/5 space-y-4 font-grotesk"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#71d300] shrink-0" />
                <span className="text-xs text-gray-500 uppercase tracking-wider">Location:</span>
                <span className="text-white text-sm font-light">Coimbatore, India</span>
              </div>

              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-[#71d300] shrink-0" />
                <span className="text-xs text-gray-500 uppercase tracking-wider">Roles:</span>
                <span className="text-white text-sm font-light">Fullstack Dev & UI/UX</span>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-[#71d300] shrink-0" />
                <span className="text-xs text-gray-500 uppercase tracking-wider">Venture:</span>
                <span className="text-white text-sm font-light">Technovanam</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Creative Academic Index (Interactable List Rows) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-[#71d300]" />
              <h3 className="text-xs uppercase tracking-wider font-mono text-gray-400 font-semibold">Academic Index</h3>
            </div>

            {/* List Row Selectors */}
            <div className="space-y-3">
              {education.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left py-4 px-5 border-b transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    activeIndex === idx 
                      ? 'border-[#71d300] bg-white/[0.02]' 
                      : 'border-white/10 hover:border-white/30 bg-transparent'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-medium transition-colors duration-300 ${
                      activeIndex === idx ? 'text-[#71d300]' : 'text-gray-600'
                    }`}>
                      {item.index}
                    </span>
                    <span className={`text-sm font-medium transition-colors duration-300 font-grotesk ${
                      activeIndex === idx ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    }`}>
                      {item.institution}
                    </span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-all duration-300 shrink-0 ${
                    activeIndex === idx 
                      ? 'text-[#71d300] translate-x-1' 
                      : 'text-gray-600 group-hover:text-gray-400'
                  }`} />
                </button>
              ))}
            </div>

            {/* Detail Panel */}
            <div className="mt-8 pt-6 border-t border-white/5 min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                    <h4 className="text-lg font-semibold text-white font-grotesk tracking-normal">
                      {education[activeIndex].title}
                    </h4>
                    <span className="text-xs font-mono text-[#71d300] whitespace-nowrap">
                      {education[activeIndex].period}
                    </span>
                  </div>

                  <span className="inline-block px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300">
                    {education[activeIndex].gpa}
                  </span>

                  <ul className="space-y-2 pt-2">
                    {education[activeIndex].highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs text-gray-400 flex items-start gap-2 leading-relaxed">
                        <ChevronRight className="w-3.5 h-3.5 text-[#71d300]/80 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
