# Crousty Vice Caen — état du site

**Statut** : 🟡 construit, **NON publiable en l'état** (informations légales manquantes).
**Variante de design** : V21 « Vice Néon », **reprise sur la direction artistique des affiches
et sur l'univers Vice City** : ciel dégradé coucher de soleil (nuit violette → magenta →
orange), soleil à bandes horizontales, rayons de soleil (sunburst) en rotation lente, étoiles,
grille en perspective, scanlines, skyline
Art déco et palmiers en silhouette. Titres en Titan One. Panneaux jaune citron et menthe et stickers de prix pour la carte.

> Le hero a fait l'objet d'une série d'essais visant à reproduire exactement le lettrage du
> logo (contours empilés, extrusion 3D, reflet spéculaire, découpe lettre par lettre). À la
> demande du client, il est revenu à sa version simple et lisible. La technique reste
> disponible dans `lockup-vice-city.html` et dans l'historique Git, si le sujet revient.
**Stack** : Next.js 16 (App Router) · Tailwind v4 · TypeScript · Leaflet/OpenStreetMap.

---

## ✅ Ce qui est fait

**Pages** — Accueil, La carte, Le concept, Nous trouver, Mentions légales,
Politique de confidentialité, 404 personnalisée.

**Sections retenues** (choix du client) :
- **Carte interactive « Compose ton Crousty »** : formule, viandes, sauce, toppings, sides
  et desserts, avec total calculé en direct (`CroustyBuilder.tsx`)
- Menu design en panneaux jaune/menthe façon affiche, stickers de prix
- **Sauces dessinées en pots** (`SauceCup.tsx`), pas de pastilles de couleur
- **Icônes produit dessinées** (`FoodIcons.tsx`) : riz, tenders, spicy, cordon bleu,
  camembert, nuggets, onion rings, jalapeños, gratinage, boisson, tiramisu, cheesecake,
  tarte au Daim — présentes sur la carte, dans le configurateur et dans le récapitulatif
- **Skyline Vice City détaillée** (`Skyline.tsx`) : tours Art déco à retraits, fenêtres
  allumées, antennes, enseignes néon et palmiers à frondes nervurées
- Carte des sauces synthétique (7 sauces, pastilles de couleur + intensité)
- Témoignages clients
- Carte OpenStreetMap + accès (tram / à pied / voiture)
- FAQ (6 questions géolocalisées)
- Barre d'action fixe mobile : Appeler · Itinéraire · Carte

**Commande en ligne** : lien Uber Eats présent dans l'en-tête, le hero, la page contact,
l'appel final, le pied de page et la barre mobile — 5 points d'entrée sur l'accueil.
Déclaré aussi en JSON-LD (`OrderAction` + `hasDeliveryMethod`) et dans `/llms.txt`, pour que
la livraison soit trouvable par Google et par les moteurs de réponse.

> ⚠️ Le message du restaurant évoque un **code de parrainage** pour la première commande,
> mais le code n'a pas été communiqué. `uberEatsCode` reste vide et **rien n'est affiché
> à ce sujet** : le code est à fournir pour être mis en avant.

**Contact** : téléphone, click-to-call partout. Pas de formulaire, donc
**aucune clé API à gérer** et aucune donnée personnelle collectée.

