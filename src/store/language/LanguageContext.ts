import { createContext } from 'react'

import { type LanguageContextType } from './index.types'

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)
