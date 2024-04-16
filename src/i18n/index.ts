import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"

i18next
    .use(Backend)
    .use(initReactI18next)
    .init({
        debug: true,
        defaultNS: "main",
        ns: "main", 
        lng: localStorage.getItem("lng") || "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json"
        }
    })

export default i18next