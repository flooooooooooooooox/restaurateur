import Link from "next/link";
import { siteConfig } from "@/lib/site-data";
import { ClockIcon, PhoneIcon, PinIcon, TikTokIcon } from "./Icons";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/10 bg-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
            {siteConfig.name} est un restaurant de box de riz à composer situé au {siteConfig.street}, {siteConfig.postalCode} {siteConfig.city}. Ambiance néon années 80, sur place et à emporter.
          </p>
          {siteConfig.tiktokUrl && (
            <a
              href={siteConfig.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 text-sm font-medium text-cream/80 transition-colors hover:border-brand hover:text-cream"
            >
              <TikTokIcon size={16} /> Suivre sur TikTok
            </a>
          )}
        </div>

        <nav aria-label="Pages du site">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-brand">Le site</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/60">
            <li><Link href="/" className="transition-colors hover:text-cream">Accueil</Link></li>
            <li><Link href="/la-carte" className="transition-colors hover:text-cream">La carte</Link></li>
            <li><Link href="/le-concept" className="transition-colors hover:text-cream">Le concept</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-cream">Nous trouver</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-brand">Nous trouver</h2>
          <ul className="mt-4 space-y-3 text-sm text-cream/60">
            <li className="flex gap-2.5">
              <PinIcon size={17} className="mt-0.5 shrink-0 text-cyan" />
              <address className="not-italic">
                {siteConfig.street}<br />
                {siteConfig.postalCode} {siteConfig.city}
              </address>
            </li>
            <li className="flex gap-2.5">
              <PhoneIcon size={17} className="mt-0.5 shrink-0 text-cyan" />
              <a href={siteConfig.phoneHref} className="transition-colors hover:text-cream">{siteConfig.phone}</a>
            </li>
            <li className="flex gap-2.5">
              <ClockIcon size={17} className="mt-0.5 shrink-0 text-cyan" />
              <span>{siteConfig.hours.display}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-brand">Alentours</h2>
          <p className="mt-4 text-sm leading-relaxed text-cream/55">
            {siteConfig.name} accueille les gourmands de {siteConfig.city} et de son agglomération&nbsp;:{" "}
            {siteConfig.areaServed.slice(1).join(", ")}.
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name} — {siteConfig.street}, {siteConfig.postalCode} {siteConfig.city}</p>
          <nav aria-label="Informations légales" className="flex gap-4">
            <Link href="/mentions-legales" className="transition-colors hover:text-cream">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="transition-colors hover:text-cream">Confidentialité</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
