import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { Language } from '@/constants/language'

import en from './locales/en.json'
import es from './locales/es.json'

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      [Language.ES]: { translation: es },
      [Language.EN]: { translation: en },
    },
    lng: Language.ES,
    fallbackLng: Language.EN,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
