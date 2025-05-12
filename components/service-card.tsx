import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  paragraph_1: string
  paragraph_2: string
  bullet_points: string[]
  icon: LucideIcon
}

export default function ServiceCard({ title, paragraph_1, paragraph_2, bullet_points, icon: Icon }: ServiceCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-8 transition-all hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mb-3 text-2xl font-semibold text-gray-900">{title}</h3>

      <p className="mb-4 text-gray-600">{paragraph_1}</p>

      <p className="mb-4 text-gray-600">{paragraph_2}</p>

      <div className="mb-4">
        <ul className="ml-2 space-y-2">
          {bullet_points.map((point, pointIdx) => {
            return (
              <li key={pointIdx} className="flex items-start">
                <span className="mr-2 text-emerald-600">•</span>
                <span className="text-gray-600">{point}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
