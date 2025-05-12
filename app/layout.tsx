import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Isabell Martins | Professionelle Ernährungsberatung",
  description:
    "Professionelle Ernährungsberatung wann & wo du willst. Zertifizierte Ernährungsberaterin mit über 10 Jahren Erfahrung.",
  keywords: [
    "Ernährungsberatung",
    "Ernährungstherapie",
    "Ernährungsberaterin",
    "Lübeck",
    "Online Ernährungsberatung",
    "Gesunde Ernährung",
    "Abnehmen",
    "Ernährungsplan",
    "Diät",
    "Ernährungswissenschaftlerin",
    "Isabell Martins",
  ],
  authors: [{ name: "Isabell Martins" }],
  creator: "Isabell Martins",
  publisher: "Isabell Martins",
  metadataBase: new URL("https://www.isabellmartins.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Isabell Martins | Professionelle Ernährungsberatung",
    description:
      "Professionelle Ernährungsberatung wann & wo du willst. Zertifizierte Ernährungsberaterin mit über 10 Jahren Erfahrung.",
    url: "https://www.isabellmartins.de",
    siteName: "Isabell Martins Ernährungsberatung",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: 'https://www.isabellmartins.de/images/opengraph-image.jpeg', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Isabell Martins Ernährungsberatung'
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isabell Martins | Professionelle Ernährungsberatung",
    description:
      "Professionelle Ernährungsberatung wann & wo du willst. Zertifizierte Ernährungsberaterin mit über 10 Jahren Erfahrung.",
    images: [
      {
        url: 'https://www.isabellmartins.de/images/opengraph-image.jpeg', // Must be an absolute URL
        alt: 'Isabell Martins Ernährungsberatung',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
