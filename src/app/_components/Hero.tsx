"use client"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import profilePic from "~/app/assets/foto-perfil.jpg";
import heroBg from "~/app/assets/hero-bg.jpg"
import { Button } from "./ui/button";
import { toast } from "sonner";

const CV_PATH = "/cv/Currículo - Henrique Givisiez.pdf";

const Hero = () => {
  const DownloadCurriculo = async () => {
    // Tenta baixar como blob (melhor compatibilidade)
    try {
      const res = await fetch(CV_PATH);
      if (!res.ok) throw new Error("Falha no fetch do PDF");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "Henrique-Givisiez-CV.pdf"; // nome do arquivo ao salvar
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1500);
      toast.success("Currículo baixado!");
    } catch {
      toast.error("Não foi possível baixar o currículo.");
      // Fallback (ex.: iOS abre em nova aba)
      window.open(CV_PATH, "_blank");
    }
  };
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
        <img
          src={heroBg.src}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="mt-10 container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="relative mb-5 flex justify-center animate-fade-in">
          {/* Halo animado */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-[conic-gradient(var(--color-primary)_0deg,var(--color-accent,180_80%_50%)_120deg,var(--color-primary)_240deg,var(--color-accent,180_80%_50%)_360deg)] animate-spin-slow blur-[1px] opacity-70" />
          </div>

          {/* Moldura principal */}
          <div className="relative p-1 rounded-full bg-background/70 backdrop-blur-lg ring-1 ring-border shadow-lg ring-primary/70">
            <img
              src={profilePic.src}
              alt="Foto de perfil de Henrique Givisiez"
              className="h-60 w-60 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-foreground">
              Henrique Givisiez dos Santos
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-medium text-foreground/90 tracking-wide max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_3px_hsl(var(--color-primary)/0.25)]">
              Engenheiro de Dados especializado em <span className="text-primary">Cloud</span>, <span className="text-primary">FinOps</span> e <span className="text-primary">automação de pipelines</span>. Transformando dados em decisões.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              asChild
            >
              <a href="#about">
                Sobre mim
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 py-3 rounded-xl border border-border text-foreground hover:bg-muted transition-colors cursor-pointer"
              onClick={DownloadCurriculo}
            >
              <Download className="mr-2 h-5 w-5" />
              Baixar CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8 mb-3">
            <a
              href="https://www.linkedin.com/in/henrique-givisiez/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth hover-lift"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Henrique-Givisiez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth hover-lift"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:lucogds@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth hover-lift"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
