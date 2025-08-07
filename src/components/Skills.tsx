import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, GitBranch, Settings, Wind, Type, Smartphone, Bot, TestTube2, Box } from 'lucide-react';

const SkillIcon: React.FC<{ icon: React.ReactNode, name: string }> = ({ icon, name }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.05 }}
    className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm text-center transition-all duration-300 hover:bg-gray-800"
  >
    <div className="text-blue-400 w-10 h-10 flex items-center justify-center">
      {icon}
    </div>
    <span className="text-white font-medium text-sm">{name}</span>
  </motion.div>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: <Code2 size={32} /> },
        { name: 'Next.js', icon: <Code2 size={32} /> },
        { name: 'TypeScript', icon: <Type size={32} /> },
        { name: 'Tailwind CSS', icon: <Wind size={32} /> },
        { name: 'Vue.js', icon: <Code2 size={32} /> },
        { name: 'React Native', icon: <Smartphone size={32} /> }
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: <Server size={32} /> },
        { name: 'Express.js', icon: <Server size={32} /> },
        { name: 'GraphQL', icon: <GitBranch size={32} style={{ transform: 'rotate(90deg)' }} /> },
        { name: 'Python', icon: <Code2 size={32} /> },
        { name: 'PostgreSQL', icon: <Database size={32} /> },
        { name: 'MongoDB', icon: <Database size={32} /> }
      ]
    },
    {
      title: 'DevOps & Cloud',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Docker', icon: <Box size={32} /> },
        { name: 'AWS', icon: <Cloud size={32} /> },
        { name: 'Kubernetes', icon: <Cloud size={32} /> },
        { name: 'GitHub Actions', icon: <GitBranch size={32} /> },
        { name: 'Terraform', icon: <Settings size={32} /> },
        { name: 'Jenkins', icon: <Settings size={32} /> }
      ]
    },
    {
      title: 'Tools & Others',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', icon: <GitBranch size={32} /> },
        { name: 'Jest', icon: <TestTube2 size={32} /> },
        { name: 'Webpack', icon: <Box size={32} /> },
        { name: 'Redis', icon: <Database size={32} /> },
        { name: 'AI/ML', icon: <Bot size={32} /> },
        { name: 'WebSockets', icon: <Wind size={32} /> }
      ]
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A visual overview of my technical expertise across the full development stack.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
            >
              <div className="flex items-center mb-6">
                <div className={`w-3 h-8 bg-gradient-to-b ${category.color} rounded-full mr-4`} />
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                   <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <SkillIcon icon={skill.icon} name={skill.name} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying at the forefront. Currently exploring 
              <span className="text-blue-400 font-semibold"> WebAssembly</span>, 
              <span className="text-purple-400 font-semibold"> Edge Computing</span>, and 
              <span className="text-green-400 font-semibold"> AI/ML integration</span> in web applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
