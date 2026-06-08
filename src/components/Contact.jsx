import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Link, Code, Trophy } from 'lucide-react';

const Contact = () => {
  return (
    <footer className="relative pt-32 pb-12 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">
              Let's <span className="text-outline">Connect</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-md mb-12">
              Currently exploring freelancing opportunities and always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <a href="mailto:sanjana.b0831@gmail.com" className="inline-flex items-center gap-4 text-2xl md:text-3xl font-light hover:text-gray-300 transition-colors mb-12 group">
              <Mail className="group-hover:scale-110 transition-transform" />
              sanjana.b0831@gmail.com
            </a>
            
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/sanjana-0831s/" target="_blank" rel="noreferrer" className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all" aria-label="LinkedIn">
                <Link size={24} />
              </a>
              <a href="https://github.com/sanjanab-31" target="_blank" rel="noreferrer" className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all" aria-label="GitHub">
                <Code size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-white/10 rounded-2xl p-8 md:p-12 bg-[#050505]"
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-white">
              <Trophy className="text-yellow-500" /> Achievements
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1">🥇</span>
                <div>
                  <h4 className="text-lg text-white font-medium">Freshwarite Prelims</h4>
                  <p className="text-gray-400 text-sm mt-1">First Prize in UI/UX Design at Sri Eshwar College of Engineering</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1">🥇</span>
                <div>
                  <h4 className="text-lg text-white font-medium">Design Showdown</h4>
                  <p className="text-gray-400 text-sm mt-1">First Place in UI/UX Competition at Sri Eshwar College of Engineering</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1">🚀</span>
                <div>
                  <h4 className="text-lg text-white font-medium">Hack the Horizon</h4>
                  <p className="text-gray-400 text-sm mt-1">Top 50 among 130+ teams</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1">🌟</span>
                <div>
                  <h4 className="text-lg text-white font-medium">Eureka! 2025</h4>
                  <p className="text-gray-400 text-sm mt-1">Zonalist, Social Track, Eureka! 2025</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="h-[1px] bg-white/10 w-full mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Sanjana B. All rights reserved.</p>
          <p>Designed & Built with React, Tailwind & Framer Motion</p>
        </div>
      </div>
      
      {/* Huge background text */}
      <div className="absolute bottom-[-10%] left-0 w-full overflow-hidden flex justify-center pointer-events-none opacity-[0.03] select-none z-0">
        <h1 className="font-display text-[25vw] font-black uppercase whitespace-nowrap">SANJANA</h1>
      </div>
    </footer>
  );
};

export default Contact;
