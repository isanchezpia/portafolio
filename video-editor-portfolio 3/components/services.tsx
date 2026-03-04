import { Film, Palette, Sparkles, Smartphone, Tv, Camera } from "lucide-react"

const services = [
  {
    icon: Film,
    title: "Edición de Video",
    description: "Edición profesional para contenido de Social Media en plataformas digitales (TikTok, Instagram, Youtube).",
  },
  {
    icon: Palette,
    title: "Corrección de Color",
    description: "Color grading que define el mood y la estética visual de tu proyecto, desde looks naturales hasta estilos estilizados.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Animaciones personalizadas, títulos dinámicos, transiciones y efectos visuales que elevan la calidad de tu contenido.",
  },
  {
    icon: Smartphone,
    title: "Contenido para Redes",
    description: "Videos optimizados para Instagram, TikTok, YouTube Shorts y otras plataformas con formatos verticales y horizontales.",
  },
  {
    icon: Camera,
    title: "Post-Producción",
    description: "Flujo de trabajo integral incluyendo sincronización de audio, efectos de sonido, música y masterización final.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-primary text-sm font-medium mb-2 tracking-wide uppercase">Servicios</p>
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Lo Que Ofrezco
          </h2>
          <p className="text-muted-foreground">
            Servicios profesionales de post-producción audiovisual adaptados a las necesidades de cada proyecto.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
