"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Bouton flottant qui change de rôle selon l'endroit où l'on se trouve :
 *
 * - sur l'accueil, une flèche qui remonte en haut de page, une fois qu'on a
 *   assez défilé pour que ce soit utile ;
 * - sur toute autre page, une maison qui ramène à l'accueil.
 *
 * Les deux icônes sont superposées et permutent par opacité et rotation, pour
 * que le passage de l'une à l'autre se voie comme une transformation.
 */
export default function BackButton() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sur l'accueil il n'apparaît qu'une fois la page parcourue ; ailleurs,
  // le retour doit rester disponible tout de suite.
  const shown = isHome ? scrolled : true;

  const shared =
    "fixed right-4 z-40 grid h-12 w-12 place-items-center rounded-full border-[3px] border-ink bg-lemon text-ink shadow-[0_5px_0_var(--color-ink)] transition-[opacity,transform] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lemon bottom-[88px] md:bottom-6";

  const visibility = shown
    ? "pointer-events-auto scale-100 opacity-100"
    : "pointer-events-none scale-75 opacity-0";

  const icons = (
    <span className="relative grid h-6 w-6 place-items-center">
      {/* Maison */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={`absolute h-6 w-6 transition-[opacity,transform] duration-300 ease-out ${
          isHome ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      >
        <path d="M3 11l9-7 9 7" />
        <path d="M5.5 9.6V20h13V9.6" />
        <path d="M10 20v-5h4v5" />
      </svg>
      {/* Flèche vers le haut */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={`absolute h-6 w-6 transition-[opacity,transform] duration-300 ease-out ${
          isHome ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
        }`}
      >
        <path d="M12 19V5" />
        <path d="M6 11l6-6 6 6" />
      </svg>
    </span>
  );

  if (isHome) {
    return (
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Revenir en haut de la page"
        className={`${shared} ${visibility}`}
      >
        {icons}
      </button>
    );
  }

  return (
    <Link
      href="/"
      aria-label="Revenir à l’accueil"
      className={`${shared} ${visibility}`}
    >
      {icons}
    </Link>
  );
}
