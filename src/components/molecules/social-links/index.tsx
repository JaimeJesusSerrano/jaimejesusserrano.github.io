import { type ReactNode } from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'

import SocialLink from '../../atoms/social-link'

const SOCIAL_ICON_SIZE = 24

export default function SocialLinks(): ReactNode {
  return (
    <div className="flex items-center gap-4 px-4">
      <SocialLink
        external
        href="https://www.linkedin.com/in/jaime-jesus-serrano"
        icon={<FaLinkedinIn size={SOCIAL_ICON_SIZE} />}
      />
      <SocialLink
        external
        href="https://github.com/JaimeJesusSerrano"
        icon={<FaGithub size={SOCIAL_ICON_SIZE} />}
      />
      <SocialLink
        href="mailto:jaimejesusserrano@gmail.com"
        icon={<FaEnvelope size={SOCIAL_ICON_SIZE} />}
      />
    </div>
  )
}
