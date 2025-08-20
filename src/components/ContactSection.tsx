import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, GitBranch, Book } from 'lucide-react';
import PageWrapper from './PageWrapper';



// For production use with GitHub GraphQL API, you would need:
// 1. A GitHub Personal Access Token (https://github.com/settings/tokens)
// 2. Use this GraphQL query:
// query {
//   user(login: "devleo10") {
//     contributionsCollection {
//       contributionCalendar {
//         totalContributions
//         weeks {
//           contributionDays {
//             color
//             contributionCount
//             date
//             weekday
//           }
//         }
//       }
//     }
//   }
// }
// 3. POST to https://api.github.com/graphql with Authorization: bearer TOKEN

// GitHub-style contribution graph component (last 30 days)
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
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 text-white/40 text-xs tracking-wider uppercase mb-5"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold font-pixel text-white mb-6 tracking-tight">
              Connect & Explore
            </h2>
            <div className="w-24 h-px bg-white/30 mx-auto" />
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Connect Me - Large Card (spans 2 columns on lg) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-pixel text-white">Find Me Online</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="https://github.com/devleo10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  <div>
                    <div className="text-white font-medium">GitHub</div>
                    <div className="text-white/40 text-sm">devleo10</div>
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/mehbub-alam-1b7b2b1b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-white">in</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">LinkedIn</div>
                    <div className="text-white/40 text-sm">Professional</div>
                  </div>
                </a>
                
                <a
                  href="https://twitter.com/_devleo10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-white">𝕏</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Twitter</div>
                    <div className="text-white/40 text-sm">Updates</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Currently Reading Card */}
             <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Book className="w-6 h-6 text-white/60" />
            <h3 className="text-xl font-semibold font-pixel text-white">Currently Reading</h3>
          </div>
          {book ? (
            <div className="flex gap-4 items-start justify-center">
              <a href={book.link} target="_blank" rel="noopener noreferrer" className="w-12 h-16 flex-shrink-0 rounded-md overflow-hidden border border-white/15 bg-white/[0.05] flex items-center justify-center hover:scale-105 transition-transform">
                <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
              </a>
              <div className="text-center">
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white mb-1 hover:underline block">{book.title}</a>
                <p className="text-sm text-white/60 mb-1">by {book.author} <span className="text-white/30">({book.year})</span></p>
                <p className="text-xs text-yellow-400 mb-2">Goodreads rating: {book.rating} ⭐</p>
                <p className="text-sm text-white/50">{book.note}</p>
              </div>
            </div>
          ) : (
            <div className="text-white/40 text-sm text-center">Loading current book...</div>
          )}
        </motion.div>

            {/* Latest Commit Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold font-pixel text-white">Latest Commit</h3>
              </div>
              
              {loading ? (
                <div className="text-sm text-white/40">Checking GitHub...</div>
              ) : commitMsg ? (
                <div className="space-y-3">
                  {commitUrl ? (
                    <a
                      href={commitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white/70 hover:text-white transition-colors font-medium text-sm leading-relaxed"
                      title="View this commit on GitHub"
                    >
                      {commitMsg.length > 60 ? `${commitMsg.substring(0, 60)}...` : commitMsg}
                    </a>
                  ) : (
                    <div className="text-white/70 font-medium text-sm leading-relaxed">
                      {commitMsg.length > 60 ? `${commitMsg.substring(0, 60)}...` : commitMsg}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    {repoName && <span>{repoName}</span>}
                    {commitDate && <span>• {commitDate}</span>}
                  </div>
                </div>
              ) : (
                <div className="text-xs text-white/30">No recent commits found</div>
              )}
            </motion.div>

            {/* Contribution Graph Card (spans 2 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-2 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold font-pixel text-white">Contribution Activity</h3>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-sm bg-white/10"></div>
                    <div className="w-2 h-2 rounded-sm bg-green-500/30"></div>
                    <div className="w-2 h-2 rounded-sm bg-green-500/50"></div>
                    <div className="w-2 h-2 rounded-sm bg-green-500/70"></div>
                    <div className="w-2 h-2 rounded-sm bg-green-500/90"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
              
              {!loading && contributions.length > 0 && (
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                  <ContributionGraph contributions={contributions} />
                </div>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ContactSection;
