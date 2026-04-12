'use client'

import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { ExternalLink } from 'lucide-react'
import { RevealStagger, RevealItem } from '@/components/reveal'

export default function Projects() {
    const projects = [
        {
            title: 'Clinkr',
            subtitle: 'Modern link-in-bio SaaS',
            link: 'https://clinkr.live',
            github: 'https://github.com/devleo10/clinkr',
            description:
                'Link-in-bio SaaS with personalized pages, link management, and real-time analytics dashboards. Custom short codes and slugs, QR generation with expiration, and analytics (device, browser, geolocation, profile views) stored securely. Supabase backend with RLS for scalable data access.',
            tags: ['React', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
        },
        {
            title: 'ClueFind',
            subtitle: 'Developer portfolio platform',
            link: 'https://cluefind.software',
            github: null,
            description:
                'Portfolio platform for skills, projects, and achievements: AI profile builder, skill endorsements, GitHub integration, and customizable public profiles. Responsive UI with Next.js, Tailwind, and Radix UI; Prisma and PostgreSQL on the backend; Docker and CI/CD for deployments.',
            tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Prisma', 'PostgreSQL'],
        },
        {
            title: 'MCP Search Server',
            subtitle: 'Model Context Protocol',
            link: null,
            github: 'https://github.com/devleo10/mcp-search-server',
            description:
                'Minimal Model Context Protocol server exposing search_file for Cursor, Claude Desktop, and a small CLI.',
            tags: ['TypeScript', 'Node.js', 'Express', 'MCP'],
        },
        {
            title: 'Hirebot',
            subtitle: 'Chrome extension',
            link: null,
            github: 'https://github.com/devleo10/hirebot',
            description:
                'Chrome extension to save and autofill Q&A for job applications — fewer repetitive forms, faster applications.',
            tags: ['JavaScript', 'Chrome Extension'],
        },
    ]

    return (
        <section className="mt-20" id="projects">
            <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Featured projects
            </h2>

            <RevealStagger className="flex flex-col gap-12 sm:gap-14" stagger={0.06}>
                {projects.map((project, idx) => (
                    <RevealItem key={project.title}>
                        <article className="border-l-2 border-foreground/25 pl-5 transition-colors hover:border-foreground/45 dark:border-white/40 dark:hover:border-white/70">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex min-w-0 items-start gap-2.5">
                                    {idx === 0 && (
                                        <span
                                            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.45)]"
                                            aria-hidden
                                        />
                                    )}
                                    <h3 className="min-w-0 font-mono text-sm leading-snug text-cyan-600 dark:text-cyan-400 sm:text-base">
                                        {project.link || project.github ? (
                                            <a
                                                href={project.link || project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-cyan-600 transition-colors hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
                                            >
                                                {project.title}
                                            </a>
                                        ) : (
                                            <span>{project.title}</span>
                                        )}
                                        <span className="text-cyan-600/85 dark:text-cyan-400/90">
                                            {' '}
                                            — {project.subtitle}
                                        </span>
                                    </h3>
                                </div>
                                <div className="flex shrink-0 items-center gap-1.5">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex rounded-sm p-1 text-muted-foreground transition-colors hover:text-foreground"
                                            aria-label={`${project.title} on GitHub`}
                                        >
                                            <FiGithub className="size-3.5" />
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex rounded-sm p-1 text-muted-foreground transition-colors hover:text-foreground"
                                            aria-label={`${project.title} live`}
                                        >
                                            <ExternalLink className="size-3.5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="mt-3 max-w-2xl font-mono text-[13px] leading-relaxed text-foreground/85 sm:text-sm">
                                {project.description}
                            </p>

                            <p className="mt-3 font-mono text-[11px] tracking-wide text-muted-foreground sm:text-xs">
                                {project.tags.join(' · ')}
                            </p>
                        </article>
                    </RevealItem>
                ))}
            </RevealStagger>

            <p className="mt-12 font-mono text-xs">
                <a
                    href="https://github.com/devleo10?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/50"
                >
                    Show all projects
                </a>
            </p>
        </section>
    )
}
