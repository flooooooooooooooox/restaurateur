import type { ReactNode } from "react";

export default function LegalLayout({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div aria-hidden="true" className="animate-drift-a pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5">
        <h1 className="font-display text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        {intro && <p className="mt-4 text-base leading-relaxed text-cream/65">{intro}</p>}
        <div className="mt-12 space-y-10 text-sm leading-relaxed text-cream/70 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-cream [&_h3]:mt-5 [&_h3]:font-semibold [&_h3]:text-cream/90 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2 [&_ul]:mt-3 [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_li]:list-disc [&_p]:mt-3 [&_dl]:mt-3 [&_dt]:mt-3 [&_dt]:font-semibold [&_dt]:text-cream/90">
          {children}
        </div>
      </div>
    </section>
  );
}

/** Met en évidence les informations que le client doit encore fournir. */
export function Todo({ children }: { children: ReactNode }) {
  return children === "[à compléter]" ? (
    <span className="rounded bg-brand/20 px-1.5 py-0.5 font-semibold text-brand">[à compléter]</span>
  ) : (
    <>{children}</>
  );
}
