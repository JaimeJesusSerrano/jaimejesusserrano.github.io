import { type ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
}

export default function NavLink({ href, children }: Props): ReactNode {
  return (
    <a
      className="text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors"
      href={href}
    >
      {children}
    </a>
  )
}
