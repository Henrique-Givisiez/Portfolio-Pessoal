// src/app/layout.tsx
import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { cookies } from "next/headers";
import { LanguageProvider, type Lang } from "~/i18n/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Henrique Givisiez",
  description: "Engenharia de Dados, Cloud e FinOps",
  icons: { icon: "/favicon.ico" },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const cookieLang = (cookieStore.get("lang")?.value === "en" ? "en" : "pt") as Lang;

  return (
    <html lang={cookieLang} className={inter.variable} suppressHydrationWarning>
      <body>
        <LanguageProvider initialLang={cookieLang}>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
