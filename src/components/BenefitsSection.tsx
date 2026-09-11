import { benefits } from "@/lib/site-data";
import { ClockIcon, FlameIcon, PinIcon, SparkIcon } from "./Icons";
import Reveal from "./Reveal";

const ICONS = [SparkIcon, FlameIcon, ClockIcon, PinIcon];
/** Alternance des panneaux, pour que la grille ne soit pas uniforme. */
const TONES = ["panel-lemon", "panel-mint", "panel-mint", "panel-lemon"];
const TILTS = [-1.2, 1, 1.2, -1];

export default function BenefitsSection() {
  if (!benefits.length) return null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand">
            Pourquoi Crousty Vice
          </p>
          <h2 className="graffiti mt-3 text-4xl sm:text-5xl">
            Plus qu&apos;un repas, <span className="graffiti-lemon">une immersion</span>
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-cream/70">
            La qualité des ingrédients, la créativité des recettes et l&apos;énergie de
            l&apos;ambiance : tout est pensé pour que tu reviennes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={benefit.title} delay={i * 90}>
                <article
                  className={`card-sticker h-full p-7 ${TONES[i % TONES.length]}`}
                  style={{ rotate: `${TILTS[i % TILTS.length]}deg` }}
                >
                  <span
                    aria-hidden="true"
                    className="grid h-14 w-14 place-items-center rounded-2xl border-[3px] border-ink bg-hot text-white shadow-[0_4px_0_var(--color-ink)]"
                  >
                    <Icon size={26} />
                  </span>
                  <h3 className="graffiti mt-5 text-xl leading-tight sm:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-medium leading-relaxed text-ink/75">
                    {benefit.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
