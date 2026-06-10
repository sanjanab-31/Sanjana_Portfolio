import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Target, Users, Code, Lightbulb, Rocket } from 'lucide-react';

const Founder = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" id="founder">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 mb-6"
          >
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300 font-medium">Leadership</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none"
          >
            Co-Founder <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">& CTO.</span>
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
            <h3 className="text-3xl font-medium text-white mb-6">The Founder Story</h3>
            <p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed">
              My journey into technology began with curiosity and a desire to understand how digital products are built. Over time, that curiosity evolved into a passion for designing experiences, developing applications, and solving real-world challenges through technology.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              As I explored web development and UI/UX design, I realized that technology has the power to create opportunities, improve lives, and solve meaningful problems when built with purpose. <span className="text-white font-medium">This belief led me to become the Co-Founder and CTO of Technovanam.</span>
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              At Technovanam, I oversee the technical vision of our products, leading development, user experience design, product architecture, and technical strategy. Working with a passionate team, I focus on transforming innovative ideas into practical solutions that people can use and benefit from.
            </p>
            
            <div className="p-8 mt-8 border-l-2 border-emerald-500 bg-white/[0.02] backdrop-blur-sm rounded-r-2xl">
              <p className="text-xl text-gray-300 font-light italic leading-relaxed">
                "Technology becomes meaningful when it creates opportunities, solves real problems, and empowers people to achieve their goals."
              </p>
            </div>
            
            <div className="pt-8">
              <h3 className="text-2xl font-medium text-white mb-4">Vision</h3>
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                I aspire to become a technology entrepreneur who builds impactful digital products capable of solving meaningful problems at scale. My long-term vision is to grow Technovanam into a technology company recognized for innovation, product excellence, and social impact while continuing to explore emerging technologies, product engineering, and human-centered design.
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border border-white/10 p-8 rounded-3xl bg-white/[0.02] backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/50 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Rocket size={120} />
              </div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3 text-white">
                Technovanam
              </h3>
              <p className="text-emerald-400 mb-8 font-medium">Co-Founder & Chief Technology Officer</p>
              
              <p className="text-gray-400 mb-8 font-light leading-relaxed relative z-10">
                As CTO of Technovanam, I lead technical development, product architecture, UI/UX strategy, and innovation initiatives.
              </p>
              
              <div className="space-y-4 relative z-10">
                <h4 className="text-lg text-white font-medium mb-4">Key Responsibilities</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 rounded-full bg-emerald-500/10 text-emerald-400">
                      <Code className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300 text-sm">Product Architecture & Development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 rounded-full bg-emerald-500/10 text-emerald-400">
                      <Target className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300 text-sm">UI/UX Design Leadership</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 rounded-full bg-emerald-500/10 text-emerald-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300 text-sm">Team Collaboration & Technical Guidance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 rounded-full bg-emerald-500/10 text-emerald-400">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300 text-sm">Product Planning & Strategy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 rounded-full bg-emerald-500/10 text-emerald-400">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300 text-sm">Technology Selection & Implementation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 rounded-full bg-emerald-500/10 text-emerald-400">
                      <Rocket className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300 text-sm">Startup Growth & Innovation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
