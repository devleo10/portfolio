'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function KeyboardHint() {
  const [modKey, setModKey] = useState('Ctrl')
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    setModKey(/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent) ? '⌘' : 'Ctrl')
  }, [])

  useEffect(() => {
    if (!isHome) return
    const onKey = (e) => {
      if (!(e.key === 'k' || e.key === 'K')) return
      if (!(e.metaKey || e.ctrlKey)) return
      if (e.altKey) return
      e.preventDefault()
      const section = document.getElementById('contact')
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isHome])

  if (!isHome) return null

  return (
    <div
      className="pointer-events-none fixed bottom-4 right-4 z-50 hidden select-none sm:block"
      aria-hidden
    >
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-border/50 bg-background/75 px-3 py-1.5 text-[10px] text-muted-foreground shadow-sm backdrop-blur-md transition-colors hover:border-border hover:bg-background/90">
        <span className="hidden md:inline">Contact</span>
        <kbd className="inline-flex items-center gap-0.5 rounded border border-border/80 bg-muted/80 px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground tabular-nums">
          <span>{modKey}</span>
          <span className="opacity-70">K</span>
        </kbd>
      </div>
    </div>
  )
}
