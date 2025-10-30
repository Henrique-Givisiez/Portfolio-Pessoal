"use client";
import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "~/hooks/use-toast";
import { useLanguage } from "~/i18n/LanguageProvider";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // aqui você enviaria os dados p/ backend
    toast({
      title: t("contact.toast.success.title"),
      description: t("contact.toast.success.desc"),
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="scroll-mt-24 md:scroll-mt-28 bg-gradient-subtle mb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("contact.title")}
            </h2>
            <div className="w-30 h-1 gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.lead")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-card rounded-xl border border-border p-8 animate-slide-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t("contact.form.name.label")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t("contact.form.name.placeholder")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t("contact.form.email.label")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("contact.form.email.placeholder")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t("contact.form.message.label")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("contact.form.message.placeholder")}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-primary text-white hover:opacity-90 transition-smooth cursor-pointer hover-lift"
                  size="lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {t("contact.form.submit")}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-in" style={{ animationDelay: "100ms" }}>
              <div className="bg-card rounded-xl border border-border p-8">
                <h3 className="text-xl font-semibold mb-6">
                  {t("contact.info.title")}
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:lucogds@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>lucogds@gmail.com</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/henrique-givisiez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <span>linkedin.com/in/henrique-givisiez</span>
                  </a>

                  <a
                    href="https://github.com/henrique-givisiez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <Github className="h-5 w-5" />
                    </div>
                    <span>github.com/henrique-givisiez</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-primary rounded-xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-3">
                  {t("contact.banner.title")}
                </h3>
                <p className="text-white/90">
                  {t("contact.banner.body")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
