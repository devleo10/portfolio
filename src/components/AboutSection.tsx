import React from 'react';
import { motion } from 'framer-motion';
import { Book, Coffee, Code2, GitBranch, Lightbulb, Package, Cloud } from 'lucide-react';
import PageWrapper from './PageWrapper';
import { IconCloud } from './ui/icon-cloud';

const AboutSection: React.FC = () => {
  // Consolidated data for About section
  const book = {
    title: "Deep Work",
    author: "Cal Newport",
    note: "To sharpen focused work and reduce context switching during project sprints.",
  };

  const tools = [
    { name: "VS Code", description: "Primary editor with TypeScript extensions", icon: Code2 },
    { name: "Git", description: "Version control for everything", icon: GitBranch },
    { name: "Docker", description: "Consistent development environments", icon: Package },
    { name: "Vercel", description: "Fast frontend deployments", icon: Cloud },
  ];

  // Icon URLs for the 3D cloud - using black and white/monochrome versions
  const iconUrls = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
  ];

  const tips = [
    "TIL: Use `git restore --staged` to unstage files safely.",
    "Dev Tip: Keep component props minimal — pass functions only when necessary.",
    "Pro Tip: Use CSS custom properties for dynamic theming.",
  ];
  const todayIndex = new Date().getDate() % tips.length;
  const currentTip = tips[todayIndex];

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
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight font-pixel">
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

        {/* Grid of Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Currently Reading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Book className="w-6 h-6 text-white/60" />
              <h3 className="text-xl font-semibold text-white">Currently Reading</h3>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-16 h-20 flex-shrink-0 rounded-md bg-white/[0.05] flex items-center justify-center border border-white/15">
                <Book className="w-6 h-6 text-white/40" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">{book.title}</h4>
                <p className="text-sm text-white/60 mb-2">{book.author}</p>
                <p className="text-sm text-white/50">{book.note}</p>
              </div>
            </div>
          </motion.div>

          {/* Random/Fun */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-white/60" />
              <h3 className="text-xl font-semibold text-white">Random Updates</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-4 h-4 text-white/40" />
                  <span className="text-sm font-medium text-white/70">Now</span>
                </div>
                <p className="text-sm text-white/50">Learning: WebAssembly experiments for compute-heavy tasks</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4 text-white/40" />
                  <span className="text-sm font-medium text-white/70">Dev Tip</span>
                </div>
                <p className="text-sm text-white/50">{currentTip}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Arsenal with Magic UI Icon Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-3 font-pixel">Tech Arsenal</h3>
          <p className="text-white/60 mb-8">
            Technologies and tools I work with to build modern applications
          </p>
          <div className="flex justify-center">
            <IconCloud images={iconUrls} />
          </div>
        </motion.div>
      </div>
      </section>
    </PageWrapper>
  );
};

export default AboutSection;
