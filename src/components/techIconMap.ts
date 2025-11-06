// Utility to map tech names to lucide-react icons
import { 
  Atom, // for React
  Cloud, // for Supabase
  Server, // for Node.js
  Zap, // for Edge Functions
  Rocket, // for Vite
  Globe, // for Next.js
  Database, // for MongoDB, PostgreSQL
  BarChart2, // for Chart.js
  Code2, // for TypeScript, JavaScript, Python, Go
  GitBranch, // for Git
  Container, // for Docker
  Sparkles, // for Tailwind CSS, Framer Motion
  Layers, // for Radix UI
  KeyRound, // for Prisma
  LucideIcon 
} from "lucide-react";

export const techIconMap: Record<string, LucideIcon> = {
  "React": Atom,
  "Supabase": Cloud,
  "Edge Functions": Zap,
  "Vite": Rocket,
  "Next.js": Globe,
  "Node.js": Server,
  "Express": Server,
  "MongoDB": Database,
  "PostgreSQL": Database,
  "Chart.js": BarChart2,
  "TypeScript": Code2,
  "JavaScript": Code2,
  "Git": GitBranch,
  "Docker": Container,
  "Go": Code2,
  "Python": Code2,
  "Tailwind CSS": Sparkles,
  "Framer Motion": Sparkles,
  "Radix UI": Layers,
  "Prisma": KeyRound,
};
