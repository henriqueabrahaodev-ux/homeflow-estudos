import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/ui/Providers";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "HomeFlow — A casa toda em sincronia.",
  description:
    "Finanças, calendário e tarefas — todo mundo vê a mesma coisa. Organize sua família com o HomeFlow.",
  openGraph: {
    title: "HomeFlow — A casa toda em sincronia.",
    description: "Finanças, calendário e tarefas para toda a família.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "dark",
        syne.variable,
        inter.variable,
        jetbrainsMono.variable
      )}
    >
      <body className="antialiased font-body bg-background text-text-base">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
