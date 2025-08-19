
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
    // Handle special cases first
    if (url.includes('avatars.githubusercontent.com/u/75042455')) return 'Zustand';
    if (url.includes('jwt-3.svg') || url.includes('jsonwebtokens')) return 'JWT';
    if (url.includes('turbo.build') || url.includes('turborepo') || url.includes('repo-hero-logo-dark.svg')) return 'Turbopack';
    if (url.includes('simpleicons.org/github')) return 'GitHub';
    if (url.includes('simpleicons.org/amazonaws') || url.includes('amazonwebservices')) return 'AWS';
    if (url.includes('simpleicons.org/prisma')) return 'Prisma';
    
    // Devicon CDN pattern
    const deviconMatch = url.match(/devicon\/icons\/([^/]+)\/([^\-.]+)-/);
    if (deviconMatch) {
      const slug = deviconMatch[1].toLowerCase();
      const nameMap: { [key: string]: string } = {
        typescript: "TypeScript",
        javascript: "JavaScript",
        react: "React",
        nextjs: "Next.js",
        html5: "HTML5",
        css3: "CSS3",
        tailwindcss: "Tailwind CSS",
        nodejs: "Node.js",
        express: "Express.js",
        mongodb: "MongoDB",
        postgresql: "PostgreSQL",
        docker: "Docker",
        git: "Git",
        github: "GitHub",
        vscode: "VS Code",
        python: "Python",
        go: "Go",
        amazonwebservices: "AWS",
        figma: "Figma",
        linux: "Linux",
        redis: "Redis",
        redux: "Redux",
        supabase: "Supabase",
        prisma: "Prisma",
      };
      return nameMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
    }
    // Fallback for other patterns (e.g., simpleicons)
    const simpleiconsMatch = url.match(/simpleicons\.org\/([^/]+)/);
    if (simpleiconsMatch) {
      const slug = simpleiconsMatch[1];
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
        jwt: "JWT",
        turbopack: "Turbopack",
        zustand: "Zustand",
        sass: "Sass",
        materialui: "Material UI",
      };
      return nameMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
    }
    return "Technology";
  }, []);

  const createSpherePositions = useCallback((count: number, radius = 150) => {
    const positions = []
    // Fibonacci sphere algorithm for even distribution
    const phi = Math.PI * (3 - Math.sqrt(5)) // Golden angle in radians

    for (let i = 0; i < count; i++) {
      // Get y (latitude)
      const y = 1 - (i / (count - 1)) * 2 // From 1 to -1
      
      // Calculate radius at this latitude
      const radiusAtY = Math.sqrt(1 - y * y) * radius
      
      // Get theta (longitude) from golden angle increment
      const theta = phi * i
      
      // Convert to cartesian coordinates
      const x = Math.cos(theta) * radiusAtY
      const z = Math.sin(theta) * radiusAtY

      positions.push({
        x: x,
        y: y * radius,
        z: z,
        delay: i * 0.05,
        scale: 1, // No random scaling for better uniformity
      })
    }
    return positions
  }, [])

  const positions = createSpherePositions(Math.min(images.length, 24))

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
          {images.slice(0, 24).map((imageUrl, index) => {
            const position = positions[index];
            if (!position) return null;

            const isHovered = hoveredIndex === index;
            const baseTransform = `translate3d(${position.x}px, ${position.y}px, ${position.z}px) scale(${position.scale})`;

            return (
              <div
                key={index}
                className={`absolute w-12 h-12 flex items-center justify-center cursor-pointer`}
                style={{
                  transform: baseTransform,
                  animationDelay: `${position.delay}s`,
                  opacity: isLoaded ? 1 : 0,
                  willChange: "transform",
                  zIndex: isHovered ? 10 : "auto",
                }}
                onMouseEnter={() => handleMouseEnter(index, imageUrl)}
                onMouseLeave={handleMouseLeave}
              >
                {!imageErrors.has(index) ? (
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src={imageUrl || "/placeholder.svg"}
                      alt={`tech-${index}`}
                      className="w-8 h-8 opacity-90 hover:opacity-100"
                      onError={() => handleImageError(index)}
                      style={{
                        filter: "drop-shadow(0 0 8px rgba(255,255,255,0.15))",
                        backfaceVisibility: "hidden",
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center text-xs text-white/60">
                    <span className="text-white/40">?</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {hoveredTech && (
  <div
    className="fixed px-3 py-1 text-sm font-medium bg-black/80 text-white rounded-md pointer-events-none"
    style={{
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -120px)",
      zIndex: 50,
      transition: "opacity 0.2s ease-in-out",
    }}
  >
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
