import { type ReactNode } from 'react'

import { type Education } from '@/type/Education'

interface Props {
  item: Education
}

export function Item({ item }: Props): ReactNode {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
        <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
        <span className="text-sm font-mono text-blue-400">{item.period}</span>
      </div>
      <h4 className="text-lg text-gray-300 mb-4">{item.institution}</h4>
      <p className="text-[#a1a1aa] leading-relaxed">{item.description}</p>
    </div>
  )
}
