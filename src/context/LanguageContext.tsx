import i18next from "i18next";
import { ReactNode, createContext, useContext, useState } from "react";
import { languageTypes } from "../types/languages"

interface LanguageContextProviderProps {
    children: ReactNode
}

interface LanguageContextType {
    language: languageTypes,
    changeLanguage: (newLanguage: "ru" | "en" | "uz") => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export default function LanguageContextProvider({children}: LanguageContextProviderProps) {
    const [language, setLanguage] = useState<languageTypes>(localStorage.getItem("lang") || "ru");

    const changeLanguage = (newLanguage: languageTypes) => {
        localStorage.setItem("lang", newLanguage)
        i18next.changeLanguage(newLanguage)
        setLanguage(newLanguage)
    }
 
    return (
        <LanguageContext.Provider
            value={{
                language,
                changeLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguageContext() {
    const context = useContext(LanguageContext);
    if (context === undefined || context === null)
        throw new Error("filter context is not working or undefined");
    return context;
}