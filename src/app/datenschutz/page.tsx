import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

export default function Datenschutz() {
  const h2 = "text-[hsl(var(--foreground))] font-semibold text-sm mb-2";
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navigation />
      <div className="mx-auto max-w-[700px] px-6 pt-28 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))] letter-spacing-tight mb-8">Datenschutzerklärung</h1>
        <div className="space-y-6 text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          <div><h2 className={h2}>1. Verantwortlicher</h2><p>Tigon Automation Muratovic &amp; Cungu GbR</p><p>Gartenstraße 50, 70563 Stuttgart, Deutschland</p><p>E-Mail: kontakt@tigonautomation.de</p></div>

          <div><h2 className={h2}>2. Übersicht der Verarbeitungen</h2><p>Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Website und unserer Leistungen erforderlich ist. Die Verarbeitung erfolgt auf Grundlage der folgenden Rechtsgrundlagen gemäß Art. 6 Abs. 1 DSGVO:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Art. 6 Abs. 1 lit. a DSGVO — Einwilligung</li>
              <li>Art. 6 Abs. 1 lit. b DSGVO — Vertragserfüllung bzw. vorvertragliche Maßnahmen</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO — Berechtigtes Interesse (z.B. technischer Betrieb der Website)</li>
            </ul>
          </div>

          <div><h2 className={h2}>3. Erhebung und Verarbeitung personenbezogener Daten</h2><p>Beim Besuch unserer Website werden automatisch technische Daten erfasst (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit des Zugriffs). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Diese Daten sind für den technischen Betrieb erforderlich und werden nicht zur Identifizierung einzelner Nutzer verwendet. Server-Logfiles werden nach 30 Tagen automatisch gelöscht.</p></div>

          <div><h2 className={h2}>4. Kontaktaufnahme</h2><p>Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren, werden die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse, Telefonnummer, Unternehmen, Branche, Projektbeschreibung) zur Bearbeitung Ihrer Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Die Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p><p className="mt-2">Zur Verarbeitung von Kontaktformular-Anfragen nutzen wir n8n GmbH (Berlin, Deutschland) als Workflow-Automatisierungsdienst. Die Daten werden innerhalb der EU verarbeitet.</p></div>

          <div><h2 className={h2}>5. Hosting</h2><p>Diese Website wird von Vercel Inc. (San Francisco, USA) gehostet. Vercel setzt für europäische Besucher Server innerhalb der Europäischen Union ein. Vercel kann als Auftragsverarbeiter technische Zugriffsdaten in Server-Logfiles erheben. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen finden Sie in der <a href="https://vercel.com/legal/privacy-policy" className="underline hover:text-[hsl(var(--foreground))] transition-colors" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Vercel</a>.</p><p className="mt-2">Vercel Inc. ist unter dem EU-U.S. Data Privacy Framework zertifiziert, was ein angemessenes Datenschutzniveau gemäß Art. 45 DSGVO gewährleistet.</p></div>

          <div><h2 className={h2}>6. Cookies</h2><p>Diese Website verwendet keine Tracking-Cookies oder Analyse-Tools von Drittanbietern. Technisch notwendige Cookies können für die Funktionalität der Website eingesetzt werden. Diese sind nach Art. 6 Abs. 1 lit. f DSGVO gerechtfertigt.</p></div>

          <div><h2 className={h2}>7. Geschäftliche Direktansprache (Outreach)</h2><p>Im Rahmen unserer geschäftlichen Tätigkeit erheben wir Kontaktdaten von Unternehmen und deren Ansprechpartnern aus öffentlich zugänglichen Quellen (Unternehmenswebsites, Branchenverzeichnisse, Google Maps). Es handelt sich um geschäftliche Kontaktdaten: Name, geschäftliche E-Mail-Adresse, Firmenname, Geschäftsadresse, Telefonnummer.</p><p className="mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Neukundengewinnung im B2B-Bereich). Die Daten werden ausschließlich für die einmalige geschäftliche Kontaktaufnahme mit konkretem Sachbezug verwendet.</p><p className="mt-2">Bei Widerspruch werden Ihre Daten umgehend gelöscht. Ihre E-Mail-Adresse wird auf einer Suppressionsliste geführt, um erneute Kontaktaufnahme dauerhaft zu verhindern.</p><p className="mt-2">Ihr Widerspruchsrecht: Sie können der Verarbeitung Ihrer Daten zum Zweck der Direktansprache jederzeit widersprechen (Art. 21 Abs. 2 DSGVO). Kontakt: kontakt@tigonautomation.de</p></div>

          <div><h2 className={h2}>8. Ihre Rechte</h2><p>Sie haben gemäß DSGVO folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-2">Kontaktieren Sie uns unter kontakt@tigonautomation.de.</p>
          </div>

          <div><h2 className={h2}>9. Beschwerderecht</h2><p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die für uns zuständige Aufsichtsbehörde ist:</p><p className="mt-2">Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />Lautenschlagerstraße 20, 70173 Stuttgart<br />poststelle@lfdi.bwl.de</p></div>

          <div><h2 className={h2}>10. Aufbewahrungsfristen</h2><p>Personenbezogene Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt und keine gesetzlichen Aufbewahrungspflichten (z.B. handels- oder steuerrechtliche Fristen von 6 bzw. 10 Jahren) der Löschung entgegenstehen.</p></div>

          <div><h2 className={h2}>11. Änderungen</h2><p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder Änderungen unserer Website anzupassen. Stand: März 2026.</p></div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
