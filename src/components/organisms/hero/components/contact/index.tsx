import { type ReactNode } from 'react'
import { FaArrowRight } from 'react-icons/fa6'

import { SocialLinks } from '@/components/molecules/social-links'

const CTA_ICON_SIZE = 18

interface Props {
  contactLabel: string
}

export function Contact({ contactLabel }: Props): ReactNode {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-4">
      <a
        className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
        href="#contact"
      >
        {contactLabel} <FaArrowRight size={CTA_ICON_SIZE} />
      </a>
      <SocialLinks />
    </div>
  )
}
