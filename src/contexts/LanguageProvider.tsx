import React, { useEffect, useMemo, useState } from "react";
import translations from "@/i18n/translations";
import { LanguageContext, Lang, TFunc } from "./language";
type TranslationsType = Record<string, Record<string, unknown>>;

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const s = localStorage.getItem("lang");
      if (s === "ar") return "ar";
    } catch (e) {
      // ignore
    }
    return "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      // ignore
    }
    // set dir for RTL when Arabic
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
  }, [lang]);

  const t = React.useCallback<TFunc>(
    (path) => {
      const parts = path.split(".");
      const root = (translations as TranslationsType)[lang];
      let cur: unknown = root;
      for (const p of parts) {
        // dynamic lookup into nested objects
        if (typeof cur === "object" && cur !== null && p in (cur as Record<string, unknown>)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          cur = (cur as Record<string, any>)[p];
        } else {
          return path;
        }
      }
      return typeof cur === "string" ? (cur as string) : path;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

