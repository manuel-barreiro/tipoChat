import React, { createContext, useState, useContext } from "react"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import enTranslations from "@/locales/en/translation.json"
import esTranslations from "@/locales/es/translation.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(i18n.language)

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en"
    setLanguage(newLang)
    i18n.changeLanguage(newLang)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
