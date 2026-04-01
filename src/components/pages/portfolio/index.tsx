import { type ReactNode } from 'react'

import { Contact } from '@/components/organisms/contact'
import { Education } from '@/components/organisms/education'
import { Experience } from '@/components/organisms/experience'
import { Hero } from '@/components/organisms/hero'
import { Skills } from '@/components/organisms/skills'
import { Base } from '@/components/templates/base'

export function Portfolio(): ReactNode {
  return (
    <Base>
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </Base>
  )
}
