import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Rocket, Star } from 'lucide-react';

const achievementsData = [
  {
    id: 1,
    title: "Freshwarite Prelims",
    description: "First Prize in UI/UX Design at Sri Eshwar College of Engineering",
    icon: <Medal className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-400/20 to-orange-500/20",
    border: "group-hover:border-yellow-400/50"
  },
  {
    id: 2,
    title: "Design Showdown",
    description: "First Place in UI/UX Competition at Sri Eshwar College of Engineering",
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-400/20 to-amber-500/20",
    border: "group-hover:border-yellow-400/50"
  },
  {
    id: 3,
    title: "Hack the Horizon",
    description: "Top 50 among 130+ teams",
    icon: <Rocket className="w-8 h-8 text-blue-400" />,
    color: "from-blue-400/20 to-indigo-500/20",
    border: "group-hover:border-blue-400/50"
  },
  {
    id: 4,
    title: "Eureka! 2025",
    description: "Zonalist, Social Track, Eureka! 2025",
    icon: <Star className="w-8 h-8 text-purple-400" />,
    color: "from-purple-400/20 to-pink-500/20",
    border: "group-hover:border-purple-400/50"
  }
];

const Achievements = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden" id="achievements">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-white/30"></div>
            <span className="text-sm uppercase tracking-widest text-gray-400 font-medium">Milestones</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
            My <span className="text-outline">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 p-8 transition-all duration-500 hover:bg-white/[0.04] ${achievement.border}`}
            >
              {/* Background gradient blob */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${achievement.color} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="mb-6 p-4 rounded-xl bg-white/[0.05] inline-flex border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    {achievement.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
