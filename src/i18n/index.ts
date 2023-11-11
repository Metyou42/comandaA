import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en";

const resources = {
    en
};

// eslint-disable-next-line import/no-named-as-default-member
void i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    keySeparator: false,

    interpolation: {
        escapeValue: false
    }
});

export default i18n;
