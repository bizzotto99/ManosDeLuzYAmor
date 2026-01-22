import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, Sparkles } from "lucide-react"

const testimonials = [
  {
    content: "Despues de mi primera sesion senti una paz que no habia experimentado en años. La energia que canaliza es realmente transformadora.",
    author: "Maria Elena",
    location: "Cordoba, Argentina",
    rating: 5,
  },
  {
    content: "Las sesiones funcionan increiblemente bien. Pude sentir la energia sanadora desde el primer momento. Mi vida ha cambiado completamente.",
    author: "Carlos Alberto",
    location: "Buenos Aires, Argentina",
    rating: 5,
  },
  {
    content: "La limpieza energetica de mi hogar trajo una calma que toda mi familia puede sentir. El ambiente es completamente diferente ahora.",
    author: "Laura Patricia",
    location: "Buenos Aires, Argentina",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Testimonios</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            Voces de <span className="text-primary">transformacion</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Las palabras de quienes han experimentado el poder transformador de la energia divina.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {`"${testimonial.content}"`}
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-medium">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
