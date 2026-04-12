import React from 'react'
import GithubCalendar from '../github-calendar'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { SiRedis, SiDocker, SiPrisma, SiMongodb, SiBun, SiVercel, SiFlask, SiTurborepo } from 'react-icons/si'

const techStack = [
    { name: "TypeScript", src: "/icons/typescript.svg" },
    { name: "JavaScript", src: "/icons/javascript.svg" },
    { name: "Python", src: "/icons/python.svg" },
    { name: "C++", src: "/icons/cplusplus.svg" },
    { name: "Node.js", src: "/icons/nodejs.svg" },
    { name: "React", src: "/icons/react.svg" },
    { name: "Next.js", src: "/icons/nextjs.svg", invertDark: true },
    { name: "Tailwind CSS", src: "/icons/tailwindcss.svg" },
    { name: "Express.js", src: "/icons/express.svg", invertDark: true },
    { name: "Flask", Icon: SiFlask, iconClass: "text-[#000000] dark:text-[#ffffff]" },
    { name: "Redis", Icon: SiRedis, iconClass: "text-[#DC382D]" },
    { name: "Docker", Icon: SiDocker, iconClass: "text-[#2496ED]" },
    { name: "Prisma", Icon: SiPrisma, iconClass: "text-[#2D3748] dark:text-[#5B6FC7]" },
    { name: "PostgreSQL", src: "/icons/postgresql.svg" },
    { name: "MongoDB", Icon: SiMongodb, iconClass: "text-[#47A248]" },
    { name: "Supabase", src: "/icons/supabase.svg" },
    { name: "AWS", src: "/icons/aws.svg" },
    { name: "Bun", Icon: SiBun, iconClass: "text-[#000000] dark:text-[#ffffff]" },
    { name: "Turborepo", Icon: SiTurborepo, iconClass: "text-[#EF4444]" },
    { name: "Vercel", Icon: SiVercel, iconClass: "text-[#000000] dark:text-[#ffffff]" },
    { name: "Git", src: "/icons/git.svg" },
    { name: "GitHub", src: "/icons/github.svg", invertDark: true },
    { name: "Figma", src: "/icons/figma.svg" },
    { name: "Postman", src: "/icons/postman.svg" },
    { name: "Shadcn UI", src: "/icons/shadcnui.svg", invertDark: true },
]

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
                                {tech.Icon ? (
                                    <tech.Icon
                                        aria-hidden
                                        className={`h-6 w-6 cursor-pointer transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 sm:h-8 sm:w-8 motion-reduce:hover:translate-y-0 ${tech.iconClass ?? ''}`}
                                    />
                                ) : (
                                    <img
                                        src={tech.src}
                                        alt=""
                                        className={`h-6 w-6 cursor-pointer object-contain transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 sm:h-8 sm:w-8 motion-reduce:hover:translate-y-0 ${tech.invertDark ? 'dark:invert' : ''}`}
                                    />
                                )}
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