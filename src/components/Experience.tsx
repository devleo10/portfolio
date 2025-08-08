import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Code, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Head of Engineering',
      company: 'HOE (House of Engineering)',
      period: '2023 - Present',
      location: 'Remote, Global',
      type: 'Full-time',
      description: 'Leading a team of 12+ engineers across multiple product verticals. Responsible for technical strategy, architecture decisions, and scaling engineering processes.',
      achievements: [
        'Reduced deployment time by 70% through CI/CD optimization',
        'Led migration to microservices architecture serving 100K+ users',
        'Implemented engineering best practices reducing bugs by 45%',
        'Mentored 8+ junior developers with 90% retention rate'
      ],
      tech: ['React', 'Node.js', 'Kubernetes', 'AWS', 'PostgreSQL'],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'Senior Full-Stack Engineer',
      company: 'TechFlow Solutions',
      period: '2022 - 2023',
      location: 'Hybrid, Mumbai',
      type: 'Full-time',
      description: 'Led development of enterprise-grade SaaS platform handling real-time data processing and analytics for e-commerce clients.',
      achievements: [
        'Built real-time analytics dashboard processing 1M+ events/day',
        'Optimized database queries reducing response time by 60%',
        'Designed and implemented RESTful APIs serving 50+ clients',
        'Collaborated with product team to define technical requirements'
      ],
      tech: ['Next.js', 'Python', 'Redis', 'Docker', 'MongoDB'],
      icon: <Users className="w-5 h-5" />
    },
    {
      title: 'Core Team Lead',
      company: 'FrostHacks (Global Hackathon)',
      period: '2022 - 2023',
      location: 'Remote, Worldwide',
      type: 'Volunteer',
      description: 'Organized and managed global hackathon events with 1000+ participants. Built platform infrastructure and mentored participating teams.',
      achievements: [
        'Successfully organized 3 global hackathons',
        'Managed platform serving 1000+ concurrent users',
        'Mentored 50+ teams across different time zones',
        'Secured partnerships with major tech companies'
      ],
      tech: ['React', 'Firebase', 'Vercel', 'Stripe', 'Discord API'],
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupX',
      period: '2021 - 2022',
      location: 'On-site, Bangalore',
      type: 'Full-time',
      description: 'Early-stage startup building fintech solutions. Responsible for entire technical stack from frontend to deployment infrastructure.',
      achievements: [
        'Built MVP from scratch serving 500+ early adopters',
        'Implemented secure payment processing with Razorpay',
        'Achieved 99.9% uptime with monitoring and alerting',
        'Reduced infrastructure costs by 40% through optimization'
      ],
      tech: ['Vue.js', 'Express.js', 'MySQL', 'AWS EC2', 'Nginx'],
      icon: <Code className="w-5 h-5" />
    },
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="experience">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.035),transparent_65%)]" />
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
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 border border-white/15 rounded-full text-white/55 text-xs tracking-wider uppercase mb-5"
          >
            Career Journey
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,white,white_60%,rgba(255,255,255,0.25))]">Experience</span>
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.4)_15%,rgba(255,255,255,0.4)_85%,rgba(255,255,255,0)_100%)]" />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16 last:mb-0`}
            >
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-14 h-14 bg-white/[0.04] rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_0_1px_rgba(255,255,255,0.05)] z-10">
                <div className="w-7 h-7 rounded-full bg-white/[0.12] flex items-center justify-center text-white/70">
                  {exp.icon}
                </div>
              </div>
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-24 md:pl-0' : 'md:pl-12 pl-24 md:pr-0'}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative rounded-2xl p-8 bg-white/[0.03] border border-white/10 hover:border-white/25 transition-all duration-500 backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="inline-block px-3 py-1 rounded-full text-[11px] font-medium bg-white/[0.06] text-white/70 tracking-wider uppercase border border-white/10">
                      {exp.company}
                    </div>
                    <span className="px-2 py-1 bg-white/[0.05] text-white/50 rounded text-[10px] border border-white/10 uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-5 text-white/45 text-xs mb-6 uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </div>
                  </div>
                  <p className="text-white/60 mb-6 leading-relaxed text-sm tracking-tight">
                    {exp.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-white/80 font-medium mb-3 flex items-center gap-2 tracking-wide text-sm uppercase">
                      <Award className="w-4 h-4 text-white/60" /> Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/55 text-sm">
                          <span className="w-1 h-1 rounded-full bg-white/40 mt-2" />
                          <span className="leading-snug">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full text-[11px] bg-white/[0.05] text-white/60 border border-white/10 tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="rounded-2xl p-10 bg-white/[0.035] border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white mb-5 tracking-tight">Ready for the Next Challenge</h3>
            <p className="text-white/60 text-sm max-w-3xl mx-auto leading-relaxed">
              Always open to discussing exciting opportunities, innovative projects, and collaborations that push the boundaries of technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
