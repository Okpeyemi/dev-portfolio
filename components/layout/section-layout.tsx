import type { ReactNode } from "react"

interface SectionLayoutProps {
  children: ReactNode
  title: string
  sectionNumber: number
  sectionId: string
}

export default function SectionLayout({ children, title, sectionNumber, sectionId }: SectionLayoutProps) {
  return (
    <section id={sectionId} className="min-h-screen flex flex-col justify-center items-center relative py-20">
      <div className="w-full max-w-7xl px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-wider text-gray-200 mb-4">{title}</h2>
          <div className="h-1 w-40 bg-yellow-300"></div>
        </div>

        {children}
      </div>

      {/* Page Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl text-gray-500">
        {sectionNumber.toString().padStart(2, "0")}
      </div>
    </section>
  )
}

