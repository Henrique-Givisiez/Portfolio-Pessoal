// src/app/layout.tsx
import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // casa com o token do @theme
  display: "swap",
});

export const metadata = {
  title: "Henrique Givisiez",
  description: "Engenharia de Dados, Cloud e FinOps",
   icons: {
    icon: "/favicon.ico", // ou "/icon.png"
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
