import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

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

  const statusConfig: Record<string, { label: string; icon: React.ReactNode; classes: string }> = {
    merged: {
      label: 'Merged',
      icon: <CheckCircle className="w-3 h-3" />,
      classes: 'bg-white/10 text-white/70 border-white/15'
    },
    open: {
      label: 'Open',
      icon: <Clock className="w-3 h-3" />,
      classes: 'bg-white/10 text-white/70 border-white/15'
    },
    review: {
      label: 'In Review',
      icon: <AlertCircle className="w-3 h-3" />,
      classes: 'bg-white/10 text-white/70 border-white/15'
    }
  };

  return (
    <section id="open-source" className="py-32 relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05),transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.04),transparent_70%)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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
            className="inline-block px-4 py-2 border border-white/15 rounded-full text-white/55 text-xs tracking-wider uppercase mb-5"
          >
            Open Source
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Public <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,white,white_60%,rgba(255,255,255,0.25))]">Contributions</span>
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
          <p className="text-white/55 max-w-2xl mx-auto mt-8 text-sm leading-relaxed">
            Building and contributing to tools, libraries and ecosystems that empower developers globally.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contributions.map((c, i) => {
            const cfg = statusConfig[c.status] || statusConfig.open;
            return (
              <motion.a
                key={i}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl p-7 bg-white/[0.035] border border-white/10 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-500 backdrop-blur-sm flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="space-y-2 pr-4">
                    <div className="flex items-center gap-2 text-[11px] tracking-wider text-white/50 uppercase">
                      <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-white/60">{c.repo}</span>
                      <span className="text-white/30">{c.issueNumber}</span>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[10px] ${cfg.classes}`}>{cfg.icon}{cfg.label}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white tracking-tight leading-snug line-clamp-2">{c.title}</h3>
                    <div className="text-xs text-white/40 tracking-wide">{c.date}</div>
                  </div>
                  {c.linesChanged && (
                    <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/55 tracking-wider self-start">{c.linesChanged}</div>
                  )}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                  {c.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {c.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-[10px] bg-white/[0.05] text-white/55 border border-white/10 tracking-wide">{t}</span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-3 text-[11px] tracking-wider text-white/50">
                  <span className="px-2 py-1 rounded bg-white/7 border border-white/10">Impact: {c.impact}</span>
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none" />
              </motion.a>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="rounded-2xl p-10 bg-white/[0.035] border border-white/10 backdrop-blur-sm inline-block">
            <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Open to Collaboration</h3>
            <p className="text-white/60 text-sm max-w-2xl mx-auto leading-relaxed">
              Have an ambitious open source idea or need help scaling a project? Always happy to explore meaningful contributions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
