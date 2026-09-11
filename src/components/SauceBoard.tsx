import { sauces } from "@/lib/site-data";
import { FlameIcon } from "./Icons";
import Reveal from "./Reveal";

/** Petites flammes : intensité de la sauce, de 0 (douce) à 3 (relevée). */
function Heat({ level, name }: { level: number; name: string }) {
  if (level === 0) {
    return <span className="text-[11px] font-semibold uppercase tracking-wide text-cream/40">Douce</span>;
  }
  return (
    <span className="flex items-center gap-0.5 text-brand" title={`Sauce ${name} : ${level}/3`}>
      <span className="sr-only">Intensité {level} sur 3</span>
      {Array.from({ length: level }).map((_, i) => (
        <FlameIcon key={i} size={13} />
      ))}
    </span>
  );
}

export default function SauceBoard() {
  if (!sauces.length) return null;

  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {sauces.map((sauce, i) => (
        <li key={sauce.name}>
          <Reveal delay={i * 60}>
            <article className="card-neon group flex h-full flex-col items-start gap-3 rounded-2xl p-4">
              <span
                aria-hidden="true"
                className="h-9 w-9 shrink-0 rounded-full ring-2 ring-cream/15 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(140deg, ${sauce.from}, ${sauce.to})` }}
              />
              <div className="min-w-0">
                <h3 className="font-display text-[15px] font-bold leading-snug tracking-tight">
                  {sauce.name}
                </h3>
                <p className="mt-0.5 text-xs text-cream/50">{sauce.tag}</p>
              </div>
              <div className="mt-auto pt-1">
                <Heat level={sauce.heat} name={sauce.name} />
              </div>
            </article>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
