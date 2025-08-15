"use client"

import React, { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  angle: number
  radius: number
  baseRadius: number
}

const SaltParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const centerRef = useRef({ x: 0, y: 0 })
  const timeRef = useRef(0)

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const createParticles = () => {
    const particles: Particle[] = []
  const particleCount = 600
    const center = centerRef.current
    const maxRadius = Math.min(dimensions.width, dimensions.height) * 0.3

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const radiusRandom = Math.pow(Math.random(), 1.5)
      const radius = radiusRandom * maxRadius

      const x = center.x + Math.cos(angle) * radius
      const y = center.y + Math.sin(angle) * radius

      const particle: Particle = {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.6 + 0.2,
        angle: angle,
        radius: radius,
        baseRadius: radius,
      }

      particles.push(particle)
    }

    particlesRef.current = particles
  }

  const updateParticles = () => {
    const mouse = mouseRef.current
    const center = centerRef.current
    const time = timeRef.current
    const maxRadius = Math.min(dimensions.width, dimensions.height) * 0.3

    particlesRef.current.forEach((particle, index) => {
      const dx = mouse.x - particle.x
      const dy = mouse.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 100) {
        const force = (100 - distance) / 100
        const angle = Math.atan2(dy, dx)
        const repelForce = 2

        particle.vx -= Math.cos(angle) * force * repelForce
        particle.vy -= Math.sin(angle) * force * repelForce
      }

      particle.vx += (Math.random() - 0.5) * 0.05
      particle.vy += (Math.random() - 0.5) * 0.05

      particle.vx += Math.sin(time * 0.002 + index * 0.1) * 0.01
      particle.vy += Math.cos(time * 0.003 + index * 0.15) * 0.01

      particle.vx += (Math.random() - 0.5) * 0.02
      particle.vy += (Math.random() - 0.5) * 0.02

      particle.vx *= 0.98
      particle.vy *= 0.98

      particle.x += particle.vx
      particle.y += particle.vy

      const centerDx = particle.x - center.x
      const centerDy = particle.y - center.y
      const centerDistance = Math.sqrt(centerDx * centerDx + centerDy * centerDy)

      if (centerDistance > maxRadius * 1.2) {
        particle.opacity *= 0.95
        if (particle.opacity < 0.1) {
          const newAngle = Math.random() * Math.PI * 2
          const newRadius = Math.pow(Math.random(), 1.5) * maxRadius
          particle.x = center.x + Math.cos(newAngle) * newRadius
          particle.y = center.y + Math.sin(newAngle) * newRadius
          particle.angle = newAngle
          particle.baseRadius = newRadius
          particle.opacity = Math.random() * 0.6 + 0.2
          particle.vx = (Math.random() - 0.5) * 0.2
          particle.vy = (Math.random() - 0.5) * 0.2
        }
      }

      particle.size = Math.random() * 0.8 + 0.2 + Math.sin(time * 0.01 + index * 0.1) * 0.1
    })

    timeRef.current += 1
  }

  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current.forEach((particle) => {
      ctx.save()

      ctx.globalAlpha = particle.opacity
      ctx.fillStyle = "#ffffff"

      ctx.beginPath()
      ctx.arc(particle.x, particle.y, Math.max(0.3, particle.size), 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    })
  }

  const animate = () => {
    updateParticles()
    draw()
    animationRef.current = window.requestAnimationFrame(animate)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  const handleResize = () => {
    const newDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    setDimensions(newDimensions)

    centerRef.current = {
      x: newDimensions.width / 2,
      y: newDimensions.height / 2,
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      createParticles()
      animate()
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions])

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

export default SaltParticles
