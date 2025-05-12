import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, RefreshCcw, Check } from "lucide-react"

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-emerald-50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-4xl font-bold text-gray-900 md:text-5xl">Preise</h2>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* First pricing card */}
            <div className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">Erstgespräch</h3>
              <div className="mb-4 text-3xl font-bold text-emerald-600">140 €</div>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>60 Minuten Gesprächszeit</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>Inklusive Vor- und Nachbereitung</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>Anamnese und erste Infos bzw. Umsetzungen</span>
                </li>
              </ul>
            </div>

            {/* Second pricing card */}
            <div className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <RefreshCcw className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">Folgegespräch</h3>
              <div className="mb-4 text-3xl font-bold text-emerald-600">80 €</div>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>30 Minuten Gesprächszeit</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>Inklusive Vor- und Nachbereitung</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>Schritt für Schritt zum Ziel</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-lg bg-white p-8 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Individuelle Angebote</h3>
            <p className="mb-6 text-gray-700">
              Benötigst du ein maßgeschneidertes Angebot für Deine spezifischen Bedürfnisse? Bitte kontaktiere mich per
              E-mail an{" "}
              <a href="mailto:beratung@isabellmartins.de" className="text-emerald-600 hover:underline">
                beratung@isabellmartins.de
              </a>{" "}
              oder benutze das Kontaktformular.
            </p>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="#contact">Individuelles Angebot anfragen</Link>
            </Button>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Alle Preise inkl. gesetzlicher MwSt. Viele Krankenkassen bezuschussen meine Leistungen.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
