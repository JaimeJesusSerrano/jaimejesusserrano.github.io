import { useContext } from 'react'

import { type LanguageContextType } from './index.types'
import { LanguageContext } from './LanguageContext'

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
