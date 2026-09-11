import Link from "next/link";
import Skyline from "./Skyline";
import ViceBackdrop from "./ViceBackdrop";
import { ArrowIcon } from "./Icons";

/** Les tarifs d'appel, affichés à côté du bouton. */
const TARIFS = [
  { label: "Crousty seul", value: "dès 5,90 €" },
  { label: "En menu", value: "dès 6,90 €" },
  { label: "Chaque viande", value: "2,00 €" },
  { label: "Sides", value: "2,90 €" },
];

/** Bandeau d'accroche vers la carte interactive. */
export default function BuilderTeaser() {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="card-sticker relative overflow-hidden">
          <ViceBackdrop withSun={false} />
          <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full opacity-35" />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,6,48,0.5),rgba(30,6,48,0.3)_45%,rgba(30,6,48,0.6))]"
          />

          <div className="relative flex flex-col gap-6 p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-lemon">
                La carte interactive
              </p>
              <h2 className="mt-2.5">
                <span className="graffiti block text-3xl sm:text-4xl">Compose</span>
                <span className="script mt-1 block text-2xl sm:text-3xl">ton Crousty</span>
              </h2>
            </div>

            {/* Le bouton, et les tarifs juste à côté */}
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/la-carte#composer" className="btn btn-primary" data-cta="builder-teaser">
                Composer mon Crousty <ArrowIcon size={17} />
              </Link>

              <dl className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {TARIFS.map((t) => (
                  <div key={t.label} className="leading-tight">
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-white/70">
                      {t.label}
                    </dt>
                    <dd className="font-display font-extrabold text-lemon [text-shadow:0_1px_6px_rgba(30,6,48,0.9)]">{t.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
