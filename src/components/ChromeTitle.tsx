import type { ReactNode } from "react";

/**
 * Titre chromé du logo : liseré prune, contour blanc épais, liseré magenta,
 * puis dégradé blanc → rose. Les quatre couches sont superposées dans l'ordre du DOM
 * (pas de z-index négatif, qui ferait passer les contours derrière le fond).
 * La couche du dessus est dans le flux : c'est elle qui donne la taille.
 */
export default function ChromeTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={className}>
      <span className="chrome-wrap graffiti">
        <span aria-hidden="true" className="chrome-layer chrome-stroke-plum">
          {children}
        </span>
        <span aria-hidden="true" className="chrome-layer chrome-stroke-white">
          {children}
        </span>
        <span aria-hidden="true" className="chrome-layer chrome-stroke-pink">
          {children}
        </span>
        <span className="graffiti-chrome">{children}</span>
      </span>
    </span>
  );
}
