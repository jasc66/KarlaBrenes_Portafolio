"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#education", label: "Educación" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contacto" },
]

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-[#ddad81]">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#634647]/95 border-[#ddad81]/20">
        <SheetHeader>
          <SheetTitle className="text-left text-[#ddad81]">Menú</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-white hover:text-[#ddad81] transition-colors py-2 border-b border-[#ddad81]/20"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

