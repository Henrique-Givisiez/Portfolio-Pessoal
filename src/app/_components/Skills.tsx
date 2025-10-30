"use client";

import { Database, Cloud, DollarSign, Code } from "lucide-react";
import { useLanguage } from "~/i18n/LanguageProvider";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Database,
      key: "data_engineering",
      skills: [
        "Python",
        "Apache Spark",
        "Microsoft Fabric",
        "SQL",
        "ETL/ELT",
        "Power BI",
        "REST APIs",
        "Delta Lake",
        "Pandas",
        "Data Modeling",
      ],
    },
    {
      icon: Cloud,
      key: "cloud",
      skills: ["AWS", "Azure", "GCP", "Docker"],
    },
    {
      icon: DollarSign,
      key: "finops",
      skills: [
        "Cost Optimization",
        "Budget Management",
        "Resource Tagging",
        "FinOps Framework",
        "Azure Cost Management",
        "AWS Cost Explorer",
        "GCP Billing",
        "FOCUS Dashboards",
      ],
    },
    {
      icon: Code,
      key: "dev_automation",
      skills: [
        "Python",
        "JavaScript & TypeScript",
        "React & Next.js",
        "tRPC",
        "REST APIs",
        "Git/GitHub",
        "Linux",
        "Unit Testing",
        "CI/CD",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 md:scroll-mt-28 bg-gradient-subtle"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("skills.title")}
            </h2>
            <div className="w-40 h-1 gradient-primary mx-auto rounded-full mb-5" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("skills.lead")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.key}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-smooth hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg gradient-primary">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {t(`skills.categories.${category.key}.title`)}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
