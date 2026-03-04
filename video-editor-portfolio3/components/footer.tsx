import Link from "next/link"
import { Play } from "lucide-react"

const footerLinks = [
  { href: "#portafolio", label: "Portafolio" },
  { href: "#galeria", label: "Galería" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#contacto", label: "Contacto" },
]

const socialLinks = [
  { href: "https://www.instagram.com/iansanchez.p/", label: "Instagram" },
  { href: "https://vimeo.com/iansan", label: "Vimeo" },
  { href: "https://www.linkedin.com/in/ian-sánchezP", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Play className="w-5 h-5 text-primary fill-primary" />
              </div>
              <span className="text-xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Visual Stories
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Transformando ideas en historias visuales que cautivan y conectan con tu audiencia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4">Navegación</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4">Redes Sociales</p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Visual Stories. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Diseñado con pasión por el storytelling visual.
          </p>
        </div>
      </div>
    </footer>
  )
}
