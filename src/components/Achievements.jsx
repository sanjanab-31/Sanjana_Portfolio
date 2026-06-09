import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Rocket, Star, ChevronRight, ChevronLeft } from 'lucide-react';

const achievementsData = [
  {
    id: 1,
    title: "Freshwarite Prelims",
    description: "First Prize in UI/UX Design at Sri Eshwar College of Engineering. Demonstrated exceptional interface design and user experience strategies under tight deadlines.",
    icon: <Medal className="w-8 h-8 text-yellow-400" />,
    date: "2024",
    bgGradient: "from-yellow-400/10 to-transparent",
    borderColor: "group-hover:border-yellow-400/50",
    glowColor: "group-hover:shadow-[0_0_40px_-10px_rgba(250,204,21,0.3)]",
  },
  {
    id: 2,
    title: "Design Showdown",
    description: "First Place in UI/UX Competition. Judged on creativity, usability, and problem-solving through innovative design.",
    icon: <Trophy className="w-8 h-8 text-amber-400" />,
    date: "2024",
    bgGradient: "from-amber-400/10 to-transparent",
    borderColor: "group-hover:border-amber-400/50",
    glowColor: "group-hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.3)]",
  },
  {
    id: 3,
    title: "Hack the Horizon",
    description: "Top 50 among 130+ teams. Developed an innovative full-stack solution to tackle real-world challenges.",
    icon: <Rocket className="w-8 h-8 text-blue-400" />,
    date: "2023",
    bgGradient: "from-blue-400/10 to-transparent",
    borderColor: "group-hover:border-blue-400/50",
    glowColor: "group-hover:shadow-[0_0_40px_-10px_rgba(96,165,250,0.3)]",
  },
  {
    id: 4,
    title: "Eureka! 2025",
    description: "Zonalist, Social Track at Eureka! 2025. Pitched a scalable business model focused on social impact.",
    icon: <Star className="w-8 h-8 text-purple-400" />,
    date: "2025",
    bgGradient: "from-purple-400/10 to-transparent",
    borderColor: "group-hover:border-purple-400/50",
    glowColor: "group-hover:shadow-[0_0_40px_-10px_rgba(192,132,252,0.3)]",
  }
];

const Achievements = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden" id="achievements">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-purple-900/10 blur-[120px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 mb-6"
            >
              <Trophy className="w-4 h-4 text-gray-400" />
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300 font-medium">Recognition</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              Milestones <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">&</span> Accolades
            </motion.h2>
          </div>

          {/* Navigation Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 pb-2"
          >
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm bg-white/5"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm bg-white/5"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scrollable Cards Container */}
      <div className="relative w-full pl-4 md:pl-12 lg:pl-24">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-16 pt-4 pr-12 lg:pr-24 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`snap-start shrink-0 w-[300px] md:w-[400px] group relative overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/5 transition-all duration-500 ${item.borderColor} ${item.glowColor} hover:-translate-y-2`}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative p-8 h-full flex flex-col justify-between min-h-[380px]">
                {/* Top Section */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500">
                    {item.icon}
                  </div>
                  
                  <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    {item.date}
                  </span>
                </div>

                {/* Bottom Section */}
                <div className="mt-auto relative z-10">
                  <h3 className="text-2xl font-medium text-white mb-4 tracking-wide transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed text-[15px] group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
};

export default Achievements;
