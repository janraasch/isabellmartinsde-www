import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  // Split the description into paragraphs
  const paragraphs = description.split("\n\n").filter((p) => p.trim() !== "")

  // The first paragraph is the introduction
  const introText = paragraphs[0]

  // The remaining paragraphs might contain bullet points
  const remainingParagraphs = paragraphs.slice(1)

  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-8 transition-all hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mb-3 text-2xl font-semibold text-gray-900">{title}</h3>

      {/* Introduction paragraph */}
      <p className="mb-4 text-gray-600">{introText}</p>

      {/* Remaining paragraphs and bullet points */}
      {remainingParagraphs.map((paragraph, idx) => {
        // Check if this paragraph contains bullet points
        if (paragraph.includes("•")) {
          // Split by bullet points and filter out empty lines
          const bulletPoints = paragraph
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line !== "")

          // The first line is likely a header for the bullet points
          const headerLine = bulletPoints[0].includes("•") ? null : bulletPoints[0]
          const actualBulletPoints = headerLine ? bulletPoints.slice(1) : bulletPoints

          return (
            <div key={idx} className="mb-4">
              {headerLine && <p className="mb-2 text-gray-600">{headerLine}</p>}
              <ul className="ml-2 space-y-2">
                {actualBulletPoints.map((point, pointIdx) => {
                  // Handle lines with bullet points
                  if (point.includes("•")) {
                    const [bullet, text] = point.split("•").map((p) => p.trim())
                    return (
                      <li key={pointIdx} className="flex items-start">
                        <span className="mr-2 text-emerald-600">•</span>
                        <span className="text-gray-600">{text || point.replace("•", "").trim()}</span>
                      </li>
                    )
                  }
                  // Handle regular lines
                  return (
                    <li key={pointIdx} className="text-gray-600">
                      {point}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        }

        // Regular paragraph
        return (
          <p key={idx} className="mb-4 text-gray-600">
            {paragraph}
          </p>
        )
      })}
    </div>
  )
}
