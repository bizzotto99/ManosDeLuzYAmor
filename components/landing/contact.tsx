import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Sparkles, Heart, Instagram } from "lucide-react"
import Image from "next/image"

export function Contact() {
  return (
    <section id="contacto" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/energy-particles.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Contacto</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            Comienza tu camino de <span className="text-primary">sanacion</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estoy aqui para acompanarte en tu proceso de transformacion. Contactame
            y juntos iniciaremos tu viaje hacia el bienestar.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* WhatsApp Card */}
          <Card className="border-border bg-card/50 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground mb-3">
                WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Escribeme directamente para consultas y agendar tu sesion. Respondo en menos de 24 horas.
              </p>
              <Button 
                asChild
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <a 
                  href="https://wa.me/TUNUMERO?text=Hola,%20me%20gustaria%20agendar%20una%20sesion%20de%20sanacion" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar por WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Instagram Link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/manos_deluzyamor/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all"
          >
            <Instagram className="w-6 h-6 text-primary" />
            <span className="text-foreground">@manos_deluzyamor</span>
          </a>
        </div>

        {/* Call to action */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
            <Heart className="w-6 h-6 text-primary animate-pulse" />
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">La sanacion te espera.</span>{" "}
              Da el primer paso hacia tu bienestar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
