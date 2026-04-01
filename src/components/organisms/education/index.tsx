import { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { SectionHeading } from '@/components/atoms/section-heading'
import { Motion } from '@/components/templates/motion'

import { Item } from './components/item'

export function Education(): ReactNode {
  const { t } = useTranslation()
  const items = t('education.items', { returnObjects: true })

  return (
    <section className="scroll-mt-24" id="education">
      <Motion>
        <SectionHeading index="03" title={t('education.title')} />

        <div className="space-y-8">
          {items.map((item) => (
            <Item key={`${item.degree}-${item.period}`} item={item} />
          ))}
        </div>
      </Motion>
    </section>
  )
}
