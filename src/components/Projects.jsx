import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Code } from 'lucide-react';

const WireframeVisual = ({ id }) => {
  if (id === "01") {
    // Vanguard: Web Dashboard Wireframe
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-sm aspect-[4/3] border-2 border-white/20 bg-white/5 flex flex-col p-2 gap-2 relative shadow-2xl">
           <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-gray-500">/vanguard.json</div>
           {/* Header */}
           <div className="h-6 w-full border-b border-white/20 flex items-center gap-2 px-2">
             <div className="w-2 h-2 rounded-full bg-white/40"></div>
             <div className="w-16 h-2 bg-white/10"></div>
           </div>
           {/* Main Content Area */}
           <div className="flex-1 flex gap-2">
             {/* Sidebar */}
             <div className="w-1/4 h-full border-r border-white/10 flex flex-col gap-2 pt-2">
                <div className="w-3/4 h-2 bg-white/20"></div>
                <div className="w-1/2 h-2 bg-white/10"></div>
                <div className="w-2/3 h-2 bg-white/10"></div>
             </div>
             {/* Dashboard Grid */}
             <div className="flex-1 flex flex-col gap-2 p-1">
                <div className="flex gap-2 h-1/3">
                  <div className="flex-1 bg-white/10"></div>
                  <div className="flex-1 bg-white/10"></div>
                  <div className="flex-1 bg-white/10"></div>
                </div>
                <div className="flex-1 bg-white/5 relative overflow-hidden">
                   {/* Abstract chart line */}
                   <svg className="absolute inset-0 w-full h-full opacity-50" preserveAspectRatio="none" viewBox="0 0 100 100">
                     <path d="M 0 80 L 20 60 L 40 70 L 60 30 L 80 40 L 100 10" fill="none" stroke="white" strokeWidth="2" />
                   </svg>
                </div>
             </div>
           </div>
        </div>
      </div>
    );
  }
  if (id === "02") {
    // School ERP: Data Table / Portal Wireframe
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-sm aspect-[4/3] border-2 border-white/20 bg-white/5 flex flex-col p-4 gap-4 relative shadow-2xl">
           <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-gray-500">/school_erp.md</div>
           {/* Top controls */}
           <div className="flex justify-between items-center">
             <div className="w-24 h-4 bg-white/20"></div>
             <div className="flex gap-2">
               <div className="w-8 h-4 bg-white/10"></div>
               <div className="w-8 h-4 bg-white/10"></div>
             </div>
           </div>
           {/* Table */}
           <div className="flex-1 border border-white/10 flex flex-col">
             <div className="h-6 border-b border-white/10 flex gap-2 items-center px-2">
               <div className="w-1/4 h-1 bg-white/30"></div>
               <div className="w-1/4 h-1 bg-white/30"></div>
               <div className="w-1/4 h-1 bg-white/30"></div>
               <div className="w-1/4 h-1 bg-white/30"></div>
             </div>
             {[1,2,3,4].map(row => (
               <div key={row} className="flex-1 border-b border-white/5 flex gap-2 items-center px-2">
                 <div className="w-1/4 h-1 bg-white/10"></div>
                 <div className="w-1/4 h-1 bg-white/10"></div>
                 <div className="w-1/4 h-1 bg-white/10"></div>
                 <div className="w-1/4 h-1 bg-white/10"></div>
               </div>
             ))}
           </div>
        </div>
      </div>
    );
  }
  // Billing Software: Invoice Wireframe
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-sm aspect-[3/4] border-2 border-white/20 bg-white/5 flex flex-col p-6 gap-6 relative shadow-2xl">
         <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-gray-500">/billing_software.js</div>
         {/* Invoice Header */}
         <div className="flex justify-between items-start border-b border-white/20 pb-4">
           <div className="w-12 h-12 border-2 border-white/30 flex items-center justify-center">
             <div className="w-6 h-6 bg-white/20"></div>
           </div>
           <div className="flex flex-col items-end gap-1">
             <div className="w-20 h-3 bg-white/40"></div>
             <div className="w-16 h-2 bg-white/20"></div>
             <div className="w-12 h-2 bg-white/20"></div>
           </div>
         </div>
         {/* Invoice Lines */}
         <div className="flex flex-col gap-2">
           {[1,2,3].map(item => (
             <div key={item} className="flex justify-between items-center">
               <div className="w-1/2 h-2 bg-white/10"></div>
               <div className="w-8 h-2 bg-white/20"></div>
             </div>
           ))}
         </div>
         {/* Total */}
         <div className="mt-auto border-t border-white/20 pt-4 flex flex-col items-end gap-2">
            <div className="flex justify-between w-1/2">
               <div className="w-12 h-2 bg-white/10"></div>
               <div className="w-12 h-2 bg-white/20"></div>
            </div>
            <div className="flex justify-between w-1/2">
               <div className="w-12 h-2 bg-white/30"></div>
               <div className="w-16 h-3 bg-white/50"></div>
            </div>
         </div>
      </div>
    </div>
  );
};

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

  const ProjectBlock = ({ num, year, title, subtitle, desc, tech, status, yearScale, yearOpacity, contentX, contentOpacity, timelineOrientation }) => {
    
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
          className={`${yearClasses} z-10 flex items-center`}
        >
           <div className="text-[100px] md:text-[140px] leading-none font-black tracking-[-15px] text-black drop-shadow-2xl mix-blend-exclusion italic"
            style={{
                        color: 'black',
                        WebkitTextStroke: '1px rgba(255, 255, 255, 1)',
                      }}
              >
              {year}
           </div>
        </motion.div>
        
        {/* PROJECT DETAILS & WIREFRAME */}
        <motion.div 
          style={{ x: contentX, opacity: contentOpacity }} 
          className={`${contentClasses} pointer-events-auto z-20 gap-12`}
        >
          {/* Text Content */}
          <div className="flex-1 max-w-md">
            <div className="text-xs font-mono text-gray-400 mb-2 border-b border-white/20 pb-2">{subtitle}</div>
            <h3 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-4 text-white">{title}</h3>
            <p className="text-sm md:text-base text-gray-400 font-mono leading-relaxed mb-6">
              {desc}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
               <div>
                  <div className="text-[10px] text-gray-500 font-bold mb-2 uppercase tracking-widest">Status</div>
                  <div className="text-sm font-mono text-white flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${status === 'Completed' ? 'bg-white' : 'bg-white/40'}`}></div>
                    {status}
                  </div>
               </div>
               <div>
                  <div className="text-[10px] text-gray-500 font-bold mb-2 uppercase tracking-widest">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                      <span key={i} className="text-[10px] border border-white/20 px-2 py-1 text-gray-300">{t}</span>
                    ))}
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-4 border-t border-white/20 pt-6">
               <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors">
                 Demo <ArrowUpRight className="w-4 h-4" />
               </a>
               <span className="text-white/20">|</span>
               <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors">
                 Source <Code className="w-4 h-4" />
               </a>
            </div>
          </div>

          {/* Wireframe Visual */}
          <div className="w-80 shrink-0 hidden lg:block">
            <WireframeVisual id={num} />
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
          num="01" year="2024" title="Vanguard" subtitle="Web-based Platform / /vanguard.json"
          desc="A web-based platform developed to deliver efficient and user-focused digital solutions with a strong emphasis on functionality, performance, and user experience."
          tech={["React.js", "Node.js", "MongoDB"]} status="Completed"
          yearScale={p1YearScale} yearOpacity={p1YearOpacity} contentX={p1ContentX} contentOpacity={p1ContentOpacity} 
          timelineOrientation="vertical-left"
        />

        {/* PROJECT 02 */}
        <ProjectBlock 
          num="02" year="2023" title="School ERP System" subtitle="Full-Stack School Management / /school_erp.md"
          desc="Features include Admin Dashboard, Teacher/Student/Parent Portals, Attendance, Examination & Marks Tracking, and Fee Management."
          tech={["React.js", "Tailwind CSS", "Node.js", "MongoDB"]} status="Completed"
          yearScale={p2YearScale} yearOpacity={p2YearOpacity} contentX={p2ContentX} contentOpacity={p2ContentOpacity} 
          timelineOrientation="horizontal-top"
        />

        {/* PROJECT 03 */}
        <ProjectBlock 
          num="03" year="2022" title="Billing Software" subtitle="Invoice & Business Management / /billing_software.js"
          desc="Features include Product Management, Invoice Generation, Customer Management, Payment Tracking, and Business Analytics."
          tech={["MongoDB", "Express.js", "React.js", "Node.js"]} status="In Progress"
          yearScale={p3YearScale} yearOpacity={p3YearOpacity} contentX={p3ContentX} contentOpacity={p3ContentOpacity} 
          timelineOrientation="vertical-left"
        />

      </div>
    </section>
  );
};

export default Projects;
