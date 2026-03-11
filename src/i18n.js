import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const modules = import.meta.glob("./locales/**/*.json", { eager: true });

const resources = {};

for (const path in modules) {
  const parts = path.match(/\.\/locales\/(\w+)\//);
  if (!parts) continue;
  const lang = parts[1];
  if (!resources[lang]) resources[lang] = { translation: {} };
  Object.assign(resources[lang].translation, modules[path].default ?? modules[path]);
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: "ar",
    fallbackLng: "ar",
    interpolation: { escapeValue: false },
    resources,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;