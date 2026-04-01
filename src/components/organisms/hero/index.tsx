import { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { StatusBadge } from '@/components/atoms/status-badge'
import { Motion } from '@/components/templates/motion'

import { Contact } from './components/contact'

export function Hero(): ReactNode {
  const { t } = useTranslation()

  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-20" id="home">
      <Motion>
        <StatusBadge label={t('hero.badge')} />

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          {t('hero.title')} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Jaime Jesús Serrano
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl leading-relaxed">
          {t('hero.description')}
        </p>

        <Contact contactLabel={t('hero.contactBtn')} />
      </Motion>
    </section>
  )
}
