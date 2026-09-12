import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import LegalLayout, { Todo } from "@/components/LegalLayout";
import { legalMentions, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et traitement des données personnelles du site de Crousty Vice à Caen.",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <PageTransition>
      <LegalLayout
        title="Politique de confidentialité"
        intro="Comment vos données personnelles sont traitées lorsque vous consultez ce site, conformément au Règlement (UE) 2016/679 (RGPD) et à la loi n° 78-17 du 6 janvier 1978 modifiée."
      >
        <section>
          <h2>Responsable du traitement</h2>
          <p>
            <Todo>{legalMentions.companyName}</Todo> ({legalMentions.tradeName}),{" "}
            {legalMentions.headOffice}. Contact&nbsp;:{" "}
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>, ou par courrier à
            l&apos;adresse du siège.
          </p>
          <p>
            Aucun délégué à la protection des données n&apos;a été désigné&nbsp;: l&apos;activité
            ne relève d&apos;aucun des cas de désignation obligatoire prévus à l&apos;article 37
            du RGPD.
          </p>
        </section>

        <section>
          <h2>Ce que ce site ne fait pas</h2>
          <p>
            Ce site est un site vitrine. Il ne comporte ni formulaire, ni compte client, ni
            commande, ni paiement. Il ne vous demande donc aucune information et n&apos;en
            enregistre aucune vous concernant.
          </p>
          <p>
            Il ne dépose <strong>aucun cookie</strong> et n&apos;utilise ni stockage local, ni
            mesure d&apos;audience, ni traceur publicitaire, ni bouton de réseau social. Les
            polices de caractères sont hébergées sur le site lui-même&nbsp;: leur affichage ne
            déclenche aucune requête vers un service tiers.
          </p>
        </section>

        <section>
          <h2>Données traitées malgré tout, et pourquoi</h2>

          <h3>Journaux techniques de l&apos;hébergeur</h3>
          <p>
            L&apos;affichage d&apos;une page suppose une connexion à notre hébergeur, qui
            enregistre dans ses journaux votre adresse IP, la date, la page demandée et votre
            navigateur.
          </p>
          <ul>
            <li><strong>Finalité</strong>&nbsp;: assurer le fonctionnement et la sécurité du site.</li>
            <li><strong>Base légale</strong>&nbsp;: intérêt légitime (article 6.1.f du RGPD).</li>
            <li><strong>Destinataire</strong>&nbsp;: {legalMentions.host.name}, notre hébergeur ({legalMentions.host.country}).</li>
            <li><strong>Conservation</strong>&nbsp;: selon la politique de l&apos;hébergeur, de l&apos;ordre de quelques semaines.</li>
          </ul>

          <h3>Carte d&apos;accès</h3>
          <p>
            La carte affichée sur les pages d&apos;accueil et de contact utilise les fonds de
            carte d&apos;OpenStreetMap. Leur chargement transmet votre adresse IP aux serveurs
            de la fondation OpenStreetMap, seul service tiers contacté par ce site.
          </p>
          <ul>
            <li><strong>Base légale</strong>&nbsp;: intérêt légitime — vous indiquer où se trouve le restaurant.</li>
            <li>
              <strong>Politique</strong>&nbsp;:{" "}
              <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">
                osmfoundation.org/wiki/Privacy_Policy
              </a>
            </li>
          </ul>
          <p>
            La carte ne se charge qu&apos;au moment où vous faites défiler la page jusqu&apos;à
            elle. Si vous ne l&apos;atteignez pas, aucune requête n&apos;est émise.
          </p>

          <h3>Avis clients reproduits sur ce site</h3>
          <p>
            Ce site reproduit des avis publiés sur la fiche Google de l&apos;établissement,
            accompagnés du prénom ou du pseudonyme de leur auteur tel qu&apos;il apparaît
            publiquement. Il s&apos;agit de données personnelles concernant des tiers.
          </p>
          <ul>
            <li><strong>Finalité</strong>&nbsp;: rendre compte de l&apos;expérience de la clientèle.</li>
            <li><strong>Base légale</strong>&nbsp;: intérêt légitime (article 6.1.f du RGPD), les avis étant déjà publics et reproduits sans modification.</li>
            <li><strong>Source</strong>&nbsp;: fiche Google publique de l&apos;établissement.</li>
          </ul>
          <p>
            Tout auteur d&apos;un avis reproduit ici peut demander son retrait, à tout moment et
            sans avoir à se justifier, en nous contactant au{" "}
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>. Le retrait est effectué sans
            délai.
          </p>
        </section>

        <section>
          <h2>Liens vers des services tiers</h2>
          <p>
            Certains liens vous emmènent hors de ce site&nbsp;: la plateforme de commande
            Uber&nbsp;Eats, Google&nbsp;Maps pour l&apos;itinéraire, TikTok pour le compte du
            restaurant. Ces services ont leurs propres traitements de données et leurs propres
            politiques de confidentialité, sur lesquels nous n&apos;avons aucune maîtrise.
            Aucune donnée ne leur est transmise tant que vous n&apos;avez pas cliqué.
          </p>
          <p>
            Le lien vers Google&nbsp;Maps affiche d&apos;ailleurs une confirmation avant de vous
            rediriger, afin que la sortie du site ne se fasse pas à votre insu.
          </p>
        </section>

        <section>
          <h2>Transferts hors de l&apos;Union européenne</h2>
          <p>
            Notre hébergeur est une société établie aux États-Unis. L&apos;affichage du site
            peut donc impliquer un transfert de données — essentiellement votre adresse IP —
            hors de l&apos;Union européenne, encadré par les garanties appropriées prévues au
            chapitre V du RGPD, dont le cadre de protection des données UE–États-Unis.
          </p>
        </section>

        <section>
          <h2>Vos droits</h2>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de
            limitation, d&apos;opposition et de portabilité sur les données vous concernant,
            ainsi que du droit de définir des directives relatives à leur sort après votre
            décès.
          </p>
          <p>
            Pour les exercer, contactez-nous au{" "}
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a> ou par courrier à&nbsp;:{" "}
            {legalMentions.headOffice}. Une réponse vous sera apportée dans un délai d&apos;un
            mois.
          </p>
          <p>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés,
            vous pouvez adresser une réclamation à la CNIL&nbsp;:{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>,
            3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
          </p>
        </section>

        <section>
          <h2>Modification</h2>
          <p>
            Cette politique peut être mise à jour pour refléter les évolutions du site ou de la
            réglementation. Toute modification substantielle sera signalée sur cette page.
          </p>
        </section>
      </LegalLayout>
    </PageTransition>
  );
}
