import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';

const contactLinks = [
  {
    name: "EMAIL",
    label: "sanjana.b0831@gmail.com",
    link: "mailto:sanjana.b0831@gmail.com",
  },
  {
    name: "LINKEDIN",
    label: "Connect with me",
    link: "https://www.linkedin.com/in/sanjana-0831s/",
  },
  {
    name: "GITHUB",
    label: "Explore my code",
    link: "https://github.com/sanjanab-31",
  },
  {
    name: "WHATSAPP",
    label: "Say hello",
    link: "https://wa.me/",
  }
];

const ContactRow = ({ item, index }) => (
  <motion.a
    href={item.link}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-white/10 hover:border-white/50 transition-colors duration-300 cursor-pointer"
  >
    <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-500 group-hover:text-white transition-colors duration-300 uppercase tracking-tighter mb-4 md:mb-0">
      {item.name}
    </span>
    <div className="flex items-center gap-6 md:gap-8 w-full md:w-auto justify-between md:justify-end">
      <span className="text-gray-400 font-light text-lg md:text-xl group-hover:text-white transition-colors duration-300">
        {item.label}
      </span>
      <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
        <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
      </div>
    </div>
  </motion.a>
);

const Contact = () => {
  return (
    <footer className="relative pt-16 md:pt-24 pb-12 overflow-hidden" id="contact">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-8 mb-32">
          
          <div className="xl:col-span-5 flex flex-col justify-between">
            <div>               
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none mb-8"
              >
                Let's <br/> <span className="text-outline">Collaborate.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-400 font-light max-w-md leading-relaxed"
              >
                Currently exploring freelancing opportunities and always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </motion.p>
            </div>

            {/* Time / Availability indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-16 hidden xl:block"
            >
              
            </motion.div>
          </div>

          <div className="xl:col-span-7 flex flex-col justify-center w-full">
            <div className="flex flex-col w-full border-t border-white/10">
              {contactLinks.map((item, index) => (
                <ContactRow key={item.name} item={item} index={index} />
              ))}
            </div>
          </div>

        </div>

        <div className="h-[1px] bg-white/10 w-full mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Sanjana B. All rights reserved.</p>
        </div>
      </div>
      
      {/* Huge background text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none opacity-[0.05] text-white select-none z-0">
        <h1 className="font-display text-[20vw] md:text-[25vw] font-bold uppercase whitespace-nowrap tracking-normal leading-none mb-[-2%]">SANJANA</h1>
      </div>
    </footer>
  );
};

export default Contact;
