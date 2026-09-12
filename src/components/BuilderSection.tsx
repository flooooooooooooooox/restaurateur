import dynamic from "next/dynamic";

/**
 * Le configurateur est le plus gros composant client du site. Importé
 * normalement, il suspend le rendu le temps que son morceau de code arrive,
 * et une navigation avec transition de vue reste figée jusqu'à l'expiration
 * du délai du navigateur. Le repli `loading` évite cette suspension.
 */
const CroustyBuilder = dynamic(() => import("./CroustyBuilder"), {
  loading: () => (
    <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr] lg:items-start">
      <div className="card-sticker panel-lemon h-[32rem] animate-pulse" />
      <div className="card-sticker panel-hot h-64 animate-pulse" />
    </div>
  ),
});
import Skyline from "./Skyline";

export default function BuilderSection() {
  return (
    <section id="composer" className="panel-hot relative scroll-mt-20 overflow-hidden py-20">
      <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-48 w-full opacity-45" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-lemon">La carte interactive</p>
          <h2 className="mt-3">
            <span className="graffiti block text-4xl sm:text-5xl">Compose</span>
            <span className="script mt-1 block text-3xl sm:text-4xl">ton Crousty</span>
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-white/85">
            Choisis ta formule, tes viandes, ta sauce et tes extras : le total se met à jour
            en direct. Tu sais exactement ce que tu paies avant même de passer la porte.
          </p>
        </div>

        <div className="mt-14">
          <CroustyBuilder />
        </div>
      </div>
    </section>
  );
}
