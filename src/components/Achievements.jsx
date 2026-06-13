import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Rocket, Star, Award, BookOpen } from 'lucide-react';

const achievementsData = [
  {
    id: 1,
    title: "Freshwarite Prelims",
    description: "Won First Prize in UI/UX Design conducted by Sri Eshwar College of Engineering.",
    icon: <Trophy className="w-6 h-6 text-[#71d300]" />,
    date: "2024",
  },
  {
    id: 2,
    title: "Hack The Horizon",
    description: "Shortlisted in Top 50 among 130 teams with an innovative technology solution.",
    icon: <Rocket className="w-6 h-6 text-white/50" />,
    date: "2024",
  },
  {
    id: 3,
    title: "Design Showdown",
    description: "Third Place organized by Sri Eshwar College of Engineering.",
    icon: <Medal className="w-6 h-6 text-[#71d300]" />,
    date: "2025",
  },
  {
    id: 4,
    title: "Eureka! 2025",
    description: "Selected Zonalist under Social Track, organized by E-Cell, IIT Bombay (Asia's Largest Business Model Competition).",
    icon: <Star className="w-6 h-6 text-violet-500" />,
    date: "2025",
  },
  {
    id: 5,
    title: "React JS Masterclass",
    description: "Certification of Completion.",
    icon: <Award className="w-6 h-6 text-[#71d300]" />,
    date: "Apr 2025",
  },
  {
    id: 6,
    title: "JS Fundamentals",
    description: "Certification of Completion.",
    icon: <BookOpen className="w-6 h-6 text-white/50" />,
    date: "Feb 2025",
  },
  {
    id: 7,
    title: "C++ Training in IITB",
    description: "Certification of Completion.",
    icon: <Award className="w-6 h-6 text-[#71d300]" />,
    date: "Dec 2024",
  },
  {
    id: 8,
    title: "Introduction To HTML",
    description: "Sololearn Certification.",
    icon: <BookOpen className="w-6 h-6 text-white/50" />,
    date: "Oct 2024",
  },
  {
    id: 9,
    title: "AI Bootcamp in MCET",
    description: "Certification of Completion.",
    icon: <Award className="w-6 h-6 text-violet-500" />,
    date: "Apr 2024",
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative w-full bg-black py-32 overflow-hidden font-sans border-t border-white/10">
      
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

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
              Track Record
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Awards and Wins.
          </h2>
        </motion.div>

        {/* Strict 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-white/[0.08]">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="border-r border-b border-white/[0.08] p-8 md:p-10 flex flex-col justify-between hover:bg-white/[0.02] hover:border-white/30 transition-colors duration-300 bg-black/60 backdrop-blur-md group"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 border border-white/10 bg-white/[0.02] group-hover:border-white/30 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono text-white/40 tracking-widest px-3 py-1 border border-white/10">
                    {item.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white tracking-tight mb-4 group-hover:text-[#71d300] transition-colors">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-white/50 text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
