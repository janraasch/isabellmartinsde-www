import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fresh-produce-hero.jpeg"
          alt="Fresh fruits and vegetables arranged in a circle on a wooden surface"
          fill
          priority
          className="object-cover brightness-105 contrast-105"
        />
        {/* Lighter gradient overlay that preserves image colors better */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
      </div>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Add a subtle text shadow to ensure readability against the brighter background */}
        <h1 className="font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl drop-shadow-md">
          Isabell Martins
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-white md:text-2xl drop-shadow-md">
          Professionelle Ernährungsberatung wann & wo du willst
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="#services">Leistungen</Link>
          </Button>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="#about">Über Mich</Link>
          </Button>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="#contact">Termin Vereinbaren</Link>
          </Button>
        </div>

        <div className="mt-8">
          <Button asChild variant="secondary" size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
            <a href="https://hunde.isabellmartins.de">Neu: Ernährungsberatung für Hunde</a>
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#intro"
            className="flex items-center justify-center rounded-full bg-white/20 p-2 backdrop-blur-sm transition-colors hover:bg-white/30"
          >
            <ChevronDown className="h-8 w-8 text-white" />
            <span className="sr-only">Scroll down</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
