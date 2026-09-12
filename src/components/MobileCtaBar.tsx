import { siteConfig, directionsUrl } from "@/lib/site-data";
import { BagIcon, PhoneIcon, PinIcon } from "./Icons";

/**
 * Barre d'action fixe en mobile. La commande en ligne passe en premier et en
 * primaire : c'est l'action la plus recherchée sur un site de restauration
 * rapide, devant l'appel et l'itinéraire.
 */
export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-cream/10 bg-navy/95 p-3 backdrop-blur-xl md:hidden">
      <a
        href={siteConfig.uberEatsUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="order-mobile-bar"
        className="flex flex-[1.3] items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brand to-brand-dark py-3 text-sm font-semibold text-white shadow-[0_6px_18px_-6px_rgba(255,46,136,0.8)]"
      >
        <BagIcon size={17} />
        Commander
      </a>
      <a
        href={siteConfig.phoneHref}
        data-cta="mobile-phone"
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-cream/20 bg-cream/5 py-3 text-sm font-semibold text-cream"
      >
        <PhoneIcon size={17} />
        Appeler
      </a>
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full border border-cyan/40 bg-cyan/10 px-4 py-3 text-sm font-semibold text-cream"
        aria-label="Itinéraire vers le restaurant"
      >
        <PinIcon size={17} />
      </a>
    </div>
  );
}
