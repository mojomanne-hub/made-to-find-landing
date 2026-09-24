"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AppScreen } from "../components/app-screen";
import { ArrowRight, Check, ChevronRight, Folder, MapPin, Search } from "../components/icons";

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .2 }, transition: { duration: .6 } };

const APP_URL = "https://made-to-find.vercel.app";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=de.madetofind.app";
const CONTACT_EMAIL = "madetofind@web.de";

function Logo() { return <a href="#top" className="logo"><span className="logo-mark"><Search size={17} /></span><span>made<span>to</span>find</span></a>; }

function Button({ children, secondary = false, href }: { children: React.ReactNode; secondary?: boolean; href?: string }) {
  return <a href={href ?? `${APP_URL}/register`} className={secondary ? "button secondary" : "button"}>{children}{!secondary && <ArrowRight size={17} />}</a>;
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: React.ReactNode; copy?: string }) {
  return <motion.div {...fade} className="section-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</motion.div>;
}

function ContactLink() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="contact-wrap">
      <a href="#" onClick={(e) => { e.preventDefault(); setOpen(!open); }}>Kontakt</a>
      {open && (
        <div className="contact-pop">
          <span>{CONTACT_EMAIL}</span>
          <button type="button" onClick={copyEmail}>{copied ? "Kopiert ✓" : "Adresse kopieren"}</button>
          <a href={`mailto:${CONTACT_EMAIL}`}>Im Mail-Programm öffnen</a>
        </div>
      )}
    </div>
  );
}

function PlayStoreBadge() {
  return (
    <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex" }}>
      <img
        src="https://play.google.com/intl/en_us/badges/static/images/badges/de_badge_web_generic.png"
        alt="Jetzt bei Google Play"
        style={{ height: "54px", width: "auto" }}
      />
    </a>
  );
}

