import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, ExternalLink, GitBranch } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [commitMsg, setCommitMsg] = useState<string | null>(null);
  const [repoName, setRepoName] = useState<string | null>(null);
  const [commitUrl, setCommitUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestCommit() {
      setLoading(true);
      try {
        // First, get all public repositories
        const reposRes = await fetch('https://api.github.com/users/devleo10/repos?type=public&sort=updated&per_page=10');
        if (!reposRes.ok) throw new Error(`GitHub API returned ${reposRes.status}`);
        const repos = await reposRes.json();

  let latestCommit = null;
  let latestDate = new Date(0); // epoch
  let latestRepoName = null;
  let latestCommitUrl = null;

        // Check latest commit from each repo
        for (const repo of repos.slice(0, 5)) { // Check top 5 recently updated repos
          try {
            const commitsRes = await fetch(`https://api.github.com/repos/${repo.full_name}/commits?per_page=1`);
            if (commitsRes.ok) {
              const commits = await commitsRes.json();
              if (commits.length > 0) {
                const commit = commits[0];
                const commitDate = new Date(commit.commit.author.date);
                if (commitDate > latestDate) {
                  latestDate = commitDate;
                  latestCommit = commit.commit.message;
                  latestRepoName = repo.name;
                  latestCommitUrl = commit.html_url;
                }
              }
            }
          } catch (err) {
            // Skip this repo if there's an error
            console.warn(`Failed to fetch commits for ${repo.name}`);
          }
        }

        setCommitMsg(latestCommit);
        setRepoName(latestRepoName);
        setCommitUrl(latestCommitUrl);
      } catch (err) {
        console.error('Error fetching latest commit:', err);
        setCommitMsg(null);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestCommit();
  }, []);

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="contact">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.02),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.01),transparent_65%)]" />
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
            className="inline-block px-4 py-2 border border-white/15 rounded-full text-white/40 text-xs tracking-wider uppercase mb-5"
          >
            Let's Connect
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Building something cool and need an extra brain on the team? 
              Let's chat about making the web a little weirder (and a lot more awesome).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:mehbubwork@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-xl font-semibold tracking-wide transition-all duration-300 flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                <span>Send me an email</span>
              </motion.a>
              
              <motion.a
                href="https://drive.google.com/file/d/1IoCJwRyoxIKsFKJCI0mSmrtz6KJNMmPN/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-semibold tracking-wide border border-white/25 text-white/80 hover:text-white hover:border-white/60 transition-colors flex items-center gap-3"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Resume</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Details & Social Links */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.01] p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Contact Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-white/50 mb-1">Email</p>
                  <a href="mailto:mehbubwork@gmail.com" className="text-white/80 hover:text-white transition-colors">
                    mehbubwork@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Location</p>
                  <p className="text-white/80">India</p>
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Status</p>
                  <p className="text-white/80">Open to opportunities</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/[0.01] p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Find Me Online</h3>
              <div className="space-y-4">
                <a 
                  href="https://github.com/devleo10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                    <span className="text-xs font-bold">in</span>
                  </div>
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://twitter.com/yourhandle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                    <span className="text-xs font-bold">𝕏</span>
                  </div>
                  <span>Twitter</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Latest Git Commit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/[0.005] p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="w-6 h-6 text-white/40" />
              <h3 className="text-xl font-semibold text-white">Latest Git Activity</h3>
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
                    {commitUrl ? (
                      <a
                        href={commitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-white/70 underline hover:text-white"
                        title="View this commit on GitHub"
                      >
                        {commitMsg}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-white/70">{commitMsg}</div>
                    )}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
