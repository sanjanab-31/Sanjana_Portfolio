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
    className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-white/20 hover:border-white/60 transition-colors duration-300 cursor-pointer"
  >
    <span className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gray-300 group-hover:text-white transition-colors duration-300 uppercase tracking-normal mb-4 md:mb-0">
      {item.name}
    </span>
    <div className="flex items-center gap-6 md:gap-8 w-full md:w-auto justify-between md:justify-end">
      <span className="text-gray-300 font-light text-lg md:text-xl group-hover:text-white transition-colors duration-300">
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
    <footer className="relative pt-16 md:pt-24 pb-0 overflow-hidden" id="contact">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          
          {/* Left Column: Text and Links */}
          <div className="w-full flex flex-col justify-start items-start text-left">
            <div className="mb-12">               
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-grey-100 leading-none mb-8"
              >
                Let's <br/> <span className="text-transparent [-webkit-text-stroke:0.01px_rgba(255,255,255,0.8)]">Collaborate.</span>
              </motion.h2>
            </div>

            <div className="w-full mt-auto">
              <div className="flex flex-col w-full border-t border-white/20">
                {contactLinks.map((item, index) => (
                  <ContactRow key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full flex flex-col justify-center"
          >
            <form className="flex flex-col gap-10 w-full p-8 md:p-12 bg-white/[0.03] border border-white/10 rounded-[2rem] backdrop-blur-md shadow-2xl">
              <div className="flex flex-col gap-3">
                <label className="text-xs uppercase tracking-widest text-white font-semibold">What's your name?</label>
                <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/30 pb-4 pt-2 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400 transition-colors text-lg" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs uppercase tracking-widest text-white font-semibold">What's your email?</label>
                <input type="email" placeholder="john@doe.com" className="w-full bg-transparent border-b border-white/30 pb-4 pt-2 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400 transition-colors text-lg" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs uppercase tracking-widest text-white font-semibold">Write your message</label>
                <textarea rows="4" placeholder="Hello Sanjana, can you help me with..." className="w-full bg-transparent border-b border-white/30 pb-4 pt-2 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400 transition-colors text-lg resize-none"></textarea>
              </div>
              <button type="button" className="group mt-6 relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full overflow-hidden self-start hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                <span className="font-bold uppercase tracking-widest text-sm relative z-10">Send Message</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>

        </div>

        <div className="h-[1px] bg-white/10 w-full mb-8"></div>
        
        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Sanjana B. All rights reserved.</p>
        </div> */}
      </div>
      
      <div className="w-full flex justify-center mt-12 px-4 translate-y-[5%]">
        <h1 className="text-[16vw] md:text-[14vw] lg:text-[280px] font-medium uppercase whitespace-nowrap tracking-wide leading-[0.75] text-white text-center w-full" style={{ fontFamily: "'PINEON', sans-serif" }}>SANJANA</h1>
      </div>
    </footer>
  );
};

export default Contact;
