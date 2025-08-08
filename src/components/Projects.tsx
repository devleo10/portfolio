import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'CloudSync Analytics',
      description: 'Enterprise-grade real-time analytics platform built for e-commerce businesses. Features advanced data visualization, predictive analytics, and automated reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=top',
      category: 'Enterprise SaaS',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      github: 'https://github.com/mehbubalam/cloudsync-analytics',
      live: 'https://cloudsync-analytics.vercel.app',
      status: 'Production',
      stars: 289,
      forks: 67,
      year: '2024',
      highlights: ['99.9% uptime', '1M+ events/day', '50+ enterprise clients']
    },
    {
      title: 'DevFlow - Developer Productivity Suite',
      description: 'Comprehensive developer tools platform combining project management, code review automation, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=top',
      category: 'Developer Tools',
      tech: ['React', 'Python', 'FastAPI', 'MongoDB', 'Docker', 'GitHub API'],
      github: 'https://github.com/mehbubalam/devflow',
      live: 'https://devflow.dev',
      status: 'Active Development',
      stars: 142,
      forks: 38,
      year: '2024',
      highlights: ['500+ active users', 'GitHub integration', 'AI-powered insights']
    },
    {
      title: 'EcoTrace - Carbon Footprint Tracker',
      description: 'Mobile-first application helping individuals and businesses track and reduce their carbon footprint with gamification elements.',
      image: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=800&h=600&fit=crop&crop=center',
      category: 'Mobile App',
      tech: ['React Native', 'Expo', 'Supabase', 'TypeScript', 'Stripe'],
      github: 'https://github.com/mehbubalam/ecotrace',
      live: 'https://apps.apple.com/app/ecotrace',
      status: 'Published',
      stars: 89,
      forks: 23,
      year: '2023',
      highlights: ['10K+ downloads', 'App Store featured', '4.8★ rating']
    },
    {
      title: 'OpenSource Contribution Tracker',
      description: 'Track and visualize open source contributions across multiple platforms with detailed analytics and contribution insights.',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop&crop=top',
      category: 'Open Source',
      tech: ['Vue.js', 'Node.js', 'GraphQL', 'GitHub API', 'Chart.js'],
      github: 'https://github.com/mehbubalam/os-tracker',
      live: 'https://os-tracker.dev',
      status: 'Maintained',
      stars: 156,
      forks: 42,
      year: '2023',
      highlights: ['Community driven', '1K+ contributors', 'Multiple integrations']
    },
    {
      title: 'AI-Powered Code Review Assistant',
      description: 'Intelligent code review tool using machine learning to identify potential issues, suggest improvements, and ensure code quality.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center',
      category: 'AI/ML',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com/mehbubalam/ai-code-review',
      live: 'https://ai-code-review.dev',
      status: 'Beta',
      stars: 234,
      forks: 56,
      year: '2024',
      highlights: ['85% accuracy', 'Multi-language support', 'VS Code extension']
    },
    {
      title: 'Real-time Collaboration Whiteboard',
      description: 'WebRTC-based collaborative whiteboard application with real-time synchronization, perfect for remote team brainstorming sessions.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center',
      category: 'Collaboration Tool',
      tech: ['React', 'WebRTC', 'Socket.io', 'Canvas API', 'Firebase'],
      github: 'https://github.com/mehbubalam/collab-whiteboard',
      live: 'https://whiteboard.dev',
      status: 'Production',
      stars: 98,
      forks: 29,
      year: '2023',
      highlights: ['Real-time sync', 'Unlimited participants', 'Export features']
    }
  ];

  const categories = ['All', 'Enterprise SaaS', 'Developer Tools', 'Mobile App', 'Open Source', 'AI/ML', 'Collaboration Tool'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="projects">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.03),transparent_60%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 border border-white/15 rounded-full text-white/60 text-xs tracking-wider uppercase mb-4"
          >
            Featured Work
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,white,white_60%,rgba(255,255,255,0.25))]">Projects</span>
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto mb-8" />
          <p className="text-lg text-white/55 max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in full-stack development, 
            from enterprise solutions to open-source contributions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-white text-black border-white shadow-[0_0_0_1px_rgba(255,255,255,0.25)]'
                  : 'bg-white/[0.04] text-white/55 hover:text-white hover:bg-white/[0.08] border-white/15'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/[0.035] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-white/10 text-white/70 backdrop-blur-sm border border-white/15 uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/60 text-white/70 rounded-full text-[10px] font-medium backdrop-blur-sm tracking-wide">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/60 backdrop-blur-sm rounded-lg text-white hover:bg-black/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-white tracking-tight line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-white/45 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                  </div>
                </div>
                <p className="text-white/60 mb-4 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/[0.05] text-white/50 rounded text-[10px] border border-white/10 tracking-wide"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/[0.06] text-white/60 rounded text-[10px] border border-white/10 tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-white/[0.06] text-white/50 rounded text-[10px] border border-white/10 tracking-wide">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4 text-white/45 text-xs">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-white/[0.07] text-white rounded text-xs hover:bg-white/[0.12] transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-white text-black rounded text-xs hover:bg-white/90 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/mehbubalam?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] text-white rounded-xl border border-white/10 hover:bg-white/[0.12] hover:border-white/25 transition-all font-medium tracking-wide"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
