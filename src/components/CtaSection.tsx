import Link from "next/link";
import Particles from "./Particles";
import { directionsUrl, siteConfig } from "@/lib/site-data";
import { ArrowIcon, PhoneIcon, PinIcon } from "./Icons";

export default function CtaSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand/30 bg-gradient-to-br from-navy-light via-navy to-navy px-6 py-16 text-center sm:px-12">
          <div aria-hidden="true" className="animate-drift-a pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-brand/30 blur-2xl" />
          <Particles />

          <p className="relative text-xs font-bold uppercase tracking-[0.28em] text-cyan animate-scan">
            Ouvert {siteConfig.hours.short}
          </p>
          <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            Votre <span className="neon-pink">Crousty</span> vous attend au {siteConfig.street}
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-sm leading-relaxed text-cream/65">
            Sur place dans l&apos;ambiance néon, ou à emporter en quelques minutes. Dès {siteConfig.priceFrom}.
          </p>

          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href={siteConfig.phoneHref} className="btn btn-primary" data-cta="cta-phone">
              <PhoneIcon size={17} /> {siteConfig.phone}
            </a>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <PinIcon size={17} /> Itinéraire
            </a>
            <Link href="/la-carte" className="btn btn-ghost">
              La carte <ArrowIcon size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
