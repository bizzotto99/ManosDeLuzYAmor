import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Star } from "lucide-react"
import Link from "next/link"
import { Particles } from "./particles"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with energy particles */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/energy-particles.jpg"
          alt=""
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Floating particles */}
      <Particles count={100} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Energia Divina</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-tight text-balance">
              Sanando con mis manos a traves de la{" "}
              <span className="text-primary">energia divina</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Desde el Amor, canalizo la energia que proviene de lo divino para
              armonizar tu ser, sanar tu espiritu y limpiar los espacios que habitas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground px-8"
              >
                <Link href="#contacto">Reservar Sesion</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/40 text-foreground hover:bg-primary/10 px-8 bg-transparent"
              >
                <Link href="#servicios">Conocer Servicios</Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                  >
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-foreground font-medium">+3 años sanando</p>
                <p className="text-sm text-muted-foreground">Transformando vidas con amor</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl animate-pulse" />
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                <Image
                  src="/images/logo.png"
                  alt="Sanadora Espiritual"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-card border border-primary/30 rounded-xl px-3 py-2 shadow-lg backdrop-blur-sm">
                <p className="text-xs text-muted-foreground">Sesiones</p>
                <p className="text-sm font-semibold text-primary">Presenciales y a Distancia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
