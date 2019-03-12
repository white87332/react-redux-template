import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
    .use(detector)
    .use(XHR)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: 'en-US',

        fallbackLng: 'en-US', // use en if detected lng is not available

        saveMissing: true, // send not translated keys to endpoint

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        },

        ns: ['common'],

        backend: {
            loadPath: '/asset/locales/{{lng}}/{{ns}}.json'
        }
    });

export default i18n;
