import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Star, Award } from 'lucide-react';

const Communities: React.FC = () => {
  const communities = [
    {
      name: 'CNCF Hooghly',
      role: 'Community Advocate',
      period: '2022 - Present',
      description: 'Leading cloud-native technology adoption in the local developer community through meetups, workshops, and hands-on sessions.',
      achievements: ['Organized 15+ meetups', '500+ community members', 'Speaker at KubeCon'],
      logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/111/fff?text=C',
      members: '500+',
      events: 15
    },
    {
      name: 'FrostHacks',
      role: 'Core Team Member',
      period: '2022 - 2023',
      description: 'Global hackathon community fostering innovation and collaboration among developers worldwide.',
      achievements: ['3 Global Hackathons', '1000+ participants', 'Mentored 50+ teams'],
      logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/111/fff?text=F',
      members: '1000+',
      events: 3
    },
    {
      name: 'IEI CSBS',
      role: 'Technical Lead',
      period: '2021 - 2022',
      description: 'Institution of Engineers (India) Computer Society chapter focused on bridging academia and industry.',
      achievements: ['20+ Technical workshops', 'Industry partnerships', 'Student placement program'],
      logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/111/fff?text=I',
      members: '200+',
      events: 20
    },
    {
      name: 'Developer Circles',
      role: 'Community Builder',
      period: '2020 - Present',
      description: 'Building and nurturing local developer communities across multiple platforms and technologies.',
      achievements: ['Multiple community chapters', 'Cross-platform events', 'Mentorship programs'],
      logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/111/fff?text=D',
      members: '800+',
      events: 25
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="communities">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.03),transparent_65%)]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Community <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,white,white_55%,rgba(255,255,255,0.25))]">Involvement</span>
          </h2>
          <div className="w-28 h-px bg-white/30 mx-auto mb-8" />
          <p className="text-lg text-white/55 max-w-3xl mx-auto leading-relaxed">
            Actively contributing to the growth and development of tech communities worldwide.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {communities.map((community, index) => (
            <motion.div
              key={community.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group bg-white/[0.035] rounded-2xl p-7 border border-white/10 hover:border-white/25 transition-all duration-500 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                  <img src={community.logo} alt={community.name} className="w-full h-full object-cover rounded-xl grayscale opacity-70" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">{community.name}</h3>
                  <p className="text-white/45 text-sm tracking-wide">{community.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-white/45 mb-5 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {community.period}
                </div>
              </div>
              <p className="text-white/60 mb-6 leading-relaxed text-sm">
                {community.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-lg p-3 text-center bg-white/[0.04] border border-white/10">
                  <div className="flex items-center justify-center gap-1 text-white/55 mb-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-lg font-medium text-white tracking-tight">{community.members}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">Members</div>
                </div>
                <div className="rounded-lg p-3 text-center bg-white/[0.04] border border-white/10">
                  <div className="flex items-center justify-center gap-1 text-white/55 mb-1">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="text-lg font-medium text-white tracking-tight">{community.events}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">Events</div>
                </div>
              </div>
              <div>
                <h4 className="text-white/80 font-medium mb-3 flex items-center gap-2 tracking-wide text-sm uppercase">
                  <Award className="w-4 h-4 text-white/60" /> Achievements
                </h4>
                <div className="space-y-2">
                  {community.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-white/55 text-sm">
                      <Star className="w-3.5 h-3.5 text-white/40 mt-0.5" />
                      <span className="leading-snug">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white/[0.035] rounded-2xl p-10 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white mb-8 tracking-tight">Community Impact</h3>
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <div className="text-3xl font-medium text-white mb-2 tracking-tight">2500+</div>
                <div className="text-white/45 text-xs uppercase tracking-wider">Developers Reached</div>
              </div>
              <div>
                <div className="text-3xl font-medium text-white mb-2 tracking-tight">60+</div>
                <div className="text-white/45 text-xs uppercase tracking-wider">Events Organized</div>
              </div>
              <div>
                <div className="text-3xl font-medium text-white mb-2 tracking-tight">150+</div>
                <div className="text-white/45 text-xs uppercase tracking-wider">Mentees Guided</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Communities;
