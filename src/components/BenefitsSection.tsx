import { benefits } from "@/lib/site-data";
import { SparkIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function BenefitsSection() {
  if (!benefits.length) return null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Pourquoi Crousty Vice"
          title="Plus qu'un repas, une immersion"
          intro="La qualité des ingrédients, la créativité des recettes et l'énergie de l'ambiance : tout est pensé pour que vous reveniez."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 90}>
              <article className="card-neon flex h-full gap-4 rounded-3xl p-6">
                <span aria-hidden="true" className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
                  <SparkIcon size={19} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{benefit.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
