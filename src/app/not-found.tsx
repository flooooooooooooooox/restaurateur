import Link from "next/link";
import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { siteConfig } from "@/lib/site-data";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="animate-drift-a pointer-events-none absolute -left-20 -top-24 h-80 w-80 rounded-full bg-brand/25 blur-3xl" />
      <div aria-hidden="true" className="retro-grid pointer-events-none absolute inset-x-0 bottom-0 h-56" />
      <div className="relative mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center">
        <p className="font-display text-6xl font-black neon-pink sm:text-8xl">404</p>
        <h1 className="mt-6 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
          Cette page a quitté la partie
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/65">
          La page que vous cherchez n&apos;existe pas ou a changé d&apos;adresse. La carte, elle,
          est toujours au même endroit.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/la-carte" className="btn btn-primary">
            Voir la carte <ArrowIcon size={17} />
          </Link>
          <Link href="/" className="btn btn-outline">Retour à l&apos;accueil</Link>
          <a href={siteConfig.phoneHref} className="btn btn-outline">
            <PhoneIcon size={17} /> Appeler
          </a>
        </div>
      </div>
    </section>
  );
}
