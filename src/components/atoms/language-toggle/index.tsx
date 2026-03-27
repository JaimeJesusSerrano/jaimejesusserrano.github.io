import { type ReactNode } from 'react'

import { Language } from '@/constants/language'

interface Props {
  language: Language
  onToggle: () => void
  className?: string
}

export default function LanguageToggle({ language, onToggle, className = '' }: Props): ReactNode {
  return (
    <button
      className={`px-3 py-1 rounded-full border border-white/20 text-xs font-bold hover:bg-white/10 transition-colors${className === '' ? '' : ` ${className}`}`}
      onClick={onToggle}
    >
      {language === Language.ES ? 'EN' : 'ES'}
    </button>
  )
}
