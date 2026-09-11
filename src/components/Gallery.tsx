import Image from "next/image";
import { gallery } from "@/lib/site-data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Galerie volontairement désalignée : chaque photo a sa taille, son inclinaison
 * et son décalage vertical, pour casser la régularité de la grille.
 * Masquée tant qu'aucune photo n'est déposée dans public/images.
 */
export default function Gallery() {
  if (!gallery.length) return null;

  return (
    <section className="relative overflow-hidden py-20">
      <div aria-hidden="true" className="animate-drift-a pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-hot/25 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="En images"
          title={<>Le resto, les box, <span className="text-gradient">l&apos;ambiance</span></>}
          intro="Néons roses, bornes de commande et box généreuses : bienvenue chez Crousty Vice."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {gallery.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={i * 90}
              className={photo.wide ? "col-span-2" : ""}
            >
              <figure
                className="card-sticker relative overflow-hidden bg-navy-light"
                style={{
                  transform: photo.tilt ? `rotate(${photo.tilt}deg)` : undefined,
                  marginTop: photo.offset ? `${photo.offset}px` : undefined,
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.wide ? 1600 : 900}
                  height={photo.tall ? 1350 : photo.wide ? 900 : 900}
                  sizes={
                    photo.wide
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 50vw, 33vw"
                  }
                  className={`w-full object-cover ${
                    photo.tall ? "aspect-[3/4]" : photo.wide ? "aspect-[16/9]" : "aspect-square"
                  }`}
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
