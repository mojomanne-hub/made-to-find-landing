import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum · MaDe to find",
};

export default function ImpressumPage() {
  return (
    <div style={{ backgroundColor: "#111827", minHeight: "100vh" }}>
      <div style={{
        maxWidth: "720px", margin: "0 auto", padding: "48px 24px",
        fontFamily: "system-ui, sans-serif", color: "#e2e8f0", lineHeight: "1.7"
      }}>
        <a href="/" style={{ color: "#60a5fa", textDecoration: "none", fontSize: "14px", display: "inline-block", marginBottom: "32px" }}>
          ← Zurück zur Startseite
        </a>

        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "40px", color: "#fff" }}>
          Impressum
        </h1>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#fff", marginBottom: "12px" }}>
            Angaben gemäß § 5 DDG
          </h2>
          <p style={{ color: "#94a3b8" }}>
            Manfred Dengel<br />
            Stockäckerweg 1<br />
            88486 Kirchberg<br />
            Deutschland
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#fff", marginBottom: "12px" }}>
            Kontakt
          </h2>
          <p style={{ color: "#94a3b8" }}>
            E-Mail: <a href="mailto:madetofind@web.de" style={{ color: "#60a5fa" }}>madetofind@web.de</a>
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#fff", marginBottom: "12px" }}>
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p style={{ color: "#94a3b8" }}>
            Manfred Dengel<br />
            Stockäckerweg 1<br />
            88486 Kirchberg
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#fff", marginBottom: "12px" }}>
            EU-Streitschlichtung
          </h2>
          <p style={{ color: "#94a3b8" }}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: "#60a5fa" }}>
              https://ec.europa.eu/consumers/odr/
            </a>
            <br />
            Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#fff", marginBottom: "12px" }}>
            Haftung für Inhalte
          </h2>
          <p style={{ color: "#94a3b8" }}>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte
            oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung
            von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#fff", marginBottom: "12px" }}>
            Haftung für Links
          </h2>
          <p style={{ color: "#94a3b8" }}>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
            haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
            der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#fff", marginBottom: "12px" }}>
            Hinweis zu Bildmaterial
          </h2>
          <p style={{ color: "#94a3b8" }}>
            Einzelne Symbol- und Promotionsbilder auf dieser Seite wurden mithilfe künstlicher
            Intelligenz erstellt.
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#fff", marginBottom: "12px" }}>
            Urheberrecht
          </h2>
          <p style={{ color: "#94a3b8" }}>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
            des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </div>
  );
}
