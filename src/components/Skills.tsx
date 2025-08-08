import React from 'react';
import { motion } from 'framer-motion';
import { Type, Smartphone, Bot, Wind } from 'lucide-react';

// Brand / Technology SVG Icons (minimal inline logos)
const ReactLogo = () => (
  <svg width={32} height={32} viewBox="0 0 256 256" className="animate-spin-slow text-white/70" style={{ animationDuration: '12s' }}>
    <g fill="none" stroke="currentColor" strokeWidth={12} opacity={0.85}>
      <ellipse cx={128} cy={128} rx={50} ry={18} transform="rotate(0 128 128)" />
      <ellipse cx={128} cy={128} rx={50} ry={18} transform="rotate(60 128 128)" />
      <ellipse cx={128} cy={128} rx={50} ry={18} transform="rotate(120 128 128)" />
    </g>
    <circle cx={128} cy={128} r={10} fill="currentColor" opacity={0.9} />
  </svg>
);

const NextLogo = () => (
  <svg width={32} height={32} viewBox="0 0 128 128" className="text-white/80">
    <rect width={128} height={128} rx={24} fill="currentColor" opacity={0.08} />
    <path d="M28 32h16l20 33 20-33h16L68 96h-8L28 32z" fill="currentColor" opacity={0.75} />
  </svg>
);

const TailwindLogo = () => (
  <svg width={32} height={32} viewBox="0 0 48 48" className="text-white/70">
    <path fill="currentColor" opacity={0.7} d="M24 12c-6 0-9.5 3-10.5 9 2-3 4.5-4.2 7.5-3.6 1.63.33 2.8 1.54 4.09 2.88C27.4 22.7 29.02 24.4 32.5 24c3.5-.4 5.83-3 6.5-8-2 3-4.5 4.2-7.5 3.6-1.63-.33-2.8-1.54-4.09-2.88C26.6 14.3 24.98 12.6 24 12Zm-10 12c-6 0-9.5 3-10.5 9 2-3 4.5-4.2 7.5-3.6 1.63.33 2.8 1.54 4.09 2.88C17.4 34.7 19.02 36.4 22.5 36c3.5-.4 5.83-3 6.5-8-2 3-4.5 4.2-7.5 3.6-1.63-.33-2.8-1.54-4.09-2.88C18.6 26.3 16.98 24.6 16 24Z" />
  </svg>
);

const VueLogo = () => (
  <svg width={32} height={32} viewBox="0 0 261.76 226.69" className="text-white/70">
    <path fill="currentColor" opacity={0.35} d="M161.82 0 130.9 53.02 100 0H0l130.9 226.69L261.76 0h-99.94Z" />
    <path fill="currentColor" opacity={0.75} d="M161.82 0 130.9 53.02 100 0H52.36L130.9 135.03 209.4 0h-47.58Z" />
  </svg>
);

const NodeLogo = () => (
  <svg width={32} height={32} viewBox="0 0 256 272" className="text-white/70">
    <path fill="currentColor" opacity={0.25} d="M128 0 11 64v144l117 64 117-64V64L128 0Z" />
    <path fill="currentColor" opacity={0.55} d="m128 33 90 49v98l-90 49-90-49V82l90-49Z" />
  </svg>
);

const ExpressLogo = () => (
  <div className="text-white/70 font-semibold text-lg tracking-tight">Ex</div>
);

const GraphQLLogo = () => (
  <svg width={32} height={32} viewBox="0 0 400 400" className="text-white/70">
    <circle cx={70} cy={310} r={30} fill="currentColor" opacity={0.4} />
    <circle cx={330} cy={310} r={30} fill="currentColor" opacity={0.4} />
    <circle cx={70} cy={90} r={30} fill="currentColor" opacity={0.4} />
    <circle cx={330} cy={90} r={30} fill="currentColor" opacity={0.4} />
    <circle cx={200} cy={20} r={30} fill="currentColor" opacity={0.55} />
    <circle cx={200} cy={380} r={30} fill="currentColor" opacity={0.55} />
    <path stroke="currentColor" strokeWidth={20} strokeLinecap="round" strokeLinejoin="round" opacity={0.35} fill="none" d="M200 50 330 90 330 310 200 350 70 310 70 90 200 50 330 310 70 310 330 90 70 90" />
  </svg>
);

