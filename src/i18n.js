import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "../src/locales/en";
import ru from "../src/locales/ru";
import by from "../src/locales/by";

const resources = {
  en,
  ru,
  by
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;