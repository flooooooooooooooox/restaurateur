/**
 * Pot de sauce dessiné, à l'image des ramequins servis en restaurant :
 * coupelle blanche évasée, sauce à l'intérieur, reflet et ombre portée.
 * La couleur de la sauce vient de `site-data`.
 */
type Props = {
  sauce: string;
  top: string;
  size?: number;
  className?: string;
};

export default function SauceCup({ sauce, top, size = 88, className = "" }: Props) {
  const id = sauce.replace(/[^a-z0-9]/gi, "");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={`s-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={top} />
          <stop offset="100%" stopColor={sauce} />
        </linearGradient>
        <linearGradient id={`c-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#f3eef6" />
          <stop offset="100%" stopColor="#d9d0e0" />
        </linearGradient>
      </defs>

      {/* Ombre au sol */}
      <ellipse cx="50" cy="88" rx="30" ry="5.5" fill="rgba(42,10,36,0.35)" />

      {/* Coupelle évasée */}
      <path
        d="M20 38 L27 82 Q28 87 34 87 L66 87 Q72 87 73 82 L80 38 Z"
        fill={`url(#c-${id})`}
        stroke="#2a0a24"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />

      {/* Sauce dans la coupelle */}
      <ellipse cx="50" cy="39" rx="27" ry="9" fill={`url(#s-${id})`} stroke="#2a0a24" strokeWidth="3.2" />

      {/* Reflet sur la sauce */}
      <ellipse cx="41" cy="36.5" rx="8" ry="2.6" fill="#ffffff" opacity="0.45" />

      {/* Reflet sur la coupelle */}
      <path d="M26 44 L30 76" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}
