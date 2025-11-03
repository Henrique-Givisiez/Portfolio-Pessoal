"use client";

import {
  Calendar,
  MapPin,
  Award,
  GraduationCap,
  BriefcaseBusiness,
  CircleSmall,
} from "lucide-react";
import { useLanguage } from "~/i18n/LanguageProvider";

type ExpType = "education" | "work" | "certification";

const Experience = () => {
  const { t } = useLanguage();

  // só mantemos as chaves aqui, todo o conteúdo vem do dicionário
  const experiences: { key: string; type: ExpType }[] = [
    { key: "unb_comp", type: "education" },
    { key: "sigma_monitor", type: "work" },
    { key: "bb_intern", type: "work" },
    { key: "tcu_finops_intern", type: "work" },
    { key: "struct_pm", type: "work" },
    { key: "focp", type: "certification" },
  ];

  const getIcon = (type: ExpType) => {
    switch (type) {
      case "certification":
        return Award;
      case "education":
        return GraduationCap;
      default:
        return BriefcaseBusiness;
    }
  };

  return (
    <section id="experience" className="scroll-mt-24 md:scroll-mt-28 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("experience.title")}
            </h2>
            <div className="w-40 h-1 gradient-primary mx-auto rounded-full mb-5" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("experience.lead")}
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((item, index) => {
                const Icon = getIcon(item.type);
                const base = `experience.items.${item.key}`;

                const title = t(`${base}.title`);
                const organization = t(`${base}.organization`);
                const period = t(`${base}.period`);
                const location = t(`${base}.location`);
                const description = t(`${base}.description`);
                const highlights: string[] = (() => {
                  // Pega o JSON (ou vazio)
                  const highlightsStr = t(`${base}.highlights_json`) ?? "";

                  // 1) Tenta parsear um array de strings válido
                  try {
                    const parsed: unknown = JSON.parse(highlightsStr);

                    const isStringArray = (v: unknown): v is string[] =>
                      Array.isArray(v) && v.every((x) => typeof x === "string");

                    if (isStringArray(parsed)) {
                      return parsed;
                    }
                  } catch {
                    // ignore: caímos no fallback abaixo
                  }

                  // 2) Fallback: ler itens individuais com base no contador
                  const countRaw = t(`${base}.highlights_count`);
                  const count = Number(countRaw);

                  if (Number.isFinite(count) && count > 0) {
                    const arr = Array.from({ length: count }, (_, i) =>
                      t(`${base}.highlights.${i}`)
                    ).filter((s): s is string => Boolean(s));

                    return arr;
                  }

                  return [];
                })();

                return (
                  <div
                    key={item.key}
                    className={`relative flex flex-col md:flex-row gap-6 animate-slide-in ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className="mt-2 absolute left-0 md:left-1/2 w-10 h-10 md:-translate-x-1/2 bg-primary rounded-full flex items-center justify-center z-10 shadow-elegant">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 ml-14 md:ml-0 ${
                        index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-smooth hover-lift">
                        <div className="flex flex-col md:items-start gap-1">
                          <h3 className="text-xl font-semibold w-2/5">{title}</h3>
                          <p className="text-primary font-medium mb-2">{organization}</p>
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{period}</span>
                          </div>
                          {location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{location}</span>
                            </div>
                          )}
                        </div>

                        {description && (
                          <p className="text-muted-foreground mb-3">{description}</p>
                        )}

                        {!!highlights.length && (
                          <ul className="space-y-3 text-sm">
                            {highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-accent mt-1">
                                  <CircleSmall className="h-3 w-3" />
                                </span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
