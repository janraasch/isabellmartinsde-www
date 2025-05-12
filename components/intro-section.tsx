import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function IntroSection() {
  return (
    <section id="intro" className="bg-emerald-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-3 font-serif text-3xl font-bold text-emerald-800 md:text-4xl">
            Ernährungsberatung online & telefonisch
          </h2>
          <p className="mb-8 text-xl font-medium text-emerald-700">
            Individuell & ganzheitlich — Du willst etwas ändern? Lass es uns anpacken!
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-lg text-gray-700">
              Ob im Job, zu Hause oder beim Sport: Du sollst dich immer rundum wohlfühlen! Ich bin
              Diplom-Ernährungswissenschaftlerin und möchte dich dabei individuell und professionell unterstützen.
            </p>
            <p className="mb-6 text-lg text-gray-700">
              Da ich durch die Deutsche Gesellschaft für Ernährung e. V. (DGE) zertifiziert bin, bezuschussen viele
              Krankenkassen meine Leistungen.
            </p>
            <p className="mb-6 text-lg text-gray-700">
              Jeder Mensch ist einzigartig. So individuell wie die Ernährung und der Lebensstil, ist auch der Weg zu
              mehr Wohlbefinden und Gesundheit. Gemeinsam legen wir die ersten Pflastersteine, sodass du ihn dann
              eigenständig aufbauen kannst.
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-lg bg-white p-8 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Egal, ob du</h3>
            <ul className="mb-6 space-y-3 pl-6">
              <li className="flex items-start">
                <span className="mr-2 text-emerald-600">•</span>
                <span className="text-lg text-gray-700">jung oder alt bist,</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-emerald-600">•</span>
                <span className="text-lg text-gray-700">dich zu dick oder zu dünn fühlst,</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-emerald-600">•</span>
                <span className="text-lg text-gray-700">krank oder gesund bist,</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700">
              jeder hat die Möglichkeit, etwas zu ändern, wenn er es will. Da das für die meisten von uns jedoch alleine
              schwer im Alltag zu schaffen ist, möchte ich dich unterstützen!
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="#contact">Jetzt starten</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
