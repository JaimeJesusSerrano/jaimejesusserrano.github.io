import { type ReactNode } from 'react'

import Contact from '../../organisms/contact'
import Education from '../../organisms/education'
import Experience from '../../organisms/experience'
import Hero from '../../organisms/hero'
import Skills from '../../organisms/skills'
import { Base } from '../../templates/base'

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
