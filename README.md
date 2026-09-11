# Crousty Vice Caen — site vitrine

Site du restaurant **Crousty Vice**, 189 rue Saint-Jean, 14000 Caen.
Refonte du site Google Sites existant, construite avec le skill `/site-artisan`.

- **Stack** : Next.js 16 (App Router) · Tailwind v4 · TypeScript · Leaflet/OpenStreetMap
- **Design** : variante V21 « Vice Néon » (sur-mesure, thème sombre néon années 80)
- **Contenu** : tout est centralisé dans [`src/lib/site-data.ts`](src/lib/site-data.ts)

## Démarrer
```bash
npm install
npm run dev
```

## Vérifier avant de livrer
```bash
npx tsc --noEmit && npm run lint && npm run build
```

## État du projet
👉 **[suivi-client/crousty-vice-caen/etat-du-site.md](suivi-client/crousty-vice-caen/etat-du-site.md)**
liste ce qui est fait et les **bloquants légaux** à compléter avant publication.

Les données extraites de l'ancien site sont dans
[`suivi-client/crousty-vice-caen/`](suivi-client/crousty-vice-caen/).

---

Ce dépôt est issu du template `site-artisan-template` ; les skills d'origine
(`/suivi-client`, `/site-artisan`, `/controle-final`) restent disponibles dans `.claude/skills/`.
La procédure générale de l'usine à sites est conservée dans [PROCEDURE.md](PROCEDURE.md).
