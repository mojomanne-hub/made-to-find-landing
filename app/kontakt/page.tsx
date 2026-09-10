import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search } from "../../components/icons";

export const metadata: Metadata = {
  title: "Kontakt — Made to Find",
  description: "Nimm Kontakt mit Made to Find auf."
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#08111f] px-6 py-7 text-[#f4f8ff]">
      <header className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-jakarta)] text-lg font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-gradient-to-br from-[#6eb3ff] to-[#4272f7] shadow-[0_4px_14px_#4c86ff55]"><Search size={17} /></span>
          made<span className="text-[#76c9ff]">to</span>find
        </Link>
        <Link href="/" className="text-sm text-[#9aabc6] transition hover:text-white">Zur Startseite</Link>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-110px)] max-w-5xl items-center justify-center py-20">
        <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[#b9d2ff1f] bg-[#101d30] p-8 text-center shadow-2xl sm:p-14">
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#4d8dff22] blur-3xl" />
          <div className="relative">
            <p className="mb-4 text-xs font-bold uppercase tracking-[.14em] text-[#75bfff]">Wir sind für dich da</p>
            <h1 className="font-[family-name:var(--font-jakarta)] text-4xl font-extrabold tracking-[-.06em] sm:text-6xl">Kontakt</h1>
            <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-[#9aabc6] sm:text-lg">Du hast Fragen, Feedback oder eine Idee für Made to Find? Schreib uns einfach eine E-Mail.</p>
            <a href="mailto:madetofind@web.de" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#639eff] to-[#4177ed] px-5 py-3 text-sm font-bold shadow-[0_10px_25px_rgba(60,118,245,.26)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(60,118,245,.4)]">madetofind@web.de <ArrowRight size={17} /></a>
            <p className="mt-5 text-xs text-[#768ba9]">Wir melden uns so schnell wie möglich bei dir.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
