import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, Star, Award } from 'lucide-react';

const Communities: React.FC = () => {
  const communities = [
    {
      name: 'CNCF Hooghly',
      role: 'Community Advocate',
      period: '2022 - Present',
      description: 'Leading cloud-native technology adoption in the local developer community through meetups, workshops, and hands-on sessions.',
      achievements: ['Organized 15+ meetups', '500+ community members', 'Speaker at KubeCon'],
      logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/0f172a/60a5fa?text=CNCF',
      color: 'from-blue-500 to-cyan-500',
      members: '500+',
      events: 15
    },
    {
      name: 'FrostHacks',
      role: 'Core Team Member',
      period: '2022 - 2023',
      description: 'Global hackathon community fostering innovation and collaboration among developers worldwide.',
      achievements: ['3 Global Hackathons', '1000+ participants', 'Mentored 50+ teams'],
      logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/0f172a/8b5cf6?text=FH',
      color: 'from-purple-500 to-pink-500',
      members: '1000+',
      events: 3
    },
    {
      name: 'IEI CSBS',
      role: 'Technical Lead',
      period: '2021 - 2022',
      description: 'Institution of Engineers (India) Computer Society chapter focused on bridging academia and industry.',
      achievements: ['20+ Technical workshops', 'Industry partnerships', 'Student placement program'],
      logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/0f172a/10b981?text=IEI',
      color: 'from-green-500 to-emerald-500',
      members: '200+',
      events: 20
    },
    {
      name: 'Developer Circles',
      role: 'Community Builder',
      period: '2020 - Present',
      description: 'Building and nurturing local developer communities across multiple platforms and technologies.',
      achievements: ['Multiple community chapters', 'Cross-platform events', 'Mentorship programs'],
      logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/0f172a/f59e0b?text=DC',
      color: 'from-orange-500 to-red-500',
      members: '800+',
      events: 25
    }
  ];

  return (
    <section className="py-20 bg-black" id="communities">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Community <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Involvement</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Actively contributing to the growth and development of tech communities worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {communities.map((community, index) => (
            <motion.div
              key={community.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${community.color} flex items-center justify-center overflow-hidden`}>
                  <img 
                    src={community.logo} 
                    alt={community.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{community.name}</h3>
                  <p className="text-gray-400">{community.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {community.period}
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{community.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 rounded-lg p-3 text-center border border-gray-700">
                  <div className="flex items-center justify-center gap-1 text-blue-400 mb-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-lg font-bold text-white">{community.members}</div>
                  <div className="text-xs text-gray-400">Members</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-center border border-gray-700">
                  <div className="flex items-center justify-center gap-1 text-purple-400 mb-1">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="text-lg font-bold text-white">{community.events}</div>
                  <div className="text-xs text-gray-400">Events</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  Key Achievements
                </h4>
                {community.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Community Impact</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">2500+</div>
                <div className="text-gray-300">Developers Reached</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">60+</div>
                <div className="text-gray-300">Events Organized</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">150+</div>
                <div className="text-gray-300">Mentees Guided</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Communities;
