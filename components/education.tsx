import { GraduationCap, Info } from "lucide-react"
import SectionTitle from "./section-title"

export default function Education() {
  const education = [
    {
      institution: "UNIVERSIDAD ESTATAL A DISTANCIA",
      degree: "Licenciatura en Desarrollo de Aplicaciones Web",
      period: "2022 - actualidad",
      color: "blue",
      status: "En curso",
    },
    {
      institution: "UNIVERSIDAD NACIONAL",
      degree: "Ingeniería en Sistemas de Información con Grado de Bachillerato",
      period: "2015 - 2020",
      color: "green",
      status: "Completado",
    },
  ]

  // Función para obtener las clases CSS según el color
  const getColorClasses = (color) => {
    switch (color) {
      case "green":
        return {
          bg: "bg-green-100",
          border: "border-green-500",
          text: "text-green-900",
          hover: "hover:bg-green-200",
          icon: "text-green-600",
        }
      case "blue":
        return {
          bg: "bg-blue-100",
          border: "border-blue-500",
          text: "text-blue-900",
          hover: "hover:bg-blue-200",
          icon: "text-blue-600",
        }
      case "yellow":
        return {
          bg: "bg-yellow-100",
          border: "border-yellow-500",
          text: "text-yellow-900",
          hover: "hover:bg-yellow-200",
          icon: "text-yellow-600",
        }
      default:
        return {
          bg: "bg-gray-100",
          border: "border-gray-500",
          text: "text-gray-900",
          hover: "hover:bg-gray-200",
          icon: "text-gray-600",
        }
    }
  }

  return (
    <section id="education" className="section-container">
      <div className="w-full flex flex-col items-start">
        <SectionTitle
          icon={<GraduationCap className="h-5 w-5" />}
          title="Formación Académica"
          description="Mi educación formal y títulos académicos obtenidos a lo largo de mi carrera."
        />
      </div>

      <div className="space-y-4 p-4 bg-white rounded-xl shadow-lg">
        {education.map((edu, index) => {
          const colorClasses = getColorClasses(edu.color)

          return (
            <div
              key={index}
              role="alert"
              className={`${colorClasses.bg} border-l-4 ${colorClasses.border} ${colorClasses.text} p-4 rounded-lg flex items-start transition duration-300 ease-in-out ${colorClasses.hover} transform hover:scale-105`}
            >
              <Info className={`h-5 w-5 flex-shrink-0 mr-3 mt-0.5 ${colorClasses.icon}`} />

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{edu.institution}</h3>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClasses.bg} border ${colorClasses.border}`}
                  >
                    {edu.status}
                  </span>
                </div>
                <p className="text-sm font-medium mt-1">{edu.degree}</p>
                <p className="text-xs mt-2 opacity-80">{edu.period}</p>
              </div>
            </div>
          )
        })}

        {/* Información adicional */}
        <div
          role="alert"
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 rounded-lg flex items-start transition duration-300 ease-in-out hover:bg-yellow-200 transform hover:scale-105"
        >
          <Info className="h-5 w-5 flex-shrink-0 mr-3 mt-0.5 text-yellow-600" />
          <div>
            <p className="font-semibold">Formación Continua</p>
            <p className="text-sm mt-1">
              Constantemente participando en cursos y talleres para mantenerme actualizada en las últimas tecnologías y
              metodologías de desarrollo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

