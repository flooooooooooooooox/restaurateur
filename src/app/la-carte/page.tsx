import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import MenuBoard from "@/components/MenuBoard";
import SauceBoard from "@/components/SauceBoard";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import BuilderSection from "@/components/BuilderSection";
import PosterStrip from "@/components/PosterStrip";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-data";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "La carte — box de riz, tenders et sauces signature",
  description:
    "La carte de Crousty Vice à Caen : riz blanc parfumé, tenders, cordon bleu, bouchée camembert, nuggets, toppings et 7 sauces signature. Crousty dès 4,90 €, menu dès 5,90 €.",
  alternates: { canonical: "/la-carte" },
};

export default function MenuPage() {
  return (
    <PageTransition>
      <>
        <JsonLd
          data={getBreadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "La carte", path: "/la-carte" },
          ])}
        />

        <section className="relative overflow-hidden py-16 sm:py-20">
          <div aria-hidden="true" className="animate-drift-a pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full bg-brand/25 blur-2xl" />
          <div aria-hidden="true" className="animate-drift-b pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-cyan/20 blur-2xl" />
          <div className="relative mx-auto max-w-6xl px-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan">La carte</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl">
              La carte de <span className="neon-pink">Crousty Vice</span> à {siteConfig.city}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/70">
              Chaque Crousty commence par une base de riz blanc parfumé, suivi de ta sauce
              signature et des garnitures que tu veux. Tous les prix sont en euros, TTC.
            </p>
          </div>
        </section>

        <section className="pb-6">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="sr-only">Les catégories de la carte</h2>
            <MenuBoard />
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              eyebrow="Les sauces signature"
              title="Sept sauces, une signature"
              intro="Une signature par Crousty. Du plus doux au plus relevé : les flammes indiquent l'intensité."
            />
            <div className="mt-12">
              <SauceBoard />
            </div>
          </div>
        </section>

        <BuilderSection />
        <PosterStrip />
        <CtaSection />
      </>
    </PageTransition>
  );
}
