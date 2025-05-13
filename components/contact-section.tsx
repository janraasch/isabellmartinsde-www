import { Mail, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center font-serif text-4xl font-bold text-gray-900 md:text-5xl">
          Kontakt & Terminvereinbarung
        </h2>

        <div className="mx-auto grid max-w-2xl">
          <p className="mb-8 text-lg text-gray-700 text-center">
            Erzähl mir mehr von Dir! Ob du Fragen hast oder direkt einen Termin vereinbaren möchtest - ich freue mich, von Dir zu hören.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
