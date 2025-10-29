import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Fiscalização de Fornecedores - TCU",
      description:
        "ETL completo integrando dados do Azure Boards ao Microsoft Fabric, automatizando a extração e transformação de indicadores de desempenho de fornecedores. Os dados são consolidados em dashboards interativos no Power BI, permitindo monitorar conformidade contratual, prazos e eficiência operacional de cada contrato.",
        category: ["Data Engineering", "Data Analytics", "Governança"],
        tags: ["Python", "Azure Boards API", "Microsoft Fabric", "Power BI", "PySpark", "ETL"],
      },
      {
        title: "Custos Multicloud (AWS + Azure + GCP) - TCU",
        description:
        "Pipeline de dados para integração e padronização de custos multicloud, consolidando faturas das três principais nuvens em um único Lakehouse no Microsoft Fabric. Inclui métricas DAX personalizadas para análise de variação mensal, alocação de recursos e oportunidades de otimização FinOps, exibidas em painéis estratégicos no Power BI.",
        category: ["FinOps", "Data Engineering", "Data Analytics"],
        tags: ["FinOps Framework", "FOCUS", "Microsoft Fabric", "Power BI", "AWS", "Azure", "GCP"],
      },
      {
        title: "Dashboard Estratégico – TCU",
        description:
          "Painel executivo desenvolvido para diretores e gestores, apresentando uma visão unificada dos custos multicloud do TCU. Exibe variação mensal, custo acumulado, economia potencial e distribuição por provedor e produto, com narrativa automática de insights e filtros dinâmicos para suporte à decisão.",
        category: ["FinOps", "Data Engineering", "Data Analytics"],
        tags: ["Python", "FinOps Framework", "Microsoft Fabric", "AWS", "Power BI"],
      },
      {
        title: "Análise de Rotas com Google Maps - Pessoal",
        description:
          "ETL automatizado para coleta de dados de tráfego via Google Maps Routes API, com medições a cada 10 minutos durante uma semana. Os dados foram processados em PySpark e Microsoft Fabric, comparando tempos de viagem com e sem tráfego. O dashboard no Power BI revela padrões de congestionamento, eficiência de rotas e impacto dos horários de pico.",
        category: ["Data Engineering", "Cloud"],
        tags: ["Python", "Google Maps Routes API", "PySpark", "Microsoft Fabric", "Power BI", "ETL"],
        demo: "https://www.linkedin.com/posts/henrique-givisiez_pt-br-do-google-maps-para-o-power-bi-activity-7378775699144298496-leQO?utm_source=share&utm_medium=member_desktop&rcm=ACoAADi58-ABNr3Y_dKFlMusKii3vOt-umx8f2c",
      },
    {
      title: "Projeto ROMA - Struct",
      description:
        "Sistema web completo para gestão de restaurante ROMA, desenvolvido com a T3 Stack (Next.js, tRPC, Prisma, Tailwind e PostgreSQL). Permite gerenciamento de pedidos, cardápio, relatórios diários e autenticação segura, além de exportação de relatórios. Atuei como desenvolvedor e gerente do projeto, garantindo entrega ágil, funcionalidade robusta e alta qualidade por meio de práticas ágeis e foco no usuário.",
      category: ["Full Stack", "Automation", "Web Development"],
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma ORM", "tRPC"],
      demo: "https://projeto-roma.vercel.app/",
    },
    {
      title: "Comida Portuguesa com Certeza - Pessoal",
      description:
        "Plataforma completa para restaurante fictício, integrando experiência do cliente e gestão interna. Permite ao usuário visualizar o cardápio e realizar pedidos, enquanto o lado administrativo possibilita controle total de comandas, CRUD de itens e geração de relatórios operacionais. Desenvolvido com arquitetura moderna e foco em performance, usabilidade e automação de processos.",
      category: ["Full Stack", "Automation", "Web Development"],
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma ORM", "tRPC"],
      demo: "https://comida-portuguesa.vercel.app/",
      github: "https://github.com/Henrique-Givisiez/Projeto-Comida-Portuguesa"
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 mt-15 mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projetos</h2>
            <div className="w-30 h-1 gradient-primary mx-auto rounded-full mb-5" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça meus projetos de engenharia de dados, FinOps e desenvolvimento full-stack que conectam performance técnica a impacto real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-smooth hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  {project.category.map((cat, catIndex) => (
                    <Badge
                      key={catIndex}
                      variant="secondary"
                      className="mb-3 mr-2"
                    >
                      {cat}
                    </Badge>
                  ))}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
