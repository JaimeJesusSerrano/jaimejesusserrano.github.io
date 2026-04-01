import { type ReactNode } from 'react'

interface Props {
  href: string
  icon: ReactNode
  external?: boolean
}

export function SocialLink({
  href,
  icon,
  external = false
}: Props): ReactNode {
  return (
    <a
      className="text-[#a1a1aa] hover:text-white transition-colors"
      href={href}
      rel={external ? 'noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {icon}
    </a>
  )
}
