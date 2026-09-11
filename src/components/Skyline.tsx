/**
 * Skyline « Vice City » : immeubles Art déco détaillés (retraits, corniches,
 * fenêtres allumées, antennes, enseignes néon) et palmiers à frondes nervurées.
 * Décoratif — habille le bas des panneaux roses.
 */

const INK = "#4a0937";
const INK_DARK = "#38062a";
const WINDOW = "#ffd75e";
const WINDOW_ALT = "#7ff0e0";

/** Trame de fenêtres allumées, semi-aléatoire mais déterministe. */
function Windows({
  x,
  y,
  w,
  h,
  cols,
  rows,
  seed,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  cols: number;
  rows: number;
  seed: number;
}) {
  const cells = [];
  const gapX = w / cols;
  const gapY = h / rows;
  const ww = Math.min(gapX * 0.46, 5);
  const wh = Math.min(gapY * 0.42, 6);

  for (let c = 0; c < cols; c += 1) {
    for (let r = 0; r < rows; r += 1) {
      const n = (c * 7 + r * 13 + seed * 31) % 11;
      if (n < 4) continue;
      cells.push(
        <rect
          key={`${c}-${r}`}
          x={x + gapX * c + (gapX - ww) / 2}
          y={y + gapY * r + (gapY - wh) / 2}
          width={ww}
          height={wh}
          rx={0.8}
          fill={n > 8 ? WINDOW_ALT : WINDOW}
          opacity={n > 8 ? 0.5 : 0.65}
        />
      );
    }
  }
  return <g>{cells}</g>;
}

/** Tour Art déco à retraits successifs, couronnée d'une flèche. */
function DecoTower({ x, y, w, seed }: { x: number; y: number; w: number; seed: number }) {
  const h = 200 - y;
  return (
    <g>
      <rect x={x} y={y + 26} width={w} height={h - 26} fill={INK} />
      <rect x={x + w * 0.14} y={y + 12} width={w * 0.72} height={22} fill={INK} />
      <rect x={x + w * 0.34} y={y} width={w * 0.32} height={16} fill={INK} />
      {/* Flèche */}
      <rect x={x + w * 0.47} y={y - 16} width={w * 0.06} height={18} fill={INK_DARK} />
      <circle cx={x + w * 0.5} cy={y - 18} r={2.4} fill={WINDOW} opacity="0.8" />
      {/* Corniches */}
      <rect x={x - 2} y={y + 24} width={w + 4} height={3} fill={INK_DARK} />
      <rect x={x - 2} y={y + 60} width={w + 4} height={2.5} fill={INK_DARK} />
      <Windows x={x + 4} y={y + 34} w={w - 8} h={h - 46} cols={Math.max(2, Math.round(w / 13))} rows={Math.max(3, Math.round((h - 46) / 15))} seed={seed} />
    </g>
  );
}

/** Barre horizontale surmontée d'un bandeau néon. */
function NeonBlock({ x, y, w, seed, neon = WINDOW_ALT }: { x: number; y: number; w: number; seed: number; neon?: string }) {
  const h = 200 - y;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={INK} />
      <rect x={x} y={y} width={w} height={4} fill={neon} opacity="0.55" />
      <rect x={x + w * 0.2} y={y - 9} width={w * 0.6} height={9} fill={INK_DARK} />
      <Windows x={x + 5} y={y + 12} w={w - 10} h={h - 20} cols={Math.max(2, Math.round(w / 14))} rows={Math.max(2, Math.round((h - 20) / 16))} seed={seed} />
    </g>
  );
}

/** Immeuble à toit en gradins. */
function StepBlock({ x, y, w, seed }: { x: number; y: number; w: number; seed: number }) {
  const h = 200 - y;
  return (
    <g>
      <rect x={x} y={y + 14} width={w} height={h - 14} fill={INK} />
      <rect x={x + w * 0.1} y={y + 7} width={w * 0.8} height={10} fill={INK} />
      <rect x={x + w * 0.26} y={y} width={w * 0.48} height={9} fill={INK} />
      <rect x={x - 1.5} y={y + 12} width={w + 3} height={2.5} fill={INK_DARK} />
      <Windows x={x + 4} y={y + 22} w={w - 8} h={h - 32} cols={Math.max(2, Math.round(w / 13))} rows={Math.max(3, Math.round((h - 32) / 15))} seed={seed} />
    </g>
  );
}

