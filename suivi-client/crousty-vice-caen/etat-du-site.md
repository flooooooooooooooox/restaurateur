# Crousty Vice Caen — état du site

**Statut** : 🟡 construit, **NON publiable en l'état** (informations légales manquantes).
**Variante de design** : V21 « Vice Néon », **reprise sur la direction artistique des affiches
du restaurant** : rose dominant, titres graffiti cernés (Luckiest Guy), accents manuscrits
(Pacifico), panneaux jaune citron et menthe, stickers de prix, skyline et palmiers en silhouette.
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

**Contact** : téléphone seul, click-to-call partout. Pas de formulaire, donc
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

**Pas d'`aggregateRating`** dans le JSON-LD et pas de mention « avis Google » :
aucune fiche Google n'a été fournie, les 3 avis sont présentés comme témoignages.

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
- **Photos — 3 en ligne, en basse résolution.** Le client a fourni un montage
  (`suivi-client/crousty-vice-caen/sources/montage-photos-original.webp`) qui a été découpé
  automatiquement en 3 fichiers :
  | Fichier | Découpe source | Fichier livré | Emplacement |
  |---|---|---|---|
  | `crousty-main.webp` | 228 × 403 | 456 × 806 | Hero (photo d'accueil) |
  | `salle-bornes.webp` | 473 × 521 | 946 × 1042 | Galerie |
  | `frigo-boissons.webp` | 228 × 188 | 456 × 376 | Galerie |

  **Traitement de netteté appliqué** : agrandissement Lanczos ×2, masque flou
  (rayon 2,2 / 145 %) et léger gain de contraste local, réencodage WebP qualité 95.
  `next.config.ts` autorise la qualité 95 (Next 16 réencode en 75 par défaut, ce qui
  adoucissait nettement ces petites images) et les composants la demandent explicitement.

  ⚠️ Cela **récupère du piqué mais n'invente pas de détail**. Les fichiers d'origine
  restent très petits pour du web, et l'affichage est borné en conséquence (hero 340 px,
  galerie en 2 colonnes dans un conteneur `max-w-3xl`). **Demander les originaux au
  client** (au moins 1600 px de large) : c'est le seul vrai gain de qualité restant.
  Il suffira de remplacer les fichiers et de corriger `w`/`h` dans `src/lib/site-data.ts`.

  Manquent encore : la box de riz en gros plan (le visuel signature), les 2 affiches de la
  carte (tableau `posters`, prêt), et **le logo**. Les 12 URLs de l'ancien site sont dans
  `images-a-recuperer.txt`.

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

## Commandes
```bash
npm run dev     # développement
npm run build   # build de production
npm run lint    # ESLint
```

Toutes les données du site sont dans **`src/lib/site-data.ts`** : c'est le seul fichier
à modifier pour changer un prix, un horaire, une sauce ou un texte.
