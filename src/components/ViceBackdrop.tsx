/**
 * Décor Vice City : ciel dégradé coucher de soleil, étoiles, soleil à bandes
 * horizontales, grille en perspective et scanlines. Se place en fond des
 * panneaux roses, sous la skyline.
 */

/** Étoiles fixes (positions déterministes, pas de rendu aléatoire). */
const STARS = [
  [6, 12, 1.6], [14, 26, 1.1], [23, 8, 1.9], [31, 19, 1.2], [38, 6, 1.4],
  [46, 22, 1], [54, 11, 1.7], [61, 27, 1.2], [69, 9, 1.5], [77, 20, 1.1],
  [84, 7, 1.8], [91, 24, 1.3], [18, 38, 1], [43, 35, 1.2], [72, 37, 1.4],
  [96, 14, 1.2], [3, 30, 1.3], [58, 32, 1],
] as const;


/** Rayons de soleil : wedges alternés rayonnant depuis l'horizon. */
function Sunburst({ x }: { x: number }) {
  const rays = [];
  const count = 28;
  for (let i = 0; i < count; i += 1) {
    // Un rayon sur deux, pour l'alternance claire/fond
    if (i % 2) continue;
    const a0 = (i / count) * Math.PI * 2;
    const a1 = ((i + 1) / count) * Math.PI * 2;
    const r = 900;
    rays.push(
      <path
        key={i}
        d={`M0 0 L${Math.cos(a0) * r} ${Math.sin(a0) * r} L${Math.cos(a1) * r} ${Math.sin(a1) * r} Z`}
        fill="#ffffff"
      />
    );
  }
  return (
    <svg
      viewBox="-900 -900 1800 1800"
      className="absolute top-[16%] h-[150rem] w-[150rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.07] mix-blend-screen"
      style={{ left: `${x}%` }}
    >
      <g className="animate-sunburst">{rays}</g>
    </svg>
  );
}

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

      {/* Étoiles, dans la moitié haute */}
      <div className="absolute inset-x-0 top-0 h-1/2">
        {STARS.map(([left, top, size], i) => (
          <span
            key={i}
            className="animate-twinkle absolute rounded-full bg-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              animationDelay: `${(i % 7) * 0.45}s`,
              opacity: 0.85,
            }}
          />
        ))}
      </div>

      {/* Rayons de soleil, derrière le disque */}
      {withSun && <Sunburst x={sunX} />}

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
