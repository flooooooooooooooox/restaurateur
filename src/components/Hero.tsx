import Link from "next/link";
import Image from "next/image";
import Particles from "./Particles";
import Skyline from "./Skyline";
import ViceBackdrop from "./ViceBackdrop";
import ChromeTitle from "./ChromeTitle";
import ScriptTitle from "./ScriptTitle";
import { heroPhoto, siteConfig } from "@/lib/site-data";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <ViceBackdrop sunX={78} />

      {/* La photo du plat déborde par la gauche, sous le lockup. */}
      {heroPhoto && (
        <div
          aria-hidden="true"
          /* Le bord droit est fondu par un masque : sans lui, le conteneur
             s'arrête net et laisse une couture verticale visible. */
          className="pointer-events-none absolute inset-y-0 left-0 w-[70%] sm:w-[50%] lg:w-[42%] [mask-image:linear-gradient(to_right,#000_0%,#000_38%,rgba(0,0,0,0.35)_72%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,#000_0%,#000_38%,rgba(0,0,0,0.35)_72%,transparent_100%)]"
        >
          <Image
            src={heroPhoto.src}
            alt=""
            fill
            priority
            quality={95}
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 50vw, 42vw"
            className="object-cover object-right"
          />
          {/* Fondu vers le rose, pour que la photo se marie au fond */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(43,10,74,0.68),rgba(43,10,74,0.6))] sm:bg-[linear-gradient(to_right,rgba(43,10,74,0.5),rgba(160,25,120,0.3)_50%,rgba(216,30,140,0.15))]" />
        </div>
      )}

      <Particles />
      <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-55" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-14 text-center sm:pb-32 sm:pt-20">
        <p
          className="animate-hero-in inline-flex rounded-full border-[3px] border-ink bg-mint px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-ink"
          style={{ animationDelay: "0.05s" }}
        >
          {siteConfig.street} · {siteConfig.city}
        </p>

        {/* Le lockup : titre massif + signature manuscrite chevauchante */}
        <h1 className="animate-hero-in lockup-tilt mt-7" style={{ animationDelay: "0.15s" }}>
          <ChromeTitle className="block text-[clamp(2.9rem,11vw,8rem)]">Compose</ChromeTitle>
          <ScriptTitle className="relative z-10 mt-1 block text-[clamp(2.6rem,9.5vw,7rem)] sm:mt-2">
            ton Crousty
          </ScriptTitle>
          <span className="outlined-sub mt-4 block text-lg font-extrabold tracking-tight sm:text-2xl">
            Restaurant de box de riz à composer à {siteConfig.city}.
          </span>
        </h1>

        <p
          className="animate-hero-in mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/90 [text-shadow:0_1px_10px_rgba(43,10,74,0.8)]"
          style={{ animationDelay: "0.3s" }}
        >
          Une base de riz parfumée, tes viandes croustillantes à 2&nbsp;€, tes toppings et
          l&apos;une des sept sauces signature.
        </p>

        <div
          className="animate-hero-in mt-8 flex flex-wrap justify-center gap-3"
          style={{ animationDelay: "0.42s" }}
        >
          <Link href="/la-carte#composer" className="btn btn-primary" data-cta="hero-builder">
            Composer mon Crousty <ArrowIcon size={17} />
          </Link>
          <a href={siteConfig.phoneHref} className="btn btn-ghost" data-cta="hero-phone">
            <PhoneIcon size={17} /> {siteConfig.phone}
          </a>
        </div>

        <ul
          className="animate-hero-in mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold text-white/85"
          style={{ animationDelay: "0.54s" }}
        >
          <li className="flex items-center gap-2">
            <ClockIcon size={17} className="text-lemon" /> Ouvert {siteConfig.hours.short}
          </li>
          <li className="flex items-center gap-2">
            <PinIcon size={17} className="text-lemon" /> Centre-ville, rue piétonne
          </li>
          <li className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="grid h-[17px] w-[17px] place-items-center rounded-full bg-lemon text-[10px] font-black text-ink"
            >
              €
            </span>
            Dès {siteConfig.priceFrom} · sur place ou à emporter
          </li>
        </ul>
      </div>
    </section>
  );
}
