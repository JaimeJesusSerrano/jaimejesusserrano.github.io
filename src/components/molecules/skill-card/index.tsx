import { type ReactNode } from 'react'

import { type SkillCategory } from '@/type'

interface Props {
  category: SkillCategory
}

export default function SkillCard({ category }: Props): ReactNode {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
      <h3 className="text-lg font-semibold mb-6 text-white">{category.title}</h3>
      <ul className="space-y-3">
        {category.items.map((skill) => (
          <li key={skill} className="flex items-center gap-3 text-[#a1a1aa] text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
