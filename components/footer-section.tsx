import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import ScrollToTopButton from "./scroll-to-top-button"

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Column 1: Contact Information */}
          <div className="md:col-span-4">
            <h3 className="mb-4 text-xl font-bold">Isabell Martins</h3>
            <p className="mb-4 text-gray-300">Professionelle Ernährungsberatung wann & wo du willst</p>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <Phone className="mr-2 h-4 w-4 text-emerald-400" />
                <a href="tel:+4915792351484" className="hover:text-white hover:underline">
                  01579 - 23 51 484
                </a>
              </p>
              <p className="flex items-center text-gray-300">
                <Mail className="mr-2 h-4 w-4 text-emerald-400" />
                <a href="mailto:beratung@isabellmartins.de" className="hover:text-white hover:underline">
                  beratung@isabellmartins.de
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Site Navigation */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-xl font-bold">Inhalte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#intro" className="text-gray-300 hover:text-white hover:underline">
                  Willkommen
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white hover:underline">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-300 hover:text-white hover:underline">
                  Preise
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white hover:underline">
                  Über Mich
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white hover:underline">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-xl font-bold">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-300 hover:text-white hover:underline">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/impressum#datenschutz" className="text-gray-300 hover:text-white hover:underline">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Scroll to Top Button */}
          <div className="flex items-center justify-center md:col-span-2 md:justify-end">
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </footer>
  )
}
