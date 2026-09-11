/**
 * Logo texte provisoire aux couleurs de la marque.
 * ⚠️ À remplacer par le vrai logo Vice City du client dès réception
 * (déposer le fichier dans public/ et échanger ce composant par next/image).
 */
export default function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const big = size === "lg";
  return (
    <span className="group relative inline-flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={`relative grid place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand to-brand-dark font-display font-black text-white shadow-[0_0_22px_-6px_rgba(255,46,136,0.9)] ${
          big ? "h-14 w-14 text-2xl" : "h-9 w-9 text-base"
        }`}
      >
        CV
        <span className="animate-shine-sweep absolute inset-y-0 -left-1/2 w-1/2 bg-white/35" />
      </span>
      <span className={`font-display font-extrabold leading-none tracking-tight ${big ? "text-3xl" : "text-lg"}`}>
        <span className="neon-pink">Crousty</span>{" "}
        <span className="neon-cyan">Vice</span>
      </span>
    </span>
  );
}
