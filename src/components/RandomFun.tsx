import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Lightbulb, Code2, GitBranch } from 'lucide-react';

const RandomFun: React.FC = () => {
  const [commitMsg, setCommitMsg] = useState<string | null>(null);
  const [repoName, setRepoName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Simple rotating tip based on day
  const tips = [
    "TIL: Use `git restore --staged` to unstage files safely.",
    "Dev Tip: Keep component props minimal — pass functions only when necessary.",
    "Pro Tip: Use CSS custom properties for dynamic theming.",
    "Quick Tip: `console.table()` for better array/object debugging.",
  ];
  const todayIndex = new Date().getDate() % tips.length;
  const currentTip = tips[todayIndex];

  useEffect(() => {
    async function fetchLatestCommit() {
      setLoading(true);
      try {
        const res = await fetch('https://api.github.com/users/devleo10/events/public');
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
        const events = await res.json();

        const pushEvent = (events || []).find((ev: any) => 
          ev.type === "PushEvent" && ev.payload?.commits?.length
        );
        
        if (pushEvent) {
          const commits = pushEvent.payload.commits;
          const latest = commits[commits.length - 1];
          setCommitMsg(latest.message || null);
          setRepoName(pushEvent.repo?.name || null);
        } else {
          setCommitMsg(null);
        }
      } catch (err) {
        setCommitMsg(null);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestCommit();
  }, []);

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="random">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.01),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.003),transparent_65%)]" />
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
            className="inline-block px-4 py-2 border border-white/15 rounded-full text-white/20 text-xs tracking-wider uppercase mb-5"
          >
            Random Updates
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Random / Fun
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/[0.005] p-6 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-5 h-5 text-white/40" />
              <h3 className="text-lg font-semibold text-white">Now</h3>
            </div>
            <p className="text-sm text-white/40">Learning: WebAssembly experiments for compute-heavy tasks</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/[0.005] p-6 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-5 h-5 text-white/40" />
              <h3 className="text-lg font-semibold text-white">Today I Learned</h3>
            </div>
            <p className="text-sm text-white/40">
              Small timebox sessions (45/15) can improve focus for deep bug-sprints.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/[0.005] p-6 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-5 h-5 text-white/40" />
              <h3 className="text-lg font-semibold text-white">Dev Tip</h3>
            </div>
            <p className="text-sm text-white/40">{currentTip}</p>
          </motion.div>
        </div>

        {/* Latest Git Commit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/[0.005] p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="w-6 h-6 text-white/40" />
              <h3 className="text-xl font-semibold text-white">Latest Git Commit</h3>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="px-3 py-2 rounded-lg bg-white/[0.05] border border-white/15 text-xs font-medium text-white/60">
                git
              </div>
              
              <div className="flex-1">
                {loading ? (
                  <div className="text-sm text-white/40">Checking GitHub...</div>
                ) : commitMsg ? (
                  <div>
                    <div className="text-sm font-medium text-white/70">{commitMsg}</div>
                    {repoName && (
                      <div className="text-xs text-white/30 mt-1">{repoName}</div>
                    )}
                  </div>
                ) : (
                  <div className="text-xs text-white/30">
                    No recent public commits found or API request blocked.
                  </div>
                )}
              </div>

              <a
                href="https://github.com/devleo10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-2 rounded-lg border border-white/15 text-white/50 hover:text-white/80 hover:border-white/30 transition-colors"
              >
                View Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RandomFun;
