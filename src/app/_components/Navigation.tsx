"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "~/i18n/LanguageProvider";
import LangToggle from "./LangToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") || (lang === "pt" ? "Habilidades" : "Skills") },
    { href: "#experience", label: t("nav.experience") || (lang === "pt" ? "Experiência" : "Experience") },
    { href: "#contact", label: t("nav.contact") },
  ];

  // container fixo — theme-aware
  const navShell =
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md";

  const navSurface = isScrolled
    ? "bg-background/90 border-b border-border shadow-md"
    : "bg-background/60 border-b border-transparent";

  const toggleLabel = lang === "pt" ? "🇧🇷 PT" : "🇺🇸 EN";

  return (
    <nav className={`${navShell} ${navSurface}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-[color] duration-300"
          >
            HG
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-[color] duration-300
                           after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}

            {/* Botão de idioma (desktop) */}
            <LangToggle className="ml-2" size="md"  />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isMobileMenuOpen
                ? (lang === "pt" ? "Fechar menu" : "Close menu")
                : (lang === "pt" ? "Abrir menu" : "Open menu")
            }
            className="md:hidden p-2 text-foreground hover:text-primary transition-[color] duration-300"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative block py-2 text-base font-medium text-muted-foreground hover:text-primary transition-[color] duration-300
                           after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-[width] after:duration-300 hover:after:w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Botão de idioma (mobile) */}
            <div className="pt-2">
              <LangToggle className="w-full" size="sm" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
