import { Award, Globe, BookOpen } from "lucide-react"
import SectionTitle from "./section-title"

export default function Certifications() {
  const certifications = [
    { name: "Scrum Master", year: "2024", icon: <Award className="h-5 w-5" /> },
    { name: "Scrum", year: "2024", icon: <BookOpen className="h-5 w-5" /> },
  ]

  const languages = [
    { name: "Español", level: "Nativo", percentage: 100 },
    { name: "Inglés", level: "Intermedio B1", percentage: 60 },
  ]

  return (
    <section id="certifications" className="section-container">
      <div className="w-full flex flex-col items-start">
        <SectionTitle
          icon={<Award className="h-5 w-5" />}
          title="Certificaciones e Idiomas"
          description="Mis certificaciones profesionales y nivel de dominio de diferentes idiomas."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Certificaciones */}
        <div className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-zinc-700 flex items-center">
              <Award className="h-5 w-5 mr-2 text-[#634647]" />
              Certificaciones Profesionales
            </h3>

            <div className="space-y-5">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 rounded-lg border border-zinc-100 hover:border-[#634647] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#f5e6d8] flex items-center justify-center mr-4 group-hover:bg-[#ddad81] transition-colors">
                    <span className="text-[#634647] group-hover:text-[#634647]">{cert.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-700 group-hover:text-[#634647] transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-zinc-500">Obtenido en {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Idiomas */}
        <div className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-zinc-700 flex items-center">
              <Globe className="h-5 w-5 mr-2 text-[#ddad81]" />
              Competencias Lingüísticas
            </h3>

            <div className="space-y-6">
              {languages.map((language, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[#f5e6d8] flex items-center justify-center mr-3 group-hover:bg-[#ddad81] transition-colors">
                        <span className="text-[#634647] group-hover:text-[#634647] text-xs font-bold">
                          {language.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <span className="font-medium text-zinc-700 group-hover:text-[#ddad81] transition-colors">
                        {language.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold px-2 py-1 rounded-full bg-[#f5e6d8] text-[#634647]">
                      {language.level}
                    </span>
                  </div>
                  <div className="h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#ddad81] to-[#e8c9a9] rounded-full transition-all duration-500 group-hover:scale-x-105 origin-left"
                      style={{ width: `${language.percentage}%` }}
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

