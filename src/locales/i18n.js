import i18n from 'i18next';
import { initReactI18next } from "react-i18next"

import languages from './lang';

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: languages,
    lng: 'es',
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    debug: false,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;