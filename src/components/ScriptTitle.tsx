import type { ReactNode } from "react";

/**
 * Mot manuscrit façon « Vice » du logo : mêmes quatre couches que ChromeTitle,
 * plus la fioriture qui souligne le mot.
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
      <span className="script-wrap">
        <span className="chrome-wrap script-face">
          <span aria-hidden="true" className="chrome-layer chrome-stroke-plum">
            {children}
          </span>
          <span aria-hidden="true" className="chrome-layer chrome-stroke-white">
            {children}
          </span>
          <span aria-hidden="true" className="chrome-layer chrome-stroke-pink">
            {children}
          </span>
          <span className="graffiti-chrome">{children}</span>
        </span>

        <svg aria-hidden="true" viewBox="0 0 300 26" preserveAspectRatio="none" className="script-swash">
          <path d="M6 17 C 60 26, 150 24, 240 12 C 262 9, 276 8, 288 12" fill="none" stroke="#b3105f" strokeWidth="14" strokeLinecap="round" />
          <path d="M6 17 C 60 26, 150 24, 240 12 C 262 9, 276 8, 288 12" fill="none" stroke="#ffffff" strokeWidth="11" strokeLinecap="round" />
          <path d="M6 17 C 60 26, 150 24, 240 12 C 262 9, 276 8, 288 12" fill="none" stroke="#ff4fa8" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </span>
    </span>
  );
}
