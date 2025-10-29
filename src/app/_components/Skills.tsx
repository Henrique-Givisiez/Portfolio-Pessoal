import { Database, Cloud, DollarSign, Code, GitBranch, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Database,
      title: "Data Engineering",
      skills: [
        "Python",
        "Apache Spark",
        "Airflow",
        "SQL/NoSQL",
        "ETL/ELT",
        "Data Warehousing",
        "Kafka",
        "Delta Lake",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: [
        "AWS",
        "Azure",
        "GCP",
        "Terraform",
        "Docker",
        "Kubernetes",
        "CloudFormation",
        "Serverless",
      ],
    },
    {
      icon: DollarSign,
      title: "FinOps & Governance",
      skills: [
        "Cost Optimization",
        "Budget Management",
        "Resource Tagging",
        "FinOps Framework",
        "Azure Cost Management",
        "AWS Cost Explorer",
        "Showback/Chargeback",
        "KPI Tracking",
      ],
    },
    {
      icon: Code,
      title: "Software & Automation",
      skills: [
        "Python",
        "Java",
        "JavaScript/TypeScript",
        "React",
        "Node.js",
        "FastAPI",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      icon: GitBranch,
      title: "DevOps & CI/CD",
      skills: [
        "Git/GitHub",
        "GitHub Actions",
        "Jenkins",
        "Azure DevOps",
        "GitLab CI",
        "Infrastructure as Code",
        "Monitoring",
        "Logging",
      ],
    },
    {
      icon: Brain,
      title: "Data Science & ML",
      skills: [
        "Machine Learning",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Data Visualization",
        "Statistical Analysis",
        "Feature Engineering",
        "Model Deployment",
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 md:scroll-mt-28 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Habilidades</h2>
            <div className="w-40 h-1 gradient-primary mx-auto rounded-full mb-5" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conjunto de tecnologias e ferramentas para construir soluções de
              dados robustas e escaláveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-smooth hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg gradient-primary">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
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
