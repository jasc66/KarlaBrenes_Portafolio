import { Code2, Zap } from "lucide-react"
import SectionTitle from "./section-title"

export default function Skills() {
  const skills = [
    { name: "Trabajo en equipo", level: 90, category: "soft" },
    { name: "Resolución de problemas", level: 85, category: "soft" },
    { name: "Adaptabilidad", level: 80, category: "soft" },
    { name: "Gestión del tiempo", level: 75, category: "soft" },
    { name: "PL/SQL", level: 85, category: "tech" },
    { name: "Oracle Forms", level: 80, category: "tech" },
    { name: "Visual Basic .NET", level: 75, category: "tech" },
    { name: "MVC", level: 70, category: "tech" },
    { name: "Web Services", level: 65, category: "tech" },
  ]

  // Función para obtener el color de la barra según la categoría y nivel
  const getBarColor = (category, level) => {
    if (category === "soft") {
      if (level >= 85) return "from-[#634647] to-[#8a5a5c]"
      if (level >= 75) return "from-[#7d5152] to-[#a16e70]"
      return "from-[#96686a] to-[#b88385]"
    } else {
      if (level >= 85) return "from-[#ddad81] to-[#e8c9a9]"
      if (level >= 75) return "from-[#d19e69] to-[#e0bb91]"
      return "from-[#c58f51] to-[#d5aa79]"
    }
  }

  return (
    <section id="skills" className="section-container">
      <div className="w-full flex flex-col items-start">
        <SectionTitle
          icon={<Code2 className="h-5 w-5" />}
          title="Habilidades"
          description="Mis competencias técnicas y habilidades blandas desarrolladas a lo largo de mi carrera."
        />
      </div>

      <div className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] rounded-2xl bg-white [box-shadow:var(--shadow)]">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-6 text-zinc-700 flex items-center">
            <Zap className="h-5 w-5 mr-2 text-[#ddad81]" />
            Habilidades Técnicas y Personales
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-5">
              <h4 className="font-medium text-zinc-600 mb-4 border-l-4 border-[#634647] pl-3">
                Habilidades Personales
              </h4>
              {skills
                .filter((skill) => skill.category === "soft")
                .map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-zinc-700 group-hover:text-[#634647] transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-bold text-[#634647]">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getBarColor(skill.category, skill.level)} rounded-full transition-all duration-500 group-hover:scale-x-105 origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="space-y-5">
              <h4 className="font-medium text-zinc-600 mb-4 border-l-4 border-[#ddad81] pl-3">Habilidades Técnicas</h4>
              {skills
                .filter((skill) => skill.category === "tech")
                .map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-zinc-700 group-hover:text-[#ddad81] transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-bold text-[#ddad81]">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getBarColor(skill.category, skill.level)} rounded-full transition-all duration-500 group-hover:scale-x-105 origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

