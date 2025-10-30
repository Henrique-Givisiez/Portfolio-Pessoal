"use client";

import { Cloud, Database, DollarSign, Code } from "lucide-react";
import { useLanguage } from "~/i18n/LanguageProvider";

const About = () => {
  const { t, tr } = useLanguage();

  const highlights = [
    {
      icon: Database,
      title: t("about.cards.data_engineering.title"),
      description: t("about.cards.data_engineering.desc"),
    },
    {
      icon: Cloud,
      title: t("about.cards.cloud.title"),
      description: t("about.cards.cloud.desc"),
    },
    {
      icon: DollarSign,
      title: t("about.cards.finops.title"),
      description: t("about.cards.finops.desc"),
    },
    {
      icon: Code,
      title: t("about.cards.dev_auto.title"),
      description: t("about.cards.dev_auto.desc"),
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 md:scroll-mt-28 bg-gradient-subtle"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 animate-fade-in mt-10">
            <h2 id="about-title" className="text-4xl md:text-5xl font-bold mb-4">
              {t("about.title")}
            </h2>
            <div className="w-40 h-1 gradient-primary mx-auto rounded-full mb-20" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Coluna texto */}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground/90">
                {tr("about.intro", {
                  Em: ({ children }: { children: React.ReactNode }) => (
                    <span className="text-foreground font-semibold">{children}</span>
                  ),
                })}
              </p>

              <ul className="list-none space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-primary/70" />
                  <span>
                    {tr("about.bullets.0", {
                      Strong: ({ children }: { children: React.ReactNode }) => (
                        <span className="text-foreground font-medium">{children}</span>
                      ),
                    })}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-primary/70" />
                  <span>
                    {tr("about.bullets.1", {
                      Strong: ({ children }: { children: React.ReactNode }) => (
                        <strong>{children}</strong>
                      ),
                    })}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-primary/70" />
                  <span>
                    {tr("about.bullets.2", {
                      Strong: ({ children }: { children: React.ReactNode }) => (
                        <strong>{children}</strong>
                      ),
                      Code: ({ children }: { children: React.ReactNode }) => (
                        <strong>{children}</strong>
                      ),
                    })}
                  </span>
                </li>
              </ul>

              {/* CTA discreto */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 ring-1 ring-border hover:bg-muted transition-colors"
                >
                  {t("about.cta_contact")}
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12h14m0 0-5-5m5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Coluna cartões */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-2xl bg-card/70 ring-1 ring-border p-5 shadow-sm transition-colors hover:bg-card hover:ring-primary/40 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="h-8 w-8 text-primary mb-3 transition-transform group-hover:-translate-y-0.5" />
                  <h3 className="text-foreground font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
