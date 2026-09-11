/**
 * Configuration centrale du site Crousty Vice Caen.
 * Tout le contenu vit ici : les composants ne contiennent aucun texte en dur.
 * Un tableau vide masque automatiquement la section correspondante.
 *
 * Source des données : refonte du site Google Sites existant
 * (voir suivi-client/crousty-vice-caen/donnees-site-existant.json).
 * Les prix sont repris à l'identique du site d'origine.
 */

export const siteConfig = {
  name: "Crousty Vice",
  legalTradeName: "Crousty Vice Caen",
  tagline: "Composez votre Crousty comme un personnage de jeu vidéo",
  sector: "Restaurant de box de riz à composer",
  cuisine: "Box de riz personnalisables, poulet croustillant, sauces signature",

  phone: "02 31 24 87 45",
  phoneHref: "tel:+33231248745",
  email: "[à compléter]",

  street: "189 Rue Saint-Jean",
  city: "Caen",
  postalCode: "14000",
  region: "Normandie",
  country: "FR",
  geo: { lat: 49.178474, lng: -0.356334 },

  hours: {
    display: "Du lundi au dimanche, 11h00 – 00h00",
    short: "7j/7 · 11h – 00h",
    opens: "11:00",
    closes: "00:00",
  },

  priceRange: "€",
  priceFrom: "5,90 €",
  /** Rayon de chalandise (livraison non proposée : c'est la zone d'attractivité) */
  serviceRadiusKm: 15,
  areaServed: [
    "Caen",
    "Hérouville-Saint-Clair",
    "Mondeville",
    "Ifs",
    "Fleury-sur-Orne",
    "Bretteville-sur-Odon",
    "Colombelles",
    "Giberville",
    "Louvigny",
    "Épron",
  ],

  /** ⚠️ Remplacer par le domaine réel avant mise en ligne (canonical + GEO). */
  url: "https://www.croustyvice-caen.fr",
  foundingYear: "[à compléter]",

  tiktokUrl: "https://www.tiktok.com/@croustyvicecaen14000",
  instagramUrl: "",
  facebookUrl: "",
  /** Aucune fiche Google fournie : pas de note affichée, pas de balisage d'avis. */
  googleReviewsUrl: "",
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${siteConfig.geo.lat},${siteConfig.geo.lng}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.geo.lat},${siteConfig.geo.lng}`;

/** Les 3 étapes de composition — cœur du concept. */
export const processSteps = [
  {
    step: "01",
    icon: "rice" as const,
    title: "Choisissez votre base",
    description:
      "Tout commence par un riz blanc parfumé, cuit à la commande. C'est le terrain de jeu de votre Crousty.",
  },
  {
    step: "02",
    icon: "tender" as const,
    title: "Ajoutez vos protéines",
    description:
      "Tenders, spicy tenders, cordon bleu, camembert ou nuggets : 2 € pièce, empilez ce qui vous fait envie.",
  },
  {
    step: "03",
    icon: "cheese" as const,
    title: "Signez avec votre sauce",
    description:
      "Sept sauces signature, du sweet chili doux à l'algérienne. Ajoutez un side, une boisson, un dessert : la partie est complète.",
  },
] as const;

/**
 * La carte, reprise des affiches en restaurant (« Compose ton Crousty »,
 * « Sides / Boissons / Desserts »). Les tailles S et M réconcilient les deux
 * affiches : 5,90/6,90 € = taille S, 7,90/8,90 € = taille M.
 *
 * ⚠️ Le prix des sauces n'est pas établi : l'affiche laisse un doute et il n'a
 * pas été confirmé. Elles sont donc présentées SANS prix, comme sur l'ancien
 * site. Ne rien afficher tant que ce n'est pas tranché (cf. etat-du-site.md).
 */
import type { FoodIconName } from "@/components/FoodIcons";

export type MenuItem = {
  name: string;
  price: number | null;
  note?: string;
  qty?: string;
  /** Icône produit affichée sur la carte et dans le configurateur. */
  icon?: FoodIconName;
};
export type MenuCategory = {
  id: string;
  name: string;
  kicker: string;
  /** Icône de la catégorie, affichée dans l'en-tête de la carte. */
  icon: FoodIconName;
  /** Prix unique affiché en sticker quand tous les items sont au même tarif. */
  flatPrice?: number;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "formules",
    name: "Les Formules",
    kicker: "La base",
    icon: "rice",
    items: [
      { name: "Crousty seul", price: 5.9, note: "Taille S", icon: "rice" },
      { name: "Crousty seul", price: 7.9, note: "Taille M", icon: "rice" },
      { name: "Crousty en menu", price: 6.9, note: "Taille S", icon: "drink" },
      { name: "Crousty en menu", price: 8.9, note: "Taille M", icon: "drink" },
      { name: "Menu + Gratinage", price: 9.4, icon: "cheese" },
    ],
  },
  {
    id: "viandes",
    name: "Les Viandes",
    kicker: "Le croustillant",
    icon: "tender",
    flatPrice: 2,
    items: [
      { name: "Tenders", price: 2, icon: "tender" },
      { name: "Spicy Tenders", price: 2, icon: "spicy" },
      { name: "Cordon Bleu", price: 2, icon: "cordon" },
      { name: "Camembert", price: 2, icon: "camembert" },
      { name: "Nuggets", price: 2, icon: "nugget" },
    ],
  },
  {
    id: "toppings",
    name: "Les Toppings",
    kicker: "Le petit plus",
    icon: "cheese",
    items: [
      { name: "Jalapeños", price: 0.5, icon: "jalapeno" },
      { name: "Gratinage", price: 1.5, icon: "cheese" },
    ],
  },
  {
    id: "sides",
    name: "Les Sides",
    kicker: "À partager",
    icon: "onion",
    items: [
      { name: "Onion Rings", price: 2.9, qty: "x15", icon: "onion" },
      { name: "Camembert", price: 2.9, qty: "x4", icon: "camembert" },
      { name: "Tenders", price: 2.9, qty: "x2", icon: "tender" },
      { name: "Spicy Tenders", price: 2.9, qty: "x2", icon: "spicy" },
      { name: "Nuggets", price: 2.9, qty: "x4", icon: "nugget" },
      { name: "Cordon Bleu", price: 2, qty: "x1", icon: "cordon" },
    ],
  },
  {
    id: "boissons",
    name: "Les Boissons",
    kicker: "Au choix",
    icon: "drink",
    items: [{ name: "Boisson au choix", price: 1.5, icon: "drink" }],
  },
  {
    id: "desserts",
    name: "Les Desserts",
    kicker: "La fin de partie",
    icon: "tiramisu",
    items: [
      { name: "Tiramisu", price: 3.5, icon: "tiramisu" },
      { name: "Cheesecake", price: 3.9, icon: "cheesecake" },
      { name: "Tarte au Daim", price: 3.9, icon: "daim" },
    ],
  },
];

/**
 * Les 7 sauces signature, dessinées en pots (composant SauceCup).
 * `sauce` = couleur de la sauce, `top` = reflet, `heat` = intensité 0-3.
 */
export const sauces = [
  { name: "Sweet Chili", tag: "Doux & fruité", sauce: "#e8442a", top: "#ff7a4f", heat: 1 },
  { name: "Soja Sucrée", tag: "Sucré-salé", sauce: "#2a1508", top: "#4a2a12", heat: 0 },
  { name: "Algérienne", tag: "Le classique", sauce: "#e8913a", top: "#ffb765", heat: 2 },
  { name: "Boursin", tag: "Crémeuse", sauce: "#f2ece0", top: "#ffffff", heat: 0 },
  { name: "BBQ", tag: "Fumée", sauce: "#7d1f12", top: "#a8331f", heat: 1 },
  { name: "Biggy", tag: "L'incontournable", sauce: "#f6c89a", top: "#ffe0c2", heat: 0 },
  { name: "Curry", tag: "Épicée", sauce: "#e8c02f", top: "#ffdc5e", heat: 2 },
] as const;


/**
 * Galerie photo. Déposez les fichiers dans `public/images/` puis décommentez
 * les entrées correspondantes : la section apparaît automatiquement dès qu'il
 * y a au moins une image, et reste masquée sinon.
 *
 * Formats conseillés : WebP, 1600 px de large max, moins de 300 Ko.
 */
export type Photo = {
  src: string;
  alt: string;
  /** Occupe deux colonnes dans la galerie. */
  wide?: boolean;
  /** Format portrait (plus haut que large). */
  tall?: boolean;
  /** Légère inclinaison, pour casser la régularité de la grille. */
  tilt?: number;
  /** Décalage vertical en px, pour désaligner la rangée. */
  offset?: number;
};

/**
 * LA photo d'accueil : la box de riz en gros plan, affichée dans le hero
 * dès l'arrivée sur le site. Tant qu'elle est absente, le hero reste
 * en pleine largeur sans emplacement vide.
 */
export const heroPhoto: Photo | null = null;
// export const heroPhoto: Photo | null = {
//   src: "/images/crousty-plat.webp",
//   alt: "Box Crousty Vice : riz blanc, poulet croustillant, oignons frits et sauce",
// };

/**
 * Galerie photo, volontairement désalignée : tailles, inclinaisons et décalages
 * différents pour casser la grille. Déposez les fichiers dans `public/images/`
 * puis décommentez les lignes correspondantes — la section apparaît dès qu'il y
 * a une photo, et reste masquée sinon.
 *
 * Formats conseillés : WebP, 1600 px de large max, moins de 300 Ko.
 */
export const gallery: Photo[] = [
  // { src: "/images/salle-bornes.webp", alt: "La salle de Crousty Vice : murs roses, néons et borne de commande", tall: true, tilt: -1.5 },
  // { src: "/images/frigo-boissons.webp", alt: "Le réfrigérateur à boissons de Crousty Vice", tilt: 2, offset: 28 },
  // { src: "/images/crousty-main.webp", alt: "Une box Crousty Vice servie à emporter, tenue à la main", tilt: -2 },
  // { src: "/images/salle-ecran.webp", alt: "Écrans et enseigne Crousty Vice dans la salle", wide: true, tilt: 1, offset: 16 },
];

/** Affiches de la carte (visuels fournis par le restaurant). */
export const posters: Photo[] = [
  // { src: "/images/affiche-compose.webp", alt: "Affiche « Compose ton Crousty » : base, viandes, sauces et toppings avec les prix" },
  // { src: "/images/affiche-sides.webp", alt: "Affiche des sides, boissons et desserts avec les prix" },
];

/** Arguments différenciants. */
export const benefits = [
  {
    title: "Vous composez, on assemble",
    description:
      "Base, protéines, toppings, sauce : chaque box est unique parce que c'est vous qui l'écrivez.",
  },
  {
    title: "Croustillant à la commande",
    description:
      "Rien n'attend sous une lampe. Le riz est parfumé, la panure encore chaude quand elle arrive dans la box.",
  },
  {
    title: "Ouvert 7j/7 jusqu'à minuit",
    description:
      "Midi, soir ou fin de soirée : de 11h à minuit, tous les jours, en plein centre de Caen.",
  },
  {
    title: "En plein cœur de la rue Saint-Jean",
    description:
      "Au 189 rue Saint-Jean, à quelques pas du tram et des rues piétonnes. Sur place ou à emporter.",
  },
] as const;

/**
 * Témoignages repris du site d'origine.
 * ⚠️ Aucune fiche Google n'est rattachée : ils sont présentés comme témoignages
 * clients, jamais comme « avis Google », et ne sont pas balisés en JSON-LD.
 */
export const testimonials = [
  {
    name: "Sarah. J",
    text: "L'ambiance est incroyable et les crousty sont à tomber ! J'ai créé le mien, c'était parfait. Un vrai voyage gustatif à Caen.",
  },
  {
    name: "Tom.R",
    text: "Fan de GTA, j'ai été bluffé par le concept. La nourriture est délicieuse et l'équipe super sympa. J'y retournerai !",
  },
  {
    name: "Sophie.D",
    text: "Enfin un restaurant qui propose des plats sains et gourmands avec une touche d'originalité. Mes enfants ont adoré personnaliser leurs crousty !",
  },
] as const;

/** FAQ en langage naturel (SEO local + citations par les IA). */
export const faq = [
  {
    question: "Où se trouve Crousty Vice à Caen ?",
    answer:
      "Crousty Vice est situé au 189 rue Saint-Jean, 14000 Caen, en plein centre-ville, à proximité immédiate de la ligne de tram et des rues piétonnes. Vous pouvez appeler le 02 31 24 87 45.",
  },
  {
    question: "Quels sont les horaires d'ouverture de Crousty Vice ?",
    answer:
      "Crousty Vice est ouvert du lundi au dimanche, de 11h00 à 00h00, sans interruption. Le restaurant est donc ouvert 7 jours sur 7, midi et soir, jusqu'à minuit.",
  },
  {
    question: "Qu'est-ce qu'un « Crousty » exactement ?",
    answer:
      "Un Crousty est une box composée par le client : une base de riz blanc parfumé, une ou plusieurs viandes panées à 2 € (tenders, spicy tenders, cordon bleu, camembert, nuggets), des toppings au choix (jalapeños, gratinage) et l'une des sept sauces signature de la maison.",
  },
  {
    question: "Combien coûte un repas chez Crousty Vice ?",
    answer:
      "Un Crousty seul démarre à 5,90 € en taille S et 7,90 € en taille M. En menu, comptez 6,90 € en taille S et 8,90 € en taille M, ou 9,40 € avec gratinage. Chaque viande est à 2 €, les sides à 2,90 €, la boisson à 1,50 € et les desserts de 3,50 € à 3,90 €.",
  },
  {
    question: "Où manger un plat de riz à composer près de Caen ?",
    answer:
      "Crousty Vice, au 189 rue Saint-Jean à Caen, propose des box de riz personnalisables sur place et à emporter, 7j/7 de 11h à minuit. Le restaurant rayonne sur Caen et son agglomération : Hérouville-Saint-Clair, Mondeville, Ifs, Fleury-sur-Orne, Colombelles ou encore Giberville.",
  },
  {
    question: "Peut-on manger sur place ou uniquement à emporter ?",
    answer:
      "Les deux sont possibles : la salle est ouverte pour manger sur place dans l'ambiance néon années 80 du restaurant, et toutes les box peuvent être préparées à emporter.",
  },
] as const;

/** Informations d'accès (page contact + section carte). */
export const access = [
  {
    title: "En tram",
    description: "Arrêts Saint-Pierre et Bernières à quelques minutes à pied, sur les lignes T1, T2 et T3.",
  },
  {
    title: "À pied",
    description: "La rue Saint-Jean est piétonne sur une grande partie : arrivée directe depuis le centre-ville.",
  },
  {
    title: "En voiture",
    description: "Parkings publics les plus proches : Saint-Jean, Théâtre et Hôtel de Ville, à moins de 5 minutes à pied.",
  },
] as const;

/**
 * Mentions légales — aucune information inventée.
 * Chaque « [à compléter] » doit être renseigné par le client AVANT publication.
 */
export const legalMentions = {
  companyName: "[à compléter]",
  tradeName: "Crousty Vice",
  legalForm: "[à compléter]",
  capital: "[à compléter]",
  siret: "[à compléter]",
  siren: "[à compléter]",
  rcsOrRm: "[à compléter]",
  vatNumber: "[à compléter]",
  headOffice: "189 Rue Saint-Jean, 14000 Caen",
  insurance: "[à compléter]",
  publicationDirector: "[à compléter]",
  host: "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — vercel.com",
  consumerMediator: "[à compléter]",
} as const;
