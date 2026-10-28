// LocalBusiness structured data — helps Google show rich results:
// business name, address, phone, hours, services in search results.
// Replace the TODOs with real values when available.

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Plomberie Archimède",
  description:
    "Plombier professionnel à Valbonne et ses environs. Dépannage d'urgence, installation sanitaire, rénovation salle de bain. Devis gratuit.",
  url: "https://plomberie-archimede.fr",
  telephone: "+33685286520",
  email: "plomberiearchimede@gmail.com",
  image: "https://plomberie-archimede.fr/images/logo.png",
  logo: "https://plomberie-archimede.fr/images/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Valbonne",
    addressRegion: "Alpes-Maritimes",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6408,
    longitude: 7.0059,
  },
  areaServed: [
    { "@type": "City", name: "Valbonne" },
    { "@type": "City", name: "Sophia Antipolis" },
    { "@type": "City", name: "Antibes" },
    { "@type": "City", name: "Mougins" },
    { "@type": "City", name: "Grasse" },
    { "@type": "City", name: "Biot" },
    { "@type": "City", name: "Vallauris" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
      description: "Urgences plomberie",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de plomberie",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dépannage d'urgence",
          description:
            "Intervention rapide pour fuites d'eau, canalisations bouchées, dégâts des eaux.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Plomberie générale",
          description:
            "Installation et réparation robinetterie, sanitaires, salle de bain clé en main, chauffe-eau.",
        },
      },
    ],
  },
  sameAs: ["https://www.instagram.com/plomberie.archimede"],
  priceRange: "€€",
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
