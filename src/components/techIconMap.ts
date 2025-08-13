// Utility to map tech names to lucide-react icons
import { 
  Atom, // for React
  Cloud, // for Supabase
  Server, // for Node.js
  Zap, // for Edge Functions
  Rocket, // for Vite
  Globe, // for Next.js
  Database, // for MongoDB
  BarChart2, // for Chart.js
  Code2, // for TypeScript
  GitBranch, // for Git
  Container, // for Docker
  LucideIcon 
} from "lucide-react";

export const techIconMap: Record<string, LucideIcon> = {
  "React": Atom,
  "Supabase": Cloud,
  "Edge Functions": Zap,
  "Vite": Rocket,
  "Next.js": Globe,
  "Node.js": Server,
  "MongoDB": Database,
  "Chart.js": BarChart2,
  "TypeScript": Code2,
  "Git": GitBranch,
  "Docker": Container,
  "Go": Code2,
  "JavaScript": Code2,
  "Python": Code2,
};
