import { testimonials } from "@/lib/site-data";
import { QuoteIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function TestimonialsSection() {
  if (!testimonials.length) return null;

  return (
    <section className="border-y border-cream/10 bg-cream-alt/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Ils sont passés par là"
          title="Ce que disent nos clients"
          intro="Témoignages recueillis par le restaurant."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 100}>
              <figure className="card-neon flex h-full flex-col rounded-3xl p-6">
                <QuoteIcon size={26} className="text-brand/70" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cream/80">
                  {testimonial.text}
                </blockquote>
                <figcaption className="mt-5 border-t border-cream/10 pt-4 font-display text-sm font-bold text-cream/70">
                  {testimonial.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
