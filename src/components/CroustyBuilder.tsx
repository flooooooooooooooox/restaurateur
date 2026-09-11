"use client";

import { useMemo, useState } from "react";
import { menu, sauces, siteConfig } from "@/lib/site-data";
import SauceCup from "./SauceCup";
import { PhoneIcon } from "./Icons";
import { FoodIcon, type FoodIconName } from "./FoodIcons";

const euros = (n: number) => `${n.toFixed(2).replace(".", ",")} €`;

const FORMULES: { id: string; label: string; size: string; price: number; icon: FoodIconName }[] = [
  { id: "s-seul", label: "Crousty seul", size: "S", price: 5.9, icon: "rice" },
  { id: "m-seul", label: "Crousty seul", size: "M", price: 7.9, icon: "rice" },
  { id: "s-menu", label: "En menu", size: "S", price: 6.9, icon: "drink" },
  { id: "m-menu", label: "En menu", size: "M", price: 8.9, icon: "drink" },
];

const viandes = menu.find((c) => c.id === "viandes")?.items ?? [];
const toppings = menu.find((c) => c.id === "toppings")?.items ?? [];
const sides = menu.find((c) => c.id === "sides")?.items ?? [];
const desserts = menu.find((c) => c.id === "desserts")?.items ?? [];

type Extra = { key: string; label: string; price: number; icon?: FoodIconName };

function Step({ n, title, hint, children }: { n: number; title: string; hint?: string; children: React.ReactNode }) {
  return (
    <section className="border-t-[3px] border-ink/15 pt-6 first:border-t-0 first:pt-0">
      <h3 className="flex items-center gap-3">
        <span className="graffiti grid h-9 w-9 shrink-0 place-items-center rounded-full bg-hot text-base [-webkit-text-stroke:0.08em_var(--color-ink)]">
          {n}
        </span>
        <span className="graffiti text-xl [-webkit-text-stroke:0.1em_var(--color-ink)]">{title}</span>
      </h3>
      {hint && <p className="mt-2 pl-12 text-sm font-medium text-ink/60">{hint}</p>}
      <div className="mt-4 pl-0 sm:pl-12">{children}</div>
    </section>
  );
}

