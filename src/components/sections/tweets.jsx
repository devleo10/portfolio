'use client'

import React, { useEffect, useRef, useState } from 'react'
import { SiX } from 'react-icons/si'
import { RevealStagger, RevealItem } from '@/components/reveal'

function formatTweetDate(iso) {
    if (!iso) return ''

    const date = new Date(iso)
    if (Number.isNaN(date.getTime())) return ''

    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined,
    })
}

export default function Tweets() {
    const [data, setData] = useState(null)
    const hasFetched = useRef(false)

    useEffect(() => {
        if (hasFetched.current) return
        hasFetched.current = true

        fetch('/api/tweets')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch tweets')
                return res.json()
            })
            .then((payload) => {
                if (payload?.tweets?.length) {
                    setData(payload)
                }
            })
            .catch((err) => console.error('Tweets error:', err))
    }, [])

    if (!data?.tweets?.length) {
        return null
    }

    const profileUrl = `https://x.com/${data.handle}`

    return (
        <section className="mt-20" id="posts">
            <div className="mb-8 flex items-center justify-between gap-4">
                <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    On X
                </h2>
                <a
                    href={profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                    <SiX className="size-3.5" aria-hidden />
                    @{data.handle}
                </a>
            </div>

            <RevealStagger className="flex flex-col gap-8 sm:gap-10" stagger={0.05}>
                {data.tweets.map((tweet) => (
                    <RevealItem key={tweet.id}>
                        <article className="border-l-2 border-foreground/25 pl-5 transition-colors hover:border-foreground/45 dark:border-white/40 dark:hover:border-white/70">
                            <a
                                href={tweet.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block max-w-2xl font-mono text-[13px] leading-relaxed text-foreground/85 transition-colors hover:text-foreground sm:text-sm"
                            >
                                {tweet.text}
                            </a>
                            <p className="mt-3 font-mono text-[11px] tracking-wide text-muted-foreground sm:text-xs">
                                {formatTweetDate(tweet.createdAt)}
                                <span className="text-muted-foreground/50"> · </span>
                                <a
                                    href={tweet.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/50"
                                >
                                    View post
                                </a>
                            </p>
                        </article>
                    </RevealItem>
                ))}
            </RevealStagger>
        </section>
    )
}
