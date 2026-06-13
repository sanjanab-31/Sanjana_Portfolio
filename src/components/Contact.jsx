import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, TerminalSquare, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full bg-black pt-32 overflow-hidden font-sans border-t border-white/10">
      
      {/* VERCEL GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: `4rem 4rem`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 z-10 pb-32">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
              Communication Link
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Let's Connect.
          </h2>
          <p className="text-lg text-white/50 font-light max-w-xl">
            Whether you have a question, a proposal, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-l border-t border-white/[0.08]">
          
          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-r border-white/[0.08]">
            
            {/* Phone */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="border-b border-r md:border-r-0 lg:border-r border-white/[0.08] p-8 hover:bg-white/[0.02] transition-colors"
            >
              <Phone className="w-6 h-6 text-white/40 mb-6" />
              <h4 className="text-white text-lg font-medium mb-2">Phone</h4>
              <p className="text-white/50 font-mono text-sm">+91 9363063546</p>
            </motion.div>

            {/* Email */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="border-b border-white/[0.08] p-8 hover:bg-white/[0.02] transition-colors md:border-l lg:border-l-0 border-white/[0.08]"
            >
              <Mail className="w-6 h-6 text-[#71d300] mb-6" />
              <h4 className="text-white text-lg font-medium mb-2">Email</h4>
              <p className="text-white/50 font-mono text-sm break-all">sanjana02@gmail.com</p>
            </motion.div>

            {/* Socials (Span 2) */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 border-b border-white/[0.08] p-8 flex flex-col justify-center items-center gap-6 bg-white/[0.01]"
            >
              <h4 className="text-white/40 text-xs font-mono uppercase tracking-widest">Social Network</h4>
              <div className="flex gap-6">
                <a href="#" className="p-4 border border-white/10 hover:border-white/30 hover:bg-white/[0.05] transition-colors">
                  <FaGithub className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="p-4 border border-white/10 hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-colors">
                  <FaLinkedin className="w-6 h-6 text-white hover:text-[#0077b5]" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 border-b border-r border-white/[0.08] bg-black/40 backdrop-blur-md relative"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Identifier</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#71d300] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Network Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@domain.com"
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#71d300] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Payload</label>
                <textarea 
                  required
                  rows="4"
                  placeholder="System architecture looks solid..."
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#71d300] transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || submitted}
                className={`w-full py-4 mt-4 font-mono text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 border ${
                  submitted 
                    ? 'bg-[#71d300]/20 border-[#71d300] text-[#71d300]' 
                    : isSubmitting
                      ? 'bg-white/5 border-white/20 text-white/50 cursor-wait'
                      : 'bg-white text-black hover:bg-transparent hover:text-white hover:border-white'
                }`}
              >
                {submitted ? (
                  <>Payload Delivered <TerminalSquare className="w-4 h-4" /></>
                ) : isSubmitting ? (
                  <>Transmitting...</>
                ) : (
                  <>Execute Transmission <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Footer Area */}
      <div className="w-full border-t border-white/10 bg-black py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 font-mono text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} SANJANA. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-white/30 font-mono text-xs uppercase tracking-widest">System Status: <span className="text-[#71d300]">Online</span></span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
