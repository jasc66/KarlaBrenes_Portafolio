"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import SectionTitle from "./section-title"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("¡Gracias por tu mensaje! Te contactaré pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  // Número de teléfono para WhatsApp (sin el +)
  const whatsappNumber = "50687213232" // Usando el mismo número que aparece en la sección de contacto

  return (
    <section id="contact" className="section-container">
      <div className="w-full flex flex-col items-start">
        <SectionTitle
          icon={<Mail className="h-5 w-5" />}
          title="Contacto"
          description="Ponte en contacto conmigo para consultas, proyectos o colaboraciones profesionales."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-full w-full rounded-3xl flex flex-col p-6 bg-[#3b82f6] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-white/20 drop-shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Información de Contacto</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="h-5 w-5 text-foreground" />
              </div>
              <span className="text-foreground">(506) 8721-3232</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-foreground" />
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-[#25D366] transition-colors flex items-center gap-2"
              >
                WhatsApp
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full bg-[#25D366]/20 text-[#25D366]">
                  Disponible
                </span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-foreground" />
              </div>
              <a
                href="mailto:karlatatianabc@gmail.com"
                className="text-foreground hover:text-[#ddad81] transition-colors"
              >
                karlatatianabc@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-foreground" />
              </div>
              <span className="text-foreground">San José, Pérez Zeledón, Daniel Flores</span>
            </div>
          </div>
        </div>

        <div className="max-w-full w-full rounded-3xl flex flex-col p-6 bg-[#10b981] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-white/20 drop-shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Envíame un Mensaje</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="w-full h-14 flex rounded-lg border border-white/30 items-center bg-white/10">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full h-full px-4 bg-transparent focus:outline-none text-foreground placeholder:text-foreground/60"
                required
              />
            </div>

            <div className="w-full h-14 flex rounded-lg border border-white/30 items-center bg-white/10">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="w-full h-full px-4 bg-transparent focus:outline-none text-foreground placeholder:text-foreground/60"
                required
              />
            </div>

            <div className="w-full flex rounded-lg border border-white/30 items-center bg-white/10">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tu mensaje..."
                rows={4}
                className="w-full px-4 py-3 bg-transparent focus:outline-none text-foreground placeholder:text-foreground/60 resize-none"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="bg-[#634647] text-[#ddad81] border border-[#ddad81] border-b-4 font-medium overflow-hidden relative px-4 py-2 w-full rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-[#ddad81] shadow-[#ddad81] absolute -top-[150%] left-0 inline-flex w-full h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Enviar Mensaje <Send className="h-4 w-4 ml-2 inline" />
              </button>
              <p className="text-center text-xs text-foreground/70 mt-2">
                <i>*Todos los campos son requeridos</i>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

