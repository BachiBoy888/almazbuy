// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Базовый адрес сайта (важно для абсолютных URL в метаданных)
  metadataBase: new URL("https://tour.almazbuy.com"),

  // Заголовок страницы и шаблон для внутренних страниц
  title: {
    default: "Инвест-тур в Дубай — Almazbuy",
    template: "%s — Almazbuy",
  },

  description:
    "Премиальный инвест-тур в Дубай: перелёт, топ-отели (Atlantis/The Royal Atlantis), встречи с девелоперами, показы объектов и юридическое сопровождение.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Almazbuy",
    title: "Инвест-тур в Дубай — Almazbuy",
    description:
      "Перелёт, лучшие отели, встречи с застройщиками, показы и оформление сделок под ключ.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Инвест-тур Almazbuy — Дубай",
      },
    ],
    locale: "ru_RU",
  },

  twitter: {
    card: "summary_large_image",
    title: "Инвест-тур в Дубай — Almazbuy",
    description:
      "Премиальный инвест-тур: перелёт, отели Atlantis/The Royal Atlantis, встречи с застройщиками и оформление.",
    images: ["/og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  // (опционально) цвет адресной строки на мобилках
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
