import { Briefcase, Database, Code, Server } from "lucide-react"
import SectionTitle from "./section-title"

export default function Experience() {
  const experiences = [
    {
      company: "COOPEALIANZA R.L.",
      period: "2021 - actualidad",
      description:
        "Programación y gestión de requerimientos en PL/SQL, Oracle Forms, Visual Basic .NET, y manipulación básica del IIS.",
      icon: <Database className="h-6 w-6" />,
      number: "01",
      color: "indigo",
    },
    {
      company: "AVS SOLUTIONS",
      period: "2019-2020",
      description:
        "Desarrollo de aplicativo móvil siguiendo el patrón MVC para agilizar la toma de inventario y consulta en tiempo real, integrando el consumo de web services.",
      icon: <Code className="h-6 w-6" />,
      number: "02",
      color: "violet",
    },
  ]

  // Función para obtener las clases CSS según el color
  const getColorClasses = (color) => {
    switch (color) {
      case "indigo":
        return {
          bg: "bg-indigo-500",
          fill: "fill-indigo-500",
          text: "text-indigo-500",
        }
      case "violet":
        return {
          bg: "bg-violet-500",
          fill: "fill-violet-500",
          text: "text-violet-500",
        }
      case "blue":
        return {
          bg: "bg-blue-500",
          fill: "fill-blue-500",
          text: "text-blue-500",
        }
      default:
        return {
          bg: "bg-purple-500",
          fill: "fill-purple-500",
          text: "text-purple-500",
        }
    }
  }

  return (
    <section id="experience" className="section-container">
      <div className="w-full flex flex-col items-start">
        <SectionTitle
          icon={<Briefcase className="h-5 w-5" />}
          title="Experiencia Laboral"
          description="Mi trayectoria profesional y roles desempeñados en diferentes empresas."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => {
          const colorClasses = getColorClasses(exp.color)

          return (
            <div
              key={index}
              className="bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <div className={`w-24 h-24 ${colorClasses.bg} rounded-full absolute -right-5 -top-7`}>
                <p className="absolute bottom-6 left-7 text-white text-2xl">{exp.number}</p>
              </div>

              <div className={`${colorClasses.fill} w-12`}>{exp.icon}</div>

              <h3 className="font-bold text-xl">{exp.company}</h3>
              <p className={`text-sm ${colorClasses.text} font-medium`}>{exp.period}</p>
              <p className="text-sm text-zinc-500 leading-6">{exp.description}</p>
            </div>
          )
        })}

        {/* Tarjeta adicional para habilidades */}
        <div className="bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
          <div className="w-24 h-24 bg-blue-500 rounded-full absolute -right-5 -top-7">
            <p className="absolute bottom-6 left-7 text-white text-2xl">03</p>
          </div>

          <div className="fill-blue-500 w-12">
            <Server className="h-6 w-6" />
          </div>

          <h3 className="font-bold text-xl">Habilidades Destacadas</h3>
          <p className="text-sm text-blue-500 font-medium">Competencias técnicas</p>
          <p className="text-sm text-zinc-500 leading-6">
            Especializada en PL/SQL, Oracle Forms, Visual Basic .NET y desarrollo de aplicaciones con arquitectura MVC.
          </p>
        </div>
      </div>
    </section>
  )
}

