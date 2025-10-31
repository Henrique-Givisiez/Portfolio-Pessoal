const en = {
  // en.tsx
nav: {
  home: "Home",
  about: "About",
  projects: "Projects",
  skills: "Skills",
  experience: "Experience",
  contact: "Contact",
  language: "Language",
},

   hero: {
    title: "Data Engineering, Cloud & FinOps",
    subtitle: Object.assign(
      ({ Em }: { Em: React.ComponentType<{ children: React.ReactNode }> }) => (
        <>
          Data Engineer specialized in <Em>Cloud</Em>, <Em>FinOps</Em>, and <Em>pipeline automation</Em>. Turning data into decisions.
        </>
      ),
      { __plain: "Data Engineer specialized in Cloud, FinOps, and pipeline automation. Turning data into decisions." }
    ),
    cta_about: "About me",
    cta_download_cv: "Download CV",
    full_name: "Henrique Givisiez dos Santos",
    cv_path: "/cv/Curriculum - Henrique Givisiez.pdf",
  },
  about: {
  title: "About me",
  cta_contact: "Let’s talk",

  intro: Object.assign(
    ({ Em }: { Em: React.ComponentType<{ children: React.ReactNode }> }) => (
      <>
        I’m a Data Engineer passionate about building efficient, scalable, cloud-based solutions.
        My focus bridges <Em>Data Engineering</Em> and <Em>FinOps</Em> to optimize performance and cost across multicloud environments.
      </>
    ),
    {
      __plain:
        "I’m a Data Engineer passionate about building efficient, scalable, cloud-based solutions. My focus bridges Data Engineering and FinOps to optimize performance and cost across multicloud environments.",
    }
  ),

  bullets: [
    Object.assign(
      ({ Strong }: { Strong: React.ComponentType<{ children: React.ReactNode }> }) => (
        <>
          Hands-on experience designing <Strong>end-to-end architectures</Strong> — from Lakehouse modeling and ETL to dashboards and cost monitoring.
        </>
      ),
      { __plain: "Hands-on experience designing end-to-end architectures — from Lakehouse modeling and ETL to dashboards and cost monitoring." }
    ),
    Object.assign(
      ({ Strong }: { Strong: React.ComponentType<{ children: React.ReactNode }> }) => (
        <>
          Built <Strong>automated data pipelines</Strong> for AWS and Azure, enabling near real-time visibility into cloud spend and operational metrics.
        </>
      ),
      { __plain: "Built automated data pipelines for AWS and Azure, enabling near real-time visibility into cloud spend and operational metrics." }
    ),
    Object.assign(
      ({ Strong, Code }: {
        Strong: React.ComponentType<{ children: React.ReactNode }>;
        Code: React.ComponentType<{ children: React.ReactNode }>;
      }) => (
        <>
          I also lead <Strong>full-stack</Strong> projects with <Code>Next.js (T3 Stack)</Code> and{" "}
          <Code>Prisma ORM</Code>, from design to deployment.
        </>
      ),
      { __plain: "I also lead full-stack projects with Next.js (T3 Stack) and Prisma ORM, from design to deployment." }
    ),
  ],

  cards: {
    data_engineering: {
      title: "Data Engineering",
      desc: "Scalable pipelines and modern architectures",
    },
    cloud: {
      title: "Cloud",
      desc: "AWS, Azure, and distributed solutions",
    },
    finops: {
      title: "FinOps",
      desc: "Cost optimization and financial governance",
    },
    dev_auto: {
      title: "Dev & Automation",
      desc: "Web, DevOps, CI/CD, and process automation",
    },
  },
},projects: {
  title: "Projects",
  lead:
    "Explore my data engineering, FinOps, and full-stack projects that connect technical performance to real impact.",

  buttons: {
    code: "Code",
    demo: "Demo",
  },

  categories: {
    data_engineering: "Data Engineering",
    data_analytics: "Data Analytics",
    governance: "Governance",
    finops: "FinOps",
    cloud: "Cloud",
    full_stack: "Full Stack",
    automation: "Automation",
    web_dev: "Web Development",
  },

  items: {
    tcu_suppliers: {
      title: "Supplier Oversight - TCU",
      description:
        "End-to-end ETL integrating Azure Boards data into Microsoft Fabric, automating extraction and transformation of vendor performance indicators. Power BI dashboards track contractual compliance, deadlines, and operational efficiency.",
    },
    multicloud_costs: {
      title: "Multicloud Costs (AWS + Azure + GCP) - TCU",
      description:
        "Data pipeline to integrate and normalize multicloud costs, consolidating invoices into a single Lakehouse on Microsoft Fabric. Custom DAX metrics for MoM variance, allocation, and FinOps optimization opportunities in Power BI.",
    },
    exec_dashboard: {
      title: "Executive Dashboard – TCU",
      description:
        "Executive view of multicloud costs: monthly variance, cumulative spend, potential savings, and distribution by provider/product, with auto-insights narrative and dynamic filters.",
    },
    gmaps_routes: {
      title: "Route Analysis with Google Maps – Personal",
      description:
        "Automated ETL collecting traffic via Google Maps Routes API (every 10 min for one week). Processed in PySpark/Microsoft Fabric and visualized in Power BI to reveal congestion patterns and peak-hour impact.",
      demo: "",
    },
    roma_struct: {
      title: "ROMA Project – Struct",
      description:
        "Full web system for restaurant management (T3 Stack: Next.js, tRPC, Prisma, Tailwind, PostgreSQL). Orders, menu, daily reports, auth, and exports — delivered with agile practices and user focus.",
      demo: "",
    },
    comida_portuguesa: {
      title: "Comida Portuguesa com Certeza – Personal",
      description:
        "End-to-end platform for a fictional restaurant: customer-facing menu & orders plus an admin side with tabs, CRUD, and operational reports. Modern architecture focused on performance and automation.",
      demo: "",
      github: "",
    },
  },
},skills: {
  title: "Skills",
  lead:
    "Explore my set of technologies and tools for building robust and scalable data solutions.",

  categories: {
    data_engineering: {
      title: "Data Engineering",
    },
    cloud: {
      title: "Cloud",
    },
    finops: {
      title: "FinOps",
    },
    dev_automation: {
      title: "Dev & Automation",
    },
  },
},experience: {
  title: "Experience & Education",
  lead: "A quick look at my academic and professional journey",

  items: {
    unb_comp: {
      title: "Computer Engineering",
      organization: "University of Brasília (UnB)",
      period: "jun/2021 - jun/2026",
      location: "Brasília, Brazil",
      description: "",
      highlights_json: JSON.stringify([
        "Thesis: Mitigations against Economic Denial of Sustainability (EDoS) attacks",
        "Project Manager at Struct - Soluções Web",
      ]),
    },

    sigma_monitor: {
      title: "Physics Tutor",
      organization: "Centro Educacional Sigma",
      period: "jun/2022 - jun/2023",
      location: "Brasília, Brazil",
      description: "",
      highlights_json: JSON.stringify([
        "Delivered classes and Q&A sessions, simplifying complex physics topics for high school students",
        "Created preparatory exercises focusing on logic and problem-solving",
        "Supported teachers with materials and graded exams with constructive feedback",
      ]),
    },

    bb_intern: {
      title: "Process Engineering & Automation Intern",
      organization: "Banco do Brasil",
      period: "jun/2023 - feb/2025",
      location: "Brasília, Brazil",
      description: "",
      highlights_json: JSON.stringify([
        "Python scripts to automate processing of technical drawings/docs, cutting search time by 80%",
        "Excel analytics integrated with Python for budget forecasting, improving accuracy and reducing rework",
        "Process improvements driven by data analysis for better control and efficiency",
      ]),
    },

    tcu_finops_intern: {
      title: "Cloud & FinOps Intern",
      organization: "Federal Court of Accounts (TCU)",
      period: "feb/2025 - Present",
      description: "",
      location: "Brasília, Brazil",
      highlights_json: JSON.stringify([
        "Data architecture on Microsoft Fabric centralizing AWS/Azure/GCP costs; ETL with Power Automate and Python",
        "Fabric Lakehouse for Azure Boards data (vendors/contracts)",
        "Interactive Power BI reports (DAX, dataflows) with FinOps KPIs",
        "Batch ingestion/cleansing with Python (PySpark + Pandas + Requests)",
      ]),
    },

    struct_pm: {
      title: "Web Developer & Project Manager",
      organization: "Struct - Soluções Web",
      period: "jun/2025 - Present",
      description: "",
      location: "Brasília, Brazil",
      highlights_json: JSON.stringify([
        "Technical mentoring, PR reviews, and quality assurance",
        "Led the ROMA project end-to-end and handled client communication",
        "Hands-on with the T3 Stack; Prisma data modeling and front/back architecture",
      ]),
    },

    focp: {
      title: "FinOps Certified Practitioner",
      organization: "FinOps Foundation",
      location: "",
      period: "oct/2025",
      description:
        "Certification in cloud financial management, cost optimization, and governance across cloud environments.",
    },
  },
},contact: {
  title: "Contact",
  lead: "I’m always open to new projects, collaborations, and opportunities. Get in touch!",

  form: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "you@email.com" },
    message: { label: "Message", placeholder: "Your message..." },
    submit: "Send Message",
  },

  toast: {
    success: {
      title: "Message sent!",
      desc: "Thanks for reaching out. I’ll get back to you soon.",
    },
  },

  info: {
    title: "Contact Information",
  },

  banner: {
    title: "Open to opportunities",
    body:
      "Currently looking for new opportunities in data engineering, cloud, and FinOps. Let’s build something great together!",
  },
},




};
export default en;
