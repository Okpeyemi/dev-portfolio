import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-[#252529] transition-all hover:translate-y-[-5px]">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={500}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-[#333339] px-3 py-1 text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Link target="_blank" href={project.demoUrl} className="text-yellow-300 hover:underline flex items-center gap-1">
            <span>View Project</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
          <Link target="_blank" href={project.githubUrl} className="text-gray-400 hover:text-white">
            <Github className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

