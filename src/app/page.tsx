import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import BuilderTeaser from "@/components/BuilderTeaser";
import Gallery from "@/components/Gallery";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-data";
import { getFaqSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <PageTransition>
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
        <BuilderTeaser />

        <Gallery />
        <BenefitsSection />
        <TestimonialsSection />
        <LocationSection />
        <FaqSection />
        <CtaSection />
      </>
    </PageTransition>
  );
}
