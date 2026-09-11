import type { ReactNode } from "react";

/**
 * Mot manuscrit façon « Vice » du logo : mêmes trois couches que ChromeTitle,
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
          <span aria-hidden="true" className="chrome-layer chrome-stroke-ink">
            {children}
          </span>
          <span aria-hidden="true" className="chrome-layer chrome-stroke-pink">
            {children}
          </span>
          <span className="graffiti-chrome">{children}</span>
        </span>

        <svg aria-hidden="true" viewBox="0 0 300 26" preserveAspectRatio="none" className="script-swash">
          <path d="M6 17 C 60 26, 150 24, 240 12 C 262 9, 276 8, 288 12" fill="none" stroke="#2a0a24" strokeWidth="9" strokeLinecap="round" />
          <path d="M6 17 C 60 26, 150 24, 240 12 C 262 9, 276 8, 288 12" fill="none" stroke="#ff2e88" strokeWidth="6" strokeLinecap="round" />
          <path d="M6 16 C 60 24, 150 22, 240 11 C 262 8, 276 7, 288 11" fill="none" stroke="#ffe9f7" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </span>
    </span>
  );
}
