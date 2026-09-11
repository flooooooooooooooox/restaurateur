import type { ReactNode } from "react";

/**
 * Lettrage du logo, reconstitué lettre par lettre.
 *
 * Avec un seul bloc de texte, les contours blancs de lettres voisines
 * fusionnent en une masse. Sur le logo, chaque lettre garde son contour
 * complet et passe PAR-DESSUS la précédente. Il faut donc une pile par
 * lettre, avec un empilement croissant de gauche à droite.
 *
 * Chaque lettre superpose, de bas en haut :
 *   1. liseré bordeaux         (contour extérieur)
 *   2. contour blanc épais
 *   3. raccord magenta
 *   4. remplissage dégradé     (avec le liseré sombre du bas = biseau)
 *   5. reflet spéculaire       (la brillance du haut)
 * et porte sa propre extrusion 3D.
 */

function Letter({ char, index }: { char: string; index: number }) {
  if (char === " ") {
    return <span className="chrome-space"> </span>;
  }
  return (
    <span className="chrome-letter" style={{ zIndex: index + 1 }}>
      <span className="chrome-layer chrome-stroke-plum">{char}</span>
      <span className="chrome-layer chrome-stroke-white">{char}</span>
      <span className="chrome-layer chrome-stroke-pink">{char}</span>
      <span className="graffiti-chrome">{char}</span>
      <span className="chrome-layer chrome-gloss">{char}</span>
    </span>
  );
}

export default function ChromeTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const text = String(children);

  return (
    <span className={className}>
      {/* Le texte est découpé en lettres pour l'empilement : on le redonne
          en un seul morceau aux lecteurs d'écran, et on masque la version
          découpée, qui serait épelée lettre par lettre. */}
      <span className="sr-only">{text} </span>
      <span aria-hidden="true" className="chrome-line graffiti">
        {text.split("").map((char, i) => (
          <Letter key={`${char}-${i}`} char={char} index={i} />
        ))}
      </span>
    </span>
  );
}
