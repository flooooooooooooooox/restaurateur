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

## 🔴 Bloquants avant publication

Ces champs sont en `[à compléter]`, visibles en surbrillance sur `/mentions-legales` :

| Champ | Où |
|---|---|
| Dénomination sociale | `legalMentions.companyName` |
| Forme juridique · capital social | `legalMentions.legalForm` / `.capital` |
| SIRET · SIREN · RCS | `legalMentions.siret` / `.siren` / `.rcsOrRm` |
| N° TVA intracommunautaire | `legalMentions.vatNumber` |
| Directeur de la publication | `legalMentions.publicationDirector` |
| Assurance RC professionnelle | `legalMentions.insurance` |
| Médiateur de la consommation | `legalMentions.consumerMediator` |
| Email de contact | `siteConfig.email` |

Également à faire avant la mise en ligne :
- **`siteConfig.url`** : remplacer `https://www.croustyvice-caen.fr` par le vrai domaine
  (sinon canonicals, sitemap et GEO pointent dans le vide).
- **Logo** : le logo actuel est un logo texte provisoire (`src/components/Logo.tsx` + `src/app/icon.tsx`).
  À remplacer par le vrai logo Vice City du client.
- **Photos — 4 en ligne, en pleine définition.** Le client a fourni des originaux propres
  qui remplacent les découpes basse définition du montage initial :

  | Fichier | Dimensions | Emplacement |
  |---|---|---|
  | `crousty-main.webp` | 759 × 1349 | Hero |
  | `salle.webp` | 1280 × 719 | Galerie, pleine largeur (nouvelle) |
  | `borne.webp` | 1080 × 1188 | Galerie, portrait |
  | `boissons.webp` | 1080 × 893 | Galerie |

  Converties en WebP qualité 82, entre 62 et 96 Ko pièce. Les bridages d'affichage
  posés du temps des images en 228 px sont levés : la photo du hero passe de 340 à
  420 px et la galerie occupe de nouveau toute la largeur.

  Manquent encore : les **2 affiches** de la carte (tableau `posters`, prêt) et le **logo
  en fichier** (PNG transparent ou SVG) — voir `public/images/README.md`.

## 🟡 À faire confirmer par le client

### Prix relevés sur les affiches — à valider ligne à ligne
Certains chiffres des affiches sont peu lisibles. Voici ce qui est actuellement en ligne :

| Ligne | Prix retenu | Confiance |
|---|---|---|
| Crousty seul S / M | 5,90 € / 7,90 € | bonne |
| Crousty en menu S / M | 6,90 € / 8,90 € | bonne |
| Menu + Gratinage | 9,40 € | bonne |
| Viandes (tenders, spicy, cordon bleu, camembert, nuggets) | 2,00 € pièce | bonne |
| Jalapeños / Gratinage | 0,50 € / 1,50 € | bonne |
| Onion Rings x15 · Camembert x4 · Tenders x2 · Spicy Tenders x2 · Nuggets x4 | 2,90 € | **à vérifier** |
| Cordon Bleu x1 | 2,00 € | **à vérifier** |
| Boisson au choix | 1,50 € | bonne |
| Tiramisu / Cheesecake / Tarte au Daim | 3,50 € / 3,90 € / 3,90 € | bonne |

### 🔴 Prix des sauces — non tranché
L'affiche porte un badge « 2 € » à droite de la ligne VIANDES **et** un autre à droite de
la ligne SAUCES. Impossible de savoir si les sauces sont payantes.

**Décision prise en attendant** : les sauces sont affichées **sans prix** (comme sur l'ancien
site) et ne sont pas comptées dans le total du configurateur, qui le mentionne explicitement.
Rien n'est inventé. À trancher avant publication.
- **Année de création** (`foundingYear`) — renforce le référencement et les citations IA.
- **Allergènes** : actuellement « disponibles sur demande ». Les publier serait un plus.
- **Fiche Google Business** : le plus gros levier restant pour être trouvé et cité.
- **Instagram / Facebook**, commande en ligne ou livraison si pertinent.

---

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
