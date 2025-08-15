"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';

import AnimatedButton from './AnimatedButton';
import SaltParticles from './SaltParticles';

const names = ["DEVLEO", "MEHBUB"];
const ANIMATION_SPEED = 0.32; // seconds per letter (slower)
const HOLD_TIME = 1.7; // seconds to hold full name before erasing (slower)

const Hero: React.FC = () => {

  // Inject shine animation keyframes once on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('shine-move-keyframes')) {
      const style = document.createElement('style');
      style.id = 'shine-move-keyframes';
      style.innerHTML = `@keyframes shine-move { 0% { left: -60%; } 100% { left: 100%; } }`;
      document.head.appendChild(style);
    }
  }, []);


  const [nameIndex, setNameIndex] = useState(0);
  const [displayed, setDisplayed] = useState(0); // how many letters shown
  const [direction, setDirection] = useState<'in' | 'out'>('in');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (direction === 'in') {
      if (displayed < names[nameIndex].length) {
        timeout = setTimeout(() => setDisplayed(prev => prev + 1), ANIMATION_SPEED * 1000);
      } else {
        timeout = setTimeout(() => setDirection('out'), HOLD_TIME * 1000);
      }
    } else {
      if (displayed > 0) {
        timeout = setTimeout(() => setDisplayed(prev => prev - 1), ANIMATION_SPEED * 1000);
      } else {
        timeout = setTimeout(() => {
          setNameIndex(prev => (prev + 1) % names.length);
          setDirection('in');
        }, 600);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, direction, nameIndex]);

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Free-flowing salt particles background */}
      <SaltParticles />
      {/* Subtle monochrome atmospheric mist */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 100%, rgba(255,255,255,0.10) 0%, transparent 60%),
            radial-gradient(circle at 30% 0%, rgba(255,255,255,0.05) 0%, transparent 70%),
            radial-gradient(circle at 80% 40%, rgba(255,255,255,0.06) 0%, transparent 75%)
          `,
        }}
      />
      {/* Neutral soft layers */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 140% 100% at 50% 0%, rgba(255,255,255,0.08), transparent 55%),
            radial-gradient(ellipse 120% 80% at 80% 20%, rgba(255,255,255,0.05), transparent 55%),
            radial-gradient(ellipse 100% 60% at 20% 40%, rgba(255,255,255,0.04), transparent 55%)
          `
        }}
      />
      {/* Floating particles (white) */}
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
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
      {/* Curved glow simplified to white tints */}
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
            background: `radial-gradient(ellipse 300% 100% at 50% 100%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.02) 70%, transparent 100%)`,
            filter: 'blur(18px)'
          }}
        />
        <div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-[700px] h-16"
          style={{
            background: `radial-gradient(ellipse 100% 100% at 50% 100%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)`,
            filter: 'blur(28px)'
          }}
        />
        <div 
          className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-[360px] h-8"
          style={{
            background: `radial-gradient(ellipse 80% 100% at 50% 100%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.12) 60%, transparent 100%)`,
            filter: 'blur(14px)'
          }}
        />
      </div>
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-pixel font-normal text-white mb-6 leading-none tracking-tight">
              <span className="inline-block">
                {names[nameIndex].split('').map((char, i) => (
                  <motion.span
                    key={`${nameIndex}-${i}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: i < displayed ? 1 : 0, 
                      y: i < displayed ? 0 : 30 
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-2xl sm:text-3xl text-white/80 mb-10 font-light tracking-wide">
              FullStack Developer & a Weirdo
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <p className="text-lg text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
            I love what I do, I do what I love. Breaking and building things for fun.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="mailto:mehbubwork@gmail.com" style={{ textDecoration: 'none' }}>
              <AnimatedButton label="Contact Me" icon="mail" />
            </a>
            <a href="https://drive.google.com/file/d/1IoCJwRyoxIKsFKJCI0mSmrtz6KJNMmPN/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <AnimatedButton label="Resume" icon="resume" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
