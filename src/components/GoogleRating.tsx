import { siteConfig } from "@/lib/site-data";

/** Étoiles pleines, à moitié, vides — d'après la note. */
function Stars({ rating, size = 20 }: { rating: number; size?: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id={`star-${i}-${Math.round(rating * 10)}`}>
                <stop offset={`${fill * 100}%`} stopColor="#ffb23f" />
                <stop offset={`${fill * 100}%`} stopColor="rgba(255,255,255,0.25)" />
              </linearGradient>
            </defs>
            <path
              d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z"
              fill={`url(#star-${i}-${Math.round(rating * 10)})`}
            />
          </svg>
        );
      })}
    </span>
  );
}

/**
 * Note Google, affichée en texte uniquement.
 * ⚠️ Jamais balisée en JSON-LD : Google interdit le balisage d'avis
 * auto-hébergés sur son propre site.
 */
export default function GoogleRating({ size = 20 }: { size?: number }) {
  const { googleRating, googleReviewCount, googleReviewsUrl } = siteConfig;
  const pretty = String(googleRating).replace(".", ",");
  const hasLink = googleReviewsUrl && !googleReviewsUrl.startsWith("[");

  const content = (
    <>
      <Stars rating={googleRating} size={size} />
      <span className="font-display text-lg font-extrabold text-cream">{pretty}/5</span>
      <span className="text-sm text-cream/65">
        sur {googleReviewCount} avis Google
      </span>
    </>
  );

  const className =
    "inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 rounded-full border border-cream/15 bg-cream/5 px-5 py-2.5";

  return hasLink ? (
    <a
      href={googleReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} transition-colors hover:border-brand hover:bg-cream/10`}
    >
      {content}
    </a>
  ) : (
    <span className={className}>{content}</span>
  );
}
