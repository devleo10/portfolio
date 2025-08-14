import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { techIconMap } from './techIconMap';
import PageWrapper from './PageWrapper';

type Project = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
};

const projects: Project[] = [
  {
    title: "Cluefund — Mutual Fund Tracker",
    description:
      "Full-stack investment tracking platform with real-time portfolio analytics, performance metrics, and market insights.",
    tech: ["Next.js", "Node.js", "MongoDB", "Chart.js"],
    url: "#",
  },
  {
    title: "Go Doc Parser",
    description:
      "A Go utility to parse and process documentation files, making it easier to extract and analyze structured information from codebases.",
    tech: ["Go"],
    url: "https://github.com/devleo10/go-doc-parser",
  },
  {
    title: "Hirebot — Autofill Chrome Extension",
    description:
      "A Chrome extension that helps you save and autofill Q/A and input fields for job and internship applications, streamlining repetitive form-filling tasks.",
    tech: ["JavaScript", "Chrome Extension"],
    url: "https://github.com/devleo10/hirebot",
  },
  {
    title: "pyScraper",
    description:
      "A Python-based web scraping utility for extracting, processing, and analyzing data from websites. Designed for flexibility and quick data collection.",
    tech: ["Python"],
    url: "https://github.com/devleo10/pyScraper",
  },
  {
    title: "fcuk-funds — VFIAX Mutual Fund PDF Report Generator",
    description:
      "Generates a multi-page PDF report for the Vanguard 500 Index Fund (VFIAX) using Python. Fetches fund info and historical NAV data with yfinance, creates a summary, table of recent NAVs, and a trend plot for the last month. Easily customizable for other funds.",
    tech: ["Python", "yfinance", "pandas", "matplotlib"],
    url: "https://github.com/devleo10/fcuk-funds",
  },
  {
    title: "Whooshh",
    description:
      "A JavaScript project (see repo for details).",
    tech: ["JavaScript"],
    url: "https://github.com/devleo10/Whooshh",
  },
];

const Projects: React.FC = () => {
  return (
    <PageWrapper>
      <section className="py-32 relative overflow-hidden" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-block px-4 py-2 border border-white/15 rounded-full text-white/50 text-xs tracking-wider uppercase mb-5"
          >
            Featured Work
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Projects
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative bg-white/[0.02] border border-white/10 backdrop-blur-sm rounded-2xl p-8 hover:border-white/25 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-semibold text-white tracking-tight">
                    {project.title}
                  </h3>
                  {project.url && (
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 hover:bg-white/[0.1] hover:border-white/30 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-white/70" />
                    </motion.a>
                  )}
                </div>
                
                <p className="text-white/65 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                    const Icon = techIconMap[tech];
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-white/[0.05] text-white/60 border border-white/10 tracking-wide"
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
      </div>
      </section>
    </PageWrapper>
  );
};

export default Projects;
