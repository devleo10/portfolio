import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const NAV_SCROLL_OFFSET = 80

export function scrollToSection(id, { updateHash = true } = {}) {
  const el = document.getElementById(id)
  if (!el) return false

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })

  if (updateHash) {
    history.pushState(null, '', `#${id}`)
  }

  return true
}
