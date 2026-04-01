import { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { SectionHeading } from '@/components/atoms/section-heading'
import { ListCard } from '@/components/molecules/list-card'
import { Motion } from '@/components/templates/motion'

export function Skills(): ReactNode {
  const { t } = useTranslation()
  const categories = t('skills.categories', { returnObjects: true })

  return (
    <section className="scroll-mt-24" id="skills">
      <Motion>
        <SectionHeading index="02" title={t('skills.title')} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <ListCard key={category.title} items={category.items} title={category.title} />
          ))}
        </div>
      </Motion>
    </section>
  )
}
