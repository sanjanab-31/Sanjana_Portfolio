import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" id="about">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-gray-400" />
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300 font-medium">Introduction</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none"
          >
            About <br />
            <span className="text-outline">Me.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
              I am currently pursuing a B.E. in Computer Science and Engineering, having developed strong expertise in <span className="text-white font-medium">Full-Stack Development</span> and <span className="text-white font-medium">UI/UX Design</span>.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              I enjoy transforming ideas into fully functional products, from initial wireframes and prototypes to deployment and maintenance. Through continuous learning and hands-on experience, I strive to bridge the gap between technology, design, and business strategy.
            </p>
            
            <div className="space-y-3 pt-2">
              <h4 className="text-white font-medium tracking-wide">My interests include:</h4>
              <ul className="grid grid-cols-1 gap-3 text-gray-400 font-light text-sm md:text-base">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Full-Stack Web Development</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> User Interface & User Experience Design</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Product Development</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Startup Development & Entrepreneurship</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Building Scalable Digital Products</li>
              </ul>
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border border-white/10 p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap size={100} />
              </div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <GraduationCap className="text-gray-400" /> Education
              </h3>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <h4 className="text-xl text-white font-medium">B.E. Computer Science and Engineering</h4>
                  <p className="text-gray-400 mt-1">Sri Eshwar College of Engineering &bull; <span className="text-gray-500">Expected 2028</span></p>
                  <p className="text-gray-500 text-sm mt-1">CGPA: 8.3 / 10</p>
                </div>
                <div className="h-[1px] bg-white/10 w-full"></div>
                <div>
                  <h4 className="text-lg text-white font-medium">Higher Secondary & SSLC</h4>
                  <p className="text-gray-400 mt-1">Dr. V. Genguswamy Naidu Matric Hr Sec School</p>
                  <p className="text-gray-500 text-sm mt-1">HSC: 94% &bull; SSLC: 97.8%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
