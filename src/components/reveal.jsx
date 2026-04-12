'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const ease = [0.22, 1, 0.36, 1]

/**
 * Scroll-triggered fade + slide up (viewport once).
 */
export function Reveal({ children, className, delay = 0, as = 'div' }) {
  const Tag = as === 'section' ? motion.section : motion.div
  return (
    <Tag
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px 0px' }}
      transition={{ duration: 0.5, ease, delay }}
      className={cn(className)}
    >
      {children}
    </Tag>
  )
}

/**
 * Staggered list children (e.g. project cards).
 */
export function RevealStagger({ children, className, stagger = 0.06 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px 0px' }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
