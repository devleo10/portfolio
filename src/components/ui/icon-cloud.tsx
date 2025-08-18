
import { useRef, useEffect, useState, useCallback } from "react"

export interface IconCloudProps {
  images: string[]
}

export function IconCloud({ images }: IconCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getTechName = useCallback((url: string) => {
    const match = url.match(/simpleicons\.org\/([^/]+)/)
    if (match) {
      const slug = match[1]
      const nameMap: { [key: string]: string } = {
        typescript: "TypeScript",
        javascript: "JavaScript",
        cplusplus: "C++",
        openjdk: "Java",
        go: "Go",
        react: "React",
        nextdotjs: "Next.js",
        html5: "HTML5",
        css: "CSS3",
        tailwindcss: "Tailwind CSS",
        nodedotjs: "Node.js",
        express: "Express.js",
        mongodb: "MongoDB",
        postgresql: "PostgreSQL",
        prisma: "Prisma",
        docker: "Docker",
        git: "Git",
        postman: "Postman",
        vercel: "Vercel",
        render: "Render",
      }
      return nameMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1)
    }
    return "Technology"
  }, [])

  const createSpherePositions = useCallback((count: number, radius = 180) => {
    const positions = []
    const goldenAngle = Math.PI * (3 - Math.sqrt(5))

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const radiusAtY = Math.sqrt(1 - y * y) * radius
      const theta = goldenAngle * i

      const x = Math.cos(theta) * radiusAtY
      const z = Math.sin(theta) * radiusAtY

      positions.push({
        x: x,
        y: y * radius,
        z: z,
        delay: i * 0.05,
        scale: 0.8 + Math.random() * 0.4,
      })
    }
    return positions
  }, [])

  const positions = createSpherePositions(Math.min(images.length, 20))

  const handleImageError = useCallback((index: number) => {
    setImageErrors((prev) => new Set(prev).add(index))
  }, [])

  const handleMouseEnter = useCallback(
    (index: number, imageUrl: string) => {
      setHoveredTech(getTechName(imageUrl))
      setHoveredIndex(index)
    },
    [getTechName],
  )

  const handleMouseLeave = useCallback(() => {
    setHoveredTech(null)
    setHoveredIndex(null)
  }, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1200px",
        }}
      >
        <div
          className="relative"
          style={{
            transformStyle: "preserve-3d",
            animation: "smoothRotate 30s linear infinite",
          }}
        >
          {images.slice(0, 20).map((imageUrl, index) => {
            const position = positions[index]
            if (!position) return null

            const isHovered = hoveredIndex === index
            const baseTransform = `translate3d(${position.x}px, ${position.y}px, ${position.z}px) scale(${position.scale})`
            const hoveredTransform = `translate3d(${position.x}px, ${position.y}px, ${position.z}px) scale(${position.scale * 1.3})`

            return (
              <div
                key={index}
                className={`absolute w-12 h-12 flex items-center justify-center cursor-pointer transition-transform duration-200 ease-out ${
                  isHovered ? "z-10" : ""
                }`}
                style={{
                  transform: isHovered ? hoveredTransform : baseTransform,
                  animationDelay: `${position.delay}s`,
                  opacity: isLoaded ? 1 : 0,
                  willChange: "transform",
                }}
                onMouseEnter={() => handleMouseEnter(index, imageUrl)}
                onMouseLeave={handleMouseLeave}
              >
                {!imageErrors.has(index) ? (
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={`tech-${index}`}
                    className="w-10 h-10 opacity-90 hover:opacity-100 transition-opacity duration-200 rounded-lg shadow-lg"
                    onError={() => handleImageError(index)}
                    style={{
                      filter: "grayscale(100%) contrast(1.2) brightness(1.1) drop-shadow(0 0 8px rgba(255,255,255,0.3))",
                    }}
                  />
                ) : (
                  <div className="w-10 h-10 bg-white/20 rounded-lg border border-white/30 flex items-center justify-center text-xs text-white/60 shadow-lg">
                    <span className="text-white/40">?</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {hoveredTech && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/20 transition-opacity duration-200">
          {hoveredTech}
        </div>
      )}

      <style>{`
        @keyframes smoothRotate {
          0% { 
            transform: rotateY(0deg) rotateX(0deg); 
          }
          25% { 
            transform: rotateY(90deg) rotateX(5deg); 
          }
          50% { 
            transform: rotateY(180deg) rotateX(0deg); 
          }
          75% { 
            transform: rotateY(270deg) rotateX(-5deg); 
          }
          100% { 
            transform: rotateY(360deg) rotateX(0deg); 
          }
        }
      `}</style>
    </div>
  )
}
