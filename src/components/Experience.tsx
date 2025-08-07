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
      color: 'from-blue-500 to-purple-600',
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
      color: 'from-purple-500 to-pink-600',
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
      color: 'from-green-500 to-blue-600',
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
      color: 'from-orange-500 to-red-600',
      icon: <Code className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="experience">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-4"
          >
            Career Journey
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Enhanced timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 rounded-full shadow-lg shadow-blue-500/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16 last:mb-0`}
            >
              {/* Enhanced timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-gray-900 rounded-full border-4 border-gray-700 flex items-center justify-center shadow-xl shadow-blue-500/20 z-10">
                <div className={`w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center text-white`}>
                  {exp.icon}
                </div>
              </div>

              {/* Content card */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-24 md:pl-0' : 'md:pl-12 pl-24 md:pr-0'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${exp.color} text-white`}>
                      {exp.company}
                    </div>
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs border border-gray-700">
                      {exp.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{exp.title}</h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/80 text-gray-300 rounded-full text-sm border border-gray-700/50 hover:border-gray-600/50 transition-colors"
                      >
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
          className="text-center mt-16"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for the Next Challenge</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Always open to discussing exciting opportunities, innovative projects, and collaborations 
              that push the boundaries of technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
