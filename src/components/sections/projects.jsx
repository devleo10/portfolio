'use client'

import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { Globe } from 'lucide-react'
import { FiGithub } from "react-icons/fi"
import { RevealStagger, RevealItem } from '@/components/reveal'

export default function Projects() {
    const projects = [
        {
            title: "Clinkr",
            link: "https://clinkr.live",
            github: "https://github.com/devleo10/clinkr",
            image: "/projects/clinkr.png",
            description: "Modern link-in-bio SaaS with personalized pages, link management, real-time analytics, short links with custom slugs, and QR generation.",
            tech: [
                { name: "React", icon: "/icons/react.svg" },
                { name: "Supabase", icon: "/icons/supabase.svg" },
                { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
            ]
        },
        {
            title: "ClueFind",
            link: "https://cluefind.software",
            image: "/projects/cluefind.png",
            description: "Developer portfolio platform with AI-assisted profiles, skill endorsements, GitHub integration, and customizable public profiles.",
            tech: [
                { name: "Next.js", icon: "/icons/nextjs.svg", invertDark: true },
                { name: "React", icon: "/icons/react.svg" },
                { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
                { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
            ]
        },
        {
            title: "MCP Search Server",
            github: "https://github.com/devleo10/mcp-search-server",
            image: "/projects/mcp-search.png",
            description: "A minimal Model Context Protocol server exposing search_file for Cursor, Claude Desktop, and a small CLI.",
            tech: [
                { name: "TypeScript", icon: "/icons/typescript.svg" },
                { name: "Node.js", icon: "/icons/nodejs.svg" },
                { name: "Express", icon: "/icons/express.svg", invertDark: true },
            ]
        },
        {
            title: "Hirebot",
            github: "https://github.com/devleo10/hirebot",
            image: "/projects/hirebot.png",
            description: "Chrome extension to save and autofill Q&A for job applications — fewer repetitive forms, faster applications.",
            tech: [
                { name: "JavaScript", icon: "/icons/javascript.svg" },
            ]
        },
    ]

    return (
        <section className="mt-20" id="projects">
            <h2 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Featured Projects</h2>
            <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.08}>
                {projects.map((project, idx) => (
                    <RevealItem key={idx}>
                        <div className="flex h-full flex-col group font-geist rounded-xl bg-card/70 border border-border/50 shadow-sm hover:-translate-y-1 hover:border-border hover:bg-accent/40 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none ease-out transition-all duration-300">
                            <div className="relative w-full h-40 sm:h-50 overflow-hidden rounded-t-xl bg-muted/50 shrink-0">
                                <img
                                    src={project.image}
                                    alt={`${project.title} — preview`}
                                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                            <div className="flex flex-col flex-1 px-4 sm:px-6 py-4 sm:py-5">
                                <div className="flex justify-between items-start mb-3 sm:mb-3.5">
                                    <h3 className="text-base sm:text-lg font-medium text-foreground transition-colors group-hover:text-foreground">{project.title}</h3>
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-md p-1 text-muted-foreground transition-all hover:scale-110 hover:text-foreground active:scale-95"
                                                href={project.github}
                                                aria-label={`${project.title} on GitHub`}
                                            >
                                                <FiGithub className='size-5' />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-md p-1 text-muted-foreground transition-all hover:scale-110 hover:text-foreground active:scale-95"
                                                href={project.link}
                                                aria-label={`${project.title} live site`}
                                            >
                                                <Globe className='size-5' />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className="text-foreground/70 text-sm leading-relaxed mb-6">{project.description}</p>
                                <div className="flex flex-wrap gap-3 mt-auto items-center">
                                    {project.tech.map((t, tIdx) => (
                                        <Tooltip key={tIdx}>
                                            <TooltipTrigger asChild>
                                                <img
                                                    src={t.icon}
                                                    alt={t.name}
                                                    className={`w-6 h-6 object-contain cursor-pointer transition-transform duration-200 hover:scale-125 hover:rotate-3 motion-reduce:hover:rotate-0 ${t.invertDark ? 'dark:invert' : ''}`}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent side="top" sideOffset={6}>
                                                {t.name}
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </RevealItem>
                ))}
            </RevealStagger>
        </section>
    )
}
