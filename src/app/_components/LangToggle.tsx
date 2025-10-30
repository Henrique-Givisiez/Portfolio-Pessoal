"use client";

import { useMemo } from "react";
import { useLanguage } from "~/i18n/LanguageProvider";
import ReactCountryFlag from "react-country-flag";

type Props = {
  className?: string;
  size?: "sm" | "md";
  ariaLabel?: string;
};

export default function LangToggle({
  className = "",
  size = "md",
  ariaLabel,
}: Props) {
  const { lang, setLang, t } = useLanguage();
  const isPT = lang === "pt";

  const dims = useMemo(
    () =>
      size === "sm"
        ? { h: "h-8", w: "w-[140px]", pad: "p-1", tab: "text-xs", thumbInset: "inset-1" }
        : { h: "h-9", w: "w-[160px]", pad: "p-1.5", tab: "text-sm", thumbInset: "inset-1.5" },
    [size]
  );

  const Flag = ({ code }: { code: "BR" | "US" }) => (
    <ReactCountryFlag
      svg
      countryCode={code}
      style={{ width: size === "sm" ? "18px" : "20px", height: "auto", display: "block" }}
      aria-label={code === "BR" ? "Brasil" : "United States"}
      title={code}
    />
  );

  return (
    <div
      role="tablist"
      aria-label={ariaLabel ?? t("nav.language") ?? (isPT ? "Idioma" : "Language")}
      className={[
        "relative inline-grid grid-cols-2 items-center rounded-2xl border border-border",
        "bg-background/70 backdrop-blur-sm shadow-sm",
        dims.h,
        dims.w,
        dims.pad,
        className,
      ].join(" ")}
    >
      {/* thumb */}
      <span
        aria-hidden
        className={[
          "pointer-events-none absolute rounded-xl bg-primary text-primary-foreground",
          "transition-transform duration-300 ease-out will-change-transform",
          dims.thumbInset,
          "w-[calc(50%-6px)]", // casa com p-1.5 | ajuste p/ sm: ainda fica bonito
          isPT ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      />

      {/* PT */}
      <button
        type="button"
        role="tab"
        aria-selected={isPT}
        onClick={() => setLang("pt")}
        className={[
          "relative z-10 flex w-full items-center justify-center gap-2 rounded-xl",
          "font-semibold tracking-wide leading-none",
          "text-foreground/85 hover:text-foreground cursor-pointer",
          dims.tab,
        ].join(" ")}
        title="Português"
      >
        <Flag code="BR" />
        <span>PT</span>
      </button>

      {/* EN */}
      <button
        type="button"
        role="tab"
        aria-selected={!isPT}
        onClick={() => setLang("en")}
        className={[
          "relative z-10 flex w-full items-center justify-center gap-2 rounded-xl",
          "font-semibold tracking-wide leading-none",
          "text-foreground/85 hover:text-foreground cursor-pointer",
          dims.tab,
        ].join(" ")}
        title="English"
      >
        <Flag code="US" />
        <span>EN</span>
      </button>
    </div>
  );
}
