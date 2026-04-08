import { createContext, useContext } from "react";

const LanguageContext = createContext(null);

export default function LanguageProvider({ children }) {
  return <LanguageContext.Provider>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
