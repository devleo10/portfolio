import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Award, ArrowRight } from 'lucide-react';
import { techIconMap } from './techIconMap';
import PageWrapper from './PageWrapper';

type Project = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
};

type Microtool = {
  name: string;
  description: string;
  url?: string;
};

const WorkSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Clinkr — Link Analytics",
      description:
        "React + Supabase platform for tracking device, browser and geographical data with real-time updates. One-click auth and ultra-fast edge responses.",
      tech: ["React", "Supabase", "Edge Functions", "Vite"],
      url: "https://clinkr.live",
    },
    {
      title: "Cluefund — Mutual Fund Tracker",
      description:
        "Full-stack investment tracking platform with real-time portfolio analytics, performance metrics, and market insights.",
      tech: ["Next.js", "Node.js", "MongoDB", "Chart.js"],
      url: "#",
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
        "A sleek, responsive weather app built with HTML, CSS, and JavaScript. Whooshh delivers real-time weather updates for any city worldwide, featuring a modern UI, live temperature, humidity, wind speed, and mobile-friendly design. Powered by OpenWeatherMap and Unsplash APIs.",
      tech: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API", "Unsplash API"],
      url: "https://github.com/devleo10/Whooshh",
    },
  ];

  const experiences: Experience[] = [
    {
      role: "Full-Stack Developer Intern",
      company: "House of EdTech",
      period: "July 2025 – Present",
      description: "Building a scalable, high-traffic mutual fund investment platform from scratch. Architecting robust backend systems in Go, building sleek production-ready frontends with Next.js and TypeScript, and integrating AI-driven chatbots using LangChain and LLMs for personalized financial assistance.",
    },
    {
      role: "Project Maintainer",
      company: "Apertre 2.0 (Open Source Program)",
      period: "Feb 2024 – April 2024",
      description: "Maintained and reviewed PRs across two major projects. Collaborated with multiple contributors to ensure seamless integrations, enhanced code quality, and oversaw consistent delivery through rigorous code reviews.",
    },
    {
      role: "Core Team Member",
      company: "Cloud Native Hooghly",
      period: "Aug 2023 – Present",
      description: "Organized technical workshops, mentored peers, and actively contributed to fostering community engagement and knowledge-sharing in cloud-native technologies."
    },
  ];

  const microtools: Microtool[] = [
    {
      name: "Small Parser Utility",
      description: "CLI script to normalize CAMS/statement PDFs into JSON (used in portfolio dashboard).",
      url: "#",
    },
    {
      name: "Quick Linkify",
      description: "Tiny browser bookmarklet to convert long links into a short tracking link for testing.",
      url: "#",
    },
    {
      name: "Dev Timer",
      description: "Simple Pomodoro timer built with vanilla JS for focused coding sessions.",
      url: "#",
    },
    {
      name: "Config Generator",
      description: "Node.js script that generates Tailwind config from design tokens.",
      url: "#",
    },
  ];

  const steps = [
    { step: "Ideation", description: "Brainstorm and define the core problem" },
    { step: "Research", description: "Study existing solutions and user needs" },
    { step: "Prototyping", description: "Create wireframes and design mockups" },
    { step: "Coding", description: "Build with clean, scalable architecture" },
    { step: "Testing", description: "Validate functionality and user experience" },
    { step: "Shipping", description: "Deploy and monitor in production" },
  ];

  return (
    <PageWrapper>
      <section className="py-32 relative overflow-hidden" id="work">
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
            Work & Projects
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight font-pixel">
            My Work
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Featured Projects</h3>
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
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h4 className="text-xl font-semibold text-white tracking-tight">
                    {project.title}
                  </h4>
                  {project.url && (
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 hover:bg-white/[0.1] transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-white/70" />
                    </motion.a>
                  )}
                </div>
                <p className="text-white/65 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                    const Icon = techIconMap[tech];
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-white/[0.05] text-white/60 border border-white/10"
                      >
                        {Icon && <Icon className="w-4 h-4 mr-1 text-white/70" />}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Experience & Microtools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white/[0.015] p-6 rounded-2xl border border-white/10">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-1">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/55 mb-4">{exp.description}</p>
                  {exp.achievements && (
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-white/50">
                          <span className="w-1 h-1 rounded-full bg-white/30 mt-1.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Microtools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Microtools & Side Projects</h3>
            <div className="space-y-4">
              {microtools.map((tool) => (
                <div key={tool.name} className="bg-white/[0.015] p-4 rounded-xl border border-white/10">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-white/50 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-medium text-white mb-1">{tool.name}</h4>
                        <p className="text-xs text-white/50">{tool.description}</p>
                      </div>
                    </div>
                    {tool.url && (
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-2 py-1 rounded-md border border-white/15 text-white/60 hover:text-white/80 transition-colors"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
      </section>
    </PageWrapper>
  );
};

export default WorkSection;
