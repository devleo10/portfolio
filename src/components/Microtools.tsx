import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type Microtool = {
  name: string;
  description: string;
  url?: string;
};

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

const Microtools: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="microtools">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.015),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.005),transparent_65%)]" />
      </div>
      
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
            className="inline-block px-4 py-2 border border-white/15 rounded-full text-white/25 text-xs tracking-wider uppercase mb-5"
          >
            Mini Projects
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Microtools & Side Projects
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
        </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {microtools.map((tool, index) => (
            <motion.article
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group bg-white/[0.008] p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {tool.name}
                  </h3>
                  {tool.url && (
                    <motion.a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.05] border border-white/15 hover:bg-white/[0.1] hover:border-white/30 transition-all duration-300"
                    >
                      <ExternalLink className="w-3 h-3 text-white/60" />
                    </motion.a>
                  )}
                </div>
                
                <p className="text-sm text-white/45 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Microtools;
