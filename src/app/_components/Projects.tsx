"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "~/i18n/LanguageProvider";

type Project = {
  key: string;
  categoryKeys: string[];
  tagKeys: string[];
  demo?: string;
  github?: string;
};

const Projects = () => {
  const { t } = useLanguage();

  // Helpers seguros para tratar o retorno do dicionário
  const tStr = (key: string): string => {
    const v = t(key) as unknown;
    return typeof v === "string" ? v : "";
  };
  const tOptStr = (key: string): string | undefined => {
    const v = t(key) as unknown;
    const s = typeof v === "string" ? v.trim() : "";
    return s ? s : undefined;
  };

  const projects: Project[] = [
    {
      key: "tcu_suppliers",
      categoryKeys: ["data_engineering", "data_analytics", "governance"],
      tagKeys: ["Python", "Azure Boards API", "Microsoft Fabric", "Power BI", "PySpark", "ETL"],
      github: "https://github.com/Henrique-Givisiez/Azure-Boards-API-Fabric-Supplier-Control",
    },
    {
      key: "multicloud_costs",
      categoryKeys: ["finops", "data_engineering", "data_analytics"],
      tagKeys: ["FinOps Framework", "FOCUS", "Microsoft Fabric", "Power BI", "AWS", "Azure", "GCP"],
    },
    {
      key: "exec_dashboard",
      categoryKeys: ["finops", "data_engineering", "data_analytics"],
      tagKeys: ["Python", "FinOps Framework", "Microsoft Fabric", "AWS", "Power BI"],
    },
    {
      key: "gmaps_routes",
      categoryKeys: ["data_engineering", "cloud"],
      tagKeys: ["Python", "Google Maps Routes API", "PySpark", "Microsoft Fabric", "Power BI", "ETL"],
      demo: "https://www.linkedin.com/posts/henrique-givisiez_pt-br-do-google-maps-para-o-power-bi-activity-7378775699144298496-leQO?utm_source=share&utm_medium=member_desktop&rcm=ACoAADi58-ABNr3Y_dKFlMusKii3vOt-umx8f2c",
    },
    {
      key: "roma_struct",
      categoryKeys: ["full_stack", "automation", "web_dev"],
      tagKeys: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma ORM", "tRPC"],
      demo: "https://projeto-roma.vercel.app/",
    },
    {
      key: "comida_portuguesa",
      categoryKeys: ["full_stack", "automation", "web_dev"],
      tagKeys: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma ORM", "tRPC"],
      demo: "https://comida-portuguesa.vercel.app/",
      github: "https://github.com/Henrique-Givisiez/Projeto-Comida-Portuguesa",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 mt-15 mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{tStr("projects.title")}</h2>
            <div className="w-30 h-1 gradient-primary mx-auto rounded-full mb-5" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {tStr("projects.lead")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, index) => {
              const base = `projects.items.${p.key}`;
              const title = tStr(`${base}.title`);
              const description = tStr(`${base}.description`);

               // Busca primeiro no dicionário; se vazio, usa o valor do objeto
              const githubFromDict = tOptStr(`${base}.github`) ?? p.github;
              const demo = tOptStr(`${base}.demo`) ?? p.demo;

              console.log("Project:", p.key, { githubFromDict, demo });

              const hasAnyAction = Boolean(githubFromDict || demo);

              return (
                <div
                  key={p.key}
                  className="group bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-smooth hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    {p.categoryKeys.map((ck, i) => (
                      <Badge key={i} variant="secondary" className="mb-3 mr-2">
                        {tStr(`projects.categories.${ck}`)}
                      </Badge>
                    ))}

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tagKeys.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                 { hasAnyAction && ( 
                  <div className="flex gap-2">
                    {githubFromDict && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={githubFromDict} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          {tStr("projects.buttons.code")}
                        </a>
                      </Button>
                    )}
                    {demo && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {tStr("projects.buttons.demo")}
                        </a>
                      </Button>
                    )}
                  </div>
                )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
