import { faq } from "@/lib/site-data";
import { PlusIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FaqSection() {
  if (!faq.length) return null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="Questions fréquentes" title="Tout ce qu'on nous demande" />

        <div className="mt-12 space-y-3">
          {faq.map((item, i) => (
            <Reveal key={item.question} delay={i * 70}>
              <details className="card-neon group rounded-2xl px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[15px] font-bold tracking-tight">
                  {item.question}
                  <PlusIcon
                    size={18}
                    className="shrink-0 text-brand transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
