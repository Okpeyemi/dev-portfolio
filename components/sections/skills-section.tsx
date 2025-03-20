import SectionLayout from "@/components/layout/section-layout"
import TechGrid from "@/components/ui/tech-grid"
import SoftSkills from "@/components/ui/soft-skills"
import { Globe } from "lucide-react"

interface SkillsSectionProps {
  sectionNumber: number
  sectionId: string
}

export default function SkillsSection({ sectionNumber, sectionId }: SkillsSectionProps) {
  return (
    <SectionLayout sectionId={sectionId} title="MY SKILLS" sectionNumber={sectionNumber}>
      <div className="grid grid-cols-1 md:grid-rows-2 gap-16">
        {/* Technical Skills - Now using TechGrid instead of skill bars */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Technologies & Outils</h3>
          <TechGrid />
        </div>

        {/* Other Skills */}
        <div className="grid grid-cols-1 gap-16">
          {/* Tools & Technologies */}
          {/* <div>
            <div className="flex items-center gap-3 mb-8">
              <Cpu className="w-8 h-8 text-yellow-300" />
              <h3 className="text-2xl font-semibold">Processus de développement</h3>
            </div>

            <TechStack />
          </div> */}

          {/* Soft Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-8 h-8 text-yellow-300" />
              <h3 className="text-2xl font-semibold">Soft Skills</h3>
            </div>

            <SoftSkills />
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

