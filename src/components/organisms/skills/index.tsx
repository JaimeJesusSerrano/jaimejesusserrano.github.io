import { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import SectionHeading from '../../atoms/section-heading'
import SkillCard from '../../molecules/skill-card'
import Motion from '../../templates/motion'

export default function Skills(): ReactNode {
  const { t } = useTranslation()
  const categories = t('skills.categories', { returnObjects: true })

  return (
    <section className="scroll-mt-24" id="skills">
      <Motion>
        <SectionHeading index="02" title={t('skills.title')} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </Motion>
    </section>
  )
}
