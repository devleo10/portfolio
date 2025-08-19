import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import PageWrapper from './PageWrapper';
import { IconCloud } from './ui/icon-cloud';

const AboutSection: React.FC = () => {
  // Consolidated data for About section
  // Dynamically fetch currently reading book from Goodreads RSS
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
const iconUrls = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.simpleicons.org/github/FFFFFF",         // GitHub (white for visibility)
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.worldvectorlogo.com/logos/aws-2.svg", // AWS (official logo)
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "https://cdn.simpleicons.org/postman/FF6C37",        // Postman (not in Devicon)
  "https://cdn.simpleicons.org/jsonwebtokens/FFFFFF", // JWT
  "https://cdn.simpleicons.org/turborepo/EF4444",     // TurboRepo
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  "https://cdn.simpleicons.org/prisma/FFFFFF",        // Prisma (white for visibility)
  "https://cdn.simpleicons.org/vercel/000000",        // Vercel
  "https://cdn.simpleicons.org/sass/CC6699",          // Sass
  "https://cdn.simpleicons.org/materialui/007FFF"     // Material UI
];



  return (
    <PageWrapper>
      <section className="py-32 relative overflow-hidden" id="about">
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
          <h2 className="text-5xl sm:text-6xl font-bold font-pixel text-white mb-6 tracking-tight">
            About Me
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
        </motion.div>

        {/* Main About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-xl text-white/70 leading-relaxed mb-6">
            Full-stack tinkerer and open-source enthusiast passionate about building scalable solutions, robust microservices, and clean, intuitive user interfaces. I focus on creating products that solve real-world problems—projects with genuine utility, not just portfolio pieces.
          </p>
          <p className="text-lg text-white/60 leading-relaxed">
            Currently interning at House of EdTech, where I work with Next.js, Node.js, Python, Supabase, and AWS to design and implement microservice-driven architectures for mutual fund platforms. When I’m not architecting solutions, you’ll find me traveling to new places or immersed in a good book.
          </p>
        </motion.div>

        {/* Currently Reading (from Goodreads, dynamic) - No Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Book className="w-6 h-6 text-white/60" />
            <h3 className="text-xl font-semibold text-white">Currently Reading</h3>
          </div>
          {book ? (
            <div className="flex gap-6 items-start justify-center">
              <a href={book.link} target="_blank" rel="noopener noreferrer" className="w-20 h-28 flex-shrink-0 rounded-md overflow-hidden border border-white/15 bg-white/[0.05] flex items-center justify-center hover:scale-105 transition-transform">
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

        {/* Tech Arsenal Heading and Icon Cloud Only */}
        <div className="mb-16">
          <h3 className="text-3xl sm:text-4xl font-pixel text-white text-center mb-8 tracking-tight">
            Tech Arsenal
          </h3>
          <div className="flex justify-center">
            <IconCloud images={iconUrls} />
          </div>
        </div>
      </div>
      </section>
    </PageWrapper>
  );
};

export default AboutSection;
