import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Home } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Sparkles,
    title: "Armonizacion",
    description: "Equilibrio y alineacion de tus centros energeticos para restablecer el flujo natural de energia vital en tu cuerpo y espiritu.",
  },
  {
    icon: Heart,
    title: "Sanacion",
    description: "Canalizacion de energia divina a traves de mis manos para liberar bloqueos emocionales, fisicos y espirituales que te impiden avanzar.",
  },
  {
    icon: Home,
    title: "Limpieza Energetica en Hogares",
    description: "Purificacion de espacios para eliminar energias densas y crear un ambiente de paz, armonia y proteccion en tu hogar.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/healing-energy.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Mis Servicios</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            Caminos hacia tu <span className="text-primary">sanacion</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada sesion es un encuentro sagrado donde canalizo la energia del amor divino 
            para acompanarte en tu proceso de sanacion y transformacion.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 lg:gap-8">
          {/* First row - 2 cards */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 w-full">
            {services.slice(0, 2).map((service, index) => (
              <Card 
                key={index} 
                className="group border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Second row - 1 centered card */}
          <div className="w-full sm:w-1/2 sm:max-w-md">
            <Card 
              className="group border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Home className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground mb-4">
                  {services[2].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {services[2].description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
