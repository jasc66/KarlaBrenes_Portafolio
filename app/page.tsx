"use client"

import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import References from "@/components/references"
import { MobileNav } from "@/components/mobile-nav"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Animación de scroll con efecto de parallax
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".section-container").forEach((section) => {
      observer.observe(section)
    })

    return () => {
      document.querySelectorAll(".section-container").forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-[#634647]/95 backdrop-blur supports-[backdrop-filter]:bg-[#634647]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl text-[#ddad81]">KB</div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium text-white hover:text-[#ddad81] transition-colors">
              Sobre mí
            </a>
            <a href="#experience" className="text-sm font-medium text-white hover:text-[#ddad81] transition-colors">
              Experiencia
            </a>
            <a href="#education" className="text-sm font-medium text-white hover:text-[#ddad81] transition-colors">
              Educación
            </a>
            <a href="#skills" className="text-sm font-medium text-white hover:text-[#ddad81] transition-colors">
              Habilidades
            </a>
            <a href="#contact" className="text-sm font-medium text-white hover:text-[#ddad81] transition-colors">
              Contacto
            </a>
          </nav>
          <div className="flex items-center">
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-12">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <References />
        <Contact />
      </main>

      <footer className="border-t py-6 md:py-0 bg-[#634647]/80 backdrop-blur-sm">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-white/70 md:text-left">
            © {new Date().getFullYear()} Karla Tatiana Brenes Campos. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:karlatatianabc@gmail.com"
              className="text-sm font-medium text-white/80 hover:text-[#ddad81] transition-colors"
            >
              Email
            </a>
            <a
              href="https://instagram.com/karlabrenescampos"
              className="text-sm font-medium text-white/80 hover:text-[#ddad81] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

