import { testimonials } from "@/lib/site-data";
import ReviewsCarousel from "./ReviewsCarousel";
import GoogleRating from "./GoogleRating";
import Skyline from "./Skyline";
import ViceBackdrop from "./ViceBackdrop";

export default function TestimonialsSection() {
  if (!testimonials.length) return null;

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

        <div className="mt-12">
          <ReviewsCarousel reviews={testimonials} />
        </div>
      </div>
    </section>
  );
}
