"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#portafolio", label: "Portafolio" },
  { href: "#galeria", label: "Galería" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Play className="w-5 h-5 text-primary fill-primary" />
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Visual Stories
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contacto">Trabajemos Juntos</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contacto">Trabajemos Juntos</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