**Prix** : repris des **affiches en restaurant** (plus récentes et plus complètes que
l'ancien site). Les tailles S et M réconcilient les deux affiches : 5,90/6,90 € = S,
7,90/8,90 € = M. Cela résout au passage l'incohérence 4,90 € vs 5,90 € de l'ancien site.

**SEO** : titres et canonicals uniques par page, sitemap, OpenGraph, favicon,
`noindex` sur les pages légales, mots-clés locaux (« restaurant Caen », « rue Saint-Jean »…),
communes voisines en contenu visible.

**GEO (citations par les IA)** : `/llms.txt` généré depuis les données du site,
`/robots.txt` autorisant explicitement GPTBot, PerplexityBot, ClaudeBot, Google-Extended…,
JSON-LD `Restaurant` enrichi (GeoCircle + rayon, `knowsAbout`, `hasMenu` complet avec prix,
horaires, breadcrumbs, FAQPage).

**Légal** : pas de cookie de tracking → aucun bandeau requis. Mention allergènes
(règlement UE 1169/2011). Prix TTC + « seuls les prix affichés en restaurant font foi ».

**Avis** : 12 avis repris de la fiche Google (note **4,5/5 sur 128 avis**), cités mot pour
mot, plus les 3 témoignages de l'ancien site conservés à la demande du client. La note est
affichée dans le hero et en tête de la section avis, et reprise dans `/llms.txt`.

⚠️ **Pas d'`aggregateRating` ni de balisage `Review` dans le JSON-LD** — Google interdit le
balisage d'avis auto-hébergés. Vérifié : 0 occurrence sur toutes les pages.

⚠️ **`googleReviewsUrl` est en `[à compléter]`.** Tant que le lien de la fiche n'est pas
renseigné, la note s'affiche sans être cliquable. La renseigner permet au visiteur d'aller
vérifier les 128 avis — c'est ce qui rend la note crédible.

ℹ️ La sélection ne reprend que des avis positifs. C'est légitime pour un site vitrine **à
condition** que le lien vers la fiche Google complète soit en place : le visiteur doit
pouvoir accéder à l'ensemble des avis, y compris les négatifs.

---

## 🔴 Bloquants avant publication — conformité légale

Le site est **conforme sur tout ce qui dépend de la technique**. Ce qui manque relève
d'informations que seul le client peut fournir. Elles s'affichent en surbrillance
`[à compléter]` sur les pages concernées.

### Mentions légales (loi LCEN, art. 6-III) — 9 champs manquants
| Champ | Clé |
|---|---|
| Dénomination sociale | `legalMentions.companyName` |
| Forme juridique | `legalMentions.legalForm` |
| Capital social (si société) | `legalMentions.capital` |
| SIRET | `legalMentions.siret` |
| RCS + ville | `legalMentions.rcsOrRm` |
| N° TVA intracommunautaire (ou « TVA non applicable, art. 293 B du CGI ») | `legalMentions.vatNumber` |
| Email de contact | `siteConfig.email` |
| Directeur de la publication | `legalMentions.publicationDirector` |
| Assurance RC professionnelle | `legalMentions.insurance` |

### Obligations propres à la restauration — 3 champs manquants
| Obligation | Texte | Clé |
|---|---|---|
| **Allergènes** — où l'information écrite est consultable sur place | Règlement (UE) 1169/2011, décret 2015-447 | `legalMentions.allergenesLieu` |
| **Origine des viandes** (bœuf, porc, mouton, volaille) | Décrets 2002-1465 et 2022-65 | `legalMentions.origineViandes` |
| **Médiateur de la consommation** — nom, adresse, site | Art. L.616-1 et R.616-1 Code conso | `legalMentions.consumerMediator` |

> ⚠️ L'obligation sur les **allergènes** n'est pas satisfaite par un « sur demande ».
> Le décret impose une information **écrite**, accessible, et d'indiquer au client **où** la
> consulter. Le site le fait déjà sur la page de la carte et dans les mentions légales, mais
> le lieu exact doit être renseigné.

### Hébergeur — 2 champs à vérifier
La LCEN impose le **nom, l'adresse et le téléphone** de l'hébergeur réel. Le nom est
renseigné (Vercel, où le site est déployé), mais l'adresse et le téléphone venaient de
l'exemple générique du skill : ils sont passés en `[à vérifier sur vercel.com]`.

| Champ | Clé |
|---|---|
| Adresse du siège de l'hébergeur | `legalMentions.host.address` |
| Téléphone de l'hébergeur | `legalMentions.host.phone` |

> Les relever sur les mentions légales de vercel.com, et non de mémoire : une adresse
> approximative ne remplit pas l'obligation. **Si l'hébergement change** (OVH, o2switch,
> Netlify…), tout le bloc `legalMentions.host` change, ainsi que la mention de transfert
> hors UE dans la politique de confidentialité — un hébergeur français la rend sans objet.

### Autre bloquant
- **`siteConfig.url`** : remplacer le domaine provisoire par le vrai, sinon canonical,
  sitemap et données structurées pointent dans le vide.
- **`siteConfig.googleReviewsUrl`** : sans le lien de la fiche, la note s'affiche sans être
  vérifiable — et la sélection ne montrant que des avis positifs, le lien est nécessaire.

## ✅ Conformité déjà en place (vérifiée, pas supposée)

Audit des requêtes réseau sur les 6 pages, défilement complet :

| Point | État |
|---|---|
| Cookies déposés | **aucun** |
| `localStorage` / `sessionStorage` | **aucun** |
| Mesure d'audience, traceur publicitaire, bouton social | **aucun** |
| Polices | **auto-hébergées** — aucune requête vers Google Fonts |
| Services tiers contactés | **un seul** : tuiles OpenStreetMap |
| Bandeau de consentement | **non requis** (art. 82 loi Informatique et Libertés : pas de traceur non essentiel) |

- **Pages légales** accessibles depuis le pied de page de toutes les pages, en `noindex`.
- **RGPD** : responsable du traitement, absence de collecte, journaux de l'hébergeur
  (finalité, base légale, destinataire, durée), carte OpenStreetMap, **avis Google reproduits**
  (données de tiers — base légale, source, droit de retrait sans justification), liens sortants,
  **transferts hors UE** (hébergeur américain), droits complets dont directives post-mortem,
  réclamation CNIL.
- **Carte** : chargée seulement à l'approche de l'écran — aucune requête vers OpenStreetMap si
  le visiteur ne descend pas jusqu'à elle.
- **Sortie vers Google Maps** précédée d'une confirmation : pas de redirection à l'insu du visiteur.
- **Prix** : affichés TTC, service compris (arrêté du 27 mars 1987), avec la mention que seuls
  les prix affichés sur place font foi.
- **Pas de CGV** : le site ne vend rien, il renvoie vers Uber Eats dont les conditions
  s'appliquent — c'est indiqué.
- **Pas de mention « fait maison »** revendiquée (décret 2014-797) : rien à justifier.
- **Registre public d'accessibilité** de l'établissement mentionné (décret 2017-431).
- **Pas de balisage d'avis** (`aggregateRating` / `Review`) : interdit par Google pour les
  avis auto-hébergés. Vérifié à zéro occurrence.

## ⚡ Performance

Mesuré au défilement sur la page d'accueil, en 1440 px :

| | Avant | Après |
|---|---|---|
| Nœuds DOM | 2 552 | 1 142 |
| dont nœuds SVG | 1 655 | 279 |
| Temps par image (médiane) | 27 ms (≈ 37 i/s) | **16,6 ms (60 i/s)** |
| Pic le plus lent (p95) | 45 ms | 19 ms |
| Éléments flous animés | 6 | 3 |
| Éléments animés en continu | 78 | 31 |
| JavaScript au chargement | 205 Ko | 164 Ko |
| Navigation entre pages | 4 100 ms (1re) | **< 120 ms** |

Ce qui coûtait cher, et ce qui a été fait :
- **La skyline en SVG inline** créait près de 360 nœuds par instance (les fenêtres
  allumées surtout), soit plus de 1 000 nœuds pour les trois skylines. Elle est passée en
  **image de fond** (`public/images/skyline.svg`, régénérable via `scripts/gen-skyline.mjs`) :
  le navigateur la rastérise une fois et la réutilise.
- **Les rayons de soleil** étaient un SVG de 300 % de large, en `mix-blend-mode` et animé —
  un calque énorme recomposé en continu. Remplacés par un **dégradé conique CSS**.
- **Les scanlines** en `mix-blend-mode: multiply` sur toute la section : remplacées par un
  aplat translucide, même rendu sans fusion de calques.
- **`background-attachment: fixed`** sur le `body` forçait un repaint du fond à chaque
  défilement : supprimé.
- **Halos flous** réduits de 6 à 3, et rayon ramené de 64 px à 40 px.
- **La carte Leaflet** ne se charge plus qu'à l'approche de l'écran (`LazyMount`) : sa
  bibliothèque et sa feuille de style pesaient sur le chargement initial alors qu'elle est
  tout en bas de page.
- Le **configurateur** et la **carte** sont importés avec un repli `loading`. Sans lui, ils
  suspendent le rendu et bloquent toute animation de navigation.
- Décor allégé : soleil ramené de 120 à 64 rem, Crousty flottants réduits et retirés du bloc
  d'appel final.

> ⚠️ **L'API View Transitions du navigateur a été essayée puis écartée.** Elle doit
> photographier l'ancienne page en entier avant d'animer ; sur l'accueil — près de 8 000 px
> avec dégradés, flous et calques translucides — la capture dépassait le délai du navigateur.
> Mesure : **4 100 ms et transition abandonnée**, contre 90 ms sans elle. L'enchaînement se
> fait donc par une simple animation d'arrivée en CSS (`PageTransition`), qui ne bloque rien
> et fonctionne dans tous les navigateurs. Ne pas la réintroduire sans remesurer.

> ⚠️ Si la skyline est modifiée, regénérer le SVG avec `node scripts/gen-skyline.mjs`.

## Commandes
```bash
npm run dev     # développement
npm run build   # build de production
npm run lint    # ESLint
```

Toutes les données du site sont dans **`src/lib/site-data.ts`** : c'est le seul fichier
à modifier pour changer un prix, un horaire, une sauce ou un texte.
