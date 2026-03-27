import { type ReactNode, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Language } from '@/constants/language'

import { type LanguageProviderProps } from './index.types'
import { LanguageContext } from './LanguageContext'

const FADE_DURATION = 200

export function LanguageProvider({ children }: LanguageProviderProps): ReactNode {
  const { i18n } = useTranslation()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const toggleLanguage = useCallback((): void => {
    setIsTransitioning(true)
    setTimeout(() => {
      const next = i18n.language === (Language.ES as string) ? Language.EN : Language.ES
      void i18n.changeLanguage(next)
      setIsTransitioning(false)
    }, FADE_DURATION)
  }, [i18n])

  const language = (i18n.language === (Language.EN as string) ? Language.EN : Language.ES)

  return (
    <LanguageContext.Provider value={{ language, isTransitioning, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