/** Bouton d'option : coche visible, accessible au clavier. */
function Choice({
  selected,
  onClick,
  children,
  icon,
  role = "checkbox",
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: FoodIconName;
  role?: "checkbox" | "radio";
}) {
  return (
    <button
      type="button"
      role={role}
      aria-checked={selected}
      onClick={onClick}
      className={`card-sticker flex items-center gap-2 px-3.5 py-2.5 text-left text-sm font-bold transition-colors ${
        selected ? "bg-hot text-white" : "bg-white text-ink hover:bg-lemon"
      }`}
    >
      <span
        aria-hidden="true"
        className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border-[2.5px] border-ink ${
          selected ? "bg-lemon" : "bg-white"
        }`}
      >
        {selected && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2a0a24" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 13l5 5L20 6" />
          </svg>
        )}
      </span>
      {icon && <FoodIcon name={icon} size={28} className="shrink-0" />}
      {children}
    </button>
  );
}

export default function CroustyBuilder() {
  const [formule, setFormule] = useState(FORMULES[0]);
  const [picked, setPicked] = useState<Record<string, number>>({});
  const [sauce, setSauce] = useState<string | null>(null);

  const toggle = (key: string) =>
    setPicked((prev) => {
      const next = { ...prev };
      if (next[key]) delete next[key];
      else next[key] = 1;
      return next;
    });

  const extras: Extra[] = useMemo(() => {
    const all: Extra[] = [
      ...viandes.map((i) => ({ key: `v:${i.name}`, label: i.name, price: i.price ?? 0, icon: i.icon })),
      ...toppings.map((i) => ({ key: `t:${i.name}`, label: i.name, price: i.price ?? 0, icon: i.icon })),
      ...sides.map((i) => ({
        key: `s:${i.name}${i.qty ?? ""}`,
        label: `${i.name}${i.qty ? ` ${i.qty}` : ""}`,
        price: i.price ?? 0,
        icon: i.icon,
      })),
      ...desserts.map((i) => ({ key: `d:${i.name}`, label: i.name, price: i.price ?? 0, icon: i.icon })),
    ];
    return all.filter((e) => picked[e.key]);
  }, [picked]);

  const total = useMemo(
    () => formule.price + extras.reduce((sum, e) => sum + e.price, 0),
    [formule, extras]
  );

  const reset = () => {
    setFormule(FORMULES[0]);
    setPicked({});
    setSauce(null);
  };

  const group = (items: typeof viandes, prefix: string) => (
    <div role="group" className="flex flex-wrap gap-2.5">
      {items.map((item) => {
        const key = `${prefix}:${item.name}${prefix === "s" ? item.qty ?? "" : ""}`;
        return (
          <Choice key={key} icon={item.icon} selected={Boolean(picked[key])} onClick={() => toggle(key)}>
            {item.name}
            {item.qty && <span className="opacity-70"> {item.qty}</span>}
            {item.price !== null && (
              <span className="ml-1 tabular-nums opacity-80">+{euros(item.price)}</span>
            )}
          </Choice>
        );
      })}
    </div>
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr] lg:items-start">
      {/* Les étapes */}
      <div className="card-sticker panel-lemon space-y-7 p-6 sm:p-8">
        <Step n={1} title="Ta formule" hint="Seul ou en menu, taille S ou M.">
          <div role="radiogroup" aria-label="Formule" className="flex flex-wrap gap-2.5">
            {FORMULES.map((f) => (
              <Choice key={f.id} role="radio" icon={f.icon} selected={formule.id === f.id} onClick={() => setFormule(f)}>
                {f.label}
                <span className="ml-1 rounded-md border-2 border-ink px-1.5 text-xs">{f.size}</span>
                <span className="ml-1 tabular-nums opacity-80">{euros(f.price)}</span>
              </Choice>
            ))}
          </div>
        </Step>

        <Step n={2} title="Tes viandes" hint="2 € pièce, autant que tu veux.">
          {group(viandes, "v")}
        </Step>

        <Step n={3} title="Ta sauce" hint="Une seule signature, celle qui te ressemble.">
          <div role="radiogroup" aria-label="Sauce" className="flex flex-wrap gap-2.5">
            {sauces.map((s) => (
              <button
                key={s.name}
                type="button"
                role="radio"
                aria-checked={sauce === s.name}
                onClick={() => setSauce(sauce === s.name ? null : s.name)}
                className={`card-sticker flex flex-col items-center gap-1 px-3 py-2.5 text-xs font-bold transition-colors ${
                  sauce === s.name ? "bg-hot text-white" : "bg-white text-ink hover:bg-mint"
                }`}
              >
                <SauceCup sauce={s.sauce} top={s.top} size={40} />
                {s.name}
              </button>
            ))}
          </div>
        </Step>

        <Step n={4} title="Tes toppings">{group(toppings, "t")}</Step>
        <Step n={5} title="Sides & desserts" hint="À partager, ou pas.">
          <div className="space-y-3">
            {group(sides, "s")}
            {group(desserts, "d")}
          </div>
        </Step>
      </div>

      {/* Le récapitulatif */}
      <div className="lg:sticky lg:top-24">
        <div className="card-sticker panel-hot p-6 sm:p-7">
          <p className="script text-2xl">Ton Crousty</p>

          <dl className="mt-5 space-y-2 text-sm">
            <div className="flex items-baseline gap-2">
              <dt className="flex items-center gap-1.5 font-bold">
                <FoodIcon name={formule.icon} size={22} className="shrink-0" />
                {formule.label} <span className="opacity-80">taille {formule.size}</span>
              </dt>
              <span aria-hidden="true" className="menu-leader !border-white/40" />
              <dd className="shrink-0 font-bold tabular-nums">{euros(formule.price)}</dd>
            </div>

            {sauce && (
              <div className="flex items-baseline gap-2">
                <dt className="font-bold">Sauce {sauce}</dt>
                <span aria-hidden="true" className="menu-leader !border-white/40" />
                <dd className="shrink-0 text-xs font-semibold uppercase opacity-80">au choix</dd>
              </div>
            )}

            {extras.map((e) => (
              <div key={e.key} className="flex items-baseline gap-2">
                <dt className="flex items-center gap-1.5 font-bold">
                  {e.icon && <FoodIcon name={e.icon} size={22} className="shrink-0" />}
                  {e.label}
                </dt>
                <span aria-hidden="true" className="menu-leader !border-white/40" />
                <dd className="shrink-0 font-bold tabular-nums">{euros(e.price)}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex items-end justify-between border-t-[3px] border-white/30 pt-5">
            <span className="graffiti text-xl">Total</span>
            <span className="price-sticker text-2xl" aria-live="polite">
              {euros(total)}
            </span>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-white/75">
            Prix indicatif d&apos;après la carte affichée en restaurant. Le prix des sauces
            n&apos;est pas compté ici. Seuls les prix affichés sur place font foi.
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <a href={siteConfig.phoneHref} className="btn btn-primary btn-sm" data-cta="builder-phone">
              <PhoneIcon size={16} /> Commander
            </a>
            <button type="button" onClick={reset} className="btn btn-ghost btn-sm">
              Recommencer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
