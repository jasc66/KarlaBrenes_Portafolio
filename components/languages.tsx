// Este componente ya no se usa, ya que se ha integrado en el componente de certificaciones
import { Globe } from "lucide-react"

export default function Languages() {
  const languages = [
    { name: "Español", level: "Nativo", percentage: 100 },
    { name: "Inglés", level: "Intermedio B1", percentage: 60 },
  ]

  return (
    <section id="languages" className="section-container">
      <div className="section-title">
        <span className="section-icon">
          <Globe className="h-6 w-6" />
        </span>
        <h2>Idiomas</h2>
      </div>
      <div className="content-card">
        <h3 className="text-xl font-bold mb-2">Competencias Lingüísticas</h3>
        <p className="text-muted-foreground font-medium mb-6">Habilidades de comunicación</p>
        <div className="space-y-5">
          {languages.map((language, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-foreground">{language.name}</span>
                <span className="font-bold text-primary">{language.level}</span>
              </div>
              <div className="h-2.5 bg-[hsl(var(--input-bg))] rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${language.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

