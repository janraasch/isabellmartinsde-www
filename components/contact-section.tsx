import { Mail, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-4xl font-bold text-gray-900 md:text-5xl">
          Kontakt & Terminvereinbarung
        </h2>

        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 font-serif text-2xl font-semibold text-gray-900">Erzähl mir mehr von Dir</h3>
            <p className="mb-8 text-lg text-gray-700">
              Ob du Fragen hast oder direkt einen Termin vereinbaren möchtest - ich freue mich, von dir zu hören. Fülle
              einfach das Formular aus oder kontaktiere mich direkt.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <a href="mailto:beratung@isabellmartins.de" className="text-emerald-600 hover:underline">
                    beratung@isabellmartins.de
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Telefon</h4>
                  <a href="tel:+4915792351484" className="text-emerald-600 hover:underline">
                    01579 - 23 51 484
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
