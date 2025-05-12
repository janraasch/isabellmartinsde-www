"use client"

import { ChevronUp } from "lucide-react"

export default function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group flex flex-col items-center"
      aria-label="Nach oben scrollen"
    >
      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white transition-all group-hover:bg-emerald-500">
        <ChevronUp className="h-6 w-6" />
      </div>
      <span className="text-sm text-gray-300 group-hover:text-white">Nach oben</span>
    </button>
  )
}
