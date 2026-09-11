import Link from "next/link";
import Image from "next/image";
import Particles from "./Particles";
import ViceBackdrop from "./ViceBackdrop";
import ChromeTitle from "./ChromeTitle";
import ScriptTitle from "./ScriptTitle";
import Skyline from "./Skyline";
import { heroPhoto, siteConfig } from "@/lib/site-data";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <ViceBackdrop />
      <Particles />
      <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-56 w-full opacity-70" />

      <div className={`relative mx-auto max-w-6xl px-5 pb-28 pt-16 sm:pb-36 sm:pt-24 ${
        heroPhoto ? "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]" : ""
      }`}>
        <div>
        <p className="animate-hero-in inline-flex rounded-full border-[3px] border-ink bg-mint px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-ink" style={{ animationDelay: "0.05s" }}>
          {siteConfig.street} · {siteConfig.city}
        </p>

        <h1 className="animate-hero-in mt-6 max-w-3xl" style={{ animationDelay: "0.15s" }}>
          <ChromeTitle className="block text-5xl sm:text-7xl">Compose</ChromeTitle>
          <ScriptTitle className="mt-3 block text-4xl sm:text-6xl">ton Crousty</ScriptTitle>
          <span className="mt-4 block max-w-xl text-lg font-bold leading-snug text-white [text-shadow:0_2px_12px_rgba(43,10,74,0.85)] sm:text-xl">
            Restaurant de box de riz à composer à {siteConfig.city}.
          </span>
        </h1>

        <p className="animate-hero-in mt-5 max-w-xl text-base leading-relaxed text-white/90 [text-shadow:0_1px_10px_rgba(43,10,74,0.7)]" style={{ animationDelay: "0.28s" }}>
          Une base de riz parfumée, tes viandes croustillantes à 2 €, tes toppings et l&apos;une
          des sept sauces signature. Le tout dans une ambiance néon droit sortie des années 80.
        </p>

        <div className="animate-hero-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "0.4s" }}>
          <Link href="/la-carte#composer" className="btn btn-primary" data-cta="hero-builder">
            Composer mon Crousty <ArrowIcon size={17} />
          </Link>
          <a href={siteConfig.phoneHref} className="btn btn-ghost" data-cta="hero-phone">
            <PhoneIcon size={17} /> {siteConfig.phone}
          </a>
        </div>

        <ul className="animate-hero-in mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/80" style={{ animationDelay: "0.52s" }}>
          <li className="flex items-center gap-2">
            <ClockIcon size={17} className="text-lemon" /> Ouvert {siteConfig.hours.short}
          </li>
          <li className="flex items-center gap-2">
            <PinIcon size={17} className="text-lemon" /> Centre-ville, rue piétonne
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="grid h-[17px] w-[17px] place-items-center rounded-full bg-lemon text-[10px] font-black text-ink">€</span>
            Dès {siteConfig.priceFrom} · sur place ou à emporter
          </li>
        </ul>
        </div>

        {heroPhoto && (
          <div className="animate-hero-in relative mx-auto w-full max-w-[340px]" style={{ animationDelay: "0.34s" }}>
            <div aria-hidden="true" className="animate-soft-float absolute -inset-5 rounded-[2.5rem] bg-lemon/30 blur-2xl" />
            {/* Étiquette « polaroid » qui casse le cadre */}
            <span className="price-sticker price-sticker-mint absolute -left-4 -top-4 z-10 text-sm sm:-left-6">
              Ton Crousty
            </span>
            <figure className="card-sticker animate-soft-float relative overflow-hidden rotate-[-2.5deg] bg-navy-light">
              <Image
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                width={heroPhoto.w}
                height={heroPhoto.h}
                priority
                quality={95}
                sizes="340px"
                className="w-full object-cover"
              />
            </figure>
          </div>
        )}
      </div>
    </section>
  );
}
