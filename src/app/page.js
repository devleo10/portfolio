import React from 'react'
import Hero from '@/components/sections/hero'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import Contact from '@/components/sections/contact'
import Quote from '@/components/sections/quote'
import Activity from '@/components/sections/activity'
import { Reveal } from '@/components/reveal'

export default function Index() {
  return (
    <main className='px-6 pb-12 pt-36 w-full max-w-3xl mx-auto'>
      <Hero />
      <Reveal delay={0.04}>
        <Activity />
      </Reveal>
      <Reveal delay={0.06}>
        <Experience />
      </Reveal>
      <Reveal delay={0.08}>
        <Projects />
      </Reveal>
      <Reveal delay={0.1}>
        <Contact />
      </Reveal>
      <Reveal delay={0.12}>
        <Quote />
      </Reveal>
    </main>
  )
}