export default function Home() {
  return <main id="top">
    <nav className="nav">
      <Logo />
      <div className="nav-links">
        <a href="#funktion">So funktioniert&apos;s</a>
        <div className="cta-stack">
          <Button>Kostenlos in der Web-Version starten</Button>
          <small className="cta-hint">(für iOS-Nutzer)</small>
        </div>
      </div>
    </nav>

    <section className="hero"><div className="hero-glow" /><div className="hero-grid">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <div className="pill"><span className="dot" /> Dein digitales Gedächtnis für Zuhause</div>
        <h1>Nie wieder<br /><em>suchen.</em></h1>
        <p>Made to Find merkt sich, wo deine Dinge liegen. Von Werkzeug über Dokumente bis zur Weihnachtsdeko — finde alles in Sekunden wieder.</p>
        <div className="hero-buttons">
          <div className="cta-stack">
            <Button>Kostenlos in der Web-Version starten</Button>
            <small className="cta-hint">(für iOS-Nutzer)</small>
          </div>
          <Button secondary href="#funktion">So funktioniert&apos;s <ChevronRight size={17} /></Button>
        </div>
        <div style={{ marginTop: "16px" }}>
          <PlayStoreBadge />
        </div>
        <div className="trust"><span className="avatars"><i>J</i><i>M</i><i>L</i></span><span>Für alle, die lieber finden als suchen.</span></div>
      </motion.div>
      <motion.div className="phone-stage" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .85, delay: .12 }}>
        <img src="/screenshots/hero-promo.png" alt="Made to Find App - Gegenstände sofort wiederfinden" className="hero-shot" />
      </motion.div>
    </div></section>

    <section className="proof"><div><strong>Alles hat seinen Platz.</strong><span>Und du weißt jederzeit, wo er ist.</span></div><div className="proof-items"><span><b>∞</b> Gegenstände</span><span><b>⚡</b> Schnell gefunden</span><span><b>↗</b> Überall verfügbar</span></div></section>

    <section className="section problem"><div className="problem-card"><div className="scribble">?</div><p className="eyebrow">Kommt dir das bekannt vor?</p><h2>„Wo ist eigentlich<br />der Akkuschrauber?"</h2><div className="question-list"><span>In welchem Karton ist die Weihnachtsdeko?</span><span>Wer hat den Ersatzschlüssel?</span><span>Wo liegen die Batterien?</span></div></div><motion.div {...fade} className="problem-copy"><p className="eyebrow">Suchen kostet Zeit</p><h2>Du besitzt Hunderte von Dingen.<br /><em>Du solltest nicht überlegen müssen, wo sie liegen.</em></h2><p>Jeder sucht. Niemand kann sich alles merken. Made to Find übernimmt das für dich — damit du schnell wieder bei dem bist, was wirklich zählt.</p><a className="text-link" href="#funktion">So einfach funktioniert&apos;s <ArrowRight size={16} /></a></motion.div></section>

    <section id="funktion" className="section how"><SectionTitle eyebrow="In drei einfachen Schritten" title={<>Alles im Blick.<br /><em>Ganz ohne Nachdenken.</em></>} copy="Lege Orte an, speichere deine Gegenstände und finde sie genau dann, wenn du sie brauchst." /><div className="steps">
      <motion.div {...fade} className="step"><span className="step-number">01</span><span className="step-icon"><MapPin size={19} /></span><h3>Ablageort anlegen</h3><p>Erstelle Orte wie Zuhause, Garage oder Keller — bei Bedarf sogar mit Fächern und Ebenen, z. B. für Regale.</p><div className="mini-screen"><AppScreen variant="locations" /></div></motion.div>
      <motion.div {...fade} transition={{ duration: .5, delay: .1 }} className="step"><span className="step-number">02</span><span className="step-icon"><Folder size={19} /></span><h3>Gegenstände speichern</h3><p>Lege fest, was wo liegt — mit Foto, Beschreibung und genauem Ablageort bis ins Fach.</p><div className="mini-screen"><AppScreen variant="items" /></div></motion.div>
      <motion.div {...fade} transition={{ duration: .5, delay: .2 }} className="step"><span className="step-number">03</span><span className="step-icon"><Search size={19} /></span><h3>Sofort wiederfinden</h3><p>Suche nach dem Gegenstand und sieh sofort, wo genau er liegt.</p><div className="mini-screen"><AppScreen variant="search" /></div></motion.div>
    </div></section>

    <section className="section features"><div className="features-copy"><p className="eyebrow">Neu: Noch mehr Struktur</p><h2>Bis ins letzte Fach<br /><em>organisiert.</em></h2><p>Unterteile einen Ablageort in Fächer oder Ebenen — perfekt für Regale, Schränke oder Kisten mit mehreren Ebenen. So findest du nicht nur den richtigen Ort, sondern direkt das richtige Fach.</p></div><motion.div {...fade} className="features-visual"><img src="/screenshots/fach-ebene-promo.png" alt="Ablageort mit Fächern und Ebenen in Made to Find anlegen" className="feature-shot" /><small className="ai-note">Symbolbild, mit KI erstellt</small></motion.div></section>

    <section className="section collaborate"><motion.div {...fade} className="collab-visual"><div className="shared-cards"><div className="shared-card"><div className="shared-head"><span className="house">⌂</span><div><b>Unser Zuhause</b><small>12 Ablageorte · 84 Gegenstände</small></div></div><div className="shared-list"><span><i className="avatar one">J</i> Jana hat <b>3 Gegenstände</b> ergänzt</span><span><i className="avatar two">M</i> Max hat <b>Garage</b> aktualisiert</span></div></div><div className="shared-card club-card"><div className="shared-head"><span className="house">⚽</span><div><b>Mein Verein</b><small>8 Mitglieder · 46 Gegenstände</small></div></div><div className="shared-list"><span><i className="avatar three">T</i> Tim hat <b>Trikots</b> ergänzt</span><span><i className="avatar four">S</i> Sarah hat <b>Materialraum</b> aktualisiert</span></div></div></div></motion.div><div className="collab-copy"><p className="eyebrow">Gemeinsam organisiert</p><h2>Ordnung funktioniert<br /><em>zusammen besser.</em></h2><p>Teile Ablageorte und Gegenstände mit deiner Familie, deinem Partner, deinem Team oder deinem Verein. So weiß jeder sofort, wo etwas liegt — ganz ohne Nachfragen.</p><ul><li><Check size={16} /> Gemeinsam auf dem neuesten Stand</li><li><Check size={16} /> Einfach teilen und verwalten</li><li><Check size={16} /> Weniger Fragen, weniger Suchen</li></ul></div></section>

    <section id="einsatz" className="section use-cases"><SectionTitle eyebrow="Für alles, was dir wichtig ist" title={<>Ein Ort für <em>deine ganze Welt.</em></>} /><div className="use-grid">{[["⌂", "Zuhause", "Dokumente, Deko, Spielzeug und alles dazwischen."], ["⌑", "Hobby & Werkstatt", "Werkzeug, Maschinen und Ersatzteile griffbereit."], ["▣", "Büro", "Technik, Arbeitsmittel und Unterlagen organisieren."], ["□", "Lager", "Bestände und Material mit Überblick verwalten."]].map(([icon, title, text], i) => <motion.article {...fade} transition={{ duration: .5, delay: i * .08 }} className="use-card" key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p><ArrowRight size={18} /></motion.article>)}</div></section>


    <section id="start" className="final-cta">
      <div className="cta-glow" />
      <p className="eyebrow">Alles bereit?</p>
      <h2>Finde alles.<br /><em>Jederzeit.</em></h2>
      <p>Bring Ordnung in dein Zuhause, deine Werkstatt oder dein Lager.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "8px" }}>
        <Button>Kostenlos starten</Button>
        <PlayStoreBadge />
      </div>
      <small>Einfach starten. Jederzeit den Überblick behalten.</small>
    </section>

    <footer>
      <Logo />
      <span>© {new Date().getFullYear()} Made to Find</span>
      <div>
        <a href="https://made-to-find.vercel.app/privacy">Datenschutz</a>
        <a href="/impressum">Impressum</a>
        <ContactLink />
      </div>
    </footer>
  </main>;
}
