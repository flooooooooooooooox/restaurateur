import { processSteps } from "@/lib/site-data";
import Reveal from "./Reveal";
import { FoodIcon } from "./FoodIcons";
import SectionHeading from "./SectionHeading";

export default function ProcessSection() {
  if (!processSteps.length) return null;

  return (
    <section className="border-y border-cream/10 bg-cream-alt/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Le concept"
          title={<>Trois étapes, <span className="text-gradient">un Crousty unique</span></>}
          intro="Chaque box est une création. Vous choisissez, on assemble, ça croustille."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {processSteps.map((step, i) => (
            <li key={step.step}>
              <Reveal delay={i * 110}>
                <div className="card-neon relative h-full rounded-3xl p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border-[3px] border-ink bg-lemon">
                      <FoodIcon name={step.icon} size={36} />
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-display text-5xl font-black leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,46,136,0.55)]"
                    >
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/65">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
