import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-12 sm:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Footer Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/60 text-xs sm:text-sm text-center"
          >
            Incase you forgot, touch some grass 🌱
          </motion.p>

          {/* Funny Footer Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white/40 text-xs text-center"
          >
            Made with ❤️, React, and way too many console.logs 🐛
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
