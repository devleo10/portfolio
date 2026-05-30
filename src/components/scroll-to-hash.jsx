'use client'
import { useEffect } from 'react'
import { scrollToSection } from '@/lib/utils'

export default function ScrollToHash() {
    useEffect(() => {
        const hash = window.location.hash.slice(1)
        if (hash) {
            setTimeout(() => scrollToSection(hash, { updateHash: false }), 100)
        }

        const handleClick = (e) => {
            const anchor = e.target.closest('a[href^="#"]')
            if (!anchor) return

            const hash = anchor.getAttribute('href').slice(1)
            if (!hash) return

            if (scrollToSection(hash)) {
                e.preventDefault()
            }
        }

        const handleHashChange = () => {
            const id = window.location.hash.slice(1)
            if (id) scrollToSection(id, { updateHash: false })
        }

        document.addEventListener('click', handleClick)
        window.addEventListener('hashchange', handleHashChange)
        return () => {
            document.removeEventListener('click', handleClick)
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [])

    return null
}
