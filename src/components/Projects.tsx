import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Black and white construction cone icon as SVG component
const WorkInProgressIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-black dark:text-white ml-2 cursor-pointer relative"
  >
    <rect x="3" y="20" width="18" height="2" fill="currentColor" opacity="0.8" />
    <path d="M12 2L4 20h16L12 2z" fill="#fff" stroke="currentColor" />
    <path d="M12 6l-2 6h4l-2-6z" fill="#000" opacity="0.7" />
    <path d="M10 12l-1.5 4h7L14 12h-4z" fill="#000" opacity="0.4" />
  </svg>
);
import { techIconMap } from './techIconMap';
import PageWrapper from './PageWrapper';

type MainProject = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
  image: string;
};

type OtherProject = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  inProgress?: boolean;
};


const mainProjects: MainProject[] = [
  {
    title: "MindGrid",
    description:
      "A modern productivity workspace with AI assistance, calendar integration, task management, and gamification. Built with Next.js, TypeScript, and featuring Google Gemini AI integration, real-time collaboration, and beautiful UI components.",
    tech: ["Next.js", "TypeScript", "Supabase", "Google AI", "Calendar API"],
    url: "https://mindgrid0.vercel.app/",
    github: "https://github.com/devleo10/MindGrid",
    image: "/img/mindgrid.png",
  },
  {
    title: "Clinkr — Link Analytics",
    description:
      "React + Supabase platform for tracking device, browser and geographical data with real-time updates. One-click auth and ultra-fast edge responses for comprehensive link analytics.",
    tech: ["React", "Supabase", "Edge Functions", "Vite"],
    url: "https://clinkr.live",
    github: "https://github.com/devleo10/clinkr",
    image: "/img/clinkr.png",
  },
];

const otherProjects: OtherProject[] = [
  {
    title: "Hirebot — Autofill Chrome Extension",
    description: "A Chrome extension that helps you save and autofill Q/A and input fields for job and internship applications, streamlining repetitive form-filling tasks.",
    tech: ["JavaScript", "Chrome Extension"],
    url: "https://github.com/devleo10/hirebot",
    inProgress: true,
  },
  {
    title: "pyScraper",
    description: "A Python-based web scraping utility for extracting, processing, and analyzing data from websites. Designed for flexibility and quick data collection.",
    tech: ["Python"],
    url: "https://github.com/devleo10/pyScraper",
  },
  {
    title: "fcuk-funds — VFIAX Mutual Fund PDF Report Generator",
    description: "Generates a multi-page PDF report for the Vanguard 500 Index Fund (VFIAX) using Python. Fetches fund info and historical NAV data with yfinance, creates a summary, table of recent NAVs, and a trend plot for the last month.",
    tech: ["Python", "yfinance", "pandas", "matplotlib"],
    url: "https://github.com/devleo10/fcuk-funds",
  },
  {
    title: "Paincakes",
    description: "A Telegram bot that serves dark humor jokes to brighten (or darken) your day. Built with Python for automated joke delivery.",
    tech: ["Python"],
    url: "https://github.com/devleo10/paincakes",
    inProgress: true,
  },
];

const Projects: React.FC = () => {
  return (
    <PageWrapper>
      <section className="py-32 relative overflow-hidden" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 text-white/50 text-xs tracking-wider uppercase mb-5"
          >
            Featured Work
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold font-pixel text-white mb-6 tracking-tight">
            Main Projects
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
        </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-32">
          {mainProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden h-64">
                <div className="w-full h-64 rounded-xl overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: 'top center' }}
                  />
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 items-center">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.url && (
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <p className="text-white/70 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                    const Icon = techIconMap[tech];
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1 px-3 py-1 text-sm text-white/60 tracking-wide"
                      >
                        {Icon && <Icon className="w-4 h-4 mr-1 text-white/70" />}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold font-pixel text-white mb-6 tracking-tight">
            Other Works
          </h3>
          <div className="w-24 h-px bg-white/20 mx-auto" />
        </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative p-6 transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-lg font-semibold text-white tracking-tight">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-1">
                    {project.inProgress && (
                      <span className="relative group">
                        <WorkInProgressIcon />
                        <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 rounded bg-yellow-500/90 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                          Work in Progress
                        </span>
                      </span>
                    )}
                    {project.url && (
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-8 h-8 text-white/70 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <p className="text-white/60 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => {
                    const Icon = techIconMap[tech];
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1 px-2 py-1 text-xs text-white/50 tracking-wide"
                      >
                        {Icon && <Icon className="w-3 h-3 mr-1 text-white/60" />}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      </section>
    </PageWrapper>
  );
};

export default Projects;
