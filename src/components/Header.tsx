"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-data";
import { PhoneIcon } from "./Icons";
import Logo from "./Logo";
import OrderButton from "./OrderButton";

const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/la-carte", label: "La carte" },
  { href: "/le-concept", label: "Le concept" },
  { href: "/contact", label: "Nous trouver" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`animate-header-in sticky top-0 z-50 border-b bg-navy/90 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "border-cream/10 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)]" : "border-cream/5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3.5">
        <Link href="/" className="shrink-0 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand" aria-label={`${siteConfig.name} — accueil`}>
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="ml-auto hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-cream/10 text-cream"
                    : "text-cream/65 hover:bg-cream/5 hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-2">
          <a
            href={siteConfig.phoneHref}
            className="btn btn-outline btn-sm hidden sm:inline-flex"
            data-cta="header-phone"
          >
            <PhoneIcon size={16} />
            {siteConfig.phone}
          </a>
          <OrderButton className="btn btn-primary btn-sm" label="Commander" size={16} source="header" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="rounded-full border border-cream/15 p-2.5 text-cream transition-colors hover:bg-cream/10 md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          className="border-t border-cream/10 bg-navy/95 px-5 pb-4 pt-2 backdrop-blur-xl md:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`block rounded-xl px-3 py-3 text-sm font-medium ${
                pathname === item.href ? "bg-cream/10 text-cream" : "text-cream/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
