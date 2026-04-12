'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './theme-toggle'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from './ui/button';
import { HiMenu } from "react-icons/hi";
import { HyperText } from "@/components/ui/hyper-text"
import { SiGithub, SiX } from "react-icons/si";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#projects", label: "Projects" },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div
            className={`h-16 fixed left-0 top-0 w-full z-50 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ${
                scrolled
                    ? 'border-b border-border/50 bg-background/75 shadow-[0_1px_0_0_rgba(0,0,0,0.03)] backdrop-blur-md dark:bg-background/70 dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)]'
                    : 'border-b border-transparent bg-background/0'
            }`}
        >
            <nav className='w-full max-w-3xl mx-auto px-6 flex items-center h-full'>
                <Link
                    className="text-sm font-medium tracking-tight flex items-center gap-0.5 transition-opacity hover:opacity-90"
                    href="/"
                >
                    <span className="text-muted-foreground">~/</span>
                    <HyperText className={"text-sm !py-0"}>devleo10</HyperText>
                </Link>

                <div className="flex items-center gap-1 sm:gap-2 ml-auto">
                    <div className="hidden sm:flex items-center gap-1 pr-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" asChild>
                            <a href="https://github.com/devleo10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <SiGithub className="size-4" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" asChild>
                            <a href="https://twitter.com/_devleo10" target="_blank" rel="noopener noreferrer" aria-label="X">
                                <SiX className="size-4" />
                            </a>
                        </Button>
                    </div>

                    <div className="hidden md:flex items-center gap-6 pr-2">
                        {links.map(({ href, label }) => (
                            <NavLink key={href} href={href}>{label}</NavLink>
                        ))}
                    </div>

                    <ThemeToggle />

                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="secondary" size="icon">
                                    <HiMenu className="size-6" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-40 z-[60]">
                                {links.map(({ href, label }) => (
                                    <DropdownMenuItem key={href} asChild>
                                        <Link href={href} className="w-full cursor-pointer">
                                            {label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const NavLink = ({ href, children }) => {
    return (
        <Link className="relative text-sm transition-colors after:content-[''] after:absolute after:w-0 after:-bottom-0.5 after:left-0 after:h-px after:bg-current after:transition-[width] after:duration-300 after:ease-out hover:after:w-full text-muted-foreground hover:text-foreground" href={href}>
            {children}
        </Link>
    )
}