const PythonLogo = () => (
  <svg width={32} height={32} viewBox="0 0 128 128" className="text-white/70">
    <path fill="currentColor" opacity={0.55} d="M63.9 12c-27.6 0-25.8 12-25.8 12v12.2h26.2v3.7H31.3S12 38.4 12 66.6c0 28.3 16.6 27.3 16.6 27.3h9.9v-14s-.5-16.6 16.3-16.6h26.3s15.8.3 15.8-15.2V27.5S99.8 12 72.2 12h-8.3Z" />
    <path fill="currentColor" opacity={0.35} d="M64.2 115.7c27.6 0 25.8-12 25.8-12v-12.2H63.8v-3.7h33.1s19.4 1.5 19.4-26.7c0-28.3-16.6-27.3-16.6-27.3h-9.9v14s.5 16.6-16.3 16.6H47.2S31.4 64.1 31.4 79.6v20.6s-1.7 15.5 25.9 15.5h6.9Z" />
  </svg>
);

const PostgresLogo = () => (
  <svg width={32} height={32} viewBox="0 0 512 512" className="text-white/70">
    <path fill="currentColor" opacity={0.25} d="M255 32C134 32 43 134 64 256c21 122 85 224 191 224s170-102 191-224C469 134 378 32 255 32Z" />
    <path fill="currentColor" opacity={0.55} d="M256 128c-70 0-96 50-96 112 0 61 26 112 96 112s96-51 96-112c0-62-26-112-96-112Zm0 64c36 0 48 22 48 48s-12 48-48 48-48-22-48-48 12-48 48-48Z" />
  </svg>
);

const MongoLogo = () => (
  <svg width={32} height={32} viewBox="0 0 256 512" className="text-white/70">
    <path fill="currentColor" opacity={0.35} d="M127 0s-25 92-25 167 8 102 25 149c17-47 26-74 26-149S127 0 127 0Z" />
    <path fill="currentColor" opacity={0.7} d="M127 512V0" />
  </svg>
);

const DockerLogo = () => (
  <svg width={32} height={32} viewBox="0 0 256 256" className="text-white/70">
    <rect x={16} y={96} width={48} height={48} fill="currentColor" opacity={0.55} />
    <rect x={72} y={96} width={48} height={48} fill="currentColor" opacity={0.55} />
    <rect x={128} y={96} width={48} height={48} fill="currentColor" opacity={0.55} />
    <rect x={72} y={40} width={48} height={48} fill="currentColor" opacity={0.3} />
    <rect x={128} y={40} width={48} height={48} fill="currentColor" opacity={0.3} />
    <path fill="currentColor" opacity={0.2} d="M16 152h192c0 48-48 72-96 72S16 200 16 152Z" />
  </svg>
);

const AWSLogo = () => (
  <div className="text-[10px] font-black tracking-wide text-white/70">AWS</div>
);

const K8sLogo = () => (
  <div className="text-[10px] font-black tracking-wide text-white/70">K8s</div>
);

const ActionsLogo = () => (
  <div className="text-[10px] font-semibold text-white/60">CI</div>
);

const TerraformLogo = () => (
  <div className="text-[10px] font-black tracking-wide text-white/70">TF</div>
);

const JenkinsLogo = () => (
  <div className="text-[10px] font-semibold text-white/65">JK</div>
);

