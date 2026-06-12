import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // TIMELINE MORPHING LOGIC
  // A thick white line acting as the backbone
  const pathData = useTransform(
    scrollYProgress,
    [0, 0.05, 0.28, 0.35, 0.55, 0.65],
    [
      "M 300 0 L 300 800", // P1: Vertical left
      "M 300 0 L 300 800", // P1: Vertical left
      "M 300 0 L 300 800", // End P1
      "M 0 350 L 1200 350", // P2: Horizontal top
      "M 0 350 L 1200 350", // End P2
      "M 300 0 L 300 800", // P3: Vertical left again
    ]
  );

  const pathLength = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  // ==============================
  // PROJECT 01: VANGUARD
  // ==============================
  const p1YearScale = useTransform(scrollYProgress, [0, 0.28, 0.32], [1, 1, 0.5]);
  const p1YearOpacity = useTransform(scrollYProgress, [0, 0.28, 0.32], [1, 1, 0]);
  const p1ContentX = useTransform(scrollYProgress, [0, 0.28, 0.31], [0, 0, -50]);
  const p1ContentOpacity = useTransform(scrollYProgress, [0, 0.28, 0.31], [1, 1, 0]);

  // ==============================
  // PROJECT 02: SCHOOL ERP
  // ==============================
  const p2YearScale = useTransform(scrollYProgress, [0.32, 0.38, 0.55, 0.60], [0.5, 1, 1, 0.5]);
  const p2YearOpacity = useTransform(scrollYProgress, [0.32, 0.38, 0.55, 0.60], [0, 1, 1, 0]);
  const p2ContentX = useTransform(scrollYProgress, [0.35, 0.4, 0.55, 0.59], [50, 0, 0, -50]);
  const p2ContentOpacity = useTransform(scrollYProgress, [0.35, 0.4, 0.55, 0.59], [0, 1, 1, 0]);

  // ==============================
  // PROJECT 03: BILLING SOFTWARE
  // ==============================
  const p3YearScale = useTransform(scrollYProgress, [0.62, 0.68, 0.90, 0.95], [0.5, 1, 1, 0.5]);
  const p3YearOpacity = useTransform(scrollYProgress, [0.62, 0.68, 0.90, 0.95], [0, 1, 1, 0]);
  const p3ContentX = useTransform(scrollYProgress, [0.65, 0.7, 0.90, 0.94], [50, 0, 0, -50]);
  const p3ContentOpacity = useTransform(scrollYProgress, [0.65, 0.7, 0.90, 0.94], [0, 1, 1, 0]);

  const ProjectBlock = ({ num, date, year, yearSubtext, title, desc, tech, yearScale, yearOpacity, contentX, contentOpacity, timelineOrientation }) => {

    // Position classes based on timeline orientation
    // We position the huge year exactly on the timeline
    const yearClasses = timelineOrientation === 'vertical-left'
      ? 'absolute left-[230px] top-[480px] -translate-y-1/2 -translate-x-1/2'
      : timelineOrientation === 'horizontal-top'
        ? 'absolute top-[350px] left-1/2 -translate-x-1/2 -translate-y-1/2'
        : 'absolute left-[800px] top-1/2 -translate-y-1/2 -translate-x-1/2';

    const contentClasses = timelineOrientation === 'vertical-left'
      ? 'absolute left-[450px] top-1/2 -translate-y-1/2 w-[calc(100%-500px)] flex items-center justify-between'
      : timelineOrientation === 'horizontal-top'
        ? 'absolute top-[450px] left-1/2 -translate-x-1/2 w-[800px] flex items-center justify-between'
        : 'absolute right-[calc(100vw-650px)] top-1/2 -translate-y-1/2 w-[600px] flex items-center justify-between flex-row-reverse';

    return (
      <div className="absolute inset-0 pointer-events-none">

        {/* MASSIVE YEAR EXACTLY ON THE TIMELINE */}
        <motion.div
          style={{ scale: yearScale, opacity: yearOpacity }}
          className={`${yearClasses} z-10 flex items-center justify-center`}
        >
          <div className="relative flex flex-col">
            {date && (
              <div className="absolute -top-4 right-0 md:-top-6 md:-right-2 text-black text-sm md:text-base font-black tracking-[0.2em] uppercase z-20 whitespace-nowrap"
                style={{ textShadow: '0 0 10px rgba(255,255,255,0.8), 0 2px 4px rgba(255,255,255,0.5)' }}>
                {date}
              </div>
            )}
            <div className="text-[80px] md:text-[120px] leading-none font-black tracking-[-6px] md:tracking-[-8px] italic relative z-10"
              style={{
                color: '#1a1a1a',
                textShadow: '8px 8px 0px rgba(255,255,255,0.05), 15px 15px 30px rgba(0,0,0,1)',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.9)',
              }}
            >
              {year}
            </div>
            {yearSubtext && (
              <div className="absolute -bottom-6 left-2 md:-bottom-8 md:left-4 text-[8px] md:text-[10px] text-gray-400 font-mono tracking-widest text-left leading-relaxed uppercase whitespace-pre-line z-20">
                {yearSubtext}
              </div>
            )}
          </div>
        </motion.div>

        {/* PROJECT DETAILS */}
        <motion.div
          style={{ x: contentX, opacity: contentOpacity }}
          className={`${contentClasses} pointer-events-auto z-20 gap-12`}
        >
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <h3 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-tighter">{title}</h3>
            <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed mb-8 max-w-xl">
              {desc}
            </p>

            <div className="mb-10">
              <div className="text-[10px] text-gray-500 font-bold mb-4 uppercase tracking-widest">Tech Stack</div>
              <div className="flex flex-wrap gap-3">
                {tech.map((t, i) => (
                  <span key={i} className="text-xs font-medium border border-white/10 bg-white/5 rounded-full px-5 py-2.5 text-gray-300 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all cursor-default">{t}</span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a href="#" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <span className="relative z-10 flex items-center gap-2">
                  View Demo <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    );
  };

  return (
    <section ref={containerRef} className="relative bg-black text-white font-sans" style={{ height: '400vh' }} id="projects">

      {/* PINNED VIEWPORT */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-black">

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

        {/* Animated SVG Timeline Line */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <svg className="w-full h-full" viewBox="0 0 1700 800" preserveAspectRatio="none">
            <motion.path
              d={pathData}
              stroke="white"
              strokeWidth="300"
              fill="none"
              style={{ pathLength }}
            />
          </svg>
        </div>

        {/* PROJECT 01 */}
        <ProjectBlock
          num="01" date="15TH AUGUST" year="2024" yearSubtext={"LORUM IPSUM UDOR MES\nPOLAR DOMEQUE QIS"} title="Vanguard"
          desc="A web-based platform developed to deliver efficient and user-focused digital solutions with a strong emphasis on functionality, performance, and user experience."
          tech={["React.js", "Node.js", "MongoDB"]}
          yearScale={p1YearScale} yearOpacity={p1YearOpacity} contentX={p1ContentX} contentOpacity={p1ContentOpacity}
          timelineOrientation="vertical-left"
        />

        {/* PROJECT 02 */}
        <ProjectBlock
          num="02" date="03RD MAY" year="2023" yearSubtext={"TERMAINO ORLAND\nORQ DORAM JERA"} title="School ERP System"
          desc="Features include Admin Dashboard, Teacher/Student/Parent Portals, Attendance, Examination & Marks Tracking, and Fee Management."
          tech={["React.js", "Tailwind CSS", "Node.js", "MongoDB"]}
          yearScale={p2YearScale} yearOpacity={p2YearOpacity} contentX={p2ContentX} contentOpacity={p2ContentOpacity}
          timelineOrientation="horizontal-top"
        />

        {/* PROJECT 03 */}
        <ProjectBlock
          num="03" date="12TH NOVEMBER" year="2022" yearSubtext={"LORUM IPSUM UDOR MES\nPOLAR DOMEQUE QIS"} title="Billing Software"
          desc="Features include Product Management, Invoice Generation, Customer Management, Payment Tracking, and Business Analytics."
          tech={["MongoDB", "Express.js", "React.js", "Node.js"]}
          yearScale={p3YearScale} yearOpacity={p3YearOpacity} contentX={p3ContentX} contentOpacity={p3ContentOpacity}
          timelineOrientation="vertical-left"
        />

      </div>
    </section>
  );
};

export default Projects;
