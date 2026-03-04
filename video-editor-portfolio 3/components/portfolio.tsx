"use client"

import { useState } from "react"
import { Play, ExternalLink, Instagram } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const categories = ["Todos", "Obela", "Vouge", "Matusalem", "Flaying Visit"]

// Tipos de plataforma: "youtube" | "vimeo" | "instagram" | "local"
const projects = [
  {
    id: 1,
    title: "Obela",
    category: "Obela",
    description: "Asistente de Video y realizador de Stop Motion",
    thumbnail: "/obela_stopmotion.png",
    // Para video local, pon el archivo en /public/videos/ y usa la ruta relativa
    videoUrl: "/videos/OBELA_SM-final_2.mp4",
    platform: "local" as const,
  },
   {
    id: 2,
    title: "Obela",
    category: "Obela",
    description: "Asistente de Video y Luz",
    thumbnail: "/obela_taco.png",
    // Para video local, pon el archivo en /public/videos/ y usa la ruta relativa
    videoUrl: "/videos/OBELA_REEL_TACO.mp4",
    platform: "local" as const,
  },
  {
    id: 3,
    title: "Obela",
    category: "Obela",
    description: "Asistente de Video y Luz",
    thumbnail: "/obela_2_v01.png",
    // Para video local, pon el archivo en /public/videos/ y usa la ruta relativa
    videoUrl: "/videos/OBELA_2_v01.mp4",
    platform: "local" as const,
  },
  {
    id: 4,
    title: "Obela",
    category: "Obela",
    description: "Asistente de Video y Luz",
    thumbnail: "/obela_1_v01.png",
    // Para video local, pon el archivo en /public/videos/ y usa la ruta relativa
    videoUrl: "/videos/OBELA_1_v01.mp4",
    platform: "local" as const,
  },
  {
    id: 5,
    title: "Kass Quezada: qué lleva en su bolso | En el bolso de | Vogue México y Latinoamérica",
    category: "Vouge",
    description: "Asistente de Producción",
    thumbnail: "/Kass-Quezada.png",
    videoUrl: "https://www.youtube.com/embed/P-1NaXep5hk",
    platform: "youtube" as const,
  },
  {
    id: 6,
    title: "Aitana en la CDMX: prueba platillos latinoamericanos del restaurante ARRRCO",
    category: "Vouge",
    description: "Asistente de Camara y Video",
    thumbnail: "/Aitana-Vouge.png",
    videoUrl: "https://www.youtube.com/embed/D1RNOssCcbk",
    platform: "youtube" as const,
  },
    {
    id: 7,
    title: "Kenia Os muestra TODO lo que trae en su bolso | En el bolso | Vogue México y Latinoamérica",
    category: "Vouge",
    description: "Asistente de Video",
    thumbnail: "/Kenia-os.png",
    videoUrl: "https://www.youtube.com/embed/PyOzhDdwuRo",
    platform: "youtube" as const,
  },
  {
    id: 8,
    title: "Matusalem Lessons",
    category: "Matusalem",
    description: "Asitente de Video",
    thumbnail: "/matusalem.png",
    // Para Instagram Reels, usa el ID del reel (ej: "CxYZ123abc")
    videoUrl: "DGj0uY_A7UX",
    platform: "instagram" as const,
  },
  {
    id: 9,
    title: "Flaying Visit",
    category: "Flaying Visit",
    description: "Realización de tomas aéreas con dron",
    thumbnail: "/flaying_visit.png",
    // Ejemplo con otro ID de reel
    videoUrl: "DBfDTGxtd_l",
    platform: "instagram" as const,
  },
]

// Función para obtener la URL de embed según la plataforma
function getEmbedUrl(videoUrl: string, platform: string): string {
  switch (platform) {
    case "instagram":
      // Para Instagram Reels, el formato de embed es diferente
      return `https://www.instagram.com/reel/${videoUrl}/embed`
    case "vimeo":
      return videoUrl.includes("player.vimeo.com") ? videoUrl : `https://player.vimeo.com/video/${videoUrl}`
    case "youtube":
    default:
      return videoUrl
  }
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portafolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <p className="text-primary text-sm font-medium mb-2 tracking-wide uppercase">Portafolio</p>
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Trabajos Seleccionados
          </h2>
          <p className="text-muted-foreground">
            Una selección de proyectos que demuestran mi enfoque creativo y técnico en la edición de video.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail / Video */}
              <div className={`relative overflow-hidden flex items-center justify-center bg-black ${project.platform === "instagram" ? "aspect-[9/16] max-h-[400px]" : "aspect-video"}`}>
                {playingVideo === project.id ? (
                  project.platform === "local" ? (
                    <video
                      src={project.videoUrl}
                      className="max-w-full max-h-full object-contain"
                      controls
                      autoPlay
                      playsInline
                    >
                      <track kind="captions" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  ) : (
                    <iframe
                      src={project.platform === "instagram" 
                        ? getEmbedUrl(project.videoUrl, project.platform)
                        : `${getEmbedUrl(project.videoUrl, project.platform)}?autoplay=1`
                      }
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={project.title}
                    />
                  )
                ) : (
                  <>
                    <img
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => setPlayingVideo(project.id)}
                        className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform"
                        aria-label={`Play ${project.title}`}
                      >
                        {project.platform === "instagram" ? (
                          <Instagram className="w-6 h-6" />
                        ) : (
                          <Play className="w-6 h-6 fill-current ml-1" />
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                  {project.category}
                </Badge>
                <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
