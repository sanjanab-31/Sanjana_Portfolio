import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, Sparkles, Folder, FileJson, FileText, FileCode, Terminal, 
  Layers, MousePointer, Maximize2, Grid, List, ChevronRight, Plus, 
  Search, ExternalLink, ChevronDown, Play, Settings, Menu, 
  Share2, HelpCircle, User, Monitor, ZoomIn, Eye, Code2
} from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    id: "01",
    title: "Vanguard",
    subtitle: "Web-based Platform",
    description: "A web-based platform developed to deliver efficient and user-focused digital solutions with a strong emphasis on functionality, performance, and user experience.",
    tech: ["React.js", "Node.js", "MongoDB"],
    status: "Completed",
    file: "vanguard.json",
    lang: "json",
    liveUrl: "https://vanguard.example.com",
    githubUrl: "https://github.com/sanjana/vanguard",
    figmaProps: { x: 80, y: 120, w: 320, h: 290, bg: "#0f0f15" },
    code: `{
  "name": "vanguard-platform",
  "version": "2.4.0",
  "status": "deployed",
  "dependencies": {
    "react": "^19.2.7",
    "express": "^4.21.0",
    "mongodb": "^6.3.0"
  },
  "metrics": {
    "lighthouse": 98,
    "uptime": "99.99%",
    "loadTime": "0.45s"
  }
}`
  },
  {
    id: "02",
    title: "School ERP System",
    subtitle: "Full-Stack School Management",
    description: "Features include Admin Dashboard, Teacher/Student/Parent Portals, Attendance, Examination & Marks Tracking, and Fee Management.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    status: "Completed",
    file: "school_erp.md",
    lang: "markdown",
    liveUrl: "https://erp.example.com",
    githubUrl: "https://github.com/sanjana/school-erp",
    figmaProps: { x: 440, y: 120, w: 320, h: 290, bg: "#0b0c10" },
    code: `# School ERP System

## Product Overview
A modular enterprise resource planning system designed specifically for educational institutions to sync administration, parents, and students.

## Key Modules
1. **Academic Tracker**: Course scheduling and grading engines
2. **Finance Portal**: Stripe invoice generation and billing
3. **Attendance**: RFID scanning integration`
  },
  {
    id: "03",
    title: "Billing Software",
    subtitle: "Invoice & Business Management",
    description: "Features include Product Management, Invoice Generation, Customer Management, Payment Tracking, and Business Analytics.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    status: "In Progress",
    file: "billing_software.js",
    lang: "javascript",
    liveUrl: "https://billing.example.com",
    githubUrl: "https://github.com/sanjana/billing-software",
    figmaProps: { x: 800, y: 120, w: 320, h: 290, bg: "#10121a" },
    code: `// Billing Software Logic
import { Invoice } from '../models/Invoice';
import { generatePDF } from '../utils/pdfGenerator';

export const createInvoice = async (req, res) => {
  try {
    const { customerId, items, discount } = req.body;
    const invoice = new Invoice({ customerId, items, discount });
    await invoice.save();
    const pdfUrl = await generatePDF(invoice);
    res.status(201).json({ success: true, pdfUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};`
  }
];

