import { menu, type MenuCategory } from "@/lib/site-data";
import Reveal from "./Reveal";

function euros(price: number) {
  return `${price.toFixed(2).replace(".", ",")} €`;
}

const TONE: Record<string, string> = {
  formules: "panel-mint",
  viandes: "panel-lemon",
  toppings: "panel-mint",
  sides: "panel-lemon",
  boissons: "panel-mint",
  desserts: "panel-lemon",
};

function Category({ category, delay }: { category: MenuCategory; delay: number }) {
  return (
    <Reveal delay={delay}>
      <section
        aria-labelledby={`menu-${category.id}`}
        className={`card-sticker h-full p-6 sm:p-7 ${TONE[category.id] ?? "panel-lemon"}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink/55">
              {category.kicker}
            </p>
            <h3 id={`menu-${category.id}`} className="graffiti mt-1.5 text-2xl">
              {category.name}
            </h3>
          </div>
          {category.flatPrice !== undefined && (
            <span className="price-sticker price-sticker-hot shrink-0 text-lg">
              {euros(category.flatPrice)}
            </span>
          )}
        </div>

        <ul className="mt-5 space-y-3">
          {category.items.map((item) => (
            <li key={`${item.name}-${item.note ?? item.qty ?? ""}`} className="flex items-baseline text-[15px]">
              <span className="font-bold text-ink">
                {item.name}
                {item.qty && <span className="ml-1.5 font-extrabold text-ink/55">{item.qty}</span>}
                {item.note && (
                  <span className="ml-2 rounded-md border-2 border-ink px-1.5 align-middle text-[11px] font-extrabold uppercase">
                    {item.note}
                  </span>
                )}
              </span>
              <span aria-hidden="true" className="menu-leader !border-ink/35" />
              {item.price !== null ? (
                <span className="shrink-0 font-display text-base font-extrabold tabular-nums text-hot">
                  {euros(item.price)}
                </span>
              ) : (
                <span className="shrink-0 text-xs font-bold uppercase text-ink/50">inclus</span>
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
        <Category key={category.id} category={category} delay={i * 80} />
      ))}
    </div>
  );
}
