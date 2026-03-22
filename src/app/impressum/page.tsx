import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navigation />
      <div className="mx-auto max-w-[700px] px-6 pt-28 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))] letter-spacing-tight mb-8">Impressum</h1>
        <div className="space-y-6 text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          <div><h2 className="text-[hsl(var(--foreground))] font-semibold text-sm mb-2">Angaben gemäß § 5 TMG</h2><p>Muratovic &amp; Cungu GbR</p><p>vertreten durch: Edon Muratovic, Gent Cungu</p></div>
          <div><h2 className="text-[hsl(var(--foreground))] font-semibold text-sm mb-2">Anschrift</h2><p>Gartenstraße 50, 70563 Stuttgart, Deutschland</p></div>
          <div><h2 className="text-[hsl(var(--foreground))] font-semibold text-sm mb-2">Kontakt</h2><p>E-Mail: kontakt@tigonautomation.de · Telefon: 0176 41501758</p></div>
          <div><h2 className="text-[hsl(var(--foreground))] font-semibold text-sm mb-2">Umsatzsteuer</h2><p>Nicht umsatzsteuerpflichtig gemäß § 19 Abs. 1 UStG</p></div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
