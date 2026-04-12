'use client'

import React from 'react'
import { Mail, ArrowUpRight } from 'lucide-react'
import { FiLinkedin } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

export default function Contact() {
    return (
        <section className="mt-20" id="contact">
            <h2 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Let&apos;s Work Together</h2>
            <div className="font-geist rounded-xl border border-border/50 bg-card/70 px-6 py-5 shadow-sm transition-all duration-300 hover:border-border hover:bg-accent/50 hover:shadow-md motion-reduce:transform-none sm:px-6 sm:py-6">
                <div className="mb-5">
                    <h3 className="mb-1.5 text-lg font-medium text-foreground">Get in Touch</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        Happy to chat — no pressure. If something here resonated, pick whatever channel you like; I read everything
                        and reply when I can.
                    </p>
                </div>
                <div className="space-y-3">
                    <a
                        href="https://github.com/devleo10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 px-4 py-2.5 transition-all duration-200 ease-out hover:border-border hover:bg-accent/60 active:scale-[0.99] sm:py-3"
                    >
                        <div className="text-muted-foreground transition-colors group-hover:text-foreground">
                            <FaGithub className="size-4.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="mb-0.5 text-xs text-foreground/80 sm:text-sm">GitHub</p>
                            <p className="text-[10px] text-muted-foreground/60 sm:text-xs">Repos, contributions &amp; open source</p>
                        </div>
                        <ArrowUpRight className="size-3.5 text-muted-foreground/50 transition-colors group-hover:text-muted-foreground" />
                    </a>

                    <a
                        href="mailto:mehbubwork@gmail.com"
                        className="group flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 px-4 py-2.5 transition-all duration-200 ease-out hover:border-border hover:bg-accent/50 sm:py-3"
                    >
                        <div className="text-muted-foreground transition-colors group-hover:text-foreground">
                            <Mail className="size-4.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="mb-0.5 truncate text-xs text-foreground/80 sm:text-sm">mehbubwork@gmail.com</p>
                            <p className="text-[10px] text-muted-foreground/60 sm:text-xs">Direct email</p>
                        </div>
                        <ArrowUpRight className="size-3.5 text-muted-foreground/50 transition-colors group-hover:text-muted-foreground" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/leoxakash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 px-4 py-2.5 transition-all duration-200 ease-out hover:border-border hover:bg-accent/50 sm:py-3"
                    >
                        <div className="text-muted-foreground transition-colors group-hover:text-foreground">
                            <FiLinkedin className="size-4.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="mb-0.5 text-xs text-foreground/80 sm:text-sm">Connect on LinkedIn</p>
                            <p className="text-[10px] text-muted-foreground/60 sm:text-xs">Updates &amp; professional background</p>
                        </div>
                        <ArrowUpRight className="size-3.5 text-muted-foreground/50 transition-colors group-hover:text-muted-foreground" />
                    </a>
                </div>
                <div className="mt-5 border-t border-border/50 pt-4">
                    <p className="text-[10px] text-muted-foreground/60">I usually reply within a day when possible.</p>
                </div>
            </div>
        </section>
    )
}
