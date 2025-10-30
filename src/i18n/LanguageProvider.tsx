// src/i18n/LanguageProvider.tsx (adicione as partes novas marcadas)
"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import pt from "./dictionaries/pt";
import en from "./dictionaries/en";

export type Lang = "pt" | "en";
type Dict = typeof pt;
const dicts: Record<Lang, Dict> = { pt, en };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;          // textos simples
  tr: (path: string, comps?: Record<string, any>) => ReactNode; // textos ricos (JSX)
};

const LanguageCtx = createContext<Ctx>({
  lang: "pt",
  setLang: () => {},
  t: (p) => p,
  tr: (p) => p,
});

function get(obj: any, path: string) {
  return path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
}

export function LanguageProvider({ children, initialLang }: { children: React.ReactNode; initialLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang ?? "pt");

  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch {}
    document.documentElement.lang = lang;
    document.cookie = `lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    setLang,
    t: (path: string) => {
      const v = get(dicts[lang], path);
      if (v == null) return path;
      if (typeof v === "function") {
        // se for rich, mas chamaram t(), retorna só texto “plano” se existir .plain
        return v.__plain ?? path;
      }
      return String(v);
    },
    tr: (path: string, comps: Record<string, any> = {}) => {
      const v = get(dicts[lang], path);
      if (typeof v === "function") {
        return v(comps);
      }
      // fallback: se era string simples, retorna como texto
      return v ?? path;
    },
  }), [lang]);

  return <LanguageCtx.Provider value={value}>{children}</LanguageCtx.Provider>;
}

export const useLanguage = () => useContext(LanguageCtx);
