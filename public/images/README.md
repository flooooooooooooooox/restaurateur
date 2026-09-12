# Photos du site

Les fichiers servis sont les `.webp`. Ils sont référencés dans
`src/lib/site-data.ts` (`heroPhoto`, `gallery`, `posters`), avec leurs
dimensions réelles — à corriger si une image est remplacée, sinon la mise en
page saute au chargement.

| Fichier | Dimensions | Emplacement |
|---|---|---|
| `crousty-main.webp` | 759 × 1349 | Hero — la box tenue à la main |
| `salle.webp` | 1280 × 719 | Galerie — vue d'ensemble de la salle (pleine largeur) |
| `borne.webp` | 1080 × 1188 | Galerie — la borne de commande (portrait) |
| `boissons.webp` | 1080 × 893 | Galerie — la vitrine à boissons |
| `skyline.svg` | 1200 × 200 | Décor, généré par `scripts/gen-skyline.mjs` |

## Ajouter ou remplacer une photo
1. Déposer le fichier source ici (JPEG ou PNG, pleine résolution).
2. Convertir en WebP, 1600 px de large maximum, qualité ~82.
3. Renseigner le chemin, les dimensions et un **texte alternatif** décrivant ce
   que montre la photo dans `src/lib/site-data.ts`.
4. Supprimer le source une fois converti, pour ne pas le servir en double.

## Manquent encore
- Les deux affiches de la carte (tableau `posters`, déjà prêt)
- Le **logo** en fichier (PNG à fond transparent ou SVG)
