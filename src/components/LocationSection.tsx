import dynamic from "next/dynamic";
import LazyMount from "./LazyMount";
import { access, directionsUrl, mapsUrl, siteConfig } from "@/lib/site-data";
import { ClockIcon, PhoneIcon, PinIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Réservé pendant que la carte n'est pas encore chargée, pour éviter le saut. */
const MapPlaceholder = <div className="h-[320px] w-full animate-pulse bg-navy-light/60" />;

/**
 * Le repli `loading` est indispensable : sans lui, l'import dynamique suspend
 * le rendu, et une navigation avec transition de vue reste figée jusqu'à
 * l'expiration du délai du navigateur, soit quatre secondes.
 */
const RestaurantMap = dynamic(() => import("./RestaurantMap"), {
  loading: () => MapPlaceholder,
});

export default function LocationSection() {
  return (
    <section id="acces" className="border-y border-cream/10 bg-cream-alt/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Nous trouver"
          title={<>En plein cœur de la <span className="text-gradient">rue Saint-Jean</span></>}
          intro={`${siteConfig.name} vous accueille au ${siteConfig.street}, ${siteConfig.postalCode} ${siteConfig.city}, ${siteConfig.hours.short}.`}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="card-neon overflow-hidden rounded-3xl">
              <LazyMount placeholder={MapPlaceholder}>
                <RestaurantMap />
              </LazyMount>
              <div className="flex flex-wrap gap-3 p-5">
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  <PinIcon size={16} /> Itinéraire
                </a>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  Ouvrir dans Maps
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="card-neon h-full rounded-3xl p-7">
              <ul className="space-y-4 text-[15px]">
                <li className="flex gap-3">
                  <PinIcon size={19} className="mt-0.5 shrink-0 text-cyan" />
                  <address className="not-italic text-cream/85">
                    {siteConfig.street}<br />
                    {siteConfig.postalCode} {siteConfig.city}
                  </address>
                </li>
                <li className="flex gap-3">
                  <ClockIcon size={19} className="mt-0.5 shrink-0 text-cyan" />
                  <span className="text-cream/85">{siteConfig.hours.display}</span>
                </li>
                <li className="flex gap-3">
                  <PhoneIcon size={19} className="mt-0.5 shrink-0 text-cyan" />
                  <a href={siteConfig.phoneHref} className="font-semibold text-cream transition-colors hover:text-brand" data-cta="location-phone">
                    {siteConfig.phone}
                  </a>
                </li>
              </ul>

              <h3 className="mt-8 font-display text-sm font-bold uppercase tracking-widest text-brand">
                Comment venir
              </h3>
              <dl className="mt-4 space-y-3.5">
                {access.map((item) => (
                  <div key={item.title}>
                    <dt className="text-sm font-semibold text-cream/90">{item.title}</dt>
                    <dd className="mt-0.5 text-sm leading-relaxed text-cream/60">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
