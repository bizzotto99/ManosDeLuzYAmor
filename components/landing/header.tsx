"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Sparkles, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Mi", href: "#sobre-mi" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      // Calcular altura real del header
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      
      // Detectar si es mobile (menos de 768px = breakpoint md de Tailwind)
      const isMobile = window.innerWidth < 768
      
      // Offset mayor en mobile para que quede más arriba
      const offset = isMobile ? 120 : 80
      const offsetPosition = elementPosition - headerHeight + offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Sparkles className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
            <span className="font-serif text-xl sm:text-2xl font-semibold text-foreground tracking-wide">
              Manos de Luz y Amor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/manos_deluzyamor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground"
              onClick={(e) => {
                e.preventDefault()
                handleSmoothScroll(e as any, '#contacto')
              }}
            >
              Contactar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border bg-background/95">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide py-2 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <Button 
                className="mt-2 bg-primary hover:bg-primary/80 text-primary-foreground"
                onClick={(e) => {
                  e.preventDefault()
                  handleSmoothScroll(e as any, '#contacto')
                }}
              >
                Reservar Sesion
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
