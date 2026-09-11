import Link from "next/link";
import Particles from "./Particles";
import { siteConfig } from "@/lib/site-data";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Halos néon qui dérivent */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift-a absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-brand/30 blur-3xl" />
        <div className="animate-drift-b absolute -right-20 top-10 h-[22rem] w-[22rem] rounded-full bg-cyan/20 blur-3xl" />
        <div className="animate-drift-c absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sun/10 blur-3xl" />
      </div>
      <Particles />
      {/* Grille rétro en perspective */}
      <div aria-hidden="true" className="retro-grid pointer-events-none absolute inset-x-0 bottom-0 h-64" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-16 sm:pb-28 sm:pt-24">
        <p className="animate-hero-in text-xs font-bold uppercase tracking-[0.28em] text-cyan" style={{ animationDelay: "0.05s" }}>
          189 rue Saint-Jean · Caen
        </p>

        <h1
          className="animate-hero-in mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="neon-pink">Crousty Vice</span>
          <span className="mt-2 block text-cream">
            restaurant de <span className="text-gradient">box de riz</span> à Caen
          </span>
        </h1>

        <p
          className="animate-hero-in mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg"
          style={{ animationDelay: "0.28s" }}
        >
          Composez votre Crousty comme on crée un personnage de jeu vidéo&nbsp;: une base de riz
          parfumée, vos protéines croustillantes, vos toppings, votre sauce signature. Le tout dans
          une ambiance néon droit sortie des années 80.
        </p>

        <div className="animate-hero-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "0.4s" }}>
          <Link href="/la-carte" className="btn btn-primary" data-cta="hero-menu">
            Voir la carte <ArrowIcon size={17} />
          </Link>
          <a href={siteConfig.phoneHref} className="btn btn-outline" data-cta="hero-phone">
            <PhoneIcon size={17} /> {siteConfig.phone}
          </a>
        </div>

        {/* Réassurance immédiate, sous les CTA */}
        <ul
          className="animate-hero-in mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-cream/60"
          style={{ animationDelay: "0.52s" }}
        >
          <li className="flex items-center gap-2">
            <ClockIcon size={17} className="text-cyan" /> Ouvert {siteConfig.hours.short}
          </li>
          <li className="flex items-center gap-2">
            <PinIcon size={17} className="text-cyan" /> Centre-ville, rue piétonne
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="grid h-[17px] w-[17px] place-items-center rounded-full bg-cyan/20 text-[10px] font-bold text-cyan">€</span>
            Dès {siteConfig.priceFrom} · sur place ou à emporter
          </li>
        </ul>
      </div>
    </section>
  );
}
