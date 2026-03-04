"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    alt: "Behind the scenes - Set de filmación",
    category: "Behind the Scenes",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    alt: "Color grading session",
    category: "Post-producción",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    alt: "Frame cinematográfico - producto tech",
    category: "Frames",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
    alt: "Equipo de filmación en acción",
    category: "Behind the Scenes",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=600&h=400&fit=crop",
    alt: "Frame nocturno - neón",
    category: "Frames",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1505775561242-727b7fba20f0?w=600&h=400&fit=crop",
    alt: "Estación de edición",
    category: "Post-producción",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
    alt: "Frame documental - retrato",
    category: "Frames",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=600&h=400&fit=crop",
    alt: "Preparación de cámara",
    category: "Behind the Scenes",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="galeria" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <p className="text-primary text-sm font-medium mb-2 tracking-wide uppercase">Galería</p>
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Detrás de Cámaras
          </h2>
          <p className="text-muted-foreground">
            Frames seleccionados, stills cinematográficos y momentos del proceso creativo.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelectedImage(index)}
              className="relative break-inside-avoid group cursor-pointer block w-full"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs text-primary font-medium">{image.category}</p>
                    <p className="text-sm text-foreground">{image.alt}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="max-w-5xl w-full">
              <img
                src={galleryImages[selectedImage].src.replace('w=600', 'w=1200').replace('h=400', 'h=800') || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-xs text-primary font-medium">{galleryImages[selectedImage].category}</p>
                <p className="text-foreground">{galleryImages[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
