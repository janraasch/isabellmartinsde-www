import { Utensils, HeartPulse } from "lucide-react"
import ServiceCard from "@/components/service-card"

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-4xl font-bold text-gray-900 md:text-5xl">Meine Leistungen</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <ServiceCard
            title="Ernährungsberatung"
            paragraph_1="Die Ernährungsberatung ist für jeden etwas. Wir schauen uns deine Essgewohnheiten an und versuchen herauszufinden, wie es dir damit geht und wie du mit ein paar Änderungen dein Wohlbefinden verbessern kannst."
            paragraph_2="Die Beratung kann unter anderem folgende Punkte beinhalten:"
            bullet_points={[
              "Grundlagen zu einer gesunden Ernährung",
              "Schulungen zu krankheitsspezifischen Themen",
              "Analyse deines Essverhaltens",
              "Individuelle Anpassungen deines Essverhaltens und Sicherstellung der Nachhaltigkeit",
              "Planung der Gestaltung deines Tages und deiner Mahlzeiten"
            ]}
            icon={Utensils}
          />
          <ServiceCard
            title="Ernährungstherapie"
            paragraph_1="In der Therapie geht es darum, mithilfe der Ernährung Erkrankungen zu lindern oder zu heilen."
            paragraph_2="In der Ernährungstherapie begleite ich die Behandlung von unter anderem folgenden Erkrankungen:"
            bullet_points={[
              "Adipositas/Übergewicht",
              "Bluthochdruck",
              "Chronisch entzündliche Erkrankungen",
              "Diabetes mellitus",
              "Endometriose",
              "Magen- und Darmerkrankungen",
              "Nahrungsmittelunverträglichkeiten",
              "Zöliakie",
              "Zyklus – Ernährung im Einklang mit dem Zyklus und eventuellen Beschwerden"
            ]}
            icon={HeartPulse}
          />
        </div>
      </div>
    </section>
  )
}
