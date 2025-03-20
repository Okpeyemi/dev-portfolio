import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { socialLinks } from "@/data/social-links"

export default function Footer() {
  return (
    <footer className="bg-[#151518] py-5">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image src="/logo.png" alt="Rocktim Logo" width={40} height={40} className="w-10 h-10" />
          </div>

          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">© {new Date().getFullYear()} Maqsoud Tawaliou. Tous droits réservés.</p>
          </div>

          <div className="flex gap-4">
            <Link href={socialLinks.github} className="text-gray-400 hover:text-yellow-300 transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href={socialLinks.linkedin} className="text-gray-400 hover:text-yellow-300 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            {/* <Link href={socialLinks.instagram} className="text-gray-400 hover:text-yellow-300 transition-colors">
              <Instagram className="w-5 h-5" />
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

