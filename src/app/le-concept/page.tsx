import type { Metadata } from "next";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-data";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Le concept — composez votre box de riz à Caen",
  description:
    "Chez Crousty Vice à Caen, vous composez votre box : riz parfumé, protéines croustillantes, toppings frais et sauce signature, dans une ambiance néon inspirée des années 80.",
  alternates: { canonical: "/le-concept" },
};

export default function ConceptPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Le concept", path: "/le-concept" },
        ])}
      />

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div aria-hidden="true" className="animate-drift-b pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan/20 blur-2xl" />
        <div aria-hidden="true" className="animate-drift-a pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-brand/25 blur-2xl" />
        <div className="relative mx-auto max-w-6xl px-5">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan">Le concept</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl">
            Le riz comme terrain de jeu, <span className="text-gradient">les années 80 comme décor</span>
          </h1>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-base leading-relaxed text-cream/70">
              <p>
                {siteConfig.name} est un restaurant de box de riz à composer installé au {siteConfig.street},{" "}
                {siteConfig.postalCode} {siteConfig.city}. Le principe est simple&nbsp;: imaginez votre plat
                idéal — une base de riz parfumée, des protéines juteuses et des sauces qui réveillent
                les papilles. Chaque box est une œuvre culinaire, créée par vous, pour vous.
              </p>
              <p>
                Une expérience rapide, généreuse et incroyablement savoureuse, servie {siteConfig.hours.short},
                sur place comme à emporter.
              </p>
            </div>
            <Reveal>
              <div className="card-neon rounded-3xl p-7">
                <h2 className="font-display text-xl font-bold tracking-tight">Notre ambiance</h2>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  Plongez dans l&apos;univers de {siteConfig.name} dès que vous franchissez nos portes.
                  Des néons aux musiques entraînantes, chaque détail est pensé pour vous transporter
                  dans une ambiance rétro, fun et décontractée. L&apos;endroit parfait pour se détendre
                  entre amis ou en famille et profiter d&apos;un bon repas.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cream/70">
                  {siteConfig.name} accueille les gourmands de {siteConfig.city} et de son agglomération&nbsp;:{" "}
                  {siteConfig.areaServed.slice(1).join(", ")}.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ProcessSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
