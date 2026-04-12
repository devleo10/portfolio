import React from 'react'

export default function Experience() {
    const experiences = [
        {
            title: 'Software Development Engineer',
            company: 'House of EdTech',
            location: 'Kolkata, India',
            date: 'Oct 2025 – Present',
            description:
                'Platform and backend work: async job workers, subscription billing, real-time integrations, secure webhooks, and AWS/Turborepo/Bun tooling.',
            bullets: [
                'Wrote async job workers with BullMQ + Redis using lease-lock heartbeat coordination and exponential backoff, bringing duplicate job executions to zero across restarts.',
                'Shipped a subscription state machine covering coupon-reserved renewals, scheduled plan changes, and cancellation-at-period-end, cutting billing escalations by ~40%.',
                'Wired up real-time market data via Fyers WebSocket with protobuf decoding and auto-reconnect, tracking 200+ symbols live and closing trade calls within <100ms of a target/stop-loss hit.',
                'Added timing-safe HMAC verification and a DB-backed replay guard to webhook ingestion, eliminating replay-based double-charges from Digio and KRA in production.',
                'Built coupon dispatch over AWS SES and WhatsApp (WATI) with row-level locking and DB check constraints, hitting 97%+ delivery success and ruling out duplicate sends.',
                'Set up a Bun + Turborepo monorepo with branch-based CI/CD and blue/green container switching, cutting deployment time by ~50% over the old shell-script workflow.',
            ],
        },
        {
            title: 'Full-Stack Developer Intern',
            company: 'House of EdTech',
            location: 'Kolkata, India',
            date: 'Jul 2025 – Sep 2025',
            description:
                'Greenfield product: Next.js UI, eKYC/e-sign integrations, Node/PostgreSQL APIs, AWS ECS, and Telegram notifications.',
            bullets: [
                'Built a mutual fund platform from scratch using Next.js (TypeScript), Tailwind CSS, and ShadCN UI, delivering a modern and responsive user interface.',
                'Implemented smooth user onboarding, integrating eKYC and e-sign workflows with third-party vendors (CAMS, Digio), increasing user retention by 30%.',
                'Developed backend APIs using Node.js and PostgreSQL, ensuring secure and scalable data handling for portfolios, transactions, and fund search.',
                'Deployed the platform on AWS using ECS Fargate and S3 for storage, with a fully Dockerized deployment and automated scripts, improving deployment speed by 60%.',
                'Integrated a Telegram bot for automated notifications and user interactions, handling API rate-limiting and ensuring 99% uptime.',
            ],
        },
        {
            title: 'Project Maintainer',
            company: 'Apertre 2.0 (Open Source Program)',
            location: 'Remote',
            date: 'Feb 2024 – Apr 2024',
            description: 'Open-source program coordination and code review across multiple repositories.',
            bullets: [
                'Reviewed 60+ PRs and maintained project-wide coding standards across multiple repositories.',
                'Co-ordinated with contributors from diverse backgrounds, ensuring smooth collaboration in an asynchronous environment.',
            ],
        },
    ]

    return (
        <section className="mt-20">
            <h2 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Experience</h2>
            <div className="flex flex-col gap-4">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="group py-5 px-6 rounded-xl bg-card/70 border border-border/50 shadow-sm hover:-translate-y-0.5 hover:border-border hover:bg-accent/50 hover:shadow-md motion-reduce:transform-none transition-all duration-300 ease-out"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-transparent border border-border flex items-center justify-center overflow-hidden">
                                <span className="text-xs font-semibold text-muted-foreground">
                                    {exp.company === 'House of EdTech' ? 'HoE' : 'AP'}
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-sm sm:text-base font-medium text-foreground">{exp.title}</h3>
                                <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm flex-wrap">
                                    <span className="font-medium text-foreground/70">{exp.company}</span>
                                    {exp.location ? (
                                        <>
                                            <span className="text-muted-foreground/50">•</span>
                                            <span className="text-muted-foreground/60">{exp.location}</span>
                                        </>
                                    ) : null}
                                </div>
                            </div>
                            <span className="text-[10px] sm:text-xs text-muted-foreground/60 whitespace-nowrap shrink-0">
                                {exp.date}
                            </span>
                        </div>
                        {exp.description && (
                            <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed mb-3">{exp.description}</p>
                        )}
                        {exp.bullets && exp.bullets.length > 0 && (
                            <ul className="space-y-1.5">
                                {exp.bullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                                        <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                                        <span className="leading-relaxed">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
