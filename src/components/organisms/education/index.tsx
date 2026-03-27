import { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import SectionHeading from '../../atoms/section-heading'
import EducationEntry from '../../molecules/education-entry'
import Motion from '../../templates/motion'

export default function Education(): ReactNode {
  const { t } = useTranslation()
  const items = t('education.items', { returnObjects: true })

  return (
    <section className="scroll-mt-24" id="education">
      <Motion>
        <SectionHeading index="03" title={t('education.title')} />

        <div className="space-y-8">
          {items.map((item) => (
            <EducationEntry key={`${item.degree}-${item.period}`} item={item} />
          ))}
        </div>
      </Motion>
    </section>
  )
}
