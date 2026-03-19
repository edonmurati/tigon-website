import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navigation />
      <div className="mx-auto max-w-[700px] px-6 pt-28 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))] letter-spacing-tight mb-8">Datenschutzerklärung</h1>
        <div className="space-y-6 text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          <div><h2 className="text-[hsl(var(--foreground))] font-semibold text-sm mb-2">1. Verantwortlicher</h2><p>Muratovic &amp; Cungu GbR</p><p>Gartenstraße 50, 70563 Stuttgart, Deutschland</p><p>E-Mail: kontakt@tigonautomation.de</p></div>
          <div><h2 className="text-[hsl(var(--foreground))] font-semibold text-sm mb-2">2. Erhebung und Verarbeitung personenbezogener Daten</h2><p>Beim Besuch unserer Website werden automatisch technische Daten erfasst (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit des Zugriffs). Diese Daten sind für den technischen Betrieb erforderlich und werden nicht zur Identifizierung einzelner Nutzer verwendet.</p></div>
          <div><h2 className="text-[hsl(var(--foreground))] font-semibold text-sm mb-2">3. Kontaktaufnahme</h2><p>Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren, werden die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten werden ohne Ihre Einwilligung nicht an Dritte weitergegeben.</p></div>
          <div><h2 className="text-[hsl(var(--foreground))] font-semibold text-sm mb-2">4. Hosting</h2><p>Diese Website wird bei einem externen Dienstleister gehostet. Die Server befinden sich in der Europäischen Union. Der Hosting-Anbieter erhebt in sogenannten Logfiles Zugriffsdaten, die für den sicheren Betrieb erforderlich sind.</p></div>
          <div><h2 className="text-[hsl(var(--foreground))] font-semibold text-sm mb-2">5. Ihre Rechte</h2><p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Kontaktieren Sie uns unter kontakt@tigonautomation.de.</p></div>
          <div><h2 className="text-[hsl(var(--foreground))] font-semibold text-sm mb-2">6. Cookies</h2><p>Diese Website verwendet keine Tracking-Cookies oder Analyse-Tools von Drittanbietern. Technisch notwendige Cookies können für die Funktionalität der Website eingesetzt werden.</p></div>
          <div><h2 className="text-[hsl(var(--foreground))] font-semibold text-sm mb-2">7. Änderungen</h2><p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder Änderungen unserer Website anzupassen.</p></div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
