"use client"

import Link from "next/link"
import { Heart, Sparkles, Instagram } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre Mi" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      // Calcular altura real del header
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      // Offset reducido para que la sección quede mejor posicionada (más arriba)
      const offsetPosition = elementPosition - headerHeight + 80

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <Sparkles className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
            <span className="font-serif text-2xl font-semibold text-foreground">
              Manos de Luz y Amor
            </span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://www.instagram.com/manos_deluzyamor/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm">@manos_deluzyamor</span>
          </a>

          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> y luz divina
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              {new Date().getFullYear()} Manos de Luz y Amor. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
