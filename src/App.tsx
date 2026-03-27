import { type ReactNode } from 'react'

import { Portfolio } from './components/pages/portfolio'
import { LanguageProvider } from './store/language'

export default function App(): ReactNode {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  )
}
