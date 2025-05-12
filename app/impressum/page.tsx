import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum | Isabell Martins Ernährungsberatung",
  description: "Impressum und Datenschutzinformationen.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-emerald-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">Impressum</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <section className="mb-12">
            <h2 className="mb-6 font-serif text-2xl font-semibold text-gray-900">Betreiber und Kontakt:</h2>
            <div className="space-y-2 text-gray-700">
              <p>Isabell Martins</p>
              <p>Diplom-Ernährungswissenschaftlerin</p>
              <p className="mt-4">Percevalstraße 11</p>
              <p>23564 Lübeck</p>
              <p className="mt-4">
                E-Mail:{" "}
                <a href="mailto:beratung@isabellmartins.de" className="text-emerald-600 hover:underline">
                  beratung@isabellmartins.de
                </a>
              </p>
              <p className="mt-4">Umsatzsteuer-ID: DE815568394</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-serif text-2xl font-semibold text-gray-900">Bildrechte:</h2>
            <div className="space-y-2 text-gray-700">
              <p>Cover: www.bigstockphoto.com, © Romario Ien</p>
            </div>
          </section>

          <section id="datenschutz" className="mb-12">
            <h2 className="mb-6 font-serif text-2xl font-semibold text-gray-900">Datenschutzerklärung:</h2>
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Datenschutz:</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Die Nutzung meiner Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf
                meiner Seite personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adresse) erhoben werden,
                erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
                Zustimmung nicht an Dritte weitergegeben.
              </p>
              <p>
                Ich weise darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
                Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
                nicht möglich.
              </p>
              <p>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
                Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit
                ausdrücklich widersprochen. Der Betreiber der Seite behält sich ausdrücklich rechtliche Schritte im
                Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
              </p>
              <p className="text-sm text-gray-500">Quellenangabe: www.datenschutzbeauftragter-info.de</p>
            </div>
          </section>

          <div className="mt-12">
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link href="/">
                <ChevronLeft className="h-4 w-4" />
                Zurück zur Startseite
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
