import Image from "next/image";
import { posters } from "@/lib/site-data";
import Reveal from "./Reveal";

/** Les affiches de la carte, telles qu'elles sont exposées en restaurant. */
export default function PosterStrip() {
  if (!posters.length) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="graffiti text-center text-2xl sm:text-3xl">La carte affichée en restaurant</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {posters.map((poster, i) => (
            <Reveal key={poster.src} delay={i * 90}>
              <figure className="card-sticker overflow-hidden bg-navy-light">
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  width={1600}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full object-cover"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
