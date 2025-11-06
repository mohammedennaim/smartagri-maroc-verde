import React, { createContext, useContext } from "react";

export type Lang = "en" | "ar";
export type TFunc = (path: string) => string;

export const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: TFunc;
}>({ lang: "en", setLang: () => {}, t: () => "" });

export const useLanguage = () => useContext(LanguageContext);
