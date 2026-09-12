/**
 * Skyline Vice City.
 *
 * Rendue comme IMAGE DE FOND et non en SVG inline : chaque instance inline
 * créait près de 360 nœuds (les fenêtres allumées surtout), soit plus d'un
 * millier de nœuds pour les trois skylines de la page, et le défilement
 * tombait à 37 images par seconde. En image de fond, le navigateur la
 * rastérise une fois, la met en cache et la réutilise : zéro nœud.
 *
 * Le fichier est généré par scripts/gen-skyline.mjs.
 */
export default function Skyline({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`bg-[url('/images/skyline.svg')] bg-[length:auto_100%] bg-bottom bg-repeat-x ${className}`}
    />
  );
}
