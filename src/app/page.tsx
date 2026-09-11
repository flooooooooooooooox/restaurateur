import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import MenuBoard from "@/components/MenuBoard";
import SauceBoard from "@/components/SauceBoard";
import SectionHeading from "@/components/SectionHeading";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { siteConfig } from "@/lib/site-data";
import { getFaqSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFaqSchema()} />
      <Hero />

      {/* Bandeau de réassurance */}
      <section aria-label="En bref" className="border-y border-cream/10 bg-cream-alt/40">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-cream/10 px-5 sm:grid-cols-4 sm:divide-x">
          {[
            { label: "Ouvert", value: "7j/7" },
            { label: "Service", value: "11h – 00h" },
            { label: "Crousty dès", value: siteConfig.priceFrom },
            { label: "Sauces signature", value: "7" },
          ].map((stat) => (
            <div key={stat.label} className="px-2 py-7 text-center">
              <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/45">{stat.label}</dt>
              <dd className="mt-1.5 font-display text-2xl font-extrabold text-cream">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <ProcessSection />

      {/* Aperçu de la carte */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="La carte"
            title={<>Créez votre <span className="text-gradient">Crousty</span></>}
            intro="Une base de riz, votre sauce signature et les garnitures que vous voulez. Les prix parlent d'eux-mêmes."
            sparkle
          />
          <div className="mt-14">
            <MenuBoard />
          </div>

          {/* Carte des sauces — présentation synthétique */}
          <div className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand">Les sauces signature</p>
                <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Sept sauces, une signature
                </h3>
              </div>
              <p className="max-w-sm text-sm text-cream/55">
                Incluses dans chaque Crousty. Du plus doux au plus relevé&nbsp;: les flammes vous guident.
              </p>
            </div>
            <div className="mt-8">
              <SauceBoard />
            </div>
          </div>

          <Reveal>
            <div className="mt-12 text-center">
              <Link href="/la-carte" className="btn btn-outline" data-cta="home-menu">
                Voir la carte complète <ArrowIcon size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <BenefitsSection />
      <TestimonialsSection />
      <LocationSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
