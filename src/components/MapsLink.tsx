"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { directionsUrl, siteConfig } from "@/lib/site-data";
import { PinIcon } from "./Icons";

/**
 * Ouvre l'itinéraire Google Maps, après confirmation : on prévient avant de
 * quitter le site.
 *
 * La boîte est rendue dans un PORTAIL vers <body>. Placée dans le hero, son
 * `position: fixed` se calait sur l'ancêtre animé — une animation avec
 * `transform` crée un bloc conteneur — et elle s'affichait derrière le titre
 * au lieu de couvrir l'écran.
 */
export default function MapsLink({ className = "" }: { className?: string }) {
  const [asking, setAsking] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);
  const confirmRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback(() => {
    setAsking(false);
    openerRef.current?.focus();
  }, []);

  // Échap referme, et le focus part sur le bouton de confirmation à l'ouverture.
  useEffect(() => {
    if (!asking) return;
    confirmRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [asking, close]);

  const dialog = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="maps-title"
      className="fixed inset-0 z-[100] grid place-items-center bg-ink/80 p-5 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="card-sticker panel-lemon w-full max-w-sm p-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border-[3px] border-ink bg-hot text-white">
          <PinIcon size={22} />
        </span>

        <h2 id="maps-title" className="graffiti mt-4 text-xl">
          Ouvrir l&apos;itinéraire&nbsp;?
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-ink/75">
          Vous allez quitter le site pour Google&nbsp;Maps, qui vous guidera jusqu&apos;au{" "}
          {siteConfig.street}, {siteConfig.postalCode} {siteConfig.city}.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            ref={confirmRef}
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            onClick={close}
          >
            Continuer
          </a>
          <button
            type="button"
            onClick={close}
            className="btn btn-sm border-[3px] border-ink bg-white font-bold text-ink"
          >
            Rester ici
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        ref={openerRef}
        type="button"
        onClick={() => setAsking(true)}
        data-cta="address-maps"
        className={className}
        aria-haspopup="dialog"
      >
        {siteConfig.street} · {siteConfig.city}
      </button>

      {/* Le portail n'est monté qu'après un clic : on est donc toujours côté
          client, et le rendu initial reste identique à celui du serveur. */}
      {asking && createPortal(dialog, document.body)}
    </>
  );
}
