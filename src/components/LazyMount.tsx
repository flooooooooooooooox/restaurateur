"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Ne monte ses enfants que lorsqu'ils approchent de l'écran.
 *
 * Sert à la carte Leaflet : sa bibliothèque et sa feuille de style pèsent une
 * bonne part du JavaScript de la page, alors qu'elle se trouve tout en bas.
 * La charger au montage retardait l'affichage du haut de page pour rien.
 */
export default function LazyMount({
  children,
  placeholder,
  rootMargin = "300px",
}: {
  children: ReactNode;
  placeholder?: ReactNode;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{visible ? children : placeholder}</div>;
}
