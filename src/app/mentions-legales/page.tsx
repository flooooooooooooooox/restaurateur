import type { Metadata } from "next";
import LegalLayout, { Todo } from "@/components/LegalLayout";
import { legalMentions, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de Crousty Vice, restaurant à Caen.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function LegalPage() {
  return (
    <LegalLayout
      title="Mentions légales"
      intro="Informations légales relatives au site et à son éditeur, conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN)."
    >
      <section>
        <h2>Éditeur du site</h2>
        <dl>
          <dt>Dénomination sociale</dt>
          <dd><Todo>{legalMentions.companyName}</Todo></dd>
          <dt>Nom commercial</dt>
          <dd>{legalMentions.tradeName}</dd>
          <dt>Forme juridique</dt>
          <dd><Todo>{legalMentions.legalForm}</Todo></dd>
          <dt>Capital social</dt>
          <dd><Todo>{legalMentions.capital}</Todo></dd>
          <dt>Siège social</dt>
          <dd>{legalMentions.headOffice}</dd>
          <dt>SIRET</dt>
          <dd><Todo>{legalMentions.siret}</Todo></dd>
          <dt>RCS / Répertoire des métiers</dt>
          <dd><Todo>{legalMentions.rcsOrRm}</Todo></dd>
          <dt>N° de TVA intracommunautaire</dt>
          <dd><Todo>{legalMentions.vatNumber}</Todo></dd>
          <dt>Téléphone</dt>
          <dd><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></dd>
          <dt>Email</dt>
          <dd><Todo>{siteConfig.email}</Todo></dd>
          <dt>Directeur de la publication</dt>
          <dd><Todo>{legalMentions.publicationDirector}</Todo></dd>
          <dt>Assurance (RC professionnelle)</dt>
          <dd><Todo>{legalMentions.insurance}</Todo></dd>
        </dl>
      </section>

      <section>
        <h2>Hébergeur</h2>
        <p>{legalMentions.host}</p>
      </section>

      <section>
        <h2>Médiation de la consommation</h2>
        <p>
          Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, tout
          consommateur a le droit de recourir gratuitement à un médiateur de la consommation en
          vue de la résolution amiable d&apos;un litige. Médiateur désigné&nbsp;:{" "}
          <Todo>{legalMentions.consumerMediator}</Todo>
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des éléments de ce site (textes, visuels, logo, mise en page) est protégé
          par le droit de la propriété intellectuelle. Toute reproduction ou représentation,
          totale ou partielle, sans autorisation écrite préalable de {legalMentions.tradeName} est
          interdite.
        </p>
      </section>

      <section>
        <h2>Prix et informations</h2>
        <p>
          Les prix affichés sur ce site sont indiqués en euros, toutes taxes comprises. Ils sont
          donnés à titre indicatif et peuvent être modifiés à tout moment&nbsp;; seuls les prix
          affichés en restaurant font foi. Les photographies et illustrations sont non
          contractuelles.
        </p>
      </section>

      <section>
        <h2>Allergènes</h2>
        <p>
          Conformément au règlement (UE) n° 1169/2011, la liste des allergènes présents dans nos
          préparations est disponible sur simple demande auprès de l&apos;équipe du restaurant.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Ce site ne dépose aucun cookie de mesure d&apos;audience ni de publicité. La carte
          interactive s&apos;appuie sur OpenStreetMap, qui ne dépose pas de cookie publicitaire.
          Aucun bandeau de consentement n&apos;est donc requis.
        </p>
      </section>
    </LegalLayout>
  );
}
