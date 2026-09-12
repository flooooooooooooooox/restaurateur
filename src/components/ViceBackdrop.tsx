/**
 * Décor Vice City : ciel dégradé coucher de soleil, étoiles, soleil à bandes
 * horizontales, grille en perspective et scanlines. Se place en fond des
 * panneaux roses, sous la skyline.
 */

/** Minuscules Crousty en suspension (positions fixes, pas de hasard au rendu). */
const SPECKS = [
  [6, 12, 1.6], [31, 8, 1.9], [58, 11, 1.7], [84, 7, 1.8], [43, 33, 1.2],
] as const;


export default function ViceBackdrop({
  withSun = true,
  /** Position horizontale du soleil, en % de la largeur. */
  sunX = 64,
}: {
  withSun?: boolean;
  sunX?: number;
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Ciel : nuit violette en haut, coucher de soleil en bas */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#2b0a4a_0%,#7b1a7a_32%,#d81e8c_58%,#ff4d7d_78%,#ff8a3d_100%)]" />

      {/* Minuscules Crousty, dans la moitié haute */}
      <div className="absolute inset-x-0 top-0 h-1/2">
        {SPECKS.map(([left, top, size], i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className="animate-twinkle absolute text-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size * 7,
              height: size * 7,
              animationDelay: `${(i % 7) * 0.45}s`,
              opacity: 0.7,
            }}
          >
            <path
              fill="currentColor"
              d="M3 11h18a9 9 0 0 1-18 0zm5-3.2c0-1.2.9-1.7.9-2.8 0-.5-.2-.9-.5-1.3.9.3 1.5 1 1.5 1.9 0 1.2-.9 1.6-.9 2.6 0 .3.1.6.2.8-.7-.2-1.2-.6-1.2-1.2zm4-.6c0-1.4 1-1.9 1-3.1 0-.5-.2-1-.5-1.4 1 .3 1.7 1.1 1.7 2.1 0 1.3-1 1.8-1 2.9 0 .3.1.6.2.9-.8-.2-1.4-.7-1.4-1.4zm4 .6c0-1 .8-1.4.8-2.3 0-.4-.2-.8-.4-1.1.8.3 1.3.9 1.3 1.7 0 1-.8 1.4-.8 2.2 0 .3.1.5.2.7-.6-.2-1.1-.6-1.1-1.2z"
            />
          </svg>
        ))}
      </div>

      {/* Rayons de soleil : dégradé conique, sans nœud ni calque fusionné */}
      {withSun && (
        <div
          className="vice-sunburst absolute top-[16%] h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${sunX}%` }}
        />
      )}

      {/* Le soleil à bandes : la signature Vice City */}
      {withSun && (
        <svg
          viewBox="0 0 200 200"
          /* Sur mobile la colonne de texte occupe toute la largeur : le soleil
             descend sous elle. Sur grand écran il remonte sur le côté. */
          className="absolute left-1/2 top-[58%] h-[16rem] w-[16rem] -translate-x-1/2 sm:top-[16%] sm:left-[var(--sun-x)] sm:h-[30rem] sm:w-[30rem]"
          style={{ "--sun-x": `${sunX}%` } as React.CSSProperties}
        >
          <defs>
            <linearGradient id="vice-sun" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff3a8" />
              <stop offset="38%" stopColor="#ffc23d" />
              <stop offset="70%" stopColor="#ff5f8f" />
              <stop offset="100%" stopColor="#d81e8c" />
            </linearGradient>
            {/* Les bandes s'épaississent vers le bas */}
            <mask id="vice-sun-slits">
              <rect x="0" y="0" width="200" height="200" fill="#fff" />
              <g fill="#000">
                <rect x="0" y="112" width="200" height="2.5" />
                <rect x="0" y="122" width="200" height="3.5" />
                <rect x="0" y="134" width="200" height="4.5" />
                <rect x="0" y="148" width="200" height="6" />
                <rect x="0" y="164" width="200" height="8" />
                <rect x="0" y="182" width="200" height="11" />
              </g>
            </mask>
          </defs>
          <circle cx="100" cy="100" r="72" fill="url(#vice-sun)" mask="url(#vice-sun-slits)" opacity="0.62" />
          <circle cx="100" cy="100" r="72" fill="none" stroke="#fff6c9" strokeWidth="0.8" opacity="0.35" />
        </svg>
      )}

      {/* Halo chaud à l'horizon */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-[radial-gradient(ellipse_60%_100%_at_50%_100%,rgba(255,190,90,0.35),transparent_70%)]" />

      {/* Grille en perspective */}
      <div className="vice-grid absolute inset-x-0 bottom-0 h-40 sm:h-52" />

      {/* Voile sombre derrière le texte : vertical sur mobile (le texte prend
          toute la largeur), latéral sur grand écran. */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(30,6,48,0.55)_0%,rgba(30,6,48,0.4)_45%,transparent_80%)] sm:bg-[linear-gradient(to_right,rgba(30,6,48,0.55)_0%,rgba(30,6,48,0.25)_38%,transparent_62%)]" />

      {/* Scanlines VHS */}
      <div className="vice-scanlines absolute inset-0" />
    </div>
  );
}
