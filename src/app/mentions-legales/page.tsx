import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
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
    <PageTransition>
      <LegalLayout
        title="Mentions légales"
        intro="Informations légales relatives au site et à son éditeur, conformément à l'article 6-III de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique."
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
            <dt>RCS</dt>
            <dd><Todo>{legalMentions.rcsOrRm}</Todo></dd>
            <dt>N° de TVA intracommunautaire</dt>
            <dd><Todo>{legalMentions.vatNumber}</Todo></dd>
            <dt>Téléphone</dt>
            <dd><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></dd>
            <dt>Email</dt>
            <dd><Todo>{siteConfig.email}</Todo></dd>
            <dt>Directeur de la publication</dt>
            <dd><Todo>{legalMentions.publicationDirector}</Todo></dd>
            <dt>Assurance responsabilité civile professionnelle</dt>
            <dd><Todo>{legalMentions.insurance}</Todo></dd>
          </dl>
        </section>

        <section>
          <h2>Hébergement</h2>
          <dl>
            <dt>Hébergeur</dt>
            <dd>{legalMentions.host.name}</dd>
            <dt>Adresse</dt>
            <dd><Todo>{legalMentions.host.address}</Todo></dd>
            <dt>Téléphone</dt>
            <dd><Todo>{legalMentions.host.phone}</Todo></dd>
            <dt>Site</dt>
            <dd>
              <a href={legalMentions.host.site} target="_blank" rel="noopener noreferrer">
                {legalMentions.host.site.replace("https://", "")}
              </a>
            </dd>
          </dl>
          <p>
            Les serveurs qui hébergent ce site sont situés en dehors de l&apos;Union
            européenne ({legalMentions.host.country}). Voir la{" "}
            <a href="/politique-de-confidentialite">politique de confidentialité</a> pour le
            détail des transferts de données.
          </p>
        </section>

        <section>
          <h2>Allergènes</h2>
          <p>
            Conformément au règlement (UE) n° 1169/2011 et au décret n° 2015-447 du
            17 avril 2015, l&apos;information sur la présence des quatorze allergènes à
            déclaration obligatoire est tenue à la disposition de la clientèle, par écrit,
            dans l&apos;établissement.
          </p>
          <p>
            Lieu de consultation&nbsp;: <Todo>{legalMentions.allergenesLieu}</Todo>
          </p>
          <p>
            En cas d&apos;allergie ou d&apos;intolérance, signalez-le à l&apos;équipe avant de
            commander&nbsp;: nos préparations sont assemblées dans une cuisine où sont
            manipulés de nombreux ingrédients, et une contamination croisée ne peut être
            exclue.
          </p>
        </section>

        <section>
          <h2>Origine des viandes</h2>
          <p>
            Conformément au décret n° 2002-1465 du 17 décembre 2002 et au décret n° 2022-65 du
            26 janvier 2022, l&apos;origine des viandes bovines, porcines, ovines et de volaille
            servies est portée à la connaissance de la clientèle dans l&apos;établissement.
          </p>
          <p>Origine&nbsp;: <Todo>{legalMentions.origineViandes}</Todo></p>
        </section>

        <section>
          <h2>Prix et informations sur les plats</h2>
          <p>
            Les prix affichés sur ce site sont indiqués en euros, toutes taxes et service
            compris, conformément à l&apos;arrêté du 27 mars 1987 relatif à l&apos;affichage
            des prix dans les établissements servant des repas. Ils sont donnés à titre
            indicatif et peuvent être modifiés&nbsp;; seuls les prix affichés dans
            l&apos;établissement font foi.
          </p>
          <p>
            Les photographies et illustrations présentées ne sont pas contractuelles. Aucune
            mention « fait maison » au sens du décret n° 2014-797 n&apos;est revendiquée sur ce
            site.
          </p>
        </section>

        <section>
          <h2>Commande et livraison</h2>
          <p>
            Ce site ne permet ni la commande ni le paiement en ligne. Il renvoie vers la
            plateforme Uber&nbsp;Eats, exploitée par un tiers, qui dispose de ses propres
            conditions générales de vente, de ses propres tarifs et de sa propre politique de
            confidentialité. {legalMentions.tradeName} n&apos;est pas responsable du
            fonctionnement de cette plateforme.
          </p>
        </section>

        <section>
          <h2>Médiation de la consommation</h2>
          <p>
            Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, tout
            consommateur a le droit de recourir gratuitement à un médiateur de la consommation
            en vue de la résolution amiable d&apos;un litige. Médiateur désigné&nbsp;:{" "}
            <Todo>{legalMentions.consumerMediator}</Todo>
          </p>
          <p>
            Le consommateur peut également déposer une réclamation sur la plateforme
            européenne de règlement en ligne des litiges&nbsp;:{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              ec.europa.eu/consumers/odr
            </a>
          </p>
        </section>

        <section>
          <h2>Accessibilité de l&apos;établissement</h2>
          <p>
            L&apos;établissement étant un établissement recevant du public, son registre public
            d&apos;accessibilité, prévu par le décret n° 2017-431 du 28 mars 2017, est
            consultable sur place.
          </p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des éléments de ce site — textes, photographies, logo, mise en page,
            illustrations — est protégé par le droit de la propriété intellectuelle. Toute
            reproduction ou représentation, totale ou partielle, sans autorisation écrite
            préalable de {legalMentions.tradeName}, est interdite.
          </p>
          <p>
            Les avis reproduits sur ce site proviennent de la fiche Google de
            l&apos;établissement et restent la propriété de leurs auteurs.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            Ce site ne dépose aucun cookie, ni de mesure d&apos;audience, ni de publicité, ni de
            réseau social. Aucun bandeau de consentement n&apos;est donc nécessaire au titre de
            l&apos;article 82 de la loi Informatique et Libertés. Le détail figure dans la{" "}
            <a href="/politique-de-confidentialite">politique de confidentialité</a>.
          </p>
        </section>
      </LegalLayout>
    </PageTransition>
  );
}
