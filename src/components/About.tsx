import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Smartphone, Cloud, Zap, Award, Github, Users } from 'lucide-react';
import { useGitHub } from '../hooks/useGitHub';

const About: React.FC = () => {
  const { profile, loading } = useGitHub('devleo10');

  const techStack = [
    { icon: <Code2 className="w-8 h-8" />, name: 'React Ecosystem', desc: 'React, Next.js, Remix' },
    { icon: <Database className="w-8 h-8" />, name: 'Backend Systems', desc: 'Node.js, Python, Go' },
    { icon: <Globe className="w-8 h-8" />, name: 'TypeScript', desc: 'End-to-end type safety' },
    { icon: <Smartphone className="w-8 h-8" />, name: 'Mobile Development', desc: 'React Native, Flutter' },
    { icon: <Cloud className="w-8 h-8" />, name: 'Cloud & DevOps', desc: 'AWS, Docker, K8s' },
    { icon: <Zap className="w-8 h-8" />, name: 'Modern APIs', desc: 'GraphQL, tRPC, REST' },
  ];

  const baseStats = [
    { number: '5+', label: 'Years Experience', icon: <Award className="w-5 h-5" /> },
    { number: profile ? `${profile.public_repos}` : '50+', label: 'Public Repos', icon: <Code2 className="w-5 h-5" /> },
    { number: profile ? `${profile.followers}` : '∞', label: 'Followers', icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="about">
      {/* Background minimalist noise / subtle vignettes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.07),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.03),transparent_60%)]" />
      </div>
      {/* GitHub Profile Banner */}
      {profile && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-4 z-20 flex items-center gap-4 bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
          <img src={profile.avatar_url} alt={profile.login} className="w-12 h-12 rounded-full border border-white/20" />
          <div className="text-left">
            <div className="text-white font-medium flex items-center gap-2">
              <Github className="w-4 h-4 text-white/70" /> {profile.name || profile.login}
            </div>
            {profile.bio && <div className="text-white/50 text-sm line-clamp-1 max-w-xs">{profile.bio}</div>}
          </div>
        </div>
      )}
      {/* Background effects replaced with monochrome variants */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/4 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-2 border border-white/15 rounded-full text-white/60 text-sm font-medium mb-4 tracking-wide"
          >
            Get to know me
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,white,white_55%,rgba(255,255,255,0.25))]">Me</span>
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <h3 className="text-3xl font-semibold text-white mb-6 leading-snug tracking-tight">
                Building the future, one line of code at a time
              </h3>
              <div className="absolute -left-4 top-1 w-1 h-10 bg-white/40 rounded" />
            </div>
            <p className="text-base text-white/65 leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in creating 
              robust, scalable applications that solve real-world problems. My journey spans from 
              early-stage startups to enterprise-level solutions.
            </p>
            <p className="text-base text-white/65 leading-relaxed">
              I thrive on leading technical initiatives while actively contributing to open source projects. I'm passionate about mentoring 
              developers and fostering innovation in the tech community.
            </p>
            <p className="text-base text-white/65 leading-relaxed">
              When I'm not architecting solutions or reviewing code, you'll find me exploring 
              emerging technologies, writing technical articles, or organizing community events.
            </p>
            <div className="grid grid-cols-3 gap-5 pt-6">
              {baseStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/[0.03] rounded-xl border border-white/10 backdrop-blur-sm"
                >
                  <div className="flex justify-center text-white/60 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-semibold text-white mb-1 tracking-tight">{loading ? '…' : stat.number}</div>
                  <div className="text-xs uppercase tracking-wider text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_70%)] blur-2xl opacity-60" />
            <div className="relative bg-white/[0.035] backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
              <h3 className="text-xl font-medium text-white mb-6 text-center tracking-wide">Technology Arsenal</h3>
              <div className="grid grid-cols-1 gap-5">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="group flex items-center gap-4 p-4 bg-white/[0.025] rounded-xl border border-white/10 hover:border-white/25 transition-all duration-300"
                  >
                    <div className="text-white/70 group-hover:text-white transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white/90 font-medium mb-1 tracking-tight">{tech.name}</h4>
                      <p className="text-white/50 text-xs uppercase tracking-wider">{tech.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
