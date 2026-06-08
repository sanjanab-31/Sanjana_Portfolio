import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight">
            About<span className="text-outline"> Me</span>
          </h2>
          <div className="h-[1px] bg-white/20 flex-grow ml-8 hidden md:block"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
              I am a B.E. Computer Science and Engineering student with a strong interest in <span className="text-white font-medium">Full-Stack Development</span> and <span className="text-white font-medium">UI/UX Design</span>.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              I enjoy building responsive, user-friendly web applications and designing clean interfaces using modern design tools. I have hands-on experience in developing full-stack applications using the MERN stack and working with databases like MongoDB, PostgreSQL, and Firebase.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              I am currently exploring freelancing opportunities and aiming to grow as a tech entrepreneur by building impactful digital products.
            </p>
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
