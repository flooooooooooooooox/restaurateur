import { testimonials } from "@/lib/site-data";
import Reveal from "./Reveal";
import Skyline from "./Skyline";

const TILTS = [-1.5, 0.8, 1.6];

export default function TestimonialsSection() {
  if (!testimonials.length) return null;

  return (
    <section className="panel-hot relative overflow-hidden py-20 pb-28">
      <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full opacity-30" />
      <div
        aria-hidden="true"
        className="animate-drift-b pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-lemon/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-lemon">
            Ils sont passés par là
          </p>
          <h2 className="graffiti mt-3 text-4xl sm:text-5xl">Ce qu&apos;on en dit</h2>
          <p className="mt-4 text-sm font-semibold text-white/75">
            Témoignages recueillis par le restaurant.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 100}>
              <figure
                className="card-sticker flex h-full flex-col bg-white p-6 sm:p-7"
                style={{ rotate: `${TILTS[i % TILTS.length]}deg` }}
              >
                <span
                  aria-hidden="true"
                  className="graffiti graffiti-lemon -mt-1 text-5xl leading-none"
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-2 flex-1 text-[15px] font-semibold leading-relaxed text-ink/85">
                  {testimonial.text}
                </blockquote>
                <figcaption className="mt-6">
                  <span className="price-sticker price-sticker-hot text-sm">
                    {testimonial.name}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
