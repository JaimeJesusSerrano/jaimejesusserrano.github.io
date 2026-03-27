import { type ReactNode } from 'react'

import { type Language } from '@/constants/language'

export interface LanguageProviderProps {
  children: ReactNode
}

export interface LanguageContextType {
  language: Language
  isTransitioning: boolean
  toggleLanguage: () => void
}
