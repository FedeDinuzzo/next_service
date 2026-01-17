import { feedback } from "../../constants"; // Ajustá si está en otro path

const HomeStructuredData = () => {
  const baseUrl = "https://servicedrean.ar";
  const totalReviews = feedback.length;
  const averageRating = totalReviews
    ? feedback.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews
    : 5;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Service Drean",
    image: `${baseUrl}/opengraph-image.jpg`,
    "@id": baseUrl,
    url: baseUrl,
    telephone: "+54 911 3629-9090",
    priceRange: "$$",
    sameAs: ["https://www.instagram.com/service-drean"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Montevideo 1083",
      addressLocality: "Ciudad Autónoma de Buenos Aires",
      addressRegion: "CABA",
      postalCode: "C1019",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.598887,
      longitude: -58.392608,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "15:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: totalReviews.toString(),
      bestRating: "5",
    },
    review: feedback.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.content,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating.toString(),
        bestRating: "5",
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export default HomeStructuredData;
