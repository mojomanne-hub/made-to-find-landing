"use client";

import { motion } from "framer-motion";
import { AppScreen } from "../components/app-screen";
import { ArrowRight, Check, ChevronRight, Folder, MapPin, Search } from "../components/icons";

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .2 }, transition: { duration: .6 } };

const APP_URL = "https://made-to-find.vercel.app";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=app.vercel.made-to-find.twa"; // Update wenn live

function Logo() { return <a href="#top" className="logo"><span className="logo-mark"><Search size={17} /></span><span>made<span>to</span>find</span></a>; }

function Button({ children, secondary = false, href }: { children: React.ReactNode; secondary?: boolean; href?: string }) {
  return <a href={href ?? `${APP_URL}/register`} className={secondary ? "button secondary" : "button"}>{children}{!secondary && <ArrowRight size={17} />}</a>;
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: React.ReactNode; copy?: string }) {
  return <motion.div {...fade} className="section-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</motion.div>;
}

function PlayStoreBadge() {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#000",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "12px",
        textDecoration: "none",
        border: "1px solid #333",
      }}
    >
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
        <path d="M1 1.5L11 11L1 20.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M1 1.5L19 11L1 20.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4"/>
        <path d="M1 20.5L11 11L19 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7"/>
        <path d="M1 1.5L11 11L19 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7"/>
      </svg>
      <div style={{ lineHeight: 1.2 }}>
        <div style={{ fontSize: "10px", opacity: 0.7 }}>Jetzt bei</div>
        <div style={{ fontSize: "15px", fontWeight: 600 }}>Google Play</div>
      </div>
    </a>
  );
}

