import inputEn from "../assets/locales/en/input.yaml";
import inputFr from "../assets/locales/fr/input.yaml";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const i18nPKG: typeof i18n = i18n.createInstance();

i18nPKG
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",

    supportedLngs: ["en", "fr"],

    resources: {
      en: {
        input: inputEn,
      },
      fr: {
        input: inputFr,
      },
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
  .catch(console.error);

export { i18nPKG };
