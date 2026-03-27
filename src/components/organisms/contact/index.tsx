import { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { FaEnvelope } from 'react-icons/fa6'

import SectionHeading from '../../atoms/section-heading'
import Motion from '../../templates/motion'

const EMAIL_ICON_SIZE = 20

export default function Contact(): ReactNode {
  const { t } = useTranslation()

  return (
    <section className="scroll-mt-24" id="contact">
      <Motion className="max-w-2xl mx-auto text-center">
        <SectionHeading centered index="04" title={t('contact.title')} />

        <p className="text-[#a1a1aa] mb-10 leading-relaxed">
          {t('contact.description')}
        </p>

        <a
          className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-colors"
          href="mailto:jaimejesusserrano@gmail.com"
        >
          <FaEnvelope size={EMAIL_ICON_SIZE} />
          {t('contact.btn')}
        </a>
      </Motion>
    </section>
  )
}
