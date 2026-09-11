import { sauces } from "@/lib/site-data";
import { FlameIcon } from "./Icons";
import Reveal from "./Reveal";
import SauceCup from "./SauceCup";

/** Intensité de la sauce, de 0 (douce) à 3 (relevée). */
function Heat({ level, name }: { level: number; name: string }) {
  if (level === 0) {
    return <span className="text-[11px] font-extrabold uppercase tracking-wide text-ink/55">Douce</span>;
  }
  return (
    <span className="flex items-center gap-0.5 text-hot">
      <span className="sr-only">{`Sauce ${name} : intensité ${level} sur 3`}</span>
      {Array.from({ length: level }).map((_, i) => (
        <FlameIcon key={i} size={14} />
      ))}
    </span>
  );
}

export default function SauceBoard() {
  if (!sauces.length) return null;

  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {sauces.map((sauce, i) => (
        <li key={sauce.name}>
          <Reveal delay={i * 60}>
            <article className="card-sticker panel-lemon group flex h-full flex-col items-center px-3 py-5 text-center">
              <SauceCup
                sauce={sauce.sauce}
                top={sauce.top}
                size={84}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-4deg]"
              />
              <h3 className="graffiti mt-3 text-lg leading-tight [-webkit-text-stroke:0.1em_var(--color-ink)]">
                {sauce.name}
              </h3>
              <p className="mt-1 text-xs font-semibold text-ink/65">{sauce.tag}</p>
              <div className="mt-3">
                <Heat level={sauce.heat} name={sauce.name} />
              </div>
            </article>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
