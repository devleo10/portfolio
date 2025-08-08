import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowUpRight, Globe, MessageSquare } from 'lucide-react';

const contactMethods = [
	{
		label: 'Email',
		value: 'devleoroy@gmail.com',
		icon: <Mail className="w-4 h-4" />,
		href: 'mailto:devleoroy@gmail.com',
		description: 'Fastest way to reach me directly',
	},
	{
		label: 'GitHub',
		value: 'github.com/devleoroy',
		icon: <Github className="w-4 h-4" />,
		href: 'https://github.com/devleoroy',
		description: 'Open source work and contributions',
	},
	{
		label: 'LinkedIn',
		value: 'linkedin.com/in/devleoroy',
		icon: <Linkedin className="w-4 h-4" />,
		href: 'https://linkedin.com/in/devleoroy',
		description: 'Professional profile & background',
	},
	{
		label: 'Portfolio',
		value: 'devleo.xyz',
		icon: <Globe className="w-4 h-4" />,
		href: 'https://devleo.xyz',
		description: 'Primary site and experiments',
	},
];

const Contact: React.FC = () => {
	return (
		<section id="contact" className="py-32 relative overflow-hidden bg-[#050505]">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_130%,rgba(255,255,255,0.05),transparent_75%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.035),transparent_70%)]" />
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
						Contact
					</motion.span>
					<h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
						Let&apos;s{' '}
						<span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,white,white_60%,rgba(255,255,255,0.25))]">
							Connect
						</span>
					</h2>
					<div className="w-32 h-px bg-white/30 mx-auto" />
					<p className="text-white/55 max-w-2xl mx-auto mt-8 text-sm leading-relaxed">
						Whether it&apos;s a product idea, collaboration, opportunity or just a technical conversation — I&apos;m always open to
						meaningful discussions.
					</p>
				</motion.div>
				<div className="grid lg:grid-cols-3 gap-10">
					<div className="lg:col-span-2 space-y-8">
						<motion.form
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
							viewport={{ once: true }}
							className="relative rounded-2xl p-10 bg-white/[0.035] border border-white/10 backdrop-blur-sm"
							onSubmit={(e) => e.preventDefault()}
						>
							<div className="grid md:grid-cols-2 gap-6 mb-6">
								<div>
									<label className="block text-xs font-medium text-white/60 tracking-wider uppercase mb-2">Name</label>
									<input
										type="text"
										placeholder="Your name"
										className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-white/30 text-white placeholder-white/30 text-sm outline-none transition-colors"
									/>
								</div>
								<div>
									<label className="block text-xs font-medium text-white/60 tracking-wider uppercase mb-2">Email</label>
									<input
										type="email"
										placeholder="you@example.com"
										className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-white/30 text-white placeholder-white/30 text-sm outline-none transition-colors"
									/>
								</div>
							</div>
							<div className="mb-6">
								<label className="block text-xs font-medium text-white/60 tracking-wider uppercase mb-2">Subject</label>
								<input
									type="text"
									placeholder="What&apos;s this about?"
									className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-white/30 text-white placeholder-white/30 text-sm outline-none transition-colors"
								/>
							</div>
							<div className="mb-8">
								<label className="block text-xs font-medium text-white/60 tracking-wider uppercase mb-2">Message</label>
								<textarea
									rows={6}
									placeholder="Tell me more about your idea, project or question..."
									className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-white/30 text-white placeholder-white/30 text-sm outline-none transition-colors resize-none"
								/>
							</div>
							<div className="flex flex-col sm:flex-row sm:items-center gap-4">
								<button
									type="submit"
									className="group px-6 py-3 rounded-lg bg-white text-black text-sm font-medium tracking-wide flex items-center gap-2 hover:bg-white/90 transition-colors relative overflow-hidden"
								>
									<span className="relative z-10 flex items-center gap-2">
										Send Message <Send className="w-4 h-4" />
									</span>
									<span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
								</button>
								<p className="text-white/40 text-xs tracking-wide">No spam. I usually respond within 24 hours.</p>
							</div>
							<div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/10" />
						</motion.form>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.15 }}
							viewport={{ once: true }}
							className="grid sm:grid-cols-2 gap-6"
						>
							{contactMethods.map((m) => (
								<a
									key={m.label}
									href={m.href}
									target={m.href.startsWith('http') ? '_blank' : undefined}
									rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
									className="group relative rounded-xl p-6 bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.05] transition-all duration-500 backdrop-blur-sm overflow-hidden"
								>
									<div className="flex items-start justify-between mb-4">
										<div className="w-10 h-10 rounded-lg bg-white/[0.07] border border-white/10 flex items-center justify-center text-white/70">
											{m.icon}
										</div>
										<ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
									</div>
									<div className="mb-2 flex items-center gap-2">
										<span className="text-sm font-medium text-white tracking-tight">{m.label}</span>
										<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] text-white/50 border border-white/10 uppercase tracking-wider">
											Link
										</span>
									</div>
									<div className="text-white/55 text-xs mb-3 break-all">{m.value}</div>
									<p className="text-white/40 text-[11px] leading-relaxed">{m.description}</p>
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),transparent_70%)] pointer-events-none" />
								</a>
							))}
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.25 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div className="relative rounded-2xl p-10 bg-white/[0.04] border border-white/10 backdrop-blur-sm">
							<div className="flex items-start gap-4 mb-6">
								<div className="w-12 h-12 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center text-white/70">
									<MessageSquare className="w-5 h-5" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-white tracking-tight mb-2">What to Write</h3>
									<p className="text-white/55 text-sm leading-relaxed">
										Project briefs, product ideas, collaboration proposals, technical questions or mentorship requests are all welcome.
									</p>
								</div>
							</div>
							<ul className="space-y-3 text-white/55 text-sm">
								<li className="flex gap-2">
									<span className="w-1 h-1 rounded-full bg-white/40 mt-2" /> Quick intro — who you are & goals
								</li>
								<li className="flex gap-2">
									<span className="w-1 h-1 rounded-full bg-white/40 mt-2" /> Context — problem, product, or idea
								</li>
								<li className="flex gap-2">
									<span className="w-1 h-1 rounded-full bg-white/40 mt-2" /> Objective — what success looks like
								</li>
								<li className="flex gap-2">
									<span className="w-1 h-1 rounded-full bg-white/40 mt-2" /> Timeline — any constraints or urgency
								</li>
							</ul>
							<div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/10" />
						</div>
						<div className="relative rounded-2xl p-10 bg-white/[0.04] border border-white/10 backdrop-blur-sm">
							<h3 className="text-xl font-semibold text-white tracking-tight mb-4">Response Approach</h3>
							<p className="text-white/55 text-sm leading-relaxed mb-5">
								I read every message. If it aligns with my focus areas (developer tooling, performance, UX systems, product strategy) I usually reply within 24 hours.
							</p>
							<div className="grid grid-cols-2 gap-4 text-[11px] text-white/55">
								<div className="p-3 rounded-lg bg-white/[0.05] border border-white/10">Thoughtful & direct</div>
								<div className="p-3 rounded-lg bg-white/[0.05] border border-white/10">No fluff responses</div>
								<div className="p-3 rounded-lg bg-white/[0.05] border border-white/10">Respectful critique</div>
								<div className="p-3 rounded-lg bg-white/[0.05] border border-white/10">Clear next steps</div>
							</div>
							<div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/10" />
						</div>
						<div className="relative rounded-2xl p-10 bg-white/[0.04] border border-white/10 backdrop-blur-sm">
							<h3 className="text-xl font-semibold text-white tracking-tight mb-4">Focus Areas</h3>
							<div className="flex flex-wrap gap-2 mb-5">
								{['Frontend Architecture', 'Design Systems', 'Developer Experience', 'API Design', 'Performance', 'Open Source', 'Tooling', 'Product Strategy'].map(
									(tag) => (
										<span
											key={tag}
											className="px-2.5 py-1 rounded-full text-[11px] bg-white/[0.05] text-white/60 border border-white/10 tracking-wide"
										>
											{tag}
										</span>
									)
								)}
							</div>
							<p className="text-white/55 text-[11px] leading-relaxed">
								If your message touches any of these domains it will likely get priority attention.
							</p>
							<div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/10" />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
