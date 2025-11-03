const pt = {
  // pt.tsx
    nav: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    skills: "Habilidades",
    experience: "Experiência",
    contact: "Contato",
    language: "Idioma",
    },

  hero: {
    title: "Engenharia de Dados, Cloud e FinOps",
    // versão rica com spans
    subtitle: Object.assign(
      ({ Em }: { Em: React.ComponentType<{ children: React.ReactNode }> }) => (
        <>
          Engenheiro de Dados especializado em <Em>Cloud</Em>, <Em>FinOps</Em> e <Em>automação de pipelines</Em>. Transformando dados em decisões.
        </>
      ),
      { __plain: "Engenheiro de Dados especializado em Cloud, FinOps e automação de pipelines. Transformando dados em decisões." }
    ),
    cta_about: "Sobre mim",
    cta_download_cv: "Baixar CV",
    full_name: "Henrique Givisiez dos Santos",
    cv_path: "/cv/Currículo - Henrique Givisiez.pdf",
  },
  about: {
  title: "Sobre mim",
  cta_contact: "Vamos conversar",

  // parágrafo com marcação
  intro: Object.assign(
    ({ Em }: { Em: React.ComponentType<{ children: React.ReactNode }> }) => (
      <>
        Sou um Engenheiro de Dados apaixonado por criar soluções eficientes,
        escaláveis e baseadas em nuvem. Meu foco é unir <Em>Engenharia de Dados</Em> e{" "}
        <Em>FinOps</Em> para otimizar desempenho e custo em ambientes multicloud.
      </>
    ),
    {
      __plain:
        "Sou um Engenheiro de Dados apaixonado por criar soluções eficientes, escaláveis e baseadas em nuvem. Meu foco é unir Engenharia de Dados e FinOps para otimizar desempenho e custo em ambientes multicloud.",
    }
  ),

  bullets: [
    Object.assign(
      ({ Strong }: { Strong: React.ComponentType<{ children: React.ReactNode }> }) => (
        <>
          Experiência prática no design de <Strong>arquiteturas ponta a ponta</Strong> — da
          modelagem Lakehouse e ETL ao desenvolvimento de dashboards e monitoramento de custos.
        </>
      ),
      { __plain: "Experiência prática no design de arquiteturas ponta a ponta — da modelagem Lakehouse e ETL ao desenvolvimento de dashboards e monitoramento de custos." }
    ),
    Object.assign(
      ({ Strong }: { Strong: React.ComponentType<{ children: React.ReactNode }> }) => (
        <>
          Construí <Strong>data pipelines automatizados</Strong> para AWS e Azure, com visibilidade quase em tempo real dos gastos e métricas operacionais.
        </>
      ),
      { __plain: "Construí data pipelines automatizados para AWS e Azure, com visibilidade quase em tempo real dos gastos e métricas operacionais." }
    ),
    Object.assign(
      ({ Strong, Code }: {
        Strong: React.ComponentType<{ children: React.ReactNode }>;
        Code: React.ComponentType<{ children: React.ReactNode }>;
      }) => (
        <>
          Também lidero projetos <Strong>full-stack</Strong> com <Code>Next.js (T3 Stack)</Code> e{" "}
          <Code>Prisma ORM</Code>, do design ao deployment.
        </>
      ),
      { __plain: "Também lidero projetos full-stack com Next.js (T3 Stack) e Prisma ORM, do design ao deployment." }
    ),
  ],

  cards: {
    data_engineering: {
      title: "Engenharia de Dados",
      desc: "Pipelines escaláveis e arquiteturas modernas",
    },
    cloud: {
      title: "Cloud",
      desc: "AWS, Azure e soluções distribuídas",
    },
    finops: {
      title: "FinOps",
      desc: "Otimização de custos e governança financeira",
    },
    dev_auto: {
      title: "Dev & Automação",
      desc: "Web, DevOps, CI/CD e automação de processos",
    },
  },
},
projects: {
  title: "Projetos",
  lead:
    "Conheça meus projetos de engenharia de dados, FinOps e desenvolvimento full-stack que conectam performance técnica a impacto real.",

  buttons: {
    code: "Code",
    demo: "Demo",
  },

  categories: {
    data_engineering: "Data Engineering",
    data_analytics: "Data Analytics",
    governance: "Governança",
    finops: "FinOps",
    cloud: "Cloud",
    full_stack: "Full Stack",
    automation: "Automação",
    web_dev: "Web Development",
  },

  items: {
    tcu_suppliers: {
      title: "Fiscalização de Fornecedores - TCU",
      description:
        "ETL completo integrando dados do Azure Boards ao Microsoft Fabric, automatizando a extração e transformação de indicadores de desempenho de fornecedores. Dashboards no Power BI permitem monitorar conformidade contratual, prazos e eficiência operacional.",
        demo: "",
      github: "",
    },
    multicloud_costs: {
      title: "Custos Multicloud (AWS + Azure + GCP) - TCU",
      description:
        "Pipeline para integração e padronização de custos multicloud, consolidando faturas em um Lakehouse no Microsoft Fabric. Métricas DAX para variação mensal, alocação e oportunidades de otimização FinOps em painéis no Power BI.",
        demo: "",
      github: "",
    },
    exec_dashboard: {
      title: "Dashboard Estratégico – TCU",
      description:
        "Painel executivo com visão unificada de custos multicloud: variação mensal, acumulado, economia potencial e distribuição por provedor/produto, com narrativa de insights e filtros dinâmicos.",
        demo: "",
      github: "",
    },
    gmaps_routes: {
      title: "Análise de Rotas com Google Maps - Pessoal",
      description:
        "ETL automatizado coletando tráfego via Google Maps Routes API (cada 10 min por uma semana). Processamento em PySpark/Microsoft Fabric e dashboard em Power BI para padrões de congestionamento e horários de pico.",
      demo: "",
      github: "",
    },
    roma_struct: {
      title: "Projeto ROMA - Struct",
      description:
        "Sistema web completo para gestão de restaurante (T3 Stack: Next.js, tRPC, Prisma, Tailwind, PostgreSQL). Pedidos, cardápio, relatórios diários, autenticação e exportação, com práticas ágeis e foco no usuário.",
      demo: "",
      github: "",
    },
    comida_portuguesa: {
      title: "Comida Portuguesa com Certeza - Pessoal",
      description:
        "Plataforma completa para restaurante fictício: vitrine e pedidos do cliente + painel administrativo com comandas, CRUD e relatórios. Arquitetura moderna com foco em performance e automação.",
      demo: "",
      github: "",
    },
  },
},skills: {
  title: "Habilidades",
  lead:
    "Veja meu conjunto de tecnologias e ferramentas para construir soluções de dados robustas e escaláveis.",

  categories: {
    data_engineering: {
      title: "Engenharia de Dados",
    },
    cloud: {
      title: "Cloud",
    },
    finops: {
      title: "FinOps",
    },
    dev_automation: {
      title: "Dev & Automação",
    },
  },
},experience: {
  title: "Trajetória",
  lead: "Conheça minha trajetória acadêmica e profissional",

  items: {
    unb_comp: {
      title: "Engenharia de Computação",
      organization: "Universidade de Brasília (UnB)",
      period: "jun/2021 - jun/2026",
      location: "Brasília, DF",
      description: "",
      highlights_json: JSON.stringify([
        "TCC: Mitigações contra ataques Economic Denial of Sustainability",
        "Gerente de Projetos da Struct - Soluções Web",
      ]),
    },

    sigma_monitor: {
      title: "Monitor de Física",
      organization: "Centro Educacional Sigma",
      period: "jun/2022 - jun/2023",
      location: "Brasília, DF",
      description: "",
      highlights_json: JSON.stringify([
        "Ministrei aulas e plantões simplificando conceitos complexos para o ensino médio",
        "Elaborei exercícios preparatórios com foco em raciocínio lógico e resolução de problemas",
        "Apoiei docentes na preparação de materiais e correção de avaliações com feedback construtivo",
      ]),
    },

    bb_intern: {
      title: "Estagiário em Engenharia",
      organization: "Banco do Brasil",
      period: "jun/2023 - fev/2025",
      location: "Brasília, DF",
      description: "",
      highlights_json: JSON.stringify([
        "Automatizei processamento de plantas e documentos em Python, reduzindo tempo de busca em 80%",
        "Planilhas analíticas integradas a Python para previsão orçamentária, aumentando precisão e reduzindo retrabalho",
        "Melhorias de fluxo com base em dados, elevando controle e eficiência em projetos",
      ]),
    },

    tcu_finops_intern: {
      title: "Estagiário em Cloud & FinOps",
      organization: "Tribunal de Contas da União (TCU)",
      period: "fev/2025 - Atualmente",
      location: "Brasília, DF",
      description: "",
      highlights_json: JSON.stringify([
        "Arquitetura de dados no Microsoft Fabric para centralizar custos de AWS, Azure e GCP; ETL com Power Automate e Python",
        "Lakehouse no Fabric para dados do Azure Boards (fornecedores/contratos)",
        "Relatórios interativos no Power BI (DAX, dataflows) com KPIs de FinOps",
        "Ingestão e limpeza em lote com Python (PySpark + Pandas + Requests)",
      ]),
    },

    struct_pm: {
      title: "Desenvolvedor Web & Gerente de Projetos",
      organization: "Struct - Soluções Web",
      period: "jun/2025 - Atualmente",
      location: "Brasília, DF",
      description: "",
      highlights_json: JSON.stringify([
        "Mentoria técnica, code review (PRs) e garantia de qualidade",
        "Liderança do Projeto ROMA (ciclo completo e interface com cliente)",
        "Desenvolvimento com T3 Stack; modelagem com Prisma e arquitetura front/back",
      ]),
    },

    focp: {
      title: "FinOps Certified Practitioner",
      organization: "FinOps Foundation",
      period: "out/2025",
      location: "",
      description:
        "Certificação em práticas de gestão financeira de cloud, otimização de custos e governança de recursos em ambientes cloud.",
    },
  },
},contact: {
  title: "Contato",
  lead: "Estou sempre aberto a novos projetos, colaborações e oportunidades. Entre em contato!",

  form: {
    name: { label: "Nome", placeholder: "Seu nome" },
    email: { label: "Email", placeholder: "seu@email.com" },
    message: { label: "Mensagem", placeholder: "Sua mensagem..." },
    submit: "Enviar Mensagem",
  },

  toast: {
    success: {
      title: "Mensagem enviada!",
      desc: "Obrigado pelo contato. Responderei em breve.",
    },
  },

  info: {
    title: "Informações de Contato",
  },

  banner: {
    title: "Disponível para oportunidades",
    body:
      "Atualmente buscando novas oportunidades em engenharia de dados, cloud e FinOps. Vamos construir algo incrível juntos!",
  },
},




};
export default pt;
