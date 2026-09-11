import Image from "next/image";
import { gallery } from "@/lib/site-data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Masquée tant qu'aucune photo n'est déposée dans public/images. */
export default function Gallery() {
  if (!gallery.length) return null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="En images"
          title="Le resto, les box, l'ambiance"
          intro="Néons roses, bornes de commande et box généreuses : bienvenue chez Crousty Vice."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 80} className={photo.wide ? "sm:col-span-2" : ""}>
              <figure className="card-sticker relative h-full overflow-hidden bg-navy-light">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.wide ? 1600 : 800}
                  height={photo.wide ? 900 : 800}
                  sizes={photo.wide ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                  className="h-full w-full object-cover"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
