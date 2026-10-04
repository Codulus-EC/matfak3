import type { CSSProperties } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { withBasePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Математический факультет ВГУ",
  description: "Математический факультет Воронежского государственного университета",
};

const siteImageVariables = {
  "--vsu-campus-image": `url("${withBasePath("/images/vsu-campus.jpg")}")`,
  "--olympiad-image": `url("${withBasePath("/images/news/olympiad-2026.jpg")}")`,
} as CSSProperties;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body style={siteImageVariables}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
