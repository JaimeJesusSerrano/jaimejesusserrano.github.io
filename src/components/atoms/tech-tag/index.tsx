import { type ReactNode } from 'react'

interface Props {
  label: string
}

export function TechTag({ label }: Props): ReactNode {
  return (
    <span className="px-3 py-1 text-xs font-mono text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">
      {label}
    </span>
  )
}
