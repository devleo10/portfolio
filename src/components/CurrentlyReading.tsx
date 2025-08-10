import React from 'react';
import { motion } from 'framer-motion';
import { Book } from 'lucide-react';

const CurrentlyReading: React.FC = () => {
  const book = {
    title: "Deep Work",
    author: "Cal Newport",
    note: "To sharpen focused work and reduce context switching during project sprints.",
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="reading">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.03),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.015),transparent_65%)]" />
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
            className="inline-block px-4 py-2 border border-white/15 rounded-full text-white/40 text-xs tracking-wider uppercase mb-5"
          >
            Page Turner
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Currently Reading
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group flex gap-6 items-start bg-white/[0.02] p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 w-24 h-32 flex-shrink-0 rounded-lg bg-white/[0.05] flex items-center justify-center border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
              <Book className="w-8 h-8 text-white/60" />
            </div>

            <div className="relative z-10 flex-1">
              <h3 className="text-3xl font-semibold text-white mb-2 tracking-tight">{book.title}</h3>
              <p className="text-lg text-white/60 mb-4">{book.author}</p>
              <div className="w-16 h-px bg-white/20 mb-4" />
              <p className="text-white/50 leading-relaxed">{book.note}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyReading;
