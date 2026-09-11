"use client";

import { useCallback, useEffect, useRef } from "react";
import type { Review } from "@/lib/site-data";

function Stars({ count }: { count: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${count} sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#ffb23f" aria-hidden="true">
          <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z" />
        </svg>
      ))}
    </span>
  );
}

function Card({ review }: { review: Review }) {
  return (
    <figure
      data-card
      className="card-sticker flex h-full w-[18rem] shrink-0 snap-start flex-col bg-white p-5 sm:w-[21rem] sm:p-6"
    >
      <div className="flex items-center justify-between gap-3">
        <figcaption className="font-display text-sm font-extrabold text-ink">{review.name}</figcaption>
        {review.source === "google" && (
          <span className="shrink-0 text-[10px] font-extrabold uppercase tracking-wide text-ink/45">
            Avis Google
          </span>
        )}
      </div>
      <span className="mt-2 block">
        <Stars count={review.rating} />
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

/**
 * Carrousel d'avis piloté par l'utilisateur, avec boucle infinie.
 *
 * La liste est rendue deux fois. Dès que le défilement dépasse la moitié de la
 * piste, on retranche cette moitié d'un coup (sans animation) : la position
 * visible est identique, donc le saut est invisible et on peut tourner
 * indéfiniment dans les deux sens. Même principe en arrivant à zéro.
 */
export default function ReviewsCarousel({ reviews }: { reviews: readonly Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  const normalize = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    if (half <= 0) return;
    if (el.scrollLeft >= half) {
      el.style.scrollBehavior = "auto";
      el.scrollLeft -= half;
      el.style.scrollBehavior = "";
    } else if (el.scrollLeft <= 0) {
      el.style.scrollBehavior = "auto";
      el.scrollLeft += half;
      el.style.scrollBehavior = "";
    }
  }, []);

  // Départ au milieu de la piste : on peut aller à gauche dès le premier clic.
  useEffect(() => {
    const el = trackRef.current;
    if (el) el.scrollLeft = el.scrollWidth / 4;
  }, []);

  const onScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      normalize();
      ticking.current = false;
    });
  }, [normalize]);

  const go = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 20;
    const step = card ? card.offsetWidth + gap : 320;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const loop = [...reviews, ...reviews];

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={onScroll}
        tabIndex={0}
        role="region"
        aria-label="Avis clients"
        className="no-scrollbar snap-x snap-mandatory overflow-x-auto scroll-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lemon"
      >
        <div className="flex w-max gap-5 px-5">
          {loop.map((review, i) => (
            <Card key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Les flèches sont placées SOUS la piste, jamais par-dessus : les cartes
          défilant en continu, un bouton superposé finirait toujours par
          masquer le texte de l'une d'elles. */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Avis précédents"
          className="grid h-11 w-11 place-items-center rounded-full border-[3px] border-ink bg-lemon text-ink shadow-[0_4px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5 active:translate-y-0.5"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Avis suivants"
          className="grid h-11 w-11 place-items-center rounded-full border-[3px] border-ink bg-lemon text-ink shadow-[0_4px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5 active:translate-y-0.5"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

    </div>
  );
}
