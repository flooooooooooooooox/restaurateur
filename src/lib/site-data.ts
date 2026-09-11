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
  priceFrom: "4,90 €",
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
    title: "Choisissez votre base",
    description:
      "Tout commence par un riz blanc parfumé, cuit à la commande. C'est le terrain de jeu de votre Crousty.",
  },
  {
    step: "02",
    title: "Ajoutez vos protéines",
    description:
      "Tenders, tenders spicy, cordon bleu, bouchée camembert ou nuggets : empilez ce qui vous fait envie, croustillant garanti.",
  },
  {
    step: "03",
    title: "Signez avec votre sauce",
    description:
      "Sept sauces signature, du sweet chili doux à l'algérienne. Une dose, deux doses : c'est vous qui décidez.",
  },
] as const;

/**
 * La carte. Prix strictement identiques à ceux du site d'origine.
 * `price: null` = pas de supplément affiché (inclus dans le Crousty).
 */
export type MenuItem = { name: string; price: number | null; note?: string };
export type MenuCategory = {
  id: string;
  name: string;
  kicker: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "base",
    name: "La Base",
    kicker: "Le point de départ",
    items: [{ name: "Riz blanc parfumé", price: 5.9 }],
  },
  {
    id: "toppings",
    name: "Les Toppings Frais",
    kicker: "Le petit plus",
    items: [
      { name: "Gratinage", price: 1.5 },
      { name: "Jalapeños", price: 0.5 },
    ],
  },
  {
    id: "proteines",
    name: "Les Protéines",
    kicker: "Le croustillant",
    items: [
      { name: "Tenders", price: 2 },
      { name: "Tenders « Spicy »", price: 2 },
      { name: "Cordon bleu", price: 2 },
      { name: "Bouchée Camembert", price: 2 },
      { name: "Nuggets", price: 2 },
    ],
  },
  {
    id: "menus",
    name: "Menus, Boissons & Desserts",
    kicker: "La formule complète",
    items: [
      { name: "Crousty seul", price: 4.9, note: "Taille S" },
      { name: "Crousty seul", price: 7.9, note: "Taille M" },
      { name: "Menu", price: 5.9, note: "Taille S" },
      { name: "Menu", price: 8.9, note: "Taille M" },
      { name: "Menu + Gratinage", price: 9.4 },
      { name: "Boisson au choix", price: 1.5 },
      { name: "Tiramisu", price: 3.5 },
      { name: "Tarte au Daim / Cheesecake", price: 3.9 },
    ],
  },
];

/**
 * Les 7 sauces signature, présentées en carte visuelle synthétique.
 * `from`/`to` = dégradé de la pastille, `heat` = intensité 0-3.
 */
export const sauces = [
  { name: "Sweet Chili Doux", tag: "Doux & fruité", from: "#ff7a59", to: "#ff2e88", heat: 1 },
  { name: "Soja Sucrée", tag: "Sucré-salé", from: "#8b5a2b", to: "#3d2414", heat: 0 },
  { name: "Algérienne", tag: "Le classique", from: "#ffb23f", to: "#e04b1f", heat: 2 },
  { name: "Boursin", tag: "Crémeuse", from: "#f6f0ff", to: "#b9a7d8", heat: 0 },
  { name: "BBQ", tag: "Fumée", from: "#a8321c", to: "#4a140c", heat: 1 },
  { name: "Biggy", tag: "L'incontournable", from: "#ffd08a", to: "#e8863f", heat: 0 },
  { name: "Curry", tag: "Épicée", from: "#ffd447", to: "#c07a10", heat: 2 },
] as const;

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
      "Un Crousty est une box composée par le client : une base de riz blanc parfumé, une ou plusieurs protéines panées (tenders, tenders spicy, cordon bleu, bouchée camembert, nuggets), des toppings frais et l'une des sept sauces signature de la maison.",
  },
  {
    question: "Combien coûte un repas chez Crousty Vice ?",
    answer:
      "Un Crousty seul démarre à 4,90 € en taille S et 7,90 € en taille M. Le menu complet est à 5,90 € en taille S et 8,90 € en taille M, et 9,40 € avec gratinage. Les desserts sont à 3,50 € et 3,90 €, la boisson à 1,50 €.",
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
