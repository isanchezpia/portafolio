"use client"

import { ArrowDown, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(100, 200, 255, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(100, 200, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating accent shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Editor de Video & Creador de Contenido</span>
          </div>

          {/* Main heading */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ian Jose{" "}
            <span className="text-primary">Sánchez Piña</span>{" "}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            Especializado en edición, motion graphics y contenido audiovisual 
            que conecta con tu audiencia y eleva tu marca.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8"
            >
              <Link href="#portafolio">
                <Play className="w-4 h-4 fill-current" />
                Ver Portafolio
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-border text-foreground hover:bg-secondary gap-2 px-8 bg-transparent"
            >
              <Link href="#contacto">
                Contactar
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>10+</p>
              <p className="text-sm text-muted-foreground mt-1">Proyectos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>3</p>
              <p className="text-sm text-muted-foreground mt-1">Años Exp.</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>5+</p>
              <p className="text-sm text-muted-foreground mt-1">Marcas en las que he participado</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#portafolio" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
