import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Made to Find — Nie wieder suchen.",
  description: "Dein digitales Gedächtnis für alles, was dir wichtig ist."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8085473899262156"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}