/**
 * Petits Crousty blancs qui flottent sur les fonds roses, à la place des
 * anciens points. Un seul chemin SVG par élément, pour rester léger.
 */
const CROUSTYS = [
  { left: "8%", top: "70%", size: 20, duration: 9, delay: 0 },
  { left: "19%", top: "38%", size: 14, duration: 11, delay: 1.5 },
  { left: "31%", top: "80%", size: 24, duration: 13, delay: 0.8 },
  { left: "45%", top: "55%", size: 16, duration: 10, delay: 2.2 },
  { left: "58%", top: "33%", size: 22, duration: 14, delay: 1.1 },
  { left: "70%", top: "72%", size: 15, duration: 9.5, delay: 2.6 },
  { left: "82%", top: "45%", size: 19, duration: 11.5, delay: 0.6 },
  { left: "92%", top: "68%", size: 13, duration: 13, delay: 1.8 },
];

export default function Particles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {CROUSTYS.map((c, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="animate-particle absolute text-white/55"
          style={{
            left: c.left,
            top: c.top,
            width: c.size,
            height: c.size,
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
          }}
        >
          {/* Bol de Crousty : coupelle + vapeur */}
          <path
            fill="currentColor"
            d="M3 11h18a9 9 0 0 1-18 0zm5-3.2c0-1.2.9-1.7.9-2.8 0-.5-.2-.9-.5-1.3.9.3 1.5 1 1.5 1.9 0 1.2-.9 1.6-.9 2.6 0 .3.1.6.2.8-.7-.2-1.2-.6-1.2-1.2zm4-.6c0-1.4 1-1.9 1-3.1 0-.5-.2-1-.5-1.4 1 .3 1.7 1.1 1.7 2.1 0 1.3-1 1.8-1 2.9 0 .3.1.6.2.9-.8-.2-1.4-.7-1.4-1.4zm4 .6c0-1 .8-1.4.8-2.3 0-.4-.2-.8-.4-1.1.8.3 1.3.9 1.3 1.7 0 1-.8 1.4-.8 2.2 0 .3.1.5.2.7-.6-.2-1.1-.6-1.1-1.2z"
          />
        </svg>
      ))}
    </div>
  );
}
