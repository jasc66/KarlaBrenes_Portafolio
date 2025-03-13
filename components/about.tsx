"use client"

import { Target, User } from "lucide-react"
import SectionTitle from "./section-title"

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="w-full flex flex-col items-start">
        <SectionTitle
          icon={<Target className="h-5 w-5" />}
          title="Sobre mí"
          description="Información personal y profesional sobre mi perfil, objetivos y experiencia."
        />
      </div>

      <div className="flex justify-center">
        <div className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full max-w-3xl rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <div className="flex flex-col items-center justify-between pt-9 px-6 pb-6 relative">
            <span className="relative mx-auto -mt-16 mb-8 bg-[#ddad81] rounded-full p-4 shadow-lg">
              <User className="h-12 w-12 text-[#634647]" />
            </span>

            <h3 className="text-xl font-semibold mb-4 text-left mr-auto text-zinc-700">Mi Objetivo Profesional</h3>

            <p className="w-full mb-6 text-base text-justify text-zinc-600">
              Contribuir al desarrollo y mantenimiento de soluciones tecnológicas eficientes y de calidad, optimizando
              procesos críticos. Mi enfoque está en garantizar la estabilidad operativa, mejorar la experiencia del
              usuario y resolver incidentes de manera efectiva para cumplir con los objetivos estratégicos de la
              organización.
            </p>

            <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center">
              <div className="space-y-2 mb-4 sm:mb-0">
                <p className="text-sm text-zinc-500">
                  <span className="font-semibold">Fecha de nacimiento:</span> 15/03/1997
                </p>
                <p className="text-sm text-zinc-500">
                  <span className="font-semibold">Ubicación:</span> San José, Pérez Zeledón, Daniel Flores
                </p>
              </div>

              <button
                className="bg-[#634647] text-[#ddad81] border border-[#ddad81] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                type="button"
                onClick={() => (window.location.href = "#contact")}
              >
                <span className="bg-[#ddad81] shadow-[#ddad81] absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Contactar
              </button>
            </div>

            <div className="w-full mt-8 pt-6 border-t border-zinc-200">
              <h4 className="text-lg font-semibold mb-3 text-zinc-700">Intereses Personales</h4>
              <div className="flex flex-wrap gap-2">
                {["Tecnología", "Desarrollo Web", "Bases de Datos", "Programación", "Aprendizaje Continuo"].map(
                  (interest, index) => (
                    <span key={index} className="px-3 py-1 text-xs rounded-full bg-zinc-100 text-zinc-700">
                      {interest}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

