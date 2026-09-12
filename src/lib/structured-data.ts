import { faq, menu, sauces, siteConfig, legalMentions } from "./site-data";

const geoMidpoint = {
  "@type": "GeoCoordinates",
  latitude: siteConfig.geo.lat,
  longitude: siteConfig.geo.lng,
};

const DESCRIPTION =
  "Crousty Vice est un restaurant de box de riz à composer situé au 189 rue Saint-Jean à Caen (Calvados, Normandie). Riz blanc parfumé, protéines panées croustillantes, toppings frais et sept sauces signature, dans une ambiance néon inspirée des années 80. Ouvert 7j/7 de 11h à minuit, sur place, à emporter et en livraison à Caen.";

/**
 * Fiche établissement (Restaurant — sous-type de FoodEstablishment).
 * Pas de balisage d'avis : Google interdit les avis auto-hébergés,
 * et aucune fiche Google n'est rattachée à ce site.
 */
export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteConfig.url}/#restaurant`,
    name: siteConfig.name,
    alternateName: siteConfig.legalTradeName,
    description: DESCRIPTION,
    slogan: siteConfig.tagline,
    url: siteConfig.url,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    image: `${siteConfig.url}/opengraph-image`,
    logo: `${siteConfig.url}/icon`,
    servesCuisine: siteConfig.cuisine,
    priceRange: siteConfig.priceRange,
    currenciesAccepted: "EUR",
    knowsLanguage: "fr-FR",
    acceptsReservations: "False",
    // Modes de service, et action de commande pointant vers la plateforme
    hasDeliveryMethod: [
      { "@type": "DeliveryMethod", name: "Livraison" },
      { "@type": "DeliveryMethod", name: "À emporter" },
      { "@type": "DeliveryMethod", name: "Sur place" },
    ],
    potentialAction: {
      "@type": "OrderAction",
      name: "Commander en ligne",
      target: {
        "@type": "EntryPoint",
        urlTemplate: siteConfig.uberEatsUrl,
        inLanguage: "fr-FR",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      deliveryMethod: { "@type": "DeliveryMethod", name: "Livraison" },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.street,
      addressLocality: siteConfig.city,
      postalCode: siteConfig.postalCode,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    geo: geoMidpoint,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${siteConfig.geo.lat},${siteConfig.geo.lng}`,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: siteConfig.hours.opens,
      closes: siteConfig.hours.closes,
    },
    // Zone d'attractivité : cercle géographique + communes nommées.
    // Les moteurs de réponse IA répondent par proximité.
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint,
        geoRadius: String(siteConfig.serviceRadiusKm * 1000),
        description: `${siteConfig.serviceRadiusKm} km autour de ${siteConfig.city}`,
      },
      ...siteConfig.areaServed.map((city) => ({ "@type": "City", name: city })),
    ],
    knowsAbout: [
      "restaurant à Caen",
      "box de riz à composer",
      "poulet croustillant et tenders",
      "restauration rapide rue Saint-Jean à Caen",
      "plat à emporter à Caen",
      "livraison de repas à Caen",
      "sauces signature maison",
    ],
    hasMenu: {
      "@type": "Menu",
      name: "La carte Crousty Vice",
      url: `${siteConfig.url}/la-carte`,
      inLanguage: "fr-FR",
      hasMenuSection: [
        ...menu.map((section) => ({
          "@type": "MenuSection",
          name: section.name,
          hasMenuItem: section.items.map((item) => ({
            "@type": "MenuItem",
            name: item.note ? `${item.name} — ${item.note}` : item.name,
            ...(item.price !== null
              ? {
                  offers: {
                    "@type": "Offer",
                    price: item.price.toFixed(2),
                    priceCurrency: "EUR",
                  },
                }
              : {}),
          })),
        })),
        {
          "@type": "MenuSection",
          name: "Les Sauces Signature",
          description: "Sept sauces maison, incluses dans chaque Crousty.",
          hasMenuItem: sauces.map((sauce) => ({
            "@type": "MenuItem",
            name: `Sauce ${sauce.name}`,
            description: sauce.tag,
          })),
        },
      ],
    },
    ...(legalMentions.siret !== "[à compléter]"
      ? {
          identifier: [
            { "@type": "PropertyValue", propertyID: "SIRET", value: legalMentions.siret },
          ],
        }
      : {}),
    sameAs: [
      siteConfig.tiktokUrl,
      siteConfig.instagramUrl,
      siteConfig.facebookUrl,
      siteConfig.uberEatsUrl,
    ].filter(Boolean),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.legalTradeName,
    inLanguage: "fr-FR",
    publisher: { "@id": `${siteConfig.url}/#restaurant` },
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
