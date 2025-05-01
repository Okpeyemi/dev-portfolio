import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { socialLinks } from "@/data/social-links";

export default function SocialButtons() {
  return (
    <div className="flex gap-4">
      <Link
        target="_blank"
        href={socialLinks.github}
        className="bg-[#252529] p-3 rounded-lg hover:bg-yellow-300 hover:text-black transition-colors"
      >
        <Github className="w-5 h-5" />
      </Link>
      <Link
        target="_blank"
        href={socialLinks.linkedin}
        className="bg-[#252529] p-3 rounded-lg hover:bg-yellow-300 hover:text-black transition-colors"
      >
        <Linkedin className="w-5 h-5" />
      </Link>
      {/* <Link
        href={socialLinks.instagram}
        className="bg-[#252529] p-3 rounded-lg hover:bg-yellow-300 hover:text-black transition-colors"
      >
        <Instagram className="w-5 h-5" />
      </Link> */}
    </div>
  );
}
