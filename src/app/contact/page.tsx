import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-data";
import { PhoneIcon } from "@/components/Icons";
import OrderButton from "@/components/OrderButton";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Nous trouver — 189 rue Saint-Jean, Caen",
  description:
    "Crousty Vice vous accueille au 189 rue Saint-Jean, 14000 Caen, 7j/7 de 11h à minuit. Téléphone, itinéraire et accès en tram, à pied ou en voiture.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <>
        <JsonLd
          data={[
            getBreadcrumbSchema([
              { name: "Accueil", path: "/" },
              { name: "Nous trouver", path: "/contact" },
            ]),
            getFaqSchema(),
          ]}
        />

        <section className="relative overflow-hidden py-16 sm:py-20">
          <div aria-hidden="true" className="animate-drift-a pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand/25 blur-2xl" />
          <div className="relative mx-auto max-w-6xl px-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan">Nous trouver</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl">
              {siteConfig.name}, <span className="neon-cyan">{siteConfig.street}</span> à {siteConfig.city}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/70">
              Le plus simple, c&apos;est de passer&nbsp;: nous sommes ouverts {siteConfig.hours.short}. Pour une commande à emporter, un groupe ou une question sur la carte, un coup de fil suffit.
              Pour être livré à Caen, la commande se fait en ligne.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <OrderButton source="contact" />
              <a href={siteConfig.phoneHref} className="btn btn-outline" data-cta="contact-phone">
                <PhoneIcon size={17} /> {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        <LocationSection />
        <FaqSection />
        <CtaSection />
      </>
    </PageTransition>
  );
}
