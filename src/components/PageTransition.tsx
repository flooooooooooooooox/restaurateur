"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Enchaînement entre les pages.
 *
 * L'API View Transitions du navigateur a été essayée puis écartée : elle doit
 * photographier l'ancienne page en entier avant d'animer, et sur l'accueil —
 * près de 8 000 px de haut, avec dégradés, flous et calques translucides — la
 * capture dépassait le délai du navigateur. Résultat mesuré : 4 100 ms et une
 * transition abandonnée, contre 90 ms sans elle.
 *
 * Ici, la nouvelle page joue simplement une apparition à l'affichage. Le
 * changement de `key` au changement d'URL remonte le contenu, ce qui relance
 * l'animation. Rien n'attend, rien n'est photographié, et le rendu est le même
 * dans tous les navigateurs.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
