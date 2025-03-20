import Image from "next/image"
import { tools } from "@/data/skills"

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {tools.map((tool, index) => (
        <div key={index} className="bg-[#252529] hover:border hover:border-yellow-300 hover:bg-yellow-300/20 p-4 rounded-xl flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 flex items-center justify-center bg-[#2a2a30] rounded-full mb-3">
            <Image src={tool.icon || "/placeholder.svg"} alt={tool.name} width={30} height={30} />
          </div>
          <span>{tool.name}</span>
        </div>
      ))}
    </div>
  )
}

