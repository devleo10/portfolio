import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Cloud, Terminal } from 'lucide-react';

type Tool = {
  icon: React.ReactNode;
  name: string;
  oneLiner: string;
};

const tools: Tool[] = [
  { 
    icon: <Code className="w-6 h-6" />, 
    name: "VS Code", 
    oneLiner: "Fast editor + extensions (TypeScript, Tailwind, Git)." 
  },
  { 
    icon: <Terminal className="w-6 h-6" />, 
    name: "Git", 
    oneLiner: "Version control for everything — branches, PRs, CI." 
  },
  { 
    icon: <Cloud className="w-6 h-6" />, 
    name: "Docker", 
    oneLiner: "Local containers for consistent development environments." 
  },
  { 
    icon: <Globe className="w-6 h-6" />, 
    name: "Postman", 
    oneLiner: "API testing & mocks." 
  },
  { 
    icon: <Smartphone className="w-6 h-6" />, 
    name: "Vercel", 
    oneLiner: "Fast frontend deployments." 
  },
  { 
    icon: <Database className="w-6 h-6" />, 
    name: "MongoDB", 
    oneLiner: "Flexible document DB for quick iterations." 
  },
];

const Toolbox: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="toolbox">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.025),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.01),transparent_65%)]" />
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
            className="inline-block px-4 py-2 border border-white/15 rounded-full text-white/35 text-xs tracking-wider uppercase mb-5"
          >
            Tech Arsenal
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            My Toolbox
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group bg-white/[0.015] p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center border border-white/15 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  {tool.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{tool.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{tool.oneLiner}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
