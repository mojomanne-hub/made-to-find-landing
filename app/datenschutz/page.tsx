import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung · MaDe to find",
};

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "#111827", minHeight: "100vh" }}>
      <div style={{
        maxWidth: "720px", margin: "0 auto", padding: "48px 24px",
        fontFamily: "system-ui, sans-serif", color: "#e2e8f0", lineHeight: "1.7"
      }}>
        <a href="/" style={{ color: "#60a5fa", textDecoration: "none", fontSize: "14px", display: "inline-block", marginBottom: "32px" }}>
          ← Zurück zur App
        </a>

        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "8px", color: "#fff" }}>
          Datenschutzerklärung
        </h1>
        <p style={{ color: "#64748b", marginBottom: "40px" }}>
          Letzte Aktualisierung: Oktober 2026
        </p>

        {[
          {
            title: "1. Verantwortlicher",
            content: (
              <p style={{ color: "#94a3b8" }}>
                Diese App wird privat betrieben. Bei Fragen zum Datenschutz:<br /><br />
                <strong style={{ color: "#e2e8f0" }}>MaDe to find</strong><br />
                Anschrift: siehe{" "}
                <a href="https://made-to-find-landing.vercel.app/impressum" style={{ color: "#60a5fa" }}>Impressum</a><br />
                E-Mail: <a href="mailto:madetofind@web.de" style={{ color: "#60a5fa" }}>madetofind@web.de</a>
              </p>
            )
          },
          {
            title: "2. Welche Daten wir erheben",
            content: (
              <>
                <p style={{ color: "#94a3b8", marginBottom: "12px" }}>Zur Nutzung der App ist eine Registrierung erforderlich. Dabei erheben wir:</p>
                <ul style={{ color: "#94a3b8", paddingLeft: "20px" }}>
                  <li>E-Mail-Adresse (für Anmeldung und Einladungen)</li>
                  <li>Optionaler Anzeigename</li>
                  <li>Von Ihnen eingegebene Inhalte (Ablageorte, Gegenstände)</li>
                  <li>Gruppe und Mitgliedschaften</li>
                  <li>Technische Daten beim Aufruf (z. B. IP-Adresse, Browser, Zeitpunkt), die der Hosting-Anbieter in Server-Logs verarbeitet</li>
                </ul>
              </>
            )
          },
          {
            title: "3. Zweck der Datenverarbeitung",
            content: (
              <>
                <p style={{ color: "#94a3b8", marginBottom: "8px" }}>Die erhobenen Daten werden zur Bereitstellung der App-Funktionen verwendet:</p>
                <ul style={{ color: "#94a3b8", paddingLeft: "20px" }}>
                  <li>Verwaltung von Ablageorten und Gegenständen</li>
                  <li>Geteilter Zugriff innerhalb von Gruppen</li>
                  <li>Benachrichtigungen über Gruppenaktivitäten</li>
                  <li>Versand von E-Mails (Bestätigung, Passwort zurücksetzen, Einladungen)</li>
                </ul>
                <p style={{ color: "#94a3b8", marginTop: "12px" }}>Zusätzlich dient die Verarbeitung der Anzeige von Werbung (siehe Abschnitt „Werbung“).</p>
              </>
            )
          },
          {
            title: "4. Datenspeicherung",
            content: (
              <p style={{ color: "#94a3b8" }}>
                Alle Daten werden sicher bei <strong style={{ color: "#e2e8f0" }}>Supabase</strong> (EU-Server) gespeichert.
                Die App wird über <strong style={{ color: "#e2e8f0" }}>Vercel</strong> bereitgestellt.
                Für den Versand von E-Mails nutzen wir <strong style={{ color: "#e2e8f0" }}>Resend</strong>.
              </p>
            )
          },
          {
            title: "5. Weitergabe an Dritte",
            content: (
              <p style={{ color: "#94a3b8" }}>
                Ihre Daten werden nicht an Dritte verkauft. Eine Weitergabe erfolgt nur an die genutzten
                Dienstleister (Supabase, Vercel, Resend für den E-Mail-Versand) sowie im Rahmen der
                Werbeanzeigen an Google (siehe Abschnitt „Werbung“). Dabei kann eine Verarbeitung auch
                außerhalb der EU, etwa in den USA, stattfinden.
              </p>
            )
          },
          {
            title: "6. Ihre Rechte",
            content: (
              <p style={{ color: "#94a3b8" }}>
                Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer Daten.
                Zur Löschung Ihres Kontos wenden Sie sich bitte per E-Mail an uns.
                Erteilte Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
                Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
              </p>
            )
          },
          {
            title: "7. Cookies",
            content: (
              <p style={{ color: "#94a3b8" }}>
                Die App verwendet technisch notwendige Cookies für die Anmeldung und den aktiven Gruppenkontext.
                Darüber hinaus setzt Google im Zusammenhang mit Werbeanzeigen Cookies bzw. ähnliche Technologien
                ein, sofern Sie hierzu Ihre Einwilligung erteilen (siehe Abschnitt „Werbung“).
              </p>
            )
          },
          {
            title: "8. Werbung (Google AdSense)",
            content: (
              <>
                <p style={{ color: "#94a3b8", marginBottom: "12px" }}>
                  Diese App und die zugehörige Website nutzen Google AdSense, einen Dienst der Google Ireland Limited,
                  Gordon House, Barrow Street, Dublin 4, Irland, zur Anzeige von Werbung.
                </p>
                <p style={{ color: "#94a3b8", marginBottom: "12px" }}>
                  Google und seine Partner können dafür Cookies bzw. ähnliche Technologien verwenden und Daten
                  wie IP-Adresse, Geräteinformationen und Informationen zur Nutzung verarbeiten, um Anzeigen
                  auszuspielen, ggf. zu personalisieren und deren Wirkung zu messen. Personalisierte Werbung und
                  der Einsatz nicht notwendiger Cookies erfolgen nur mit Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO),
                  soweit eine solche erforderlich ist. Sie können Ihre Einwilligung jederzeit widerrufen.
                </p>
                <p style={{ color: "#94a3b8" }}>
                  Weitere Informationen finden Sie unter{" "}
                  <a href="https://policies.google.com/technologies/ads?hl=de" style={{ color: "#60a5fa" }}>policies.google.com/technologies/ads</a>.
                  Personalisierte Werbung können Sie unter{" "}
                  <a href="https://adssettings.google.com" style={{ color: "#60a5fa" }}>adssettings.google.com</a> verwalten.
                </p>
              </>
            )
          },
          {
            title: "9. Kontakt",
            content: (
              <p style={{ color: "#94a3b8" }}>
                Bei Fragen zum Datenschutz:{" "}
                <a href="mailto:madetofind@web.de" style={{ color: "#60a5fa" }}>madetofind@web.de</a>
              </p>
            )
          },
        ].map(({ title, content }) => (
          <section key={title} style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#fff", marginBottom: "12px" }}>
              {title}
            </h2>
            {content}
          </section>
        ))}
      </div>
    </div>
  );
}
