import Link from "next/link";
import Skyline from "./Skyline";
import ViceBackdrop from "./ViceBackdrop";
import SauceCup from "./SauceCup";
import { FoodIcon } from "./FoodIcons";
import { ArrowIcon } from "./Icons";
import { sauces, siteConfig } from "@/lib/site-data";

const PREVIEW_ICONS = ["tender", "cordon", "nugget", "onion", "drink"] as const;

/**
 * Accroche compacte et entièrement cliquable vers la carte interactive.
 * Le configurateur lui-même vit sur /la-carte : ici on ne montre que
 * de quoi donner envie de cliquer.
 */
export default function BuilderTeaser() {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Link
          href="/la-carte#composer"
          data-cta="builder-teaser"
          className="card-sticker group relative block overflow-hidden focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-lemon"
        >
          <ViceBackdrop withSun={false} />
          <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full opacity-70" />

          <div className="relative flex flex-col gap-7 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-lg">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-lemon">
                La carte interactive
              </p>
              <h2 className="graffiti mt-3 text-3xl sm:text-4xl">Compose ton Crousty</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-white/85 sm:text-base">
                Formule, viandes, sauce, sides&nbsp;: coche ce que tu veux, le total s&apos;affiche
                en direct. Tu sais ce que tu paies avant de passer la porte.
              </p>

              <span className="btn btn-primary mt-6 group-hover:-translate-y-0.5">
                Composer mon Crousty
                <ArrowIcon size={17} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>

            {/* Aperçu : les ingrédients et les sauces, en vrac */}
            <div className="shrink-0">
              <div className="flex flex-wrap items-center gap-2.5 lg:justify-end">
                {PREVIEW_ICONS.map((name, i) => (
                  <span
                    key={name}
                    className="grid h-14 w-14 place-items-center rounded-2xl border-[3px] border-ink bg-white/90 transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ transitionDelay: `${i * 45}ms`, rotate: `${(i % 2 ? 1 : -1) * 3}deg` }}
                  >
                    <FoodIcon name={name} size={34} />
                  </span>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-1.5 lg:justify-end">
                {sauces.map((sauce, i) => (
                  <span
                    key={sauce.name}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                    style={{ transitionDelay: `${i * 35}ms` }}
                    title={sauce.name}
                  >
                    <SauceCup sauce={sauce.sauce} top={sauce.top} size={38} />
                  </span>
                ))}
              </div>

              <p className="mt-4 text-right text-xs font-extrabold uppercase tracking-wide text-lemon">
                Dès {siteConfig.priceFrom} · 7 sauces incluses
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
