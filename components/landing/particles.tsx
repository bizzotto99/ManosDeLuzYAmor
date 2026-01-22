"use client"

import React from "react"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
  type: "float" | "rise" | "drift" | "sparkle"
}

export function Particles({ count = 80 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []
    const types: Particle["type"][] = ["float", "rise", "drift", "sparkle"]
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.2,
        type: types[Math.floor(Math.random() * types.length)],
      })
    }
    setParticles(newParticles)
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: var(--opacity);
          }
          25% {
            transform: translate(20px, -30px) scale(1.2);
            opacity: calc(var(--opacity) * 1.5);
          }
          50% {
            transform: translate(-15px, -60px) scale(0.8);
            opacity: var(--opacity);
          }
          75% {
            transform: translate(25px, -30px) scale(1.1);
            opacity: calc(var(--opacity) * 1.3);
          }
        }
        
        @keyframes rise {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--opacity);
          }
          90% {
            opacity: var(--opacity);
          }
          100% {
            transform: translateY(-100px) translateX(50px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(40px, 20px);
          }
          50% {
            transform: translate(-30px, 40px);
          }
          75% {
            transform: translate(-40px, -20px);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            transform: scale(1);
            opacity: var(--opacity);
            box-shadow: 0 0 2px var(--color);
          }
          50% {
            transform: scale(1.8);
            opacity: calc(var(--opacity) * 2);
            box-shadow: 0 0 10px var(--color), 0 0 20px var(--color);
          }
        }
        
        .particle-float {
          animation: float var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }
        
        .particle-rise {
          animation: rise var(--duration) linear infinite;
          animation-delay: var(--delay);
        }
        
        .particle-drift {
          animation: drift var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }
        
        .particle-sparkle {
          animation: sparkle var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }
      `}</style>
      
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full particle-${particle.type}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.type === "sparkle" 
              ? "rgba(167, 139, 250, 0.8)" 
              : "rgba(167, 139, 250, 0.5)",
            "--duration": `${particle.duration}s`,
            "--delay": `${particle.delay}s`,
            "--opacity": particle.opacity,
            "--color": "rgba(167, 139, 250, 0.8)",
          } as React.CSSProperties}
        />
      ))}
      
      {/* Larger glowing orbs */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full bg-primary/20 blur-xl particle-float"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: `${30 + i * 5}px`,
            height: `${30 + i * 5}px`,
            "--duration": `${8 + i * 2}s`,
            "--delay": `${i * 0.5}s`,
            "--opacity": 0.3,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
