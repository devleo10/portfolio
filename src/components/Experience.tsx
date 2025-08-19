import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
};

const experiences: Experience[] = [
  {
    role: "Full-Stack Developer Intern",
    company: "House of EdTech",
    period: "July 2025 – Present",
    description:
      "Building a scalable mutual fund investment platform; architecting backend in Go and frontend in Next.js + TypeScript. Integrating AI chatbots and real-time features.",
    achievements: [
      "Architected microservices-ready backend",
      "Built production-ready frontend UI components",
      "Integrated LangChain-based chatbot features",
    ],
  },
  {
    role: "Project Maintainer — Apertre 2.0",
    company: "Open Source Program",
    period: "Feb 2024 – Apr 2024",
    description:
      "Maintained multiple repos, reviewed PRs and improved developer workflows across projects.",
    achievements: ["Improved drag-and-drop UX", "Added chart export feature"],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="experience">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.035),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.02),transparent_65%)]" />
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
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 text-white/45 text-xs tracking-wider uppercase mb-5"
          >
            Career Journey
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Experience
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
        </motion.div>
        
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.3)_15%,rgba(255,255,255,0.3)_85%,rgba(255,255,255,0)_100%)]" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16 last:mb-0`}
            >
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-14 h-14 bg-white/[0.03] rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_0_1px_rgba(255,255,255,0.05)] z-10">
                <div className="w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center text-white/60">
                  <div className="w-2 h-2 rounded-full bg-white/80" />
                </div>
              </div>
              
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-24 md:pl-0' : 'md:pl-12 pl-24 md:pr-0'}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative p-8 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="inline-block px-3 py-1 text-[11px] font-medium text-white/60 tracking-wider uppercase">
                      {exp.company}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{exp.role}</h3>
                  
                  <div className="flex flex-wrap items-center gap-5 text-white/40 text-xs mb-6 uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-white/55 mb-6 leading-relaxed text-sm tracking-tight">
                    {exp.description}
                  </p>
                  
                  {exp.achievements && (
                    <div className="mb-6">
                      <h4 className="text-white/75 font-medium mb-3 flex items-center gap-2 tracking-wide text-sm uppercase">
                        <Award className="w-4 h-4 text-white/50" /> Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/50 text-sm">
                            <span className="w-1 h-1 bg-white/30 mt-2" />
                            <span className="leading-snug">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
