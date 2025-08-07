"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Midnight Mist Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
            radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
            radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
          `,
        }}
      />
      
      {/* Enhanced atmospheric layers */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 140% 100% at 50% 0%, rgba(59, 130, 246, 0.15), transparent 50%),
            radial-gradient(ellipse 120% 80% at 80% 20%, rgba(139, 92, 246, 0.1), transparent 50%),
            radial-gradient(ellipse 100% 60% at 20% 40%, rgba(16, 185, 129, 0.08), transparent 50%)
          `
        }}
      />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
      {/* Perfect Curved Glow Effect - Matching the reference exactly */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-0">
        <svg 
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Ultra-smooth glow filters */}
            <filter id="ultraGlow1" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="1" result="blur1"/>
              <feColorMatrix in="blur1" values="1 1 1 0 0  1 1 1 0 0  1 1 1 0 0  0 0 0 1 0"/>
            </filter>
            
            <filter id="ultraGlow2" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="3" result="blur2"/>
              <feColorMatrix in="blur2" values="1 1 1 0 0  1 1 1 0 0  1 1 1 0 0  0 0 0 0.9 0"/>
            </filter>
            
            <filter id="ultraGlow3" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="6" result="blur3"/>
              <feColorMatrix in="blur3" values="1 1 1 0 0  1 1 1 0 0  1 1 1 0 0  0 0 0 0.7 0"/>
            </filter>
            
            <filter id="ultraGlow4" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="12" result="blur4"/>
              <feColorMatrix in="blur4" values="1 1 1 0 0  1 1 1 0 0  1 1 1 0 0  0 0 0 0.5 0"/>
            </filter>
            
            <filter id="ultraGlow5" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="20" result="blur5"/>
              <feColorMatrix in="blur5" values="1 1 1 0 0  1 1 1 0 0  1 1 1 0 0  0 0 0 0.3 0"/>
            </filter>
            
            <filter id="ultraGlow6" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="35" result="blur6"/>
              <feColorMatrix in="blur6" values="1 1 1 0 0  1 1 1 0 0  1 1 1 0 0  0 0 0 0.2 0"/>
            </filter>
            
            <filter id="ultraGlow7" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="50" result="blur7"/>
              <feColorMatrix in="blur7" values="1 1 1 0 0  1 1 1 0 0  1 1 1 0 0  0 0 0 0.1 0"/>
            </filter>
          </defs>
          
          {/* Ultra-wide atmospheric glow */}
          <path 
            d="M0,192 Q720,40 1440,192" 
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="30"
            fill="none"
            filter="url(#ultraGlow7)"
          />
          
          {/* Very wide diffuse glow */}
          <path 
            d="M0,192 Q720,42 1440,192" 
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="24"
            fill="none"
            filter="url(#ultraGlow6)"
          />
          
          {/* Wide glow layer */}
          <path 
            d="M0,192 Q720,44 1440,192" 
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="18"
            fill="none"
            filter="url(#ultraGlow5)"
          />
          
          {/* Medium-wide glow */}
          <path 
            d="M0,192 Q720,46 1440,192" 
            stroke="rgba(255, 255, 255, 0.18)"
            strokeWidth="14"
            fill="none"
            filter="url(#ultraGlow4)"
          />
          
          {/* Medium glow */}
          <path 
            d="M0,192 Q720,48 1440,192" 
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="10"
            fill="none"
            filter="url(#ultraGlow3)"
          />
          
          {/* Small glow */}
          <path 
            d="M0,192 Q720,50 1440,192" 
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="6"
            fill="none"
            filter="url(#ultraGlow2)"
          />
          
          {/* Inner glow */}
          <path 
            d="M0,192 Q720,52 1440,192" 
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="3"
            fill="none"
            filter="url(#ultraGlow1)"
          />
          
          {/* Bright core */}
          <path 
            d="M0,192 Q720,54 1440,192" 
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="1.5"
            fill="none"
          />
          
          {/* Ultra-bright center line */}
          <path 
            d="M0,192 Q720,54 1440,192" 
            stroke="rgba(255, 255, 255, 1)"
            strokeWidth="0.8"
            fill="none"
          />
          
          {/* Perfect bright core */}
          <path 
            d="M0,192 Q720,54 1440,192" 
            stroke="rgba(255, 255, 255, 1)"
            strokeWidth="0.3"
            fill="none"
          />
        </svg>
        
        {/* Additional CSS glow layers for perfect smoothness */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: `
              radial-gradient(ellipse 300% 100% at 50% 100%, 
                rgba(255, 255, 255, 0.08) 0%, 
                rgba(255, 255, 255, 0.04) 40%, 
                rgba(255, 255, 255, 0.02) 70%, 
                transparent 100%
              )
            `,
            filter: 'blur(20px)'
          }}
        />
        
        {/* Peak glow enhancement */}
        <div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-[800px] h-16"
          style={{
            background: `
              radial-gradient(ellipse 100% 100% at 50% 100%, 
                rgba(255, 255, 255, 0.15) 0%, 
                rgba(255, 255, 255, 0.08) 50%, 
                transparent 100%
              )
            `,
            filter: 'blur(30px)'
          }}
        />
        
        {/* Sharp peak highlight */}
        <div 
          className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-[400px] h-8"
          style={{
            background: `
              radial-gradient(ellipse 80% 100% at 50% 100%, 
                rgba(255, 255, 255, 0.25) 0%, 
                rgba(255, 255, 255, 0.12) 60%, 
                transparent 100%
              )
            `,
            filter: 'blur(15px)'
          }}
        />
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-extrabold text-white mb-6 leading-tight">
              <motion.span 
                className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                devLeo
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-2xl sm:text-3xl text-gray-300 mb-12 font-light">
              Full-Stack Engineer & Digital Architect
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Crafting elegant, high-performance web applications with a passion for clean code and user-centric design.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button 
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Explore My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-2 backdrop-blur-sm"
            >
              <FileText className="w-5 h-5" />
              Resume
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
         
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
