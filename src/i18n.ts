import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: 'fr',
    debug: true,
  })

export default i18n
