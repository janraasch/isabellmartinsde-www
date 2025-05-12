import HeroSection from "@/components/hero-section"
import IntroSection from "@/components/intro-section"
import ServicesSection from "@/components/services-section"
import PricingSection from "@/components/pricing-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import FooterSection from "@/components/footer-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
