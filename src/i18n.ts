import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files directly
import commonRu from "./locales/ru/common.json";
import commonEn from "./locales/en/common.json";
import timerRu from "./locales/ru/timer.json";
import timerEn from "./locales/en/timer.json";
import pagesRu from "./locales/ru/pages.json";
import pagesEn from "./locales/en/pages.json";

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			ru: {
				common: commonRu,
				timer: timerRu,
				pages: pagesRu,
			},
			en: {
				common: commonEn,
				timer: timerEn,
				pages: pagesEn,
			},
		},
		fallbackLng: "ru",
		supportedLngs: ["ru", "en"],
		defaultNS: "common",
		ns: ["common", "timer", "pages"],
		interpolation: {
			escapeValue: false, // React already escapes
		},
		detection: {
			order: ["path", "localStorage", "navigator"],
			lookupFromPathIndex: 0,
			caches: ["localStorage"],
		},
	});

export default i18n;
