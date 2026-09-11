# site-artisan-template — Usine à sites d'artisans

Dépôt **template** contenant 3 skills Claude Code qui produisent, gèrent et valident des sites
vitrines d'artisans, de bout en bout.

## 🚀 Utilisation (pour chaque nouveau client)
1. Clique **« Use this template »** (en haut du dépôt) → crée le repo du client (ex. `plomberie-martin`).
2. Ouvre une **session Claude Code** sur ce nouveau repo.
3. Lance **`/suivi-client`** → « nouveau client ».
4. Réponds au questionnaire. Le système :
   - crée le **dossier client**,
   - choisit une **variante de design** libre,
   - construit le site via **`/site-artisan`**,
   - valide via **`/controle-final`**,
   - te guide pour le **déploiement** (Vercel + Resend + domaine).

> Pense à cocher **Settings → Template repository** sur ce dépôt pour activer « Use this template ».

## 🧩 Les 3 skills
| Skill | Rôle |
|---|---|
| **`/suivi-client`** | Chef de projet : dossier client, avancement, ce qui manque, messages à envoyer |
| **`/site-artisan`** | Développeur : construit le site (secteur→SEO, 20 variantes design, design « wow », conversion) |
| **`/controle-final`** | Contrôle qualité + légal avant livraison (verdict GO / NO-GO) |

## ✅ Ce que produit un site généré
Hero animé, services, galerie avant/après glissable, avis Google, carte de zone (OpenStreetMap),
FAQ, formulaire de contact (email via Resend), SEO complet (données structurées, sitemap, robots,
OpenGraph, horaires), mentions légales + RGPD conformes (droit français), footer riche, barre
d'action mobile, animations, 100 % responsive.

## 🔒 Bonnes pratiques intégrées
- Jamais d'infos inventées (légal, avis, note) → placeholders visibles
- Conformité légale française bloquante avant publication
- Aucune clé API committée (variables d'environnement uniquement)
- Accessibilité (alt, `prefers-reduced-motion`, contraste, focus)

## 📂 Structure
```
.claude/skills/
├── suivi-client/     # gestion de la relation client
├── site-artisan/     # construction du site (+ squelette de code dans template/)
└── controle-final/   # audit qualité + légal avant livraison
```
