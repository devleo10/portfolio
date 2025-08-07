import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Smartphone, Cloud, Zap, Award, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const techStack = [
    { icon: <Code2 className="w-8 h-8" />, name: 'React Ecosystem', color: 'text-blue-400', desc: 'React, Next.js, Remix' },
    { icon: <Database className="w-8 h-8" />, name: 'Backend Systems', color: 'text-green-400', desc: 'Node.js, Python, Go' },
    { icon: <Globe className="w-8 h-8" />, name: 'TypeScript', color: 'text-blue-300', desc: 'End-to-end type safety' },
    { icon: <Smartphone className="w-8 h-8" />, name: 'Mobile Development', color: 'text-purple-400', desc: 'React Native, Flutter' },
    { icon: <Cloud className="w-8 h-8" />, name: 'Cloud & DevOps', color: 'text-orange-400', desc: 'AWS, Docker, K8s' },
    { icon: <Zap className="w-8 h-8" />, name: 'Modern APIs', color: 'text-pink-400', desc: 'GraphQL, tRPC, REST' },
  ];

  const stats = [
    { number: '5+', label: 'Years Experience', icon: <Award className="w-5 h-5" /> },
    { number: '50+', label: 'Projects Delivered', icon: <Code2 className="w-5 h-5" /> },
    { number: '∞', label: 'Cups of Coffee', icon: <Coffee className="w-5 h-5" /> },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-black relative overflow-hidden" id="about">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-4"
          >
            Get to know me
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
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
              <h3 className="text-3xl font-bold text-white mb-6">
                Building the future, one line of code at a time
              </h3>
              <div className="absolute -left-4 top-0 w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full" />
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in creating 
              robust, scalable applications that solve real-world problems. My journey spans from 
              early-stage startups to enterprise-level solutions.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive on leading technical initiatives while actively contributing to open source projects. I'm passionate about mentoring 
              developers and fostering innovation in the tech community.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not architecting solutions or reviewing code, you'll find me exploring 
              emerging technologies, writing technical articles, or organizing community events.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
                >
                  <div className="flex justify-center text-blue-400 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Technology Arsenal</h3>
              <div className="grid grid-cols-1 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                  >
                    <div className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                      {tech.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{tech.name}</h4>
                      <p className="text-gray-400 text-sm">{tech.desc}</p>
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
