import Link from "next/link"
import SectionLayout from "@/components/layout/section-layout"
import ProjectCard from "@/components/ui/project-card"
import { ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"

interface ProjectsSectionProps {
  sectionNumber: number
  sectionId: string
}

export default function ProjectsSection({ sectionNumber, sectionId }: ProjectsSectionProps) {
  return (
    <SectionLayout sectionId={sectionId} title="MY PROJECTS" sectionNumber={sectionNumber}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="https://github.com/Okpeyemi?tab=repositories"
          className="inline-flex items-center gap-2 border-2 border-yellow-300 text-yellow-300 px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 hover:text-black transition-colors"
        >
          Voir Tous Les Projets
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </SectionLayout>
  )
}