const Projects = () => {
  const [activeTheme, setActiveTheme] = useState('ide'); // 'notion' | 'ide' | 'figma'
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [isTerminalRunning, setIsTerminalRunning] = useState(false);
  const terminalContainerRef = useRef(null);

  // Auto-run terminal logic when project index changes in IDE theme
  useEffect(() => {
    if (activeTheme !== 'ide') return;
    
    const currentProject = projects[selectedIdx];
    setIsTerminalRunning(true);
    
    // Initial commands
    setTerminalLogs([
      `sanjana@portfolio:~$ npm run dev --project=${currentProject.title.toLowerCase().replace(/\s+/g, '_')}`
    ]);

    const logsSequence = [
      `> ${currentProject.title.toLowerCase().replace(/\s+/g, '_')}@1.0.0 dev`,
      `> vite --mode development`,
      ` `,
      `  VITE v5.1.4  ready in 235 ms`,
      ` `,
      `  ➜  Local:   http://localhost:5173/`,
      `  ➜  Network: use --host to expose`,
      `  ➜  press h + enter to show help`,
      ` `,
      `[db] establishing connection to MongoDB Cluster...`,
      `[db] connection successful [latency: 38ms]`,
      `[sync] loading mock databases...`,
      `[success] all systems active. ready to compile!`,
      `sanjana@portfolio:~$ `
    ];

    let currentLogIdx = 0;
    const interval = setInterval(() => {
      if (currentLogIdx < logsSequence.length) {
        const logLine = logsSequence[currentLogIdx];
        setTerminalLogs(prev => [...prev, logLine]);
        currentLogIdx++;
      } else {
        setIsTerminalRunning(false);
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [selectedIdx, activeTheme]);

  // Keep terminal scrolled to bottom without forcing page scroll
  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  // Helper to color code lines
  const renderCodeLines = (codeStr, lang) => {
    const lines = codeStr.split('\n');
    return (
      <div className="font-mono text-xs md:text-sm text-gray-300 leading-relaxed overflow-x-auto select-text w-full h-full py-2">
        {lines.map((line, i) => {
          let lineContent = line;
          let colorClass = "text-gray-300";

          // Simple token coloring
          if (lang === 'json') {
            if (line.includes('"name"') || line.includes('"version"') || line.includes('"status"') || line.includes('"dependencies"') || line.includes('"metrics"') || line.includes('"lighthouse"') || line.includes('"uptime"') || line.includes('"loadTime"')) {
              colorClass = "text-sky-400";
            } else if (line.includes(': "')) {
              colorClass = "text-amber-300";
            } else if (line.includes(': {') || line.includes('}') || line.includes(']')) {
              colorClass = "text-yellow-500";
            }
          } else if (lang === 'markdown') {
            if (line.startsWith('#')) {
              colorClass = "text-emerald-400 font-bold";
            } else if (line.startsWith('*') || line.startsWith('1.')) {
              colorClass = "text-indigo-400";
            }
          } else if (lang === 'javascript') {
            if (line.startsWith('import') || line.startsWith('export') || line.includes('const') || line.includes('await') || line.includes('try') || line.includes('catch')) {
              colorClass = "text-purple-400";
            } else if (line.includes('//')) {
              colorClass = "text-gray-500 italic";
            } else if (line.includes('true') || line.includes('500') || line.includes('201')) {
              colorClass = "text-orange-400";
            }
          }

          return (
            <div key={i} className="flex hover:bg-white/5 px-2">
              <span className="w-8 text-right pr-3 text-gray-600 font-mono select-none border-r border-white/5 mr-3 shrink-0">
                {i + 1}
              </span>
              <span className={`whitespace-pre-wrap ${colorClass}`}>
                {lineContent}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  // 1. NOTION DATABASE VIEW
  const renderNotionView = () => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        className="bg-[#191919] border border-[#2c2c2c] rounded-2xl overflow-hidden font-sans text-gray-200 text-left shadow-2xl relative"
      >
        {/* Cover image banner */}
        <div className="h-36 w-full bg-gradient-to-r from-indigo-950 via-purple-900 to-pink-950 opacity-80 relative border-b border-[#2c2c2c]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute bottom-2 right-4 px-3 py-1 rounded bg-black/40 text-[10px] text-gray-400 hover:bg-black/60 transition-colors cursor-pointer border border-[#2c2c2c]">
            Change cover
          </div>
        </div>

        <div className="px-6 md:px-10 pb-10 relative">
          {/* Notion Page Icon */}
          <div className="text-4xl bg-[#191919] w-16 h-16 rounded-2xl flex items-center justify-center border border-[#2c2c2c] absolute -top-8 shadow-xl hover:scale-105 transition-transform duration-200 select-none cursor-pointer">
            📁
          </div>

          {/* Breadcrumbs */}
          <div className="pt-12 flex items-center gap-1.5 text-xs text-gray-500 font-mono">
            <span>workspace</span>
            <span className="text-gray-700">/</span>
            <span>engineering</span>
            <span className="text-gray-700">/</span>
            <span className="text-gray-300">selected_works</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-1 tracking-tight">Selected Works</h2>
          <p className="text-xs md:text-sm text-gray-400 font-light mb-6">
            A relational table mapping core software architectures, tech profiles, and source codes.
          </p>

          {/* Notion Controls Menu */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2c2c2c] pb-3 mb-6 text-xs text-gray-400 font-mono">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-white flex items-center gap-1.5 border-b-2 border-white pb-2.5 px-1 cursor-pointer">
                <Grid className="w-3.5 h-3.5" /> Gallery view
              </span>
              <span className="hover:text-white cursor-pointer pb-2.5 px-1 transition-colors">+ Add view</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1 bg-[#202020] border border-[#2c2c2c] px-2.5 py-1.5 rounded-md hover:bg-[#252525] cursor-pointer transition-colors">
                <Search className="w-3 h-3 text-gray-500" />
                <span>Search</span>
              </div>
              <div className="bg-[#202020] border border-[#2c2c2c] px-2.5 py-1.5 rounded-md hover:bg-[#252525] cursor-pointer transition-colors">
                <span>Filter</span>
              </div>
              <div className="bg-[#202020] border border-[#2c2c2c] px-2.5 py-1.5 rounded-md hover:bg-[#252525] cursor-pointer transition-colors">
                <span>Sort</span>
              </div>
              <div className="bg-indigo-600 hover:bg-indigo-500 text-white px-2.5 py-1.5 rounded-md font-semibold cursor-pointer transition-colors flex items-center gap-1 font-sans">
                <span>New</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Gallery Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group bg-[#202020] border border-[#2c2c2c] hover:border-[#3d3d3d] rounded-xl overflow-hidden transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Subtle placeholder design mockup visual inside Card header */}
                  <div className="h-24 bg-[#151515] border-b border-[#2c2c2c] p-4 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                    <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-1">
                      {project.subtitle}
                    </span>
                    <span className="text-xs font-mono font-semibold text-gray-300">
                      /{project.file}
                    </span>
                  </div>
                  
                  {/* Title & Desc */}
                  <div className="p-4">
                    <h3 className="font-bold text-base text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-2 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Properties list */}
                <div className="px-4 pb-4 pt-2 border-t border-[#2c2c2c] flex flex-col gap-2.5 text-[11px]">
                  <div className="flex items-center">
                    <span className="text-gray-500 w-16">Status:</span>
                    <span className={`px-2 py-0.5 rounded font-mono font-semibold text-[9px] ${
                      project.status === 'Completed' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="flex items-start">
                    <span className="text-gray-500 w-16 pt-0.5">Tech:</span>
                    <div className="flex flex-wrap gap-1 max-w-[170px]">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded text-[9px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="text-gray-500 w-16">Actions:</span>
                    <div className="flex items-center gap-3 font-semibold">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 flex items-center gap-0.5"
                      >
                        Demo <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                      <span className="text-gray-700">|</span>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white flex items-center gap-0.5"
                      >
                        Source <FiGithub className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  // 2. VS CODE IDE VIEW
  const renderIdeView = () => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        className="bg-[#0b0c10] border border-white/10 rounded-2xl overflow-hidden font-mono text-gray-200 text-left shadow-2xl flex flex-col h-[650px] relative"
      >
        {/* Editor Title Bar */}
        <div className="bg-[#12131a] px-4 py-3 flex items-center justify-between border-b border-white/5 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
          </div>
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <Monitor className="w-3.5 h-3.5" />
            <span>sanjana-portfolio - {projects[selectedIdx].file}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <Play className="w-3.5 h-3.5 hover:text-emerald-400 cursor-pointer" />
            <Maximize2 className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Main Interface Layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-48 bg-[#0e0f14] border-r border-white/5 hidden md:flex flex-col select-none text-xs text-gray-400">
            <div className="p-3 uppercase tracking-wider text-[10px] font-bold text-gray-500 border-b border-white/5 flex items-center justify-between">
              <span>Explorer</span>
              <Settings className="w-3.5 h-3.5 cursor-pointer text-gray-600 hover:text-white" />
            </div>
            
            {/* File Directory Structure */}
            <div className="p-2 space-y-2 flex-grow overflow-y-auto">
              <div className="flex items-center gap-1 text-gray-300 font-bold">
                <ChevronRight className="w-3.5 h-3.5 rotate-90 shrink-0" />
                <span>portfolio</span>
              </div>
              <div className="pl-4 space-y-1">
                <div className="flex items-center gap-1.5 text-gray-400">
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  <Folder className="w-3.5 h-3.5 text-sky-500" />
                  <span>src</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-300">
                  <ChevronRight className="w-3.5 h-3.5 rotate-90 shrink-0" />
                  <Folder className="w-3.5 h-3.5 text-indigo-500" />
                  <span>projects</span>
                </div>
                
                {/* Clickable project files */}
                <div className="pl-4 space-y-0.5">
                  {projects.map((p, idx) => {
                    const isActive = idx === selectedIdx;
                    return (
                      <button 
                        key={p.id}
                        onClick={() => setSelectedIdx(idx)}
                        className={`w-full flex items-center gap-2 py-1 px-2 rounded hover:bg-white/5 text-left transition-colors ${
                          isActive ? 'bg-white/10 text-white font-semibold' : 'text-gray-400'
                        }`}
                      >
                        {p.lang === 'json' && <FileJson className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                        {p.lang === 'markdown' && <FileText className="w-3.5 h-3.5 text-sky-400 shrink-0" />}
                        {p.lang === 'javascript' && <FileCode className="w-3.5 h-3.5 text-yellow-400 shrink-0" />}
                        <span className="truncate">{p.file}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Editor Container */}
          <div className="flex-1 flex flex-col bg-[#08080b] overflow-hidden">
            {/* Editor Tabs */}
            <div className="bg-[#0e0f14] border-b border-white/5 flex text-xs select-none overflow-x-auto shrink-0">
              {projects.map((p, idx) => {
                const isActive = idx === selectedIdx;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedIdx(idx)}
                    className={`px-4 py-2.5 flex items-center gap-2 border-r border-white/5 hover:bg-white/[0.02] transition-colors relative ${
                      isActive ? 'bg-[#08080b] text-white font-semibold border-t-2 border-sky-500' : 'text-gray-500'
                    }`}
                  >
                    {p.lang === 'json' && <FileJson className="w-3.5 h-3.5 text-amber-500" />}
                    {p.lang === 'markdown' && <FileText className="w-3.5 h-3.5 text-sky-400" />}
                    {p.lang === 'javascript' && <FileCode className="w-3.5 h-3.5 text-yellow-400" />}
                    <span>{p.file}</span>
                  </button>
                );
              })}
            </div>

            {/* Code Content Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col">
              {/* Floating Live Indicator */}
              <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 rounded-lg p-3.5 mb-4 shrink-0">
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold">Loaded Module</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">{projects[selectedIdx].title}</p>
                </div>
                <div className="flex gap-3 text-xs">
                  <a 
                    href={projects[selectedIdx].liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold px-3 py-1.5 rounded flex items-center gap-1 transition-all"
                  >
                    Deploy Preview <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href={projects[selectedIdx].githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="border border-white/10 hover:bg-white/5 text-gray-300 font-semibold px-3 py-1.5 rounded flex items-center gap-1 transition-all"
                  >
                    Source Code <FiGithub className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex-grow">
                {renderCodeLines(projects[selectedIdx].code, projects[selectedIdx].lang)}
              </div>
            </div>

            {/* Terminal Panel */}
            <div className="h-44 bg-[#0d0e15] border-t border-white/5 flex flex-col overflow-hidden shrink-0">
              <div className="bg-[#12131a] px-4 py-1.5 flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-wider select-none shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-white border-b border-white pb-0.5 font-bold flex items-center gap-1.5 cursor-pointer">
                    <Terminal className="w-3 h-3 text-sky-400" /> Terminal
                  </span>
                  <span className="hover:text-white cursor-pointer pb-0.5">Problems</span>
                  <span className="hover:text-white cursor-pointer pb-0.5">Output</span>
                  <span className="hover:text-white cursor-pointer pb-0.5">Debug Console</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  {isTerminalRunning ? (
                    <span className="flex h-1.5 w-1.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                  ) : (
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                  )}
                  <span>Vite Server</span>
                </div>
              </div>

              {/* Console Logs */}
              <div 
                ref={terminalContainerRef}
                className="flex-grow p-3 font-mono text-[11px] overflow-y-auto space-y-1 select-text selection:bg-white/10 scrollbar-thin"
              >
                {terminalLogs.map((log, idx) => {
                  if (typeof log !== 'string') return null;
                  let colorClass = "text-gray-400";
                  if (log.startsWith('sanjana@portfolio')) {
                    colorClass = "text-emerald-400 font-semibold";
                  } else if (log.startsWith('[success]') || log.startsWith('✓')) {
                    colorClass = "text-emerald-400";
                  } else if (log.startsWith('[db]') || log.startsWith('[sync]')) {
                    colorClass = "text-amber-400";
                  } else if (log.includes('http://')) {
                    colorClass = "text-sky-400 underline decoration-sky-500/30";
                  } else if (log.includes('VITE v')) {
                    colorClass = "text-white font-bold";
                  }
                  
                  return (
                    <div key={idx} className={`${colorClass} leading-tight whitespace-pre-wrap`}>
                      {log}
                    </div>
                  );
                })}
                {/* Cursor blink */}
                {isTerminalRunning && (
                  <span className="inline-block w-1.5 h-3 bg-white ml-0.5 animate-[pulse_1s_infinite]"></span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // 3. FIGMA DESIGN CANVAS VIEW
  const renderFigmaView = () => {
    const activeFigmaProject = projects[selectedIdx];
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        className="bg-[#1e1e1e] border border-[#2c2c2c] rounded-2xl overflow-hidden font-sans text-gray-200 text-left shadow-2xl flex flex-col h-[650px] relative"
      >
        {/* Figma Toolbar */}
        <div className="bg-[#2c2c2c] px-4 py-2 flex items-center justify-between border-b border-[#1c1c1c] text-xs select-none">
          <div className="flex items-center gap-3">
            <Menu className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            <div className="h-4 w-px bg-white/10"></div>
            {/* Design tools */}
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-indigo-600 text-white cursor-pointer"><MousePointer className="w-3.5 h-3.5" /></span>
              <span className="p-1 rounded hover:bg-white/5 cursor-pointer text-gray-400 hover:text-white"><Layers className="w-3.5 h-3.5" /></span>
              <span className="p-1 rounded hover:bg-white/5 cursor-pointer text-gray-400 hover:text-white"><Grid className="w-3.5 h-3.5" /></span>
              <span className="p-1 rounded hover:bg-white/5 cursor-pointer text-gray-400 hover:text-white"><FileText className="w-3.5 h-3.5" /></span>
            </div>
          </div>
          
          <div className="text-gray-300 font-medium text-[11px] truncate px-4">
            📁 Sanjana Portfolio / <span className="text-gray-400 font-mono">Selected_Works.fig</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-1">
              <span className="w-5 h-5 rounded-full bg-blue-500 border border-[#2c2c2c] text-[8px] flex items-center justify-center font-bold text-white uppercase">SB</span>
              <span className="w-5 h-5 rounded-full bg-amber-500 border border-[#2c2c2c] text-[8px] flex items-center justify-center font-bold text-white uppercase">VS</span>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-[10px] px-2.5 py-1 rounded transition-colors">
              Share
            </button>
            <Play className="w-3.5 h-3.5 text-gray-400 hover:text-white cursor-pointer" />
            <div className="h-4 w-px bg-white/10"></div>
            <div className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-white cursor-pointer">
              <span>88%</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Main Work Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left panel - Layers */}
          <div className="w-48 bg-[#2c2c2c] border-r border-[#1c1c1c] text-xs text-gray-400 select-none hidden md:flex flex-col shrink-0">
            <div className="p-2.5 font-bold uppercase text-[10px] text-gray-500 border-b border-[#1c1c1c]">
              Layers
            </div>
            <div className="p-2 space-y-1.5">
              <div className="flex items-center gap-1 text-gray-200">
                <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span># Design Canvas</span>
              </div>
              <div className="pl-4 space-y-1">
                {projects.map((p, idx) => {
                  const isActive = idx === selectedIdx;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedIdx(idx)}
                      className={`w-full flex items-center gap-1.5 py-1 px-1.5 rounded text-left ${
                        isActive ? 'bg-indigo-500/10 text-indigo-300 font-semibold' : 'hover:bg-white/5 text-gray-400'
                      }`}
                    >
                      <Grid className="w-3.5 h-3.5 text-indigo-400/70" />
                      <span className="truncate">Frame: {p.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Canvas workspace */}
          <div className="flex-1 bg-[#1e1e1e] relative overflow-auto p-8 flex items-center justify-start md:justify-center bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:16px_16px] min-w-[500px]">
            {/* Visual guide markers */}
            <div className="absolute top-2 left-2 text-[10px] font-mono text-gray-600 select-none pointer-events-none">
              Canvas workspace X: 0, Y: 0
            </div>

            {/* Multiplayer Cursor Simulation */}
            <motion.div 
              animate={{ x: [100, 320, 200, 100], y: [80, 200, 140, 80] }}
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
              className="absolute pointer-events-none z-30 flex flex-col"
            >
              <MousePointer className="w-4 h-4 text-emerald-400 fill-emerald-400 rotate-[-90deg] shrink-0 drop-shadow" />
              <span className="bg-emerald-500 text-black font-semibold text-[8px] px-1 py-0.5 rounded ml-2 select-none shadow">
                Sanjana
              </span>
            </motion.div>

            <motion.div 
              animate={{ x: [380, 150, 410, 380], y: [220, 110, 260, 220] }}
              transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
              className="absolute pointer-events-none z-30 flex flex-col"
            >
              <MousePointer className="w-4 h-4 text-pink-500 fill-pink-500 rotate-[-90deg] shrink-0 drop-shadow" />
              <span className="bg-pink-500 text-white font-semibold text-[8px] px-1 py-0.5 rounded ml-2 select-none shadow">
                Visitor
              </span>
            </motion.div>

            {/* Figma Frames (Projects) */}
            <div className="flex gap-8 relative items-center">
              {projects.map((p, idx) => {
                const isActive = idx === selectedIdx;
                return (
                  <div key={p.id} className="relative select-none">
                    {/* Frame tag */}
                    <span className={`absolute -top-6 left-0 text-[10px] font-mono font-medium ${
                      isActive ? 'text-indigo-400' : 'text-gray-500'
                    }`}>
                      #{p.title}
                    </span>
                    
                    {/* Frame Canvas Card */}
                    <div
                      onClick={() => setSelectedIdx(idx)}
                      className={`relative cursor-pointer transition-all duration-300 rounded-xl p-5 border-2 flex flex-col justify-between ${
                        isActive 
                          ? 'border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)] bg-[#101015]' 
                          : 'border-white/5 hover:border-white/25 bg-[#0e0e12]'
                      }`}
                      style={{ width: `${p.figmaProps.w}px`, height: `${p.figmaProps.h}px` }}
                    >
                      {/* Active Frame handles */}
                      {isActive && (
                        <>
                          <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-2 border-indigo-500 bg-[#1e1e1e] rounded-sm"></span>
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-2 border-indigo-500 bg-[#1e1e1e] rounded-sm"></span>
                          <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-2 border-indigo-500 bg-[#1e1e1e] rounded-sm"></span>
                          <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-2 border-indigo-500 bg-[#1e1e1e] rounded-sm"></span>
                          {/* Dimensions visual badge */}
                          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[9px] px-1 rounded-sm py-0.5 font-mono pointer-events-none select-none">
                            {p.figmaProps.w} x {p.figmaProps.h}
                          </span>
                        </>
                      )}

                      <div className="flex flex-col gap-3 text-left">
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                          {p.subtitle}
                        </span>
                        <h4 className="font-bold text-lg text-white">
                          {p.title}
                        </h4>
                        <p className="text-[11px] text-gray-400 leading-relaxed font-light line-clamp-4">
                          {p.description}
                        </p>
                      </div>

                      {/* Frame footer options */}
                      <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[10px] text-gray-500">
                        <div className="flex gap-2">
                          {p.tech.slice(0, 2).map((t, idx) => (
                            <span key={idx} className="bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2.5 font-semibold text-gray-300">
                          <a href={p.liveUrl} target="_blank" rel="noreferrer" className="hover:text-indigo-400 flex items-center gap-0.5">
                            Demo <ArrowUpRight className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel - Inspector */}
          <div className="w-48 bg-[#2c2c2c] border-l border-[#1c1c1c] text-xs text-gray-400 select-none hidden lg:flex flex-col shrink-0">
            {/* Inspector Headers */}
            <div className="flex border-b border-[#1c1c1c] text-center font-semibold text-[10px]">
              <span className="flex-1 py-2 text-white border-b border-indigo-500 cursor-pointer">Design</span>
              <span className="flex-1 py-2 hover:text-white cursor-pointer">Prototype</span>
              <span className="flex-1 py-2 hover:text-white cursor-pointer">Inspect</span>
            </div>

            {/* Layer attributes */}
            <div className="p-3.5 space-y-4 text-left">
              <div>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Frame Properties</span>
                <div className="grid grid-cols-2 gap-2 mt-2 font-mono text-[10px]">
                  <div className="flex items-center gap-1.5 bg-[#252525] border border-[#1c1c1c] p-1 rounded">
                    <span className="text-gray-500">X</span>
                    <span className="text-white truncate">{activeFigmaProject.figmaProps.x} px</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#252525] border border-[#1c1c1c] p-1 rounded">
                    <span className="text-gray-500">Y</span>
                    <span className="text-white truncate">{activeFigmaProject.figmaProps.y} px</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#252525] border border-[#1c1c1c] p-1 rounded">
                    <span className="text-gray-500">W</span>
                    <span className="text-white truncate">{activeFigmaProject.figmaProps.w} px</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#252525] border border-[#1c1c1c] p-1 rounded">
                    <span className="text-gray-500">H</span>
                    <span className="text-white truncate">{activeFigmaProject.figmaProps.h} px</span>
                  </div>
                </div>
              </div>

              {/* Geometry specs */}
              <div className="space-y-2.5 pt-2 border-t border-[#1c1c1c]">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Constraints</span>
                  <span className="text-[10px] text-gray-300 font-mono">Left & Top</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Layer</span>
                  <span className="text-[10px] text-gray-300 font-mono">Pass through</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Radius</span>
                  <span className="text-[10px] text-gray-300 font-mono">12 px</span>
                </div>
              </div>

              {/* Fill spec */}
              <div className="space-y-2 pt-2 border-t border-[#1c1c1c]">
                <span className="text-[10px] font-bold text-gray-500 uppercase">Fill</span>
                <div className="flex items-center gap-2 mt-1">
                  <span 
                    className="w-4 h-4 rounded border border-[#1c1c1c]" 
                    style={{ backgroundColor: activeFigmaProject.figmaProps.bg }}
                  ></span>
                  <span className="font-mono text-[10px] text-white uppercase">{activeFigmaProject.figmaProps.bg}</span>
                  <span className="text-gray-600 font-mono text-[10px] ml-auto">100%</span>
                </div>
              </div>

              {/* Stroke spec */}
              <div className="space-y-2 pt-2 border-t border-[#1c1c1c]">
                <span className="text-[10px] font-bold text-gray-500 uppercase">Stroke</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-4 h-4 rounded bg-white/5 border border-[#1c1c1c]"></span>
                  <span className="font-mono text-[10px] text-white">#FFFFFF 10%</span>
                  <span className="text-gray-600 font-mono text-[10px] ml-auto">1 px</span>
                </div>
              </div>

              {/* Effects specs */}
              <div className="space-y-2 pt-2 border-t border-[#1c1c1c] text-[10px]">
                <span className="text-gray-500 font-bold uppercase">Effects</span>
                <div className="flex justify-between items-center text-white mt-1">
                  <span>Drop shadow</span>
                  <span className="text-gray-600">4, 20, 25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" id="projects">
      {/* Visual background grid accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header Title Section */}
        <div className="mb-14 flex flex-col md:flex-row justify-between items-end gap-6 text-left">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-300 font-medium">Portfolio Showcase</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-none"
            >
              Selected <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Works.</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base font-light max-w-sm md:text-right"
          >
            Explore Sanjana's engineering creations styled in three creative professional environments. Toggle your choice below.
          </motion.p>
        </div>

        {/* Theme Switcher Controller Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 bg-white/[0.02] border border-white/5 p-1.5 rounded-2xl max-w-lg mx-auto backdrop-blur-md relative z-20">
          <button 
            onClick={() => setActiveTheme('notion')} 
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
              activeTheme === 'notion' 
                ? 'bg-white text-black shadow-lg font-semibold scale-[1.03]' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            Notion Database
          </button>
          <button 
            onClick={() => {
              setActiveTheme('ide');
              setSelectedIdx(0); // reset to first project
            }} 
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
              activeTheme === 'ide' 
                ? 'bg-indigo-600 text-white shadow-lg font-semibold scale-[1.03]' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            VS Code IDE
          </button>
          <button 
            onClick={() => {
              setActiveTheme('figma');
              setSelectedIdx(0); // reset to first project
            }} 
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
              activeTheme === 'figma' 
                ? 'bg-amber-600 text-white shadow-lg font-semibold scale-[1.03]' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Figma Design
          </button>
        </div>

        {/* Dynamic Workspace Rendering Box */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTheme === 'notion' && (
              <div key="notion" className="w-full">
                {renderNotionView()}
              </div>
            )}
            {activeTheme === 'ide' && (
              <div key="ide" className="w-full">
                {renderIdeView()}
              </div>
            )}
            {activeTheme === 'figma' && (
              <div key="figma" className="w-full overflow-x-auto scrollbar-thin">
                {renderFigmaView()}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
