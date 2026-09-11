import type { ReactNode } from "react";

/**
 * Mot manuscrit façon « Vice » du logo. Même construction que ChromeTitle,
 * mais sans découpe par lettre : une écriture liée doit rester d'un seul
 * tenant, sinon les jambages ne se rejoignent plus. S'y ajoute la fioriture
 * qui souligne le mot.
 */
export default function ScriptTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={className}>
      {/* Les couches superposées répéteraient le mot : une seule version est
          exposée aux lecteurs d'écran. */}
      <span className="sr-only">{children} </span>
      <span aria-hidden="true" className="script-wrap">
        <span className="chrome-letter script-face">
          <span className="chrome-layer chrome-stroke-plum">{children}</span>
          <span className="chrome-layer chrome-stroke-white">{children}</span>
          <span className="chrome-layer chrome-stroke-pink">{children}</span>
          <span className="graffiti-chrome">{children}</span>
          <span className="chrome-layer chrome-gloss">{children}</span>
        </span>

        <svg aria-hidden="true" viewBox="0 0 300 26" preserveAspectRatio="none" className="script-swash">
          <path d="M6 17 C 60 26, 150 24, 240 12 C 262 9, 276 8, 288 12" fill="none" stroke="#9c0a52" strokeWidth="15" strokeLinecap="round" />
          <path d="M6 17 C 60 26, 150 24, 240 12 C 262 9, 276 8, 288 12" fill="none" stroke="#ffffff" strokeWidth="11" strokeLinecap="round" />
          <path d="M6 16 C 60 25, 150 23, 240 11 C 262 8, 276 7, 288 11" fill="none" stroke="#ff63b6" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </span>
    </span>
  );
}