/** Palmier : tronc annelé, frondes nervurées, noix de coco. */
function Palm({ x, scale = 1, flip = false }: { x: number; scale?: number; flip?: boolean }) {
  const fronds = [
    "M0 0 Q-30 -14 -56 -4 Q-40 -24 -6 -10 Z",
    "M0 0 Q-22 -28 -40 -38 Q-14 -36 -2 -10 Z",
    "M0 0 Q2 -32 -6 -54 Q14 -36 8 -8 Z",
    "M0 0 Q24 -28 44 -38 Q18 -36 4 -10 Z",
    "M0 0 Q32 -13 58 -2 Q40 -24 6 -10 Z",
  ];

  return (
    <g transform={`translate(${x} 0) scale(${flip ? -scale : scale} ${scale})`}>
      {/* Tronc */}
      <path d="M-5 200 Q0 140 9 92 L19 94 Q7 142 5 200 Z" fill={INK} />
      {/* Anneaux du tronc */}
      {[100, 114, 128, 142, 156, 170].map((ty, i) => (
        <rect key={ty} x={-3 + i * 0.9} y={ty} width={13 - i * 0.5} height={2} rx={1} fill={INK_DARK} />
      ))}
      {/* Frondes */}
      <g transform="translate(13 92)" fill={INK}>
        {fronds.map((d) => (
          <path key={d} d={d} />
        ))}
        {/* Nervure centrale de chaque fronde */}
        <g stroke={INK_DARK} strokeWidth="1.4" fill="none" opacity="0.9">
          <path d="M0 0 Q-28 -12 -52 -4" />
          <path d="M0 0 Q-20 -26 -36 -36" />
          <path d="M0 0 Q0 -30 -4 -50" />
          <path d="M0 0 Q22 -26 40 -36" />
          <path d="M0 0 Q30 -12 54 -3" />
        </g>
        {/* Noix de coco */}
        <circle cx="-4" cy="5" r="4" fill={INK_DARK} />
        <circle cx="5" cy="7" r="3.4" fill={INK_DARK} />
      </g>
    </g>
  );
}

export default function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 200"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      className={className}
    >
      {/* Arrière-plan : immeubles lointains, plus pâles */}
      <g opacity="0.45">
        <NeonBlock x={90} y={112} w={70} seed={2} />
        <StepBlock x={300} y={98} w={58} seed={5} />
        <NeonBlock x={620} y={118} w={82} seed={8} neon={WINDOW} />
        <StepBlock x={905} y={104} w={64} seed={3} />
        <NeonBlock x={1090} y={120} w={76} seed={6} />
      </g>

      {/* Premier plan */}
      <DecoTower x={40} y={58} w={46} seed={1} />
      <NeonBlock x={150} y={104} w={74} seed={4} />
      <StepBlock x={236} y={80} w={52} seed={7} />
      <DecoTower x={360} y={46} w={40} seed={9} />
      <NeonBlock x={412} y={110} w={88} seed={2} neon={WINDOW} />
      <StepBlock x={512} y={72} w={56} seed={6} />
      <NeonBlock x={660} y={96} w={68} seed={1} />
      <DecoTower x={742} y={54} w={44} seed={5} />
      <StepBlock x={800} y={106} w={62} seed={8} />
      <NeonBlock x={874} y={88} w={54} seed={3} neon={WINDOW} />
      <DecoTower x={962} y={64} w={42} seed={7} />
      <StepBlock x={1018} y={100} w={60} seed={4} />
      <NeonBlock x={1092} y={82} w={70} seed={9} />

      {/* Palmiers au premier plan */}
      <Palm x={300} scale={0.92} />
      <Palm x={596} scale={1.06} flip />
      <Palm x={930} scale={0.86} />
      <Palm x={1178} scale={1} flip />
    </svg>
  );
}
