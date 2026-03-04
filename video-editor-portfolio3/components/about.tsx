import { Award, Users, Clock, Zap } from "lucide-react"

const highlights = [
  { icon: Award, label: "Premios", value: "5+" },
  { icon: Users, label: "Clientes Satisfechos", value: "30+" },
  { icon: Clock, label: "Horas de Contenido", value: "500+" },
  { icon: Zap, label: "Proyectos Completados", value: "50+" },
]

const tools = [
  "Adobe Premiere Pro",
  "DaVinci Resolve",
  "After Effects",
  "Final Cut Pro",
  "Audition",
]

export function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=600&h=700&fit=crop"
                alt="Editor de video trabajando"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 md:right-6 bg-card border border-border rounded-xl p-4 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                      {item.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <p className="text-primary text-sm font-medium mb-2 tracking-wide uppercase">Sobre Mí</p>
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Editor de Video & Storyteller Visual
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Con 3 años de experiencia en la industria audiovisual, me especializo en 
                transformar footage en bruto en narrativas visuales que conectan emocionalmente 
                con las audiencias.
              </p>
              <p>
                Mi enfoque combina técnica audio visual con creatividad narrativa. Cada proyecto 
                es una oportunidad para contar una historia única, ya sea un comercial de 30 segundos 
                o un video de larga duración.
              </p>
            </div>

            {/* Tools */}
            <div>
              <p className="text-sm font-medium text-foreground mb-3">Herramientas principales:</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
