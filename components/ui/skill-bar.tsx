interface SkillBarProps {
  name: string
  percentage: number
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-yellow-300">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-[#2a2a30] rounded-full overflow-hidden">
        <div className="h-full bg-yellow-300 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

