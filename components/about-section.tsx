import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="bg-emerald-600 py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div className="relative h-[400px] overflow-hidden rounded-lg md:h-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent z-10 mix-blend-overlay"></div>
            <Image
              src="/images/isabell-portrait.jpg"
              alt="Isabell Martins - Ernährungsberaterin"
              fill
              className="object-cover object-center filter brightness-110 contrast-105 saturate-125"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Über Mich</h2>

            <p className="mb-4 text-lg">
              Hallo, ich bin Isabell Martins - zertifizierte Ernährungsberaterin mit über 10 Jahren Erfahrung. Meine
              Leidenschaft ist es, Menschen dabei zu helfen, durch gesunde Ernährung ein besseres Leben zu führen.
            </p>

            <p className="mb-4 text-lg">
              Anfang 2014 habe ich erfolgreich mein Studium der Ernährungswissenschaften an der
              Friedrich-Schiller-Universität in Jena mit einem Diplom abgeschlossen. Das Studium hatte eine
              naturwissenschaftlich-medizinische Ausrichtung und dauerte 5 Jahre. Im Anschluss habe ich eine
              Weiterbildung zur zertifizierten Ernährungsberaterin/DGE (Deutsche Gesellschaft für Ernährung e. V.)
              abgeschlossen, sodass meine Leistungen von den Krankenkassen anerkannt sind. Damit verbunden ist eine
              fortwährende Qualitätssicherung durch regelmäßige Fortbildungen.
            </p>
            <p className="mb-8 text-lg">
              Seit 2015 bin ich selbstständig tätig, erst in Hamburg und seit 2017 in Lübeck. Meine Schwerpunkte sind u.
              a. Adipositas, Endometriose, Ernährung im Einklang mit dem Zyklus, Sporternährung bei Frauen, Reflux,
              chronisch entzündliche Erkrankungen und Autoimmunerkrankungen. Im präventiven und therapeutischen Bereich
              berate ich sehr gerne zu vegetarischer und veganer Ernährung.
            </p>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <h3 className="text-3xl font-bold">10+</h3>
                <p>Jahre Erfahrung</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <h3 className="text-3xl font-bold">500+</h3>
                <p>Zufriedene Klienten</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <h3 className="text-3xl font-bold">100%</h3>
                <p>Individuell</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
