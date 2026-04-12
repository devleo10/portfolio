'use client'

import React, { useState, useEffect } from 'react'
import { IoMdQuote } from "react-icons/io";
import { motion } from 'motion/react'

export default function Quote() {
    const [quote, setQuote] = useState({
        text: "A journey of a thousand miles begins with a single step, but the right direction matters most.",
        author: "Lao Tzu"
    });

    const hasFetched = React.useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        fetch('/api/quote')
            .then(res => {
                if (!res.ok) throw new Error('API unavailable');
                return res.json();
            })
            .then(data => {
                if (data && data.quote) {
                    setQuote({
                        text: data.quote,
                        author: data.author
                    });
                }
            })
            .catch(err => {
                console.error("Error fetching quote:", err)
            });
    }, []);

    return (
        <section className="mt-20">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-start gap-3 rounded-lg border border-border/40 bg-muted/40 p-4 shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:border-border/70 hover:bg-muted/55"
            >
                <IoMdQuote className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:scale-110" />
                <div className="min-w-0">
                    <p className="text-sm leading-relaxed text-foreground/85 transition-colors duration-300 group-hover:text-foreground">{quote.text}</p>
                    <p className="mt-1.5 text-xs text-muted-foreground/60">· {quote.author}</p>
                </div>
            </motion.div>
        </section>
    )
}
