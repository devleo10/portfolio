import React from 'react'
import ColoredBadge from '@/components/colored-badge'
import { Mail } from 'lucide-react'
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

export default function About() {
    return (
        <main className='px-6 pb-12 pt-36 w-full max-w-3xl mx-auto'>
        <Reveal>
            <div className='text-2xl sm:text-3xl font-bold tracking-tight'>
                <h1>I build things that ship,</h1>
                <h1 className='text-foreground/50'>and stay useful after launch.</h1>
            </div>

            <div className='mt-6 flex flex-col gap-6 text-muted-foreground'>
                <p>
                    I&apos;m Mehbub — based in Kolkata — a full-stack engineer who likes shipping products that stay maintainable: TypeScript and React on the front, Node and PostgreSQL on the back, Redis and AWS (including RDS and ElastiCache) when things need to scale. I care about the interface too—flows that stay understandable when the system is under stress.
                </p>

                <p>
                    I&apos;m <ColoredBadge text="Curious" className="bg-cyan-400/10 text-cyan-400" />, <ColoredBadge text="Pragmatic" className="text-blue-400 bg-blue-400/10" />, <ColoredBadge text="Obsessed with detail" className="text-purple-400 bg-purple-400/10" />, and a <ColoredBadge text="Solver" className="text-emerald-400 bg-emerald-400/10" /> when something breaks in production.
                </p>

                <p>
                    On the front it&apos;s Next.js, React, Tailwind, and ShadCN; on the back Node, Express, Flask, and PostgreSQL—with Bun, Turborepo, and Vercel in the mix when shipping fast. Outside of code, I like travel, good books, and the occasional over-engineered side project.
                </p>

                <h2 className='text-2xl font-bold mt-8 text-foreground'>Let&apos;s connect</h2>
                <p>
                    Whether you have something to build, a bug that refuses to die, or you just want to say hi — I&apos;d love to hear from you.
                </p>

                <div className='flex flex-wrap items-center gap-2 text-foreground'>
                    <a href="/#contact">
                        <Button variant="outline">
                            <Mail className='size-4 mr-1' /> Email
                        </Button>
                    </a>
                    <a href="https://linkedin.com/in/leoxakash" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">
                            <FaLinkedin className='size-4 mr-1' /> LinkedIn
                        </Button>
                    </a>
                    <a href="https://twitter.com/_devleo10" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">
                            <SiX className='size-4 mr-1' /> X
                        </Button>
                    </a>
                    <a href="https://github.com/devleo10" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">
                            <SiGithub className='size-4 mr-1' /> GitHub
                        </Button>
                    </a>
                </div>
            </div>
        </Reveal>
        </main>
    )
}
