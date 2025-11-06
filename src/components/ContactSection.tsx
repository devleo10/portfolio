import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, GitBranch, Book, Linkedin, Mail, Instagram } from 'lucide-react';
import PageWrapper from './PageWrapper';



const ContributionGraph: React.FC<{ contributions: Array<{ date: string; count: number }> }> = ({ contributions }) => {
  const today = new Date();
  const last30Days = [];
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    const contribution = contributions.find(c => c.date === dateStr);
    const count = contribution ? contribution.count : 0;
    last30Days.push({ date: dateStr, count });
  }
  const getColor = (count: number) => {
    if (count === 0) return 'rgba(255,255,255,0.1)';
    if (count <= 2) return 'rgba(34, 197, 94, 0.3)';
    if (count <= 5) return 'rgba(34, 197, 94, 0.5)';
    if (count <= 10) return 'rgba(34, 197, 94, 0.7)';
    return 'rgba(34, 197, 94, 0.9)';
  };
  return (
    <div className="space-y-2">
      <div className="text-xs text-white/40 mb-2">Last 30 days</div>
      <div className="flex gap-1 overflow-x-auto pb-2">
        {last30Days.map(({ date, count }) => (
          <div
            key={date}
            className="w-2.5 h-2.5 rounded-sm"
            style={{ backgroundColor: getColor(count) }}
            title={`${count} contributions on ${date}`}
          />
        ))}
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  const [commitMsg, setCommitMsg] = useState<string | null>(null);
  const [repoName, setRepoName] = useState<string | null>(null);
  const [commitUrl, setCommitUrl] = useState<string | null>(null);
  const [commitDate, setCommitDate] = useState<string | null>(null);
  const [contributions, setContributions] = useState<Array<{ date: string; count: number }>>([]);
  const [loading, setLoading] = useState(true);

  // Book data
  const [book, setBook] = useState<{
    title: string;
    author: string;
    year: string;
    rating: string;
    cover: string;
    link: string;
    note: string;
  } | null>(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        // Try multiple CORS proxies
        const proxies = [
          'https://api.allorigins.win/raw?url=',
          'https://corsproxy.io/?',
          'https://cors.sh/'
        ];
        
        const targetUrl = 'https://www.goodreads.com/review/list_rss/193041251?shelf=currently-reading';
        let text = '';
        
        for (const proxy of proxies) {
          try {
            const res = await fetch(proxy + encodeURIComponent(targetUrl));
            if (res.ok) {
              text = await res.text();
              break;
            }
          } catch (e) {
            continue;
          }
        }
        
        if (!text) throw new Error('All proxies failed');
        
        // Parse XML
        const parser = new window.DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const item = xml.querySelector('item');
        if (!item) throw new Error('No items found');
        
        const title = item.querySelector('title')?.textContent || '';
        const description = item.querySelector('description')?.textContent || '';
        const link = item.querySelector('link')?.textContent || '';
        
        // Extract author from description
        const authorMatch = description.match(/author: ([^<]+)/);
        const author = authorMatch ? authorMatch[1].trim() : '';
        
        // Extract year from description
        const yearMatch = description.match(/book published: (\d+)/);
        const year = yearMatch ? yearMatch[1] : '';
        
        // Extract rating from description
        const ratingMatch = description.match(/average rating: ([\d.]+)/);
        const rating = ratingMatch ? ratingMatch[1] : '';
        
        // Extract cover image from description HTML
        const coverMatch = description.match(/src="([^"]+)"/);
        const cover = coverMatch ? coverMatch[1] : '';
        
        setBook({ title, author, year, rating, cover, link, note: 'Currently reading this amazing book!' });
      } catch (e) {
        console.error('Failed to fetch book:', e);
        // Fallback data
        setBook({
          title: "The Murder Game (Griffin Powell, #8)",
          author: "Beverly Barton", 
          year: "2008",
          rating: "4.16",
          cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348603451l/1932163._SY75_.jpg",
          link: "https://www.goodreads.com/book/show/1932163.The_Murder_Game",
          note: "A thrilling mystery novel"
        });
      }
    }
    fetchBook();
  }, []);


  useEffect(() => {
    async function fetchGitHubData() {
      setLoading(true);
      try {
        // Fetch latest commit from recent repos
        const reposRes = await fetch('https://api.github.com/users/devleo10/repos?type=public&sort=updated&per_page=10');
        if (!reposRes.ok) throw new Error(`GitHub API returned ${reposRes.status}`);
        const repos = await reposRes.json();
        
        let latestCommit = null;
        let latestDate = new Date(0);
        let latestRepoName = null;
        let latestCommitUrl = null;
        let latestCommitDate = null;
        
        // Find the most recent commit across repos
        for (const repo of repos.slice(0, 5)) {
          try {
            const commitsRes = await fetch(`https://api.github.com/repos/${repo.full_name}/commits?per_page=5`);
            if (commitsRes.ok) {
              const commits = await commitsRes.json();
              for (const commit of commits) {
                const commitDate = new Date(commit.commit.author.date);
                if (commitDate > latestDate) {
                  latestDate = commitDate;
                  latestCommit = commit.commit.message;
                  latestRepoName = repo.name;
                  latestCommitUrl = commit.html_url;
                  latestCommitDate = commitDate.toLocaleDateString();
                }
              }
            }
          } catch (err) {
            // skip
          }
        }
        
        setCommitMsg(latestCommit);
        setRepoName(latestRepoName);
        setCommitUrl(latestCommitUrl);
        setCommitDate(latestCommitDate);

        // Fetch real GitHub contribution data using GraphQL API
        try {
          const token = import.meta.env.VITE_GITHUB_TOKEN;
          const query = `
            query {
              user(login: "devleo10") {
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      contributionDays {
                        color
                        contributionCount
                        date
                        weekday
                      }
                    }
                  }
                }
              }
            }
          `;

          
          const graphqlRes = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `bearer ${token}`,
            },
            body: JSON.stringify({ query }),
          });
          
          if (graphqlRes.ok) {
            const data = await graphqlRes.json();
            
            if (data.data?.user?.contributionsCollection?.contributionCalendar?.weeks) {
              // Flatten the weeks into a single array of days
              const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
              const contributionData = weeks.flatMap((week: any) => 
                week.contributionDays.map((day: any) => ({
                  date: day.date,
                  count: day.contributionCount,
                  color: day.color
                }))
              );
              
              setContributions(contributionData);
              console.log('Successfully fetched real GitHub contribution data');
            } else {
              throw new Error('No contribution data in response');
            }
          } else {
            throw new Error(`GraphQL API returned ${graphqlRes.status}`);
          }
        } catch (contributionErr) {
          // Fallback to mock data if real data fetch fails
          console.log('Failed to fetch real contribution data, using mock data:', contributionErr);
          const contributionData = [];
          const today = new Date();
          
          // Generate realistic mock contribution data for the last 30 days only
          for (let i = 29; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            
            // Create more realistic contribution patterns
            const dayOfWeek = date.getDay();
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            const baseChance = isWeekend ? 0.3 : 0.7;
            
            let count = 0;
            if (Math.random() < baseChance) {
              count = Math.floor(Math.random() * (isWeekend ? 5 : 15)) + 1;
            }
            
            contributionData.push({ date: dateStr, count });
          }
          
          setContributions(contributionData);
        }
        
      } catch (err) {
        setCommitMsg(null);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHubData();
  }, []);

  return (
    <PageWrapper showBottomGlow={false}>
      <section className="py-32 relative overflow-hidden" id="contact">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Digital Footprint
            </h2>
            <p className="text-base max-w-md mx-auto" style={{ color: '#9199A6' }}>
              A snapshot of my online world: code, books, and ways to connect.
            </p>
          </motion.div>

          {/* Clean Layout */}
          <div className="max-w-4xl mx-auto space-y-20">
            {/* Contribution Graph */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Github className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-semibold text-white">Recent Git Activity</h3>
              </div>
              {!loading && contributions.length > 0 && (
                <div className="flex justify-center" style={{ color: '#9199A6' }}>
                  <ContributionGraph contributions={contributions} />
                </div>
              )}
            </motion.div>

            {/* Latest Activity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              {/* Latest Commit */}
              <div className="text-center md:text-left" style={{ color: '#9199A6' }}>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                  <GitBranch className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-semibold text-white">Latest Commit</h3>
                </div>
                {loading ? (
                  <div>Checking GitHub...</div>
                ) : commitMsg ? (
                  <div>
                    {commitUrl ? (
                      <a
                        href={commitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors leading-relaxed block mb-3"
                        title="View this commit on GitHub"
                        style={{ color: '#9199A6' }}
                      >
                        {commitMsg.length > 120 ? `${commitMsg.substring(0, 120)}...` : commitMsg}
                      </a>
                    ) : (
                      <p className="leading-relaxed mb-3" style={{ color: '#9199A6' }}>
                        {commitMsg.length > 120 ? `${commitMsg.substring(0, 120)}...` : commitMsg}
                      </p>
                    )}
                    <div className="text-sm" style={{ color: '#9199A6' }}>
                      {repoName && <span>{repoName}</span>}
                      {commitDate && <span> • {commitDate}</span>}
                    </div>
                  </div>
                ) : (
                  <div>No recent commits found</div>
                )}
              </div>

              {/* Currently Reading */}
              <div className="text-center md:text-left" style={{ color: '#9199A6' }}>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                  <Book className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-semibold text-white">Currently Reading</h3>
                </div>
                {book ? (
                  <div className="flex items-start gap-4 justify-center md:justify-start">
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-20 flex-shrink-0 rounded overflow-hidden hover:scale-105 transition-transform"
                    >
                      <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                    </a>
                    <div className="flex-1 min-w-0">
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline block mb-1"
                        style={{ color: '#9199A6', fontWeight: 500 }}
                      >
                        {book.title}
                      </a>
                      <p className="text-sm mb-1" style={{ color: '#9199A6' }}>
                        by {book.author}
                        {book.year && <span style={{ color: '#9199A6' }}> ({book.year})</span>}
                      </p>
                      <span className="text-yellow-400 text-sm">{book.rating}★ on Goodreads</span>
                    </div>
                  </div>
                ) : (
                  <div>Loading current book...</div>
                )}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
              style={{ color: '#9199A6' }}
            >
              <h3 className="text-2xl font-semibold text-white mb-8">Get in touch</h3>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                <motion.a
                  href="https://github.com/devleo10"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex flex-col items-center gap-3 hover:text-accent transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                    <Github className="w-6 h-6 text-white/70 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.6)] transition-all duration-300" />
                  </div>
                  <span className="text-sm font-medium text-white/70 group-hover:text-accent transition-colors">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/leoxakash"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex flex-col items-center gap-3 hover:text-accent transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                    <Linkedin className="w-6 h-6 text-white/70 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.6)] transition-all duration-300" />
                  </div>
                  <span className="text-sm font-medium text-white/70 group-hover:text-accent transition-colors">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://twitter.com/_devleo10"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex flex-col items-center gap-3 hover:text-accent transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                    <span className="w-6 h-6 flex items-center justify-center text-white/70 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.6)] transition-all duration-300 font-bold">𝕏</span>
                  </div>
                  <span className="text-sm font-medium text-white/70 group-hover:text-accent transition-colors">X</span>
                </motion.a>
                <motion.a
                  href="https://instagram.com/semicolonfella"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex flex-col items-center gap-3 hover:text-accent transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                    <Instagram className="w-6 h-6 text-white/70 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.6)] transition-all duration-300" />
                  </div>
                  <span className="text-sm font-medium text-white/70 group-hover:text-accent transition-colors">Instagram</span>
                </motion.a>
                <motion.a
                  href="mailto:mehbubwork@gmail.com"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex flex-col items-center gap-3 hover:text-accent transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                    <Mail className="w-6 h-6 text-white/70 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.6)] transition-all duration-300" />
                  </div>
                  <span className="text-sm font-medium text-white/70 group-hover:text-accent transition-colors">Email</span>
                </motion.a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ContactSection;
