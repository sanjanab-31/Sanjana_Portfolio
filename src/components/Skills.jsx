import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, PenTool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="mb-4 text-gray-400" size={32} />,
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Web Design"]
    },
    {
      title: "Backend",
      icon: <Server className="mb-4 text-gray-400" size={32} />,
      skills: ["Node.js", "Express.js", "REST API Development", "Authentication"]
    },
    {
      title: "Database",
      icon: <Database className="mb-4 text-gray-400" size={32} />,
      skills: ["MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      title: "UI/UX & Tools",
      icon: <PenTool className="mb-4 text-gray-400" size={32} />,
      skills: ["Figma", "Wireframing", "Git & GitHub", "Vercel", "Canva"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight">
            Technical<span className="text-outline"> Arsenal</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="border border-white/10 p-8 rounded-2xl bg-[#050505] hover:bg-white/[0.02] transition-colors group"
            >
              <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-medium mb-6 text-white">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-gray-400 font-light flex items-center gap-2 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 flex flex-wrap justify-center gap-8 text-gray-500 font-display italic text-2xl"
        >
          <span>JavaScript</span>
          <span>&times;</span>
          <span>C</span>
          <span>&times;</span>
          <span>SQL</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
