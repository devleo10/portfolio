'use client'

import React from 'react'
import GithubCalendar from '../github-calendar'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import {
    SiRedis,
    SiDocker,
    SiPrisma,
    SiMongodb,
    SiBun,
    SiVercel,
    SiFlask,
    SiTurborepo,
    SiJavascript,
    SiPython,
    SiNodedotjs,
    SiReact,
    SiPostgresql,
    SiGithub,
} from 'react-icons/si'

const techStack = [
    { name: "TypeScript", src: "/icons/typescript.svg" },
    { name: "JavaScript", Icon: SiJavascript, iconClass: "text-[#F7DF1E]" },
    { name: "Python", Icon: SiPython, iconClass: "text-[#3776AB]" },
    { name: "C++", src: "/icons/cplusplus.svg" },
    { name: "Node.js", Icon: SiNodedotjs, iconClass: "text-[#339933]" },
    { name: "React", Icon: SiReact, iconClass: "text-[#61DAFB]" },
    { name: "Next.js", src: "/icons/nextjs.svg", invertDark: true },
    { name: "Tailwind CSS", src: "/icons/tailwindcss.svg" },
    { name: "Express.js", src: "/icons/express.svg", invertDark: true },
    { name: "Flask", Icon: SiFlask, iconClass: "text-[#000000] dark:text-[#ffffff]" },
    { name: "Redis", Icon: SiRedis, iconClass: "text-[#DC382D]" },
    { name: "Docker", Icon: SiDocker, iconClass: "text-[#2496ED]" },
    { name: "Prisma", Icon: SiPrisma, iconClass: "text-[#2D3748] dark:text-[#5B6FC7]" },
    { name: "PostgreSQL", Icon: SiPostgresql, iconClass: "text-[#4169E1]" },
    { name: "MongoDB", Icon: SiMongodb, iconClass: "text-[#47A248]" },
    { name: "Supabase", src: "/icons/supabase.svg" },
    { name: "AWS", src: "/icons/aws.svg" },
    { name: "Bun", Icon: SiBun, iconClass: "text-[#000000] dark:text-[#ffffff]" },
    { name: "Turborepo", Icon: SiTurborepo, iconClass: "text-[#EF4444]" },
    { name: "Vercel", Icon: SiVercel, iconClass: "text-[#000000] dark:text-[#ffffff]" },
    { name: "Git", src: "/icons/git.svg" },
    { name: "GitHub", Icon: SiGithub, iconClass: "text-[#181717] dark:text-[#ffffff]" },
    { name: "Figma", src: "/icons/figma.svg" },
    { name: "Postman", src: "/icons/postman.svg" },
    { name: "Shadcn UI", src: "/icons/shadcnui.svg", invertDark: true },
]

function TechIcon({ tech }) {
    const iconClass = `h-6 w-6 transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-0.5 sm:h-8 sm:w-8 motion-reduce:group-hover:translate-y-0 ${tech.iconClass ?? ''}`

    if (tech.Icon) {
        const Icon = tech.Icon
        return <Icon aria-hidden className={iconClass} />
    }

    return (
        <img
            src={tech.src}
            alt=""
            className={`h-6 w-6 object-contain transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-0.5 sm:h-8 sm:w-8 motion-reduce:group-hover:translate-y-0 ${tech.invertDark ? 'dark:invert' : ''}`}
        />
    )
}

export default function Activity() {
    return (
        <section>
            <div className='mt-12'>
                <GithubCalendar username="devleo10" />
            </div>

            <div className="mt-10">
                <h2 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Tech Stack</h2>
                <div className="flex flex-wrap items-center gap-3 opacity-95 sm:gap-4">
                    {techStack.map((tech) => (
                        <Tooltip key={tech.name}>
                            <TooltipTrigger asChild>
                                <button
                                    type="button"
                                    className="group inline-flex cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent p-0"
                                    aria-label={tech.name}
                                >
                                    <TechIcon tech={tech} />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="top" sideOffset={6}>
                                {tech.name}
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </section>
    )
}
