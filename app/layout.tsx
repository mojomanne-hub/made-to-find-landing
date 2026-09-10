import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Made to Find — Nie wieder suchen.",
  description: "Dein digitales Gedächtnis für alles, was dir wichtig ist."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
