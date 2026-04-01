import { type ReactNode } from 'react'

interface Props {
  index: string
  title: string
  centered?: boolean
}

export function SectionHeading({ index, title, centered = false }: Props): ReactNode {
  return (
    <h2
      className={`text-3xl font-bold mb-12 flex items-center gap-4${centered ? ' justify-center' : ''}`}
    >
      <span className="text-blue-500 font-mono text-xl">{index}.</span> {title}
    </h2>
  )
}
