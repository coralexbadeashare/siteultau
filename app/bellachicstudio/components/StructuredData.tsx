import Script from "next/script";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Bella Chic Studio",
  description: "Salon de înfrumusețare profesional în Militari, București. Oferim servicii complete de coafor, manichiură, pedichiură, tratamente faciale și makeup.",
  url: "https://bellachicstudio.ro",
  telephone: "+40314251011",
  email: "bellachicstudio@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Strada Cupolei nr. 5B",
    addressLocality: "București",
    addressRegion: "București",
    postalCode: "061344",
    addressCountry: "RO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.424577,
    longitude: 26.030851,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  servesCuisine: "Beauty Services",
  acceptsReservations: true,
  image: [
    "https://bellachicstudio.ro/images/salon-1.jpg",
    "https://bellachicstudio.ro/images/salon-2.jpg",
    "https://bellachicstudio.ro/images/salon-3.jpg",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "512",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Maria P.",
      },
      reviewBody: "Cel mai bun salon din Militari! Personal profesionist și atmosferă plăcută.",
    },
  ],
  sameAs: [
    "https://www.facebook.com/bellachicstudio",
    "https://www.instagram.com/bellachicstudio",
    "https://www.youtube.com/bellachicstudio",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicii de înfrumusețare",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Servicii Coafor",
          description: "Tuns, vopsit, coafat pentru toate ocaziile",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Manichiură și Pedichiură",
          description: "Manichiură clasică, semipermanentă, gel și nail art",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tratamente Faciale",
          description: "Tratamente profesionale pentru toate tipurile de ten",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Makeup Profesional",
          description: "Machiaj pentru evenimente, nunți și ocazii speciale",
        },
      },
    ],
  },
};

export default function StructuredData() {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}