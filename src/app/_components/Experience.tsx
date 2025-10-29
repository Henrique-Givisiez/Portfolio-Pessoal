import { Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "education",
      title: "Engenharia de Software",
      organization: "Universidade de Brasília (UnB)",
      period: "2018 - 2024",
      location: "Brasília, DF",
      description:
        "Graduação com foco em engenharia de dados, cloud computing e sistemas distribuídos. TCC sobre detecção de ataques EDoS em ambientes cloud.",
      highlights: [
        "TCC: Economic Denial of Sustainability Detection",
        "Membro da Struct - Empresa Júnior de Software",
        "Pesquisa em CloudSim Plus",
      ],
    },
    {
      type: "certification",
      title: "FinOps Certified Practitioner",
      organization: "FinOps Foundation",
      period: "2023",
      description:
        "Certificação em práticas de gestão financeira de cloud, otimização de custos e governança de recursos em ambientes cloud.",
    },
    {
      type: "certification",
      title: "Azure Data Engineer Associate (DP-203)",
      organization: "Microsoft",
      period: "2023",
      description:
        "Certificação em design e implementação de soluções de dados no Azure, incluindo pipelines, armazenamento e processamento.",
    },
    {
      type: "experience",
      title: "Data Engineer",
      organization: "Tech Company",
      period: "2023 - Presente",
      location: "Remoto",
      description:
        "Desenvolvimento de pipelines de dados escaláveis, implementação de práticas de FinOps e automação de infraestrutura cloud.",
      highlights: [
        "Redução de 40% nos custos de infraestrutura cloud",
        "Implementação de data lakehouse com Delta Lake",
        "Automação de processos ETL com Airflow",
      ],
    },
    {
      type: "experience",
      title: "Desenvolvedor Full Stack",
      organization: "Struct - Empresa Júnior UnB",
      period: "2020 - 2022",
      location: "Brasília, DF",
      description:
        "Desenvolvimento de aplicações web fullstack para clientes diversos, utilizando tecnologias modernas e metodologias ágeis.",
      highlights: [
        "Liderou equipe de 5 desenvolvedores",
        "Entregou 10+ projetos para clientes reais",
        "Implementou CI/CD e práticas DevOps",
      ],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "certification":
        return Award;
      case "education":
        return Award;
      default:
        return Calendar;
    }
  };

  return (
    <section id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experiência & Educação
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trajetória acadêmica e profissional em engenharia de dados e cloud
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((item, index) => {
                const Icon = getIcon(item.type);
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row gap-6 animate-slide-in ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className="absolute left-0 md:left-1/2 w-10 h-10 md:-translate-x-1/2 bg-primary rounded-full flex items-center justify-center z-10 shadow-elegant">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 ml-14 md:ml-0 ${
                        index % 2 === 0
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12"
                      }`}
                    >
                      <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-smooth hover-lift">
                        <div className="flex flex-col md:items-start gap-2 mb-3">
                          <h3 className="text-xl font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-primary font-medium">
                            {item.organization}
                          </p>
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{item.period}</span>
                          </div>
                          {item.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{item.location}</span>
                            </div>
                          )}
                        </div>

                        <p className="text-muted-foreground mb-3">
                          {item.description}
                        </p>

                        {item.highlights && (
                          <ul className="space-y-1 text-sm">
                            {item.highlights.map((highlight, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <span className="text-accent mt-1">•</span>
                                <span>{highlight}</span>
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
