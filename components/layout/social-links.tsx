import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { socialLinks } from "@/data/social-links"

export default function SocialLinks() {
  return (
    <div className="fixed left-8 bottom-20 z-50 flex flex-col gap-6 max-lg:hidden">
      <Link href={socialLinks.github} target="_blank" aria-label="GitHub">
        <Github className="w-5 h-5 hover:text-yellow-300 transition-colors" />
      </Link>
      <Link href={socialLinks.linkedin} target="_blank" aria-label="Instagram">
        <Linkedin className="w-5 h-5 hover:text-yellow-300 transition-colors" />
      </Link>
      {/* <Link href={socialLinks.twitter} target="_blank" aria-label="Twitter">
        <Twitter className="w-5 h-5 hover:text-yellow-300 transition-colors" />
      </Link> */}
    </div>
  )
}

