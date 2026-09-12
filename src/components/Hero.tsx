import Link from "next/link";
import Image from "next/image";
import Particles from "./Particles";
import Skyline from "./Skyline";
import { heroPhoto, siteConfig } from "@/lib/site-data";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon } from "./Icons";
import GoogleRating from "./GoogleRating";
import MapsLink from "./MapsLink";

export default function Hero() {
  return (
    <section className="panel-hot relative overflow-hidden">
      <Particles />
      <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-56 w-full opacity-70" />

      <div className={`relative mx-auto max-w-6xl px-5 pb-28 pt-16 sm:pb-36 sm:pt-24 ${
        heroPhoto ? "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]" : ""
      }`}>
        <div>
        <div className="animate-hero-in" style={{ animationDelay: "0.05s" }}>
          <MapsLink className="inline-flex cursor-pointer rounded-full border-[3px] border-ink bg-mint px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lemon" />
        </div>

        <h1 className="animate-hero-in mt-6 max-w-3xl" style={{ animationDelay: "0.15s" }}>
          <span className="graffiti block text-5xl sm:text-7xl">Compose</span>
          <span className="script mt-2 block text-4xl sm:text-6xl">ton Crousty</span>
          <span className="mt-4 block max-w-xl text-lg font-bold leading-snug text-white sm:text-xl">
            Restaurant de box de riz à composer à {siteConfig.city}.
          </span>
        </h1>

        <p className="animate-hero-in mt-5 max-w-xl text-base leading-relaxed text-white/85" style={{ animationDelay: "0.28s" }}>
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

        <div className="animate-hero-in mt-7" style={{ animationDelay: "0.46s" }}>
          <GoogleRating size={18} />
        </div>

        <ul className="animate-hero-in mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/80" style={{ animationDelay: "0.58s" }}>
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
          <div className="animate-hero-in relative mx-auto w-full max-w-[420px]" style={{ animationDelay: "0.34s" }}>
            {/* Le traitement autocollant — contour noir épais, ombre dure
                décalée, inclinaison, halo jaune — convient aux panneaux de la
                carte, mais appliqué à une photo il fait bricolage, et le halo
                déteignait sur les bords. Ici : cadre net, ombre profonde et
                diffuse, fin liseré clair. */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(43,10,74,0.55),transparent)]"
            />
            <figure className="relative overflow-hidden rounded-[1.75rem] bg-navy-light shadow-[0_30px_60px_-20px_rgba(30,4,44,0.75),0_10px_24px_-12px_rgba(30,4,44,0.6)] ring-1 ring-white/20">
              <Image
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                width={heroPhoto.w}
                height={heroPhoto.h}
                priority
                quality={95}
                sizes="(max-width: 1024px) 80vw, 420px"
                className="w-full object-cover"
              />
              {/* Léger assombrissement du bas : la photo se termine en douceur
                  au lieu d'être tranchée net. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent"
              />
              {/* Reflet de bord, qui donne l'épaisseur du cadre */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10"
              />
            </figure>
          </div>
        )}
      </div>
    </section>
  );
}
