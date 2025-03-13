import { Users, Phone } from "lucide-react"
import SectionTitle from "./section-title"

export default function References() {
  const references = [
    {
      name: "Moises Campos Abarca",
      phone: "8764-5491",
      position: "Analista Programador Oracle en MUCAP",
    },
    {
      name: "Olga Emilia Arias Leiva",
      phone: "8601-4779",
      position: "Analista Programador QA Oracle en Coopealianza R.L.",
    },
    {
      name: "Alonso Salguero Ceballos",
      phone: "8710-9971",
      position: "Desarrollador Fullstack Developper en Dirección General Servicio Civil",
    },
  ]

  return (
    <section id="references" className="section-container">
      <div className="w-full flex flex-col items-start">
        <SectionTitle
          icon={<Users className="h-5 w-5" />}
          title="Referencias"
          description="Contactos profesionales que pueden validar mi experiencia y habilidades."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {references.map((ref, index) => (
          <aside key={index} className="bg-black text-white p-6 rounded-lg w-full font-mono shadow-lg">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-sm text-gray-400">profile</p>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-green-400">$ get-contact-info</p>
              <p className="text-white font-bold">{ref.name}</p>
              <div className="flex items-center gap-1.5 text-white">
                <Phone className="h-3.5 w-3.5 text-yellow-400" />
                <span>{ref.phone}</span>
              </div>
              <p className="text-white text-sm">{ref.position}</p>
              <p className="text-green-400">$</p>
            </div>
          </aside>
        ))}
      </div>
    </section>
  )
}

