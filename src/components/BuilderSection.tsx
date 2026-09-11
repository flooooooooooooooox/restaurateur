import CroustyBuilder from "./CroustyBuilder";
import Skyline from "./Skyline";

export default function BuilderSection() {
  return (
    <section id="composer" className="panel-hot relative scroll-mt-20 overflow-hidden py-20">
      <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-48 w-full opacity-45" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-lemon">La carte interactive</p>
          <h2 className="graffiti mt-3 text-4xl sm:text-5xl">Compose ton Crousty</h2>
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
