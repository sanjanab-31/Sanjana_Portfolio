import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

const EntrepreneurialJourney = () => {
  return (
    <section id="entrepreneurial-journey" className="relative w-full bg-black py-32 overflow-hidden font-sans border-t border-white/10">
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
              Business Ventures
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Entrepreneurial Journey.
          </h2>
        </motion.div>

        <div className="w-full border border-white/[0.08] p-12 bg-white/[0.01] flex flex-col items-center justify-center min-h-[300px]">
          <Compass className="w-8 h-8 text-white/20 mb-4" />
          <p className="text-white/40 font-mono text-sm uppercase tracking-widest text-center">
            Awaiting Startup / Entrepreneurial Data
          </p>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneurialJourney;
