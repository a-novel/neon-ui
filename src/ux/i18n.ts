import i18n from "i18next";
import LocizeBackend from "i18next-locize-backend";
import { initReactI18next } from "react-i18next";

const locizeOptions = {
  projectId: "fce6deff-96ef-48f8-9e9e-8918867471f1",
  referenceLng: "fr",
};

const i18nPKG: typeof i18n = i18n.createInstance();

i18nPKG
  .use(LocizeBackend)
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },

    backend: locizeOptions,
  })
  .catch(console.error);

export { i18nPKG };
