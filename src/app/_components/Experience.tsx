import { Calendar, MapPin, Award, GraduationCap, CircleSmall, BriefcaseBusiness } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "education",
      title: "Engenharia de Computação",
      organization: "Universidade de Brasília (UnB)",
      period: "jun/2021 - jun/2026",
      location: "Brasília, DF",
      highlights: [
        "TCC: Mitigações contra ataques Economic Denial of Sustainability",
        "Gerente de Projetos da Struct - Soluções Web",
      ],
    },
    {
      type: "work",
      title: "Monitor de Física",
      organization: "Centro Educacional Sigma",
      period: "jun/2022 - jun/2023",
      location: "Brasília, DF",
      highlights: [
        "Desenvolvi habilidades de comunicação e didática ao ministrar aulas e plantões de dúvidas, simplificando conceitos complexos de Física para alunos do ensino médio",
        "Apliquei raciocínio analítico na formulação de exercícios preparatórios para vestibulares, focando na estruturação lógica e na resolução de problemas",
        "Colaborei com o corpo docente no auxílio e preparação de materiais para aulas, e corrigi avaliações para fornecer feedback construtivo aos alunos"
      ]
    },
    {
      type: "work",
      title: "Estagiário em Engenharia e Automação de Processos",
      organization: "Banco do Brasil",
      period: "jun/2023 - fev/2025",
      location: "Brasília, DF",
      highlights: [
        "Desenvolvi scripts em Python para automatizar o processamento de grandes volumes de plantas e documentos técnicos, otimizando o tempo de busca em 80%",
        "Criei planilhas analíticas no Excel integradas com processamento em Python para previsão orçamentária de obras, aumentando a precisão e reduzindo retrabalho",
        "Participei da revisão e melhoria de fluxos operacionais com base em análises de dados, contribuindo para maior controle e eficiência em projetos de engenharia."
      ]
    },
    {
      type: "work",
      title: "Estagiário em Cloud & FinOps",
      organization: "Tribunal de Contas da União (TCU)",
      period: "fev/2025 - Atualmente",
      location: "Brasília, DF",
      highlights: [
        "Projetei uma arquitetura de dados no Microsoft Fabric para centralizar custos da AWS, Azure e GCP. Automatizei pipelines ETL com Power Automate e Python, reduzindo o trabalho manual e oferecendo insights em tempo quase real",
        "Estruturei um Lakehouse no Fabric para armazenar e transformar dados da API do Azure Boards, permitindo o monitoramento de desempenho de fornecedores e contratos",
        "Desenvolvi relatórios interativos no Power BI utilizando DAX e dataflows, com indicadores de custo por recurso e utilização de compromissos (FinOps KPIs)",
        "Criei scripts em Python (PySpark + Pandas + Requests) para ingestão e limpeza de dados em lote, melhorando a confiabilidade e a rastreabilidade das informações"
      ],
    },
    {
      type: "work",
      title: "Desenvolvedor Web & Gerente de Projetos",
      organization: "Struct - Soluções Web",
      period: "06/2025 - 10/2025",
      location: "Brasília, DF",
      highlights: [
        "Atuei como mentor técnico, conduzindo revisões de código (PRs) e garantindo a qualidade final dos produtos entregues aos clientes",
        "Liderei o Projeto ROMA, um sistema web para gestão interna de restaurante, coordenando o ciclo completo do projeto — desde o planejamento até a comunicação com o cliente",
        "Participei ativamente do desenvolvimento utilizando a T3 Stack (Next.js, TypeScript, Tailwind CSS e tRPC), sendo responsável pela modelagem do banco via Prisma ORM e pela arquitetura de comunicação entre front e back-end",
      ],
    },
    {
      type: "certification",
      title: "FinOps Certified Practitioner",
      organization: "FinOps Foundation",
      period: "out/2025",
      description:
      "Certificação em práticas de gestão financeira de cloud, otimização de custos e governança de recursos em ambientes cloud.",
    },
  ];

  const getIcon = (type: string) => {
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
              Experiência & Educação
            </h2>
            <div className="w-80 h-1 gradient-primary mx-auto rounded-full mb-5" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça minha trajetória acadêmica e profissional
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
                    <div className="mt-2 absolute left-0 md:left-1/2 w-10 h-10 md:-translate-x-1/2 bg-primary rounded-full flex items-center justify-center z-10 shadow-elegant">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 ml-14 md:ml-0 ${
                        index % 2 === 0
                          ? "md:pr-12"
                          : "md:pl-12"
                      }`}
                    >
                      <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-smooth hover-lift">
                        <div className="flex flex-col md:items-start gap-1">
                          <h3 className="text-xl font-semibold w-2/5">
                            {item.title}
                          </h3>
                          <p className="text-primary font-medium mb-2">
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
                          <ul className="space-y-3 text-sm">
                            {item.highlights.map((highlight, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <span className="text-accent mt-1"><CircleSmall className="h-3 w-3" /></span>
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
