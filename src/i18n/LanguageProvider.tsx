// src/i18n/LanguageProvider.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import pt from "./dictionaries/pt";
import en from "./dictionaries/en";

export type Lang = "pt" | "en";

/**
 * Traduções ricas: funções que recebem um mapa de "componentes" (ex.: { Em: ({children}) => <span/> })
 * e retornam ReactNode. Opcionalmente carregam uma versão plana em __plain para uso com `t()`.
 */
// 1) Tipos de Rich Components / RichFn
export type RichComponents = Record<
  string,
  React.ComponentType<{ children: React.ReactNode }>
>;

type Dict = Record<string, unknown>;

const dicts: Record<Lang, Dict> = { pt, en };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Textos simples (retorna string; se chave for RichFn, tenta __plain) */
  t: (path: string) => string;
  /** Textos ricos (retorna ReactNode; se chave for string, retorna a própria string) */
  tr: (path: string, comps?: RichComponents) => ReactNode;
};

const LanguageCtx = createContext<Ctx>({
  lang: "pt",
  // Não deixar função “vazia”: isso evita o lint no-empty-function
  setLang: (l: Lang) => {
    if (process.env.NODE_ENV !== "production") {
      if (typeof console !== "undefined") {
        console.warn("setLang called outside of LanguageProvider:", l);
      }
    }
  },
  t: (p) => p,
  tr: (p) => p,
});

function isRecord(x: unknown): x is Record<string, unknown> {
  return typeof x === "object" && x !== null;
}

function getPath(obj: unknown, path: string): unknown {
  let cur: unknown = obj;
  for (const key of path.split(".")) {
    if (!isRecord(cur)) return undefined;
    cur = cur[key];
  }
  return cur;
}


function isCallable(x: unknown): x is (c: unknown) => React.ReactNode {
  return typeof x === "function";
}

function hasPlain(x: unknown): x is { __plain?: unknown } {
  // como suas entradas ricas são funções com uma propriedade __plain,
  // basta checar que é função e que a prop existe.
  return typeof x === "function" && "__plain" in x;
}


export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initialLang ?? "pt");

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
    document.cookie = `lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }, [lang]);

  const value = useMemo<Ctx>(() => {
  const t = (path: string): string => {
    const v = getPath(dicts[lang], path);

    if (v == null) return path;

    // Se for função rica e tiver __plain string, usamos
    if (hasPlain(v) && typeof v.__plain === "string") {
      return v.__plain;
    }

    // Caso contrário, tente coerção segura para string
    if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") {
      return String(v);
    }

    // fallback
    return path;
  };

  const tr = (path: string, comps?: RichComponents): React.ReactNode => {
    const v = getPath(dicts[lang], path);

    if (isCallable(v)) {
      // chamamos passando {} quando não houver comps
      return v(comps ?? {});
    }

    if (typeof v === "string" || typeof v === "number") {
      return v;
    }

    // fallback
    return path;
  };

  return { lang, setLang, t, tr };
}, [lang]);

  return (
    <LanguageCtx.Provider value={value}>{children}</LanguageCtx.Provider>
  );
}

export const useLanguage = () => useContext(LanguageCtx);