const GitLogo = () => (
  <svg width={32} height={32} viewBox="0 0 97 97" className="text-white/70">
    <path fill="currentColor" opacity={0.55} d="M92.7 44.4 52.6 4.3c-2.8-2.8-7.3-2.8-10.1 0l-10 10 12.7 12.7c3-1 6.5-.3 8.9 2.1 2.4 2.4 3.1 5.9 2.1 8.9l12.3 12.3c3-1 6.5-.3 8.9 2.1 3.2 3.2 3.2 8.3 0 11.5-3.2 3.2-8.3 3.2-11.5 0-2.6-2.6-3.1-6.4-1.7-9.5L51.8 43.4v30.3c.8.4 1.6.9 2.3 1.6 3.2 3.2 3.2 8.3 0 11.5-3.2 3.2-8.3 3.2-11.5 0-3.2-3.2-3.2-8.3 0-11.5.9-.9 2-1.6 3.1-2V42.3c-1.1-.4-2.2-1.1-3.1-2-2.4-2.4-3.1-5.9-2.1-8.9L27.8 18 4.3 41.5c-2.8 2.8-2.8 7.3 0 10.1l40.1 40.1c2.8 2.8 7.3 2.8 10.1 0l38.2-38.2c2.7-2.8 2.7-7.3 0-10.1z" />
  </svg>
);

const JestLogo = () => (
  <div className="text-[10px] font-semibold text-white/65">Jest</div>
);

const WebpackLogo = () => (
  <div className="text-[10px] font-semibold text-white/65">WPack</div>
);

const RedisLogo = () => (
  <div className="text-[10px] font-semibold text-white/65">Redis</div>
);

const AiLogo = () => (
  <Bot size={32} className="text-white/70" />
);

const WebsocketLogo = () => (
  <Wind size={32} className="text-white/70" />
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Type size={26} className="text-white/70" />,
      level: 'Advanced',
      description: 'Building accessible, high‑performance interfaces with modern component architectures, design systems, and refined UX detail.',
      skills: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Vue.js' },
        { name: 'React Native' }
      ]
    },
    {
      title: 'Backend',
      icon: <Bot size={26} className="text-white/70" />,
      level: 'Advanced',
      description: 'Designing robust APIs, modular services, data modeling and performance tuning with security and scalability in mind.',
      skills: [
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'GraphQL' },
        { name: 'Python' },
        { name: 'PostgreSQL' },
        { name: 'MongoDB' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: <Smartphone size={26} className="text-white/70" />,
      level: 'Advanced',
      description: 'Automating delivery pipelines, container orchestration, infrastructure as code, and reliable cloud-native operations.',
      skills: [
        { name: 'Docker' },
        { name: 'AWS' },
        { name: 'Kubernetes' },
        { name: 'GitHub Actions' },
        { name: 'Terraform' },
        { name: 'Jenkins' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: <Wind size={26} className="text-white/70" />,
      level: 'Proficient',
      description: 'Ecosystem tooling, testing strategies, build optimization, caching layers and realtime communication patterns.',
      skills: [
        { name: 'Git' },
        { name: 'Jest' },
        { name: 'Webpack' },
        { name: 'Redis' },
        { name: 'AI/ML' },
        { name: 'WebSockets' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
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
            Capabilities
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,white,white_60%,rgba(255,255,255,0.25))]">Skills</span>
          </h2>
          <div className="w-32 h-px bg-white/30 mx-auto" />
          <p className="text-white/55 max-w-2xl mx-auto mt-8 text-sm leading-relaxed">
            A broad and evolving toolkit applied with precision across frontend, backend, infrastructure and product craft.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-8 bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.05] transition-all duration-500 backdrop-blur-sm flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center text-white/70">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">{category.title}</h3>
                  <div className="text-xs text-white/45 mt-1 tracking-wider uppercase">{category.level}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="px-2.5 py-1 rounded-full text-[11px] bg-white/[0.05] text-white/60 border border-white/10 tracking-wide">
                    {skill.name}
                  </span>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed flex-grow">
                {category.description}
              </p>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none" />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="rounded-2xl p-10 bg-white/[0.035] border border-white/10 backdrop-blur-sm inline-block">
            <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Always Expanding</h3>
            <p className="text-white/60 text-sm max-w-2xl mx-auto leading-relaxed">
              Constantly exploring emerging technologies, refining craft, and deepening systems thinking to build better, more resilient software.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
