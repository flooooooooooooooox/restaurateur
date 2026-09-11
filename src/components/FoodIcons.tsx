/**
 * Icônes produits dessinées dans le style des affiches du restaurant :
 * aplats de couleur, contour épais couleur encre, petit reflet.
 * Une icône par article de la carte.
 */
import type { ComponentType } from "react";

const INK = "#2a0a24";

type Props = { size?: number; className?: string };

function Svg({ size = 44, className = "", children }: Props & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      stroke={INK}
      strokeWidth="3"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {children}
    </svg>
  );
}

/** Base : bol de riz fumant. */
export function RiceIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M7 24h34a17 17 0 0 1-34 0z" fill="#f5efe2" />
      <path d="M10 24q4-6 14-6t14 6" fill="#ffffff" />
      <circle cx="17" cy="21.5" r="1.6" fill={INK} stroke="none" />
      <circle cx="24" cy="19.5" r="1.6" fill={INK} stroke="none" />
      <circle cx="31" cy="21.5" r="1.6" fill={INK} stroke="none" />
      <path d="M17 13q3-3 0-6M24 11q3-3 0-6M31 13q3-3 0-6" fill="none" />
      <path d="M9 40h30" />
    </Svg>
  );
}

/** Tenders : lanière panée. */
export function TenderIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M13 36q-4-5 1-12 5-8 13-14 5-4 8 0t-1 9q-5 9-12 15-5 5-9 2z" fill="#f0a83c" />
      <path d="M19 29q2 2 4 0M25 22q2 2 4 0M30 15q2 2 4 0" fill="none" strokeWidth="1.8" />
      <path d="M16 33q1-8 8-14" fill="none" strokeWidth="1.6" stroke="#ffd08a" />
    </Svg>
  );
}

/** Spicy tenders : lanière + piment. */
export function SpicyTenderIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M10 35q-3-5 2-11 5-7 12-12 5-3 7 0t-1 8q-5 8-11 13-5 4-9 2z" fill="#e0561f" />
      <path d="M15 30q2 2 4 0M21 24q2 2 4 0" fill="none" strokeWidth="1.8" />
      <path d="M33 38q-6 0-8-5t3-7q5-2 8 2t-3 10z" fill="#d81f2a" />
      <path d="M34 27q1-4 5-5" fill="none" stroke="#2fae4e" strokeWidth="2.6" />
    </Svg>
  );
}

/** Cordon bleu : escalope panée coupée, jambon et fromage apparents. */
export function CordonBleuIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M6 24q0-9 18-9t18 9-18 9-18-9z" fill="#eeab45" />
      <path d="M14 22q9-4 20-1" fill="none" strokeWidth="1.7" stroke="#ffd08a" />
      <path d="M20 24q0-3 6-3t6 3-6 3-6-3z" fill="#f7d94a" />
      <path d="M22 27q3 2 8 0" fill="none" strokeWidth="1.8" stroke="#e06a86" />
    </Svg>
  );
}

/** Camembert pané : bouchée ronde, cœur fondant. */
export function CamembertIcon(p: Props) {
  return (
    <Svg {...p}>
      <circle cx="24" cy="25" r="15" fill="#edaa4c" />
      <circle cx="24" cy="25" r="8" fill="#fdf3d4" />
      <path d="M18 25q3 4 6 0t6 1" fill="none" strokeWidth="1.8" stroke="#e8c46a" />
      <path d="M13 18q3-3 7-4" fill="none" strokeWidth="1.7" stroke="#ffd08a" />
      <path d="M24 33q-3 6 2 8" fill="none" strokeWidth="2.2" stroke="#fdf3d4" />
    </Svg>
  );
}

/** Nuggets : deux bouchées irrégulières. */
export function NuggetIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M6 30q-2-7 4-10t11 1 3 8-8 6-10-5z" fill="#f0b24f" />
      <path d="M23 20q0-7 7-8t10 4 0 9-9 3-8-8z" fill="#eba949" />
      <path d="M11 26q3-3 7-2M29 16q3-2 6 0" fill="none" strokeWidth="1.7" stroke="#ffd9a0" />
    </Svg>
  );
}

/** Onion rings : anneaux panés empilés. */
export function OnionRingIcon(p: Props) {
  return (
    <Svg {...p}>
      <ellipse cx="24" cy="31" rx="16" ry="8" fill="#e8a842" />
      <ellipse cx="24" cy="31" rx="6.5" ry="3.2" fill="#fff4dd" />
      <ellipse cx="21" cy="18" rx="13" ry="7" fill="#f2b856" />
      <ellipse cx="21" cy="18" rx="5.5" ry="2.8" fill="#fff4dd" />
      <path d="M11 14q3-2 7-2" fill="none" strokeWidth="1.6" stroke="#ffdca6" />
    </Svg>
  );
}

