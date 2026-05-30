import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "en" | "fr";

interface LangCtx {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LangCtx>({ lang: "en", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "fr" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
