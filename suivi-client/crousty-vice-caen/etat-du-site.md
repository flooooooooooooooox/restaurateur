# Crousty Vice Caen — état du site

**Statut** : 🟡 construit, **NON publiable en l'état** (informations légales manquantes).
**Variante de design** : V21 « Vice Néon » (sur-mesure, thème sombre néon — marquée `🔒 utilisée`).
**Stack** : Next.js 16 (App Router) · Tailwind v4 · TypeScript · Leaflet/OpenStreetMap.

---

## ✅ Ce qui est fait

**Pages** — Accueil, La carte, Le concept, Nous trouver, Mentions légales,
Politique de confidentialité, 404 personnalisée.

**Sections retenues** (choix du client) :
- Menu design + configurateur en 3 étapes
- Carte des sauces synthétique (7 sauces, pastilles de couleur + intensité)
- Témoignages clients
- Carte OpenStreetMap + accès (tram / à pied / voiture)
- FAQ (6 questions géolocalisées)
- Barre d'action fixe mobile : Appeler · Itinéraire · Carte

**Contact** : téléphone seul, click-to-call partout. Pas de formulaire, donc
**aucune clé API à gérer** et aucune donnée personnelle collectée.

**Prix** : repris **à l'identique** du site Google Sites d'origine.

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
- **Photos** : aucune image du restaurant n'a pu être récupérée (le proxy réseau bloquait
  `lh3.googleusercontent.com`). Les 12 URLs sont dans `images-a-recuperer.txt`.
  Le site fonctionne sans, mais gagnera beaucoup avec de vraies photos.

## 🟡 À faire confirmer par le client
- **Incohérence de prix héritée du site d'origine** : « La Base — Riz blanc parfumé 5,90 € »
  alors que « Crousty seul taille S » est à 4,90 €. Repris tel quel, à trancher.
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