export default function Home() {
  return <main id="top">
    <nav className="nav">
      <Logo />
      <div className="nav-links">
        <a href="#funktion">So funktioniert&apos;s</a>
        <a href="#features">Features</a>
        <a href="#einsatz">Einsatzbereiche</a>
      </div>
      <div className="nav-actions">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            backgroundColor: "#000", color: "#fff", padding: "8px 16px",
            borderRadius: "10px", textDecoration: "none", border: "1px solid #333",
            fontSize: "13px", fontWeight: 600,
          }}
        >
          <svg width="14" height="16" viewBox="0 0 20 22" fill="none">
            <path d="M1 1.5L11 11L1 20.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M1 1.5L19 11L1 20.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4"/>
            <path d="M1 20.5L11 11L19 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7"/>
            <path d="M1 1.5L11 11L19 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7"/>
          </svg>
          Google Play Store
        </a>
        <Button>Kostenlos starten</Button>
      </div>
    </nav>

    <section className="hero"><div className="hero-glow" /><div className="hero-grid">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <div className="pill"><span className="dot" /> Dein digitales Gedächtnis für Zuhause</div>
        <h1>Nie wieder<br /><em>suchen.</em></h1>
        <p>Made to Find merkt sich, wo deine Dinge liegen. Von Werkzeug über Dokumente bis zur Weihnachtsdeko — finde alles in Sekunden wieder.</p>
        <div className="hero-buttons">
          <Button>Kostenlos starten</Button>
          <Button secondary>So funktioniert&apos;s <ChevronRight size={17} /></Button>
        </div>
        <div style={{ marginTop: "16px" }}>
          <PlayStoreBadge />
        </div>
        <div className="trust"><span className="avatars"><i>J</i><i>M</i><i>L</i></span><span>Für alle, die lieber finden als suchen.</span></div>
      </motion.div>
      <motion.div className="phone-stage" initial={{ opacity: 0, x: 40, rotate: 3 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: .85, delay: .12 }}>
        <motion.div className="float-card card-key" animate={{ y: [0, -9, 0] }} transition={{ duration: 4, repeat: Infinity }}><span className="item-icon key">⌁</span><div><b>Autoschlüssel</b><small>Flur · Kommode</small></div><Check size={16} /></motion.div>
        <motion.div className="float-card card-tool" animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity }}><span className="item-icon tool">⌑</span><div><b>Akkuschrauber</b><small>Garage · Regal 2</small></div><Check size={16} /></motion.div>
        <div className="phone"><div className="speaker" /><AppScreen /><div className="home-bar" /></div>
      </motion.div>
    </div></section>

    <section className="proof"><div><strong>Alles hat seinen Platz.</strong><span>Und du weißt jederzeit, wo er ist.</span></div><div className="proof-items"><span><b>∞</b> Gegenstände</span><span><b>⚡</b> Schnell gefunden</span><span><b>↗</b> Überall verfügbar</span></div></section>

    <section className="section problem"><div className="problem-card"><div className="scribble">?</div><p className="eyebrow">Kommt dir das bekannt vor?</p><h2>„Wo ist eigentlich<br />der Akkuschrauber?"</h2><div className="question-list"><span>In welchem Karton ist die Weihnachtsdeko?</span><span>Wer hat den Ersatzschlüssel?</span><span>Wo liegen die Batterien?</span></div></div><motion.div {...fade} className="problem-copy"><p className="eyebrow">Suchen kostet Zeit</p><h2>Du besitzt Hunderte von Dingen.<br /><em>Du solltest nicht überlegen müssen, wo sie liegen.</em></h2><p>Jeder sucht. Niemand kann sich alles merken. Made to Find übernimmt das für dich — damit du schnell wieder bei dem bist, was wirklich zählt.</p><a className="text-link" href="#funktion">So einfach funktioniert&apos;s <ArrowRight size={16} /></a></motion.div></section>

    <section id="funktion" className="section how"><SectionTitle eyebrow="In drei einfachen Schritten" title={<>Alles im Blick.<br /><em>Ganz ohne Nachdenken.</em></>} copy="Lege Orte an, speichere deine Gegenstände und finde sie genau dann, wenn du sie brauchst." /><div className="steps">
      {[{ n: "01", icon: "location", title: "Ablageort anlegen", text: "Garage, Keller, Dachboden oder die Schublade im Flur — du entscheidest.", screen: "locations" }, { n: "02", icon: "folder", title: "Gegenstand speichern", text: "Ordne Dinge einem Ort zu und ergänze hilfreiche Details.", screen: "items" }, { n: "03", icon: "search", title: "Sofort wiederfinden", text: "Ein Blick in die App genügt. Du weißt direkt, wo du suchen musst.", screen: "search" }].map((step, i) => <motion.article {...fade} transition={{ duration: .55, delay: i * .1 }} className="step" key={step.n}><span className="step-number">{step.n}</span><div className="step-icon">{step.icon === "location" ? <MapPin size={21} /> : step.icon === "folder" ? <Folder size={21} /> : <Search size={21} />}</div><h3>{step.title}</h3><p>{step.text}</p><div className="mini-screen"><AppScreen variant={step.screen as "locations" | "items" | "search"} /></div></motion.article>)}</div></section>

    <section className="section collaborate"><motion.div {...fade} className="collab-visual"><div className="shared-cards"><div className="shared-card"><div className="shared-head"><span className="house">⌂</span><div><b>Unser Zuhause</b><small>12 Ablageorte · 84 Gegenstände</small></div></div><div className="shared-list"><span><i className="avatar one">J</i> Jana hat <b>3 Gegenstände</b> ergänzt</span><span><i className="avatar two">M</i> Max hat <b>Garage</b> aktualisiert</span></div></div><div className="shared-card club-card"><div className="shared-head"><span className="house">⚽</span><div><b>Mein Verein</b><small>8 Mitglieder · 46 Gegenstände</small></div></div><div className="shared-list"><span><i className="avatar three">T</i> Tim hat <b>Trikots</b> ergänzt</span><span><i className="avatar four">S</i> Sarah hat <b>Materialraum</b> aktualisiert</span></div></div></div></motion.div><div className="collab-copy"><p className="eyebrow">Gemeinsam organisiert</p><h2>Ordnung funktioniert<br /><em>zusammen besser.</em></h2><p>Teile Ablageorte und Gegenstände mit deiner Familie, deinem Partner, deinem Team oder deinem Verein. So weiß jeder sofort, wo etwas liegt — ganz ohne Nachfragen.</p><ul><li><Check size={16} /> Gemeinsam auf dem neuesten Stand</li><li><Check size={16} /> Einfach teilen und verwalten</li><li><Check size={16} /> Weniger Fragen, weniger Suchen</li></ul></div></section>

    <section id="einsatz" className="section use-cases"><SectionTitle eyebrow="Für alles, was dir wichtig ist" title={<>Ein Ort für <em>deine ganze Welt.</em></>} /><div className="use-grid">{[["⌂", "Zuhause", "Dokumente, Deko, Spielzeug und alles dazwischen."], ["⌑", "Hobby & Werkstatt", "Werkzeug, Maschinen und Ersatzteile griffbereit."], ["▣", "Büro", "Technik, Arbeitsmittel und Unterlagen organisieren."], ["□", "Lager", "Bestände und Material mit Überblick verwalten."]].map(([icon, title, text], i) => <motion.article {...fade} transition={{ duration: .5, delay: i * .08 }} className="use-card" key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p><ArrowRight size={18} /></motion.article>)}</div></section>

    <section id="features" className="section features"><div className="features-copy"><p className="eyebrow">Gemacht für deinen Alltag</p><h2>Klein genug, um<br />einfach zu bleiben.<br /><em>Stark genug für alles.</em></h2><p>Kein kompliziertes System. Einfach ein klarer Ort für die Dinge, die du nicht mehr suchen möchtest.</p><Button>Kostenlos starten</Button></div><div className="feature-grid">{[["⌖", "Eigene Ablageorte", "Von der Garage bis zur kleinsten Schublade."], ["◈", "Farben & Icons", "Erkenne alles auf einen Blick wieder."], ["⌕", "Schnelle Suche", "Finde Gegenstände genau dann, wenn du sie brauchst."], ["♧", "Gruppen", "Organisiere gemeinsam mit den Menschen um dich herum."], ["▱", "Überall verfügbar", "Auf Smartphone, Tablet und Desktop zuhause."], ["✦", "Einfach schön", "Klar gestaltet, angenehm zu benutzen."]].map(([icon, title, text], i) => <motion.article {...fade} transition={{ duration: .5, delay: i * .06 }} key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></motion.article>)}</div></section>

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
        <a href="#">Impressum</a>
        <a href="mailto:madetofind@web.de">Kontakt</a>
      </div>
    </footer>
  </main>;
}
