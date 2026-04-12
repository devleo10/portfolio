'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Code2, MapPin, Mail, Clock, Globe, User2, Phone } from 'lucide-react'
import { FileText } from 'lucide-react'
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import RelativeTime from '../relative-time'
import TechBadge from '../tech-badge'
import { Button } from '../ui/button';

const ease = [0.22, 1, 0.36, 1]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.065, delayChildren: 0.04 },
    },
}

const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.48, ease } },
}

export default function Hero() {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="will-change-[opacity,transform]"
        >
            <motion.div variants={item} className="md:mb-8 mb-6 flex flex-row items-start gap-3.5 md:gap-4">
                <motion.img
                    alt="Mehbub"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border border-border shrink-0 bg-muted ring-1 ring-border/40 shadow-sm"
                    src="https://github.com/devleo10.png"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 24 }}
                />
                <div className="flex flex-col md:gap-1 gap-0.5 flex-1">
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-col sm:flex-row">
                        <h1 className="text-2xl font-inter sm:text-3xl md:text-4xl font-semibold tracking-normal leading-tight">Mehbub</h1>
                        <div className="hidden md:flex items-center gap-1.5 px-2 py-1 rounded-full bg-muted/80 border border-border backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                            </span>
                            <span className="text-xs font-inter text-muted-foreground">Open to opportunities</span>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-lg">
                        Full-Stack Engineer
                    </p>
                </div>
            </motion.div>

            <motion.div variants={item} className="mb-5 md:mb-10">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-1.5">
                        <div className="flex items-center gap-2 md:gap-3 group/row">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-border bg-muted/50 md:h-[1.6rem] md:w-[1.6rem] transition-colors group-hover/row:border-border group-hover/row:bg-muted">
                                <Code2 className="w-3.5 h-3.5 text-muted-foreground transition-transform group-hover/row:scale-110" strokeWidth={1.5} />
                            </span>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <span className="text-xs text-muted-foreground md:text-sm">Software Development Engineer</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3 group/row">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-border bg-muted/50 md:h-[1.6rem] md:w-[1.6rem] transition-colors group-hover/row:border-border group-hover/row:bg-muted">
                                <MapPin className="w-3.5 h-3.5 text-muted-foreground transition-transform group-hover/row:scale-110" strokeWidth={1.5} />
                            </span>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <span className="text-xs text-muted-foreground md:text-sm">Kolkata, West Bengal</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3 group/row">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-border bg-muted/50 md:h-[1.6rem] md:w-[1.6rem] transition-colors group-hover/row:border-border group-hover/row:bg-muted">
                                <Mail className="w-3.5 h-3.5 text-muted-foreground transition-transform group-hover/row:scale-110" strokeWidth={1.5} />
                            </span>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <a href="mailto:mehbubwork@gmail.com" target="_blank" className="text-xs text-muted-foreground transition-all ease-in-out hover:text-foreground hover:underline md:text-sm">mehbubwork@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3 group/row">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-border bg-muted/50 md:h-[1.6rem] md:w-[1.6rem] transition-colors group-hover/row:border-border group-hover/row:bg-muted">
                                <Phone className="w-3.5 h-3.5 text-muted-foreground transition-transform group-hover/row:scale-110" strokeWidth={1.5} />
                            </span>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <a href="tel:+918617813516" className="text-xs text-muted-foreground transition-all ease-in-out hover:text-foreground hover:underline md:text-sm">+91 86178 13516</a>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pl-8 md:hidden">
                            <a href="https://github.com/devleo10" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground hover:underline">GitHub</a>
                            <span className="text-muted-foreground/40">·</span>
                            <a href="https://linkedin.com/in/leoxakash" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground hover:underline">LinkedIn</a>
                            <span className="text-muted-foreground/40">·</span>
                            <a href="https://devleo.in" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground hover:underline">Portfolio</a>
                        </div>
                    </div>

                    <div className="hidden space-y-1.5 md:block">
                        <div className="flex items-center gap-2 md:gap-3 group/row">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-border bg-muted/50 md:h-[1.6rem] md:w-[1.6rem] transition-colors group-hover/row:border-border group-hover/row:bg-muted">
                                <Clock className="w-3.5 h-3.5 text-muted-foreground transition-transform group-hover/row:scale-110" strokeWidth={1.5} />
                            </span>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <RelativeTime />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3 group/row">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-border bg-muted/50 md:h-[1.6rem] md:w-[1.6rem] transition-colors group-hover/row:border-border group-hover/row:bg-muted">
                                <Globe className="w-3.5 h-3.5 text-muted-foreground transition-transform group-hover/row:scale-110" strokeWidth={1.5} />
                            </span>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <a href="https://github.com/devleo10" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground transition-all ease-in-out hover:text-foreground hover:underline md:text-sm">GitHub</a>
                                <span className="text-muted-foreground/40">·</span>
                                <a href="https://linkedin.com/in/leoxakash" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground transition-all ease-in-out hover:text-foreground hover:underline md:text-sm">LinkedIn</a>
                                <span className="text-muted-foreground/40">·</span>
                                <a href="https://devleo.in" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground transition-all ease-in-out hover:text-foreground hover:underline md:text-sm">Portfolio</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3 group/row">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-border bg-muted/50 md:h-[1.6rem] md:w-[1.6rem] transition-colors group-hover/row:border-border group-hover/row:bg-muted">
                                <User2 className="w-3.5 h-3.5 text-muted-foreground transition-transform group-hover/row:scale-110" strokeWidth={1.5} />
                            </span>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <span className="text-xs text-muted-foreground md:text-sm">he/him</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div variants={item} className="mb-5 md:mb-8">
                <p className="text-sm leading-loose text-muted-foreground sm:text-[15px] sm:leading-[2.3]">
                    I build products end to end with{" "}
                    <TechBadge
                        href="https://www.typescriptlang.org/"
                        icon="/icons/typescript.svg"
                        className="bg-blue-500/10 text-blue-400"
                    >
                        TypeScript
                    </TechBadge>
                    ,{" "}
                    <TechBadge
                        href="https://react.dev/"
                        icon="/icons/react.svg"
                        className="bg-cyan-500/10 text-cyan-400"
                    >
                        React
                    </TechBadge>
                    ,{" "}
                    <TechBadge
                        href="https://nextjs.org/"
                        icon="/icons/nextjs.svg"
                        className="bg-primary/10 text-foreground"
                        darkInvert
                    >
                        Next.js
                    </TechBadge>
                    , and{" "}
                    <TechBadge
                        href="https://tailwindcss.com/"
                        icon="/icons/tailwindcss.svg"
                        className="bg-sky-500/10 text-sky-400"
                    >
                        Tailwind CSS
                    </TechBadge>
                    . On the backend I reach for{" "}
                    <TechBadge
                        href="https://nodejs.org/"
                        icon="/icons/nodejs.svg"
                        className="bg-green-500/10 text-green-400"
                    >
                        Node.js
                    </TechBadge>
                    ,{" "}
                    <TechBadge
                        href="https://www.python.org/"
                        icon="/icons/python.svg"
                        className="bg-amber-500/10 text-amber-400"
                    >
                        Python
                    </TechBadge>
                    ,{" "}
                    <TechBadge
                        href="https://www.postgresql.org/"
                        icon="/icons/postgresql.svg"
                        className="bg-slate-500/10 text-slate-300"
                    >
                        PostgreSQL
                    </TechBadge>
                    ,{" "}
                    <TechBadge
                        href="https://redis.io/"
                        className="bg-red-500/10 text-red-400"
                    >
                        Redis
                    </TechBadge>
                    ,{" "}
                    <TechBadge
                        href="https://www.prisma.io/"
                        className="bg-slate-500/10 text-slate-300"
                    >
                        Prisma
                    </TechBadge>
                    ,{" "}
                    <TechBadge
                        href="https://supabase.com/"
                        icon="/icons/supabase.svg"
                        className="bg-emerald-500/10 text-emerald-400"
                    >
                        Supabase
                    </TechBadge>
                    , and{" "}
                    <TechBadge
                        href="https://aws.amazon.com/"
                        className="bg-amber-500/10 text-amber-300"
                    >
                        AWS
                    </TechBadge>
                    {" "}
                    (SES, S3, RDS, ElastiCache). I design reliable backends—queues, webhooks, and clear APIs—and ship with{" "}
                    <TechBadge
                        href="https://www.docker.com/"
                        className="bg-sky-500/10 text-sky-300"
                    >
                        Docker
                    </TechBadge>
                    . I care about performance under load, observability, and UX that still makes sense when something breaks.
                </p>
            </motion.div>


            <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
                <div className="flex flex-wrap items-center gap-2">
                    <Button size="sm" asChild className="h-9 gap-2 transition-transform active:scale-[0.98]">
                        <a href="https://drive.google.com/file/d/1V6ME1BexiXDU0vp98yBKe6O0T7gblzWM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <FileText className="h-4 w-4" strokeWidth={1.5} />
                            <span className="text-[13px] font-light">Resume</span>
                        </a>
                    </Button>

                    <Button variant="outline" size="sm" asChild className="h-9 gap-2 transition-transform active:scale-[0.98]">
                        <a href="#contact">
                            <Mail className="h-4 w-4" strokeWidth={1.5} />
                            <span className="text-[13px] font-light">Contact</span>
                        </a>
                    </Button>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <div className="mx-1 hidden h-5 w-px bg-border sm:block" />

                    <Button variant="outline" size="icon" asChild className="h-9 w-9 transition-transform hover:-translate-y-0.5 active:scale-95">
                        <a href="https://linkedin.com/in/leoxakash" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin className="h-4 w-4" />
                        </a>
                    </Button>

                    <Button variant="outline" size="icon" asChild className="h-9 w-9 transition-transform hover:-translate-y-0.5 active:scale-95">
                        <a href="https://twitter.com/_devleo10" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                            <SiX className="h-4 w-4" />
                        </a>
                    </Button>

                    <Button variant="outline" size="icon" asChild className="h-9 w-9 transition-transform hover:-translate-y-0.5 active:scale-95">
                        <a href="https://github.com/devleo10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <SiGithub className="h-4 w-4" />
                        </a>
                    </Button>

                    <Button variant="outline" size="icon" asChild className="h-9 w-9 transition-transform hover:-translate-y-0.5 active:scale-95">
                        <a href="mailto:mehbubwork@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                            <Mail className="h-4 w-4" strokeWidth={1.5} />
                        </a>
                    </Button>
                </div>
            </motion.div>
        </motion.section>
    )
}