/** Jalapeños : rondelles de piment vert. */
export function JalapenoIcon(p: Props) {
  return (
    <Svg {...p}>
      <circle cx="17" cy="19" r="8.5" fill="#4fae3e" />
      <circle cx="17" cy="19" r="4" fill="#dff3cf" />
      <circle cx="31" cy="30" r="9.5" fill="#63c04e" />
      <circle cx="31" cy="30" r="4.5" fill="#e8f8dc" />
      <circle cx="31" cy="30" r="1.4" fill="#b9dba4" stroke="none" />
      <circle cx="17" cy="19" r="1.2" fill="#b9dba4" stroke="none" />
    </Svg>
  );
}

/** Gratinage : fromage fondu qui coule. */
export function CheeseIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M8 14h32v9q-4 6-7 0t-6 7-6-6-6 5-7-6z" fill="#f7cf45" />
      <path d="M8 14 24 7l16 7z" fill="#ffe27a" />
      <circle cx="18" cy="18" r="2" fill="#e0aa1c" stroke="none" />
      <circle cx="29" cy="17.5" r="1.6" fill="#e0aa1c" stroke="none" />
    </Svg>
  );
}

/** Boisson : gobelet avec couvercle et paille. */
export function DrinkIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M28 6 22 16" fill="none" strokeWidth="3" stroke="#e5189f" />
      <path d="M11 15h26l-3 25q-.4 3-3.4 3H17.4q-3 0-3.4-3z" fill="#8ef0dc" />
      <rect x="9" y="11" width="30" height="6" rx="2.4" fill="#e5189f" />
      <path d="M17 23h14l-1 9H18z" fill="#ffffff" opacity="0.55" stroke="none" />
    </Svg>
  );
}

/** Tiramisu : parts superposées, cacao sur le dessus. */
export function TiramisuIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M8 16h32v22q0 3-3 3H11q-3 0-3-3z" fill="#f6e3c4" />
      <path d="M8 16h32v6H8z" fill="#6b4326" />
      <path d="M8 27h32v5H8z" fill="#d9b98c" />
      <circle cx="16" cy="19" r="1.2" fill="#3d2414" stroke="none" />
      <circle cx="26" cy="18.5" r="1" fill="#3d2414" stroke="none" />
      <circle cx="33" cy="19.5" r="1.1" fill="#3d2414" stroke="none" />
    </Svg>
  );
}

/** Cheesecake : part triangulaire avec coulis. */
export function CheesecakeIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M8 38 24 10l16 28z" fill="#fdf0cf" />
      <path d="M12.5 30h23l2.5 4.5q-5 3-14 3t-14-3z" fill="#c98a45" />
      <path d="M24 10 18 21q5 3 12 0z" fill="#e8456b" />
      <path d="M15 25q5 3 12 0" fill="none" strokeWidth="1.7" stroke="#efd9a4" />
    </Svg>
  );
}

/** Tarte au Daim : part avec nappage chocolat et éclats de caramel. */
export function DaimIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M7 37 24 11l17 26z" fill="#f3dca8" />
      <path d="M13 28 24 11l11 17q-11 4-22 0z" fill="#4a2a16" />
      <rect x="19" y="20" width="4.5" height="4.5" rx="1" fill="#f0a83c" transform="rotate(14 21 22)" />
      <rect x="26" y="24" width="4" height="4" rx="1" fill="#f0a83c" transform="rotate(-18 28 26)" />
      <path d="M11 33q13 4 26 0" fill="none" strokeWidth="1.8" stroke="#e8cf9a" />
    </Svg>
  );
}

export const FOOD_ICONS = {
  rice: RiceIcon,
  tender: TenderIcon,
  spicy: SpicyTenderIcon,
  cordon: CordonBleuIcon,
  camembert: CamembertIcon,
  nugget: NuggetIcon,
  onion: OnionRingIcon,
  jalapeno: JalapenoIcon,
  cheese: CheeseIcon,
  drink: DrinkIcon,
  tiramisu: TiramisuIcon,
  cheesecake: CheesecakeIcon,
  daim: DaimIcon,
} satisfies Record<string, ComponentType<Props>>;

export type FoodIconName = keyof typeof FOOD_ICONS;

export function FoodIcon({ name, size, className }: { name: FoodIconName } & Props) {
  const Icon = FOOD_ICONS[name];
  return <Icon size={size} className={className} />;
}
