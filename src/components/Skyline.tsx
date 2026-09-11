/**
 * Silhouette de ville + palmiers, reprise du décor des affiches.
 * Purement décorative : elle habille le bas des panneaux roses.
 */
export default function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 180"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      className={className}
    >
      <g fill="#5e0c46">
        {/* Immeubles */}
        <rect x="60" y="86" width="52" height="94" />
        <rect x="124" y="58" width="38" height="122" />
        <rect x="176" y="104" width="64" height="76" />
        <rect x="330" y="70" width="44" height="110" />
        <rect x="386" y="98" width="58" height="82" />
        <rect x="456" y="48" width="34" height="132" />
        <rect x="640" y="92" width="60" height="88" />
        <rect x="712" y="64" width="40" height="116" />
        <rect x="764" y="106" width="54" height="74" />
        <rect x="940" y="76" width="46" height="104" />
        <rect x="998" y="100" width="62" height="80" />
        <rect x="1072" y="60" width="36" height="120" />
      </g>

      {/* Palmiers */}
      <g fill="#4a0937">
        {[260, 560, 880, 1160].map((x) => (
          <g key={x} transform={`translate(${x} 0)`}>
            <path d="M0 180 Q4 132 14 104 L22 106 Q12 136 10 180 Z" />
            <path d="M14 104 Q-16 88 -34 96 Q-14 74 16 98 Z" />
            <path d="M14 104 Q44 84 64 94 Q42 70 12 98 Z" />
            <path d="M14 104 Q2 74 -12 62 Q16 66 22 100 Z" />
            <path d="M14 104 Q30 76 48 66 Q26 60 16 100 Z" />
          </g>
        ))}
      </g>
    </svg>
  );
}
