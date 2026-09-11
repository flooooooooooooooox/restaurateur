import { menu, type MenuCategory } from "@/lib/site-data";
import Reveal from "./Reveal";

function formatPrice(price: number) {
  return `${price.toFixed(2).replace(".", ",")} €`;
}

function Category({ category, delay }: { category: MenuCategory; delay: number }) {
  return (
    <Reveal delay={delay}>
      <section
        aria-labelledby={`menu-${category.id}`}
        className="card-neon h-full rounded-3xl p-6 sm:p-7"
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan">{category.kicker}</p>
        <h3 id={`menu-${category.id}`} className="mt-2 font-display text-2xl font-extrabold tracking-tight">
          {category.name}
        </h3>
        <span aria-hidden="true" className="mt-4 block h-px w-16 bg-gradient-to-r from-brand to-transparent" />

        <ul className="mt-5 space-y-3.5">
          {category.items.map((item) => (
            <li key={`${item.name}-${item.note ?? ""}`} className="flex items-baseline text-[15px]">
              <span className="font-medium text-cream/90">
                {item.name}
                {item.note && (
                  <span className="ml-2 rounded-full border border-cream/15 px-2 py-0.5 align-middle text-[11px] font-semibold uppercase tracking-wide text-cream/55">
                    {item.note}
                  </span>
                )}
              </span>
              <span aria-hidden="true" className="menu-leader" />
              {item.price !== null ? (
                <span className="shrink-0 font-display font-bold tabular-nums text-brand">
                  {formatPrice(item.price)}
                </span>
              ) : (
                <span className="shrink-0 text-sm text-cream/45">inclus</span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}

export default function MenuBoard() {
  if (!menu.length) return null;

  return (
    <div className="grid items-start gap-6 md:grid-cols-2">
      {menu.map((category, i) => (
        <Category key={category.id} category={category} delay={i * 90} />
      ))}
    </div>
  );
}
