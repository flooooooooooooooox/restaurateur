import type { Metadata } from "next";
import LegalLayout, { Todo } from "@/components/LegalLayout";
import { legalMentions, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données personnelles du site de Crousty Vice à Caen.",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      intro="Comment vos données personnelles sont traitées lorsque vous consultez ce site, conformément au Règlement général sur la protection des données (RGPD)."
    >
      <section>
        <h2>Responsable du traitement</h2>
        <p>
          <Todo>{legalMentions.companyName}</Todo> ({legalMentions.tradeName}),{" "}
          {legalMentions.headOffice}. Contact&nbsp;:{" "}
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>.
        </p>
      </section>

      <section>
        <h2>Données collectées</h2>
        <p>
          Ce site est un site vitrine&nbsp;: il ne propose ni compte client, ni commande en ligne,
          ni formulaire de contact. Aucune donnée personnelle n&apos;est collectée ni conservée
          lorsque vous naviguez sur ces pages.
        </p>
        <p>
          Si vous nous appelez au numéro indiqué, les échanges se font par téléphone et ne donnent
          lieu à aucun enregistrement sur ce site.
        </p>
      </section>

      <section>
        <h2>Cookies et traceurs</h2>
        <p>
          Aucun cookie de mesure d&apos;audience, de profilage ou de publicité n&apos;est déposé.
          Seuls des éléments techniques strictement nécessaires à l&apos;affichage des pages sont
          utilisés.
        </p>
      </section>

      <section>
        <h2>Services tiers</h2>
        <ul>
          <li>
            <strong>Hébergement</strong> — {legalMentions.host}. Les journaux techniques du
            serveur peuvent contenir votre adresse IP pour des raisons de sécurité et de
            fonctionnement.
          </li>
          <li>
            <strong>Cartographie</strong> — la carte est fournie par OpenStreetMap. L&apos;affichage
            des fonds de carte implique une requête vers les serveurs d&apos;OpenStreetMap, qui
            reçoivent alors votre adresse IP.
          </li>
          <li>
            <strong>Polices d&apos;écriture</strong> — les polices sont servies depuis notre propre
            hébergement&nbsp;: aucune requête n&apos;est envoyée à un service tiers pour les afficher.
          </li>
        </ul>
      </section>

      <section>
        <h2>Vos droits</h2>
        <p>
          Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de
          limitation, d&apos;opposition et de portabilité sur les données vous concernant. Pour
          l&apos;exercer, contactez-nous au <a href={siteConfig.phoneHref}>{siteConfig.phone}</a> ou
          par courrier à l&apos;adresse du siège&nbsp;: {legalMentions.headOffice}.
        </p>
        <p>
          Vous pouvez également introduire une réclamation auprès de la CNIL —{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>,
          3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
        </p>
      </section>

      <section>
        <h2>Modification</h2>
        <p>
          Cette politique peut être mise à jour à tout moment afin de refléter les évolutions du
          site ou de la réglementation.
        </p>
      </section>
    </LegalLayout>
  );
}
