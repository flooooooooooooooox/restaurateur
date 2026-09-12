// Jeu d'icônes homogène : même grille 24, même strokeWidth, même style de trait.
type Props = { className?: string; size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export function PhoneIcon({ className, size = 20 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function PinIcon({ className, size = 20 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M20 10.5c0 5.4-8 11.5-8 11.5s-8-6.1-8-11.5a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10.5" r="2.8" />
    </svg>
  );
}

export function ClockIcon({ className, size = 20 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function BowlIcon({ className, size = 20 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 11h18a9 9 0 0 1-9 9 9 9 0 0 1-9-9z" />
      <path d="M8 8c0-1.5 1-2 1-3.2M12 7.5c0-1.8 1.2-2.3 1.2-3.8M16 8c0-1.3.8-1.8.8-2.8" />
    </svg>
  );
}

export function FlameIcon({ className, size = 20 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 22c3.9 0 7-2.9 7-6.6 0-4.3-4.2-6.6-4.2-10.4 0 0-2.2 1-2.9 3.7C11 6.3 9.4 5 9.4 5S10 7.8 8.2 9.6C6.3 11.4 5 13 5 15.4 5 19.1 8.1 22 12 22z" />
    </svg>
  );
}

export function SparkIcon({ className, size = 20 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    </svg>
  );
}

export function ArrowIcon({ className, size = 20 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function QuoteIcon({ className, size = 20 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M9 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2H4M20 7h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2h-1" />
    </svg>
  );
}

export function PlusIcon({ className, size = 20 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function TikTokIcon({ className, size = 20 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.79-2.46V9.79a5.94 5.94 0 1 0 4.88 5.84V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.29 4.29 0 0 1-3.24-1.48z" />
    </svg>
  );
}

export function BagIcon({ className, size = 20 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 8h14l-1.2 12.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}
