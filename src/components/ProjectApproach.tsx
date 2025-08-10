import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  { step: "Ideation", description: "Brainstorm and define the core problem" },
  { step: "Research", description: "Study existing solutions and user needs" },
  { step: "Prototyping", description: "Create wireframes and design mockups" },
  { step: "Coding", description: "Build with clean, scalable architecture" },
  { step: "Testing", description: "Validate functionality and user experience" },
  { step: "Shipping", description: "Deploy and monitor in production" },
];

const ProjectApproach: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="approach">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.02),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.008),transparent_65%)]" />
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
            className="inline-block px-4 py-2 border border-white/15 rounded-full text-white/30 text-xs tracking-wider uppercase mb-5"
          >
            Methodology
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            How I Approach Projects
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
                className="group flex items-center gap-6"
              >
                <div className="relative w-12 h-12 rounded-full bg-white/[0.03] border border-white/15 flex items-center justify-center shadow-[0_0_0_1px_rgba(255,255,255,0.05)] group-hover:bg-white/[0.06] group-hover:border-white/25 transition-all duration-300">
                  <span className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {index + 1}
                  </span>
                </div>
                
                <div className="flex-1 bg-white/[0.01] p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 tracking-tight">
                        {item.step}
                      </h3>
                      <p className="text-sm text-white/50">{item.description}</p>
                    </div>
                    
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors duration-300" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectApproach;
