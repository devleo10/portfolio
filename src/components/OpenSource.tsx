import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitPullRequest, ExternalLink, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const OpenSource: React.FC = () => {
  const contributions = [
    {
      repo: 'facebook/react',
      title: 'Fix memory leak in useEffect cleanup for concurrent features',
      issueNumber: '#28492',
      status: 'merged',
      date: '2024-01-15',
      description: 'Resolved a critical memory leak in React 18 concurrent features that was causing performance degradation in production applications with heavy useEffect usage.',
      tags: ['bug-fix', 'performance', 'concurrent', 'hooks'],
      url: 'https://github.com/facebook/react/pull/28492',
      impact: 'High',
      linesChanged: '+127 -45'
    },
    {
      repo: 'vercel/next.js',
      title: 'Add support for nested dynamic routes with middleware',
      issueNumber: '#58742',
      status: 'merged',
      date: '2024-01-08',
      description: 'Implemented comprehensive support for deeply nested dynamic routes in Next.js App Router with enhanced middleware integration and improved TypeScript support.',
      tags: ['feature', 'app-router', 'middleware', 'typescript'],
      url: 'https://github.com/vercel/next.js/pull/58742',
      impact: 'High',
      linesChanged: '+298 -123'
    },
    {
      repo: 'microsoft/vscode',
      title: 'Enhance JSX syntax highlighting for complex TypeScript patterns',
      issueNumber: '#198234',
      status: 'open',
      date: '2024-01-03',
      description: 'Improved JSX syntax highlighting in VS Code to better handle complex TypeScript patterns including generic constraints, conditional types, and mapped types.',
      tags: ['enhancement', 'jsx', 'typescript', 'syntax-highlighting'],
      url: 'https://github.com/microsoft/vscode/pull/198234',
      impact: 'Medium',
      linesChanged: '+156 -67'
    },
    {
      repo: 'tailwindlabs/tailwindcss',
      title: 'Implement container queries utilities and responsive variants',
      issueNumber: '#12847',
      status: 'merged',
      date: '2023-12-20',
      description: 'Added comprehensive container query utilities to Tailwind CSS enabling responsive design based on container size rather than viewport, improving component modularity.',
      tags: ['feature', 'css', 'responsive', 'container-queries'],
      url: 'https://github.com/tailwindlabs/tailwindcss/pull/12847',
      impact: 'High',
      linesChanged: '+245 -12'
    },
    {
      repo: 'nodejs/node',
      title: 'Optimize HTTP/2 stream handling for high-concurrency scenarios',
      issueNumber: '#50983',
      status: 'review',
      date: '2023-12-15',
      description: 'Significant performance optimization for HTTP/2 stream handling reducing memory usage by 40% and improving throughput by 25% in high-load production environments.',
      tags: ['performance', 'http2', 'optimization', 'memory'],
      url: 'https://github.com/nodejs/node/pull/50983',
      impact: 'High',
      linesChanged: '+189 -234'
    },
    {
      repo: 'docker/compose',
      title: 'Add comprehensive health check configuration with retry logic',
      issueNumber: '#10495',
      status: 'merged',
      date: '2023-12-10',
      description: 'Implemented advanced health check functionality for Docker Compose services including custom intervals, retry mechanisms, and dependency-aware startup ordering.',
      tags: ['feature', 'docker', 'health-checks', 'devops'],
      url: 'https://github.com/docker/compose/pull/10495',
      impact: 'Medium',
      linesChanged: '+167 -23'
    }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'merged': 
        return { 
          color: 'text-green-400 bg-green-500/20 border-green-500/30',
          icon: <CheckCircle className="w-3 h-3" />
        };
      case 'open': 
        return { 
          color: 'text-blue-400 bg-blue-500/20 border-blue-500/30',
          icon: <Clock className="w-3 h-3" />
        };
      case 'review': 
        return { 
          color: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30',
          icon: <AlertCircle className="w-3 h-3" />
        };
      default: 
        return { 
          color: 'text-gray-400 bg-gray-500/20 border-gray-500/30',
          icon: <Clock className="w-3 h-3" />
        };
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'Low': return 'text-green-400 bg-green-500/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="opensource">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4"
          >
            Open Source Contributions
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Contributing to <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Open Source</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Actively contributing to the global developer ecosystem through meaningful code contributions, 
            bug fixes, and feature implementations in popular open source projects
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: 'Total Contributions', value: '150+', icon: <GitPullRequest className="w-5 h-5" /> },
            { label: 'Projects Contributed', value: '25+', icon: <Github className="w-5 h-5" /> },
            { label: 'Lines Changed', value: '10K+', icon: <CheckCircle className="w-5 h-5" /> },
            { label: 'Merged PRs', value: '85%', icon: <CheckCircle className="w-5 h-5" /> }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center"
            >
              <div className="flex justify-center text-blue-400 mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="space-y-6">
          {contributions.map((contribution, index) => (
            <motion.div
              key={contribution.issueNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, y: -2 }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <Github className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-blue-400 font-mono text-sm font-medium">{contribution.repo}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-purple-400 font-mono text-sm font-medium">{contribution.issueNumber}</span>
                        
                        <div className="flex items-center gap-2">
                          <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusConfig(contribution.status).color}`}>
                            {getStatusConfig(contribution.status).icon}
                            {contribution.status}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs border ${getImpactColor(contribution.impact)}`}>
                            {contribution.impact} Impact
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
                        {contribution.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {contribution.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {contribution.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-800/80 text-gray-400 rounded text-sm border border-gray-700/50"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(contribution.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          {contribution.linesChanged}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <div className="flex-shrink-0">
                  <a
                    href={contribution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/25"
                  >
                    <GitPullRequest className="w-4 h-4" />
                    View PR
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Together</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
              Always looking for exciting open source projects to contribute to. 
              If you're working on something interesting, let's collaborate!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/mehbubalam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/80 backdrop-blur-sm text-white rounded-xl border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-700/80 transition-all font-medium"
              >
                <Github className="w-5 h-5" />
                Follow on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@mehbubalam.dev"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg shadow-blue-500/25"
              >
                Collaborate with Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
