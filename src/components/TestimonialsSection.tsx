import { testimonials, type Review } from "@/lib/site-data";
import GoogleRating from "./GoogleRating";
import Skyline from "./Skyline";
import ViceBackdrop from "./ViceBackdrop";

function Card({ review }: { review: Review }) {
  return (
    <figure className="card-sticker flex h-full w-[19rem] shrink-0 flex-col bg-white p-5 sm:w-[21rem] sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <figcaption className="font-display text-sm font-extrabold text-ink">
          {review.name}
        </figcaption>
        {review.source === "google" && (
          <span className="shrink-0 text-[10px] font-extrabold uppercase tracking-wide text-ink/45">
            Avis Google
          </span>
        )}
      </div>

      <span className="mt-2 flex items-center gap-0.5" aria-label={`${review.rating} sur 5`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#ffb23f" aria-hidden="true">
            <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z" />
          </svg>
        ))}
      </span>

      <blockquote className="mt-3 flex-1 text-[14px] font-medium leading-relaxed text-ink/80">
        {review.text}
      </blockquote>

      {review.when && (
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-ink/45">
          {review.when}
        </p>
      )}
    </figure>
  );
}

export default function TestimonialsSection() {
  if (!testimonials.length) return null;

  // La bande est dupliquée : c'est ce qui permet au défilement de boucler
  // sans saut visible.
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden py-20 pb-28">
      <ViceBackdrop withSun={false} />
      <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full opacity-30" />

      <div className="relative">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-lemon">
            Ils sont passés par là
          </p>
          <h2 className="graffiti mt-3 text-4xl sm:text-5xl">Ce qu&apos;on en dit</h2>
          <div className="mt-6">
            <GoogleRating />
          </div>
          <p className="mt-4 text-xs font-semibold text-white/70">
            Avis publiés sur la fiche Google du restaurant. Les trois derniers proviennent
            de son précédent site.
          </p>
        </div>

        {/* Défilement infini, mis en pause au survol. Sous
            prefers-reduced-motion, l'animation est neutralisée et la bande
            reste simplement défilable à la main. */}
        <div className="group mt-12 overflow-x-auto no-scrollbar">
          <div className="animate-marquee flex w-max gap-5 px-5">
            {loop.map((review, i) => (
              <Card key={`${review.name}-${i}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
