import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from './PageWrapper';
import { IconCloud } from './ui/icon-cloud';

const AboutSection: React.FC = () => {
  // Consolidated data for About section
  // Dynamically fetch currently reading book from Goodreads RSS

const iconUrls = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.simpleicons.org/github/FFFFFF",         // GitHub (white for visibility)
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.worldvectorlogo.com/logos/aws-2.svg", // AWS (official logo)
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "https://cdn.simpleicons.org/postman/FF6C37",        // Postman (not in Devicon)
  "https://cdn.simpleicons.org/jsonwebtokens/FFFFFF", // JWT
  "https://cdn.simpleicons.org/turborepo/EF4444",     // TurboRepo
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  "https://cdn.simpleicons.org/prisma/FFFFFF",        // Prisma (white for visibility)
  "https://cdn.simpleicons.org/vercel/000000",        // Vercel
  "https://cdn.simpleicons.org/sass/CC6699",          // Sass
  "https://cdn.simpleicons.org/materialui/007FFF"     // Material UI
];



  return (
    <PageWrapper>
      <section className="py-32 relative overflow-hidden" id="about">
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
            className="inline-block px-4 py-2 border border-white/15 rounded-full text-white/60 text-sm font-medium mb-4 tracking-wide"
          >
            Get to know me
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold font-pixel text-white mb-6 tracking-tight">
            About Me
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
        </motion.div>

        {/* Main About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-xl text-white/70 leading-relaxed mb-6">
            Full-stack tinkerer and open-source enthusiast passionate about building scalable solutions, robust microservices, and clean, intuitive user interfaces. I focus on creating products that solve real-world problems—projects with genuine utility, not just portfolio pieces.
          </p>
          <p className="text-lg text-white/60 leading-relaxed">
            Currently interning at House of EdTech, where I work with Next.js, Node.js, Python, Supabase, and AWS to design and implement microservice-driven architectures for mutual fund platforms. When I’m not architecting solutions, you’ll find me traveling to new places or immersed in a good book.
          </p>
        </motion.div>

     

        {/* Tech Arsenal Heading and Icon Cloud Only */}
  <div className="mb-10 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl font-pixel text-white text-center mb-8 tracking-tight">
            Tech Arsenal
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <IconCloud images={iconUrls} />
          </div>
        </div>
      </div>
      </section>
    </PageWrapper>
  );
};

export default AboutSection;
