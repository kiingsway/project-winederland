import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationBR from './locales/br.json';
import translationFR from './locales/fr.json';
import translationJP from './locales/jp.json';
import translationES from './locales/es.json';

const resources = {
  en: { translation: translationEN, },
  br: { translation: translationBR, },
  fr: { translation: translationFR, },
  jp: { translation: translationJP, },
  es: { translation: translationES, },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
