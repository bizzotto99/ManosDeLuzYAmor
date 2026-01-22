import Image from "next/image"
import { Sparkles } from "lucide-react"

const stats = [
  { value: "+3", label: "Años sanando" },
  { value: "100%", label: "Amor y dedicacion" },
]

export function About() {
  return (
    <section id="sobre-mi" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
              <Image
                src="/images/spiritual-aura.jpg"
                alt="Energia espiritual y sanacion"
                fill
                className="object-cover"
              />
            </div>
            
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Mi Historia</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
              Un don para <span className="text-primary">sanar</span> desde el amor
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Desde muy joven descubri mi don para canalizar energia a traves de mis manos. 
                Este regalo divino me ha permitido ayudar a cientos de personas a encontrar 
                alivio, paz y transformacion en sus vidas.
              </p>
              <p>
                Mi practica se basa en el amor incondicional y la conexion con lo divino. 
                Cada sesion es unica, adaptada a las necesidades especificas de cada persona, 
                siempre con respeto y confidencialidad.
              </p>
              <p>
                Creo firmemente que todos tenemos la capacidad de sanar. Mi rol es ser un 
                canal para que la energia del amor fluya y active tu propio poder de sanacion interior.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card/50 border border-border">
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
